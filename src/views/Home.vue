<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="main">
        <PostList />
      </div>
      <div class="aside"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import PostList from "@/components/PostList.vue";

export default {
  name: "home",
  components: {
    Navbar,
    PostList
  }
};
</script>
<style lang="scss">
.container {
  display: flex;
  width: 90%;
  max-width: 1400px;
  min-width: 960px;
  min-height: 400px;
  margin: 15px auto;
  .main {
    flex: 1;    
  }
  .aside {
      width: 230px;
      margin-left: 15px;
      min-height: 400px;
      border: 1px solid;
    }
}
</style>

