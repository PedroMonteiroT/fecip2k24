const itens = document.getElementById('itens')
function apareceMenu(){
    if(itens.style.display == 'block'){
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}   
function ajustarMenu() {
    if (window.innerWidth >= 770) {
        itens.style.display = 'block'; 
    } else if (itens.style.display != 'none') {
        itens.style.display = 'none'; 
    }
}
window.addEventListener('resize', ajustarMenu);

// Garantir que o estado inicial esteja correto
ajustarMenu();