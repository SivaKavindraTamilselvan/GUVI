const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_2Na3Km6xzjb5KuDaLXtsQ30xRcpnyFZSZPfADhmdnr456GSu2QqWxasBzcB8RFjZ" // Your API key
});

var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

function fetchDogImage() {
    fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", requestOptions)
        .then(response => response.json())
        .then(result => displayDogImage(result))
        .catch(error => console.log('Error:', error));
}

function displayDogImage(data) {
    const container = document.getElementById('image-container');
    container.innerHTML = '';
    if (data && data.length > 0) {
        const dogImage = document.createElement('img');
        dogImage.src = data[0].url; 
        dogImage.alt = "Random Dog";
        dogImage.style.width = "300px";
        dogImage.style.height = "auto";

        const breedInfo = document.createElement('p');
        breedInfo.textContent = data[0].breeds && data[0].breeds.length > 0
            ? `Breed: ${data[0].breeds[0].name}`
            : "Breed information not available";

        container.appendChild(dogImage);
        container.appendChild(breedInfo);
    } else {
        container.innerHTML = '<p>No data available</p>';
    }
}

document.getElementById('fetch-button').addEventListener('click', fetchDogImage);
