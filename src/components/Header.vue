<template>
  <el-header>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    ><el-menu-item index="1"><el-avatar :size="50" :src="url"></el-avatar></el-menu-item>
      
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">分类</el-menu-item>
      <el-menu-item index="3">标签</el-menu-item>
      <el-menu-item index="4">关于我</el-menu-item>
      <el-menu-item index="5"
        ><el-input
          v-model="input"
          placeholder="请输入搜索内容"
          prefix-icon="el-icon-search"
          clearable
        ></el-input
      ></el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      input: "",
      url: "logo.png",
    };
  },
};
</script>

<style scoped>
</style>