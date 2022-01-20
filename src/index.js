
function renderOneDog(dog) {
    let card = document.createElement('p')
    card.className = 'card'
    card.innerHTML = `
        <img src="${dog}">
        `
    document.getElementById("dog-image-container").append(card)
}

function getAllDogs2() {
    const breedList = document.getElementById("dog-breeds");
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(obj => obj.json())
    .then(dogData => {
        const arrayOfBreeds = Object.keys(dogData.message);

        function addBreedToUI(array) {
            array.forEach((breed) => {
                const newDog = document.createElement('li')
                newDog.innerText = breed;
                breedList.append(newDog)

                newDog.addEventListener("click", function(e) {
                    newDog.style.color = "turquoise";
                })
            })
        }
        

        const dropDown = document.getElementById("breed-dropdown");
        dropDown.addEventListener("change", (event) => {
            //console.log(event.target.value);
            
            while (breedList.firstChild) {
                breedList.removeChild(breedList.firstChild);
            }
            
            const selectedBreeds = arrayOfBreeds.filter((breed) =>
             breed.substring(0, 1) === event.target.value
            );
            addBreedToUI(selectedBreeds);

        })
    })
    
}


function getAllDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(obj => obj.json())
    .then(dogData => {
        for (let i = 0; i < dogData.message.length; i++) {
            renderOneDog(dogData.message[i])
        }
    })
    
}


function initalize() {
    getAllDogs()
    getAllDogs2()
}
initalize()




//Emiley's way

/*
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
    .then((resp) => json.())
    .then((data) => {
        const imagesArray = data.message;
        const imageContainer = document.getElementById("dog-image-container")
        imagesArray.forEach((image) => {
            const imageElement = document.createElement("img");
            imageElement.src = image;
            imageElement.setAttribute("src", image);
            imageContainer.append(imageElement);
        })
    })

    */