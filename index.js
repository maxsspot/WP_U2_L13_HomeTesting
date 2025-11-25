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
            // Gets cell id and cell index
            let cellId = this.id;
            let cell = Number(this.id.replace("row",""))-1;

            cardsClicked++
            console.log(cardsClicked)

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
            if(twoSelected.length==2) {
                let selection1 = document.getElementById(twoSelected[0]).style.backgroundImage;
                let selection2 = document.getElementById(twoSelected[1]).style.backgroundImage;
                if(selection1 == selection2) {
                    console.log("its a match!")
                }
            } else {
                twoSelected.push(cellId)
            }
            
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
                let selection1id = document.getElementById(twoSelected[0]);
                let selection2id = document.getElementById(twoSelected[1]);
                /*console.log(twoSelected)
                console.log(selection1id)
                console.log(selection2id)*/
                selection1id.style.backgroundImage="none";
                selection1id.style.backgroundColor="black";
                selection2id.style.backgroundImage="none";
                selection2id.style.backgroundColor="black";
                twoSelected=[]
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