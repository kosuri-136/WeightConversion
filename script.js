// querySelectors are here
const poundInput = document.querySelector('.poundInput');
const gramsOutput = document.querySelector('.gramsOutput');
const kgOutput = document.querySelector('.kgOutput');
const ounceOutput = document.querySelector('.ounceOutput');

// addEventListener is here

poundInput.addEventListener('change', (event) => {
    poundInput.value = event.target.value;
})

const output = setInterval(()=>{
    if(Number(poundInput.value)){
        gramsOutput.textContent = 453.592 * (poundInput.value)
        kgOutput.textContent = 0.453592 * (poundInput.value)
        ounceOutput.textContent = 16 * (poundInput.value)
    }
    if(Number(poundInput.value)===0){
        gramsOutput.textContent = 0
        kgOutput.textContent = 0
        ounceOutput.textContent = 0
    }
},20)