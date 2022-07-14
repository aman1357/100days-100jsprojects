// simple color change function 

function colorChange(){
     const arr = ['black', 'red', 'green', 'yellow', 'blue'];      
      const colorIndex = parseInt(Math.random()*arr.length);
        document.body.style.backgroundColor=arr[colorIndex];
     document.querySelector('h2').innerHTML = "simple color "
 }


// A FUNCTION FOR RANDOM COLOR CHANGE 

// uncomment it to use 

//  function colorChange(){
    
//      const randomColor = Math.floor(Math.random()*16777215).toString(16);

//        document.body.style.backgroundColor = "#" + randomColor;
      
//        document.getElementById('color-code').innerHTML = "#" + randomColor;
   
// }

