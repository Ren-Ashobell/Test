<template>
    <div>
        <div style="width:1500px;
         align-content:center;
         margin: 50px 0 0 0;
         position: relative;
         left: 200px;">
            <div style="font-size: 30px">
                <el-page-header @back="goBack" content="代码千遍，其意自现" title="返回">
                </el-page-header>
            </div>
            <div class="center" style="margin: 20px 0 0 0">
                <h1 v-cloak>{{ this.$route.params.title }}</h1>
                <div style="font-size: 24px" ><p style="margin: 10px 0 0 60px" v-cloak>发布时间:{{ this.$route.params.createdDate }}
                    <el-divider direction="vertical"></el-divider>最后修改时间：{{ this.$route.params.updatedDate }}
                    <el-divider direction="vertical"></el-divider>作者：{{ this.$route.params.author }}
                    <el-divider direction="vertical"></el-divider>阅读(999+)
                    <el-divider direction="vertical"></el-divider>评论(999+)
                    <el-divider direction="vertical"></el-divider><el-link :underline="false" style="font-size:26px; margin: 0 0 4px 0">喜欢(999+)</el-link></p>
                </div>
                <div style="font-size: 30px; margin: 20px"><pre v-html="this.$route.params.blogs.substring(27)" v-cloak>{{ this.$route.params.blogs.substring(27) }}</pre></div>
            </div>
        </div>
        <!-- ++++++++++++++++++++旋转魔方++++++++++++++++++++++++++++-->
        <!-- 旋转魔方外层最大容器 -->
        <div class="wrap">
            <!--包裹所有元素的容器-->
            <div class="cube">
                <!--前面图片 -->
                <div class="out_front">
                    <img :src="require('../assets/photo/iu/IU12.jpg')" class="pic" />
                </div>
                <!--后面图片 -->
                <div class="out_back">
                    <img :src="require('../assets/photo/iu/IU16.jpg')" class="pic" />
                </div>
                <!--左面图片 -->
                <div class="out_left">
                    <img :src="require('../assets/photo/iu/IU18.jpg')" class="pic" />
                </div>
                <!--右面图片 -->
                <div class="out_right">
                    <img :src="require('../assets/photo/iu/IU19.jpg')" class="pic" />
                </div>
                <!--上面图片 -->
                <div class="out_top">
                    <img :src="require('../assets/photo/iu/IU21.jpg')" class="pic" />
                </div>
                <!--下面图片 -->
                <div class="out_bottom">
                    <img :src="require('../assets/photo/iu/IU1.jpg')" class="pic" />
                </div>

                <!--小正方体 -->
                <span class="in_front">
               <img :src="require('../assets/photo/iu/IU12.jpg')" class="in_pic" />
           </span>
                <span class="in_back">
                <img :src="require('../assets/photo/iu/IU16.jpg')" class="in_pic" />
           </span>
                <span class="in_left">
               <img :src="require('../assets/photo/iu/IU18.jpg')" class="in_pic" />
           </span>
                <span class="in_right">
               <img :src="require('../assets/photo/iu/IU19.jpg')" class="in_pic" />
           </span>
                <span class="in_top">
               <img :src="require('../assets/photo/iu/IU21.jpg')" class="in_pic" />
           </span>
                <span class="in_bottom">
               <img :src="require('../assets/photo/iu/IU1.jpg')" class="in_pic" />
           </span>
            </div>
        </div>
        <!-- ++++++++++++++++++++旋转魔方++++++++++++++++++++++++++++-->
    </div>
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        },
        created() {
            console.log(this.$route.params)

        },

    }
</script>

<style scoped>
    .center{
        background-color: rgba(255,240,245,0.7);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    pre {
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    /*魔方样式============================================*/
    .wrap {
        width: 159px;
        height: 200px;
        margin: 0px;
        position:absolute;
        z-index : 10;
        top: 200px;
        left: 85%;
    }

    /*包裹所有容器样式*/
    /*设置transform-style: preserve-3d，让其子元素在3D空间呈现*/
    .cube {
        width: 50px;
        height: 50px;
        margin: 0 auto;
        transform-style: preserve-3d;
        transform: rotateX(-30deg) rotateY(-80deg);
        animation: rotate linear 20s infinite;
    }

    @-webkit-keyframes rotate {
        from {
            transform: rotateX(0deg) rotateY(0deg);
        }
        to {
            transform: rotateX(360deg) rotateY(360deg);
        }
    }

    .cube div {
        position: absolute;
        width: 200px;
        height: 200px;
        opacity: 0.8;
        transition: all .4s;
    }

    /*定义所有图片样式*/
    .pic {
        width: 200px;
        height: 200px;
    }

    .cube .out_front {
        transform: rotateY(0deg) translateZ(100px);
    }

    .cube .out_back {
        transform: translateZ(-100px) rotateY(180deg);
    }

    .cube .out_left {
        transform: rotateY(-90deg) translateZ(100px);
    }

    .cube .out_right {
        transform: rotateY(90deg) translateZ(100px);
    }

    .cube .out_top {
        transform: rotateX(90deg) translateZ(100px);
    }

    .cube .out_bottom {
        transform: rotateX(-90deg) translateZ(100px);
    }

    /*定义小正方体样式*/
    .cube span {
        display: block;
        width: 100px;
        height: 100px;
        position: absolute;
        top: 50px;
        left: 50px;
    }

    .cube .in_pic {
        width: 100px;
        height: 100px;
    }

    .cube .in_front {
        transform: rotateY(0deg) translateZ(50px);
    }

    .cube .in_back {
        transform: translateZ(-50px) rotateY(180deg);
    }

    .cube .in_left {
        transform: rotateY(-90deg) translateZ(50px);
    }

    .cube .in_right {
        transform: rotateY(90deg) translateZ(50px);
    }

    .cube .in_top {
        transform: rotateX(90deg) translateZ(50px);
    }

    .cube .in_bottom {
        transform: rotateX(-90deg) translateZ(50px);
    }

    /*鼠标移入后样式*/
    .cube:hover .out_front {
        transform: rotateY(0deg) translateZ(200px);
    }

    .cube:hover .out_back {
        transform: translateZ(-200px) rotateY(180deg);
    }

    .cube:hover .out_left {
        transform: rotateY(-90deg) translateZ(200px);
    }

    .cube:hover .out_right {
        transform: rotateY(90deg) translateZ(200px);
    }

    .cube:hover .out_top {
        transform: rotateX(90deg) translateZ(200px);
    }

    .cube:hover .out_bottom {
        transform: rotateX(-90deg) translateZ(200px);
    }
    /*魔方样式结束============================================*/

</style>