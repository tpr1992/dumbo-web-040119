let ulTag = document.querySelector('ul')



function buttonClicked() {
  let promise = fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then((res) => {
    console.log(res.message)
    // slapItOnTheDOM(res)
    ulTag.innerHTML += makeDogCard(res)
  })
}

document.addEventListener('DOMContentLoaded', (event) => {
  let button = document.getElementById('hello-button')
  let dogArea = document.querySelector('.dogs js-dogs')
  button.addEventListener('click', (event) => {
    buttonClicked()
  })
})


const otherCard = (dog) => {
  `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${dog.message}" alt="Card image cap">
  <div class="card-body">
  <h5 class="card-title">Status: ${dog.status}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  </div>`
}



const makeDogCard = (dog) => {
  return `
  <li><img src="${dog.message}"></img></li>`
}
