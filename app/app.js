(function() {
  'use strict';

  angular.module('monkees', [
    'ui.router',
    'api.dates',
    'api.facts',
    'api.members',
    'components.dates',
    'components.home',
    'components.music',
    'components.contact',
    'components.about',
    'components.photos',
  ])
  .config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  });
})();