import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer";

const ConfidentialitePage = ({ data }) => (
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
                    <h1 class="display-4" style={{textAlign: "center", maxWidth: "100%"}}>Confidentialité</h1>
                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                        Nous voulons que vous compreniez le type d'informations que nous collectons via nos services
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <p>
                        Les informations que nous collectons servent à améliorer les services proposés à tous nos utilisateurs. Il peut s'agir d'informations de base, telles que la langue que vous utilisez, ou plus complexes, comme les annonces que vous trouvez les plus utiles, les personnes qui vous intéressent le plus sur le Web ou les vidéos YouTube qui sont susceptibles de vous plaire. Les informations que nous collectons et l'usage que nous en faisons dépendent de la manière dont vous utilisez nos services et dont vous gérez vos paramètres de confidentialité.
                    </p>
                    <hr/>
                    <p>Les informations que nous collectons incluent les identifiants uniques, le type et les paramètres du navigateur, le type et les paramètres de l'appareil, le système d'exploitation, des données relatives au réseau mobile (telles que le nom de l'opérateur et le numéro de téléphone) et le numéro de version de l'application. Nous recueillons aussi des informations relatives aux interactions entre vos applications, vos navigateurs, vos appareils et nos services, telles que l'adresse IP, les rapports d'erreur, l'activité du système, ainsi que la date, l'heure et l'URL de provenance de votre demande.</p>
                </div>
            </div>
        </div>
        
    <Footer />
    </Layout>
)
export default ConfidentialitePage