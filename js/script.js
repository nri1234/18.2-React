var movies = [
    {
        id: 1,
        title: "Forest  Gump",
        desc:
            "Forrest Gump to romantyczna historia, w której Tom Hanks wcielił się w tytułową postać - nierozgarniętego młodego człowieka o wielkim sercu i zdolności do odnajdywania się w największych wydarzeniach w historii USA, począwszy od swego dzieciństwa w latach 50-tych. Po tym, jak staje się gwiazdą footballu, odznaczonym bohaterem wojennym i odnoszącym sukcesy biznesmenem, główny bohater zyskuje status osobistości, lecz nigdy nie rezygnuje z poszukiwania tego, co dla niego najważniejsze - miłości swej przyjaciółki, Jenny Curran. ",
        release: "4 listopada 1994 (Polska) 23 czerwca 1994 (świat)",
        poster: "images/Forest Gump.jpg"
    },
    {
        id: 2,
        title: "Avengers: Endgame",
        desc:
            "Po wymazaniu połowy życia we Wszechświecie przez Thanosa, Avengersi starają się zrobić wszystko co konieczne, aby pokonać szalonego tytana. ",
        release: "	25 kwietnia 2019 (Polska) 22 kwietnia 2019 (świat)",
        poster: "images/Avengers.jpg"
    },
    {
        id: 3,
        title: "Zielona Mila",
        desc:
            "Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.",
        release: "	24 marca 2000 (Polska) 6 grudnia 1999 (świat)",
        poster: "images/Zielona mila.jpg"
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement(
        "li",
        { key: movie.id },
        React.createElement("img", { src: movie.poster }),
        React.createElement("h2", {}, "Tytuł: " + movie.title),
        React.createElement("p", {}, "Opis: " + movie.desc),
        React.createElement("p", {}, "Data wydania: " + movie.release)
    );
});

var element = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Lista filmów"),
    React.createElement("ol", {}, moviesElements)
);

ReactDOM.render(element, document.getElementById("app"));
