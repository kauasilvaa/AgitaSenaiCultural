const listItems = document.querySelectorAll('#bordoesList li');

listItems.forEach(item => {
    const audio = item.querySelector('audio');

    item.addEventListener('click', () => {

        listItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('expanded');
                otherItem.querySelector('audio').pause(); 
                otherItem.querySelector('audio').currentTime = 0; 
            }
        });

        item.classList.toggle('expanded');

        if (audio.paused && item.classList.contains('expanded')) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0; 
            item.classList.remove('expanded');
        }

        // Quando o áudio termina, volta ao estado original
        audio.addEventListener('ended', () => {
            item.classList.remove('expanded');
        });
    });
});