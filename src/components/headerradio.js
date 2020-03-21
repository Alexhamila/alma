import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { PlayButton, Timer, VolumeControl } from 'react-soundplayer/components';
import { Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { withCustomAudio } from 'react-soundplayer/addons';
// audio source
const streamUrl = 'http://clindoeilfm1061.ice.infomaniak.ch/clindoeilfm1061-128.mp3';
// some track meta information
const trackTitle = "Clin d'Oeil FM";

const BackgroundSoundPlayer = withCustomAudio(props => {
  const { track, duration, currentTime } = props;
    return (
      <div className="py2 white bg-cover bg-top rounded relative" style={{backgroundImage: `url("https://almaclindoeilfm.org/sites/default/files/P1000711.JPG")`}}>
        <div className="bg-black absolute top-0 right-0 left-0 bottom-0 muted" />
        <div className="center py4 relative z1">
          <h3 className="h4 nowrap caps mb0"></h3>
          <h2 className="h0 nowrap caps m0"></h2>
        </div>
        <div className="flex flex-center px2 relative z1">
          <PlayButton
            className="flex-none h2 mr2 button button-transparent button-grow rounded"
            {...props} />
          <VolumeControl
            className='mr2 flex flex-center'
            buttonClassName="flex-none h2 button button-transparent button-grow rounded"
            rangeClassName="custom-track-bg"
            {...props} />
          <Progress
            className="flex-auto bg-darken-3 rounded"
            innerClassName="rounded-left bg-white"
            value={(currentTime / duration) * 100 || 0}
            {...props} />
        </div>
      </div>
  );
});

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
            <a className="menu-choice" id="menu-chosen" href="/radio">RADIO</a> | <a className="menu-choice" href="/cinema">CINEMA</a></span>
      </div>
    </nav>
    <BackgroundSoundPlayer streamUrl={streamUrl} ></BackgroundSoundPlayer>
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
