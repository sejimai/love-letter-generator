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
        <div class="msg-board">
          <div class="board-title">作者君的留言板</div>
          <div v-for="msg in myMsgList" :key="msg.index">
            <div class="msg-box">
              <div class="time">{{ msg.time }}</div>
              <div class="msg">{{ msg.msg }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="common-container">
      <div class="blue-container">
        <div class="tip-box">
          <div class="el-icon-chat-line-round">
            {{ msgListLength }} 条评论
          </div>
        </div>
      </div>
    </div>
    <div v-for="msg in msgList" :key="msg.index">
      <div class="common-container">
        <div class="blue-container">
          <div class="user-name">{{ msg.user }} 说道：</div>
          <div class="user-msg-time">
            {{ msg.time }}
          </div>
          <div class="user-msg">
            {{ msg.msg }}
          </div>
        </div>
      </div>
    </div>
    <div class="common-container">
      <div class="blue-container">
        <div class="tip-box">
          <div class="el-icon-edit">
            欢迎留言
          </div>
        </div>
      </div>
    </div>
    <div class="common-container">
      <div class="container">
        <div class="content-input">
          <el-input
            type="textarea"
            rows="7"
            placeholder="不说点什么吗？"
            maxlength="250"
            resize="none"
            v-model="content"
          ></el-input>
        </div>
        <button class="commit-content">发 表 评 论</button>
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
    return {
      myMsgList: [
        {
          index: 1,
          time: "2021.12.13",
          msg: "Hello, world",
        },
        {
          index: 2,
          time: "2021.12.12",
          msg: "Hello, world1",
        },
        {
          index: 3,
          time: "2021.12.11",
          msg: "Hello, world2",
        },
      ],
      msgList: [
        {
          index: 1,
          user: "user1",
          time: "2021.12.13",
          msg: "Hello, world!",
        },
      ],
      msgListLength: 0,
      content: "",
    };
  },
  created() {
    this.msgListLength = this.msgList.length;
    this.getPage();
  },
  methods: {
    getPage() {},
  },
};
</script>

<style scoped>
.msg-board {
  margin-left: 4%;
  margin-right: 4%;
}
.board-title {
  margin-left: 35%;
  margin-right: 35%;
  margin-bottom: 40px;
  position: relative;
  text-align: center;
  font-size: 30px;
}
.msg-box {
  margin-left: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(225, 225, 225);
  background: rgb(233, 200, 205);
  font-size: 20px;
  color: tomato;
}
.time {
  margin-top: 7px;
  margin-left: 4%;
}
.msg {
  margin-left: 4%;
  margin-bottom: 7px;
}
.tip-box {
  text-align: center;
  font-size: 22px;
  color: rgb(48, 116, 243);
}
.user-name {
  display: inline;
}
.user-msg-time {
  display: inline;
  float: right;
}
.user-msg {
  margin-top: 20px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.5);
}
.content-input {
  border: orangered solid 2px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.5);
}
.commit-content {
  margin-top: 15px;
  width: 100%;
  height: 40px;
  border: orangered solid 2px;
  background: rgba(255, 255, 255, 0);
  color: orangered;
}
</style>