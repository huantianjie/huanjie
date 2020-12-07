<template>
  <div class="compost">
    <div class="com-post-item" v-for="index of 4" :key="index">
      <div class="author">
        <div class="author-avatar" >
          <img
            src="/img/Ft44x3tBrSpTkqdYcsCEGUopWTdD.jpg"
            class="author-avatar__pic"
          />
          <img v-if="authorIconV=='yellow'" class="author-avatar__identity" src="/img/icon_v_yellow.png" />
          <img v-else-if="authorIconV=='red'" class="author-avatar__identity" src="/img/icon_v_red.png" />
          <img v-else-if="authorIconV=='blue'" class="author-avatar__identity" src="/img/icon_v_blue.png" />
        </div>
        <div class="author-info" >
          <div class="author-name">小颖包子</div>
          <div class="author-date">
            <span class="date" v-for="(value,i) of idAuthentication" :key="i">{{value}} </span>
          </div>
        </div>
        <div class="author-follow " @click="clickFollow" v-show="isFollow">关注</div>
      </div>
      <div class="title">
        坐上我心爱的小火车🚂🚂🚂 它永远都不会堵车~🚂🚂🚂
        玩着玩着忽然有零食诱惑， 真实演绎“逛吃逛吃”🚂🚂🚂
      </div>
      <div class="crop">
        <div class="tri-image" v-for="(pic,i) of triImage" :key="i">
          <img :src="`/img/${pic}`" />
        </div>
      </div>
      <div class="info">
        <div class="topic-tag">
          <router-link to="/">幸福就是有你陪伴</router-link>
        </div>
        <div class="datatist">

          <img src="/img/icon_comment_evaluation.png" />
          
          <div class="count">1</div>
          <img @click="addLike" src="/img/icon_like_nor_44.png" v-if="isUnlike" />
          <img @click="moveLike" src="/img/icon_like_sel_44.png" v-else/>
          <div class="count">{{likeCount}}</div>
        </div>
      </div>
      <div class="views"><span>50581</span>浏览</div>
      <ul class="comment" @click="otherComment">
        <li v-for="(com,i) of comment" :key="i">
          <span>{{com.name}}</span>
          {{com.content}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFollow:true,
      isUnlike:true,
      likeCount:3,
      authorIconV:'yellow',
      idAuthentication:['测评达人','小作家','知名萌宠博主','百科达人'],
      triImage:['FiJVcuFKZATFr3mYMGsdx8mvaxKz.jpg','Fin14MXxw3kUMxANpwFh-boYIWyx.jpg','Fp5sMOSy9Dq2k5hXfn2msuTWQUPT.jpg'],
      comment:[{name:'小蒲今天也要努力鸭',content:'圣诞也太漂亮了吧！'}]
    }
  },
  methods: {
    clickFollow(){
      this.isFollow=false;
    },
    addLike(){
      this.isUnlike=false;
      this.likeCount++;
    },
    moveLike(){
      this.isUnlike=true;
      this.likeCount--;
    },
    otherComment(){
      this.$router.push('/')
    }
  },
};
</script>
<style >
.compost .com-post-item {
  font-size: 0.48rem;
}
.compost .com-post-item {
  padding: 0.27rem 0.347rem 0.4rem 0.347rem;
  border-bottom: 0.026rem solid #efecec;
  text-align: left;
}
.compost .crop {
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.compost .tri-image img {
  width: 3.01rem;
  height: 3.01rem;
}
.compost .author-info {
  margin-left: 0.32rem;
  width: 6.586rem;
  height: 0.96rem;
}
.compost .author-info .author-name {
  font-size: 0.3733rem;
  line-height: 0.533rem;
  color: #444;
}
.compost .author-info .author-date .date {
  font-size: 0.32rem;
  line-height: 0.3733rem;
  color: #999;
}
.compost .author-follow {
  width: 1.44rem;
  height: 0.5866rem;
  margin: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border-radius: 0.3733rem;
  border: 1px solid #f55b50;
  font-size: 0.3733rem;
  font-weight: 400;
  color: #f55b50;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.compost .title {
  font-size: 0.37rem;
  font-weight: 400;
  color: #444;
  margin-bottom: 0.1rem;
  width: 100%;
  line-height: 0.74rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  box-orient: horizontal;
}
.compost .author {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.compost .author-avatar {
  position: relative;
  width: 0.96rem;
  height: 0.96rem;
}
.compost .author-avatar__pic {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: block;
}
.compost .author-avatar__identity {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 0.3733rem;
}
.compost .com-post-item .topic-tag {
  padding: 0 0.213rem;
  height: 0.533rem;
  background-color: #f6f6f6;
  border-radius: 0.266rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.compost .com-post-item .info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 0.293rem;
}
.compost .com-post-item .topic-tag a {
  color: #4a90e2;
  font-size: 0.293rem;
  padding-left: 0.48rem;
  background: url("/img/icon_subject1.png") no-repeat 0 center;
  background-size: 0.346rem 0.293rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.compost .com-post-item .datatist {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  font-size: 0.3733rem;
  font-weight: 400;
  color: #666;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
}
.compost .com-post-item .datatist > img {
  width: 0.5866rem;
  margin-left: 0.4266rem;
}
.compost .datatist .count {
  line-height: 0.4266rem;
  margin-left: 0.16rem;
  margin-top: 0.08rem;
}
.compost .com-post-item .views {
  margin-top: 0.133rem;
  color: #666;
  font-size: 0.293rem;
}
.compost .com-post-item .views span {
  color: #444;
  margin-right: 0.133rem;
}
.compost .com-post-item .comment {
  margin-top: 0.133rem;
}
.compost .com-post-item .comment li {
  height: 0.48rem;
  line-height: 0.48rem;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  box-orient: horizontal;
  color: #666;
  font-size: 0.32rem;
}
.compost .comment li span{
    color: #444;
    margin-right: 0.133rem;  
}
</style>
