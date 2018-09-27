'use strict';
function fizzBuzz(input){
    if(input%15=== 0)return 'fizzbuzz';
    if(input%5===0)return 'buzz';
    if(input%3===0)return 'fizz';
    return input;
}

function generateHTML(fizzBuzzResult){
    let className;
    if (typeof fizzBuzzResult === 'number'){
        className = '';
    } else {
        className = fizzBuzzResult;
    }

    return `<div class ='fizz-buzz-item ${className}'>
        <span>${fizzBuzzResult}</span>
        </div>
        `;
}

function handleSubmit(){
    $('#number-chooser').submit(event =>{
        event.preventDefault();
        const countTo = $('#number-choice').val();
        $('#number-choice').val('');

        const results = [];
        for(let i = 1; i<=countTo; i++){
            results.push(fizzBuzz(i));
        }
        const resultsHTML = results.map.generateHTML;

        $('.js-results').html(resultsHTML);
    });
}

$(handleSubmit);