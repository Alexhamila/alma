
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import { graphql } from "gatsby"
import "../../components/cinema/index.css"
import HeaderCinema from "../../components/headercinema"
import ReactMarkdown from "react-markdown"  
import Footer from "../../components/footer";

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
        <div className="background-cinema" style={background_gradient}>
          <div className="background-cinema-img" style={img_1}>
            <HeaderCinema active="1"></HeaderCinema>
            <div className="row affiche">
              <div className="col-7">
                <div className="jumbotron jumbotron-fluid jumbotron-custom">
                  <div className="container">
                    <h1 className="display-4">
                    { data.strapiCinema.Titre }
                    </h1>
                    <p className="lead jumbotron-text">
                    { data.strapiCinema.Description }
                    </p>

                    <button
                      type="button"
                      className="btn btn-primary btn-primary-custom"
                      style={{ backgroundColor: '#A81D1D',   borderColor: '#A81D1D' }}
                    >
                      { data.strapiCinema.Bouton1 }
                    </button>
                    <a href="/cinema/affiche/">
                      <button
                        type="button"
                        className="btn btn-secondary btn-secondary-custom"
                        style={{ borderColor: '#A81D2B'}}
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