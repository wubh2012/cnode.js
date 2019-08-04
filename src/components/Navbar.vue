<template>
  <div class="navbar">
    <div class="navbar-inner">
      <div class="logo">
        <a href="/" class="brand">
          <img src="../assets/img/cnodejs_light.svg" alt srcset />
        </a>
        <div class="searchbar">
          <input type="text" class="search" />
          <img src="../assets/img/search.png" alt srcset />
        </div>
      </div>
      <ul class="nav">
        <li>
          <a href="/">首页</a>
        </li>
        <li>
          <a href="#">新手入门</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
        <li>
          <a href="#">登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "navbar"
};
</script>
<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #444;
  color: #ccc;
  @media screen and (max-width: 400px){
    margin: 0 5px;
  }
  .navbar-inner {
    width: 90%;
    max-width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    @media screen and (max-width: 400px){
      width: 100%;
      flex-direction: column;
      padding: 0;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    @media screen and (max-width: 400px){
      flex-direction: column;
    }
    .brand {
      img {
        width: 120px;
      }
    }
    .searchbar {
      position: relative;
      margin-left: 20px;
      img {
        position: absolute;
        top: 6px;
        left: 5px;
        width: 20px;
        height: 20px;
      }
      input {
        width: 235px;
        height: 26px;
        margin-top: 3px;
        padding: 10px 5px 8px 24px;
        border-radius: 15px;
        outline: none;
        border: 0;
        font-size: 13px;
        font-weight: 400;
        line-height: 1;
        color: #666;
        background: #888;
        transition: all 0.5s;
        &:focus,
        &:hover {
          background: #fff;
        }
      }
    }
  }
  ul.nav {
    list-style: none;
    display: flex;
    align-items: center;
    li {
      display: inline-block;
      a {
        display: inline-block;
        text-decoration: none;
        font-size: 13px;
        padding: 10px 15px;
        color: #ccc;
        &:hover {
          color: #fff;
        }
        &:focus {
          color: #3f82c4;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 480px){
  
}
</style>



