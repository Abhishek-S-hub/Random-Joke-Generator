document.getElementById('jokeBtn').addEventListener('click', generateJoke);

function generateJoke() {
    const jokeEl = document.getElementById('joke');
    jokeEl.innerHTML = 'Loading...';

    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        jokeEl.innerHTML = data.joke;
    })
    .catch(error => {
        jokeEl.innerHTML = 'Oops! Something went wrong.';
        console.error(error);
    });
}



document.getElementById('modeToggle').addEventListener('click', () => {
    const body = document.body;
    const modeToggle = document.getElementById('modeToggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        modeToggle.textContent = 'Light Mode';
    } else {
        modeToggle.textContent = 'Dark Mode';
    }
});

document.getElementById('jokeBtn').addEventListener('click', () => {
    const jokeElement = document.getElementById('joke');
    // Yaha apne joke generation code ko call karen aur result ko jokeElement.innerText me set karen.
    jokeElement.innerText = 'Loading...';
    
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const jokeElement = document.getElementById('joke');
    const jokeText = jokeElement.innerText;

    navigator.clipboard.writeText(jokeText).then(() => {
        alert('Joke copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});