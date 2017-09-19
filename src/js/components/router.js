var router = new Router({
  mode: 'history',
  page404: function (path) {
      console.log('"/' + path + '" Page not found');
  }
});

var xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    content__container = document.getElementById('content__container');

var getRoute = function(path) {
  content__container.innerHTML = '';

  xmlhttp.open(method, path, true);
  xmlhttp.onload = function() {
    content__container.innerHTML = xmlhttp.response;
  }
  xmlhttp.send();
}

  var baseURL = '/ardorcare';

router
  .add(baseURL + '', function() {
    console.log('home page');
    getRoute('homepage.html');
  })

  .add(baseURL + '/seniorcare', function() {
    console.log('senior care page');
    getRoute('seniorcare.html');

    setTimeout(function() {
      getEventListener();
    }, 250);
  })

  .add(baseURL + '/childcare', function() {
    console.log('childcare page');
    getRoute('childcare.html');

    setTimeout(function() {
      getEventListener();
    }, 250);
  })
  .check()
  .addUriListener()

  window.router = router;
