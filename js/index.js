window.addEventListener("load", imgLoaded);

let timerID;
let timerID2;
 const sliderContainer = document.querySelector('#slider');


function imgLoaded() {
    sliderContainer.addEventListener('click', gestisciClick);
    timerID = setInterval(changeImg, 5000);

    document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
   clearInterval(timerID);
  } else {
    timerID = setInterval(changeImg, 5000);
  }
});

}

function gestisciClick(){
    clearInterval(timerID);
    changeImg();
    timerID = setInterval(changeImg, 5000);
}

function repeatListener(){
    sliderContainer.addEventListener("click", gestisciClick);
}

function changeImg(){
    sliderContainer.removeEventListener("click",gestisciClick); 
    clearTimeout(timerID2);

    timerID2 = setTimeout(repeatListener, 2000);


  let imgVisible = document.querySelector('.visible');
  imgVisible.classList.remove('visible');

  let imgNext = document.querySelector('.next');
  imgNext.classList.replace('next','visible');

  
  let imgnextVisible = document.querySelector('.visible').nextElementSibling;
  if(imgnextVisible !== null){
      imgnextVisible.classList.add('next');

  }else{
    let fatherEl = imgNext.parentElement;
    let childrenEl = fatherEl.children;
    let firstImg = childrenEl[0]
    firstImg.classList.add('next');
  }
}



