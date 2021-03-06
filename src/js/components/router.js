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

var router = new Router({
  mode: 'history',
  page404: function (path) {
    console.log('"/' + path + '" Page not found');
    goHomePage();
  }
});

router
  .add('', function() {
    console.log('home page');
    getRoute('homepage.html');

    setTimeout(function() {
      preventLinkDefault();
      console.log('prevent default!');
    }, 250);
  })

  .add('seniorcare', function() {
    console.log('senior care page');
    getRoute('seniorcare.html');

    setTimeout(function() {
      getEventListener();
    }, 250);
  })

  .add('childcare', function() {
    console.log('childcare page');
    getRoute('childcare.html');

    setTimeout(function() {
      getEventListener();
    }, 250);
  })

  .add('contact', function() {
    console.log('contact page');
    getRoute('contact.html');
  })

  .add('thanks', function() {
    console.log('contact thank you page');
    getRoute('thanks.html');
  })

  .check()
  .addUriListener();

  window.router = router;

  function goHomePage() {
    router.navigateTo('');
  }
