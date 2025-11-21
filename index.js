let gameOver = false;
let turn = 1;
let currentPic = 0;
const card = ["resources/bear.png", "resources/football.png", "resources/bear.png",
     "resources/bear.png", "resources/bear.png", "resources/bear.png",
      "resources/bear.png", "resources/bear.png", "resources/bear.png",
    "resources/bear.png",
]
const pic = document.getElementsByClassName("inside_div")



function user_clicks(){
    let rIndex = Math.floor(Math.random() * 10) + 1;
    //console.log(rIndex)
    while(currentPic!=20) {
        pic[currentPic].onclick = function() {
            this.style.background=`url(${card[0]})`
        }
        currentPic++
    }
    //pic.style.background = `url(${card[0]})`
    
}

function assignImages(pic, rIndex) {
    cards = getRandomElement(card)
}