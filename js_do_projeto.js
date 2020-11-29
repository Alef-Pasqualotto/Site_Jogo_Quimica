
// Algoritmo de Alef Pasqualotto e Joseph Cipriani

function checar(){
    var temp = document.getElementById('tempCel')
    var element = document.getElementsByName('elemento')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    var est = document.createElement('img')
    var num
    var grupo
    var periodo
    var compQ = ''
    var comp = ''
    var estado = ''
    var subs = ''

    img.setAttribute('id','foto')
    est.setAttribute('id', 'foto')
   if(temp.value < -273.15){
        alert('Temperatura inválida, a menor temperatura disponível é o zero absoluto (-273,15 Cº)')
    } else {
        // IFs para determinar o trabalho com elementos  

        //Água
        if(element[0].checked){
            subs = 'a água'
            document.body.style.background = '#4E97FC'
            comp = 'mistura'
            compQ = 'H2O'
	
        if(temp.value < 0){
                estado = 'sólido'
        } else if (temp.value == 0){
            estado = 'sólido e líquido'
        } else if ( temp.value > 0 && temp.value < 100 ){
            estado = 'líquido'
        } else if (temp.value == 100){
            estado = 'líquido e gasoso'
        } else {
            estado = 'gasoso'
        }
        
        }
        //Álcool
        else if(element[1].checked){
            subs = 'o álcool'
            document.body.style.background = '#C6F4EF'
            comp = 'mistura'

            if(temp.value < -117){
                estado = 'sólido'
            } else if (temp.value == -117){
                estado = 'sólido e líquido'
            } else if (temp.value > -117 && temp.value < 78.5){
                estado = 'líquido'
            } else if(temp.value == 78.5){
                estado = 'líquido e gasoso'
            } else {
                estado = 'gasoso'
            }
            
        }
        //Metano
        else if (element[2].checked){
            subs = 'o metano'
            document.body.style.background = '#00FBFF'
            comp = 'mistura'

            if(temp.value < -183){
                estado = 'sólido'
            } else if (temp.value == -183){
                estado = 'sólido e líquido'
            } else if (temp.value > -183 && temp.value < -162){
                estado = 'líquido'
            } else if (temp.value == -162){
                estado = 'líquido e gasoso'
            } else {
                estado = 'gasoso'
            }

        }
        //Gálio
        else if(element[3].checked){
            subs = ' o gálio'
            document.body.style.background = '#D7D7D7'
            comp = 'elemento'
            grupo = 13
            periodo = 4
            num = 31

            if(temp.value < 29.7){
                estado = 'sólido'
            } else if (temp.value == 29.7){
                estado = 'sólido e líquido'
            } else if (temp.value > 29.7 && temp.value < 240078.5){
                estado = 'líquido'
            } else if (temp.value == 240078.5){
                estado = 'líquido e gasoso'
            } else{
                estado = 'gasoso'
            }
        }
        

        if (comp == 'mistura'){
            res.style.textAlign= 'center'
            res.innerHTML = `A ${temp.value} Cº ${subs} está em estado ${estado}. E a composição química d${subs} é ${compQ}.`
        } else {
            res.style.textAlign= 'center'
            res.innerHTML = `A ${temp.value} Cº ${subs} está em estado ${estado}; ${subs} é o elemento número ${num} da tabela periódica, pertencendo ao ${grupo}º grupo e ${periodo}º período.`
        }


        if(estado == 'sólido'){
            img.setAttribute('src','imagens/solido.png')
        } else if(estado == 'sólido e líquido'){
            img.setAttribute('src','imagens/solido.png')
            est.setAttribute('src','imagens/liquido.png')
        } else if(estado == 'líquido'){
            img.setAttribute('src','imagens/liquido.png')
        } else if(estado == 'líquido e gasoso'){
            img.setAttribute('src','imagens/liquido.png')
            est.setAttribute('src','imagens/gasoso.png')
        } else {
            img.setAttribute('src','imagens/gasoso.png')
        }

        res.appendChild(img)
        res.appendChild(est)
    }
    
}


