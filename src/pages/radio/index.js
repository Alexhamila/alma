
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import React from "react"
import HeaderRadio from "../../components/headerradio";
import "../../components/radio/index.css"
import { PlayButton, Timer, VolumeControl } from 'react-soundplayer/components';
import { Progress, Icons } from 'react-soundplayer/components';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { withCustomAudio } from 'react-soundplayer/addons';
// audio source
const streamUrl = 'http://clindoeilfm1061.ice.infomaniak.ch/clindoeilfm1061-128.mp3';
// some track meta information
const trackTitle = "Clin d'Oeil FM";

const BackgroundSoundPlayer = withCustomAudio(props => {
  const { track, duration, currentTime } = this.props;
    return (
      <div className="py2 white bg-cover bg-top rounded relative">
        <div className="bg-black absolute top-0 right-0 left-0 bottom-0 muted" />
        <div className="center py4 relative z1">
          <h3 className="h4 nowrap caps mb0">{track ? track.user.username : ''}</h3>
          <h2 className="h0 nowrap caps m0">{track ? track.title : ''}</h2>
        </div>
        <div className="flex flex-center px2 relative z1">
          <PlayButton
            className="flex-none h2 mr2 button button-transparent button-grow rounded"
            {...this.props} />
          <VolumeControl
            className='mr2 flex flex-center'
            buttonClassName="flex-none h2 button button-transparent button-grow rounded"
            rangeClassName="custom-track-bg"
            {...this.props} />
          <Progress
            className="flex-auto bg-darken-3 rounded"
            innerClassName="rounded-left bg-white"
            value={(currentTime / duration) * 100 || 0}
            {...this.props} />
        </div>
      </div>
  );
});

const IndexRadio = ({ data }) =>  {
  return(
    <Layout header="radio">
    <SEO title="Accueil"></SEO> 
    <div className="background-radio">
            <HeaderRadio active="1" ></HeaderRadio>
            <div className="jumbotron jumbotron-radio">
              <p className="jumbotron-title">Radio Clin d'Oeil FM</p>
              <div className="container">
                <p className="lead">Disponible partout dans les Alpes-Maritimes sur la Fréquence 106.1FM</p>
                <p>Clin d'Oeil FM a pour mission première de diffuser toute information susceptible d'intéresser les jeunes et notamment les 2300 élèves du Centre International de Valbonne, les actifs, les demandeurs d'emploi, les habitants et les différents acteurs institutionnels, économiques ou associatifs de la commune  de Valbonne et de la technopole de Sophia-Antipolis. </p>
                <button type="button" className="btn btn-primary btn-primary-custom" style={{ backgroundColor: '#2A2A2A',   borderColor: '#2A2A2A' }}>Podcasts</button>
                <button type="button" className="btn btn-primary btn-primary-custom" style={{ backgroundColor: '#CC3500',   borderColor: '#CC3500' }}>Emissions</button>
              </div>
            </div>
            <div className="container" style={{paddingBottom: '100px'}}>
              <div className="row">
                <div className="col-sm">
                  <h3>Qui sommes nous ?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="col-sm">
                <h3>Clin d'Oeil FM c'est quoi ?</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                    dolore eu fugiat nulla pariatur.</p>
                </div>
              </div>
            </div>
        </div>
    </Layout>
  )
}
export default IndexRadio
