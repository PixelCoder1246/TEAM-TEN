const body3 = document.getElementsByClassName("body-3-grandchild");
const body4btn = document.querySelector('.body-5-btn');

body4btn.addEventListener("mouseenter", ()=> {
        body4btn.innerHTML = "Please?"
})

body4btn.addEventListener('mouseleave', ()=> {
    body4btn.innerHTML = "Click Me!"
})