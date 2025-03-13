function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if (formularioAno.value.length == 0 || Number(formularioAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        var formularioSexo = document.getElementsByName('radiosexo')
        var idade = ano - Number(formularioAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // O mesmo pode ser feito no HTML através de <img id= 'foto'>
        if (formularioSexo[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 5){
                img.setAttribute('src', 'bebemenino.JPG')
                //bebe
            }else if (idade < 10){
                img.setAttribute('src', 'criancamenino.JPG')
                //criança
            }else if (idade < 18){
                img.setAttribute('src', 'adolescentemenino.JPG')
                //adolescente
            }else if (idade < 65){
                img.setAttribute('src', 'homem.JFIF')
                //adulto
            }else{
                img.setAttribute('src', 'idoso.JPG')
                //idoso
            }
            
        } else if(formularioSexo[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 5){
                img.setAttribute('src', 'bebemenina.JPG')
                //bebe
            }else if (idade < 10){
                img.setAttribute('src', 'criancamenina.JPG')
                //criança
            }else if (idade < 18){
                img.setAttribute('src', 'adolescentemenina.JPG')
                //adolescente
            }else if (idade < 65){
                img.setAttribute('src', 'mulher.JPG')
                //adulto
            }else{
                img.setAttribute('src', 'idosa.JPG')
                //idoso
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
    
}