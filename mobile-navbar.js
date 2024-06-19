const itens = document.getElementById('itens')
function apareceMenu(){

    if( itens.style.transform == "translateX(100%)"){
    itens.style.transform= "translateX(0)"
    }
    else{
        itens.style.transform= "translateX(100%)"
    }
 }

 function resetMenu() {
    const itens = document.getElementById('itens');
    if (window.innerWidth > 770) { 
        itens.style.transform = "translateX(0)";
    } else {
        itens.style.transform = "translateX(100%)"; // Ou o estado desejado para telas menores
    }
}

window.addEventListener('resize', resetMenu);