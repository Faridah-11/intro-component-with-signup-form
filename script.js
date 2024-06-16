'use strict'

const submitBtn = document.querySelector('button');
const inputs = document.querySelectorAll('input');

const checkForm = function(){
    inputs.forEach(input => {
        if (!(input.value)){
            document.querySelector(`.${input.name}_pop_up`).classList.remove('hidden');
            document.querySelector(`#${input.id}`).classList.add('error');
            document.querySelector(`#${input.id}`).classList.add('pop_up');
            document.querySelector(`#${input.id}`).classList.add('error-image');
            document.querySelector(`#${input.id}`).value = ' '
            if(input.id === 'email'){
                document.querySelector('#email').value = `email@example/com`
            }
        }
    })
};   

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    checkForm()
})
