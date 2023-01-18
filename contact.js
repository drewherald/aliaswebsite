let textBox = document.querySelector(".live");
let replace = document.querySelector(".comments");
const form = document.createElement("div");
form.innerHTML = `
    <textarea name="comments" id="comments" cols="30" rows="5" placeholder="comments"></textarea>
`
textBox.addEventListener("click", function(){
    textBox.replaceChild(form, replace);
})