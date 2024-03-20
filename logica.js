document.addEventListener('DOMContentLoaded', function() {
    const botonEncriptar = document.querySelector('.botonEncriptar');
    const botonDesencriptar = document.querySelector('.botonDesencriptar');
    const botonCopiar = document.querySelector('.botonCopiar');





    function encriptar() {
        let texto = document.querySelector('.texto').value.toLowerCase();
    
        let textoEncriptado = texto.replace(/e/img, 'enter');
        textoEncriptado = textoEncriptado.replace(/i/img, 'imes');
        textoEncriptado = textoEncriptado.replace(/a/img, 'ai');
        textoEncriptado = textoEncriptado.replace(/o/img, 'ober');
        textoEncriptado = textoEncriptado.replace(/u/img, 'ufat');
            
        console.log(textoEncriptado);
        document.querySelector('.textoResultado').textContent = textoEncriptado;
    }

    function desencriptar() {
        let texto = document.querySelector('.texto').value.toLowerCase();
    
        let textoDesencriptado = texto.replace(/enter/img, 'e');
        textoDesencriptado = textoDesencriptado.replace(/imes/img, 'i');
        textoDesencriptado = textoDesencriptado.replace(/ai/img, 'a');
        textoDesencriptado = textoDesencriptado.replace(/ober/img, 'o');
        textoDesencriptado = textoDesencriptado.replace(/ufat/img, 'u');
            
        console.log(textoDesencriptado);
        document.querySelector('.textoResultado').textContent = textoDesencriptado;
    }

    function copiarTextoResultado() {
        const textoResultado = document.querySelector('.textoResultado');
        const textoCopiado = textoResultado.textContent;
        const inputTemporal = document.createElement('textarea');
        inputTemporal.value = textoCopiado;
        document.body.appendChild(inputTemporal);
        inputTemporal.select();
        document.execCommand('copy');
        document.body.removeChild(inputTemporal);
    }
    

    botonEncriptar.addEventListener('click', encriptar);
    botonDesencriptar.addEventListener('click', desencriptar);
    botonCopiar.addEventListener('click',copiarTextoResultado)

})