(function(){
    'use strict';

    angular.module('components.music', [])
    .controller('MusicController', function(Music){
        var vm = this; // view model

        vm.songs = Music.all();
        
        window.onload = function(){
            alert('This site is a demo so music by the Monkees has not been uploaded. Instead links have been added to Youtube for each song. Enjoy (:');
        };

    })
    .config(function($stateProvider){
        $stateProvider
            .state('music',{
                url: '/music',
                templateUrl: 'components/music/music.html',
                controller: 'MusicController as mc',
            });
    });
})();