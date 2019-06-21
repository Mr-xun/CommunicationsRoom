<template>
  <div id="About">
    <!-- <div id="header-container">
      <div class="header-logo">
        <img src="../assets/img/background (5).png" alt>
      </div>
      <div class="about-me">
        <h2>多贝</h2>
      </div>
    </div>-->
    <div id="banner-container">
      <div class="index-top-banner">
        <div class="banner-row">
          <div class="layer right-image banner-image">
            <img src="../assets/img/about-topcontent-bg.jpg" alt>
            <img class="breath-img" src="../assets/img/about-topcontent-light.png" alt>
          </div>
          <div class="banner-title">
            <h2>618活动大促销</h2>
            <p>618多款产品限时抢购，最高立减 0 元</p>
            <h5>
              立即抢购
              <span class="right-go">></span>
            </h5>
          </div>
          <div class="banner-info">
            <ul class="banner-info-wrap">
              <li class="banner-info-box">
                <h2 class="banner-info-box-title">免费套餐</h2>
                <div class="banner-info-box-msg">产品免费使用，为您提供0门槛实践机会</div>
              </li>
              <li class="banner-info-box">
                <h2 class="banner-info-box-title">实践与教程</h2>
                <div class="banner-info-box-msg">集成实践案例与教程，为您提供端到端的操作指导</div>
              </li>
              <li class="banner-info-box">
                <h2 class="banner-info-box-title">售前咨询</h2>
                <div class="banner-info-box-msg">为您提供1对1贴心服务，助您上手</div>
              </li>
              <li class="banner-info-box">
                <h2 class="banner-info-box-title">套餐包</h2>
                <div class="banner-info-box-msg">只要10800元</div>
              </li>
              <li class="banner-info-box">
                <h2 class="banner-info-box-title">商用版本</h2>
                <div class="banner-info-box-msg">满足高能场景及容量弹性变配的业务需求</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="center-log">
      <div class="center-img-box">
        <img src="../assets/img/beike.png" alt>
      </div>
      <h3>高效分发、极速网络、高清感官</h3>
      <p>应用于 直播、IM、教育、远程天气、企业会议、社交等场景。详细咨询技术平台部</p>
    </div>
    <div id="content-container-one" @click="goPage('/login')">
      <ul class="slide-wrap">
        <li class="slide-item">
          <img class="img-bg" src="../assets/img/about-video.jpg" alt>
          <div class="mask">
            <div class="bg"></div>
            <div class="content">
              <div class="item-img-panel">
                <img class="item-img" src="../assets/img/about-video-icon.png" alt>
                <img class="item-img-hover" src="../assets/img/about-video-icon-hover.png" alt>
              </div>
              <p class="line-panel">
                <i class="item-line"></i>
              </p>
              <h3 class="item-title">小视频</h3>
              <p class="item-desc">高清晰、低延迟、低成本、全终端覆盖</p>
            </div>
          </div>
        </li>

        <li class="slide-item" @click="goPage('/login')">
          <img class="img-bg" src="../assets/img/about-socail.jpg" alt>
          <div class="mask">
            <div class="bg"></div>
            <div class="content">
              <div class="item-img-panel">
                <img class="item-img" src="../assets/img/about-socail-icon.png" alt>
                <img class="item-img-hover" src="../assets/img/about-socail-icon-hover.png" alt>
              </div>
              <p class="line-panel">
                <i class="item-line"></i>
              </p>
              <h3 class="item-title">IM应用社交</h3>
              <p class="item-desc">快速实现单群聊、私信、红包、图片、语音和小视频等通讯能力，有效提升用户粘性和活跃</p>
            </div>
          </div>
        </li>
        <li class="slide-item" @click="goPage('/login')">
          <img class="img-bg" src="../assets/img/about-video.jpg" alt>
          <div class="mask">
            <div class="bg"></div>
            <div class="content">
              <div class="item-img-panel">
                <img class="item-img" src="../assets/img/about-video-icon.png" alt>
                <img class="item-img-hover" src="../assets/img/about-video-icon-hover.png" alt>
              </div>
              <p class="line-panel">
                <i class="item-line"></i>
              </p>
              <h3 class="item-title" >直播互动</h3>
              <p class="item-desc">提供的聊天室解决方案，满足各类直播互动场景需求，轻松打造良好的直播聊天互动体验，完美融入你的直播业务</p>
            </div>
          </div>
        </li>
        <li class="slide-item" @click="goPage('/login')">
          <img class="img-bg" src="../assets/img/about-company.jpg" alt>
          <div class="mask">
            <div class="bg"></div>
            <div class="content">
              <div class="item-img-panel">
                <img class="item-img" src="../assets/img/about-company-icon.png" alt>
                <img class="item-img-hover" src="../assets/img/about-company-icon-hover.png" alt>
              </div>
              <p class="line-panel">
                <i class="item-line"></i>
              </p>
              <h3 class="item-title">企业沟通</h3>
              <p class="item-desc">支持一对一、多对多音视频通话功能及服务端录像功能。集成简便，可快速获得流畅稳定、多端互通的网络通话体验</p>
            </div>
          </div>
        </li>
        <li class="slide-item" @click="goPage('/login')">
          <img class="img-bg" src="../assets/img/about-business.jpg" alt>
          <div class="mask">
            <div class="bg"></div>
            <div class="content">
              <div class="item-img-panel">
                <img class="item-img" src="../assets/img/about-business-icon.png" alt>
                <img class="item-img-hover" src="../assets/img/about-business-icon-hover.png" alt>
              </div>
              <p class="line-panel">
                <i class="item-line"></i>
              </p>
              <h3 class="item-title">商务沟通</h3>
              <p class="item-desc">提供企业通讯解决方案、商业沟通（客服）、公众服务平台等创新型服务</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div id="content-container">
      <div class="inner-box">
        <div class="image-box">
          <img src="../assets/img/可控制.png" alt>
        </div>
        <div class="lower-content">
          <h4 @click="goPage('/login')">直播互动</h4>
          <div class="describe">可实现超低延时互动直播，实时连麦</div>
        </div>
      </div>

      <div class="inner-box">
        <div class="image-box">
          <img src="../assets/img/高性能计算.png" alt>
        </div>
        <div class="lower-content">
          <h4>IM应用社交</h4>
          <div class="describe">6 – 8人频道，玩家自由发言，可创建子频道私聊</div>
        </div>
      </div>

      <div class="inner-box">
        <div class="image-box">
          <img src="../assets/img/低成本.png" alt>
        </div>
        <div class="lower-content">
          <h4>企业沟通</h4>
          <div class="describe">6 – 8人频道，玩家自由发言，可创建子频道私聊</div>
        </div>
      </div>

      <div class="inner-box">
        <div class="image-box">
          <img src="../assets/img/数据洞察.png" alt>
        </div>
        <div class="lower-content">
          <h4>商务沟通</h4>
          <div class="describe">6 – 8人频道，玩家自由发言，可创建子频道私聊</div>
        </div>
      </div>
    </div>-->
    <div id="footer-copy">
      <p class="copy">Copyright © 2019年6月 北京墨迹风云科技股份有限公司多贝项目组</p>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';
import { Browser } from "@/utils/utils";
import RtcClient from "@/utils/rtcClient";
import SignalClient from "@/utils/signalClient";
import { AGORA_APP_ID } from "../../static/agora.config";
import { DualType } from "@/utils/constants";
export default {
  methods: {
    goPage(route) {
      this.$router.push({ path: route });
    }
  },
  mounted() {
    const appid = AGORA_APP_ID;
    let account = Browser.getParameterByName("account");
    let channel = Browser.getParameterByName("channel");
    let role = Browser.getParameterByName("role");
    let rtc = new RtcClient(appid);
    let signal = new SignalClient(appid);

    // find spare container to place video into
    const findSpareContainer = () => {
      let $containers = $(`.video-container`);
      for (let i = 0; i < $containers.length; i++) {
        let $container = $($containers.get(i));
        let id = $container.attr("id");
        if (!id) {
          return $container;
        }
      }
      throw new Error(`no spare container left`);
    };

    // sync streams object with dom
    const syncStreamDisplay = streams => {
      //check removed streams
      let $containers = $(`.video-container`);
      for (let i = 0; i < $containers.length; i++) {
        let $container = $($containers.get(i));
        let id = $container.attr("id");
        if (!id) {
          continue;
        }
        let uid = id.split("-")[2];
        if (streams.filter(i => `${i.uid}` === `${uid}`).length === 0) {
          $container.removeAttr("id");
          $container.html("");
        }
      }

      //check newly added streams
      streams.forEach(stream => {
        let uid = stream.uid;
        let id = `agora-video-${uid}`;
        let $dom = $(`#${id}`);
        if ($dom.length === 0) {
          //not found
          let $container = findSpareContainer();
          $container.attr("id", id);
          let dualType = $container.attr("dual");
          if (dualType === "main") {
            //bigger screen uses high stream, which has higher resolution and bandwidth consumption
            rtc.setRemoteStreamType(stream, DualType.High);
          } else {
            //small screen uses low stream, which has lower resolution and bandwidth consumption
            rtc.setRemoteStreamType(stream, DualType.Low);
          }
          stream.stream.play(id);
        }
      });
    };

    // append a new chat message on screen
    const displayChatMessage = (account, msg) => {
      $(`.chat-list`).append(
        `<li class="list-group-item">${account} - ${msg}</li>`
      );
    };

    //bind stream update event
    rtc.on("streamlist-update", streams => {
      syncStreamDisplay(streams);
    });

    //bind chat input
    let $chatInput = $(`#chat-input`);
    $chatInput.keypress(e => {
      if (e.which == 13) {
        let msg = e.currentTarget.value;
        $(e.currentTarget).val("");
        signal.broadcast(msg);
      }
    });
    //bind send btn click event
    $(`#send_btn`).click(() => {
      let msg = $chatInput.val();
      $chatInput.val("");
      signal.broadcast(msg);
    });

    //bind signal msg receive
    signal.on("channel-message", ({ account, msg }) => {
      displayChatMessage(account, msg);
    });

    //by default call btn is disabled
    Promise.all([
      rtc.init(channel, role === "broadcaster"),
      signal.init(account, channel, role)
    ]);
  }
};
</script>

<style lang="scss">
@import "../assets/css/main";
#About {
  height: 100%;
  // display: flex;
  flex-direction: column;
  background: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", \5b8b\4f53, sans-serif;
  
}
#header-container {
  height: 60px;
  padding: 10px 0;
  /* padding-top: 10px; */
  padding-left: 10px;
  position: relative;
  background: rgba(55, 61, 65, 0.9);
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
  .header-logo {
    height: 100%;
    width: 80px;
    img {
      height: 100%;
    }
  }
  .about-me {
    position: absolute;
    left: 0;
    right: 0;
    top: 10px;
    h2 {
      font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", \5b8b\4f53, sans-serif;
      position: relative;
      display: block;
      font-size: 40px;
      color: #fff;
      font-size: 40px;
      font-weight: 400;
      line-height: 40px;
    }
  }
}
#banner-container {
  height: 640px;
  overflow: hidden;
  position: relative;
  background: #373d41;
  .index-top-banner {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 640px;
    .banner-row {
      position: relative;
      min-width: 1200px;
      // max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      height: 640px;
      background-position: 50%;
      background-size: 1920px 640px;
      zoom: 1;
      .layer {
        text-align: center;
        position: absolute;
      }
      .right-image {
        top: 0;
        width: 100%;
        .breath-img {
          opacity: 0.2;
          animation: breath 3s infinite ease-in-out;
        }
        @keyframes breath {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      }
      img {
        width: 800px;
        position: absolute;
        right: -60px;
        width: 1920px;
        top: 0;
      }
      .banner-info {
        position: absolute;
        bottom: 0;
        width: 100%;
        .banner-info-wrap {
          width: 100%;
          height: 136px;
          background: #2d3035;
          .banner-info-box {
            width: 20%;
            height: 100%;
            height: 136px;
            display: block;
            padding: 30px 24px 26px;
            border-left: 1px solid #60606356;
            text-align: left;
            float: left;
            .banner-info-box-title {
              color: #fff;
              font-weight: bolder;
              height: 18px;
              font-size: 16px;
              margin-bottom: 8px;
            }
            .banner-info-box-msg {
              color: #fff;
              line-height: 24px;
              font-size: 14px;
              opacity: 0.6;
            }
          }
        }
      }
      .banner-title {
        position: absolute;
        top: 20%;
        left: 20px;
        h2 {
          text-align: left;
          color: #fff;
          font-size: 40px;
          font-weight: 0;
        }
        p {
          font-size: 20px;
          margin-top: 15px;
          color: #fff;
          font-weight: 100;
          text-align: left;
          line-height: 36px;
        }
        h5 {
          line-height: 40px;
          font-weight: 100;
          font-size: 20px;
          border: none;
          text-align: left;
          width: 125px;
          background: transparent;
      cursor: pointer;

          border-bottom: 3px solid #00c1de;
          color: #fff;
          .right-go {
            font-weight: 600;
          }
        }
      }
    }
  }
}
#center-log {
  .center-img-box {
    height: 100px;
    img {
      height: 100%;
    }
  }
  h3 {
    text-align: center;
    font-size: 24px;
    line-height: 36px;
    color: #373d41;
    font-weight: 400;
    font-family: "PingFangSC", "helvetica neue", "hiragino sans gb", "arial",
      "microsoft yahei ui", "microsoft yahei", "simsun", "sans-serif" !important;
  }
  p {
    text-align: center;
    font-size: 16px;
    margin: 8px 0 42px;
    color: #373d41;
    font-family: "PingFangSC", "helvetica neue", "hiragino sans gb", "arial",
      "microsoft yahei ui", "microsoft yahei", "simsun", "sans-serif" !important;
  }
}
#content-container-one {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  .slide-wrap {
    display: flex;
    .slide-item {
      position: relative;
      float: left;
      color: #000;
      font-size: 0;
      text-align: center;
      width: 25%;
      height: 3rem;
      min-width: 236px;
      max-width: 288px;
      .img-bg {
        width: 100%;
        height: 100%;
      }
      .mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        .bg {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background: #161a1d;
          opacity: 0.6;
          filter: alpha(opacity=60);
          -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(60));
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .content {
          position: absolute;
          left: 0;
          right: 0;
          top: 100px;
          bottom: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          .item-img-panel {
            position: relative;
            width: 25%;
            height: 68px;
            display: inline-block;
            .item-img,
            .item-img-hover {
              position: absolute;
              left: 0;
              right: 0;
              top: 0;
              width: 100%;
              display: inline-block;
              opacity: 1;
              filter: alpha(opacity=100);
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            .item-img-hover {
              opacity: 0;
              filter: alpha(opacity=0);
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
          }
          .line-panel {
            padding: 0;
            margin: 0;
            font-size: 0;
            line-height: 0;
            margin-top: 20px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            .item-line {
              width: 20px;
              height: 2px;
              background: #fff;
              display: inline-block;
              opacity: 1;
              filter: alpha(opacity=100);
              -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(100));
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
          }
          .item-title {
            color: #fff;
            font-size: 22px;
            line-height: 24px;
            margin: 0;
            padding: 0;
            margin-top: 24px;
            font-weight: 700;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .item-desc {
            font-size: 14px;
            color: #fff;
            text-align: center;
            margin-top: 30px;
            padding: 0 23px;
            line-height: 24px;
            height: 72px;
            opacity: 0;
            filter: alpha(opacity=0);
            -ms-filter: progid:DXImageTransform.Microsoft.Alpha(opacity=(0));
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
        }
      }
    }
    .slide-item:nth-of-type(3){
      cursor: pointer;

    }
    .slide-item:hover .bg {
      background: #00c2de;
      opacity: 0.9;
    }
    .slide-item:hover .content {
      top: 13%;
    }
    .slide-item:hover .content .item-img-panel .item-img {
      opacity: 0;
    }
    .slide-item:hover .content .item-img-panel .item-img-hover {
      opacity: 1;
    }
    .slide-item:hover .content .item-desc {
      opacity: 1;
      margin-top: 22px;
    }
  }
}
#content-container {
  height: calc(100% - 140px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  .inner-box {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    background: #fff;
    margin: 0 15px;
    min-width: 2rem;
    height: 4rem;
    padding: 15px;

    .image-box {
      img {
        width: 160px;
      }
    }
    .lower-content {
      padding: 35px 0px 0;
      h4 {
        position: relative;
        display: block;
        font-size: 24px;
        line-height: 1.2em;
        color: #393d72;
        font-weight: 400;
        margin-bottom: 25px;
        cursor: pointer;
      }
      .describe {
        position: relative;
        margin-bottom: 27px;
        font-size: 16px;
        line-height: 2em;
        font-weight: 400;
        color: #858687;
        margin: 0;
        cursor: pointer;
      }
    }
  }
}
#footer-copy {
  height: 60px;
  line-height: 60px;
  color: #000;
  p{
    font-size: 12px;
  }
}
.about {
  height: 100%;
  widows: 100%;
  
}
#media-container {
  position: relative;
  padding: 40px 0 0 0;
  max-width: 640px;
  margin: 0 auto;
  height: 50%;
}

#chat-container {
  position: relative;
  padding: 40px 0 0 0;
  max-width: 640px;
  margin: 0 auto;
  height: 50%;
  background: white;
}

.video-container {
  overflow: hidden;
}

.input-area {
  position: absolute;
  padding: 5px 10px;
  bottom: 0;
}
</style>
