//a
class Movie {
    constructor(title, studio, rating = "PG") {//b
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    //c
    static getPG(movie) {
        const a = [];
        for (var i of movie) {
            if (i.rating === "PG") {
                a.push(i);
            }
        }
        return a;
    }
}
const movies = [
    new Movie("Billa", "A", "PG"),
    new Movie("GOAT", "B", "PG13"),
    new Movie("Vettaiyan", "C"),
];
const m = Movie.getPG(movies);
console.log("MOVIE WITH PG RATING");
for (var i of m) {
    console.log(i.title);
}

//d
console.log(".......................");
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);