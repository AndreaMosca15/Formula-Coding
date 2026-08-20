const bottone = document.getElementById('backgroundColorButton');
let counter = true

bottone.addEventListener('click', () => {
    if (counter) {
        document.body.style.backgroundColor = "black";
        counter = !counter;
    } else {
        document.body.style.backgroundColor = "beige";
        counter = !counter;
    }
});