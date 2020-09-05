
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import { graphql } from "gatsby"
import "../../components/cinema/index.css"
import HeaderCinema from "../../components/headercinema"
import ReactMarkdown from "react-markdown"  
import Footer from "../../components/footer";
import HeaderCinemaMobile from "../../components/headercinemamobile"

var imgUrl_1 = "/images/158090689819369200.png";
const img_1 = {
  backgroundImage: 'url("' + imgUrl_1 + '")'
};

const background_gradient = {
  background: "#1F1E29"
};

const IndexCinema = ({ data }) =>  {
  return(
    <Layout header="cinema">
    <SEO title="Accueil"></SEO>
      <div className="cinema">
        <HeaderCinemaMobile active="1"></HeaderCinemaMobile>
        <div className="background-cinema" style={background_gradient}>
          <div className="background-cinema-img" style={img_1}>
            <HeaderCinema active="1"></HeaderCinema>
            <div className="row affiche">
              <div className="col-lg-10">
                <div className="jumbotron jumbotron-fluid jumbotron-custom">
                  <div className="container">
                    <h1 className="display-4">
                    { data.strapiCinema.Titre }
                    </h1>
                    <p className="lead jumbotron-text">
                    { data.strapiCinema.Description }
                    </p>
                    <a href="/cinema/affiche/">
                      <button
                        type="button"
                        className="btn btn-primary btn-primary-custom"
                        style={{ backgroundColor: '#A81D1D',   borderColor: '#A81D1D' }}
                      >
                        { data.strapiCinema.Bouton2 }
                      </button>
                    </a>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
        <div class="container page">
          <div class="row">
            <div class="col-md-8 mx-auto" style={{marginTop: "30px"}}>

            <ReactMarkdown source={data.strapiCinema.Page} transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`} />
                <blockquote class="blockquote text-center">
                  <h1 class="display-3">Où nous trouver ?</h1>
                  <footer class="blockquote-footer"><cite title="Source Title">Centre International de Valbonne</cite> | 06560 France</footer>
                </blockquote>
                
                <iframe title="mapindex" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=7.038443684577943%2C43.61912207338791%2C7.042552828788758%2C43.62133564230126&amp;layer=mapnik" class="mapepic"></iframe>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}
export default IndexCinema

export const query = graphql`
  query IndexCinema {
    strapiCinema(id: { eq: "Cinema_5e516100318ada00178e4b44"}){
      Titre
      Description
      Bouton1
      Bouton2
      id
      Page
    }
  }
`