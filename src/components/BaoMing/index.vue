<template>
    <section class="signup-wrap">
        <div class="signup-header">
        </div>
        <div class="signup-info">
            <div class="info-title">
                <h1>
                    活动报名
                    <span></span>
                </h1>
                <h3>
                    迎新春*杨松涛画展
                </h3>
            </div>
            <div class="info-time">
                <p class="info-p">
                    <span class="img-riqi"></span>
                    活动时间：2019.2.27-2019.3.30
                </p>
                <p class="info-p">
                    <span class="img-clock"></span>
                    报名截止时间：2019.2.25 12:00
                </p>
            </div>
            <div class="info-form">
                <!-- 姓名 -->
                <div class="form-item">
                    <span class="form-img img-user"></span>
                    <van-field v-model="value" placeholder="姓名" />
                </div>
                <!-- 身份证 -->
                <div class="form-item">
                    <span class="form-img img-id"></span>
                    <van-field v-model="value" placeholder="身份证" />
                </div>
                <!-- 电话 -->
                <div class="form-item">
                    <span class="form-img img-phone"></span>
                    <van-field v-model="value" placeholder="电话" />
                </div>
                <!-- 住址 -->
                <div class="form-item">
                    <span class="form-img img-address"></span>
                    <van-field v-model="value" placeholder="住址" />
                </div>
            </div>
            <div class="info-btn">
                <!-- 提交 -->
                <div class="btn-comfirm">
                    提交报名
                </div>
            </div>

        <div class="signup-footer">

        </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import '~common/less/variable.less';
    .signup-wrap {
        height: 100%;
        font-family:PingFangSC-Regular;
        // position: relative;
        // display: flex;
        background: #fff;

        .signup-header {
            width: 100%;
            height: 250px;
            background: linear-gradient(0deg,rgba(106,132,228,1) 0%,rgba(139,192,234,1) 100%);
        }

        .signup-info {
            position: absolute;
            top: 45px;
            left: 0;
            bottom: 0;
            // padding: 0 12px;
            // box-sizing: border-box;
            width: 100%;

            .info-title {
                color: #fff;
                font-family:PingFangSC-Regular;
                height: 110px;
                width: 100%;
                .bg-image('info-title');
                background-position: 0px 8px;
                background-size: 100%;
                background-repeat: no-repeat;

                h1 {
                    font-size: 33px;

                    padding: 0 12px 15px;
                }

                h3 {
                    font-size: 18px;
                    padding: 0 12px;
                }
            }

            .info-time {
                margin: 0 12px;
                height:78px;
                background:#ffffff;
                box-shadow:0px 3px 7px 1px rgba(79,104,191,0.3);
                border-radius:5px;
                padding: 18px 0 0 15px;
                box-sizing: border-box;

                .img-riqi {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    margin-right: 11px;
                    .bg-image('riqi');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    vertical-align: middle;
                }

                .img-clock {
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    margin-right: 11px;
                    .bg-image('clock');
                    background-size: cover;
                    background-repeat: no-repeat;
                    vertical-align: bottom;

                }

                .info-p {
                    height:20px;
                    line-height: 20px;
                    font-weight:400;
                    color:rgba(127,143,202,1);
                    padding-bottom:5px;
                }
            }

            .info-form {
                height:259px;
                background:rgba(255,255,255,1);
                box-shadow:0px 3px 7px 1px rgba(79,104,191,0.17);
                border-radius:5px;
                margin: 8px 12px;
                padding: 40px 0 0;

                .form-item {
                    margin: 9px 0;
                    display: flex;

                    .img-user {
                        .bg-image('xingming');
                    }

                     .img-id {
                        .bg-image('id');
                    }

                     .img-phone {
                        .bg-image('phone');
                    }

                     .img-address {
                        .bg-image('dizhi');
                    }

                    .form-img {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        margin: 11px;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }

                    /deep/ .van-cell {
                        height: 41px;
                        padding: 8px 25px;
                        border-radius: 20px;
                        width: 80%;
                        background-color: #F6F6F7;
                    }
                }
            }

            .info-btn {
                width: 100%;
                padding: 0 25px;
                margin: 40px 0 20px 0;
                box-sizing: border-box;

                .btn-comfirm {
                    height:40px;
                    background:rgba(159,201,241,1);
                    box-shadow:0px 3px 3px 0px rgba(79,104,191,0.15);
                    border-radius:5px;
                    font-size: 13px;
                    color: #fff;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }

        .signup-footer {
            height: 65px;
            width: 100%;
            // position: absolute;
            // bottom: 0;
            // align-self: flex-end;
            .bg-image('signupfooter');
            background-size: cover;

        }
    }
</style>
