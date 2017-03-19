# apollo-vue-starter

![Vue-Apollo-GraphQL](https://camo.githubusercontent.com/e78e52aa36ff76ef5e142bfeced3b5f657b3fc26/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f312a483941414e6f6f664c716a53313058643554775259772e706e67)

> Little tutorial about using Apollo Client and GraphQL in your Vue.js projects. This tutorial is focused in Client side, in order to help us with Server Side code We use this cool Flexible Backend Solution for GraphQL [GRAPHCOOL](https://www.graph.cool/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Install and configure Apollo Client

> First of all install apollo-client and vue-apollo packages

``` bash
# install packages
npm install —save apollo-client vue-apollo
```
> After that, You need to create an Apollo client and install the Vue plugin into your Vue.js app.

```javascript
import Vue from 'vue'
import App from './App'
import router from './router'
import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'
import VueApollo from 'vue-apollo'

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj06jswu35o780184z0bo0yvk',
    transportBatching: true
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id
})

Vue.config.productionTip = false

Vue.use(VueApollo, {
  apolloClient
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```




For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
