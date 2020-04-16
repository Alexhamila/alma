import PropTypes from "prop-types"
import React from "react"
import "./cinema/header.css"

const HeaderCinema = ({ active }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <a className="navbar-brand" href="/">
        Alma
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto menu-ul">
          <li className="nav-item menu-il">
            <Active
              page="1"
              title="ACCUEIL"
              href="/cinema/"
              active={active}
            />
          </li>
          <li className="nav-item menu-il">
            <Active
              page="2"
              title="A L'AFFICHE"
              href="/cinema/affiche/"
              active={active}
            />
          </li>
          <li className="nav-item menu-il">
            <Active
              href="/cinema/theatre/"
              page="3"
              title="THEATRE"
              active={active}
            />
          </li>
          <li className="nav-item menu-il">
            <Active
              page="4"
              title="BALLETS/OPERAS"
              href="/cinema/ballets/"
              active={active}
            />
          </li>
          <li className="nav-item menu-il">
            <Active
              page="5"
              title="CINEMA SCOLAIRE"
              href="/cinema/scolaire/"
              active={active}
            />
          </li>
          <li className="nav-item menu-il">
            <Active
              page="6"
              title="COMEDIE FRANCAISE"
              href="/cinema/comedie/"
              active={active}
            />
          </li>
          <li className="nav-item menu-il">
            <Active
              page="7"
              title="NOS TARIFS"
              href="/cinema/paiement/"
              active={active}
            />
          </li>
        </ul>
        <span className="navbar-text">
          <a className="menu-choice" href="/radio">RADIO</a> | <a className="menu-choice" id="menu-chosen" href="/cinema">CINEMA</a>
        </span>
      </div>
    </nav>
  </header>
)

class Active extends React.Component {
  render() {
    const title = this.props.title;
    const active = this.props.active;
    const page = this.props.page;
    const href = this.props.href;
    if (page === active) {
      return (
        <a className={"nav-link menu-a active"} href={href}>
          {title}
        </a>
      );
    } else {
      return (
        <a className={"nav-link menu-a"} href={href}>
          {title}
        </a>
      );
    }
  }
}

HeaderCinema.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderCinema.defaultProps = {
  siteTitle: ``,
}

export default HeaderCinema
