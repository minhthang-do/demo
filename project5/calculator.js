let a = document.querySelector('#input-value');
function calculatorvalue(input){
    a.value +=input;

}
function equals(){
    a.value = eval(a.value);
}
function clears(){
    a.value = '';
}