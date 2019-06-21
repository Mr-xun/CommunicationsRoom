<template>
  <div id="metting">
    <div id="header-container">
      <div class="header-logo">
        <img src="../assets/img/beike.png" alt>
      </div>
      <div class="current-home">
        <h2>
          <Icon type="md-microphone" class="current-anchor-icon"/>
          <span class="span-anhor">{{exitsVideo?'多贝':'当前暂无主播'}}</span>
        </h2>
        <h2>
          <Icon type="ios-home" class="current-home-icon"/>
          <span class="span-home">{{routerInfo.channel || "---"}}</span>
        </h2>
      </div>
      <div class="operate" @click="exitVideo">
        <img src="../assets/img/btn_endcall.png" alt>
      </div>
    </div>
    <!-- <div id="monor-container">
      <div class="video-wrap">
        <div class="col video-container video-box" dual="sub"></div>
        <div class="col video-container video-box" dual="sub"></div>
        <div class="col video-container video-box" dual="sub"></div>
        <div class="col video-container video-box" dual="sub"></div>
      </div>
    </div>-->
    <div id="meet-container">
      <div class="main-wrap">
        <div class="main-video">
          <div class="main-video-container video-box" dual="main">
            <p v-if="!exitsVideo">主播正在赶来的路上，请耐心等待~</p>
          </div>
        </div>
      </div>
      <div class="chat-wrap">
        <ul class="list-group chat-list" id="chatContainer"></ul>
        <div class="input-group">
          <Input v-model="sendValue" placeholder="请输入..." @keyup.enter.native="sendMsg"></Input>
          <div class="input-group-append">
            <Button type="success" id="send_btn" @click="sendMsg" class="btn btn-primary">发送</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import $ from "jquery";
import { userinfo } from "@/utils/users";
import { Browser } from "@/utils/utils";
import RtcClient from "@/utils/rtcClient";
import SignalClient from "@/utils/signalClient";
import { AGORA_APP_ID } from "../../static/agora.config";
import { DualType } from "@/utils/constants";
export default {
  name: "home",
  data() {
    return {
      widthData: "75%",
      sendValue: "",
      signal: null,
      rtc: null,
      chartShow: true,
      routerInfo: {},
      duobeiImg: require("../assets/img/background (5).png"),
      beikeImg: require("../assets/img/beike.png"),
      exitsVideo: false
    };
  },
  components: {
    // HelloWorld
  },
  methods: {
    sendMsg() {
      if (this.sendValue) {
        let msg = JSON.parse(JSON.stringify(this.sendValue));
        this.sendValue = "";
        this.signal.broadcast(msg);
      } else {
      }
    },
    exitVideo() {
      this.rtc.levelChannel();
      this.$router.push({ path: "/login" });
    },
    showChartView() {
      this.chartShow = !this.chartShow;
      this.widthData = this.chartShow ? "75%" : "100%";
      // this.$refs.
    },
    dateFtt(fmt, date) {
      //author: meizz
      var o = {
        "M+": date.getMonth() + 1, //月份
        "d+": date.getDate(), //日
        "h+": date.getHours(), //小时
        "m+": date.getMinutes(), //分
        "s+": date.getSeconds(), //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
      };
      if (/(y+)/.test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          (date.getFullYear() + "").substr(4 - RegExp.$1.length)
        );
      for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
          fmt = fmt.replace(
            RegExp.$1,
            RegExp.$1.length == 1
              ? o[k]
              : ("00" + o[k]).substr(("" + o[k]).length)
          );
      return fmt;
    }
  },
  watch: {
    sendMsg() {
      this.$nextTick(() => {
        var container = this.$el.querySelector("#chatContainer");
        container.scrollTop = container.scrollHeight;
      });
    }
  },
  filters: {
    dateFormat(value) {
      if (value) {
        this.dateFtt("yyyy-MM-dd hh:mm:ss", value);
      }
    }
  },
  mounted() {
    const appid = AGORA_APP_ID;
    this.routerInfo = this.$route.query;
    let { account, channel, role } = this.routerInfo;
    this.rtc = new RtcClient(appid);
    this.signal = new SignalClient(appid);
    const displayChatMessage = (account, msg) => {
      let realName = "";
      let imgSrc = "";
      if (account.toUpperCase() !== "DUOBEI" && account !== "多贝") {
        realName = userinfo[account].realName;
        imgSrc = userinfo[account].dingIcon
          ? userinfo[account].dingIcon
          : this.beikeImg;
      } else {
        realName = "多贝";
        imgSrc = this.duobeiImg;
      }

      $(`.chat-list`).append(
        `<li class="list-group-item ${
          account === Browser.getParameterByName("account")
            ? "layim-chat-mine"
            : "layim-chat-li"
        }"><div class="layim-chat-user"><img src="${imgSrc}" onerror="../assets/img/beike.png"></img></div><div class="text-content"><div class="layim-chat-info"><h5>${realName}<em>${this.dateFtt(
          "hh:mm:ss",
          new Date()
        )}</em></h5></div><div class="layim-chat-text">${msg}</div></div></li>`
      );
      var container = this.$el.querySelector("#chatContainer");
      container.scrollTop = container.scrollHeight;
    };
    this.signal.on("channel-message", ({ account, msg }) => {
      displayChatMessage(account, msg);
    });
    // find spare container to place video into
    const findSpareContainer = () => {
      let $containers = null;
      $containers = $(`.main-video-container`);
      if ($containers && $containers.length) {
        for (let i = 0; i < $containers.length; i++) {
          let $container = $($containers.get(i));
          let id = $container.attr("id");
          if (!id) {
            return $container;
          }
        }
      }

      throw new Error(`no spare container left`);
    };
    // sync streams object with dom
    const syncStreamDisplay = streams => {
      //check removed streams
      let $containers = $(`.main-video-container`);
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
          if ($container) {
            $container.attr("id", id);
            let dualType = $container.attr("dual");
            if (dualType === "main") {
              //bigger screen uses high stream, which has higher resolution and bandwidth consumption
              this.rtc.setRemoteStreamType(stream, DualType.High);
            } else {
              //small screen uses low stream, which has lower resolution and bandwidth consumption
              this.rtc.setRemoteStreamType(stream, DualType.Low);
            }
            stream.stream.play(id);
          }
        }
      });
    };
    this.rtc.on("streamlist-update", streams => {
      if (streams && streams.length) this.exitsVideo = true;
      else this.exitsVideo = false;
      syncStreamDisplay(streams);
    });
    Promise.all([
      this.rtc.init(channel, role === "主播"),
      this.signal.init(account, channel, role)
    ]);
  }
};
</script>
<style lang="scss" >
//滚动条的宽度

#metting {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 550px;
  background-color: rgba(0, 158, 235, 0.35);
  background: url("../assets/img/background (1).png");
  background: #0f1014;
  .ivu-input,
  .ivu-btn {
    border-radius: 0 !important;
  }
  #header-container {
    height: 60px;
    padding: 10px 0;
    /* padding-top: 10px; */
    padding-left: 10px;
    position: relative;
    // background: rgba(55, 61, 65, 0.9);
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.15);
    display: flex;
    justify-content: space-between;
    .header-logo {
      height: 100%;
      width: 80px;
      img {
        height: 100%;
      }
    }
    .current-anchor,
    .current-home {
      // position: absolute;
      // left: 0;
      // right: 0;
      // top: 10px;
      display: flex;
      h2 {
        font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", \5b8b\4f53, sans-serif;
        position: relative;
        display: block;
        font-size: 40px;
        color: #fff;
        font-size: 20px;
        font-weight: 400;
        line-height: 40px;
        margin: 0 30px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span {
          margin-left: 10px;
          color: #74f2f9;
        }
        .span-anhor,.current-anchor-icon{
          color: #ff6000;
        }
        .span-home,.current-home-icon{
          color: #74f2f9;

        }
      }
    }
    .operate {
      height: 100%;
      width: 80px;
      opacity: 0.9;
      z-index: 10;
      cursor: pointer;
      img {
        height: 100%;
      }
    }
    .operate:hover {
      opacity: 1;
    }
  }
  #monor-container {
    .video-wrap {
      display: flex;
      padding: 10px 10px;
      .video-container {
        width: 0.7rem;
        height: 0.7rem;
        background: #000;
        overflow: hidden;
        border-radius: 0.05rem;
        border: 1px solid #fff;
        margin-right: 10px;
      }
      .video-box > div {
        border-radius: 0.05rem;
        display: flex !important;
      }
    }
  }

  #meet-container {
    height: calc(100% - 90px);
    display: flex;
    margin-top: 15px;
    padding: 0 10px 10px;
    .main-wrap {
      width: calc(100% - 3rem);
      margin-right: 20px;
      border-radius: 0.05rem;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.3);
      .main-video,
      .main-video-container {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #3d4041;
        display: flex;
        justify-content: space-around;
        align-items: center;
        p {
          font-size: 20px;
          color: #fff;
        }
      }
    }
    .video-box > div {
      border-radius: 0.05rem;

      display: flex !important;
    }
    .chat-wrap {
      width: 3rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 0.05rem;
      overflow: hidden;
      position: relative;

      .list-group {
        overflow-y: auto;
        height: calc(100% - 32px);
        position: relative;
        padding: 0 6px 5px;

        z-index: 1;
        .list-group-item {
          position: relative;
          font-size: 0;
          padding-left: 50px;
          padding-top: 10px;
          min-height: 10px;
          text-align: left;
        }
        .layim-chat-info {
          color: #dcdee2;
          font-size: 12px;
          em {
            color: #c5c8ce;
            margin-left: 5px;
          }
        }
        .layim-chat-text {
          position: relative;
          line-height: 20px;
          min-height: 20px;
          padding: 2px 15px;
          background-color: #e2e2e2;
          max-width: 95%;
          border-radius: 3px;
          color: #333;
          word-break: break-all;
          display: inline-block;
          *display: inline;
          *zoom: 1;
          vertical-align: top;
          font-size: 14px;
        }
        .layim-chat-text:after {
          content: "";
          position: absolute;
          left: -10px;
          top: 13px;
          width: 0;
          height: 0;
          border-style: solid dashed dashed;
          border-color: #e2e2e2 transparent transparent;
          overflow: hidden;
          border-width: 10px;
        }
        .layim-chat-user {
          position: absolute;
          left: 3px;
          width: 35px;
          height: 35px;
          text-align: center;
          border-radius: 50%;
          line-height: 35px;
          display: inline-block;
          *display: inline;
          *zoom: 1;
          vertical-align: top;
          font-size: 14px;
          img {
            width: 100%;
            border-radius: 50%;
          }
        }
        .layim-chat-mine {
          text-align: right;
          padding-left: 0;
          padding-right: 50px;
          .layim-chat-user {
            left: auto;
            right: 3px;
          }
          .layim-chat-text {
            margin-left: 0;
            text-align: left;
            background-color: #5fb878;
            color: #fff;
          }

          .layim-chat-text:after {
            left: auto;
            right: -10px;
            border-top-color: #5fb878;
          }
        }
      }

      .input-group {
        height: 32px;
        display: flex;
      }
    }
    .chat-wrap::after {
      content: "";
      opacity: 0.6;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      height: calc(100% - 32px);
      background: url("../assets/img/chat-bg.jpg");
      background-size: 100% 100%;
    }
  }
}
</style>
