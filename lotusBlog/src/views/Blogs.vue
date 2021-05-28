<template>
    <div>
        <div style="width: 100%; margin: 36px 0 0 36px; position: fixed">
            <div style="width: 1200px; float: left; margin: 0 0 0 250px">
                <div class="index_center" v-for="(item, i) in blogData.slice((currentPage-1)*pageSize,currentPage*pageSize)">
                    <div><h4 v-cloak>{{ item.title }}</h4></div>
                    <div class="index_center_article"><p v-cloak style="font-size: 24px">{{ blogs[x+i].substr(27,227) }}.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.</p></div>
                    <el-button size="small" ><router-link :to="{name:'blog1', params:{blogArticle: blogs, blogData: blogData,categoryId: item.categoryId, title:item.title, createdDate:item.createdDate, updatedDate:item.updatedDate, author:item.author, blogs:blogs[x+i]}}"> 阅读全文</router-link></el-button>
                    <div><p style="font-size: 10px" v-cloak>发布时间:{{ item.createdDate }}
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
            <div id="right" style="float: left; margin: 0 0 0 10px">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>网抑云</span>
                    </div>
                    <div class="text item">
                        <pre style="font-size: 18px" v-cloak>{{ sentence[0].sentence }}</pre>
                    </div>
                </el-card>
                <el-calendar v-model="value">
                </el-calendar>
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
    </div>



</template>

<script>
    export default {
        data() {
            return {
                x: 0,
                blogs:[],
                blogData:[{}],
                currentPage: 1,
                pageSize: 10,
                totalSize: 20,
                value: new Date()
            }
        },
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

        created() {
            const _this = this;
            const category_id = this.$route.query.blogCategoryId
            axios.get('/api/Blog/findCategoryAll',{
                params:{
                    categoryId:category_id
                }
            }).then(function (resp) {
                _this.blogData = resp.data
            });
            axios.get('/api/Blog//findAllCategoryBlogs',{
                params:{
                    categoryId:category_id
                }
            }).then(function (resp) {
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
    }
</script>

<style scoped>
    .index_center{
        margin: 10px 0 0 36px;
        height: 220px;
        background-color: rgba(255,240,245,0.7);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    .index_center_article{
        height:140px;
    }
    .box-card {
        width: 360px;
    }
    /*魔方样式============================================*/
    .wrap {
        width: 159px;
        height: 200px;
        margin: 0px;
        position:absolute;
        z-index : 10;
        top: 300px;
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