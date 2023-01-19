
/* In the first line of code we are asking if,
there is a variable called 'counter'. If not,
then create a variable called 'counter', and
set it to 0 (second line of code)*/

if (!localStorage.getItem('counter')) {

    localStorage.setItem('counter', 0);
}

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML = counter;
    localStorage.setItem('counter', counter);


}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('h1').innerHTML = localStorage.getItem('counter')
    document.querySelector('button').onclick = count;

});