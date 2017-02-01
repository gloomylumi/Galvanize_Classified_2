( function() {
  'use strict'
  angular.module( 'app' )
    .service( 'classifiedsService', classifiedsService )

  classifiedsService.$inject = [ '$state', '$http' ]

  function classifiedsService( $state, $http ) {
    this.getAllAds = getAllAds
    this.getAd = getAd
    this.deleteAd = deleteAd
    this.updateAd = updateAd
    this.showForm = false;

    function getAllAds() {
      return $http.get( '/classifieds' ).then( response => {
        const ads = response.data
        console.log( ads );
        return ads
      } )
    }

    function getAd( id ) {
      return $http.get( `/classifieds/${id}` )
        .then( ( response ) => {
          const ad = response.data
          return ad
        } )
    }

    function deleteAd( id ) {
      return $http.delete( `/classifieds/${id}` )
        .then( ( response ) => {
          const ad = response.data
          return ad
        } )
    }

    function updateAd() {

    }
  }
} )()
