

let a ={
    name:'tuan'
}
console.log(a.name)

function thisisvalue(value){
    console.log(value);
    let display = document.getElementById('display').value += value;
    
    
}



document.getElementById('ans').onclick = function(){
    let c = eval(display.value)
    let ans = document.getElementById('an').textContent = c;
}
document.getElementById('del').onclick= function(){
    display.value = '';
    an.textContent = '';

}

let demo= {
    name: 'thang',
    address:`quy nhon, binh dinh`,
    age: 16
}

console.log('my name is'.toUpperCase(),demo.address.toUpperCase())