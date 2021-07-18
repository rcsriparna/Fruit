'use strict'

//const prompt = require('prompt-sync')({sigint: true});

// D R Y

let v = 0
let money = 10
let costPerSpin = 1

let reels=[]  //reels is an array of reel objects (each has a position, a set of fruits, and a reference to its DIV)

let reelDivs = document.getElementsByClassName('reel') //Get all the (3) Divs from the HTML

let reelHeight = reelDivs[0].scrollHeight

for (let i = 0; i < reelDivs.length; i++) {
  reels[i]={} //initialise a new object for to hold everything about this reel
  reels[i].position = 0 //set the position to 0  
  reels[i].fruits = Array.from(reelDivs[i].innerHTML) //Split the string of fruits into an array  
  reels[i].div=reelDivs[i] //hold a reference in each reel object to the DIV
  reels[i].div.innerHTML+=reels[i].div.innerHTML  //Double up the fruits on the reels to allow us to wrap at the very end (and still see fruits in the window)
  
}

let fruitHeight = reelHeight/reels[0].fruits.length  //work out the height (in pixels) of 1 fruit



function spinReels () {
  console.log('You have £' + money)
  prompt('Press enter to spin the wheels')

  money--

  let p1 = Math.floor(Math.random() * 10)
  let p2 = Math.floor(Math.random() * 10)
  let p3 = Math.floor(Math.random() * 10)

  console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])

  spin()

  if (checkReelsMatch(reel1[p1], reel2[p2], reel3[p3])) {
    console.log('You win :o)')
    if (reel1[p1] == '🍏') {
      money = money + 2 * 10
      console.log('£20')
    } else if (reel1[p1] == '🍌') {
      money = money + 3 * 10
      console.log('£30')
    } else if (reel1[p1] == '🍒') {
      money = money + 5 * 10
      console.log('£50')
    } else if (reel1[p1] == '🍇') {
      money = money + 20 * 10
      console.log('£200')
    } else if (reel1[p1] == '🥭') {
      money = money + 30 * 10
      console.log('£300')
    }
  } else console.log('You lose')
  //money -=10
}


function checkReelsMatch (a, b, c) {
  if (a == b && b == c) {
    return true
  }
}


function spin(){

  for (let i = 0; i < reels.length; i++) {
    
    let r=reels[i]
    r.div.scrollTop = r.position * fruitHeight  //calculate the offset in fruit heights
    r.position +=0.1 //this is in 'fruits'
    
    if (r.position>r.fruits.length){r.position=0}  //wrap around when we reach the end of the reel
    
  }

  requestAnimationFrame(spin)


}
function hold(){
  let holdReel = document.getElementsByClassName('reel_button')


}
