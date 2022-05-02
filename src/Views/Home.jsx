import React from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import Slider from '../Components/Home/Slider';

function Home() {
  const [name, setName] = useLocalStorage('name', '');
  return (
    <div>
      <>
        <Slider></Slider>
      </>
    </div>
  );
}

export default Home;
