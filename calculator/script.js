

const btn =  document.querySelectorAll('.btn');
const input = document.getElementById('input'); 

const equal = document.getElementById('equal');

const clear = document.getElementById('clear');


btn.forEach(function(button){
    
      button.addEventListener('click', function(e){
      
        let value = e.target.dataset.num;
        input.value += value;
      })
    
      
     
    
  });

// a function for equal 

equal.addEventListener('click', function(e){
  if(input.value === ''){
    input.value = "please enter the value";

  } else{
    let answer = eval(input.value);
     input.value = answer;
  }
})

clear.addEventListener('click', function(e){
  input.value = '';
})