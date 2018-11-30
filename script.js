const target = document.getElementById('target');

const NUM_WORDS = 50,
      colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function random_color() {
    return colors[Math.floor(Math.random() * colors.length)];
}
while (target.childElementCount < NUM_WORDS) {
    let word = document.createElement('span');

    let color, text;
    do {
        color = random_color();
        text  = random_color();
    } while (color === text);

    word.textContent = text;
    word.className  = color;

    target.appendChild(word);
}

document.getElementById('fullscreen').onclick = function() {
    const html = document.documentElement;
    if (html.requestFullscreen) {
        html.requestFullscreen();
    } else if (html.mozRequestFullScreen) {
        html.mozRequestFullScreen();
    } else if (html.webkitRequestFullscreen) {
        html.webkitRequestFullscreen();
    } else if (html.msRequestFullscreen) {
        html.msRequestFullscreen();
    }
};
