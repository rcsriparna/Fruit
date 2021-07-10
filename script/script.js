'use strict'

//const prompt = require('prompt-sync')({sigint: true});

// D R Y

let v = 0
let money = 10
let costPerSpin = 1


let reel1 =[]
let reel2 =[]
let reel3 =[]
reel1 = Array.from(document.getElementById("reel1").innerHTML)
console.log(reel1)

let reelHeight = document.getElementById("reel1").scrollHeight
console.log(reelHeight)
//while(money>costPerSpin)
function spinReels () {
  console.log('You have £' + money)
  prompt('Press enter to spin the wheels')

  money--

  let p1 = Math.floor(Math.random() * 10)
  let p2 = Math.floor(Math.random() * 10)
  let p3 = Math.floor(Math.random() * 10)

  console.log(reel1[p1] + ' ' + reel2[p2] + ' ' + reel3[p3])


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

//console.log('You are out of money')
/*
function checkReelsMatch(p1,p2,p3) {
    if (check3thesame(p1,p2,p3)){
        return true
    }
    else {
        return false
    }
}*/
function checkReelsMatch (a, b, c) {
  if (a == b && b == c) {
    return true
  }
}
/*
function htmlDimention () {
  let element = document.getElementsByClassName('reel')
  element[0].offsetHeight
  console.log(
    element[0].offsetHeight,
    element[0].scrollHeight,
    element[0].getBoundingClientRect()
  )
  //console.log("spinning");
}*/
function spin(){
  let reels = document.getElementsByClassName('reel')
  
  //reels.forEach(reel => {
  //   reel.scrollTop = v
  //});
  for (let index = 0; index < reels.length; index++) {
    const reel = reels[index]
    //let interval = setInterval(function () {
      //v = v + 1
      reel.scrollTop += 1
      if (reel.scrollTop >= reelHeight){
        reel.scrollTop =0
      }
   // }, 1000 / 25)
   // setTimeout(function(){ clearInterval(interval)}, 9000)
   requestAnimationFrame(spin)
  }

  //p1= Math.floor(Math.random()*10)
  //spin[p1].

  //setInterval(spinning, 100);
  //setTimeout(slotTimeout1, 2000);
}
function hold(){
  let holdReel = document.getElementsByClassName('reel_button')

  
  //this.singleFruitHeight = this.reels[0].div.scrollHeight / (reelLength *2) //The height of just one fruit symbol

}
