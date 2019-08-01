<template>
  <div>
    <div class="panel">
      <div class="header">
        <span class="title">{{topicDetail.title}}</span>
        <div class="changes">
          <span>发布于 {{topicDetail.create_at | formatterDate}}</span>
          <span>作者 <a href="#">{{topicDetail.author.loginname}}</a></span>
          <span>{{topicDetail.visit_count}} 次浏览</span>
          <span>来自 {{topicDetail.tab | formatterTab}}</span>
        </div>
      </div>
      <div class="body" v-html="topicDetail.content"></div>
    </div>
    <div class="panel">
      <div class="header">
        <span>{{topicDetail.reply_count}} 回复</span>
      </div>
      <div class="cell" v-for="(reply, index) in replies" :key="reply.id" :id="reply.id">
        <div class="authorContent">
          <img :src="reply.author.avatar_url" :title="reply.author.loginname" />
          <span class="replyAuthor"> {{reply.author.loginname}}</span>
          <a class="replyTime"> {{index + 1}}楼 • {{reply.create_at | formatterDate}}</a>
          <span class="replyByAuthor" v-if="reply.author.loginname === topicDetail.author.loginname">作者</span>
          <span v-else></span>
          <span class="action" v-if="reply.ups.length > 0">👍 {{reply.ups.length}}</span>
          <span class="action" v-else></span>
        </div>
        <div class="replayContent" v-html="reply.content"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topicDetail",
  data() {
    return {
      topicDetail: null,
      replies: []
    };
  },
  methods: {
    getData() {
      console.log("topicId", this.$route.params.id);
      console.log("topicDetail", this.topicDetail);
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success === true) {
            console.log("topicDetail", res);
            this.topicDetail = res.data.data;
            this.replies = this.topicDetail.replies;
          }
        })
        .catch(err => {
          console.error("获取主题详情异常", err);
        });
    }
  },
  beforeMount() {
    this.getData();
  }
};
</script>

<style src="../assets/css/markdown-github.css"></style>
<style lang="scss" scoped>
.panel {
  .header {
    .title {
      display: inline-block;
      margin: 8px 0;
      font-size: 22px;
    }
  }
  .changes {
    color: #838383;
    font-size: 11px;
    span {
      margin-left: 4px;
      &::before {
        content: "• ";
      }
    }
    a{
      color: inherit;
    }
  }
  .cell{
    flex-direction: column;
    align-items: normal;
    .authorContent{
      display: flex;
      img{
        width: 30px;
        height: 30px;
        border-radius: 3px;
      }
      .replyAuthor{
        margin-left: 10px;
        font-size: 12px;
        font-weight: 700;
        color: #666;
        text-decoration: none;
      }
      a.replyTime{
        margin-left: 6px;
        font-size: 11px;
        color: #08c;
        &:hover{
          color: #005580;
          text-decoration: underline;
        }
      }
      .replyByAuthor{
        width: 30px;
        height: 20px;
        margin-left: 6px;
        padding: 2px;
        border-radius: 3px;
        font-size: 12px;
        color: #fff;
        background-color: #6ba44e;
      }
      .action{
        flex: 1;
        color: gray;
        font-size: 15px;
        text-align: right;
      }
    }
    .replayContent{
      padding-left: 50px;
      color: #333;
    }
  }
}
</style>


