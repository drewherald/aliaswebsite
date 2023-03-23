//contact section

let textBox = document.querySelector(".live");
let replace = document.querySelector(".comments");
const form = document.createElement("div");
form.innerHTML = `
    <textarea name="comments" id="comments" cols="30" rows="5" placeholder="comments"></textarea>
`;
textBox.addEventListener("click", function () {
  textBox.replaceChild(form, replace);
});


//featured partner 1

let backArrow = document.getElementById("backArrow");
let frontArrow = document.getElementById("frontArrow");
let oneCounter = 1;
const proOne = document.getElementById("proOne");
let oldCount;

backArrow.addEventListener("click", function(){

    if(oneCounter!=1){
      oldCount = oneCounter;
      oneCounter--;
    }else if(oneCounter===1){
      oldCount = oneCounter;
      oneCounter = 7;
    }
    for(let i=1;i<=7;i++){
      if(oneCounter===i){
        const newPic = document.querySelector(`#Crescentia${i}`);
        const oldPic = document.querySelector(`#Crescentia${oldCount}`);
        oldPic.style.display = "none";
        newPic.style.display = "inline";
      }
    }
   
});



frontArrow.addEventListener("click", function(){

  if(oneCounter!=7){
    oldCount = oneCounter;
    oneCounter++;
  }else if(oneCounter===7){
    oldCount = oneCounter;
    oneCounter = 1;
  }
  for(let i=1;i<=7;i++){
    if(oneCounter===i){
      const newPic = document.querySelector(`#Crescentia${i}`);
      const oldPic = document.querySelector(`#Crescentia${oldCount}`);
      oldPic.style.display = "none";
      newPic.style.display = "inline";
    }
  }
 
});


//featured partner 2

let rearArrow = document.getElementById("rearArrow");
let forwardArrow = document.getElementById("forwardArrow");
let twoCounter = 1;
let twoOld;
const proTwo = document.getElementById("proTwo");


rearArrow.addEventListener("click", function(){

    if(twoCounter!=1){
      twoOld = twoCounter;
      twoCounter--;
    }else if(twoCounter===1){
      twoOld = twoCounter;
      twoCounter = 9;
    }
    for(let i=1;i<=9;i++){
      if(twoCounter===i){
        const newPic = document.querySelector(`#Payflow${i}`);
        const oldPic = document.querySelector(`#Payflow${twoOld}`);
        oldPic.style.display = "none";
        newPic.style.display = "inline";
      }
    }
   
});



forwardArrow.addEventListener("click", function(){

  if(twoCounter!=9){
    twoOld = twoCounter;
    twoCounter++;
  }else if(twoCounter===9){
    twoOld = twoCounter;
    twoCounter = 1;
  }
  for(let i=1;i<=9;i++){
    if(twoCounter===i){
        const newPic = document.querySelector(`#Payflow${i}`);
        const oldPic = document.querySelector(`#Payflow${twoOld}`);
        oldPic.style.display = "none";
        newPic.style.display = "inline";
    }
  }
 
});


//hamburger menu mobile
function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.querySelector(".whoa");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.src = "photos/backIMG.png";
  } else {
    x.style.display = "block";
    y.src = "photos/backIMG.jpg";
  }
 
}

//touch screen functionality


const photoCard = document.querySelector("#partnerOne");
const cards = Array.from(document.querySelectorAll(".slide")); 

const photoCard2 = document.querySelector("#partnerTwo");
const cards2 = Array.from(document.querySelectorAll(".slide2")); 

let isDragging = false,
  startPos = 0,
  curTranslate = 0,
  prevTranslate = 0,
  animateID = 0,
  prevIndex = 7;
  curIndex = 1;

  let isDragging2 = false,
  startPos2 = 0,
  curTranslate2 = 0,
  prevTranslate2 = 0,
  animateID2 = 0,
  prevIndex2 = 9;
  curIndex2 = 1;

cards.forEach((slide, index) => {
  const slideImage = slide;
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());

  //mobile touch events
  
  slide.addEventListener("touchstart", touchStart(index));

  slide.addEventListener("touchend", function touchEnd(){
    isDragging = false;
    cancelAnimationFrame(animateID);

    const movedBy = curTranslate - prevTranslate;
    console.log(curTranslate);
    console.log(prevTranslate)
    const whtDots = Array.from(document.querySelectorAll(".circles")); 
    const bluDots = Array.from(document.querySelectorAll(".circles")); 


    if(movedBy < -100){

      if(curIndex!=7){
        prevIndex = curIndex;
        curIndex++;
      }else if(curIndex===7){
        prevIndex = curIndex;
        curIndex = 1;
      }
    };

    if(movedBy > 100){
      if(curIndex!=1){
        prevIndex = curIndex;
        curIndex--;
      }else if(curIndex===1){
        prevIndex = curIndex;
        curIndex = 7;
      }
    };

    const newPic = document.querySelector(`#Crescentia${curIndex}`);
    const oldPic = document.querySelector(`#Crescentia${prevIndex}`);
    oldPic.style.display = "none";
    newPic.style.display = "inline";

    console.log(curIndex)
    console.log(prevIndex)

    let oldDot = document.querySelector(`#blu${prevIndex}`);
    let newDot = document.querySelector(`#wht${prevIndex}`);
    let oldDot2 = document.querySelector(`#blu${curIndex}`);
    let newDot2 = document.querySelector(`#wht${curIndex}`);
    oldDot.style.display = "none";
    newDot.style.display = "inline";
    oldDot2.style.display = "inline";
    newDot2.style.display = "none";


  });

  slide.addEventListener("touchmove", function touchMove(){
    if(isDragging){
      const currentPos = getPosX(event);
      curTranslate = prevTranslate + currentPos - startPos;
    }
  });
});

cards2.forEach((slide, index) => {
  const slideImage = slide;
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());

  //mobile touch events
  
  slide.addEventListener("touchstart", touchStart2(index));

  slide.addEventListener("touchend", function touchEnd(){
    
    isDragging2 = false;
    cancelAnimationFrame(animateID2);

    const movedBy2 = curTranslate2 - prevTranslate2;

    if(movedBy2 < -100){
    
      if(curIndex2!=9){
        prevIndex2 = curIndex2;
        curIndex2++;
      }else if(curIndex2===9){
        prevIndex2 = curIndex2;
        curIndex2 = 1;
      }
    };

    if(movedBy2 > 100){
      if(curIndex2!=1){
        prevIndex2 = curIndex2;
        curIndex2--;
      }else if(curIndex2===1){
        prevIndex2 = curIndex2;
        curIndex2 = 9;
      }
    };

    const newPic = document.querySelector(`#Payflow${curIndex2}`);
    const oldPic = document.querySelector(`#Payflow${prevIndex2}`);
    oldPic.style.display = "none";
    newPic.style.display = "inline";

    let oldDot = document.querySelector(`#blue${prevIndex2}`);
    let newDot = document.querySelector(`#whit${prevIndex2}`);
    let oldDot2 = document.querySelector(`#blue${curIndex2}`);
    let newDot2 = document.querySelector(`#whit${curIndex2}`);
    oldDot.style.display = "none";
    newDot.style.display = "inline";
    oldDot2.style.display = "inline";
    newDot2.style.display = "none";
  });

  slide.addEventListener("touchmove", function touchMove(){
    if(isDragging2){
      console.log("in");
      const currentPos2 = getPosX(event);
      curTranslate2 = prevTranslate2 + currentPos2 - startPos2;
    }
  });
});

window.oncontextmenu = function(event){
  event.preventDefault();
  return false;
};

function touchStart(index){
  return function(event){
    currentIndex = index;
    startPos = getPosX(event);
    console.log(startPos);
    isDragging = true;

    //animateID = requestAnimationFrame(animation);
  };
};

function touchStart2(index){
  return function(event){
  
    startPos2 = getPosX(event);
    console.log(startPos2);
    isDragging2 = true;

    //animateID = requestAnimationFrame(animation);
  };
};

function getPosX(event){
  return event.touches[0].clientX;
};

/*function animation(){
  setSliderPos();
  if (isDragging){
    requestAnimationFrame(animation);
  }
} */

function setSliderPos(){
  photoCard.style.transform = `translateX(${curTranslate}px)`;
};

function setSliderPos2(){
  photoCard2.style.transform = `translateX(${curTranslate2}px)`;
};

function setPosByIndex(){
  curTranslate = currentIndex * -window.innerWidth;
  prevTranslate = curTranslate;
  setSliderPos();
}; 

function setPosByIndex2(){
  curTranslate2 = currentIndex * -window.innerWidth;
  prevTranslate2 = curTranslate2;
  setSliderPos2();
}; 

/*dots slider 1 mobile 
const dots = Array.from(document.querySelectorAll(".circles")); 
for(let i=1;i>=7;i++){
dots[i].addEventListener("click", function(){
  if(i!=1&&i!=7){
    dots[i].src = "photos/blueCircle.png";
    dots[i-1].src = "photos/whiteCircle.png"
  }
})
};

*/