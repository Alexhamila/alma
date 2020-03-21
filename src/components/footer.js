import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
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
