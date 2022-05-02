import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import ShowInfoPokemon from './ShowInfoPokemon';
import ShowFavoritePokemon from './ShowFavoritePokemon';

function favPkmnInit() {
  var pkms = JSON.parse(localStorage.getItem('favPkmns'));
  return pkms;
}

function ShowPokemon() {
  const [srcPkmn, setSrcPkmn] = useState('');

  const [pkmnName, setPkmnName] = useState('');
  const [dexNum, setDexNum] = useState('');
  const [sprite, SetSprite] = useState('');
  const [favorite, setFavorite] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const [favPkmns, setfavPkmns] = useState(() => favPkmnInit());

  // const [favPkmns, setfavPkmns] = useState(5);

  const handleSearch = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + srcPkmn.toLowerCase())
      .then((res) => res.json())
      .then((res) => displaySearch(res));
  };

  useEffect(() => {
    var locFavPkmns = JSON.parse(localStorage.getItem('favPkmns'));
    if (favorite === 1) {
      if (locFavPkmns.length < 6 && locFavPkmns.length > 0) {
        locFavPkmns.push({ pkmn: pkmnName, dexNum: dexNum, sprite: sprite });
        localStorage.setItem('favPkmns', JSON.stringify(locFavPkmns));
      }
      if (locFavPkmns.length === 0) {
        locFavPkmns = [{ pkmn: pkmnName, dexNum: dexNum, sprite: sprite }];
        localStorage.setItem('favPkmns', JSON.stringify(locFavPkmns));
      }
      setfavPkmns(locFavPkmns);
    } else if (favorite === 2) {
      locFavPkmns = locFavPkmns.filter(function (obj) {
        return obj.pkmn !== pkmnName;
      });
      localStorage.setItem('favPkmns', JSON.stringify(locFavPkmns));
      setfavPkmns(locFavPkmns);
    }

    setFavorite(0);
  }, [favorite]);

  const displaySearch = (res) => {
    setPkmnName(res.name);
    setDexNum(res.id);
    SetSprite(res.sprites.front_default);
    var isFav = JSON.parse(localStorage.getItem('favPkmns')).find(function (
      post,
      index
    ) {
      if (post.pkmn == res.name) return true;
    });
    if (isFav) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    return true;
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='justify-content-center text-center'>
      <h1>Search for a Pokémon</h1>
      <input
        type='text'
        onKeyDown={(e) => handleEnter(e)}
        onChange={(e) => setSrcPkmn(e.target.value)}
      />
      <br />
      <br />
      <Button onClick={() => handleSearch()}>Search</Button>
      <div className='Container'>
        <ShowInfoPokemon
          dexNum={dexNum}
          pkmnName={pkmnName}
          sprite={sprite}
          setFavorite={setFavorite}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
        ></ShowInfoPokemon>
      </div>
      <br />
      <ShowFavoritePokemon
        pkmnList={favPkmns}
        setFavorite={setFavorite}
        setIsChecked={setIsChecked}
        isChecked={isChecked}
      ></ShowFavoritePokemon>
    </div>
  );
}

export default ShowPokemon;
