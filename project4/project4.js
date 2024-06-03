const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


function showandhide(){
  let side = document.getElementById('left-sidebar');
  if (side.style.left === '0px'){
    side.style.left = '-350px';
  }
  else{
    side.style.left = '0px';  
  }
}
let popup = document.getElementById('popup-notification-content');
let close = document.getElementById('closeButton');

setTimeout("timeout()", 2000);
function timeout(){
  popup.style.display = 'block';
}

close.addEventListener('click', function(){
  if (popup.style.display === 'block'){
    popup.style.display = 'none';
  }
})
 
document.getElementById('top').onclick = function(){
  window.scrollTo(0, 0,);

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