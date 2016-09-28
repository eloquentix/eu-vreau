import angular from 'angular';
import Navbar from './navbar/navbar';
import Sidebar from './sidebar/sidebar';
import Hero from './hero/hero';
import User from './user/user';

let commonModule = angular.module('app.common', [
  Navbar,
  Sidebar,
  Hero,
  User
])

.name;

export default commonModule;
