angular.module( 'Data', [] ).factory( "Data", [ '$http', function( $http ) {

  var serviceBase = 'api/';

  var obj = {};

  obj.get = function (q) {
      return $http.get(serviceBase + q, {
        headers: {'Authorization': 'anystring '+window.localStorage.getItem( 'token' )}
      }).then(function (results) {
          return results.data;
      },
      function(data) {
        return data;
      });
  };
  obj.post = function (q, object) {
      return $http.post(serviceBase + q, object, {
        headers: {'Authorization': 'anystring '+window.localStorage.getItem( 'token' )}
      }).then(function (results) {
          return results.data;
      },
      function(data) {
        return data;
      });
  };
  obj.put = function (q, object) {
      return $http.put(serviceBase + q, object, {
        headers: {'Authorization': 'anystring '+window.localStorage.getItem( 'token' )}
      }).then(function (results) {
          return results.data;
      },
      function(data) {
        return data;
      });
  };
  obj.delete = function (q) {
      return $http.delete(serviceBase + q, {
        headers: {'Authorization': 'anystring '+window.localStorage.getItem( 'token' )}
      }).then(function (results) {
          return results.data;
      },
      function(data) {
        return data;
      });
  };

  return obj;

} ] );
