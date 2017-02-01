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

    vm.$onInit = onInit
    vm.submitForm = submitForm

    function onInit() {
      console.log( $state );
    }

    function submitForm() {
      if ( $state.$current.name === 'adList.newAd' ) {
        const newAd = {
          title: vm.adForm.title,
          description: vm.adForm.description,
          price: vm.adForm.price,
          item_image: vm.adForm.item_image,
        }
        classifiedsService.newAd( newAd )
      }
    }

  }

} )()
