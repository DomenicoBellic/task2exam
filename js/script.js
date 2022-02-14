document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
    var elems1 = document.querySelectorAll('.tabs');
    var instances1 = M.Tabs.init(elems1, {});
  });