function verificar() {
    var data = new Date()
    var agora = data.getFullYear()
    var ano = window.document.getElementById('inasc')

    if (ano.value.length == 0 || ano.value > agora) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo = window.document.getElementsByName('sx')
        var resultado = window.document.querySelector('div#res')
        var genero = ''
        var idade = agora - Number(ano.value)
        var imagem = window.document.createElement('img')
        imagem.setAttribute('id','foto')
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src','bebe-homem.png')
            } else if (idade < 21) {
                imagem.setAttribute('src','jovem-homem.png')
            } else if (idade > 21 && idade < 60) {
                imagem.setAttribute('src','adulto-homem.png')
            } else if (idade >= 60) {
                imagem.setAttribute('src','idoso-homem.png')
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                imagem.setAttribute('src','bebe-mulher.png')
            } else if (idade < 21) {
                imagem.setAttribute('src','jovem-mulher.png')
            } else if (idade > 21 && idade < 60) {
                imagem.setAttribute('src','adulto-mulher.png')
            } else if (idade >= 60) {
                imagem.setAttribute('src','idosa-mulher.png')
            }
        }
        imagem.style.width = '300px'
        imagem.style.marginTop = '20px'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade!`
        resultado.appendChild(imagem)
    }
}