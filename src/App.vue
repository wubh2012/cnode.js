<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view name="main" class="main"/>
      <router-view name="aside" class="aside"/>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a{text-decoration: none;cursor: pointer;}
ol,ul{ list-style: none;}
body {
  background-color: #e1e1e1;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-size: 14px;
  word-break: break-word;
  color: #333;
}
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
<style lang="scss" src="./assets/base.scss"></style>
