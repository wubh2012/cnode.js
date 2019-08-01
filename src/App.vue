<template>
  <div>
    <Navbar />
    <div class="container">
      <router-view name="main" class="main"/>
      <div class="aside">
        <router-view name="aside"/>
        <FriendShip/>
        <QRCode/>
      </div>
    </div>
    <Footerbar/>    
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import FriendShip from '@/components/Sidebar-FriendShip'
import QRCode from '@/components/Sidebar-QRCode'
import Footerbar from '@/components/Footerbar'

export default {
  name: "app",
  components: {
    Navbar,
    FriendShip,
    QRCode,
    Footerbar,
  }
};
</script>

<style lang="scss" src="./assets/css/reset.scss"></style>
<style lang="scss" src="./assets/css/base.scss"></style>
