let gameOver = false;
let turn = 0;
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
let hasMatched;
let p1score=0;
let p2score=0;
let p1ScoreShown=document.getElementById("p1score");
let p2ScoreShown=document.getElementById("p2score");

function user_clicks(){
    while(currentPic!=20) {
        pic[currentPic].onclick = function() {
            // Gets cell id and cell index
            let cellId = this.id;
            let cell = Number(this.id.replace("row",""))-1;

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

            // Adds the selected cell id to a list of both selected
            let selection1;
            let selection2;
            if(twoSelected.length==2) {
                selection1 = document.getElementById(twoSelected[0]).style.backgroundImage;
                selection2 = document.getElementById(twoSelected[1]).style.backgroundImage;
                if(selection1 == selection2) {
                    hasMatched=true
                    if(turn==0) {
                         p1ScoreShown.textContent = p1score++;
                    } else {
                         p2ScoreShown.textContent = p2score++;
                    }
                }
            } else {
                twoSelected.push(cellId)
            }
            
            /* Changing from black background to image when clicked
               Background is dependent on if one has already been assigned or not
            */
            if(!this.style.background) {
                 if(imageSrcs[cell] == "") {
                     this.style.background=`url(${card[rIndex]}) no-repeat center`
                     imageSrcs[cell] = card[rIndex];
                 } else {
                     this.style.background=`url(${imageSrcs[cell]}) no-repeat center`
                 }
                 this.style.backgroundSize="cover";
            }

            // Resetting the cards after two cards are selected
            if(cardsClicked==2) {
                let selection1id = document.getElementById(twoSelected[0]);
                let selection2id = document.getElementById(twoSelected[1]);
                if (!hasMatched) {
                    selection1id.style.backgroundImage="none";
                    selection1id.style.backgroundColor="black";
                    selection2id.style.backgroundImage="none";
                    selection2id.style.backgroundColor="black";
                } else {
                    hasMatched=false
                }
                twoSelected=[]
                twoSelected.push(cellId)
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
