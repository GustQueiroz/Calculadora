document.querySelector('.ball').addEventListener('click', (e) => {
    const ballElement = document.getElementById('ball');
    
    if (ballElement.classList.contains('ball-move')) {
        ballElement.classList.remove('ball-move');
        ballElement.classList.add('ball-move2');
        document.body.classList.remove('white');
        document.body.classList.add('purple');
    } else if (ballElement.classList.contains('ball-move2')) {
        ballElement.classList.remove('ball-move2');
        ballElement.classList.add('ball');
        document.body.classList.remove('purple');
    } else {
        ballElement.classList.add('ball-move');
        document.body.classList.remove('purple');
        document.body.classList.add('white');
    }
});
