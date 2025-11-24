let gameOver = false;
let turn = 1;
let currentPic = 0;
let cardsClicked = 0;
const card = ["resources/bear.png", "resources/football.png", "resources/leafs.png",
     "resources/mouse.png", "resources/pie.png", "resources/pumpkin.png",
      "resources/scarecrow.png", "resources/soccer.png", "resources/turkey.png",
    "resources/wind.png",
]
let usedIndex = [];
let twoSelected = [];
let imageSrcs = ["","","","","","","","","","","","","","","","","","","",""];
const pic = document.getElementsByClassName("inside_div");




function user_clicks(){
    while(currentPic!=20) {
        pic[currentPic].onclick = function() {
            let cell = Number(this.id.replace("row",""))-1;
            console.log(cell)
            cardsClicked++

            // Chooses a random index
            let rIndex = Math.floor(Math.random() * 10) + 0;
            
            // Chooses a random index again if the index is already used
            if(usedIndex.length!=10) {    
                while(usedIndex.includes(rIndex)) {
                    rIndex = Math.floor(Math.random() * 10) + 0;
                }
            } else {
                usedIndex=[]
            }
           
            // Adds the index used to a list of used indexes
            usedIndex.push(rIndex)
            
            /* Changing from black background to image when clicked
               Background is dependent on if one has already been assigned or not
            */
            if(imageSrcs[cell] == "") {
                this.style.background=`url(${card[rIndex]}) no-repeat center`
                imageSrcs[cell] = card[rIndex];
            } else {
                this.style.background=`url(${imageSrcs[cell]}) no-repeat center`
            }
            this.style.backgroundSize="cover";

            // Resetting the cards after two cards are selected
            if(cardsClicked==3) {
                for(let i=0;i<pic.length;i++) {
                    pic[i].style.backgroundImage="none";
                    pic[i].style.backgroundColor="black";
                }
                cardsClicked=0
            }
        }
        currentPic++
    }
    //pic.style.background = `url(${card[0]})`
    
}

/*function assignImages(pic, rIndex) {
    cards = getRandomElement(card)
}*/