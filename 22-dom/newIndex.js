let btn = document.querySelector('button')
let randEmoji = ["🌮", "🍔", "🥥", "🍟"][Math.floor(Math.random() * 4)]
let dolphinBtn = document.querySelector('#other-button')

dolphinBtn.addEventListener('click', (event) => {
  console.log('Dolphin Button')
})

btn.addEventListener('click', (event) => {
  console.log('fuck')
})

let liElements = document.querySelectorAll('li')

ulTag = document.querySelector('ul')
btn.addEventListener('click', (event) => {
  console.log('button')
  ulTag.innerHTML += `<li>${randEmoji}</li>`
});

let emojiList = ["🌮", "🍔", "🥥", "🍟"];

ulTag.addEventListener('click', (event) => {
  console.log(event.target.tagName)
  if (event.target.innerText === "🌮") {
    event.target.innerText = `🥥`
  }
  else if (event.target.tagName === 'LI') {
    console.log('you clicked an li')
    // event.target.style = 'background: red'
    event.target.style = 'transition: background .5s; border-radius: 50px; animation: enter 0.25s ease-out;'
  }
})

// document.addEventListener('click', (event) => {
//   if (event.target.tagName === 'LI') {
//     liSelected = event.target
//     console.log(liSelected)
//     ulTag.innerHTML += `<li>🌮</li>`
//     liSelected.style = 'background: pink'
//     // event.target.style = "background: pink"
//   }
//   else {
//     event.target.innerHTML += ` 🌮`
//   }
// })

// document.addEventListener('scroll', (event) => {
//   console.log('fuck')
// })
