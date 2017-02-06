( function() {
  'use strict'
  angular.module( 'app' )
    .component( 'adList', {
      templateUrl: 'js/classifieds/ad-list.template.html',
      controller: controller,
      bindings: {
        ads: '<'
      }
    } )
  controller.$inject = [ '$state', 'classifiedsService' ]

  function controller( $state, classifiedsService ) {
    const vm = this

    vm.ads = classifiedsService.ads
    vm.deleteAd = deleteAd
    vm.editAd = editAd


    function deleteAd( e, ad ) {
      e.preventDefault()
      const id = ad.id
      classifiedsService.deleteAd( id ).then( adResponse => {
        return vm.ads = adResponse
      } )
    }

    function editAd( e, ad ) {
      e.preventDefault()
      const id = ad.id
      $state.go( 'editAd', {
        id: id
      } )

    }



  }
} )()
