import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
    <footer class="footer">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 col-md">
          <h4 style={{color: 'white'}}>Alma</h4>
          <small class="d-block mb-3 text-muted">© 1999 - {new Date().getFullYear() }</small>
        </div>
        <div class="col-6 col-md">
          <ul class="list-unstyled text-small">
            <h5 style={{color: 'white'}}>Cinema</h5>
            <li><Link className="text-muted" to="/cinema/">Accueil</Link></li>
            <li><Link className="text-muted" to="/cinema/affiche/">A l'Affiche</Link></li>
            <li><Link className="text-muted" to="/cinema/theatre/">Theatre</Link></li>
            <li><Link className="text-muted" to="/cinema/ballets/">Ballets/Operas</Link></li>
            <li><Link className="text-muted" to="/cinema/scolaire/">Cinema Scolaire</Link></li>
            <li><Link className="text-muted" to="/cinema/comedie/">Comedie Francaise</Link></li>
            <li><Link className="text-muted" to="/cinema/paiement/">Nos Tarifs</Link></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <ul class="list-unstyled text-small">
            <h5 style={{color: 'white'}}>Radio</h5>
            <li><Link className="text-muted" to="/radio/">Accueil</Link></li>
            <li><Link className="text-muted" to="/radio/emissions/">Emissions</Link></li>
            <li><Link className="text-muted" to="/radio/gallerie/">Gallerie</Link></li>
            <li><Link className="text-muted" to="/radio/podcasts/">Podcasts</Link></li>
            <li><Link className="text-muted" to="/radio/partenaires/">Partenaires</Link></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <ul class="list-unstyled text-small">
            <h5 style={{color: 'white'}}>A Propos</h5>
            <li><Link className="text-muted" to="/equipe/">Notre Equipe</Link></li>
            <li><Link className="text-muted" to="/lieu/">Lieu</Link></li>
            <li><Link className="text-muted" to="/confidentialite/">Confidentialite</Link></li>
            <li><Link className="text-muted" to="/tos/">Termes de service</Link></li>
            <li><Link className="text-muted" to="/gestion/">Gestion Administrateur</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer
