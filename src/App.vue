<template>
  <div id="app">
    <div class="wrapper">
      <table style="width:100%; text-align:center" border="1">
      <tr class="hover1" >
          <th>API</th>
          <th>Description</th>
          <th>Auth</th>
          <th>HTTPS</th>
          <th>Cors</th>
          <th>Link</th>
          <th>Category</th>
      </tr>
    </table>
      <virtual-list
        class="list"
        style="height: 360px; overflow-y: auto"
        :data-key="'API'"
        :data-sources="items"
        :data-component="item"
        :estimate-size="10"
      />
    </div>
  </div>
</template>
<!-- :data-key2="'Description'"
:data-key3="'Auth'"
:data-key4="'HTTPS'"
:data-key5="'Cors'"
:data-key6="'Link'" -->

<script>
import listData from './components/ItemM.vue'
import { getData } from '@/components/data.js'


export default {
  name: 'App',
  data() {
    return {
      item: listData,
      items: getData(1425)
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1em;
  padding: 1em;
}
.list {
  
  border: 2px solid steelblue;
  border-radius: 1px;
}
</style>