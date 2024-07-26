document.getElementById('slideButton').addEventListener('click', function() {

    const notes = document.getElementById('notes');
    const to_none = document.getElementById('to_none');
    const slidingDiv = document.querySelector('.sliding-div');
    const piIcon = document.getElementById('piIcon');
    slidingDiv.classList.toggle('open');
    piIcon.classList.toggle('rotate');



    
});
