( function() {
  'use strict'
  angular.module( 'app' )
    .component( 'adForm', {
      templateUrl: 'js/classifieds/ad-form.template.html',
      controller: controller
    } )

  controller.$inject = [ '$state', 'classifiedsService' ]

  function controller( $state, classifiedsService ) {
    const vm = this

  }

} )()
