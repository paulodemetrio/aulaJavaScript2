// function msg(){
    // if (document.querySelector('#txtNome').value != '')
    //     alert('Nome informado: ' + document.querySelector('.nome').value)
    // else
    //     alert('Necessário informar o nome') 
    // alert(document.querySelector('#txtNome').value == '' ? 'Necessário informar o nome' : 'Nome informado: ' + document.querySelector('#txtNome').value)
// }

// function geraTabuada(pValor){
//     if(pValor == ''){
//         alert('Necessário informar o valor da tabuada')
//         document.querySelector('#txtValor').focus()
//         return
//     }
//     if((pValor<1) || (pValor>10)){
//         alert('Valor informado deve estar entre 1 e 10')
//         document.querySelector('#txtValor').focus()
//         return
//     }
//     document.querySelector('.tabuada').innerHTML = ''
//     for(i = document.querySelector('#txtValor').value; i<= 10; i++){
//         document.querySelector('.tabuada').innerHTML += '<font color="red"><strong>Tabuada de: ' + i + '</strong></font><br>'
//         for(cont = 1; cont<=10; cont++){
//             document.querySelector('.tabuada').innerHTML += i + ' x ' + cont + ' = ' + (cont * i + '<br>')
//         }
//     }
// }
// ************************************************************
// function calculo(txtValor1, txtValor2, txtOperacao){
//     // Validando se existem valores em txtValor1, Valor2 e Operação
//     if(document.querySelector('#txtValor1').value == ''){
//         alert('Necessário informar o primeiro valor!')
//         document.querySelector('#txtValor1').focus()
//     }
//     else if(document.querySelector('#txtValor2').value == '' || document.querySelector('#txtValor2').value == '0'){
//         alert('Necessário informar o segundo valor!')
//         document.querySelector('#txtValor2').focus()
//     }
//     else if(document.querySelector('#txtOperacao').value == ''){
//         alert('Necessário escolher algum cálculo aritmético!')
//         document.querySelector('#txtOperacao').focus()
//     }
//     // Realizando a operação com os valores informados
//     document.querySelector('.ag').innerHTML = ''
//     if(document.querySelector('#txtOperacao').value == '+'){
//         document.querySelector('.ag').innerHTML = document.querySelector('#txtValor1').value + ' + ' + document.querySelector('#txtValor2').value + ' = ' + (parseInt(document.querySelector('#txtValor1').value) + parseInt(document.querySelector('#txtValor2').value))
//     }else if(document.querySelector('#txtOperacao').value == '-'){
//         document.querySelector('.ag').innerHTML = document.querySelector('#txtValor1').value + ' - ' + document.querySelector('#txtValor2').value + ' = ' + (parseInt(document.querySelector('#txtValor1').value - document.querySelector('#txtValor2').value))
//     }else if(document.querySelector('#txtOperacao').value == 'x'){
//         document.querySelector('.ag').innerHTML = document.querySelector('#txtValor1').value + ' x ' + document.querySelector('#txtValor2').value + ' = ' + (parseInt(document.querySelector('#txtValor1').value * document.querySelector('#txtValor2').value))
//     }else if(document.querySelector('#txtOperacao').value == '/'){
//         if((document.querySelector('#txtValor1').value % document.querySelector('#txtValor2').value)!=0){
//             document.querySelector('.ag').innerHTML = document.querySelector('#txtValor1').value + ' / ' + document.querySelector('#txtValor2').value + ' = ' + (parseInt(document.querySelector('#txtValor1').value / document.querySelector('#txtValor2').value).toFixed(2))
//         }
//         else{
//             document.querySelector('.ag').innerHTML = document.querySelector('#txtValor1').value + ' / ' + document.querySelector('#txtValor2').value + ' = ' + (parseInt(document.querySelector('#txtValor1').value / document.querySelector('#txtValor2').value))
//         }
//     }
// }
// ************************************************************
var valor1
var operacao
const msgDivisaoZero = 'Erro'
var operacoes = ['+','-','x','/']

document.addEventListener('keydown',function(e){
    if(!(isNaN(e.key))){
        defineValor(e.key)
        return
    }
    if(operacoes.includes(e.key)){
        defineOperacao(e.key)
        return
    }
    if((e.key.toUpperCase() == 'C') || (e.key.toUpperCase == 'ESCAPE')){
        limpaValores()
        return
    }
    if((e.key.toUpperCase() == 'Enter'))
        exibeResultado()
})

function defineValor(pValor){
    if(document.getElementById('txtValor').value != msgDivisaoZero)
        document.getElementById('txtValor').value = (document.getElementById('txtValor').value == '0') ? pValor : document.getElementById('txtValor').value += pValor
}

function limpaValores(){
    document.getElementById('txtValor').value = '0'
}

function defineOperacao(pOperacao){
    if(document.getElementById('txtValor').value == msgDivisaoZero)
        return
    valor1 = parseInt(document.getElementById('txtValor').value)
    operacao = pOperacao
    limpaValores()
}

function exibeResultado(){
    if(document.getElementById('txtValor').value == msgDivisaoZero)
        return
    switch(operacao){
        case '+':
            document.getElementById('txtValor').value = parseInt(valor1) + parseInt(document.getElementById('txtValor').value)
            break
        case '-':
            document.getElementById('txtValor').value = parseInt(valor1) - parseInt(document.getElementById('txtValor').value)
            break
        case 'x':
        case '*':
            document.getElementById('txtValor').value = parseInt(valor1) * parseInt(document.getElementById('txtValor').value)
            break
        default :
            document.getElementById('txtValor').value = (document.getElementById('txtValor').value=='0') ? msgDivisaoZero : parseInt(valor1) / parseInt(document.getElementById('txtValor').value)
    }
}