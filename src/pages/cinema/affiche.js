
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import { graphql } from "gatsby"
import "../../components/cinema/index.css"
import HeaderCinema from "../../components/headercinema"

var imgUrl_1 = "/images/158085093460089227.png";
const img_1 = {
  backgroundImage: 'url("' + imgUrl_1 + '")'
};
var imgUrl_2 = "/images/158090684095061065.png";
const img_2 = {
  backgroundImage: 'url("' + imgUrl_2 + '")'
};
const background_gradient = {
  background: "#373b44",
  background: "-webkit-linear-gradient(to right,#005c97,#363795)",
  background: "linear-gradient(to right,#005c97,#363795)"
};
const background_gradient2 = {
  background: "#373b44",
  background: "-webkit-linear-gradient(to right,#0f0c29,#403e4f,#24243e)",
  background: "linear-gradient(to right,#0f0c29,#403e4f,#24243e)"
};

const AfficheCinema = ({ data }) =>  {
  return(
    <Layout header="cinema">
        <SEO title="Accueil"></SEO>
        <div className="cinema">
            <div className="background-cinema" style={background_gradient}>
            <div className="background-cinema-img" style={img_1}>
                <HeaderCinema active="2" />
                <div
                className="modal fade"
                id="exampleModalCenter"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
                >
                <div className="modal-dialog modal-video" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        >
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <iframe
                        src="https://www.youtube-nocookie.com/embed/pHgwf2eMFnA"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Trailer Star Wars IX"
                        className="video"
                        />
                    </div>
                    </div>
                </div>
                </div>

                {data.allStrapiArticle.edges.map(document => (
                <div className="row affiche">
                <div className="col-7">
                    <div className="jumbotron jumbotron-fluid jumbotron-custom">
                    <div className="container">
                        <h1 className="display-4">
                        {document.node.Titre}
                        </h1>
                        <p className="lead jumbotron-text">
                        {document.node.Description}
                        </p>

                        <button
                        type="button"
                        className="btn btn-primary btn-primary-custom"
                        >
                        En Savoir Plus
                        </button>
                        <button
                        type="button"
                        className="btn btn-secondary btn-secondary-custom"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        >
                        Le Trailer
                        </button>

                        <p className="jumbotron-description">
                        {document.node.Description2}
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col-5">
                    <img
                    className="rounded mx-auto d-block cinema-affiche"
                    alt="Affiche"
                    src={document.node.Affiche}
                    />
                </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </Layout>
  )
}
export default AfficheCinema

export const query = graphql`
  query CinemaAffiche {
    strapiCinema(id: { eq: "Cinema_5e516150318ada00178e4b45"}){
      Titre
      Description
      Bouton1
      Bouton2
      id
    }
    allStrapiAffiche{
      edges {
        node {
          id
          Titre
          Description
          Description2
          Lien
          Affiche
        }
      }
    }
  }
`