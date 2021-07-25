import React from 'react'
import { Link } from "react-router-dom";
import Aurora3 from '../images/aurora.jpg';
import Beach3 from '../images/beach.jpg';
import Forest3 from '../images/forest.jpg';
import Jungle3 from '../images/jungle.jpg';
import Lake3 from '../images/lake.jpg';
import Milky3 from '../images/milky.jpg';

const Navegacion = () => {
    return (
        <div>
            <Link to="/Aurora">
            <figure>
                <img src={Aurora3} alt="" />
                <figcaption>Aurora</figcaption>
            </figure>
            </Link>
            
            <Link to="/Beach">
            <figure>
                <img src={Beach3} alt="" />
                <figcaption>Beach</figcaption>
            </figure>
            </Link>

            <Link to="/Forest">
            <figure>
                <img src={Forest3} alt="" />
                <figcaption>Forest</figcaption>
            </figure>
            </Link>

            <Link to="Jungle">
            <figure>
                <img src={Jungle3} alt="" />
                <figcaption>Jungle</figcaption>
            </figure>
            </Link>

            <Link to="/Lake">
            <figure>
                <img src={Lake3} alt="" />
                <figcaption>Lake</figcaption>
            </figure>
            </Link>

            <Link to="Milky">
            <figure>
                <img src={Milky3} alt="" />
                <figcaption>Milky</figcaption>
            </figure>
            </Link>
        </div>
    )
}

export default Navegacion
