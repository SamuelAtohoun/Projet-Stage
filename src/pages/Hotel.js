import React from "react";
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./images/logo.jpg";
import Header from "../components/Header";
import "./Hotel.css"; 

function Hotel(){
    return(
        <div className="hotelPage">
            <Helmet>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/> */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
            {/* <link rel="stylesheet" href="./Hotel.css"/> */}
            <title>Hotel</title>
            </Helmet>
            <Header logo={logo}/>
            <main>
                <div class="img-container">
                    <p>Trouvez Votre Prochain Séjour</p>
                    <p>Explorez des offres sur les hôtels, hébergements indépendants et bien plus encore.</p>
                    <img id="bg-img" src="images/tourism1.jpg" alt=""/>
                </div>
                <form action="">
                    <input type="text" name="" placeholder="Où allez-vous?"/>
                    <input type="date" name="" placeholder="Arrivée"/>
                    <input type="date" name="" placeholder="Départ"/>
                    <input type="text"/>
                    <div style={{color: "white",backgroundColor:"#0370FF"}} class="form-div">
                        <p class="form-p">
                            Rechercher
                        </p>
                    </div>
                </form>
                <section>
                    <h2>Nos recommendations</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptatem at est repudiandae natus obcaecati asperiores et qui quidem ex, minus, quod laboriosam. Saepe, sunt velit! Nihil minus rem doloribus?</p>
                    <div class="d-flex justify-content-evenly">
                        <div class="card" style={{width: "15rem"}}>
                            <img src="images/grand hyat dubai.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" style={{width: "15rem"}}>
                            <img src="images/Lagonissi Resort athènes.jpeg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" style={{width: "15rem"}}>
                            <img src="images/Palais Namaskar.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" style={{width: "15rem"}}>
                            <img src="images/Palais Namaskar.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                </div>
                </section>
                <section>
                    <h2>Redécouvrez Dakar</h2>
                    <p>
                        Réservez dès maintenant et laissez-vous séduire par la magie de Dakar. Nous avons soigneusement sélectionné les meilleures offres pour que vous puissiez profiter pleinement de votre séjour dans cette ville dynamique et accueillante.
                    </p>
                    <div class="horizontal-card-container">
                        <div class="card horizontal-card">
                        <img src="images/Radisson Blu dakar.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <a href="#"><h3>Radisson Blu</h3></a>
                        <p class="card-text">Admirez la beauté vibrante du Sénégal dans cet hôtel moderne de Dakar.</p>
                        </div>
                    </div>
                    <div class="card horizontal-card">
                        <img src="images/Terrou-Bi.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <a href="#"><h3>Le Lagon</h3></a>
                        <p class="card-text">Votre havre de paix vous attend…</p>
                        </div>
                    </div>
                    <div class="card horizontal-card">
                        <img src="images/BOMA Lifestyle.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <a href="#"><h3>BOMA Lifestyle</h3></a>
                        <p class="card-text">Profitez d’une offre unique et atypique à Dakar</p>
                        </div>
                    </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Hotel;