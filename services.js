let button = document.querySelector(".box");
const addition = document.createElement("div");
addition.classList.add("collapse");
addition.innerHTML = ` <p> TIMELINE: approximately 3-4 weeks</p>

<p>
    Includes:<br>
    <ul>
        <li class="contentList">Brand Questionnaire + Clarity Call via zoom or meeting in person</li>
        <li class="contentList">Custom Inspiration + Mood Board</li>
        <li class="contentList">2 Original Brand Concepts To Choose From</li>
        <li class="contentList">Full Brand Identity Including:
            <ul>
                <li class="contentList" id="noMark">- main logo design</li>
                <li class="contentList" id="noMark">- sub-mark</li>
                <li class="contentList" id="noMark">- stamp/sticker logo</li>
                <li class="contentList" id="noMark">- brand pattern/texture</li>
                <li class="contentList" id="noMark">- font recommendations</li>
                <li class="contentList" id="noMark">- color breakdown + palette</li>
                <li class="contentList" id="noMark">- client feedback + up to 3 rounds of revisions</li>
            </ul>
        </li>
        <li class="contentList">Branded Materials Including:
            <ul>
                <li class="contentList" id="noMark">- business card design</li>
                <li class="contentList" id="noMark">- social media profile + banner designs</li>
            </ul>
        </li>
    </ul>
    <p class="contentList">*All final brand elements will be delivered to you in high-res EPS, JPG, PDF and PNG format.</p>        
    
    
</p>`;
let collapsed = true;

button.addEventListener("click", function(){
    if(collapsed){
        button.appendChild(addition);
        collapsed = false;
    }else{
        let temp = button.querySelector(".collapse");
        temp.remove();
        collapsed = true;
    }
});
