const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

if (buttons.length === 0) {
    console.error('No buttons found');
} else {
    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            // console.log('Button clicked:', e.target);
            const color = e.target.id;
            console.log(color);
            if (color) {
                body.style.backgroundColor = color;
            } 
         });
    });
}