import React from 'react';
import Logo from '../images/Local.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';

function orphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={Logo} alt="happy"/>

                    <h2>escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Ribeirão das Neves</strong>
                    <span>Minas Gerais</span>

                </footer>
            </aside>
            <Map 
                center={[-19.7718333,-44.0842498]}
                zoom={12}
                style={{width : '100%', height: '100%' }}
            >
                <TileLayer  url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            </Map>
            <Link to="" className="create-orphanage" >
                <FiPlus size={32} color="#fff" />
            </Link>
        </div>
    );
}

export default orphanagesMap;