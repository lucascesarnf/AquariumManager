angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'lucas' && pw == '123') {
                deferred.resolve('Bem vindo' + name + '!');
            } else {
                deferred.reject('Reveja suas credenciais!');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})