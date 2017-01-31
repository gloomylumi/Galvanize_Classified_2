( function() {
  'use strict'
  angular.module( 'app' )
    .service( 'classifiedsService', classifiedsService )

  classifiedsService.$inject = [ '$http' ]

  function classifiedsService( $http ) {
    this.getAllAds = function() {
      return $http.get( '/classifieds' ).then( response => {
        const ads = response.data
        console.log( ads );
        return ads
      } )
    }

    this.getAd = function( id ) {
      return $http.get( `/classifieds/${id}` )
        .then( ( response ) => {
          return response
        } )
    }
  }
} )()
