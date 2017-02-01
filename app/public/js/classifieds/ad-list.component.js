( function() {
  'use strict'
  angular.module( 'app' )
    .component( 'adList', {
      templateUrl: 'js/classifieds/ad-list.template.html',
      controller: controller

    } )
  controller.$inject = [ '$state', 'classifiedsService' ]

  function controller( $state, classifiedsService ) {
    const vm = this

    vm.$onInit = onInit
    vm.ads = []
    vm.deleteAd = deleteAd
    vm.editAd = editAd
    vm.toggleNewAdForm = toggleNewAdForm

    function onInit() {
      classifiedsService.getAllAds()
        .then( ads => {
          vm.ads = ads
          console.log( vm.ads )
        } )
    }

    function deleteAd( e, ad ) {
      e.preventDefault()
      const id = ad.id
      classifiedsService.deleteAd( id ).then( adResponse => {
        return adResponse
      } )
    }

    function editAd( e, ad ) {
      e.preventDefault()
    }

    function toggleNewAdForm() {
      // if ( classifiedsService.showForm ) {
      //   classifiedsService.showForm = false;
      // } else {
      //   classifiedsService.showForm = true;
      // }

    }


  }
} )()
