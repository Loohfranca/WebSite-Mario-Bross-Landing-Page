
const form = document.querySelector(".formulario")
const mascaraa = document.querySelector(".mascaraa")



// esconder form

function mostrarform(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascaraa.style.visibility = "visible"
   
}

// mostrar form

function esconderform(){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    mascaraa.style.visibility = "hidden"
   
}