/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import HeaderCinema from "./headercinema"
import "./layout.css"
import HeaderRadio from "./headerradio"
import {Helmet} from "react-helmet";

const Layout = ({ children, header }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  if (header == "cinema"){
    return (
      <>
          <Helmet>
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet"/>
          </Helmet>
          <main>{children}</main>
          <footer class="footer">
            <div class="container py-5">
              <div class="row">
                <div class="col-12 col-md">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{color: 'white'}} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mb-2"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                  <small class="d-block mb-3 text-muted">© 1999 - {new Date().getFullYear() }</small>
                </div>
                <div class="col-6 col-md">
                  <ul class="list-unstyled text-small">
                    <h5 style={{color: 'white'}}>Cinema</h5>
                    <li><a class="text-muted" href="#">Accueil</a></li>
                    <li><a class="text-muted" href="#">A l'Affiche</a></li>
                    <li><a class="text-muted" href="#">Theatre</a></li>
                    <li><a class="text-muted" href="#">Ballets/Operas</a></li>
                    <li><a class="text-muted" href="#">Cinema Scolaire</a></li>
                    <li><a class="text-muted" href="#">Comedie Francaise</a></li>
                    <li><a class="text-muted" href="#">Nos Tarifs</a></li>
                  </ul>
                </div>
                <div class="col-6 col-md">
                  <ul class="list-unstyled text-small">
                    <h5 style={{color: 'white'}}>Radio</h5>
                    <li><a class="text-muted" href="#">Accueil</a></li>
                    <li><a class="text-muted" href="#">Emissions</a></li>
                    <li><a class="text-muted" href="#">Gallerie</a></li>
                    <li><a class="text-muted" href="#">Podcasts</a></li>
                    <li><a class="text-muted" href="#">Partenaires</a></li>
                  </ul>
                </div>
                <div class="col-6 col-md">
                  <ul class="list-unstyled text-small">
                    <h5 style={{color: 'white'}}>A Propos</h5>
                    <li><a class="text-muted" href="#">Notre Equipe</a></li>
                    <li><a class="text-muted" href="#">Lieu</a></li>
                    <li><a class="text-muted" href="#">Confidentialite</a></li>
                    <li><a class="text-muted" href="#">Termes de service</a></li>
                    <li><a class="text-muted" href="#">Gestion Administrateur</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
      </>
    )
  }else
  return (
    <>

      <HeaderRadio siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
