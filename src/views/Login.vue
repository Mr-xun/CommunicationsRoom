<template>
    <div id="Login">
        <h3>欢迎来到通讯室</h3>
        <Button @click="login">登录</Button>
        <!-- <canvas id="canvas" style="width:100%;height: 100%;position:absolute;top:0px;left:0px;z-index:-1;"></canvas> -->
    </div>
</template>
<script>
// import api from '@/api/index.js';
// import utils from "@/static/js/utils";
export default {
    data() {
        return {
            logining: false,
            loginForm: {
                userName: '',
                passWord: ''
            },
            todayVisitor: '',
            allVisitor: '',
            rules: {
                userName: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    //{ validator: validaePass }
                ],
                passWord: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    //{ validator: validaePass2 }
                ]
            },
            checked: true
        };
    },
    methods: {
        login(){
            this.$router.push({path:'/home'})
        },
    },
    mounted() {
    },
}
</script>
<style lang="scss">
#Login {
    min-height: 80%;

    .title {
        /* position: absolute; */
        /* left: -41px; */
        width: 100%;
        margin-top: 0.3rem;
        text-align: center;
        height: 70px;
        line-height: 70px;
        z-index: 1000;
        top: 15%;
        color: #2ec0f6;
        font-size: 40px;

        .title_info {
            // position: absolute;
            left: -41px;
            width: 100%;
            text-align: center;
            height: 70px;
            line-height: 70px;
            z-index: 1000;
            top: 10%;
            color: #fff;
            font-size: 0.18rem;
            // margin-top: 25px;
        }
    }

    #cas {
        position: absolute;
    }

    .el-form-item__content {
        display: flex !important;
    }

    .login-container {
        /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
        -webkit-border-radius: 5px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 0.8rem auto 0.3rem;
        // margin-top: 140px;
        // width: 350px;
        padding: 35px 35px 15px 35px;
        // border: 1px solid #eaeaea;
        // box-shadow: 0 0 25px #cac6c6;
        max-width: 500px;
        /* margin: 0 5vw; */
        background: rgba(10, 10, 10, 0.17);
        background: rgba(81, 148, 251, 0.1);

        padding: 3.5vw;
        box-sizing: border-box;
        /* display: -webkit-flex; */
        /* display: flex; */
        /* flex-wrap: wrap; */
        justify-content: center;
        border-bottom: 8px solid #7E48DA;
        border-radius: 30px 30px 50px 50px;
        display: flex;
        flex-direction: column;

        .title {
            margin: 0px auto 0 auto;
            text-align: center;
            font-size: 24px;
            color: #fff;
        }

        .login_label {
            font-size: 14px;
            color: #fff;
            display: inline-block;
            font-weight: 500;
            margin-bottom: 12px;
            text-transform: capitalize;
            letter-spacing: 1px;

            i {
                font-size: 15px;
                margin-left: 5px;
                color: #7E48DA;
                border-radius: 50%;
                line-height: 1.9;
                text-align: center;
            }
        }

        .remember {
            margin: 0px 0px 20px 0px;
        }
        .login-btn{
        background: -webkit-linear-gradient(left, #51a4f8, #43faff);
        background: -o-linear-gradient(left, #51a4f8, #43faff);
        background: linear-gradient(to right, #51a4f8, #43faff); 
        }
    }

    .visitorRecord {
        text-align: center;
        margin: 0 auto;
        width: 400px;

        p {
            margin: 0 auto;
            width: 400px;
            font-size: 16px;

            .today {
                float: left;

            }

            .all {
                float: right;
            }
        }

    }
}
</style>