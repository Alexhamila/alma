import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import HeaderRadio from "../../components/headerradio";
import "../../components/radio/index.css"
import Footer from "../../components/footer";


const PodcastsRadio = ({ data }) =>  {
  return(
    <Layout>
    <SEO title="Accueil"></SEO> 
      <div className="background-radio">
            <HeaderRadio active="4" ></HeaderRadio>
            <div className="jumbotron jumbotron-radio">
              <p className="jumbotron-title">Page en cours de fabrication</p>
            </div>
            <Footer />
        </div>
    </Layout>
  )
}
export default PodcastsRadio
