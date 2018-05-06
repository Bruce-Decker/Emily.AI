import React, { Component } from 'react';

class EndFooter extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount(){
  
  }

  render() {
    return (
    <div>
      <section id="site-info">
        <div class="row">
            <div class="center-align">
              <a href="#" data-prev-href="/help" id="nano-rep-link" rel="nofollow">Help</a>
              <span id="footer-feedback"><a class="QSILink SI_81izGXuS0ndBWbX_Link" href="javascript:void(0);">Feedback</a></span>
              <a href="/account/overview" rel="nofollow">My EmilyAI</a>
              <a href="#" rel="nofollow">Live Chat</a>
            </div>
            <div class="center-align">
              <a href="#" rel="nofollow">About EmilyAI</a>
              <a href="#" rel="nofollow">Careers</a>
              <a href="#">Advertising</a>
              <a href="#">Link to Us</a>
              <a href="#" rel="nofollow">Affiliate Program</a>
              <a href="#" rel="nofollow"> EmilyAI Rewards</a>
              <a href="#">Site Index</a>
              <a href="#" rel="nofollow">Your Privacy Rights - Privacy Policy</a>
              <a href="#" rel="nofollow">Terms and Policies</a>
            </div>
            <div class="center-align">
              <span>EmilyAI Affiliated Companies:</span>
              <a href="#">EmilyAI NOW</a>
              <a href="#">FanShop</a>
              <a href="#">MovieClips</a>
              <a href="#">Movies.com</a>
              <a href="#">EmilyAI Cine en Español</a>
            </div>
            {/* <a class="center-align" href="#" id="ad-choices-link" rel="nofollow">< AdChoices</a> */}
            <span class="center-align"><img id="ad-choices-icon"/>AdChoices Copyright © 2017 EmilyAI. All rights reserved.</span>
        </div>
      </section>
    </div>
    )
  }
}



export default EndFooter;
