<template>
  <div id="custom-bootstrap-menu" class="navbar navbar-default navbar-static-top" role="navigation">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Calvue</a>
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-menubuilder"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse navbar-menubuilder">
        <ul class="nav navbar-nav navbar-left">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
#custom-bootstrap-menu.navbar-default .navbar-brand {
  color: rgba(51, 51, 51, 1);
}
#custom-bootstrap-menu.navbar-default {
  font-size: 14px;
  background-color: rgba(248, 248, 248, 1);
  border-bottom-width: 1px;
}
#custom-bootstrap-menu.navbar-default .navbar-nav > li > a {
  color: rgba(51, 51, 51, 1);
  background-color: rgba(248, 248, 248, 1);
}
#custom-bootstrap-menu.navbar-default .navbar-nav > li > a:hover,
#custom-bootstrap-menu.navbar-default .navbar-nav > li > a:focus {
  color: rgba(51, 51, 51, 1);
  background-color: rgba(194, 194, 194, 1);
  background: -webkit-linear-gradient(
    top,
    rgba(102, 102, 102, 1) 0%,
    rgba(194, 194, 194, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(102, 102, 102, 1) 0%,
    rgba(194, 194, 194, 1) 100%
  );
}
#custom-bootstrap-menu.navbar-default .navbar-nav > .active > a,
#custom-bootstrap-menu.navbar-default .navbar-nav > .active > a:hover,
#custom-bootstrap-menu.navbar-default .navbar-nav > .active > a:focus {
  color: rgba(51, 51, 51, 1);
  background-color: rgba(194, 194, 194, 1);
  background: -webkit-linear-gradient(
    top,
    rgba(102, 102, 102, 1) 0%,
    rgba(194, 194, 194, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(102, 102, 102, 1) 0%,
    rgba(194, 194, 194, 1) 100%
  );
}
#custom-bootstrap-menu.navbar-default .navbar-toggle {
  border-color: #c2c2c2;
}
#custom-bootstrap-menu.navbar-default .navbar-toggle:hover,
#custom-bootstrap-menu.navbar-default .navbar-toggle:focus {
  background-color: #c2c2c2;
}
#custom-bootstrap-menu.navbar-default .navbar-toggle .icon-bar {
  background-color: #c2c2c2;
}
#custom-bootstrap-menu.navbar-default .navbar-toggle:hover .icon-bar,
#custom-bootstrap-menu.navbar-default .navbar-toggle:focus .icon-bar {
  background-color: #f8f8f8;
}
</style>
