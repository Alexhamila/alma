
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import { graphql } from "gatsby"
import "../../components/cinema/index.css"
import HeaderCinema from "../../components/headercinema"
import ReactMarkdown from "react-markdown"  
import Footer from "../../components/footer";
import HeaderCinemaMobile from "../../components/headercinemamobile"

var imgUrl_1 = "/images/584545555555554.png";
    const img_1 = {
      backgroundImage: 'url("' + imgUrl_1 + '")'
    };

const background_gradient = {
  background: "#1F1E29",
};

const ComedieCinema = ({ data }) =>  {
  return(
    <Layout header="cinema">
    <SEO title="Accueil"></SEO>
      <div className="cinema">
        <HeaderCinemaMobile active="6"></HeaderCinemaMobile>
        <div className="background-cinema" style={background_gradient}>
          <div className="background-cinema-img" style={img_1}>
            <HeaderCinema active="6"></HeaderCinema>
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

                    <button
                      type="button"
                      className="btn btn-primary btn-primary-custom"
                      style={{ backgroundColor: '#3573B9',   borderColor: '#3573B9' }}
                    >
                      { data.strapiCinema.Bouton1 }
                    </button>
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
export default ComedieCinema

export const query = graphql`
  query ComedieCinema {
    strapiCinema(id: { eq: "Cinema_5e516192318ada00178e4b49"}){
      Titre
      Description
      Bouton1
      Bouton2
      id
      Page
    }
  }
`