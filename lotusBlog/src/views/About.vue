<template>
    <div class="block">
        <div style="width: 100%">
            <el-timeline >
                <el-timeline-item timestamp="2020/9/16——2020/10/8" placement="top">
                    <el-card>
                        <h1>完成首页基本模版布局</h1>
                        <p style="font-size: 24px">莲·阿修贝尔 提交于 2020/9/17 22:30</p>
                    </el-card>
                    <el-divider></el-divider>
                    <el-card>
                        <h1>完善了首页看板娘的功能以及完成相册的基本模版</h1>
                        <p style="font-size: 24px">莲·阿修贝尔 提交于 2020/9/18 22:00</p>
                    </el-card>
                    <el-divider></el-divider>
                    <el-card>
                        <h1>实现了相册和后端的对接</h1>
                        <p style="font-size: 24px">莲·阿修贝尔 提交于 2020/9/20 16:00</p>
                    </el-card>
                    <el-divider></el-divider>
                    <el-card>
                        <h1>完成了博客分页、返回的功能，添加了日历、魔方等功能</h1>
                        <p style="font-size: 24px">莲·阿修贝尔 提交于 2020/9/21 16:00</p>
                    </el-card>
                    <el-divider></el-divider>
                    <el-card>
                        <h1>实现了博客分类，相册分类，完善了返回功能，修复了几个BUG</h1>
                        <p style="font-size: 24px">莲·阿修贝尔 提交于 2020/9/22 17:00</p>
                    </el-card>
                    <el-divider></el-divider>
                    <el-card>
                        <h1>修复了分页博客内容却一直都是第一页的bug（分页功能中，索引值只会在0——pageSize之间循环，所以我添加了一个变量来记录索引值），实现了博客内容可以显示图片(从原本的读取txt文件，改为了读html文件，并且使用了v-html属性来加载html文件里面的信息)</h1>
                        <p style="font-size: 24px">莲·阿修贝尔 提交于 2020/9/23 10:50</p>
                    </el-card>
                    <el-divider></el-divider>

                </el-timeline-item>

            </el-timeline>
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
        name: "About"
    };
        // 鼠标点击爱心
        (function(window,document,undefined){
            var hearts = [];
            window.requestAnimationFrame = (function(){
                return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback){
                        setTimeout(callback,1000/60);
                    }
            })();
            init();
            function init(){
                css(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: absolute;}.heart:after{top: -5px;}.heart:before{left: -5px;}");
                attachEvent();
                gameloop();
            }
            function gameloop(){
                for(var i=0;i<hearts.length;i++){
                    if(hearts[i].alpha <=0){
                        document.body.removeChild(hearts[i].el);
                        hearts.splice(i,1);
                        continue;
                    }
                    hearts[i].y--;
                    hearts[i].scale += 0.004;
                    hearts[i].alpha -= 0.013;
                    hearts[i].el.style.cssText = "left:"+hearts[i].x+"px;top:"+hearts[i].y+"px;opacity:"+hearts[i].alpha+";transform:scale("+hearts[i].scale+","+hearts[i].scale+") rotate(45deg);background:"+hearts[i].color;
                }
                requestAnimationFrame(gameloop);
            }
            function attachEvent(){
                var old = typeof window.onclick==="function" && window.onclick;
                window.onclick = function(event){
                    old && old();
                    createHeart(event);
                }
            }
            function createHeart(event){
                var d = document.createElement("div");
                d.className = "heart";
                hearts.push({
                    el : d,
                    x : event.clientX - 5,
                    y : event.clientY - 5,
                    scale : 1,
                    alpha : 1,
                    color : randomColor()
                });
                document.body.appendChild(d);
            }
            function css(css){
                var style = document.createElement("style");
                style.type="text/css";
                try{
                    style.appendChild(document.createTextNode(css));
                }catch(ex){
                    style.styleSheet.cssText = css;
                }
                document.getElementsByTagName('head')[0].appendChild(style);
            }
            function randomColor(){
                return "rgb("+(~~(Math.random()*255))+","+(~~(Math.random()*255))+","+(~~(Math.random()*255))+")";
            }
        })(window,document);
</script>

<style scoped>
    /*魔方样式============================================*/
    .wrap {
        width: 159px;
        height: 200px;
        margin: 0px;
        position:absolute;
        z-index : 10;
        top: 300px;
        left: 60%;
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