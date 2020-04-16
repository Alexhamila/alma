import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer";
import { PlayButton, Timer, VolumeControl } from 'react-soundplayer/components';
import { Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = 'http://clindoeilfm1061.ice.infomaniak.ch/clindoeilfm1061-128.mp3';
// some track meta information
const trackTitle = "Clin d'Oeil FM";

const BackgroundSoundPlayer = withCustomAudio(props => {
    return (
      <div className="border">
        <PlayButton
          className="sb-soundplayer-play-btn"
          {...props} />
      </div>
    );
});

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Accueil" />
    <nav class="navbar navbar-expand-lg navbar-dark shadow" style={{backgroundColor: "#1F1E29"}}>
      <div class="container">
        <a class="navbar-brand" href="/">Alma</a>
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
    <BackgroundSoundPlayer streamUrl={streamUrl}/>

    <div class="container" style={{marginTop: "150px", marginBottom: "70px"}}>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card h-100">
            <a href="/radio/"><img class="card-img-top" src="https://res.cloudinary.com/almaciv/image/upload/v1584807478/Webp.net-resizeimage_p973o6.png" alt=""/></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="/radio/">Clin d'Oeil FM</a>
              </h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card h-100">
            <a href="/cinema/"><img class="card-img-top" src="https://res.cloudinary.com/almaciv/image/upload/v1583618131/dhyrfdgycpysx4vtou1u.jpg" alt=""/></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="/cinema">Cinéma Alma</a>
              </h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquam aperiam nulla perferendis dolor nobis numquam, rem expedita, aliquid optio, alias illum eaque. Non magni, voluptates quae, necessitatibus unde temporibus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)
export default IndexPage