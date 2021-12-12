<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <i class="el-icon-lx-cascades"></i> 留言板
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

<style>
</style>