const inputSearch = document.querySelector(".searchbox");
const box = document.querySelector(".box");
const boxShadow = document.querySelector(".box-shadow");

inputSearch.addEventListener('click', () => {
    box.classList.add("box-shadow");
})

box.addEventListener('mouseover', () => {
    box.classList.add("box-shadow");
})

box.addEventListener('mouseout', () => {
    if(inputSearch != document.activeElement) {
        box.classList.remove("box-shadow");
    }
})

document.body.addEventListener('click', () => {
    if(inputSearch != document.activeElement) {
        box.classList.remove("box-shadow");
    }
}, true);

const observer = new ResizeObserver(entries => {
    for(let entry of entries) {
        console.log(entry.contentRect.height);
    }
})

observer.observe(document.querySelector('#main'));
