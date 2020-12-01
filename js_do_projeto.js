
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
            }else if (temp.value == 0){
                estado = 'sólido e líquido'
            }else if ( temp.value > 0 && temp.value < 100 ){
                estado = 'líquido'
            }else if (temp.value == 100){
                estado = 'líquido e gasoso'
            }else {
                estado = 'gasoso'
            }
        
        
        }
        //Álcool
        else if(element[2].checked){
            subs = 'o álcool'
            document.body.style.background = '#C6F4EF'
            comp = 'mistura'
            compQ = 'C2H5OH'

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
        else if (element[4].checked){
            subs = 'o metano'
            document.body.style.background = '#00FBFF'
            comp = 'mistura'
            compQ = 'CH4'

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
        else if(element[6].checked){
            subs = 'o gálio'
            document.body.style.background = '#D7D7D7'
            comp = 'elemento'
            grupo = 13
            periodo = 4
            num = 31

            if(temp.value < 29.7){
                estado = 'sólido'
            } else if (temp.value == 29.7){
                estado = 'sólido e líquido'
            } else if (temp.value > 29.7 && temp.value < 2204){
                estado = 'líquido'
            } else if (temp.value == 2204){
                estado = 'líquido e gasoso'
            } else{
                estado = 'gasoso'
            }
        //Pentano
        } else if (element[1].checked){
            subs = 'o pentano'
            document.body.style.background = '#EA6969'
            comp = 'mistura'
            compQ = 'C5H12'
        
            if(temp.value < -129.8){
                estado = 'sólido'
            } else if (temp.value == -129.8){
               estado = 'sólido e líquido'
            } else if (temp.value > -129.8 && temp.value <36.1 ){
                estado = 'líquido'
            } else if (temp.value == 36.1){
                estado = 'líquido e gasoso'
            } else {
                estado = 'gasoso'
            }
        //Bromo
        } else if(element[3].checked){
            subs = 'o bromo'
            document.body.style.background = '#8A0B0B'
            comp = 'elemento'
            grupo = 17
            periodo = 4
            num = 35

            if(temp.value < -7.2){
                estado = 'sólido'
            } else if(temp.value == -7.2){
                estado =  'sólido e líquido'
            } else if(temp.value > -7.2 && temp.value < 58.8){
                estado = 'líquido'
            }else if(temp.value == 58.8){
                estado = 'líquido e gasoso'
            }else{
                estado = 'gasoso'
            }   
        //Mercúrio
         } else if(element[5].checked){
            subs = 'o mercúrio'
            document.body.style.background = '#8F8F8F'
            comp = 'elemento'
            grupo = 12
            periodo = 6
            num = 80

            if(temp.value < -38.83){
                estado = 'sólido'
            } else if(temp.value == -38.83){
                estado = 'sólido e líquido'
            } else if(temp.value > -38.83 && temp.value < 356.7){
                estado = 'líquido'
            } else if(temp.value == 356.7){
                estado = 'líquido e gasoso'
            } else {
                estado = 'gasoso'
            }
        // Butano
         }else if(element[7].checked){
                subs = 'o butano'
                document.body.style.background = '#87BFC0'
                comp = 'mistura'
                compQ = 'C4H10'

                if(temp.value < -138){
                    estado = 'sólido'
                }else if (temp.value == -138){
                    estado = 'sólido e líquido'
                }else if (temp.value > -138 &&  temp.value < -1){
                    estado = 'líquido'
                }else if (temp.value == -1){
                    estado = 'líquido e gasoso'
                }else {
                    estado = 'gasoso'
                }

            
         }

        

        if (comp == 'mistura'){
            res.style.textAlign= 'center'
            res.innerHTML = `A ${temp.value} Cº ${subs} está em estado ${estado}.`+"<br>" +` E a composição química d${subs} é ${compQ}.`
        } else {
            res.style.textAlign= 'center'
            res.innerHTML = `A ${temp.value} Cº ${subs} está em estado ${estado}. `+"<br>" +`Este é o elemento número ${num} da tabela periódica, pertencendo ao ${grupo}º grupo e ${periodo}º período.`
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


