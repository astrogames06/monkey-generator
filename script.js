function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let monkey = document.getElementById('monkey');
let monkey_id = document.getElementById('monkey-id')
let num = getRandomInt(1, 24);

monkey.src = `monkeys/${num}.jpg`;
monkey_id.innerHTML = `Monkey #${num}`;

document.getElementById('download-btn').addEventListener('click', function() {
    var imageUrl = monkey.src;
    var imageName = `monkey_${num}`;
    downloadImage(imageUrl, imageName);
});

function downloadImage(url, name) {
    var link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.getElementById('fullscreen-btn').addEventListener('click', function() {
    toggleFullscreen();
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        monkey.requestFullscreen().catch(err => {
            monkey.error('Failed to enter fullscreen:', err);
        });
    } else {
        document.exitFullscreen();
    }
}