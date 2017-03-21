<template>
  <div id="app">
    <Navbar :routes="routes" id="navbar"/>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Router from '@/router/index'

let routes = Router.options.routes
export default {
  name: 'app',
  data () {
    return {
      routes
    }
  },
  components: {
    Navbar
  }
}
</script>

<style>
@charset "UTF-8";

@font-face {
  font-family: "starwars";
  src:url("./assets/fonts/starwars.eot");
  src:url("./assets/fonts/starwars.eot?#iefix") format("embedded-opentype"),
    url("./assets/fonts/starwars.woff") format("woff"),
    url("./assets/fonts/starwars.ttf") format("truetype"),
    url("./assets/fonts/starwars.svg#starwars") format("svg");
  font-weight: normal;
  font-style: normal;

}

[data-icon]:before {
  font-family: "starwars" !important;
  content: attr(data-icon);
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class^="sw-"]:before,
[class*=" sw-"]:before {
  font-family: "starwars" !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-variant: normal !important;
  text-transform: none !important;
  speak: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.sw-admiral-ackbar:before {
  content: "\e000";
}
.sw-boba-fett:before {
  content: "\e001";
}
.sw-clone-trooper:before {
  content: "\e002";
}
.sw-general-grievous:before {
  content: "\e003";
}
.sw-k2so:before {
  content: "\e004";
}
.sw-stormtrooper:before {
  content: "\e005";
}
.sw-lightsaber:before {
  content: "\e006";
}
.sw-blaster:before {
  content: "\e007";
}
.sw-mini-vader:before {
  content: "\e008";
}
.sw-rebel-alliance:before {
  content: "\e009";
}
.sw-imperial-emblem:before {
  content: "\e00a";
}
.sw-darth-vader:before {
  content: "\e00b";
}
.sw-chewbacca:before {
  content: "\e00c";
}
.sw-yoda:before {
  content: "\e00d";
}
.sw-pencil-square:before {
  content: "\e00e";
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#navbar {
  margin-bottom: 30px;
}

</style>
