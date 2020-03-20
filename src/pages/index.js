import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Accueil" />
    <nav class="navbar navbar-expand-lg navbar-dark shadow fixed-top" style={{backgroundColor: "#1F1E29"}}>
      <div class="container">
        <a class="navbar-brand" href="#">Alma</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Accueil
                    <span class="sr-only">(current)</span>
                  </a>
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
    <div class="container" style={{marginTop: "150px", marginBottom: "70px"}}>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="https://almaclindoeilfm.org/sites/default/files/P1000711.JPG" alt=""/></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Clin d'Oeil FM</a>
              </h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/p720x720/86860265_3081372301984256_4067747978259988480_o.jpg?_nc_cat=109&_nc_ohc=_Eyxdy-dF68AX8iUeNF&_nc_ht=scontent-mrs2-1.xx&_nc_tp=6&oh=5693d7d23f65398f58268c4655226dc7&oe=5EFE1E34" alt=""/></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Cinéma Alma</a>
              </h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
export default IndexPage