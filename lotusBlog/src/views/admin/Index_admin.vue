<template>
    <div id="" style="width: 100%; height: 100%; margin: 0 0 0 0;">
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="200px" style="height:100%;background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>相册管理</template>
                        <el-menu-item-group>
                            <template slot="title">相册类别管理</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="1-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                        <el-menu-item-group>
                            <template slot="title">博文管理</template>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="用户管理">
                            <el-menu-item index="2-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="3-3">选项3</el-menu-item>
                        </el-menu-item-group>
                        <el-submenu index="3-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>莲·阿修贝尔</span>
                </el-header>

                <el-main style="height: 100%; padding: 0 0 0 0;">
                    <el-table :data="tableData">
                        <el-table-column prop="id" label="编号" width="140">
                        </el-table-column>
                        <el-table-column prop="title" label="标题" width="120">
                        </el-table-column>
                        <el-table-column prop="author" label="编号" width="140">
                        </el-table-column>
                        <el-table-column prop="createdDate" label="创建时间" width="160">
                        </el-table-column>
                        <el-table-column prop="updatedDate" label="修改时间" width="160">
                        </el-table-column>
                        <el-table-column prop="blogArticle" label="内容">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style>
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
    export default {
        data() {

            return {
                tableData: [
                    {
                        id: 1,
                        title: 'hh',
                        blogArticle: 'hhhh'
                    }
                ]
            }
        },
        created() {
            const _this = this;
            axios.get('http://localhost:8081/Blog/findAll').then(function (resp) {
                console.log(resp.data)
                _this.tableData = resp.data
            })
        }
    };
</script>
