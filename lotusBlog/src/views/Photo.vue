<template>
    <div style="margin: 20px 100px 100px 100px; font-size: 24px;color: lightpink" >
        <h1>李知恩<span style="font-size: 24px;text-shadow: .2rem 0rem .5rem white,-.2rem 0rem .5rem hotpink,0rem .2rem .5rem white,0rem -.2rem .5rem white;">-----------------你们把我想的那么棒，那么我就变成你们所想的那样的人，所以我努力工作并向你们心中的IU学习着</span></h1>
        <div v-for="(photo, i) in photos">
            <div class="demo-image__preview">
                <el-image
                        style="width: 300px; height: 300px;border-radius: 30px"
                        :src="'http://47.98.154.112:20000/'+photo.url"
                        :preview-src-list="photosList"
                        :lazy='true'>
                </el-image>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                urls:[{
                    imgurl: "http://localhost:8081/static/IU.jpg",
                },{
                    imgurl: require('../assets/photo/iu/IU1.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU2.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU3.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU4.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU5.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU6.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU7.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU8.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU9.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU10.jpg'),
                },{
                    imgurl: require('../assets/photo/iu/IU11.jpg'),
                }],
                srcList: [
                    require('../assets/photo/iu/IU.jpg'),
                    require('../assets/photo/iu/IU1.jpg'),
                    require('../assets/photo/iu/IU2.jpg'),
                    require('../assets/photo/iu/IU3.jpg'),
                    require('../assets/photo/iu/IU4.jpg'),
                    require('../assets/photo/iu/IU5.jpg'),
                    require('../assets/photo/iu/IU6.jpg'),
                    require('../assets/photo/iu/IU7.jpg'),
                    require('../assets/photo/iu/IU8.jpg'),
                    require('../assets/photo/iu/IU9.jpg'),
                    require('../assets/photo/iu/IU10.jpg'),
                    require('../assets/photo/iu/IU11.jpg'),
                ],
                photos:[{

                }],
                photosList: [],
            }
        },
        created() {
            const _this = this;
            const categoryId = this.$route.query.photoCategoryId
            axios.get("/api/photo/findCategoryAllURL",{
                params:{
                    categoryId:categoryId
                }
            }).then(function (resp) {
                _this.photos = resp.data;
            });
            axios.get("/api/photo/findCategoryAllURLList", {
                params: {
                    categoryId:categoryId
                }
            }).then(function (resp) {
                console.log(resp.data);
                _this.photosList = resp.data;
            })
        }
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
    .demo-image__preview {
        float: left;
        margin: 20px 0px 0px 100px;
    }

</style>