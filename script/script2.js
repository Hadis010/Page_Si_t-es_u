let sIndex = 0;
let timerId;
let etat=false;
let test=0;



function diapotimer(){
    if (etat){
        clearInterval(timerId);
        etat=false;
    }
    else{
        sIndex=debut;
        timerId=setInterval(defile,1000);
        etat=true;
    } 

    
}


function defile(d,f){

    if (test==0){
        sIndex=d; 
        test=1;
    }

    if(sIndex==f ){
        sIndex=d;
    }
    
    displaySlide();
    sIndex+=1;  

}
     
function showImage(n) {
    sIndex = n;
    displaySlide();
}

function nextSlide(n){
   sIndex=sIndex+n;
    displaySlide();
}

function previousSlide(n){
    sIndex=sIndex+n;
    displaySlide();
}

function displaySlide() {
    let i;
    let slides = document.getElementsByClassName("slides");

    if (sIndex >= slides.length) {
        sIndex = 0;
    }

    if (sIndex < 0) {
        sIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[sIndex].style.display = "block";
}
