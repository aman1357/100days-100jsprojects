const btn = document.getElementById('btn');

const msg = document.getElementById('msg');

const lastMsg = document.getElementById('last-msg');

btn.addEventListener('click', getMessage);



function getMessage(e){
     e.preventDefault();
   
    lastMsg.textContent = msg.value
  
    msg.value='';

}

