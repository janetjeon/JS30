// grab all the elements with class panels
const panels = document.querySelectorAll('.panel');


function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName === 'flex-grow') {
        this.classList.toggle('open-active');
    }
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


// listening for a click on each panel, we are going to open,
// trigger a css open 
// when that finishes, the second one (transition end) will fire 
// and toggle open-active