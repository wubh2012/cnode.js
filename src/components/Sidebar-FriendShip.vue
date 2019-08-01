<template>
  
  <div class="panel">
    <div class="header">友情社区</div>
    <div class="body">
      <ul>
        <li v-for="item in friendships" :key="item.name">
          <a :href="item.link" target="_blank">
            <img :src="item.imgurl" alt="" title="item.name">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'friendship',
  data(){
    return {
      friendships: [
        {name: 'ruby-china', imgurl: 'https://static2.cnodejs.org/public/images/ruby-china-20150529.png', link: 'https://ruby-china.org/'},
        {name: 'Golang 中国', imgurl: 'https://static2.cnodejs.org/public/images/golangtc-logo.png', link: 'http://golangtc.com/'},
        {name: 'php', imgurl: 'https://static2.cnodejs.org/public/images/phphub-logo.png', link: 'http://phphub.org/'},
        {name: 'TesterHome', imgurl: 'https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK', link: 'https://testerhome.com/'},
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.panel{
  .body{
    ul{
      display: flex;
      flex-direction: column;
      li{
        margin-bottom: 10px;
        img{
          width: 150px;
        }
      }
    }
  }
}
</style>


