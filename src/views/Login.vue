<template>
  <div id="Login">
    <div class="login-container card">
      <!-- <div class="imgbox">
        <img src="@/assets/img/logoCB.png" alt>
      </div>-->
      <!-- <div class="login-title">
        <h3>Welcome to here</h3>
        <p>这是一个通讯室</p>
      </div>-->
      <div class="form-warp">
        <div class="header">
          <img src="../assets/img/beike.png" alt>
          <h2 class="header-title">直播互动</h2>
        </div>
        <div class="from-content">
          <template>
            <Form ref="formInline" :model="formParams" :rules="ruleInline" label-position="top">
              <Form-item prop="account" label="账号">
                <Input
                  type="text"
                  v-model="formParams.account"
                  placeholder="请输入账号（邮箱）"
                  @keyup.enter.native="handleSubmit('formInline')"
                >
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
              </Form-item>
              <Form-item prop="channel" label="频道">
                <Input
                  type="text"
                  v-model="formParams.channel"
                  placeholder="请输入频道"
                  disabled
                  @keyup.enter.native="handleSubmit('formInline')"
                >
                  <Icon type="ios-pricetags-outline" slot="prepend"></Icon>
                </Input>
              </Form-item>
              <Form-item label="身份">
                <RadioGroup v-model="formParams.role">
                  <Radio
                    label="主播"
                    :disabled="formParams.account.toUpperCase()!=='DUOBEI'&&formParams.account!=='多贝'"
                  ></Radio>
                  <Radio label="观众"></Radio>
                </RadioGroup>
                <Button type="warning" @click="handleSubmit('formInline')" style="float:right;'">登录</Button>
              </Form-item>
            </Form>
          </template>
        </div>
      </div>
      <div class="img-wrap">
        <div class="img-box">
          <img class="img-bule" src="../assets/img/about-video-icon-hover.png" alt>
          <img class="img-black" src="../assets/img/about-video-icon1.png" alt>
        </div>
      </div>
    </div>
    <div id="bg">
      <canvas
        id="canvas1"
        style="width:100%;height: 100%;position:absolute;top:0px;left:0px;z-index:1;"
      ></canvas>
      <canvas
        id="canvas2"
        style="width:100%;height: 100%;position:absolute;top:0px;left:0px;z-index:1;"
      ></canvas>
      <canvas
        id="canvas3"
        style="width:100%;height: 100%;position:absolute;top:0px;left:0px;z-index:1;"
      ></canvas>
    </div>
  </div>
</template>
<script>
import { userinfo } from "@/utils/users";
export default {
  data() {
    return {
      formParams: {
        account: "",
        channel: "RongJu",
        role: "观众"
      },
      ruleInline: {
        account: [{ required: true, message: "请填写账号", trigger: "blur" }],
        channel: [
          { required: true, message: "请输入频道", trigger: "blur" },
          {
            type: "string",
            message: "请输入频道",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    drawCanvas() {
      var background = document.getElementById("canvas1"),
        foreground1 = document.getElementById("canvas2"),
        foreground2 = document.getElementById("canvas3"),
        config = {
          circle: {
            amount: 18,
            layer: 3,
            color: [126, 72, 218],
            alpha: 0.3
          },
          line: {
            amount: 12,
            layer: 3,
            color: [255, 255, 255],
            alpha: 0.3
          },
          speed: 0.5,
          angle: 20
        };
      if (background.getContext) {
        var bctx = background.getContext("2d"),
          fctx1 = foreground1.getContext("2d"),
          fctx2 = foreground2.getContext("2d"),
          M = window.Math, // Cached Math
          degree = (config.angle / 360) * M.PI * 2,
          circles = [],
          lines = [],
          wWidth,
          wHeight,
          timer;

        requestAnimationFrame =
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          function(callback, element) {
            setTimeout(callback, 1000 / 60);
          };

        cancelAnimationFrame =
          window.cancelAnimationFrame ||
          window.mozCancelAnimationFrame ||
          window.webkitCancelAnimationFrame ||
          window.msCancelAnimationFrame ||
          window.oCancelAnimationFrame ||
          clearTimeout;

        var setCanvasHeight = function() {
          wWidth = window.innerWidth;
          (wHeight = window.innerHeight),
            // canvas.each(function() {
            (background.width = wWidth);
          background.height = wHeight;
          foreground1.width = wWidth;
          foreground1.height = wHeight;
          foreground2.width = wWidth;
          foreground2.height = wHeight;
          // });
        };

        var drawCircle = function(x, y, radius, color, alpha) {
          var gradient = fctx1.createRadialGradient(x, y, radius, x, y, 0);
          gradient.addColorStop(
            0,
            "rgba(" +
              color[0] +
              "," +
              color[1] +
              "," +
              color[2] +
              "," +
              alpha +
              ")"
          );
          gradient.addColorStop(
            1,
            "rgba(" +
              color[0] +
              "," +
              color[1] +
              "," +
              color[2] +
              "," +
              (alpha - 0.1) +
              ")"
          );

          fctx1.beginPath();
          fctx1.arc(x, y, radius, 0, M.PI * 2, true);
          fctx1.fillStyle = gradient;
          fctx1.fill();
        };

        var drawLine = function(x, y, width, color, alpha) {
          var endX = x + M.sin(degree) * width,
            endY = y - M.cos(degree) * width,
            gradient = fctx2.createLinearGradient(x, y, endX, endY);
          gradient.addColorStop(
            0,
            "rgba(" +
              color[0] +
              "," +
              color[1] +
              "," +
              color[2] +
              "," +
              alpha +
              ")"
          );
          gradient.addColorStop(
            1,
            "rgba(" +
              color[0] +
              "," +
              color[1] +
              "," +
              color[2] +
              "," +
              (alpha - 0.1) +
              ")"
          );

          fctx2.beginPath();
          fctx2.moveTo(x, y);
          fctx2.lineTo(endX, endY);
          fctx2.lineWidth = 3;
          fctx2.lineCap = "round";
          fctx2.strokeStyle = gradient;
          fctx2.stroke();
        };

        var drawBack = function() {
          bctx.clearRect(0, 0, wWidth, wHeight);

          var gradient = [];

          gradient[0] = bctx.createRadialGradient(
            wWidth * 0.3,
            wHeight * 0.1,
            0,
            wWidth * 0.3,
            wHeight * 0.1,
            wWidth * 0.9
          );
          gradient[0].addColorStop(0, "rgb(2, 16, 39)");
          gradient[0].addColorStop(1, "transparent");

          bctx.translate(wWidth, 0);
          bctx.scale(-1, 1);
          bctx.beginPath();
          bctx.fillStyle = gradient[0];
          bctx.fillRect(0, 0, wWidth, wHeight);

          gradient[1] = bctx.createRadialGradient(
            wWidth * 0.1,
            wHeight * 0.1,
            0,
            wWidth * 0.3,
            wHeight * 0.1,
            wWidth
          );
          gradient[1].addColorStop(0, "rgb(2, 16, 39)");
          gradient[1].addColorStop(0.8, "transparent");

          bctx.translate(wWidth, 0);
          bctx.scale(-1, 1);
          bctx.beginPath();
          bctx.fillStyle = gradient[1];
          bctx.fillRect(0, 0, wWidth, wHeight);

          gradient[2] = bctx.createRadialGradient(
            wWidth * 0.1,
            wHeight * 0.5,
            0,
            wWidth * 0.1,
            wHeight * 0.5,
            wWidth * 0.5
          );
          gradient[2].addColorStop(0, "rgb(25, 30, 34)");
          gradient[2].addColorStop(1, "transparent");

          bctx.beginPath();
          bctx.fillStyle = gradient[2];
          bctx.fillRect(0, 0, wWidth, wHeight);
        };

        var animate = function() {
          var sin = M.sin(degree),
            cos = M.cos(degree);

          if (config.circle.amount > 0 && config.circle.layer > 0) {
            fctx1.clearRect(0, 0, wWidth, wHeight);
            for (var i = 0, len = circles.length; i < len; i++) {
              var item = circles[i],
                x = item.x,
                y = item.y,
                radius = item.radius,
                speed = item.speed;

              if (x > wWidth + radius) {
                x = -radius;
              } else if (x < -radius) {
                x = wWidth + radius;
              } else {
                x += sin * speed;
              }

              if (y > wHeight + radius) {
                y = -radius;
              } else if (y < -radius) {
                y = wHeight + radius;
              } else {
                y -= cos * speed;
              }

              item.x = x;
              item.y = y;
              drawCircle(x, y, radius, item.color, item.alpha);
            }
          }

          if (config.line.amount > 0 && config.line.layer > 0) {
            fctx2.clearRect(0, 0, wWidth, wHeight);
            for (var j = 0, len = lines.length; j < len; j++) {
              var item = lines[j],
                x = item.x,
                y = item.y,
                width = item.width,
                speed = item.speed;

              if (x > wWidth + width * sin) {
                x = -width * sin;
              } else if (x < -width * sin) {
                x = wWidth + width * sin;
              } else {
                x += sin * speed;
              }

              if (y > wHeight + width * cos) {
                y = -width * cos;
              } else if (y < -width * cos) {
                y = wHeight + width * cos;
              } else {
                y -= cos * speed;
              }

              item.x = x;
              item.y = y;
              drawLine(x, y, width, item.color, item.alpha);
            }
          }

          timer = requestAnimationFrame(animate);
        };

        var createItem = function() {
          circles = [];
          lines = [];

          if (config.circle.amount > 0 && config.circle.layer > 0) {
            for (
              var i = 0;
              i < config.circle.amount / config.circle.layer;
              i++
            ) {
              for (var j = 0; j < config.circle.layer; j++) {
                circles.push({
                  x: M.random() * wWidth,
                  y: M.random() * wHeight,
                  radius: M.random() * (20 + j * 5) + (20 + j * 5),
                  color: config.circle.color,
                  alpha: M.random() * 0.2 + (config.circle.alpha - j * 0.1),
                  speed: config.speed * (1 + j * 0.5)
                });
              }
            }
          }

          if (config.line.amount > 0 && config.line.layer > 0) {
            for (var m = 0; m < config.line.amount / config.line.layer; m++) {
              for (var n = 0; n < config.line.layer; n++) {
                lines.push({
                  x: M.random() * wWidth,
                  y: M.random() * wHeight,
                  width: M.random() * (20 + n * 5) + (20 + n * 5),
                  color: config.line.color,
                  alpha: M.random() * 0.2 + (config.line.alpha - n * 0.1),
                  speed: config.speed * (1 + n * 0.5)
                });
              }
            }
          }

          cancelAnimationFrame(timer);
          timer = requestAnimationFrame(animate);
          drawBack();
        };
        setCanvasHeight();
        createItem();
        // document.ready(function() {
        //     setCanvasHeight();
        //     createItem();
        // });
        // window.resize(function() {
        //     setCanvasHeight();
        //     createItem();
        // });
      }
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if (this.formParams.role) {
            if (
              userinfo[this.formParams.account] ||
              this.formParams.account.toUpperCase() == "DUOBEI" ||
              this.formParams.account == "多贝"
            ) {
              this.$router.push({
                path: "/meeting",
                query: {
                  account: this.formParams.account,
                  channel: this.formParams.channel,
                  role: this.formParams.role
                }
              });
            } else {
              this.$Message.warning("该用户不存在!");
            }
          } else {
            this.$Message.warning("请选择您的身份!");
          }
        } else {
          this.$Message.error("验证失败!");
        }
      });
    }
  },
  mounted() {
    this.drawCanvas();
  }
};
</script>
<style lang="scss" >
.ivu-form.ivu-form .ivu-form-item-label {
  color: #fff !important;
}
.ivu-radio-wrapper {
  color: #fff !important;
}
#Login {
  height: 100%;
  width: 100%;
  font-family: Verdana, Tahoma, Helvetica Neue, Helvetica, Arial, sans-serif;
  background-color: rgba(0, 158, 235, 0.35);
  position: relative;
  background-image: radial-gradient(ellipse at 50%, #2d343a, #000);
  // background: url("../assets/img/background (1).png");

  .login-container {
    width: 8rem;
    height: 4rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    // background: rgba(81, 148, 251, 0.1);
    background: rgba(65, 119, 140, 0.32);
    border-radius: 25px;
    display: flex;
    z-index: 9999;
    .form-warp {
      width: 50%;
      padding: 30px 60px;
      .header {
        width: 100%;
        width: 100%;
        /* display: flex; */
        height: 70px;
        display: flex;
        position: relative;
        img {
          height: 100%;
        }
        .header-title {
          font-size: 26px;
          line-height: 70px;
          color: #fff;
          position: absolute;
          left: 0;
          right: 0;
        }
      }
      .from-content {
        text-align: left;
      }
    }
    .img-wrap {
      width: 50%;
      // background: url("../assets/img/login-bg.png") no-repeat 50%;
      background-size: contain;
      position: relative;
      .img-box {
        width: 60%;
        height: 60%;
        opacity: 1;
        // animation: imgbreath 5s infinite ease-in-out;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        img {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .img-bule {
          opacity: 1;
          animation: imgBlueBreath 5s infinite ease-in-out;
        }
        .img-black {
          opacity: 0;
          animation: imgBlackBreath 5s infinite ease-in-out;
        }
      }
      @keyframes imgbreath {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.6;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes imgBlueBreath {
        0% {
          opacity: 1;
          transform: rotate(0deg);
        }
        50% {
          opacity: 0.6;
          transform: rotate(180deg);
        }
        100% {
          opacity: 1;
          transform: rotate(360deg);
        }
      }
      @keyframes imgBlackBreath {
        0% {
          opacity: 0;
          transform: rotate(0deg);
        }
        50% {
          opacity: 1;
          transform: rotate(180deg);
        }
        100% {
          opacity: 0;
          transform: rotate(360deg);

        }
      }
    }
  }
  // .login-container {
  //   padding-top: 20px;
  //   position: absolute;
  //   left: 0;
  //   right: 0;
  //   top: 0;
  //   bottom: 0;
  //   width: 40%;
  //   height: 50%;
  //   min-height: 300px;
  //   z-index: 2;
  //   margin: auto;
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   background: #fff;
  //   border-radius: 4px;
  //   .imgbox {
  //     width: 50%;
  //     img {
  //       width: 100%;
  //       margin: 0 auto;
  //     }
  //   }
  //   .login-title {
  //     h3 {
  //       margin-top: 5px;
  //       font-weight: 600;
  //     }
  //     p {
  //       margin: 0 0 10px;
  //       font-size: 10px;
  //     }
  //   }
  // }
}
</style>