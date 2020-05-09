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
                    <h1 class="display-4" style={{textAlign: "center", maxWidth: "100%"}}>Termes de service</h1>
                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                        En utilisant ce site web, vous acceptez d’être lié par les termes et conditions de services suivants (“termes de services”)
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <h3>Termes généraux</h3>
                    <ul class="list-group">
                        <li class="list-group-item">1. Vous devez être âgé d’au moins 13 ans pour utiliser le(s) service(s).</li>
                        <li class="list-group-item">2. Vous devez être un être humain. Il est interdit d’utiliser un procédé automatisé pour utiliser le(s) service(s).</li>
                        <li class="list-group-item">3. Vous devez fournir votre nom complet, une adresse courriel valide et toute autre information demandée.</li>
                        <li class="list-group-item">4. Un compte utilisateur ne peut être utilisé que par une seule personne. Il est interdit de partager un compte utilisateur entre plusieurs personnes.</li>
                        <li class="list-group-item">5. Une personne ou entité légale ne peut ouvrir plus d’un compte gratuit.</li>
                    </ul>
                    <hr/>
                    <h3>Paiements, remboursements et changements de niveaux de service</h3>
                    <ul class="list-group">
                        <li class="list-group-item">1. La période de facturation est celle indiqué sur le site web du service.</li>
                        <li class="list-group-item">2. Les frais payables sont ceux indiqués sur le site web du service.</li>
                        <li class="list-group-item">3. Les frais d’accès aux services sont payables le premier jour de chaque période et ne sont pas remboursable sauf si autrement indiqué sur le site web du service.</li>
                    </ul>
                    <hr/>
                    <h3>Annulation de services et renouvellement</h3>
                    <ul class="list-group">
                        <li class="list-group-item">1. Pour fermer un compte, le client doit se rendre à l’endroit approprié sur le site web du service ou communiquer par courriel à l’adresse facturation@alma.com au moins 5 jours ouvrables avant la date anniversaire de l’ouverture de son compte, sans quoi le compte sera renouvelé automatiquement et les frais seront payables.</li>
                        <li class="list-group-item">2. Aucun avertissement ne sera envoyé quant au renouvellement. Le client est responsable de fermer son compte avant la date anniversaire s’il souhaite fermer son compte.</li>
                        <li class="list-group-item">3. Aucun remboursement ne sera versé pour les jours non-utilisés du mois en cours lors de votre annulation, sauf si autrement indiqué sur le site web du service.</li>
                        <li class="list-group-item">4. Alma se réserve le droit d’annuler ou de suspendre un compte et de rembourser tout frais encouru pour quelque raison que ce soit.</li>
                        <li class="list-group-item">5. Alma se réserve le droit de refuser d’offrir le(s) service(s) à qui que ce soit.</li>
                        <li class="list-group-item">6. Tous vos contenus seront immédiatement supprimés lors de l’annulation de votre compte.</li>
                    </ul>
                </div>
            </div>
        </div>
        
    <Footer />
    </Layout>
)
export default ConfidentialitePage