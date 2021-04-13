<template>
  <div class="home-panel">

      <el-menu :default-active="activeIndex"
      class="el-menu-demo" mode="horizontal" @select="handleSelect"
      text-color='#ffffff' active-text-color='#ffffff' background-color="#17c4c5">
        <el-menu-item index="1"><router-link to="/">展示画廊</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">上传图片</el-menu-item>
          <el-menu-item index="2-2"></el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">商务合作</a></el-menu-item>
      </el-menu>
    <Gallery />
          <quick-menu :menu-count=count :icon-class=icons :menu-url-list=list
      :background-color=backgroundColor :color=color :position=position></quick-menu>
  </div>
</template>

<script>
import Gallery from '@/components/Gallery.vue';
import quickMenu from 'vue-quick-menu';

export default {
  name: 'home',
  components: {
    Gallery,
    quickMenu,
  },
  data() {
    return {
      image: 'https://www.freepik.com/free-photo/perspective-exterior-nobody-empty-box_1123169.htm#page=1&query=empty%20background&position=15',
      count: 4,
      icons: ['fa fa-image', 'fa fa-coffee', 'fa fa-code', 'fa fa-envelope'],
      list: [{ isLink: false }, { isLink: true, url: '/doo' }, { isLink: true, url: '/foo' }, { isLink: false }],
      backgroundColor: '#17c4c5',
      color: '#ffffff',
      position: 'bottom-left',
      isOpenNewTab: false,
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key === 1) {
        this.$router.push({
          path: '/',
        });
      }
    },
  },
};
</script>

<style>
 .slide {
      width: 36px;
      height: 30px;
      left: 36px;
      bottom: 36px;
    }

</style>
