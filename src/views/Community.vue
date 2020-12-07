<template>
  <div class="community">
    <mt-tab-container v-model="selectedTab">
      <mt-tab-container-item id="sq">
        <!-- 顶部导航 -->
        <div class="top_navigation">
          <div class="recommend">
            <div class="rec" v-for="(v, k) in communityTab" :key="k">
              <p
                :class="{ active: k == clickK }"
                @click="changeClick(k, v.tabId)"
              >
                {{ v.content }}
              </p>
            </div>
          </div>
          <router-link to="/" class="topn_a"
            ><img src="/img/ic_my_note_ablum.png" class="topn_img"
          /></router-link>

          <!--搜索 -->
          <div class="p_search">
            <!-- 搜索 -->
            <van-search
              v-model="value"
              shape="round"
              background="transparent"
              placeholder="请输入搜索关键词"
              class="search"
            />
            <router-link to="/" class="message_a"
              ><img class="message_img" src="/img/ic_message.png"
            /></router-link>
          </div>
        </div>
        <mt-tab-container v-model="active" swipeable>
          <mt-tab-container-item id="tj">
            <!-- 轮播图 -->
            <van-swipe :autoplay="3000" class="leave_top">
              <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class="swipe_img" v-lazy="image" />
              </van-swipe-item>
            </van-swipe>
            <!-- 社区图标 -->
            <van-grid :border="false" :column-num="5" class="tab_entry">
              <van-grid-item to="/about">
                <van-image src="/img/shuijing.png" />
                <p>签到</p>
              </van-grid-item>
              <van-grid-item to="/about">
                <van-image src="/img/wenda.png" />
                <p>问答</p>
              </van-grid-item>
              <van-grid-item to="/about">
                <van-image src="/img/ceping.png" />
                <p>测评</p>
              </van-grid-item>
              <van-grid-item to="/about">
                <van-image src="/img/huati.png" />
                <p>话题</p>
              </van-grid-item>
              <van-grid-item to="/about">
                <van-image src="/img/daren.png" />
                <p>达人</p>
              </van-grid-item>
            </van-grid>
            <!-- 狗哥说事 -->
            <van-grid direction="horizontal" :column-num="1" class="report">
              <van-grid-item
                icon="https://api.boqiicdn.com/600cc8094e2f8a6e74fa0466db3ad901.png"
                text="我家猫，在我眼皮子底下消失了……"
                to="/about"
              />
              <img src="/img/boqii_head_line_more.png" class="report_img" />
            </van-grid>
            <!-- 狗哥说事结束 -->
            <!-- 社区评论 -->
            <com-post></com-post>
          </mt-tab-container-item>
          <mt-tab-container-item id="gz">
            <div class="leave_top">
              <div>关注社区信息</div>
              <div>关注社区信息</div>
              <div>关注社区信息</div>
              <div>关注社区信息</div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="zx">
            <div class="leave_top">
              <div>最新社区信息</div>
              <div>最新社区信息</div>
              <div>最新社区信息</div>
              <div>最新社区信息</div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="sp">
            <div class="leave_top">
              <div>视频社区信息</div>
              <div>视频社区信息</div>
              <div>视频社区信息</div>
              <div>视频社区信息</div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="bd">
            <div class="leave_top">
              <div>本地社区信息</div>
              <div>本地社区信息</div>
              <div>本地社区信息</div>
              <div>本地社区信息</div>
            </div>
          </mt-tab-container-item>
        </mt-tab-container>
      </mt-tab-container-item>
      <mt-tab-container-item id="sc">
        <div>商城組件</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="gwc">
        <div>购物车組件</div>
      </mt-tab-container-item>
      <mt-tab-container-item id="me">
        <div>我的組件</div>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部导航 -->
    <mt-tabbar v-model="selectedTab" fixed>
      <mt-tab-item id="sq">
        <img
          class="tabimg"
          src="/img/tab_home_sel.png"
          v-if="selectedTab == 'sq'"
        />
        <img class="tabimg" src="/img/tab_home_nor.png" v-else />
      </mt-tab-item>
      <mt-tab-item id="sc">
        <img
          class="tabimg"
          src="/img/tab_shop_sel.png"
          v-if="selectedTab == 'sc'"
        />
        <img class="tabimg" src="/img/tab_shop_nor.png" v-else />
      </mt-tab-item>
      <mt-tab-item> </mt-tab-item>
      <div class="publish">
        <router-link to="/about" class="puba">
          <img class="tabimg1" src="/img/tab_publish.png" />
        </router-link>
      </div>
      <mt-tab-item id="gwc">
        <img
          class="tabimg2"
          src="/img/tab_cart_sel.png"
          v-if="selectedTab == 'gwc'"
        />
        <img class="tabimg2" src="/img/tab_cart_nor.png" v-else />
      </mt-tab-item>
      <mt-tab-item id="me">
        <img
          class="tabimg"
          src="/img/tab_profile_sel.png"
          v-if="selectedTab == 'me'"
        />
        <img class="tabimg" src="/img/tab_profile_nor.png" v-else />
      </mt-tab-item>
    </mt-tabbar>
    
  </div>
</template>

<script>
import Swiper from "swiper";
import ComPost from '../components/ComPost.vue';

export default {
  components: { ComPost },
  data() {
    return {
      value: "",
      active: "tj",
      selectedTab: "sq",
      communityTab: [
        { content: "推荐", tabId: "tj" },
        { content: "关注", tabId: "gz" },
        { content: "最新", tabId: "zx" },
        { content: "视频", tabId: "sp" },
        { content: "本地", tabId: "bd" },
        { content: "本地", tabId: "bd" },
        { content: "本地", tabId: "bd" },
        { content: "本地", tabId: "bd" },
        { content: "本地", tabId: "bd" },
      ],
      images: [
        "/img/5a4eee74a51168f67377f366baadae71.jpg",
        "/img/6f4cd60010f6d57d8b663eb7547b11a3.jpg",
        "/img/c5deb37c6307e92eee34cafff14233dc.jpg",
        "/img/fd3c4c06f0d1c1b7021445a53e3bf57e.jpg",
      ],
      clickK: 0,
    };
  },
  methods: {
    changeClick(k, id) {
      this.clickK = k;
      this.active = id;
    },
  },

};
</script>

<style >
.community .top_navigation {
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 999;
}
/* 顶部文字导航栏 */
.community .recommend p.active {
  color: #000;
  text-align: center;
  font-size: 0.5rem;
  transition: font-size 0.15s linear;
  font-weight: 400;
}
.community .recommend::-webkit-scrollbar {
  display: none;
}
.community .recommend {
  width: 90%;
  height: 1rem;
  padding-left: 0.345rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
}
.community .recommend p {
  width: 1.3rem;
  font-size: 0.4rem;
  text-align: center;
  position: relative;
}
.community .recommend p.active::after {
  content: " ";
  width: 0.3rem;
  height: 0.02rem;
  border-radius: 0.01rem;
  background-color: #444;
  position: absolute;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 100;
}
.community .topn_a {
  position: absolute;
  width: 10%;
  height: 36px;
  top: 0.5rem;
  left: 90%;
  margin-top: -18px;
  text-align: center;
  background-color: white;
}
.community .topn_a .topn_img {
  width: 36px;
  height: 36px;
  vertical-align: top;
}
/* 顶部导航栏结束 */
/* 顶部搜索框 */
.community .p_search {
  position: relative;
}
.community .p_search .van-cell {
  line-height: 0.64rem;
}
.community .search {
  width: 90%;
}
.community .message_a {
  position: absolute;
  margin-top: -12px;
  top: 50%;
  right: 4%;
  width: 24px;
  height: 24px;
}
.community .message_img {
  position: absolute;
  width: 24px;
  height: 24px;
}
/* 顶部搜索框结束 */
/* 推荐页正文 */
.community .leave_top {
  margin-top: 2.44rem;
}
/* 轮播图 */
.community .swipe_img {
  width: 100%;
  height: 3rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.community .leave_top .van-swipe__track {
  height: 3.1rem;
}
.community .van-swipe__indicators {
  left: 90%;
}
.community .van-swipe__indicators .van-swipe__indicator {
  background-color: #fff;
}
.community
  .van-swipe__indicators
  .van-swipe__indicator.van-swipe__indicator--active {
  width: 12px;
  margin-right: 4px;
  margin-left: -2px;
  border-radius: 3px;
  transition: width 0.15s linear;
}
/* 轮播图结束 */

.community .mint-tab-container {
  font-size: 3rem;
}
.community .tab_entry .van-grid-item__content {
  padding: 16px 8px;
}
.community .van-grid-item__content p {
  line-height: 1;
  font-size: 0.14em;
  margin: 8px 0 0 0;
}
/* 首页图标结束 */
/* 狗哥说事 */
.community .index_line {
  width: 95%;
  height: 0;
  border-bottom: 0.01rem solid #efecec;
  margin: 0 auto;
}
.community .report.van-grid {
  font-size: 3rem;
  height: 1.44rem;
}
.community .report .van-grid-item__content {
  padding: 0 0.13em;
  line-height: 0.18em;
  -webkit-box-pack: flex-start;
  -webkit-justify-content: flex-start;
  justify-content: flex-start;
}
.community .report .van-grid-item__icon {
  height: 0.48rem;
}
.community .report .van-icon__image {
  width: 1.92rem;
  height: 0.48rem;
  vertical-align: top;
}
.community .report .van-grid-item__text {
  font-size: 0.14em;
}
.community .report .report_img {
  position: absolute;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  left: 93%;
  top: 50%;
}
/* 狗哥说事结束 */
/* 社区评论 */




/* 底部导航栏 */
.community .tabimg {
  width: 0.693rem;
  height: 1.2rem;
}
.community .tabimg1 {
  width: 1.85rem;
  height: 2rem;
  vertical-align: top;
}
.community .tabimg2 {
  width: 0.96rem;
  height: 1.2rem;
}
.community .mint-tabbar > .mint-tab-item.is-selected {
  background-color: transparent;
  color: #000;
}
.community .mint-tabbar > .mint-tab-item {
  width: 2rem;
  height: 1.3rem;
  background-color: transparent;
}
.community .mint-tabbar .mint-tab-item .mint-tab-item-label {
  width: 100%;
  height: 100%;
}
.community .mint-tabbar {
  background-color: #fff;
  background-image: linear-gradient(180deg, #eee, #eee 50%, transparent 0);
}
.community .publish {
  width: 20%;
  height: 100%;
  margin-left: -10%;
  position: absolute;
  left: 50%;
  z-index: 2;
}
.community .puba {
  margin-left: -50%;
  position: absolute;
  top: -35%;
  left: 50%;
}
</style>

