"use client";

export interface Movie {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  videoUrl?: string;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Inception",
    desc: "A skilled thief who infiltrates dreams to steal secrets faces his toughest mission yet: planting an idea deep within a target’s subconscious, risking his grip on reality.",
    imageUrl:
      "https://art-s.nflximg.net/2d06c/1463a9c20219ce984624bc6ce52894a124a2d06c.jpg",
    videoUrl:
      "https://static.videezy.com/system/resources/previews/000/046/807/original/200424-CubeCountdown.mp4",
  },
  {
    id: 2,
    title: "The Matrix",
    desc: "A computer hacker uncovers the shocking truth that his world is an elaborate simulation controlled by machines, leading him to join a rebellion to free humanity.",
    imageUrl:
      "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/The-Matrix-poster-green.jpg",
  },
  {
    id: 3,
    title: "Star Wars: Revenge of the Sith",
    desc: "Anakin Skywalker is torn between loyalty and ambition, ultimately embracing the dark side, which leads to the rise of Darth Vader and the Galactic Empire.",
    imageUrl:
      "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/8885/1368885-i-e53a616c3064",
  },
  {
    id: 4,
    title: "Dune",
    desc: "Young Paul Atreides must navigate treachery and destiny on the desert planet Arrakis, where powerful forces battle for control of the universe’s most valuable resource.",
    imageUrl:
      "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbQlCAYcWesNGYksUYsDJfE7Rk55xCAdCLkmbVILoSW6A__jtYSoDStfo8SezHnAngT-D97tIXNIaS-8JirPI83syjGj6qcgCloO.jpg?r=020",
  },
  {
    id: 5,
    title: "Interstellar",
    desc: "To ensure humanity’s survival, a team of astronauts ventures through a wormhole in search of a habitable planet, facing cosmic challenges and the bounds of love and time.",
    imageUrl:
      "https://m.media-amazon.com/images/S/pv-target-images/14db27b1570a8703e3975fddaa6b624bb2ca77ac7dbff925802102995b46420d.jpg",
    videoUrl:
      "https://static.videezy.com/system/resources/previews/000/046/807/original/200424-CubeCountdown.mp4",
  },
  {
    id: 6,
    title: "Avengers",
    desc: "When Earth faces an apocalyptic threat from Loki and his alien army, a team of extraordinary heroes must learn to fight as one to save the world from destruction.",
    imageUrl:
      "https://media.comicbook.com/wp-content/uploads/2013/06/avengers.jpg",
  },
];
