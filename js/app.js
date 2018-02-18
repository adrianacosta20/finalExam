const dogApi = 'https://dog.ceo/api/breeds/list'
const dogImagesApi = 'https://dog.ceo/api/breed/hound-{breedName}/images'
const selectBreed = document.querySelector("select")
const viewDog = document.querySelector('#viewDog')
const breedImage = document.querySelector('img') 

$.ajax({
    type: 'GET',
    url: dogApi,
    dataType: 'json',
    success:(data)=>{
        for(let i in data.message){
        selectBreed.innerHTML +=`
        <option value="${data.message[i]}">${data.message[i]}</option>
        `
        }
    } 

})

viewDog.addEventListener('click', function(){
const breedName = selectBreed.value
const dogImagesApi = `https://dog.ceo/api/breed/${breedName}/images`

$.ajax({
    type: 'GET',
    url: dogImagesApi,
    dataType: 'json',
    success:(data)=>{
        console.log(data)
        breedImage.setAttribute("src", data.message[0])
         }
})

})