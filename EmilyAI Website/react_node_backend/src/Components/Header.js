import React, { Component } from 'react';
import axios from 'axios';
import {envURL} from "../config/environment";
import { withRouter } from 'react-router-dom';
import { debug } from 'util';
import swal from 'sweetalert';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false,
        searchQuery: localStorage.getItem('search')
    }

      this.handleLogout = this.handleLogout.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  
  componentWillMount(){
    localStorage.removeItem('search');
      axios.get(envURL + 'isLoggedIn', {withCredentials: true})
          .then((response) => {
              console.log("After checking the session", response.data);
              if(response.data.session === 'valid') {
                  this.setState({
                      isLoggedIn: true
                  })
              }
          })
  }

  handleLogout() {
      //alert("In handleLogout");
      localStorage.clear();
      axios.post(envURL + 'logout', null, { withCredentials: true })
          .then((response) => {
              console.log(response.data);
              if(response.data.session === 'logged out') {
                  this.setState({
                      isLoggedIn: false
                  }, () => {
                      this.props.history.push('/');
                  })
              }
          })
  }

  handleChange(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  handleSearch() {
      console.log("search clicked", this.state.searchQuery);
      if(window.location.href.includes('/movies')){
        this.props.onSearchData(this.state.searchQuery);
      }else{
        localStorage.setItem('search',this.state.searchQuery)
        this.props.history.push('/movies');
      
      }
 
      // var data = {
      //     searchQuery: this.state.searchQuery
      // }
      // axios.post(envURL + 'searchQuery', data, {withCredentials: true})
      //     .then((response) => {
      //         console.log("After search results in Header compoent...", response.data);
      //     })

  }


  render() {

    var changeButtons = null;
    if(this.state.isLoggedIn === false) {
        changeButtons = (
            <a href="/login" className="hide-logged-in">Sign In</a>
        );
    } else {
        changeButtons = (
            <a href="/" onClick={ this.handleLogout } className="hide-logged-in">Sign Out</a>
        );
    }

    return (
    <div>
      <div id="brand-bar" class="hide-on-mobile">
        <div class="row">
          <div class="width-25 right">
            <a href="#">Gift Cards</a> |
            {/* <a href="#">Offers</a> | */}
            {/*<a href="https://www.fandango.com/account/signin?from=%2F" class="hide-logged-in">Sign In</a>*/}
            {/*<a href="/login" class="hide-logged-in">Sign In</a>*/}
            {/*<a href="/signout" class="show-logged-in">Sign Out</a>*/}
              { changeButtons }
          </div>
        </div>
      </div>
      <div id="header-wrap" class= "header-class">
        <header id="global-header" role="banner">
          <nav class="row" role="navigation">
            <i class="left icon grip"></i>
            <ul class="inline-items tablet-width-100 left nonstandard-width">
              <li>
                <div class="ad" data-unit="homepagelogo" data-responsive="false" data-media="">

                </div>
                <div class = "row">
                  <a class="" href="/"><img id = "logo-img" width="30" height="30" src={require('../assets/static_images/logo.png')} alt="Los Angeles"  /></a>
                  <p class="join-header">EMILY<span class="page-header-emphasis">AI</span></p>
                </div>
                
                
              </li>
              <li id="global-search">
              <form id = "search-form" action="/search" autocomplete="off" role="search" novalidate>
                  <div class="fan-autocomplete">
                    <div class="fan-autocomplete-results"></div>
                    {/* <input class="fan-input style-search" type="text" name="searchQuery" onChange={ this.handleChange } placeholder="Enter City, State, ZIP Code" /> */}
                    <div class="csspinner double-up no-overlay"></div>
                  </div>
                  <input type="hidden" name="mode" value="general"/>
                  {/* <button class="fan-btn fan-btn-style-go" onClick = { this.handleSearch } type="button">Go</button> */}
                </form>
              </li>
            </ul>
            <ul id="global-menu" class="inline-items tablet-width-100 right nonstandard-width header-ul">
              <li id="movies-tab" class="tablet-width-20 nonstandard-width">
                <section class="has-dropdown">
                  {/* <h3><a class = "header-links" href="/moviesintheaters">Movies</a></h3> */}
                  <div class="mega-menu">
                    <div class="row">
                      <div class="width-25">
                        <h4 class="heading-style-1 heading-size-m">Now Playing</h4>
                        <ul>
                          <li>
                            <a class="light" href="http://www.fandango.com/aquietplace_207769/movieoverview">A Quiet Place</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/readyplayerone_204139/movieoverview">Ready Player One</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/blockers_206654/movieoverview">Blockers</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/blackpanther_202991/movieoverview">Black Panther</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/icanonlyimagine_206238/movieoverview">I Can Only Imagine</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/tylerperrysacrimony_206776/movieoverview">Tyler Perry&#39;s Acrimony</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/chappaquiddick_206369/movieoverview">Chappaquiddick</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/sherlockgnomes_207507/movieoverview">Sherlock Gnomes</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/pacificrimuprising2018_183505/movieoverview">Pacific Rim Uprising (2018)</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/isleofdogs_205852/movieoverview">Isle of Dogs</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/themiracleseason_208411/movieoverview">The Miracle Season</a>
                          </li>
                          <li>
                            <a class="cta" href="/moviesintheaters">See All Now Playing</a>
                          </li>
                        </ul>
                      </div>
                      <div class="width-25">
                        <header>
                          <h4 class="heading-style-1 heading-size-m movies-tab__title">Opening This Week</h4>
                          <div class="list-legend">
                            <span class="header-definition icon icon-limited-release"></span>
                            <span class="caption">= Limited Release</span>
                          </div>
                        </header>
                        <ul class="movies-opening-this-week">
                          <li>
                            <a href="http://www.fandango.com/borgvsmcenroe_204916/movieoverview">
                              <div class="light">
                                Borg vs McEnroe
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/rampage2018_207628/movieoverview">
                              <div class="light">
                                Rampage (2018)
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/sgt.stubby:anamericanhero_209946/movieoverview">
                              <div class="light">
                                Sgt. Stubby: An American Hero
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/blumhousestruthordare2018_208538/movieoverview">
                              <div class="light">
                                Blumhouse&#39;s Truth or Dare (2018)
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/isleofdogs_205852/movieoverview">
                              <div class="light">
                                Isle of Dogs
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/10x10_209619/movieoverview">
                              <div class="light">
                                <span class="icon icon-limited-release"></span>
                                10x10
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/beirut_208658/movieoverview">
                              <div class="light">
                                <span class="icon icon-limited-release"></span>
                                Beirut
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/byebyegermany_206627/movieoverview">
                              <div class="light">
                                <span class="icon icon-limited-release"></span>
                                Bye Bye Germany
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/gonjiam:hauntedasylum_210318/movieoverview">
                              <div class="light">
                                <span class="icon icon-limited-release"></span>
                                Gonjiam: Haunted Asylum
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/marrowbone_209546/movieoverview">
                              <div class="light">
                                <span class="icon icon-limited-release"></span>
                                Marrowbone
                              </div>
                            </a>
                          </li>
                          <li>
                            <a href="http://www.fandango.com/mercury2018_210358/movieoverview">
                              <div class="light">
                                <span class="icon icon-limited-release"></span>
                                Mercury (2018)
                              </div>
                            </a>
                          </li>
                          <li>
                            <a class="cta" href="/moviesintheaters">See All Opening This Week</a>
                          </li>
                        </ul>
                      </div>
                      <div class="width-25">
                        <h4 class="heading-style-1 heading-size-m">Pre Sales Tickets</h4>
                        <ul>
                          <li>
                            <a class="light" href="http://www.fandango.com/avengers:infinitywar_199925/movieoverview">Avengers: Infinity War</a>
                          </li>
                        </ul>
                        <h4 class="heading-style-1 heading-size-m">Coming Soon</h4>
                        <ul>
                          <li>
                            <a class="light" href="http://www.fandango.com/ifeelpretty_209375/movieoverview">I Feel Pretty</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/supertroopers2_204918/movieoverview">Super Troopers 2</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/traffik_208806/movieoverview">Traffik</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/badsamaritan_209394/movieoverview">Bad Samaritan</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/overboard2018_208487/movieoverview">Overboard (2018)</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/tully2018_208671/movieoverview">Tully (2018)</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/breakingin2018_208760/movieoverview">Breaking In (2018)</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/lifeoftheparty_209253/movieoverview">Life of the Party</a>
                          </li>
                          <li>
                            <a class="light" href="http://www.fandango.com/deadpool2_200520/movieoverview">Deadpool 2</a>
                          </li>
                          <li>
                            <a class="cta" href="/moviescomingsoon">See All Coming Soon</a>
                          </li>
                        </ul>
                      </div>
                      <div class="width-25">
                        <h4 class="heading-style-1 heading-size-m">Explore More</h4>
                        <ul>
                          <li>
                            <a class="cta light" href="/movie-trailer">Watch Trailers on MovieClips</a>
                          </li>
                          <li>
                            <a class="cta light" href="/boxoffice">Top Box Office</a>
                          </li>
                          <li>
                            <a class="cta light" href="/new-dvd-releases">New DVDs</a>
                          </li>
                        </ul>
                        <div class="ad" data-unit="marqueebanner" data-responsive="false" data-media="">
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </li>
              <li id="theatersTab" class="tablet-width-30 nonstandard-width">
                <section class="has-dropdown">
                  <h3><a id="local-movies-link" class = "header-links" href="/chat">Chat with Bot</a></h3>
                  
                </section>
              </li>
              
              <li id="vip-tab" class="tablet-width-20 nonstandard-width vip-menu js-heartsAndStars-flyout-anchor">
                <section id="menu-logged-in" class="show-logged-in has-dropdown">
                  <h3>
                    <a href="https://www.fandango.com/account/dashboard">My VIP Account</a>
                  </h3>
                  <div class="mega-menu">
                    <div class="row">
                      <div class="width-25" id="vip-my-purchases"></div>
                      <div class="width-25" id="vip-my-theaters"></div>
                      <div class="width-25" id="vip-insider-perks"></div>
                      <div class="width-25" id="vip-my-fandango"></div>
                    </div>
                  </div>
                </section>
                <section class="show-logged-out nav-account-wrapper has-dropdown">
                  <h3>
                    <a class = "header-links" href="/profile"><span class="nav-description">Profile<span class="page-header-emphasis"></span></span></a>
                  </h3>
                  <div class="mega-menu">
                    <div class="row">
                      <div class="mega-menu-item width-15">
                        <div class="profile-point vip-benefit">
                          <img data-src="//images.fandango.com/redesign/areas/registration/img/worry-free-tickets-oj.svg" src="//images.fandango.com/redesign/areas/registration/img/worry-free-tickets-oj.svg" />
                          <h4 class="heading-size-m heading-style-1 light">Refunds + Exchanges</h4>
                          <p class="msg">Bypass the box office line at many theaters with guaranteed tickets. If something comes up, you can return or exchange up to two hours before showtime through Fandango.</p>
                          <a class="cta" href="https://www.fandango.com/fandangovip#worry-free-tickets">Learn more</a>
                        </div>
                      </div>
                      <div class="mega-menu-item width-15">
                        <div class="profile-point vip-benefit">
                          <img data-src="//images.fandango.com/redesign/areas/registration/img/theater-rewards-oj.svg" src="//images.fandango.com/redesign/areas/registration/img/theater-rewards-oj.svg" />
                          <h4 class="heading-size-m heading-style-1 light">Partner Rewards</h4>
                          <p class="msg">Earn rewards points from our partners, including AMC Stubs, Regal Crown Club and more.</p>
                          <a class="cta" href="https://www.fandango.com/fandangovip#theater-rewards">Learn more</a>
                        </div>
                      </div>
                      <div class="mega-menu-item width-15">
                        <div class="profile-point vip-benefit">
                          <img data-src="//images.fandango.com/redesign/areas/registration/img/my-fandango-oj.svg" src="//images.fandango.com/redesign/areas/registration/img/my-fandango-oj.svg" />
                          <h4 class="heading-size-m heading-style-1 light">My Fandango</h4>
                          <p class="msg">Save your favorite theaters and movies to experience a customized Fandango just for you.</p>
                          <a class="cta" href="https://www.fandango.com/fandangovip#my-fandango">Learn more</a>
                        </div>
                      </div>
                      <div class="mega-menu-item width-15">
                        <div class="profile-point vip-benefit">
                          <img data-src="//images.fandango.com/redesign/areas/registration/img/insider-perks-oj.svg" src="//images.fandango.com/redesign/areas/registration/img/insider-perks-oj.svg" />
                          <h4 class="heading-size-m heading-style-1 light">Insider Perks</h4>
                          <p class="msg">Get the VIP treatment, free screenings, digital downloads, discounts and more.</p>
                          <a class="cta" href="https://www.fandango.com/fandangovip#insider-perks">Learn more</a>
                        </div>
                      </div>
                      <div class="mega-menu-item width-40">
                        <div class="profile-point">
                          <a class="fan-btn style-cta width-100" href="https://www.fandango.com/fandangovip?source=web_flydown_join">Join Fandango VIP For Free</a>
                          <div class="join-copy">
                            <p>(It only takes a few seconds to join)</p>
                            <span>Already a Fandango VIP?</span> <a href="https://www.fandango.com/account/signin?from=%2F&source=web_globalnav_signin" class="nav-account-signin cta">Sign In</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </li>
              <li class="mobile-sub-nav hide-on-tablet hide-on-desktop">
              </li>
            </ul>
          </nav>
        </header>
      </div>
      
    </div>
    )
  }
}

export default withRouter(Header);

