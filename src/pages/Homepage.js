import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { store } from "../helpers/store";
import Navigazione from '../components/Navigazione';
import Jumbotron from '../components/Jumbotron';
import Filtro from '../components/Filtro';
import Evidenza from '../components/Evidenza';
import Iscriviti from '../components/Iscriviti';
import Info from '../components/Info';
import Mappa from '../components/Mappa';

function Homepage() {
  const [houses, setHouses] = useState([]);
  const [evidenza, setEvidenza] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    async function getHouses() {
      const resp = await axios.get(store.apiBaseUrl + store.apiUrls.houses)
        .then((resp) => {
          setHouses(resp.data.results)
        })
    }

    async function getInEvidenza() {
      const resp = await axios.get(store.apiBaseUrl + store.apiUrls.evidenza)
        .then((resp) => {
          setEvidenza(resp.data.results)
        })
    }

    getHouses();
    getInEvidenza();

  }, []);

  function handlerFiltered() {
    const filteredHouse = houses.filter((house) => {
      const searchString = house.title.toLocaleLowerCase();
      let searchType = house.type.toLocaleLowerCase();
      if (type === "Filtra per tipo") {
        setType("")
      }
      return searchString.includes(text.toLocaleLowerCase()) && searchType.includes(type.toLocaleLowerCase());
    })
    setFiltered(filteredHouse);
  }

  return (
    <div className='section'>
      <div className='text-center'>
        <Jumbotron />
        <Navigazione onInput={(e) => setText(e)} text={text} />
        <Filtro onType={(e) => setType(e)} />
        <button type="button" className="my_btn_secondary btn" onClick={handlerFiltered}>Cerca</button>
        {filtered.length > 0 &&
          <Evidenza houses={filtered} text='Alloggi:' />
        }
        <Evidenza houses={evidenza} text='Alloggi in evidenza' />
        <Info />
        <Iscriviti />
      </div>
    </div>
  )
}

export default Homepage;
