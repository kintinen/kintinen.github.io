

let inputs = document.querySelectorAll("input,textarea")
inputs.forEach(function(input){
    input.addEventListener("focus",function(e){
        e.target.parentNode.children[0].classList.add("subir")
        e.target.parentNode.classList.add("animacionBorde")
    })

    input.addEventListener("blur",function(e){
        if(e.target.value.length <= 0){
            e.target.parentNode.children[0].classList.remove("subir")
        }
        e.target.parentNode.classList.add("animacionBorde")
    })
})






const validarMail = (success, error) => {

document.getElementById('email').attributes.type = 'email'

const regExp = /'^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$'/

const email = document.getElementById('email').value


if(regExp.test(email)){

if(email.split(' ').length == 1 ){


if(email.includes('@') && email.includes('.com') ) {
    console.log(success)
    mensajeDeAyuda(success)
} else {
    console.error(error)
    mensajeDeAyuda(error)
}

} else{
console.error(error)
mensajeDeAyuda(error)
}
}

}

document.getElementById('email').addEventListener('blur', ()=>{
validarMail('Mail correcto','Mail Incorrecto')
})







