import React from "react"
import "./cinema/header.css"

const HeaderCinemaMobile = ({ active }) => (
      <div className="navbar-collapse collapse mobile" style={{backgroundColor: "#1F1E29"}}>
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
        <span className="navbar-text mobile-a3">
          <a className="menu-choice" href="/radio">RADIO</a> | <a className="menu-choice" id="menu-chosen" href="/cinema">CINEMA</a>
        </span>
      </div>
)

class Active extends React.Component {
  render() {
    const title = this.props.title;
    const active = this.props.active;
    const page = this.props.page;
    const href = this.props.href;
    if (page === active) {
      return (
        <a className={"nav-link menu-a mobile-a active"} href={href}>
          {title}
        </a>
      );
    } else {
      return (
        <a className={"nav-link mobile-a2 menu-a"} href={href}>
          {title}
        </a>
      );
    }
  }
}


export default HeaderCinemaMobile
