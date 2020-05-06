import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer";

const EquipePage = ({ data }) => (
    <Layout>
    <SEO title="Accueil" />
        <nav class="navbar navbar-expand-lg navbar-dark shadow" style={{backgroundColor: "#1F1E29"}}>
            <div class="container">
                <Link to="#" class="navbar-brand">Alma</Link>
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
        <div className="background-mystere">
            <div className="container" style={{paddingTop: "50px"}}>
                <div className="jumbotron">
                    <h1 class="display-4" style={{textAlign: "center", maxWidth: "100%"}}>Notre Equipe</h1>
                    <div class="row">
                        <div class="col-xl-6 col-md-12">
                            <ul class="list-group">
                                <li class="list-group-item">VICENT Rodolphe <strong>(Président)</strong></li>
                                <li class="list-group-item">GAUVRIT Frédéric <strong>(Vice-président | RADIO)</strong></li>
                                <li class="list-group-item">SILVANO Jacques <strong>(Vice-Président | CINEMA)</strong></li>
                                <li class="list-group-item">BELDA Aurélien <strong>(Secrétaire)</strong></li>
                                <li class="list-group-item">BUFFET Renée <strong>(Trésorière)</strong></li>
                                <li class="list-group-item" >PIERRARD Mélanie <strong>(Trésorière-adjointe)</strong></li>    
                            </ul>
                        </div>
                        <div class="col-xl-6 col-md-12">
                            <ul class="list-group">
                                <li class="list-group-item">MIRTAIN Carol <strong>(Trésorière-adjointe)</strong></li>
                                <li class="list-group-item">GORDON Maité <strong>(en charge du cinéma scolaire)</strong></li>
                                <li class="list-group-item">CHARVET Frédéric <strong>(en charge des Opéras/Ballets)</strong></li>
                                <li class="list-group-item">JONES Karen <strong>(Théâtre en anglais)</strong></li>
                                <li class="list-group-item">CAPOLONGO Anne-Laure <strong>(Adhésions)</strong></li>
                                <li class="list-group-item">RUNFOLA Pierre-Yves <strong>(Cinéma)</strong></li>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        
    <Footer />
    </Layout>
)
export default EquipePage