<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 情书生成器
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="common-container">
      <div class="container">
        <div class="msg-module">
          <a>内容一</a>
        </div>
      </div>
    </div>
    <div class="common-container">
      <div class="container">
        <div class="msg-module">
          <a>Love Letter</a>
        </div>
        <div class="letter-paper">
          <div class="letter-title">Love Letter</div>
          <div class="paragraph">
            <span>It Is Love Letter Content</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchData } from "../../api/index";
import Axios from "axios";
import Vue from "vue";
export default {
  data() {
    return {};
  },
  created() {
    this.getPage();
  },
  methods: {
    getPage() {},
  },
};
</script>

<style scoped>
.letter-paper {
  margin-left: 10%;
  margin-right: 10%;
  background-image: url(../../assets/picture/letter_paper.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
}

.letter-title {
  color: white;
  top: 40px;
  margin-left: 35%;
  margin-right: 35%;
  position: relative;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  background-color: skyblue;
}

.paragraph {
  margin-top: 150px;
  margin-left: 100px;
  margin-right: 100px;
  font-size: 24px;
  font-weight: 400;
  padding-bottom: 650px;
}
</style>
