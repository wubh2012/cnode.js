<template>
  <div>
    <div class="panel">
      <div class="header">
        <a href="/">主页</a> <span class="separator">/</span>
        </div>
      <div class="body">
        <div class="userProfile">
          <p class="avatar">
            <img :src="user.avatar_url" alt="" :title="user.loginname">
            <span>{{user.loginname}}</span>
          </p>
          <p class="score">{{user.score}} 积分</p>
          <p class="githubuser"><img src="../assets/img/github.png" alt="" srcset=""> {{user.githubUsername}}</p>
          <p class="registerTime">注册时间 {{user.create_at | formatterDate}}</p>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="header">最近创建的话题</div>
      <div class="body">
        <div v-if="topics.length > 0">
          <div class="cell userinfo" v-for="topic in topics" :key="topic.id">
            <router-link :to="{name: 'user', params: {name: topic.author.loginname}}" class="userAvatar">
              <img :src="topic.author.avatar_url" alt="" :title="topic.author.loginname" />
            </router-link>
            <router-link class="topicTitle" :to="{name: 'topicDetail', params: {id: topic.id}}" :title="topic.title" >
              {{topic.title}}
            </router-link>
            <span class="lastTime">{{topic.last_reply_at | formatterDate}}</span>
          </div>
        </div>
        <div v-else>
          <p>无话题</p>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="header">最近参与的话题</div>
      <div class="body">
        <div v-if="replies.length > 0">
          <div class="cell userinfo" v-for="reply in replies" :key="reply.id">
              <router-link :to="{name: 'user', params: {name: reply.author.loginname}}" class="userAvatar">
                <img :src="reply.author.avatar_url" alt="" :title="reply.author.loginname" />
              </router-link>
              <router-link class="topicTitle" :to="{name: 'topicDetail', params: {id: reply.id}}" :title="reply.title" >
                {{reply.title}}
              </router-link>
              <span class="lastTime">{{reply.last_reply_at | formatterDate}}</span>
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
  name: 'userinfo',
  data(){
    return {
      user: {},
      topics: [],
      replies: []
    }
  },
  methods:{
    getUserInfo(){
      console.log('name', this.$route.params.name)
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then((res)=>{
          console.log('userinfo', res)
          this.user = res.data.data
          this.topics = this.user.recent_topics
          this.replies = this.user.recent_replies
        })
        .catch((error)=>{
          console.error('获取用户信息异常', error)
        })
    }
  },
  beforeMount(){
    this.getUserInfo()
  }
}
</script>

<style scoped lang="scss">
.panel{
  .header{
    a{
      color: #80bd01;
    }
    .separator{
      padding: 0 5px;
      color: #ccc;
    }
  }
  .body{
    .userProfile{
      .avatar{
        display: flex;
        align-items: flex-start;
        color: #778087;
        img{
          width: 40px;
          height: 40px;
          border-radius: 3px;
          margin-right: 10px;
        }
      }
      .score{
        margin: 8px 0;
        font-size: 14px;
      }
      .githubuser{
        margin: 8px 0;
        color: #778087;
        height: 28px;
        line-height: 28px;
        img{
          width: 16px;
          height: 16px;
        }
      }
      .registerTime{
        color: #ababab;
      }
    }
  }
  .cell.userinfo{
    .topicTitle{
      color: #08c;
      text-decoration: none;
      &:hover{
        color: #005580;
        text-decoration: underline;
      }
    }
  }
}
</style>



