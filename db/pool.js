const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "barrmohammed",
  database: "arty_portfolio",
  password: "Allahis#1",
  port: 5432
});



const artworks = [
    {
     artist: "Andy Warhol",
     medium: " Acrylic",
     title: "Shot Marilyns",
     year: 1964,
     style: "Pop Art",
     location: "London",
     imgUrl: "/images/marylin.jpg"
    },

    {
        artist: "Jean-Michel Basquiat",
        medium: " Acrylic",
        title: "Untitled",
        year: 1982,
        style: "Contemporary",
        location: "Brooklyn",
        imgUrl: "/images/basquiat_skeleton.jpg"

    },
    {
        artist: "Vincent van Gogh",
        medium: "Oil",
        title: "The Starry Night",
        year: 1889,
        style: "Post-Impressionist",
        location: "New York",
        imgUrl: "/images/starry.jpg"


    },
    {
        artist: "Claude Monet",
        medium: "Oil",
        title: "The Water Lily Pond",
        year: 1899,
        style: "Impressionism",
        location: "New York",
        imgUrl: "/images/monet_lake.jpg"

    },
    {
        artist: "Pablo Picasso",
        medium: "Oil",
        title: "The Old Guitarist",
        year: 1904,
        style: "Expressionism",
        location: "Chicago",
        imgUrl: "/images/blue_picasso.jpg"


    }

]

const mediums = [
    {
        material: "Acrylic"
    },
    {
        material: "Oil"
    }

]

const styles = [
    {
        artStyle: "Pop Art"
    },
    {
        artStyle: "Contemporary"
    },
    {
        artStyle: "Post-Impressionist"
    },
    {
        artStyle: "Expressionism"
    }

]

const locations = [
    {
        city: 'London'
    },
     {
        city: "Brooklyn"
     },
     {
        city: "New York"
     },
     {
        city: "Chicago"
     }

]
