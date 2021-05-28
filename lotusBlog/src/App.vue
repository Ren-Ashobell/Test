<template>
  <div id="app">

    <div id="header">

      <el-menu
              :default-active="activeIndex2"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
              background-color="#000000"
              text-color="#ffffff"
              active-text-color="#ff99cc"
              router>
        <el-menu-item index="1"><router-link to="/index" ><i class="el-icon-s-home el-icon--left"></i>首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-reading el-icon--left"></i> 学习笔记</template>
          <div v-for="(item, i) in blogCategory"><router-link :to="{name:'blogs',query:{blogCategoryId:item.id}}"><el-menu-item :index="'2-'+i">{{ item.blogCategoryName }}</el-menu-item></router-link> </div>

        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-picture el-icon--left"></i>相册</template>
          <div v-for="(item, i) in photoCategory"><router-link :to="{name:'photos',query:{photoCategoryId:item.id}}"><el-menu-item :index="'3-'+i">{{item.category}}</el-menu-item></router-link></div>

        </el-submenu>
        <el-menu-item index="4" disabled><i class="el-icon-phone el-icon--left"></i>联系</el-menu-item>
        <el-menu-item index="5" disabled><i class="el-icon-setting el-icon--left"></i>管理</el-menu-item>
        <el-menu-item index="6" ><router-link to="/about"><i class="el-icon-s-help el-icon--left"></i>关于</router-link></el-menu-item>
      </el-menu>
    </div>
    <div>
      <live2d :style="style"
                 :model="[1, 53]"
                 :direction="direction"
                 :size="size"
      style="position: fixed; bottom: 0; left: 20px; zIndex: 1">

      </live2d>
    </div>
    <div><Player></Player></div>
    <div class="clearfloat"></div>
    <router-view/>


  </div>
</template>

<style>

  .clearfloat{
    clear:both;height:0;font-size: 1px;line-height: 0px;
  }
  html,body{
    cursor: url("assets/img/iu.png"),auto;
  }

  /*消除router-link下划线*/
  a {
    text-decoration: none;
    color: #000000;
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
  }
  .router-link-active {
    text-decoration: none;
  }

  * {
    margin:0;
    padding:0;
    font-family: "Xingkai TC";

  }

  #app {

    position:absolute;
    width: 100%;
    min-height: 120%;
    background: url('http://47.98.154.112:20000/background/bg2-2.png');
    background-size:100% 100%;
  }


  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>

<script>
  import Player from 'zw-player'
  import live2d from './../packages/index.vue'

  export default {
    components: {
      Player,
      live2d
    },

    data() {
      return {
        direction: 'right',
        style: '',
        width: 500,
        height: 500,
        size: 350,
        tips: {
          mouseover: [{
            selector: '.vue-live2d',
            texts: ['这样可以修改默认语句']
          }]
        },
        img: 'assets/bg2-2.jpg',
        activeIndex: '1',
        activeIndex2: '1',
        photoCategory: [{
          id: 0,
          category: '测试',
        }],
      };
    },

    created () {

      const _this = this;
      const disable = false;
      axios.get('/api/PhotoCategory/findAll').then(function (resp) {

        _this.photoCategory = resp.data
        console.log(resp.data)
      });
      axios.get('/api/BlogCategory/findAll').then(function (resp) {
        _this.blogCategory = resp.data
      });
      axios.get('/api/Blog/findAll').then(function (resp) {
        _this.blogData = resp.data
      });

      if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
      }

      //在页面刷新时将vuex里的信息保存到sessionStorage里
      window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
      })
    },
    mounted() {
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  };





  // 蒲公英动态效果
  !function(){

    function n(n,e,t){

      return n.getAttribute(e)||t

    }

    function e(n){

      return document.getElementsByTagName(n)

    }

    function t(){

      var t=e("script"),o=t.length,i=t[o-1];

      return{

        l:o,z:n(i,"zIndex",-1),o:n(i,"opacity",.6),c:n(i,"color","0,0,0"),n:n(i,"count",99)

      }

    }

    function o(){

      a=m.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,

              c=m.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight

    }

    function i(){

      r.clearRect(0,0,a,c);

      var n,e,t,o,m,l;

      s.forEach(function(i,x){

        for(i.x+=i.xa,i.y+=i.ya,i.xa*=i.x>a||i.x<0?-1:1,i.ya*=i.y>c||i.y<0?-1:1,r.fillRect(i.x-.5,i.y-.5,1,1),e=x+1;e<u.length;e++)n=u[e],

        null!==n.x&&null!==n.y&&(o=i.x-n.x,m=i.y-n.y,

                l=o*o+m*m,l<n.max&&(n===y&&l>=n.max/2&&(i.x-=.03*o,i.y-=.03*m),

                t=(n.max-l)/n.max,r.beginPath(),r.lineWidth=t/2,r.strokeStyle="rgba("+d.c+","+(t+.2)+")",r.moveTo(i.x,i.y),r.lineTo(n.x,n.y),r.stroke()))

      }),

              x(i)

    }

    var a,c,u,m=document.createElement("canvas"),

            d=t(),l="c_n"+d.l,r=m.getContext("2d"),

            x=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||

                    function(n){

                      window.setTimeout(n,1e3/45)

                    },

            w=Math.random,y={x:null,y:null,max:2e4};m.id=l,m.style.cssText="position:fixed;top:0;left:0;z-index:"+d.z+";opacity:"+d.o,e("body")[0].appendChild(m),o(),window.onresize=o,

            window.onmousemove=function(n){

              n=n||window.event,y.x=n.clientX,y.y=n.clientY

            },

            window.onmouseout=function(){

              y.x=null,y.y=null

            };

    for(var s=[],f=0;d.n>f;f++){

      var h=w()*a,g=w()*c,v=2*w()-1,p=2*w()-1;s.push({x:h,y:g,xa:v,ya:p,max:6e3})

    }

    u=s.concat([y]),

            setTimeout(function(){i()},100)

  }();
</script>
