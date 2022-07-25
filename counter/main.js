const count = document.getElementById('count');
const increaseBtn = document.getElementById('btn1');
const deacreaseBtn = document.getElementById('btn2');
const clearText = document.getElementById('clear');

function decreaseCount(){
   count.innerText--;
}

function increaseCount(){
    count.innerText++;
}

function clearT(){
   count.innerHTML=0;
}



btn1.addEventListener('click', increaseCount);

btn2.addEventListener('click', decreaseCount);

clearText.addEventListener('click', clearT);