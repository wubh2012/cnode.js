<template>
  <div>
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
    <div class="panel">
      <div class="header">最近参与的话题</div>
      <div class="body">
        <div v-if="replies.length > 0">
          <div class="topic" v-for="reply in getTop5Replies" :key="reply.id">
            <router-link class="topicTitle" :to="{name: 'topicDetail', params: {id: reply.id, name: user.loginname}}" :title="reply.title" >
              {{reply.title}}
            </router-link>
          </div>
        </div>
        <div v-else>
          <p>无话题</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sidebarUserInfo",
  data() {
    return {
      user: {},
      replies: []
    };
  },
  methods: {
    getUserInfo() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          console.log("sidebarUserInfo", res)
          this.user = res.data.data
          this.replies = this.user.recent_replies
        })
        .catch(error => {
          console.error("获取侧边栏用户信息异常", error)
        });
    }
  },
  computed: {
    getTop5Replies(){
      return this.replies.slice(0, 5)
    }
  },
  created() {
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
    .topic{
      padding: 5px;
      text-overflow: ellipsis;
      overflow: hidden;
      .topicTitle{
        display: inline-block;
        max-width: 270px;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #778087;
        font-size: 14px;
      }
    }
    
    
  }
}
</style>


