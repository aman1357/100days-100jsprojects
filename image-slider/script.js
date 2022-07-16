const btnLeft = document.getElementById('btn-left');

const btnRight = document.getElementById('btn-right');

// const imgObject = [
//    { img: "/image-slider/img/img1.jpeg"},
//    {img: "/image-slider/img/img2.jpeg"},
//   { img: "/image-slider/img/img3.jpeg"}
// ]
  var i = 1;
  var images = [ "/image-slider/img/img1.jpeg",
  "/image-slider/img/img2.jpeg",
  "/image-slider/img/img3.jpeg",
  "/image-slider/img/img4.jpeg"];
  
  


btnRight.addEventListener('click', changeRight);

function changeRight(){
    // console.log("imgOBject:" +img);
   
document.getElementById('img').src = images[i];
 if(i < images.length -1  ){
    i++;
 }else{
    i = 0;
 }

}

btnLeft.addEventListener('click', changeLeft);

function changeLeft(){
    // console.log("imgOBject:" +img);
   
    document.getElementById('img').src = images[i];
    if(i > images.length - 1){
        i--;
    }else{
      i=0; 
    }
}