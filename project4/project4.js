


function showandhide(){
  let side = document.getElementById('left-sidebar');
  if (side.style.left === '0px'){
    side.style.left = '-60vw';
    document.querySelector('.blur-backGr').style.display = 'none';
  }
  else{
    side.style.left = '0px';
    document.querySelector('.blur-backGr').style.display = 'block';

  }
}
let popup = document.querySelector('.popup-noti');
let close = document.querySelector('.popup-noti')

setTimeout("timeout()", 2000);
function timeout(){
  popup.style.display = 'block';
}

function closeButton(){
  close.style.display = 'none';
}

window.onload = function(){
  window.scrollTo({top: 0, behavior: "smooth"})
}

function showlistsidebar(listNumber){
  if(document.querySelector(`#list${listNumber}`).style.display === 'none'){
    document.querySelector(`#list${listNumber}`).style.display = 'block';
  }
  else{
    document.querySelector(`#list${listNumber}`).style.display = 'none';
  }
}

container = document.querySelector('.container');
