import React from 'react';
import ShowInfoPokemon from './ShowInfoPokemon';
import { Card, Col, Container, Row, Stack } from 'react-bootstrap';

const ShowFavoritePokemon = ({
  pkmnList,
  setFavorite,
  setIsChecked,
  isChecked,
}) => {
  if (pkmnList == '') {
    var empty = true;
  }
  return (
    <div>
      <h2>My Favs &lt;3</h2>
      <Stack
        className='d-flex justify-content-center text-center'
        direction='horizontal'
        gap={3}
      >
        {!empty ? (
          pkmnList.map((pkmn) => (
            <Card style={{ width: '10rem', height: '15rem' }}>
              <Card.Img variant='top' src={pkmn.sprite} />
              <Card.Body>
                <Card.Title>
                  #{pkmn.dexNum} {pkmn.pkmn}
                </Card.Title>
                {/* <Card.Text>
              </Card.Text> */}
              </Card.Body>
            </Card>
          ))
        ) : (
          <Card style={{ width: '10rem', height: '15rem' }}>
            <Card.Img variant='top' src={require('../../Img/img5.png')} />
            <Card.Body>
              <Card.Title>choose a fav pokemon :(</Card.Title>
              {/* <Card.Text>
              </Card.Text> */}
            </Card.Body>
          </Card>
        )}
      </Stack>
      <br />
    </div>
  );
};

export default ShowFavoritePokemon;
