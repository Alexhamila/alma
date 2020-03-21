import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Erreur" />
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
    <div className="container" style={{paddingTop: '100px', paddingBottom: '100px'}}>
        <div class="sketch">
          <div class="bee-sketch red"></div>
          <div class="bee-sketch blue"></div>
        </div>
      <div className="text-center">
        <h1>La page n'existe pas.</h1>
        <p>Vous venez de frapper une route qui n'existe pas ...</p>
        <p>Erreur - 404</p>
      </div>
    </div>
    <Footer/>
  </Layout>
)

export default NotFoundPage
