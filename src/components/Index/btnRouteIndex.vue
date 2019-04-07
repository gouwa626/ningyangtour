<template>
    <div class="route-wrap">
        <div class="city-wrap">
            <router-link class="city-lingyang" to="/aboutny" tag="div">
                宁阳
            </router-link>
            <div>
                2-13C
            </div>
        </div>
        <div class="active-wrap">
            <router-link to="/wlseries" tag="div">
                <div></div>
                文旅咨询
            </router-link>
            <router-link to="/wlactive" tag="div">
                <div></div>
                文旅活动
            </router-link>
            <router-link to="/publicserver" tag="div">
                <div></div>
                公共服务
            </router-link>
            <div>
                <div></div>
                文化遗产
            </div>
        </div>
        <div class="project-wrap">
            <div class="project-title">
                商城
            </div>
            <div class="project-title pro-live">
                直播
            </div>
            <div class="project-title">
                视频
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
    .route-wrap {
        .city-wrap {
            background-color: rgb(203, 203, 203);
            padding: 5px 10px;
            display: flex;
            justify-content: space-between;

            >div{
                height:30px;
                line-height: 30px;
            }

            .city-lingyang {
                width: 60px;
                text-align: center;
                border-right: 1px dashed rgb(181,181,181);
            }
        }

        .active-wrap {
            height: 100px;
            background-color: rgb(224,224,221);
            display: flex;
            justify-content: space-between;
            padding: 10px;
        }

        .project-wrap{
            padding:10px;
            background-color: rgb(164,164,164);
            display: flex;
            justify-content: space-between;
            align-items: center;

            .project-title {
               text-align: center;
               flex-grow: 1;
               height: 30px;
               line-height: 30px;
            }

            .pro-live {
                border-right: 1px dashed rgb(133,133,133);
                border-left: 1px dashed rgb(133,133,133);

            }
        }
    }
</style>
