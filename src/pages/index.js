import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer";
import { PlayButton } from 'react-soundplayer/components';
import { withCustomAudio } from 'react-soundplayer/addons';

// audio source
const streamUrl = 'http://clindoeilfm1061.ice.infomaniak.ch/clindoeilfm1061-128.mp3';
// some track meta information

// const trackTitle = "Clin d'Oeil FM";

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
              <Link to="#" class="nav-link">Accueil
                    <span class="sr-only">(current)</span>
                  </Link>
            </li>
            <li class="nav-item">
              <Link to="radio" class="nav-link">Radio</Link>
            </li>
            <li class="nav-item">
              <Link to="cinema" class="nav-link">Alma Cinéma</Link>
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
            <a href="/radio/"><img class="card-img-top" src="https://res.cloudinary.com/almaciv/image/upload/v1599339932/Logo_Radio-Alma_Yellow_vignette_gealyi.png" alt=""/></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="/radio/">Clin d'Oeil FM</a>
              </h4>
            </div>
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          <div class="card h-100">
            <a href="/cinema/"><img class="card-img-top" src="https://res.cloudinary.com/almaciv/image/upload/v1599339931/Logo_CInema-Alma_Blue_vignette_pt5ft9.png" alt=""/></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="/cinema">Cinéma Alma</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </Layout>
)
export default IndexPage