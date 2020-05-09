import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import HeaderRadio from "../../components/headerradio";
import "../../components/radio/index.css"
import Footer from "../../components/footer";


const ImagesRadio = ({ data }) =>  {
  return(
    <Layout>
    <SEO title="Accueil"></SEO> 
      <div className="background-radio">
            <HeaderRadio active="4" ></HeaderRadio>
            <div className="jumbotron jumbotron-radio" style={{padding:"1rem 2rem"}}>
              <p className="jumbotron-title" style={{marginBottom:"0rem"}}>Gallerie</p>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <div class="list-group" id="list-tab" role="tablist">
                    <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Photos <span class="badge badge-success">2</span></a>
                    <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Videos <span class="badge badge-danger">3</span></a>
                  </div>
                </div>
                <div class="col-8">
                  <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                      <div className="card border-0 shadow" style={{marginBottom:"2rem"}}>
                        <img src="http://almaclindoeilfm.org/sites/default/files/P1000711.JPG" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                          <h5 className="card-title mb-0">Mardi 5 Mai 2020</h5>
                          <div className="card-text text-black-50">Radio Alma</div>
                        </div>
                      </div>       
                      <div className="card border-0 shadow" style={{marginBottom:"2rem"}}>
                        <img src="https://img.itinari.com/activity/images/original/37c4d2cd-6dff-45fb-a114-fe54170399bb-14138185_1102426706545502_3800337369846697712_o.jpg?ch=DPR&dpr=1&w=1200&h=800&s=1598556440cf1b4c027e275568e59a14" className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                          <h5 className="card-title mb-0">Lundi 4 Mai 2020</h5>
                          <div className="card-text text-black-50">Cinéma de l'Alma</div>
                        </div>
                      </div>                              
                    </div>
                    <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                      <div className="card border-0 shadow" style={{marginBottom:"2rem"}}>
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe title="vid1" class="embed-responsive-item" src="https://www.youtube.com/embed/8Qn_spdM5Zg" allowfullscreen></iframe>
                        </div>                        
                        <div className="card-body text-center">
                          <h5 className="card-title mb-0">Mercredi 6 Mai 2020</h5>
                          <div className="card-text text-black-50">Star Wars: The Rise of Skywalker</div>
                        </div>
                      </div> 
                      <div className="card border-0 shadow" style={{marginBottom:"2rem"}}>
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe title="vid2" class="embed-responsive-item" src="https://www.youtube.com/embed/uhz_l47PpsI" allowfullscreen></iframe>
                        </div>                        
                        <div className="card-body text-center">
                          <h5 className="card-title mb-0">Mardi 5 Mai 2020</h5>
                          <div className="card-text text-black-50">La Bohème</div>
                        </div>
                      </div> 
                      <div className="card border-0 shadow" style={{marginBottom:"2rem"}}>
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe title="vid3" class="embed-responsive-item" src="https://www.youtube.com/embed/jKCj3XuPG8M" allowfullscreen></iframe>
                        </div>                        
                        <div className="card-body text-center">
                          <h5 className="card-title mb-0">Lundi 4 Mai 2020</h5>
                          <div className="card-text text-black-50">Bad Boys for Life</div>
                        </div>
                      </div> 
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
export default ImagesRadio

