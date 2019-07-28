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
//Biorac pod uwagę, że tworzymy komponenty z tablicy: najpierw tablica
var MoviesList = React.createClass({
    // walidujemy propsa tablica
    propTypes: {
        moviesList: React.PropTypes.array.isRequired
    },
    //najpierw tworzymy cala tablice z id
    render: function() {
        var movieElement = this.props.moviesList.map(function(movie) {
            return React.createElement(Movie, {
                key: movie.id,
                movie: movie
            });
        });

        return React.createElement("ol", {}, movieElement);
    }
});

// Poszczegolne obiekty z tablicy, cala lista ktora bedziemy tworzyc
var Movie = React.createClass({
    // object
    propTypes: {
        movie: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement(
            "li",
            {},
            React.createElement(MovieImage, { image: this.props.movie.poster }),
            React.createElement(MovieTitle, { title: this.props.movie.title }),
            React.createElement(MovieDescription, {
                description: this.props.movie.desc
            }),
            React.createElement(MovieDate, { date: this.props.movie.release })
        );
    }
});

// poszczegolne elementy listy
var MovieImage = React.createClass({
    propTypes: {
        image: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement("img", { src: this.props.image });
    }
});

// poszczegolne elementy listy
var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement("h2", {}, "Tytuł: " + this.props.title);
    }
});

// poszczegolne elementy listy
var MovieDescription = React.createClass({
    propTypes: {
        description: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement("p", {}, "Opis: " + this.props.description);
    }
});

// poszczegolne elementy listy
var MovieDate = React.createClass({
    propTypes: {
        date: React.PropTypes.string.isRequired
    },
    render: function() {
        return React.createElement("p", {}, "Data wydania: " + this.props.date);
    }
});

var element = React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Lista filmów"), //element h1
    React.createElement(MoviesList, { moviesList: movies }) //nasza zrenderowana tablica to tablic movies
);

// renderujemy DOM
ReactDOM.render(element, document.getElementById("app"));
