document.documentElement.dataset.scroll = window.scrollY;

document.on('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

let scroll = window.scrollY;

window.addEventListener("scroll", () => {
    scroll = window.scrollY;
    console.log(scroll)

  if (scroll != "0"){
    downArr.addClass("fadeOutDown")
  }
});

var downArr = $('#down-Arr')
console.log(downArr)




