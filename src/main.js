import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/user.js';


// USER INTERFACE
$(document).ready(function(){

  let user;

  $('#user-input').submit(event => {
    event.preventDefault();
    const ageInput = parseInt($('#age-input').val());
    const genderInput = $('#gender-input').val();
    const healthInput = parseInt($('#health-input').val());
    user = new User(ageInput, genderInput, healthInput);
    console.log(user);
  });

});
