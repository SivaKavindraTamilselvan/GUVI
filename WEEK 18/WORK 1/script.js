const apiUrl = 'https://api.thecatapi.com/v1/images/search';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse JSON response
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        displayError(error.message);
    }
}

function displayData(data) {
    const container = document.getElementById('data-container');
    container.innerHTML = ''; 

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'data-card';
        card.innerHTML = `
            <img src="${item.url}" alt="Cute Cat" class="cat-image">
        `;
        container.appendChild(card);
    });
}

function displayError(message) {
    const container = document.getElementById('data-container');
    container.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}

document.getElementById('fetch-button').addEventListener('click', fetchData);
