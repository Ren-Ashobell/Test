<template>
    <div >

        <div id="main">
            <div id="left" style="float: left;width: 232px;font-size: 24px">
                <img src="../assets/Head.jpeg" style="width: 230px; height: 230px;" /><br/><br/>
                <div>
                    <p v-cloak>昵称：{{ username }}</p><br/>
                    <p v-cloak>年龄：{{ age }}</p><br/>
                    <p v-cloak>粉丝：{{ fans }}</p><br/>
                </div>
                <div >
                    <i class="el-icon-edit el-icon--left"></i>随笔分类<br/><br/>
                    <ul v-for="(item, i) in blogCategory">
                        <li><router-link :to="{name:'blogs',query:{blogCategoryId:item.id}}">{{i+1+'. '}}{{ item.blogCategoryName }}</router-link></li><br/>
                    </ul>
                </div>

                <div>
                    <i class="el-icon-reading el-icon--left"></i>阅读排行榜<br/><br/>
                    <ul>
                        <li><a v-bind:href="url">1. MySql索引及其优化</a></li><br/>

                    </ul>
                    <ul>
                        <li><a v-bind:href="url">2. NodeJS学习笔记</a></li><br/>
                    </ul>
                    <ul>
                        <li><a v-bind:href="url">3. 前后端分离</a></li><br/>
                    </ul>
                </div>
            </div>
            <div id="center" style="float: left; width: 800px">
                <div class="index_center" v-for="(item, i) in blogData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
                    <div><h4 v-cloak>{{ item.title }}</h4></div>
                    <div class="index_center_article">
                        <p v-cloak style="font-size: 24px" v-html="blogs[x+i].substring(27,147)+'.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.'"></p>
                    </div>
                    <div>

                        <el-button size="small"><router-link :to="{name:'blog_main', params:{title:item.title, createdDate:item.createdDate, updatedDate:item.updatedDate, author:item.author, blogs:blogs[x+i]}}"> 阅读全文</router-link></el-button>
                        <p style="font-size: 10px" v-cloak>发布时间:{{ item.createdDate }}
                        <el-divider direction="vertical"></el-divider>最后修改时间：{{ item.updatedDate }}
                        <el-divider direction="vertical"></el-divider>作者：{{ item.author }}
                        <el-divider direction="vertical"></el-divider>阅读(999+)
                        <el-divider direction="vertical"></el-divider>评论(999+)
                        <el-divider direction="vertical"></el-divider><el-link :underline="false" style="font-size: 10px;margin: 0 0 4px 0">喜欢(999+)</el-link></p>
                    </div>
                </div>
                <div class="block" style="margin: 36px 0 0 120px;">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page.sync="currentPage"
                            :page-size="pageSize"
                            layout="prev, pager, next, jumper"
                            :total="blogs.length"
                            >
                    </el-pagination>
                </div>
            </div>
            <div id="right" style="float: left;margin: 0 0 0 10px">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>网抑云</span>
                    </div>
                    <div class="text item">
                        <pre style="font-size: 18px" v-cloak >{{ sentence[0].sentence }}</pre>
                    </div>
                </el-card>
                <el-calendar v-model="value">
                </el-calendar>
            </div>

        </div>

        <div id="footer">

        </div>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        methods: {
            getData(){
                 data:{
        			 keywords:this.input
                 }
                 res.data=this.blogData
            },
            handleEdit(index, row) {
                console.log(index, row);//这里可打印出每行的内容
                //点击编辑
                this.dialogFormVisible = true //显示弹框
                this.editForm = Object.assign({}, row); // editForm是Dialog弹框的data
                //显示编辑界面

            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            handleSizeChange(val) {
                // 改变每页显示的条数
                this.PageSize=val
                // 注意：在改变每页显示的条数时，要将页码显示到第一页
                this.currentPage=1
            },
            // 显示第几页
            handleCurrentChange(val) {
                for(var i = 1; i < val; i++){
                    this.x = this.x+this.pageSize
                }
                // 改变默认的页数
                this.currentPage=val
            },




        },
        data() {

            return {
                x: 0,
                username: "莲·阿修贝尔",
                age: 20,
                fans: 520,
                url: "www.baidu.com",
                blogData: [],
                blogs: [],
                blogCategory: [],
                sentence: [],
                currentPage: 1,
                pageSize: 4,
                totalSize: 20,
                value: new Date()
            }
        },
        mounted() {



        },
        created() {
            const _this = this;
            axios.get('/api/Blog/findAll').then(function (resp) {
                console.log(resp.data)
                _this.blogData = resp.data
            });
            axios.get('/api/Blog/findAllBlogs').then(function (resp) {
                console.log(resp.data)
                _this.blogs = resp.data
            });
            axios.get('/api/BlogCategory/findAll').then(function (resp) {
                _this.blogCategory = resp.data
            });
            axios.get('/api/Sentence/findAll').then(function (resp) {
                _this.sentence = resp.data
            });


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
    #main {
        width: 1500px;
        height: 80%;
        position: absolute;
        left: 20%;
        top: 136px;
        margin: -50px 0 0 -50px;

    }
    li{
        list-style: none;
        line-height: 10px;
    }

    .index_center{
        margin: 10px 0 0 20px;
        height: 220px;
        background-color: rgba(255,240,245,0.7);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .index_center_article{
        height:140px;
    }
    .text {
        font-size: 12px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 360px;
    }
</style>