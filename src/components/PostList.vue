<template>
  <div class="panel">
    
    <div class="header">
      <a href="/?tab=all" class="topicTab active">全部</a>
      <a href="/?tab=good" class="topicTab">精华</a>
      <a href="/?tab=share" class="topicTab">分享</a>
      <a href="/?tab=ask" class="topicTab">问答</a>
      <a href="/?tab=job" class="topicTab">招聘</a>
      <a href="/?tab=dev" class="topicTab">客户端测试</a>
    </div>
    <div>
      <div class="cell" v-for="topic in postlist" :key="topic.id">
        <router-link :to="{name: 'user', params: {name: topic.author.loginname}}" class="userAvatar">
          <img :src="topic.author.avatar_url" alt="" :title="topic.author.loginname" />
        </router-link>
        <span class="replayCount">
          <span class="replyOfCount">{{topic.reply_count}}</span>
          <span class="countSeperator">/</span>
          <span class="visitOfCount">{{topic.visit_count}}</span>
        </span>
        <span class="badge" :class="{top: topic.top, good: topic.good}">{{topic | formatterTab}}</span>
        <router-link class="topicTitle"
          :to="{name: 'topicDetail', params: {id: topic.id, name: topic.author.loginname}}"
          :title="topic.title"
        >{{topic.title}}</router-link>
        <span class="lastTime">{{topic.last_reply_at | formatterDate}}</span>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "postList",
  data() {
    return {
      postlist: []
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics")
        .then(res => {
          if (res.data.success === true) {
            console.log("topics", res);
            this.postlist = res.data.data;
          }
        })
        .catch(err => {
          console.error("获取主题列表异常", err);
        });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style scope lang="scss">
.panel {
  .header {
    .topicTab {
      display: inline-block;
      margin: 0 12px;
      color: #80bd01;
      text-decoration: none;
      border-radius: 3px;
      &.active {
        padding: 3px 4px;
        background: #80bd01;
        color: #fff;
      }
    }
  }
}
</style>


