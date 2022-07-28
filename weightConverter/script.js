const convertBtn = document.getElementById('btn');
const weightInput = document.getElementById('input-weight');

const weightOutput = document.getElementById('output-weight');

convertBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const inputValue = weightInput.value;
    const formula = (0.453*inputValue);
    
    weightOutput.innerText =formula;

})