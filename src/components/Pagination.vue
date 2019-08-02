<template>
  <div class="pagination">
    <ul>
      <li class="first">
        <a href="/?tab=all&page=1">«</a>
        </li>
      <li v-for="(page, index) in pages" :key="page"> 
        <a :href="'/?tab=all&page='+page" :class="{active: index === 0}" 
           :click="changePage()"
        >
          {{page}}
        </a>
      </li>
      <li class="last">
        <a href="/?tab=all&page=50">»</a>
      </li>
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
  },
  methods: {
    changePage(event){
      let ele = event.target
      let currentPage = parseInt(ele.innerText)
      //如果当前点击的是4，就显示 [..., 2, 3, 4, 5, 6, ... ]
      //如果当前点击的是3，就显示 [..., 3, 2, 5, 6, 7, ... ]
      if(currentPage > 3){ // 点击第 4 页
        let currIndex = this.pages.indexOf(currentPage)
        this.pages.splice(0, currIndex, ['...', currentPage -1])
        this.pages.splice(currIndex + 1, 3, [currentPage + 1, currentPage + 2, '...'])
        
      }
    }
  }

}
</script>
<style lang="scss" scoped>
.pagination{
  padding: 10px 0 10px 10px;
  background-color: #fff;
  font-size: 14px;
  ul{
    display: inline-block;    
    color: #999;    
    background-color: transparent;
    // border: 1px solid #ddd;
    // border-radius: 4px;
    li{
      display: inline-block;
      border-left: 1px solid #ddd;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      background-color: #fff;
      &:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child{
        border-radius: 0 4px 4px 0;
        border-right: 1px solid #ddd;
      }
      
      a{
        display:block;
        padding: 4px 12px;
        line-height: 20px;
        border: 1px solid red;
        background-color: #fff;
        color: #778087;     
        &:hover{
          background-color: #f5f5f5;
        }   
        &.active{
          color: #80bd01;
          cursor: default;          
        }
        &.disabled{
          background-color: transparent;
        }
      }
      
    }
  }
}
</style>


