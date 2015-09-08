angular.module('app').value('gbToastr', toastr);

angular.module('app').factory('gbNotifier', function(gbToastr) {
  return {
    notify: function(msg) {
      gbToastr.success(msg);
      console.log(msg);
    }
  }
});
