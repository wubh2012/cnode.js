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
    <div class="body">
      <div class="cell" v-for="topic in postlist" :key="topic.id">
        <a href="/user/#" class="userAvatar">
          <img :src="topic.author.avatar_url" alt />
        </a>
        <span class="replayCount">
          <span class="replyOfCount">{{topic.reply_count}}</span>
          <span class="countSeperator">/</span>
          <span class="visitOfCount">{{topic.visit_count}}</span>
        </span>
        <span class="badge" :class="{top: topic.top, good: topic.good}">{{topic | formatterTab}}</span>
        <a href="#" class="topicTitle" :title="topic.title">{{topic.title}}</a>
        <span class="lastTime">{{topic.create_at | formatterDate}}</span>
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
          console.log(res);
          this.postlist = res.data.data;
        })
        .catch(err => {
          console.err("获取主题 列表异常", err);
        });
    }
  },
  beforeMount() {
    this.getData();
  },
  
};
</script>
<style scope lang="scss">
.panel {
  .header {
    padding: 8px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: #f6f6f6;
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
  .cell {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    font-size: 14px;
    border-top: 1px solid #f0f0f0;
    background-color: #fff;
    .userAvatar {
      img {
        width: 30px;
        height: 30px;
        border-radius: 3px;
      }
    }
    .replayCount {
      width: 70px;
      display: inline-block;
      text-align: center;
      .replyOfCount {
        color: #9e78c0;
      }
      .countSeperator {
        font-size: 10px;
      }
      .visitOfCount {
        color: #b4b4b4;
        font-size: 10px;
      }
    }
    .badge {
      padding: 2px 4px;
      font-size: 12px;
      border-radius: 3px;
      background: #e5e5e5;
      color: #999;
      white-space: nowrap;
      &.top,
      &.good {
        background: #80bd01;
        color: #fff;
      }
    }
    .topicTitle {
      display: inline-block;
      margin-left: 6px;
      vertical-align: middle;
      white-space: nowrap;
      font-size: 16px;
      color: #333;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &:visited {
        color: #888;
      }
    }
    .lastTime {
      flex: 1;
      display: inline-block;
      text-align: right;
      min-width: 50px;
      white-space: nowrap;
      color: #778087;
    }
    &:hover {
      background: #f5f5f5;
    }
    &:nth-child(1) {
      border-top: none;
    }
  }
}
</style>


