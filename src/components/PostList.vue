<template>
  <div v-if="isloading">
    <XLoading />
  </div>
  <div v-else>
    
    <div class="panel">
      <div class="header" id="topicTab">
        <a href="/?tab=all" class="topicTab active" @click="changeTab" data-tab="all" >全部</a>
        <a href="/?tab=good" class="topicTab" @click="changeTab" data-tab="good">精华</a>
        <a href="/?tab=share" class="topicTab" @click="changeTab" data-tab="share">分享</a>
        <a href="/?tab=ask" class="topicTab" @click="changeTab" data-tab="ask">问答</a>
        <a href="/?tab=job" class="topicTab" @click="changeTab" data-tab="job">招聘</a>
      </div>
      <div>
        <div class="cell" v-for="topic in postlist" :key="topic.id">
          <router-link
            :to="{name: 'user', params: {name: topic.author.loginname}}"
            class="userAvatar"
          >
            <img :src="topic.author.avatar_url" alt :title="topic.author.loginname" />
          </router-link>
          <span class="replayCount">
            <span class="replyOfCount">{{topic.reply_count}}</span>
            <span class="countSeperator">/</span>
            <span class="visitOfCount">{{topic.visit_count}}</span>
          </span>
          <span class="badge" :class="{top: topic.top, good: topic.good}">{{topic | formatterTab}}</span>
          <router-link
            class="topicTitle"
            :to="{name: 'topicDetail', params: {id: topic.id, name: topic.author.loginname}}"
            :title="topic.title"
          >{{topic.title}}</router-link>
          <span class="lastTime">{{topic.last_reply_at | formatterDate}}</span>
        </div>        
        <Pagination @click="handlePage"/>
      </div>
    </div>
  </div>
</template>
<script>
import Pagination from "@/components/Pagination";
export default {
  name: "postList",
  data() {
    return {
      page: 1,
      limit: 20,
      tab: 'all',
      isloading: true,
      postlist: []
    };
  },
  components: {
    Pagination
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics",{
          params: {
            page: this.page,
            limit: this.limit,
            tab: this.tab
          }
        })
        .then(res => {
          if (res.data.success === true) {
            console.log("topics", res)
            this.postlist = res.data.data
            this.isloading = false
          }
        })
        .catch(err => {
          console.error("获取主题列表异常", err)
        });
    },
    handlePage(page){
      this.page = page
      this.getData()
    },
    changeTab(event){
      event.preventDefault()
      let element = event.target
      console.log(element)
      
      let parentEle = element.parentElement
      console.log(typeof parentEle.children, parentEle.children)
      Array.from(parentEle.children).forEach((ele)=>{
        ele.classList.remove('active')
      })
      element.classList.add('active')
      console.log('attribute', element.dataset.tab)

      this.tab = element.dataset.tab
      this.getData()
    }
  },
  created() {
    this.getData()
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


