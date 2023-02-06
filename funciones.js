function num(valor) {
    document.getElementById('resultado').value += valor;
}
function comprobarValores(operac){
    let valor = Array.from(operac);
    for(let i = 0; i<valor.length;i++){
       if(valor[i] == 1 ||valor[i] == 2 ||valor[i] == 3 ||valor[i] == 4 ||valor[i] == 5 ||valor[i] == 6 ||
        valor[i] ==  7||valor[i] == 8 ||valor[i] == 9 ||valor[i] == 10 ||valor[i] == '+'||valor[i] == '-' || valor[i] == '*' ||
        valor[i] == '/' ||valor[i] == '.'){
        return true;
       }else{
        return false;
       }
    }
}
function opera(){
    let operac = document.getElementById('resultado').value;
    if(comprobarValores(operac) == true){
        if(operac != 0){
            document.getElementById('resultado').value = eval(operac);
        }
    }else{
        document.getElementById('resultado').value = '¿QUÉ INTENTAS?';
    }
}
function reset(){
    document.getElementById('resultado').value = '';
}