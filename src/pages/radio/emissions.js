import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import HeaderRadio from "../../components/headerradio";
import "../../components/radio/index.css"
import Footer from "../../components/footer";


const EmissionsRadio = ({ data }) =>  {
  return(
    <Layout>
    <SEO title="Accueil"></SEO> 
      <div className="background-radio">
            <HeaderRadio active="2" ></HeaderRadio>
            <div class="container">
              <div class="row emissions">
                <div class="col-md-7">
                  <a href="#">
                    <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""/>
                  </a>
                </div>
                <div class="col-md-5">
                  <h3>Project Two</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
                  <a class="btn btn-primary" href="#">View Project</a>
                </div>
              </div>

              <div class="row emissions">
                <div class="col-md-7">
                  <a href="#">
                    <img class="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""/>
                  </a>
                </div>
                <div class="col-md-5">
                  <h3>Project Two</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, odit velit cumque vero doloremque repellendus distinctio maiores rem expedita a nam vitae modi quidem similique ducimus! Velit, esse totam tempore.</p>
                  <a class="btn btn-primary" href="#">View Project</a>
                </div>
              </div>
            </div>
            <Footer />
            </div>
    </Layout>
  )
}
export default EmissionsRadio
