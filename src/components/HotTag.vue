<template>
  <div id="hotEvents" class="hotEvents">
    <div class="hotHead">
      <p>热门活动</p>
      <router-link to="/" class="hotMore">
        <img src="/img/detail_right_arrow.png" alt="" />
      </router-link>
    </div>
    <div>
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <div class="hotEventsImg" v-for="(img, i) of images" :key="i">
          <router-link to="/" class="eventsLink"
            ><img :src="img"
          /></router-link>
        </div>
        <router-link to="/" class="hotEventsMore">更多</router-link>
      </ul>
    </div>
    </div>
    <div v-for="n of 80" :key="n">{{n}}</div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      images: [
        "/img/5a4eee74a51168f67377f366baadae71.jpg",
        "/img/6f4cd60010f6d57d8b663eb7547b11a3.jpg",
        "/img/c5deb37c6307e92eee34cafff14233dc.jpg",
        "/img/fd3c4c06f0d1c1b7021445a53e3bf57e.jpg",
      ],
    };
  },
name: "hotEvents",
  mounted() {
    const options = {
      scrollY: false,
      scrollX: true, // 因为scrollY默认为true，其实可以省略
    };

    this.scroll = new BScroll(this.$refs.wrapper, options);
  },
};
</script>

<style>
.hotEvents .hotHead{
  position: relative;
}
.hotEvents .hotHead p{
  font-size: 0.48rem;
  margin: 0;
  padding:0.4rem 0.346rem 0.293rem ;
}
.hotEvents .hotHead .hotMore {
  width: 0.186rem;
  height: 0.293rem;
  position: absolute;
  top: 0;
  right: 5%;
}
.hotEvents .hotMore img{
width: 100%;
height: 100%;
}
.hotEvents .wrapper {
  box-sizing: border-box;
  overflow: hidden;
  height: 3rem;
}
.hotEvents .content {
  width: 1400px;
  display: flex;
  overflow-x: scroll;
}

.hotEvents .content .hotEventsImg {
  padding-left: 0;
  width: 9rem;
}
.hotEvents .eventsLink {
  display: block;
  width: 9rem; 
  height: 3rem;
  font-size: 0.4rem;
  text-align: center;
  position: relative;
}

.hotEvents .eventsLink img {
  height: 100%;
  margin: 0 3px;
}
.hotEvents .hotEventsMore{
  color: #999;
  font-size: 0.346rem;
  background-color: #f6f6f6;
  text-align: center;
  width: 5%;
  line-height: 3rem;
}
</style>