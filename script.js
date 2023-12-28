fetch('gradients.json')
    .then(response => response.json())
    .then(data => {
        let body = document.querySelector('body');
        let gradients = data.gradients;
        let randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
        body.style.background = `linear-gradient(to right, ${randomGradient[0]}, ${randomGradient[1]})`;
    });

fetch('rizz.json')
    .then(response => response.json())
    .then(data => {
        let p = document.querySelector('p');
        let rizz = data.rizz;
        let randomRizz = rizz[Math.floor(Math.random() * rizz.length)];
        p.innerText = `${randomRizz}`;
    });