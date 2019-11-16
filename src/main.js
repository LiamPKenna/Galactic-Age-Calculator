import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/user.js';
// Images from https://space-facts.com/transparent-planet-pictures/
import earth from './img/earth.png';
import mercury from './img/mercury.png';
import venus from './img/venus.png';
import mars from './img/mars.png';
import jupiter from './img/jupiter.png';
import sun from './img/sun.png';

import { buildPlanetInfo, buildSunInfo } from './js/templates.js';


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
      $('.start').hide();
      $('.planets').fadeIn();
    } else {
      $('.enter-age-modal').modal('show');
    }
  });

  $('.planets').on('click', 'img', (event) => {
    const thisPlanet = event.target.id;
    let planetInfoHtml;
    if (thisPlanet === "Sun") {
      planetInfoHtml = buildSunInfo(user);
    } else {
      planetInfoHtml = buildPlanetInfo(thisPlanet, user);
    }
    $('.planet-info').text('');
    $('.planet-info').append(planetInfoHtml);
    $('.planet-modal').modal('show');
  });

  $('.planet-modal').on('click', 'button', () => {
    $('.planet-modal').modal('hide');
  });

  $('#start-over').click(() => {
    window.scrollTo(0,0);
    location.reload();
  });

  $('.earth').append(`<img class"planet" src="${earth}" alt="earth">`);
  $('.mercury').append(`<img id="Mercury" class"planet" src="${mercury}" alt="mercury">`);
  $('.venus').append(`<img id="Venus" class"planet" src="${venus}" alt="venus">`);
  $('.mars').append(`<img id="Mars" class"planet" src="${mars}" alt="mars">`);
  $('.jupiter').append(`<img id="Jupiter" class"planet" src="${jupiter}" alt="jupiter">`);
  $('.sun').append(`<img id="Sun" class"sun" src="${sun}" alt="sun">`);

});
