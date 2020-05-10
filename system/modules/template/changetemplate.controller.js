(function () {
    'use strict';

    angular
        .module('app')
        .controller('ChangeTemplateController', ChangeTemplate);

    ChangeTemplate.$inject = ['TemplateService', '$rootScope'];
    function ChangeTemplate(TemplateService, $rootScope) {
        var vm = this;

    }

})();