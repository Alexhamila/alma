
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import { graphql } from "gatsby"
import "../../components/cinema/index.css"
import HeaderCinema from "../../components/headercinema"
import Footer from "../../components/footer";
import HeaderCinemaMobile from "../../components/headercinemamobile"

const AfficheCinema = ({ data }) =>  {
  return(
    <Layout>
        <SEO title="Accueil"></SEO>
        <div className="cinema">

          <HeaderCinemaMobile active="1"></HeaderCinemaMobile>
          
           {data.allStrapiAffiche.edges.map((document, index) => {

              console.log(index);
              if(index === 0){

              var imgUrl_1 = document.node.AfficheFond.publicURL;

              const img_1 = {
                backgroundImage: 'url("' + imgUrl_1 + '")'
              };
             return(
            <div className="background-cinema" style={{background: document.node.Couleur}}>
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
                        src={document.node.Lien}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Trailer"
                        className="video"
                        />
                    </div>
                    </div>
                </div>
                </div>

                <div className="row affiche">
                <div className="col-sm-7">
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
                    src={document.node.Affiche.publicURL}
                    />
                </div>
                </div>
            </div>
            </div>
             );
            }else{
              
              var imgUrl_1 = document.node.AfficheFond.publicURL;

              const img_1 = {
                backgroundImage: 'url("' + imgUrl_1 + '")'
              };

              return(
                <div className="background-cinema" style={{background: document.node.Couleur}}>
                <div className="background-cinema-img" style={img_1}>
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
                            src={document.node.Lien}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Trailer"
                            className="video"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
    
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
                        src={document.node.Affiche.publicURL}
                        />
                    </div>
                    </div>
                    </div>
                    </div>
                );
           }
           })}
        <Footer />
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
          Affiche{
            publicURL
          }
          AfficheFond{
            publicURL
          }
          Couleur
        }
      }
    }
  }
`