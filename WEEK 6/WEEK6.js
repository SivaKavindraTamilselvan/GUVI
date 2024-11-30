const countries = [
    {
        name: "India",
        capital: "New Delhi",
        flag: "🇮🇳",
        population: 1393409038,
        region: "Asia",
        currencies: [{ code: "INR", name: "Indian rupee", symbol: "₹" }]
    },
    {
        name: "Bhutan",
        capital: "Thimphu",
        flag: "🇧🇹",
        population: 771612,
        region: "Asia",
        currencies: [{ code: "BTN", name: "Bhutanese ngultrum", symbol: "Nu." }]
    },
    {
        name: "United States",
        capital: "Washington, D.C.",
        flag: "🇺🇸",
        population: 331002651,
        region: "Americas",
        currencies: [{ code: "USD", name: "United States dollar", symbol: "$" }]
    },
    {
        name: "Maldives",
        capital: "Malé",
        flag: "🇲🇻",
        population: 521807,
        region: "Asia",
        currencies: [{ code: "MVR", name: "Maldivian rufiyaa", symbol: "Rf." }]
    }
];

const asianCountries = countries.filter(country => country.region === "Asia");
console.log("Asian Countries:", asianCountries);

const smallPopulationCountries = countries.filter(country => country.population < 200000);
console.log("Countries with population < 2 lakhs:", smallPopulationCountries);

console.log("Country Details:");
countries.forEach(country => {
    console.log(`Name: ${country.name}, Capital: ${country.capital}, Flag: ${country.flag}`);
});

const totalPopulation = countries.reduce((total, country) => total + country.population, 0);
console.log("Total Population:", totalPopulation);

const usdCountries = countries.filter(country =>
    country.currencies.some(currency => currency.code === "USD")
);
console.log("Countries using USD:", usdCountries);
