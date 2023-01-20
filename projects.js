const logoExp = document.querySelector("#exploreOne");
const labelExp = document.querySelector("#exploreTwo");
const productExp = document.querySelector("#exploreThree");
const socialExp = document.querySelector("#exploreFour");
const wrapOne = document.querySelector("#wrapperOne");
const wrapTwo = document.querySelector("#wrapperTwo");
const wrapThree = document.querySelector("#wrapperThree");
const wrapFour = document.querySelector("#wrapperFour");

const addition = document.createElement("div");
addition.classList.add("collapse");
addition.innerHTML = `
<button class="slide-arrow" id="slide-arrow-prev">
&#8249;
</button>
<button class="slide-arrow" id="slide-arrow-next">
&#8250;
</button>
<ul class="slides-container" id="slides-container">
<li class="slide">
  <img src="/photos/projects/sinclairhighperformancelogo 1.png" alt="" class="image">
  <p class="description">sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
  sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
  </p>
  </li>
<li class="slide">
  <img src="/photos/projects/daisymarketindividualogo 1.png" alt="" class="image">
  <p class="description">sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
      sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
  </p>
</li>
<li class="slide">
  <img src="/photos/projects/ss 1.png" alt="" class="image">
  <p class="description">sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
      sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
  </p>
</li>
</ul>
`;

let collapsedOne = true;

logoExp.addEventListener("click", function(){
    if(collapsedOne){
        wrapOne.appendChild(addition);
        collapsedOne = false;
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");
        
        nextButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft += slideWidth;
        });
        
        prevButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft -= slideWidth;
        });
    }else{
        let temp = wrapOne.querySelector(".collapse");
        temp.remove();
        collapsedOne = true;
    }
});

const additionTwo = document.createElement("div");
additionTwo.classList.add("collapse");
additionTwo.innerHTML = `
                <button class="slide-arrow" id="slide-arrow-prev">
                &#8249;
                </button>
                <button class="slide-arrow" id="slide-arrow-next">
                &#8250;
                </button>
                <ul class="slides-container" id="slides-container">
                <li class="slide">
                  <img src="/photos/projects/INCLUSIONBRANDFINALFRONT 1.png" alt="" class="image">
                  <p class="description">sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
                  sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
                  </p>
                  </li>
                <li class="slide">
                  <img src="/photos/projects/inclusionbackupdate1 1.png" alt="" class="image">
                  <p class="description">sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
                      sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES sinclair AUTOMOTIVES
                  </p>
                </li>
                </ul>
`;

let collapsedTwo = true;

labelExp.addEventListener("click", function(){
    if(collapsedTwo){
        wrapTwo.appendChild(additionTwo);
        collapsedTwo = false;
        const slidesContainer = document.getElementById("slides-container");
        const slide = document.querySelector(".slide");
        const prevButton = document.getElementById("slide-arrow-prev");
        const nextButton = document.getElementById("slide-arrow-next");
        
        nextButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft += slideWidth;
        });
        
        prevButton.addEventListener("click", () => {
          const slideWidth = slide.clientWidth;
          slidesContainer.scrollLeft -= slideWidth;
        });
    }else{
        let temp = wrapTwo.querySelector(".collapse");
        temp.remove();
        collapsedTwo = true;
    }
});