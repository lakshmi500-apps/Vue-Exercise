<template>
  <div class="listData">
    
      <div class="id"> 
        <table style="width:100%" border="1px" >
          <tr class="hover" v-for="item in source" :key="item.id">
            <td>{{source.API}}</td>
            <td>{{source.Description}}</td>
            <td>{{source.Auth}}</td>
            <td>{{source.HTTPS}}</td>
            <td> {{source.Cors}}</td>
            <td>{{source.Link}}</td>
            <td>{{source.Category}}</td>
          </tr>
        
        </table>
        <table  >

      </table>
      </div> 
  </div>
</template>
   
<script>
export default {
  name: 'listData',
  props: {
      source: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>
.source {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgrey;
  padding: 1em;
}
.hover:hover {
       background-color:rgb(101, 224, 153);
} 
.hover1.hover1 {
   background-color:rgb(196, 195, 138);
     }  
     table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px 15px;
}
</style>
