const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const alertButton = document.querySelector(".btn-encriptar");

btnEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){

            Swal.fire({
            title: 'Error',
            text: 'El campo no debe estar vacio',
            icon: 'warning'
        }) 
    }

    else if(texto !== txt){
        
        Swal.fire({
            title: 'Error',
            text: 'El campo no debe tener acentos o caracteres especiales',
            icon: 'warning'
        }) 
    }

    else if(texto !== texto.toLowerCase()){
        
        Swal.fire({
            title: 'Error',
            text: 'El texto debe ser todo en minuscula',
            icon: 'warning'
        }) 
    }

    

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");
    
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit"
        contenido.remove();

        Swal.fire({
            title: 'Encriptado!',
            text: 'El texto a sido encriptado correctamente',
            icon: 'success'
        }) 
    }    


});

btnDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if(texto == ""){
    
        Swal.fire({
            title: 'Error',
            text: 'El campo no debe estar vacio',
            icon: 'warning'
        })            
       
    }

    else if(texto !== txt){
        
        Swal.fire({
            title: 'Error',
            text: 'El campo no debe tener acentos o caracteres especiales',
            icon: 'warning'
        }) 
    }

    else if(texto !== texto.toLowerCase()){
        
        Swal.fire({
            title: 'Error',
            text: 'El texto debe ser todo en minuscula',
            icon: 'warning'
        }) 
    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
    
        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit"
        contenido.remove();

        Swal.fire({
            title: 'Desencriptado!',
            text: 'El texto a sido desencriptado correctamente',
            icon: 'success'
        }) 
    }    

});

btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");

    Swal.fire({
        title: 'Copiado',
        text: 'El texto a sido copiado, pegalo en la campo texto y dale desencriptar',
        icon: 'info'
    }) 

});

