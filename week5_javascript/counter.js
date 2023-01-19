let counter = 0;

function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if(counter % 10 === 0 ) {
        alert(`this is now ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;

    /* This creates an interval, 
    where every so often it runs a particular function. 
    This particular interval will run the "count" function, 
    after every second. */

    setInterval(count, 1000);
});