const itens = document.getElementById("itens");
function apareceMenu() {
  if (itens.style.transform == "translateX(100%)") {
    itens.style.transform = "translateX(0)";
  } else {
    itens.style.transform = "translateX(100%)";
  }
}

function resetMenu() {
  if (window.innerWidth > 770) {
    itens.style.transform = "translateX(0)";
  } else {
    itens.style.transform = "translateX(100%)";
  }
}

window.addEventListener("resize", resetMenu);

// window.addEventListener("scroll", function () {
//   if (window.scrollY > 100) {
//     document.getElementById("header").style.backgroundColor = "black";
//   } else {
//     document.getElementById("header").style.backgroundColor = "";
//   }
// });
let lastScrollTop = 0;
const header = document.querySelector('header')

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  if (window.scrollY > 70) {
    if (scrollTop > lastScrollTop) {
      // Rolando para baixo
      header.style.top = "-100px"; // Ajuste a altura de acordo com a altura do seu cabeçalho
    } else {
      // Rolando para cima
      header.style.top = "0";
    }
  }
  lastScrollTop = scrollTop;
});
