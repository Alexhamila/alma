import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer";

const LieuPage = ({ data }) => (
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
        <div className="background-radio">
            <div className="container" style={{paddingTop: "50px"}}>
                <div className="jumbotron" style={{marginBottom: "58px"}}>
                    <h1 class="display-4" style={{textAlign: "center", maxWidth: "100%", marginBottom: "3rem"}}>Où nous trouver</h1>
                    {/* <iframe class="legende map" title="Example" width="100%" height="500px" src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik"></iframe> */}
                    <iframe title="map" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=7.038443684577943%2C43.61912207338791%2C7.042552828788758%2C43.62133564230126&amp;layer=mapnik" class="mapepic"></iframe>
                    <br/><small><a href="https://www.openstreetmap.org/#map=18/43.62023/7.04050">Afficher une carte plus grande</a></small>
                </div>  
            </div>
            <Footer />
        </div>
    
    </Layout>
)
export default LieuPage