import React from 'react';

const InfoAbout = ({ Nombre }) => {
  return (
    <div>
      <h2>¡Welcome {Nombre}!</h2>
      <p>
        This page works as a test to show my habilities that I couldn't show in
        <br />
        my interview, I hope you like it :)
        <br />
        <br />
        On Home, you'll find some funny pictures of softtek
        <br />
        <br />
        On Awesome, you'll be able to search for any Pokémon of the 8<br />
        generations... except Kleavor cause for some reason they haven't updated
        <br />
        the API for the new pokémon, and add your 6 favorite pokemon to a list
        <br />
        <br />
        <br />
        On Profile, you'll be able to change your name (if you don't like the
        <br />
        one that you chose)... this page is under your profile picture on the
        <br />
        navigation bar
        <br />
        <br />
        On About, All the information that you already read :)
        <br />
      </p>
    </div>
  );
};

export default InfoAbout;
