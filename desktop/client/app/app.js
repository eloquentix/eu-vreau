import angular from 'angular';
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import angularAnimate from 'angular-animate';
import angularAria from 'angular-aria';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';

//Photos
import './images/cube.svg';


angular.module('app', [
    angularMaterial,
    angularAria,
    angularAnimate,
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })
  .config(['$mdThemingProvider', ($mdThemingProvider) => {

    //Theming Documentionat: https://material.angularjs.org/latest/Theming/03_configuring_a_theme
    //Available Palettes and Hues: https://material.google.com/style/color.html#color-color-palette

    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {'default': '900', 'hue-1': 'A400', 'hue-2': '500', 'hue-3': '700'})
      .accentPalette('brown', {'default': '600'})
      .warnPalette('red', {'default': '400'})

    $mdThemingProvider.theme('euvreaudark')
      .primaryPalette('teal', {'default': '500', 'hue-1': '600', 'hue-2': '700', 'hue-3': '800'})
      .accentPalette('brown', {'default': '600'})
      .warnPalette('red', {'default': '400'})
      .backgroundPalette('grey', {'default': '50', 'hue-1': '700'});
  }])


  .component('app', AppComponent);
