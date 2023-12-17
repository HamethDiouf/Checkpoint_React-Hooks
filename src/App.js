import React, {useState} from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';
import Title from './title';

function App() {
  const [movies, setMovies] = useState([
    { title: 'Viking Wolf',
     description: "Après avoir été témoin d'un meurtre grotesque lors d'une fête dans sa nouvelle ville, une adolescente commence à avoir d'étranges visions et des désirs bizarres.",
      posterURL: './vk.jpg', 
      note: 16 },

      { title: 'Bird Box Barcelona', 
      description: "Alors qu'une force mystérieuse décime l'humanité, une nouvelle menace sinistre grandit dans ce film se déroulant à Barcelone qui prolonge l'histoire du blockbuster 'Bird Box'. " ,
       posterURL: './brd.jpg',
        note: 18 },

    { title: 'The Black Book',
     description: "Après que son fils ait été accusé d'enlèvement, un diacre endeuillé prend la justice en main et combat un gang de policiers corrompus pour l'absoudre.",
      posterURL: './black.jpg', 
      note: 16 },

    { title: 'Hidden Strike', 
    description: "Deux soldats d'élite doivent escorter des civils à travers une série de tirs et d'explosions dans ce film mettant en vedette Jackie Chan et John Cena.",
     posterURL: './hd.jpg', 
     note: 13 },

    { title: 'To Go',
     description: "Un homme qui s'occupe des voitures garées sur son territoire doit protéger ses moyens de subsistance lorsque les trafiquants tentent de l'inciter, lui et ses amis, à vendre de la drogue dans la rue.",
      posterURL: './togo.jpg',
       note: 16 },

    { title: 'Aki and Paw Paw', 
    description: "S'installant dans la ville animée de Lagos, deux frères difficiles recherchent la gloire sur les réseaux sociaux après avoir croisé la route d'un puissant influenceur.",
     posterURL: './pw.jpg',
      note: 13 },

    { title: 'Like Mike', description: "Calvin Cambridge rêve littéralement grand : il veut devenir un basketteur professionnel bien qu'il soit maigre, sans formation dans ce sport et âgé de seulement 14 ans.", posterURL: './lm.jpg', note: 7 },

    { title: 'AKA',
    description: "Un agent des opérations spéciales d'acier voit sa moralité mise à l'épreuve lorsqu'il infiltre un syndicat du crime et se lie de manière inattendue avec le patron. jeune fils." ,
     posterURL: './aka.jpg', 
     note: 18 },

    { title: 'Mokalik (Mechanic)',
     description: "La vie d'un jeune garçon bascule lorsqu'il est envoyé travailler dans un atelier de mécanique loin de sa maison de banlieue jusqu'à ce qu'une opportunité l'oblige à faire un choix difficile." ,
      posterURL: './mkl.jpg',
       note: 13 },

    { title: 'The Son',
     description: "Dans ce thriller psychologique, la vie du peintre Lorenzo devient incontrôlable alors qu'il craint que sa femme essaie de l'isoler de leur bébé." ,
     posterURL: './son.jpg',
      note: 18 },

      { title: 'The Dictator', 
      description: "Sacha Baron Cohen incarne un tyran misogyne qui se retrouve dans les rues de New York, impuissant, méconnaissable et travaillant dans une coopérative alimentaire biologique.", 
      posterURL: './dct.jpg', 
      note: 16 },

    { title: 'The Skin of the Wolf', 
    description: "Un trappeur d'animaux vivant dans une ville de montagne abandonnée du nord de l'Espagne cherche à résoudre sa solitude en trouvant une épouse." ,
     posterURL: './skn.jpg',
      note: 18 },

      { title: 'Once Upon a Crime', 
      description: "Alors qu'il est au bal royal avec Cendrillon, le Petit Chaperon Rouge se retrouve au milieu d'un mystère. Pourra-t-elle résoudre l’affaire avant minuit ?" ,
       posterURL: './oup.jpg',
        note: 10 },

 { title: 'Fatherhood', 
      description: "Un nouveau père veuf fait face aux doutes, aux peurs, au chagrin et aux couches sales alors qu'il entreprend d'élever seul sa fille. Inspiré d'une histoire vraie." , 
    posterURL: './ft.jpg',
     note: 13 },

    { title: 'Dora and the Lost City of Gold', 
    
    description: "Lorsque ses parents disparaissent lors d'une recherche d'une ancienne cité d'or, l'exubérante exploratrice adolescente et ses amis se dirigent vers la jungle pour les sauver." , 
    posterURL: './dora.jpg',
     note: 7 },
  ]);


  const [filter, setFilter] = useState({ title: '', note: '' });

  const handleFilterChange = (filterKey, value) => {
    setFilter({ ...filter, [filterKey]: value });
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      (filter.note === '' || movie.note >= parseInt(filter.note))
    );
  });

  return (
    <div className="App">
      <nav><span id='logo'><img src={' ./movie.png'}/></span></nav>
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <Title />
    </div>
  );
}

export default App;
