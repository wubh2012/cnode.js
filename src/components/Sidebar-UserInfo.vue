<template>
  <div class="panel">
    <div class="header">个人信息</div>
    <div class="body">
      <p class="userAvatar">
        <router-link :to="{name: 'user', params: {name: user.loginname}}">
          <img :src="user.avatar_url" alt srcset />
        </router-link>
        <span class="userName">{{user.loginname}}</span>
      </p>
      <p>积分: {{user.score}}</p>
      <p class="signature">“ 这家伙很懒，什么个性签名都没有留下。 ”</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebarUserInfo",
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUserInfo() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          console.log("sidebarUserInfo", res);
          this.user = res.data.data;
        })
        .catch(error => {
          console.error("获取侧边栏用户信息异常", error);
        });
    }
  },
  beforeMount() {
    this.getUserInfo();
  }
};
</script>
<style lang="scss" scoped>
.panel {
  .body {
    .userAvatar {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      img {
        width: 40px;
        height: 40px;
      }
      .userName {
        font-size: 16px;
        margin-left: 12px;
        color: #778087;
      }
    }
    .signature {
      margin-top: 12px;
      font-size: 13px;
      font-style: italic;
    }
  }
}
</style>


