'use strict'

let maxIterations
let iterator
const textContent = document.querySelector('#typewriter').innerText
const stringLength = textContent.length
const typeText = document.getElementById('typewriter')
typeText.innerHTML = ' '

window.addEventListener('DOMContentLoaded', start)

function start() {
  document.querySelector('button').addEventListener('click', init)
}

function init() {
  maxIterations = stringLength
  iterator = 0
  typeLoop()
}

// If we haven't looped through all of the characters, then show the next character in the string with a delay of 1/2 second
// else play the "new typewriter line" sound
function typeLoop() {
  if (iterator < maxIterations) {
    const character = textContent[iterator]
    document.querySelector('#typewriter').innerHTML += character
    playSound(character)
    iterator++
    setTimeout(typeLoop, 500)
  } else {
    document.getElementById('typelast').play()
  }
}

// Play the sound corresponding to the character
// Spaces give the sound "typespace", while other characters gives a random choice of the sounds "typekey1" or "typekey2"
function playSound(character) {
  let sound
  let num = Math.random()
  switch (character) {
    case ' ':
      sound = 'typespace'
      break
    default:
      if (num < 0.5) {
        sound = 'typekey1'
      } else {
        sound = 'typekey2'
      }
      break
  }
  console.log(sound)
  document.getElementById(sound).play()
}
