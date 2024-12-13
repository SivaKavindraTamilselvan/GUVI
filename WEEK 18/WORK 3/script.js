const apiUrl = "https://dog-api.kinduff.com/api/facts";

async function fetchDogFacts() {
    try {
        console.log("Fetching dog facts...");

        const response = await fetch(apiUrl);
        console.log("API Response:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Parsed Data:", data);

        if (data.success && data.facts && data.facts.length > 0) {
            displayDogFacts(data);
        } else {
            displayError('No facts available or invalid response structure.');
        }
    } catch (error) {
        console.error("Error fetching dog facts:", error);
        displayError(error.message);
    }
}

function displayDogFacts(data) {
    const container = document.getElementById("dog-facts-container");
    container.innerHTML = "";

    console.log("Displaying dog facts:", data);

    data.facts.forEach(fact => {
        const factElement = document.createElement("div");
        factElement.className = "dog-fact";
        factElement.innerHTML = `<p>${fact}</p>`;
        container.appendChild(factElement);
    });
}

function displayError(message) {
    const container = document.getElementById("dog-facts-container");
    container.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded");
    fetchDogFacts();
});

document.getElementById("fetch-facts-btn").addEventListener("click", fetchDogFacts);
