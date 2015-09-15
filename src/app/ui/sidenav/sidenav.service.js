(function () {
    'use strict';

    angular
        .module('app.ui.sidenav')
        .factory('sideNavigationService', sideNavigationService);

    /* @ngInject */
    function sideNavigationService($mdSidenav) {
        /* jshint shadow:true */
        /* jshint unused:false */
        /*
        * Open and close are native browser functions for opening and closing windows.
        * To prevent JShint's "already defined" error, we use shadow and unused switches.
        */
        var service = {
            open: open,
            close: close,
            toggle: toggle
        };

        return service;

        ////////////////

        function open() {
            $mdSidenav('left')
                .open()
                .then(function () {
                    console.debug('close LEFT is done');
                });
        }

        function close() {
            $mdSidenav('left')
                .close()
                .then(function () {
                    console.debug('close LEFT is done');
                });
        }

        function toggle(argument) {
            console.log(argument);
        }
    }
})();
