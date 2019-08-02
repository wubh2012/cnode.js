<template>
  <div class="pagination">
    <ul>
      <li class="first"></li>
      <li v-for="page in pages" :key="page">        
      </li>
      <list class="last"></list>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'pagination',
  data(){
    return {
      pages: [1, 2, 3, 4, 5, '...']
    }
  }
}
</script>
<style lang="scss" scoped>
.pagination{
  ul{
    display: flex;
    li{
      
    }
  }
}
</style>


