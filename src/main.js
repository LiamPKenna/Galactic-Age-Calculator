import $ from 'jquery';
import 'bootstrap';
import './css/bootstrap.min.css';
import './css/styles.css';


// USER INTERFACE
$(document).ready(function(){

  $('#user-input').submit(event => {
    event.preventDefault();
  });

});
