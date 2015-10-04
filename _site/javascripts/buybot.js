(function() {
  var $country, $method, filterAndRenderSellers;

  filterAndRenderSellers = function(countryCode, methodCode, selector) {
    var $selector, i, len, scope, seller;
    $selector = $(selector);
    scope = (!!countryCode && !!methodCode ? _.filter(sellers, function(seller) {
      var methodRegExp, сountryRegExp;
      сountryRegExp = new RegExp(countryCode, "i");
      methodRegExp = new RegExp(methodCode, "i");
      return сountryRegExp.test(seller.countries) && methodRegExp.test(seller.methods);
    }) : !!countryCode ? _.filter(sellers, function(seller) {
      var сountryRegExp;
      сountryRegExp = new RegExp(countryCode, "i");
      return сountryRegExp.test(seller.countries);
    }) : !!methodCode ? _.filter(sellers, function(seller) {
      var methodRegExp;
      methodRegExp = new RegExp(methodCode, "i");
      return methodRegExp.test(seller.methods);
    }) : _.filter(sellers, function(seller) {
      return seller.hide !== "true";
    }));
    $selector.html('');
    if (_.isEmpty(scope)) {
      $selector.next('.no-matches').show();
    } else {
      $selector.next('.no-matches').hide();
      for (i = 0, len = scope.length; i < len; i++) {
        seller = scope[i];
        $selector.append(seller.html);
      }
    }
    return scope = void 0;
  };

  $country = $("select#country");

  $method = $("select#payment_method");

  $country.change(function() {
    return filterAndRenderSellers($country.val(), $method.val(), "#sellers");
  });

  $method.change(function() {
    return filterAndRenderSellers($country.val(), $method.val(), "#sellers");
  });

  $(document).ready(function() {
    return filterAndRenderSellers($country.val(), $method.val(), "#sellers");
  });

}).call(this);
