import template from './navbar.html';
import controller from './navbar.controller';
import './navbar.styl';

let navbarComponent = {
  restrict: 'E',
  replace: true,
  bindings: {},
  template,
  controller
};

export default navbarComponent;
