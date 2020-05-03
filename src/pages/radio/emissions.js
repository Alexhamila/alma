import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import HeaderRadio from "../../components/headerradio";
import "../../components/radio/index.css"
import Footer from "../../components/footer";
import ReactPlayer from "react-player"
import { graphql } from "gatsby"

const EmissionsRadio = ({ data }) =>  {
  return(
    <Layout>
    <SEO title="Accueil"></SEO> 
      <div className="background-radio">
            <HeaderRadio active="2" ></HeaderRadio>
            <div class="container">
              {data.allStrapiEmission.edges.map((document, index) => {
              return(
                <div class="row emissions">
                  <div class="col-md-7">
                    <ReactPlayer url={document.node.lien} controls></ReactPlayer>
                  </div>
                  <div class="col-md-5">
                    <h3>{document.node.Titre}</h3>
                    <p>{document.node.Description}</p>
                    <p>{document.node.date} | {document.node.Categorie}</p>
                  </div>
                </div>
              )
              })}
            </div>
            <Footer />
      </div>
    </Layout>
  )
}
export default EmissionsRadio

export const query = graphql`
  query EmissionsRadio {
    allStrapiEmission(sort: {fields: id}, limit: 10) {
      edges {
        node {
          date
          Titre
          Description
          Categorie
          lien
        }
      }
    }
  }
`