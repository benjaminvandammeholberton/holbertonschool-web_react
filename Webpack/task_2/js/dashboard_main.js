import $ from 'jquery';
import _ from 'lodash';

import '../css/main.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

const debounce = _.debounce(updateCounter, 500);

$('button').on('click', debounce);

let count = 0;
function updateCounter() {
  count += 1;
  console.log(count);
  $('#count').text(count);
}

$('body').prepend('<div id="logo"></div>');
