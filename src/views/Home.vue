<template>
  <div id="room">
    <div id="left-media-container" ref="left-media-container" :style="{width: widthData}">
      <div class="main-video">
        <div class="col video-container" dual="main"></div>
      </div>
      <div class="minor-video">
        <div class="col video-container" dual="sub"></div>
        <div class="col video-container" dual="sub"></div>
        <div class="col video-container" dual="sub"></div>
        <div class="col video-container" dual="sub"></div>
      </div>
    </div>
    <transition
      name="chat-control"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      :duration="1000"
    >
      <div class="chat-control-show" @click="showChartView" v-if="!chartShow">
        <span><<</span>
      </div>
    </transition>
    <transition
      name="fade"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutRight"
      :duration="1000"
    >
      <div id="right-chat-container" v-show="chartShow">
        <div class="chat-control-fide" @click="showChartView">
          <span>>></span>
        </div>
        <ul class="list-group chat-list"></ul>
        <div class="input-group input-area">
          <Input v-model="sendValue" placeholder="请输入..." @keyup.enter.native="sendMsg"></Input>
          <div class="input-group-append">
            <Button type="primary" id="send_btn" @click="sendMsg" class="btn btn-primary">Send</Button>
          </div>
        </div>
      </div>
    </transition>
    <!-- <div id="media-container" class="d-flex justify-content-center">
      <div class="container-fluid" style="height: 100%">
        <div class="row main-video" style="height: 75%">
          <div class="col video-container" dual="main"></div>
        </div>
        <div class="row minor-video" style="height: 25%">
          <div class="col video-container" dual="sub"></div>
          <div class="col video-container" dual="sub"></div>
          <div class="col video-container" dual="sub"></div>
          <div class="col video-container" dual="sub"></div>
        </div>
      </div>
    </div>
    <div id="chat-container" class="d-flex justify-content-center">
      <ul class="list-group chat-list"></ul>
      <div class="input-group input-area">
        <Input v-model="sendValue" placeholder="请输入..." @keyup.enter.native="sendMsg"></Input>
        <div class="input-group-append">
          <Button type="primary" id="send_btn" @click="sendMsg" class="btn btn-primary">Send</Button>
        </div>
      </div>
    </div>-->
  </div>
</template>
<script>
// @ is an alias to /src
import $ from "jquery";
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
      chartShow: true
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
    showChartView() {
      this.chartShow = !this.chartShow;
      this.widthData = this.chartShow ? "75%" : "100%";
      // this.$refs.
    }
  },
  mounted() {
    const appid = AGORA_APP_ID;
    let account = Browser.getParameterByName("account");
    let channel = Browser.getParameterByName("channel");
    let role = Browser.getParameterByName("role");
    this.rtc = new RtcClient(appid);
    this.signal = new SignalClient(appid);
    let rtc = new RtcClient(appid);
    let signal = new SignalClient(appid);
    const displayChatMessage = (account, msg) => {
      $(`.chat-list`).append(
        `<li class="list-group-item ${
          account === Browser.getParameterByName("account")
            ? "layim-chat-mine"
            : "layim-chat-li"
        }"><div class="layim-chat-user">${account}</div><div class="layim-chat-text">${msg}</div></li>`
      );
    };
    this.signal.on("channel-message", ({ account, msg }) => {
      displayChatMessage(account, msg);
    });
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
      console.log(streams,"5555555555555555555555")
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
    rtc.on("streamlist-update", streams => {
      syncStreamDisplay(streams);
    });
    Promise.all([
      rtc.init(channel, role === "broadcaster"),
      this.signal.init(account, channel, role)
    ]);
  }
};
</script>
<style lang="scss">
#room {
  width: 100%;
  height: 100%;
  background: url("../assets/img/background (1).png"); 
  min-width: 1280px;
  display: flex;
  position: relative;
  .chat-control-fide,
  .chat-control-show {
    position: absolute;
    top: 10px;
    width: 30px;
    line-height: 30px;
    height: 30px;
    background: #ccc;
    color: #000;
    font-size: 20px;
    z-index: 99999;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 2px 2px blue;
  }
  .chat-control-fide {
    left: 0;
  }
  .chat-control-show {
    right: 0px;
  }
  #left-media-container {
    display: flex;
    flex: 1;
    // background: red;
    .minor-video {
      width: 20%;
      height: 100%;
      background: blue;
      .col {
        flex-basis: 0;
        -ms-flex-positive: 1;
        -webkit-box-flex: 1;
        flex-grow: 1;
        /* max-width: 100%; */
      }
      .video-container {
        width: 100%;
        height: 25%;
      }
    }
    .main-video {
      width: 80%;
      height: 100%;
      .video-container {
        width: 100%;
        height: 100%;
      }
    }
  }
  #right-chat-container {
    width: 25%;
    height: 100%;
    background: yellow;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    .list-group {
      flex: 1;
      background: #fff;
      overflow-y: auto;
      .list-group-item {
        position: relative;
        font-size: 0;
        margin-bottom: 10px;
        padding-left: 60px;
        min-height: 10px;
        text-align: left;
      }
      .layim-chat-text {
        position: relative;
        line-height: 25px;
        height: 25px;
        margin-top: 10px;
        padding: 2px 15px;
        background-color: #e2e2e2;
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
        width: 40px;
        height: 40px;
        text-align: center;
        border-radius: 50%;
        background: #ddd;
        line-height: 40px;
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: top;
        font-size: 14px;
      }
      .layim-chat-mine {
        text-align: right;
        padding-left: 0;
        padding-right: 60px;
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
      padding: 5px 10px;
      bottom: 0;
      width: 100%;
      height: 42px;
      display: flex;
    }
  }
  #media-container {
    height: 50%;
    position: relative;
    padding: 40px 0 0;
    max-width: 640px;
    margin: 0 auto;
    .container-fluid {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
      .video-container {
        width: 100%;
        height: 100%;
        background: #ccc;
      }
      .main-video {
        width: 100%;
        height: 100%;
      }
      .minor-video {
        display: flex;
        .video-container {
          flex: 0.25;
          width: 100%;
          height: 100%;
          background: #ccc;
        }
      }
    }
  }
  #chat-container {
    height: 50%;
    position: relative;
    padding: 40px 0 0;
    max-width: 640px;
    margin: 0 auto;
    background: #fff;
    .input-group {
      position: absolute;
      padding: 5px 10px;
      bottom: 0;
      width: 100%;
      display: flex;
    }
  }
}
</style>
