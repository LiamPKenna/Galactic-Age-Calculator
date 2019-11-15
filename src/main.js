import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/user.js';


// USER INTERFACE
$(document).ready(function(){



  $('#user-input').submit(event => {
    event.preventDefault();
    let user = new User(20, "N", 7);
    console.log(user);
  });

});
