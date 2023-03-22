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

//mobile
let backArrowmob = document.getElementById("backArrowmob");
let frontArrowmob = document.getElementById("frontArrowmob");

backArrowmob.addEventListener("click", function(){

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



frontArrowmob.addEventListener("click", function(){

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

//mobile

let rearArrowmob = document.getElementById("rearArrowmob");
let forwardArrowmob = document.getElementById("forwardArrowmob");

rearArrowmob.addEventListener("click", function(){

  if(twoCounter!=1){
    twoOld = twoCounter;
    twoCounter--;
  }else if(twoCounter===1){
    twoOld = twoCounter;
    twoCounter = 9;
  }
  for(let i=1;i<=9;i++){
    let oldPic = document.querySelector(".secondFeature");
    if(twoCounter===i){
        const newPic = document.querySelector(`#Payflow${i}`);
        const oldPic = document.querySelector(`#Payflow${twoOld}`);
        oldPic.style.display = "none";
        newPic.style.display = "inline";
    }
  }
 
});



forwardArrowmob.addEventListener("click", function(){

if(twoCounter!=9){
  twoOld = twoCounter;
  twoCounter++;
}else if(twoCounter===9){
  twoOld = twoCounter;
  twoCounter = 1;
}
for(let i=1;i<=9;i++){
  let beforePic = document.querySelector(".secondFeature");
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

/*
const photoCard = document.querySelector("#partnerOne");
const cards = Array.from(document.querySelectorAll(".slide")); 

let isDragging = false,
  startPos = 0,
  curTranslate = 0,
  prevTranslate = 0,
  animateID = 0,
  currentIndex = 0;

cards.forEach((slide, index) => {
  const slideImage = slide;
  slideImage.addEventListener("dragstart", (e) => e.preventDefault());

  //mobile touch events
  
  slide.addEventListener("touchstart", touchStart(index));

  slide.addEventListener("touchend", function touchEnd(){
    isDragging = false;
    cancelAnimationFrame(animateID);

    const movedBy = curTranslate - prevTranslate;
    if(movedBy < -100 && currentIndex < cards.length - 1){
      currentIndex += 1;
    };

    if(movedBy > 100 && currentIndex > 0){
      currentIndex -= 1;
    };

    setPosByIndex();
  });

  slide.addEventListener("touchmove", function touchMove(){
    if(isDragging){
      const currentPos = getPosX(event);
      curTranslate = prevTranslate + currentPos - startPos;
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

    animateID = requestAnimationFrame(animation);
  };
};

function getPosX(event){
  return event.touches[0].clientX;
};

function animation(){
  setSliderPos();
  if (isDragging){
    requestAnimationFrame(animation);
  }
}

function setSliderPos(){
  photoCard.style.transform = `translateX(${curTranslate}px)`;
};

function setPosByIndex(){
  curTranslate = currentIndex * -window.innerWidth;
  prevTranslate = curTranslate;
  setSliderPos();
}; */