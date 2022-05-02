import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';

const ShowInfoPokemon = ({
  dexNum,
  pkmnName,
  sprite,
  setFavorite,
  setIsChecked,
  isChecked,
}) => {
  if (pkmnName) {
    const handleChange = (e) => {
      if (e.target.checked) {
        setFavorite(1);
        setIsChecked(true);
      } else {
        setIsChecked(false);
        setFavorite(2);
      }
    };

    return (
      <div>
        <h2>
          #{dexNum} {pkmnName}
        </h2>
        <img src={sprite} alt='' />
        <br />
        <label for='isGoing'>Favorite:  </label>
        <input
          name='isGoing'
          type='checkbox'
          checked={isChecked}
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  } else {
    <div>
      <h2>Pkmn Not Found :(</h2>
      {/* <img src={sprite} alt='' /> */}
    </div>;
  }
};

export default ShowInfoPokemon;
