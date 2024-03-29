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
      oneCounter = 3;
    }
    for(let i=1;i<=3;i++){
      if(oneCounter===i){
        const newPic = document.querySelector(`#Partner${i}`);
        const oldPic = document.querySelector(`#Partner${oldCount}`);
        oldPic.style.display = "none";
        newPic.style.display = "inline";
      }
    }
   
});



frontArrow.addEventListener("click", function(){

  if(oneCounter!=3){
    oldCount = oneCounter;
    oneCounter++;
  }else if(oneCounter===3){
    oldCount = oneCounter;
    oneCounter = 1;
  }
  for(let i=1;i<=3;i++){
    if(oneCounter===i){
      const newPic = document.querySelector(`#Partner${i}`);
      const oldPic = document.querySelector(`#Partner${oldCount}`);
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


let isDragging = false,
  startPos = 0,
  curTranslate = 0,
  prevTranslate = 0,
  animateID = 0,
  prevIndex = 3;
  curIndex = 1;

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

      if(curIndex!=3){
        prevIndex = curIndex;
        curIndex++;
      }else if(curIndex===3){
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
        curIndex = 3;
      }
    };

    const newPic = document.querySelector(`#Partner${curIndex}`);
    const oldPic = document.querySelector(`#Partner${prevIndex}`);
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



function setPosByIndex(){
  curTranslate = currentIndex * -window.innerWidth;
  prevTranslate = curTranslate;
  setSliderPos();
}; 



const email = document.getElementById("email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a valid email address!");
  } else {
    email.setCustomValidity("");
  }
});