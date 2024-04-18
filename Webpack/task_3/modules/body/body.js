import $ from 'jquery';
import _ from 'lodash';

import './body.css';

$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

const debounce = _.debounce(updateCounter, 500);

$('button').on('click', debounce);

let count = 0;
function updateCounter() {
  count += 1;
  console.log(count);
  $('#count').text(count);
}
