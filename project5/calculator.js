let a = document.querySelector('#input-value');
function calculatorvalue(input){
    a.value +=input;

}
function equals(){
    try{
    a.value = eval(a.value);
    }
    catch(error){
        a.value = 'Syntax ERROR';
    }
}
function clears(){
    a.value = '';
}

window.onload = () =>{
    setTimeout(()=>{
    document.querySelector('.loader').classList.add('loader--hidden')
},2500)
}
// change dark or light mode (not in use)
// function changes(){
//     if (document.querySelector('.container-content').style.backgroundColor === 'black'){
//         document.querySelector('.container-content').style.backgroundColor = '#FBFFF4';
//         document.querySelector('section').style.color = 'black';
        
//     }else{
//         document.querySelector('.container-content').style.backgroundColor = 'black';
//         document.querySelector('section').style.color = 'white';
//     }
        
//   }

function del(){
    // console.log(a.value[a.value.length-1]) --> detect number in cursor
    let det = a.value.replace(a.value[a.value.length-1], '');
    a.value = det;
}


//   let op = 'hehehehou';
 
//  console.log(op.length);
// let loigi =  op.replace(op[op.length-1],'')
// console.log(loigi);


function changes(){
    if(document.querySelector('.mode-color').style.scale === '0'){
        document.querySelector('.mode-color').style.scale = 1;
        document.querySelector('.mode-color').style.transform = 'translateY(60px)';
    
    }else{
        document.querySelector('.mode-color').style.scale = 0;
        document.querySelector('.mode-color').style.transform = 'translateY(-30px)';
       
        
    }
}

document.querySelectorAll('.mode-color button').forEach(function(button){
    button.onclick = () =>{
    
        document.querySelector('.container-content').style.backgroundColor = button.dataset.color;
        document.querySelector('section').style.color = button.dataset.text
        document.querySelectorAll('.calculator-button button').forEach(function(btn){
            btn.style.backgroundColor = button.dataset.colorbutton;
            btn.style.color = button.dataset.text;
           
        })
        document.querySelectorAll('#operation').forEach(function(btnop){
            btnop.style.backgroundColor = button.dataset.colorbuttonoperation;
            
        })
    }
})