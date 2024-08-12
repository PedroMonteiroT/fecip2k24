// function mostraropcoes(element) {
//   const opcoesmesmo = element.nextElementSibling;
//   if (opcoesmesmo.style.width === "200px") {
//     opcoesmesmo.style.width = "0";
//     opcoesmesmo.style.height = "0";
//   } else {
//     opcoesmesmo.style.width = "200px";
//     opcoesmesmo.style.height = "230px";
//   }
// }

// // Fechar todos os menus ao clicar fora deles
// document.addEventListener("click", function (event) {
//   const opcoesmesmoList = document.querySelectorAll(".opcoesmesmo");
//   opcoesmesmoList.forEach(function (opcoesmesmo) {
//     if (
//       !opcoesmesmo.contains(event.target) &&
//       !opcoesmesmo.previousElementSibling.contains(event.target)
//     ) {
//       opcoesmesmo.style.width = "0";
//       opcoesmesmo.style.height = "0";
//     }
//   });
// });
function mostraropcoes(element) {
  const opcoesmesmo = element.nextElementSibling;
  if (opcoesmesmo.style.transform === "scale(1)") {
    opcoesmesmo.style.transform = "scale(0)";
  } else {
    opcoesmesmo.style.transform = "scale(1)";
  }
}

// Fechar todos os menus ao clicar fora deles
document.addEventListener("click", function (event) {
  const opcoesmesmoList = document.querySelectorAll(".opcoesmesmo");
  opcoesmesmoList.forEach(function (opcoesmesmo) {
    if (
      !opcoesmesmo.contains(event.target) &&
      !opcoesmesmo.previousElementSibling.contains(event.target)
    ) {
      opcoesmesmo.style.transform = "scaleX(0)";
    }
  });
});
