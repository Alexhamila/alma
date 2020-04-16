import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import HeaderRadio from "../../components/headerradio";
import "../../components/radio/index.css"
import Footer from "../../components/footer";


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
                <button type="button" className="btn btn-primary btn-primary-custom" style={{ backgroundColor: '#2A2A2A',   borderColor: '#2A2A2A' }}>Podcasts</button>
                <button type="button" className="btn btn-primary btn-primary-custom" style={{ backgroundColor: '#CC3500',   borderColor: '#CC3500' }}>Emissions</button>
              </div>
            </div>
            <div className="container" style={{paddingBottom: '100px'}}>
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
            <Footer />
        </div>
    </Layout>
  )
}
export default IndexRadio
