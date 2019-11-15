import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/user.js';
import earth from './img/earth.png';
import mercury from './img/mercury.png';
import venus from './img/venus.png';
import mars from './img/mars.png';
import jupiter from './img/jupiter.png';
import sun from './img/sun.png';


// USER INTERFACE
$(document).ready(function(){

  let user;

  $('#user-input').submit(event => {
    event.preventDefault();
    const ageInput = parseInt($('#age-input').val());
    const genderInput = $('#gender-input').val();
    const healthInput = parseInt($('#health-input').val());
    if (ageInput) {
      user = new User(ageInput, genderInput, healthInput);
      console.log(user);
    } else {
      alert('Please enter your age!');
    }

  });

  $('.earth').append(`<img class"planet" src="${earth}" alt="earth">`);
  $('.mercury').append(`<img class"planet" src="${mercury}" alt="mercury">`);
  $('.venus').append(`<img class"planet" src="${venus}" alt="venus">`);
  $('.mars').append(`<img class"planet" src="${mars}" alt="mars">`);
  $('.jupiter').append(`<img class"planet" src="${jupiter}" alt="jupiter">`);
  $('.sun').append(`<img class"sun" src="${sun}" alt="sun">`);

});
