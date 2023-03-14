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

backArrow.addEventListener("click", function(){

    if(oneCounter!=1){
      oneCounter--;
    }else if(oneCounter===1){
      oneCounter = 7;
    }
    for(let i=1;i<=7;i++){
      let oldPic = document.querySelector(".firstFeature");
      if(oneCounter===i){
        const newPic = document.createElement("img");
        newPic.src = `photos/crescentia/Crescentia${i}.png`;
        newPic.classList.add("firstFeature");
        proOne.replaceChild(newPic, oldPic);
      }
    }
   
});



frontArrow.addEventListener("click", function(){

  if(oneCounter!=7){
    oneCounter++;
  }else if(oneCounter===7){
    oneCounter = 1;
  }
  for(let i=1;i<=7;i++){
    let beforePic = document.querySelector(".firstFeature");
    if(oneCounter===i){
      const nextPic = document.createElement("img");
      nextPic.src = `photos/crescentia/Crescentia${i}.png`;
      nextPic.classList.add("firstFeature");
      proOne.replaceChild(nextPic, beforePic);
    }
  }
 
});

//mobile
let backArrowmob = document.getElementById("backArrowmob");
let frontArrowmob = document.getElementById("frontArrowmob");

backArrowmob.addEventListener("click", function(){

    if(oneCounter!=1){
      oneCounter--;
    }else if(oneCounter===1){
      oneCounter = 7;
    }
    for(let i=1;i<=7;i++){
      let oldPic = document.querySelector(".firstFeature");
      if(oneCounter===i){
        const newPic = document.createElement("img");
        newPic.src = `photos/crescentia/Crescentia${i}.png`;
        newPic.classList.add("firstFeature");
        proOne.replaceChild(newPic, oldPic);
      }
    }
   
});



frontArrowmob.addEventListener("click", function(){

  if(oneCounter!=7){
    oneCounter++;
  }else if(oneCounter===7){
    oneCounter = 1;
  }
  for(let i=1;i<=7;i++){
    let beforePic = document.querySelector(".firstFeature");
    if(oneCounter===i){
      const nextPic = document.createElement("img");
      nextPic.src = `photos/crescentia/Crescentia${i}.png`;
      nextPic.classList.add("firstFeature");
      proOne.replaceChild(nextPic, beforePic);
    }
  }
 
});

//featured partner 2

let rearArrow = document.getElementById("rearArrow");
let forwardArrow = document.getElementById("forwardArrow");
let twoCounter = 1;
const proTwo = document.getElementById("proTwo");


rearArrow.addEventListener("click", function(){

    if(twoCounter!=1){
      twoCounter--;
    }else if(twoCounter===1){
      twoCounter = 9;
    }
    for(let i=1;i<=9;i++){
      let oldPic = document.querySelector(".secondFeature");
      if(twoCounter===i){
        const newPic = document.createElement("img");
        newPic.src = `photos/payflow/payflow${i}.png`;
        newPic.classList.add("secondFeature");
        proTwo.replaceChild(newPic, oldPic);
      }
    }
   
});



forwardArrow.addEventListener("click", function(){

  if(twoCounter!=9){
    twoCounter++;
  }else if(twoCounter===9){
    twoCounter = 1;
  }
  for(let i=1;i<=9;i++){
    let beforePic = document.querySelector(".secondFeature");
    if(twoCounter===i){
      const nextPic = document.createElement("img");
      nextPic.src = `photos/payflow/payflow${i}.png`;
      nextPic.classList.add("secondFeature");
      proTwo.replaceChild(nextPic, beforePic);
    }
  }
 
});

//mobile

let rearArrowmob = document.getElementById("rearArrowmob");
let forwardArrowmob = document.getElementById("forwardArrowmob");

rearArrowmob.addEventListener("click", function(){

  if(twoCounter!=1){
    twoCounter--;
  }else if(twoCounter===1){
    twoCounter = 9;
  }
  for(let i=1;i<=9;i++){
    let oldPic = document.querySelector(".secondFeature");
    if(twoCounter===i){
      const newPic = document.createElement("img");
      newPic.src = `photos/payflow/payflow${i}.png`;
      newPic.classList.add("secondFeature");
      proTwo.replaceChild(newPic, oldPic);
    }
  }
 
});



forwardArrowmob.addEventListener("click", function(){

if(twoCounter!=9){
  twoCounter++;
}else if(twoCounter===9){
  twoCounter = 1;
}
for(let i=1;i<=9;i++){
  let beforePic = document.querySelector(".secondFeature");
  if(twoCounter===i){
    const nextPic = document.createElement("img");
    nextPic.src = `photos/payflow/payflow${i}.png`;
    nextPic.classList.add("secondFeature");
    proTwo.replaceChild(nextPic, beforePic);
  }
}

});