<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 主页
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            
        </div>
    </div>
</template>

<script>
import { fetchData } from '../../api/index';
import Axios from 'axios';
import Vue from 'vue';
export default {
    data() {
        return {
        };
    },
    created() {
        this.getPage();
    },
    methods: {
        getPage() {},
    }
};
</script>

<style scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
