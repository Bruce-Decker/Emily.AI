
import React, { Component } from 'react';
import axios from 'axios';
import { envURL, reactURL } from '../config/environment';
import Header from './Header';
import swal from 'sweetalert';
import EndFooter from './EndFooter';

var LogAPI = require('../utils/logging');

class ChatBot extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount(){
    let url = envURL + 'getprofiledetails';
      let userid = localStorage.getItem('userid');
      if(userid !== null) {
          //AccountSettings.js Logging
          let click = {
            pageClick: {
                email: "anonymous",
                pageName: "Account Settings",
                timeStamp: new Date().getTime()
            }
        };
        console.log(click);
        LogAPI.logUserClicks(click);
          axios.post( url, { userid }, { withCredentials : true } )
              .then( (response) => {
                  console.log("Response from DB in get profiledetails", response.data );
                  this.setState({
                      FirstName : response.data.data.first_name,
                      LastName : response.data.data.last_name,
                      email : response.data.data.email,
                      address : response.data.data.address,
                      phone : response.data.data.phone_number,
                      city : response.data.data.city,
                      state_name : response.data.data.state,
                      ZipCode : response.data.data.zipcode,
                  })
              })
      }
      else {
          swal("Please login first to view your profile", "", "warning");
          this.props.history.push('/login');
      }

      let getCardDetailsPerUser = envURL + 'getCardDetailsPerUser';
      var user_email = { user_email : localStorage.getItem("email") };
      console.log('Sending Card Fetching Request');
      if(user_email){
          axios.post(getCardDetailsPerUser, user_email )
              .then( res => {
                  console.log('Fetching Card Details');
                  console.log(res.data.results.billing_information[0]);
                  if(typeof res.data.results.billing_information[0] !== "undefined"){
                      var card_details = res.data.results.billing_information[0];
                      this.setState({
                          cardDetails : card_details,
                          CardNumber : card_details.cardNumber,
                          ExpirationMonth : card_details.expiryMonth,
                          ExpirationYear : card_details.expiryYear,
                          cardZipCode : card_details.card_zipcode
                      }, () => {
                          console.log("After getting card details", this.state)
                      })
                  }
              })
              .catch(err => {
                  console.error(err);
              });
      }
  }

  handleMovieClick(e){
    localStorage.setItem("movieID", 9);
    window.location.href = reactURL + "movie_details";
  }

  handleBooking(){
    if(window.location.href.includes('/movies')){
    this.props.onSearchData(this.state.searchQuery);
    }else{
    localStorage.setItem('search','Avengers' )
    window.location.href = reactURL + "movies";
    }
  }

  render() {
    return (
    <div>
      <Header />
      <div id="chat-block">
        <iframe
            width="650"
            height="530"
            src="https://console.dialogflow.com/api-client/demo/embedded/37b30122-b99a-4b42-81cb-5d2da4d2d196">
        </iframe>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <EndFooter/>
      
    </div>
    )
  }
}



export default ChatBot;
              