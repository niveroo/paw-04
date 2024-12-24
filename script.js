async function getJoke(category) {
    try {
        const response = await fetch(`http://localhost:3000/jokebook/joke/${category}`);
        const data = await response.json();
        document.getElementById("jokeDisplay").innerText = `${data.joke}\n${data.response}`;
    } catch (error) {
        document.getElementById("jokeDisplay").innerText = "Error fetching joke";
    }
}

// Event listeners for buttons
document.getElementById("funnyJokeBtn").addEventListener('click', () => getJoke('funnyJoke'));
document.getElementById("lameJokeBtn").addEventListener('click', () => getJoke('lameJoke'));
