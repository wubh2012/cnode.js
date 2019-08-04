<template>
  <div class="pagination">
    <ul>
      <li class="first">
        <a href="/?tab=all&page=1" @click="goFirst">«</a>
      </li>
      <li v-for="(page, index) in pages" :key="page+index">
        <a
          :class="{active: page === currentPage, disabled: page === '...'}"
          @click="changePage"
        >{{page}}</a>
      </li>
      <li class="last">
        <a href="/?tab=all&page=50" @click="goLast">»</a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "pagination",
  data() {
    return {
      currentPage: 1,
      pages: [1, 2, 3, 4, 5, "..."]
    };
  },
  methods: {
    changePage(event) {
      let ele = event.target;
      console.log(ele.innerText)
      if(ele.innerText === '...'){
        return;
      }
      let currentPage = parseInt(ele.innerText)
      this.currentPage = currentPage
      if (currentPage > 3) {
        let currIndex = this.pages.indexOf(currentPage);
        this.pages.splice(0, currIndex, ...["...", currentPage - 2, currentPage - 1]);
        currIndex = this.pages.indexOf(currentPage);
        this.pages.splice(currIndex + 1, this.pages.length - currIndex, ...[currentPage + 1, currentPage + 2, '...']);
      }else{
        this.pages = [1, 2, 3, 4, 5, "..."]
      }
      this.$emit('click', currentPage)
    },
    goFirst(e){
      e.preventDefault()
      this.$emit('click', 1)
    },
    goLast(e){
      e.preventDefault()
      this.$emit('click', 50)
    }
  }
};
</script>
<style lang="scss" scoped>
.pagination {
  padding: 10px 0 10px 10px;
  background-color: #fff;
  font-size: 14px;
  ul {
    display: inline-block;
    color: #999;
    background-color: transparent;
    // border: 1px solid #ddd;
    // border-radius: 4px;
    li {
      display: inline-block;
      border-left: 1px solid #ddd;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      background-color: #fff;
      &:first-child {
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child {
        border-radius: 0 4px 4px 0;
        border-right: 1px solid #ddd;
      }

      a {
        display: block;
        padding: 4px 12px;
        line-height: 20px;
        background-color: #fff;
        color: #778087;
        &:hover {
          background-color: #f5f5f5;
        }
        &.active {
          color: #80bd01;
          cursor: default;
        }
        &.disabled {
          cursor: text;
          background-color: transparent;
        }
      }
    }
  }
}
</style>


