import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const HeaderRadio = ({ active }) => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-custom">
        <a className="navbar-brand" href="/">
          Clin d'Oeil
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
                href="/radio/"
                active={active}
              />
            </li>
            <li className="nav-item menu-il">
              <Active
                page="2"
                title="EMISSIONS"
                href="/radio/emissions/"
                active={active}
              />
            </li>
            <li className="nav-item menu-il">
              <Active
                href="/radio/partenaires/"
                page="3"
                title="PARTENAIRES"
                active={active}
              />
            </li>
            <li className="nav-item menu-il">
              <Active
                page="4"
                title="PODCASTS"
                href="/radio/podcasts/"
                active={active}
              />
            </li>
            <li className="nav-item menu-il">
              <Active
                page="5"
                title="PHOTOS/VIDEOS"
                href="/radio/images/"
                active={active}
              />
            </li>
          </ul>
          <span className="navbar-text">
            <a className="menu-choice" id="menu-chosen" href="/radio">RADIO</a> | <a className="menu-choice" href="/cinema">CINEMA</a>
          </span>
      </div>
    </nav>
    <div className="container-audio">
              <audio controls  loop autoplay>
                   <source src="http://clindoeilfm1061.ice.infomaniak.ch/clindoeilfm1061-128.mp3" type="audio/ogg"/>
                   Your browser dose not Support the audio Tag
               </audio>
    </div>
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
HeaderRadio.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderRadio.defaultProps = {
  siteTitle: ``,
}

export default HeaderRadio
