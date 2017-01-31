( function() {
  'use strict'
  angular.module( 'app' )
    .component( 'classifieds', {
      templateUrl: 'js/classifieds/classifieds.template.html',
      controller: controller

    } )
  controller.$inject = [ 'classifiedsService' ]

  function controller( classifiedsService ) {
    const vm = this

    vm.$onInit = onInit
    vm.ads = []

    function onInit() {
      classifiedsService.getAllAds()
        .then( ads => {
          vm.ads = ads
          console.log( vm.ads )
        } );

    }


  }
} )()
