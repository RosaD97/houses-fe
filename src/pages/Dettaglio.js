import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { store } from "../helpers/store";
import L from 'leaflet';
import {
    setKey,
    setDefaults,
    setLanguage,
    setRegion,
    fromAddress,
    fromLatLng,
    fromPlaceId,
    setLocationType,
    geocode,
    RequestType,
} from "react-geocode";

function Dettaglio() {
    const { id } = useParams();
    const [house, setHouse] = useState([]);
    const [venditore, setVenditore] = useState([]);

    async function getHouses() {
        const resp = await axios.get(store.apiBaseUrl + store.apiUrls.house + `${id}`)
            .then((resp) => {
                // console.log(resp.data.results)
                setHouse(resp.data.results.house)
                setVenditore(resp.data.results.user)
            })
    }

    function prova() {
        const url = 'https://geocode.maps.co/reverse?lat=45.465454&lon=9.186516&api_key=65f178114a0aa076552608jqu1d5c87';

        axios.get(url)
            .then(response => {
                console.log('Risposta ricevuta:', response.data.lat);
            })
            .catch(error => {
                console.error('Si è verificato un errore durante la richiesta:', error);
            });
    }

    useEffect(() => {
        getHouses();

    }, [])

    useEffect(() => {
        // Inizializza la mappa 
        var map = L.map('map').setView([house.latitude || 0, house.longitude || 0], 13);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        var marker = L.marker([house.latitude || 0, house.longitude || 0]).addTo(map);

        return () => {
            map.remove();
        };
    }, [house]);

    return (
        <div className='container dettaglio my-5'>
            <a href={'/'} className='btn py-4'>back</a>
            <div className='d-md-flex'>
                <div className='img-wrapper col-12 col-md-7'>
                    <img src={'http://127.0.0.1:8000/storage/' + house.img} />
                </div>
                <div className='p-3 col-12 col-md-5'>
                    <h5>Contatta il venditore:</h5>
                    <p>Nome Venditore: {venditore.name}</p>
                    <a href={`mailto:${venditore.email}`}>Invia un'email</a>
                    <p>Email: {venditore.email}</p>
                    <p>Numero stanze: {house.numeroStanze}</p>
                </div>
            </div>
            <div className='py-4'>
                <h3>{house.title}</h3>
                <p>Descrizione: {house.description}</p>
                <div>
                    <p>Tipologia: {house.type}</p>
                    <p>Prezzo: {house.price} €</p>
                </div>
            </div>
            <div className='py-4'>
                <h3 onClick={prova}>Informazioni</h3>
                <div className='d-md-flex'>
                    <div className='col-md-6'>
                        <p>Bagno Privato: {house.bagno === 1 ? 'Si' : 'No'}</p>
                        <p>Wifi: {house.wifi === 1 ? 'Si' : 'No'}</p>
                    </div>
                    <div className='col-md-6'>
                        <p>Riscaldamento: {house.riscaldamento === 1 ? 'Si' : 'No'}</p>
                        <p>Aria condizionata: {house.ariaCondizionata === 1 ? 'Si' : 'No'}</p>
                    </div>
                </div>
            </div>
            <div>
                <h3>Dove si trova</h3>
                <div id="map" style={{ height: '400px' }}></div>

            </div>
        </div>
    )
}

export default Dettaglio


