const calculateBtn = document.getElementById('btn');

const billAmount =document.getElementById('bill') ;
const tipPercentage =document.getElementById('tip');

calculateBtn.addEventListener('click', amount)

function amount(e){
   e.preventDefault();
    const bill = billAmount.value;
   const percnetageValue =tipPercentage.value;
   


const per = percentage(percnetageValue, bill);

  document.getElementById('tip-div').innerHTML = per;
  

}

function percentage(partialValue, totalValue) {
    return (totalValue * partialValue) / 100;
 } 