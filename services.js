let button = document.querySelector(".box");
let buttontwo = document.querySelector(".boxtwo");
let buttonthree = document.querySelector(".boxthree");
let buttonfour = document.querySelector(".boxfour");
let plus = document.querySelector(".plus");
let plustwo = document.querySelector(".plustwo");
let plusthree = document.querySelector(".plusthree");
let plusfour = document.querySelector(".plusfour");

const addition = document.createElement("div");
addition.classList.add("collapse");
addition.innerHTML = ` <div style="font-weight: 700;"><p> TIMELINE: approximately 3-4 weeks</p>

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
    
    
</p></div>`;
let collapsed = true;

const additiontwo = document.createElement("div");
additiontwo.classList.add("collapsetwo");
additiontwo.innerHTML = ` 


<p> * Web Design offered via Platforms Only – Service Fees NOT included in the pricing below *
<br><br>
* Website copy, photos and branding to be provided by you and are NOT included in the pricing listed below * </p>

<div style="font-weight: 700;">
<p> TIMELINE: approximately 4-5 weeks</p>

<p>
    Includes:<br>
    <ul>
        <li class="contentList">Website Questionnaire + Clarity Call</li>
        <li class="contentList">Wix, Squarespace, WordPress Website Design Including:
            <ul>
                <li class="contentList" id="noMark">- home page design up to 5 basic interior pages 
                (does not include a shop or scheduling pages)</li>
                <li class="contentList" id="noMark">- custom "coming soon" page</li>
                <li class="contentList" id="noMark">- custom 404 page</li>
                <li class="contentList" id="noMark">- custom "links" page (perfect for your Instagram website links)</li>
                <li class="contentList" id="noMark">- basic SEO set-up</li>
                <li class="contentList" id="noMark">- promotional/op-in pop-up</li>
                <li class="contentList" id="noMark">- 1 week of site support after launch</li>
                <li class="contentList" id="noMark">- up to 1 hour tutorial of your site's back-end for maintenance</li>
            </ul>
        </li>
    </ul>
    <p class="contentList">*Please note – any branding, image selection, and copy is NOT included in the listed price. If interested in 
    branding as well, please see our custom branding suite for additional costs and branding investment or we can discuss prices 
    for photography etc.*
    </p>        
</p></div>`;

let collapsedtwo = true;

const additionthree = document.createElement("div");
additionthree.classList.add("collapsethree");
additionthree.innerHTML = ` 

<p> * Website platform/hosting/service fees NOT included in the pricing below *
<br><br>
* Original branding is NOT included in the pricing listed below *

<div style="font-weight: 700;">
<p> TIMELINE: monthly maintenance</p>

<p>
Examples of management include:<br>
    <ul>
        <li class="contentList">Content Prep & Design
            <ul>
                <li class="contentList" id="noMark">-  Monthly content calendars (plan for holidays, events, specials, etc.)</li>
                <li class="contentList" id="noMark">- Imagery design to platform spec (website, Facebook, Instagram, eblast)</li>
                <li class="contentList" id="noMark">- Photography (if needed)</li>
                <li class="contentList" id="noMark">- Create catchy captions that will keep the viewers interested in the post</li>
                <li class="contentList" id="noMark">- Use & discover niche hashtags to grow reach</li>
            </ul>
        </li>

        <li class="contentList">Scheduled Social Media Posts & Website Maintenance
            <ul>
                <li class="contentList" id="noMark">- Maintain a weekly post schedule to all platforms</li>
                <li class="contentList" id="noMark">- Respond to comments</li>
                <li class="contentList" id="noMark">- Make any simple website updates</li>
            </ul>
        </li>

        <li class="contentList">Analytic Reporting
            <ul>
                <li class="contentList" id="noMark">- Monthly growth reports for all social platforms and website</li>
                <li class="contentList" id="noMark">- Additional Ad Campaign Reports (if applicable)</li>
            </ul>
        </li>

    </ul>
    <p class="contentList">*Simple website updates include text, image swaps, blog updates, marketing pop-ups or banners.
     - New page design/formatting and any custom CSS revisions are NOT included in this package.*
    </p>        
</p></div>`;

let collapsedthree = true;

const additionfour = document.createElement("div");
additionfour.classList.add("collapsefour");
additionfour.innerHTML = ` 

<div style="font-weight: 700; background-color=white;">
<p> TIMELINE: monthly maintenance</p>

<p>
Alias add ons include:<br>
    <ul>
        <li class="contentList">LOGO Design</li>
        <li class="contentList">Business Card Design </li>
        <li class="contentList">2-sided Brochure</li>
        <li class="contentList">Look book, Catalog or Guide </li>
        <li class="contentList">Social Media Highlight Covers</li>
        <li class="contentList">Social Media Launch Pack (Includes set of 5 branded social media images to 
        help you celebrate your brand launch.)</li>
        <li class="contentList">T-Shirt or Apparel Design</li>
        <li class="contentList">Responsive Design</li>
        <li class="contentList">Content Creation </li>
        <li class="contentList">Label Design </li>
        <li class="contentList">Package Design </li>
        <li class="contentList">Videography</li>
        <li class="contentList">Video Edits</li>
        <li class="contentList">Photography</li>
        <li class="contentList">Photo Edits</li>
        <li class="contentList">Film Photography</li>
        <li class="contentList">Magazine Design </li>
    </ul>      
</p></div>`;

let collapsedfour = true;


plus.addEventListener("click", function(){
    if(collapsed){
        button.appendChild(addition);
        collapsed = false;
    }else{
        let temp = button.querySelector(".collapse");
        temp.remove();
        collapsed = true;
    }
});

plustwo.addEventListener("click", function(){
    if(collapsedtwo){
        buttontwo.appendChild(additiontwo);
        collapsedtwo = false;
    }else{
        let temp = buttontwo.querySelector(".collapsetwo");
        temp.remove();
        collapsedtwo = true;
    }
});

plusthree.addEventListener("click", function(){
    if(collapsedthree){
        buttonthree.appendChild(additionthree);
        collapsedthree = false;
    }else{
        let temp = buttonthree.querySelector(".collapsethree");
        temp.remove();
        collapsedthree = true;
    }
});

plusfour.addEventListener("click", function(){
    if(collapsedfour){
        buttonfour.appendChild(additionfour);
        collapsedfour = false;
    }else{
        let temp = buttonfour.querySelector(".collapsefour");
        temp.remove();
        collapsedfour = true;
    }
});