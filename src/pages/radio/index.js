import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import HeaderRadio from "../../components/headerradio";
import "../../components/radio/index.css"
import Footer from "../../components/footer";
import ReactPlayer from "react-player"
import { graphql } from "gatsby"

const IndexRadio = ({ data }) =>  {
  return(
    <Layout>
    <SEO title="Accueil"></SEO> 
      <div className="background-radio">
            <HeaderRadio active="1" ></HeaderRadio>
            <div className="jumbotron jumbotron-radio">
              <p className="jumbotron-title">Radio Clin d'Oeil FM</p>
              <div className="container">
                <p className="lead">Disponible partout dans les Alpes-Maritimes sur la Fréquence 106.1FM</p>
                <p>Clin d'Oeil FM a pour mission première de diffuser toute information susceptible d'intéresser les jeunes et notamment les 2300 élèves du Centre International de Valbonne, les actifs, les demandeurs d'emploi, les habitants et les différents acteurs institutionnels, économiques ou associatifs de la commune  de Valbonne et de la technopole de Sophia-Antipolis. </p>
                <button type="button" className="btn btn-primary btn-primary-custom" style={{ backgroundColor: '#CC3500',   borderColor: '#CC3500' }}>Emissions</button>
              </div>
            </div>
            <div className="container" style={{paddingBottom: '70px'}}>
              <div className="row">
                <div className="col-sm">
                  <h3>Qui sommes nous ?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="col-sm">
                <h3>Clin d'Oeil FM c'est quoi ?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </div>

              
            {data.allStrapiEmission.edges.map((document, index) => {
              return(
                <><div className="jumbotron jumbotron-radio" style={{paddingBottom: "1rem"}}>
                    <div class="container">
                      <blockquote class="blockquote text-center">
                        <h3 style={{marginTop: "1.45rem"}}><span class="badge badge-info">Dernière émission</span> {document.node.Titre}</h3>
                        <footer class="blockquote-footer"><cite title="Source Title">{document.node.Date}</cite> | {document.node.Categorie}<br/>{document.node.Description}</footer>
                      </blockquote>

                      <ReactPlayer url={document.node.Link} className="responsive-player" controls></ReactPlayer>                       
                    </div>
                 
                  </div>

                </>
              )
              })}
              <div class="container">
                <blockquote class="blockquote text-center">
                  <h1 class="display-3">Où nous trouver ?</h1>
                  <footer class="blockquote-footer"><cite title="Source Title">Centre International de Valbonne</cite> | 06560 France</footer>
                </blockquote>
                
                <iframe title="mapindex" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=7.038443684577943%2C43.61912207338791%2C7.042552828788758%2C43.62133564230126&amp;layer=mapnik" class="mapepic"></iframe>
              </div>

            
            <Footer />
        </div>
    </Layout>
  )
}
export default IndexRadio


export const query = graphql`
  query IndexRadio {
    allStrapiEmission(sort: {fields: Date order: DESC}, limit: 1) {
      edges {
        node {
          Date
          Titre
          Description
          Categorie
          Link
        }
      }
    }
  }
`