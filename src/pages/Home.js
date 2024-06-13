import React from "react";
import {Helmet} from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./Home.css"; 
import logo from "./images/logo.jpg";
import Header from "../components/Header";

function Home() {
    return (
        <div className="homePage">
            <Helmet>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com"/> */}
                {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/> */}
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/> */}

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"/>
                {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/> */}

                {/* <link rel="stylesheet" href="hotel.css"/> */}
                <title>Accueil</title>
            </Helmet>
            <Header logo={logo}/>
            <main>
                <div className="presentation">
                    <h1>Retrouvez les meilleurs offres sur les vols et hôtels</h1>
                    <div className="form-container">
                        <p>Rechercher votre prochaine destination et votre hébergement en quelques clics</p>
                        <form action="">
                            <input type="text" placeholder="hôtels" />
                            <i className="fa-solid fa-hotel"></i>
                            <input type="text" placeholder="Destination" />
                            <i className="fa-solid fa-plane"></i>
                        </form>
                    </div>
                </div>
                <div className="separator"></div>
                <section className="hotel">
                    <h1>Nos hotels</h1>
                    <p>Découvrez nos différentes offres qui répondent sûrement à vos attentes</p>
                    <p>Que vous voyagiez pour affaires ou pour le plaisir, nous avons sélectionné les meilleurs hôtels pour vous garantir un séjour inoubliable. Chacun de nos hôtels propose des services et des équipements de haute qualité, adaptés à tous les besoins et tous les budgets.</p>
                    <div className="hotel-container-div">
                        <div className="hotel-container hotel-container-1">
                            {/* <!-- <p>CONFORT</p> --> */}
                            <img src="./images/hotel4.jpeg" alt="" />
                        </div>
                        <div className="hotel-container hotel-container-2">
                            <img src="./images/hotel3.jpg" alt="" />
                            <img src="./images/chambre.jpg" alt="" />
                        </div>
                        <div className="hotel-container hotel-container-3">
                            <img src="./images/hotel1.jpg" alt="" />
                            <img src="./images/hotel.jpeg" alt="" />
                        </div>
                    </div>
                    <form action="">
                        <input type="submit" value="Voir tous les hôtels" />
                    </form>
                </section>
                <div className="separator"></div>
                <section className="vol">
                    <h1>Vols</h1>
                    <p>Rejoignez votre prochaine destination tout en faisant beaucoup plus d’économies.<br/>
                        Découvrez notre sélection de vols à des prix compétitifs pour toutes vos destinations préférées.
                        Que vous planifiez des vacances en famille, un voyage d’affaires ou une escapade romantique, nous avons des options adaptées à vos besoins et à votre budget.</p>
                    <div className="flight-card">
                        <div className="card" style={{width: "18rem"}}>
                            <img src="./images/paris-2024.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                {/* <!-- <h5 className="card-title">Card title</h5> --> */}
                                <p className="card-text">Réservez votre vol pour les jeux olympiques de Paris 2024.</p>
                                <a href="#" className="btn btn-primary">Plus de détails</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="./images/Niagara_Falls_Sunset_(cropped).jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                {/* <!-- <h5 className="card-title">Card title</h5> --> */}
                                <p className="card-text"> Prenez l’initiative pour contempler les chuttes du Niagara.</p>
                                <a href="#" className="btn btn-primary">Plus de détails</a>
                            </div>
                        </div>
                        <div className="card" style={{width: "18rem"}}>
                            <img src="./images/monumentRenaissance.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                {/* <!-- <h5 className="card-title">Card title</h5> --> */}
                                <p className="card-text">Découvrir le monument de la renaissance africaine au Senegal.</p>
                                <a href="#" className="btn btn-primary">Plus de détails</a>
                            </div>
                        </div>
                    </div>
                    <form action="">
                        <input type="submit" value="Choisissez votre destination" />
                    </form>
                </section>
            </main>
        </div>
    );
}

export default Home;