import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer";

const EquipePage = ({ data }) => (
  <Layout>
    <SEO title="Accueil" />
        <nav class="navbar navbar-expand-lg navbar-dark shadow" style={{backgroundColor: "#1F1E29"}}>
            <div class="container">
                <a class="navbar-brand" href="#">Alma</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="/">Accueil</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/radio/">Radio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/cinema/">Alma Cinéma</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        <div className="container" style={{paddingTop: "50px"}}>
            <div className="jumbotron">
                <h1 class="display-4">Notre Equipe:</h1>
                <p>VICENT Rodolphe (Président)
GAUVRIT Frédéric (Vice-président, en charge de la radio)
SILVANO Jacques (Vice-Président responsable du cinéma)
BELDA Aurélien (Secrétaire)
BUFFET Renée (Trésorière)
PIERRARD Mélanie (Trésorière-adjointe)
MIRTAIN Carol (Trésorière-adjointe)
GORDON Maité (en charge du cinéma scolaire)
CHARVET Frédéric (en charge des Opéras/Ballets)
JONES Karen (Théâtre en anglais)
CAPOLONGO Anne-Laure (adhésions)
RUNFOLA Pierre-Yves (Cinéma)</p>
            </div>
            
        </div>
    <Footer />
  </Layout>
)
export default EquipePage