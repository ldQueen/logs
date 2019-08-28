<template>
  <div class="home">
    <el-container>
  <el-header>日志管理</el-header>
  <el-container>
    <el-aside width="200px">
      <div>
        <i class="el-icon-s-home"></i>
        <router-link to="/">dashboard</router-link>
      </div>
      <div>
        <i class="el-icon-s-data"></i>
        <router-link to="/logline">日志列表</router-link>
      </div>
      </el-aside>
    <el-container>
      <el-main> <router-view/></el-main>
      <el-footer>@版权所有  myself</el-footer>
    </el-container>
  </el-container>
</el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
   
  }
}
</script>
<style>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 434px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 16px;
  }
</style>
