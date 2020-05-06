import Layout from "../layout"
import PropTypes from "prop-types";
import SEO from "../seo"
import React from "react"
import HeaderRadio from "../headerradio";
import "../../components/radio/index.css"
import Footer from "../footer";
import ReactPlayer from "react-player"
import { graphql } from "gatsby"
import Paginate from "./paginate";



const EmissionsRadio = ({ data, pageContext}) => {
  
  const articles = data.allStrapiEmission.edges;
  const { humanPageNumber, numberOfPages } = pageContext;

  return(
    <Layout>
    <SEO title="Accueil"></SEO> 
      <div className="background-radio">
            <HeaderRadio active="2" ></HeaderRadio>
            <div class="container">
              {articles.map(({ node }) => {
                console.log(node)
                  return(
                    <div class="row emissions">
                      <div class="col-md-7">
                        <ReactPlayer className="responsive-player" url={node.Link} controls></ReactPlayer>
                        <hr/>
                        <p>{node.Date} | {node.Categorie}</p>
                      </div>
                      <div class="col-md-5">
                        <h3>{node.Titre}</h3>
                        <p>{node.Description}</p>

                      </div>
                    </div>
                  )
                  })}
            
            </div>

             <Paginate pageContext={pageContext} />
             <h3 class="lead p-4">Page {humanPageNumber} | {numberOfPages} </h3>
            <Footer />
      </div>
    </Layout>
  )
}

EmissionsRadio.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EmissionsRadio

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allStrapiEmission(
      sort: {fields: Date order: DESC}
      skip: $skip
      limit: $limit
      ) {
      edges{
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

