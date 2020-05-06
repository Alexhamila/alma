import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import HeaderRadio from "../../components/headerradio";
import "../../components/radio/index.css"
import Footer from "../../components/footer";


const PartenairesRadio = ({ data }) =>  {
  return(
    <Layout>
    <SEO title="Accueil"></SEO> 
      <div classNameNameNameNameNameName="background-radio">
        <HeaderRadio active="3" ></HeaderRadio>
        <div className="jumbotron jumbotron-radio">
          <p className="jumbotron-title">Partenaires de Clin d'Oeil FM</p>
          <div class="row" style={{marginTop: `3em`}}>
            <div class="col-xl-7">
              <p className="lead">La radio Clin d'Oeil FM est un des principaux foyers du partage de l'information sur Valbonne,
              et possède donc de nombreux associés et partenaires.</p>
            </div>
            <div class="col-xl-5">
              <img className="rounded mx-auto d-block legende" src="http://almaclindoeilfm.org/sites/default/files/P1000711.JPG" alt="..."/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img src="https://source.unsplash.com/9UVmlIb0wJU/500x350" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img src="https://source.unsplash.com/6anudmpILw4/500x350" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <img src="https://source.unsplash.com/ZI6p3i9SbVU/500x350" className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                  <h5 className="card-title mb-0">Team Member</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}
export default PartenairesRadio
