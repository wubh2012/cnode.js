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

<style lang="scss" src="./assets/css/reset.scss"></style>
<style lang="scss" src="./assets/css/base.scss"></style>
