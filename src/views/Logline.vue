<template>
  <div class="logline">
    <div class="selectBox">
      <el-select placeholder="请选择" v-model="value" class="selectStyle">
        <el-option
          v-for="item in resposeService"
          :key="item.id"
          :label="item.serviceName"
          :value="item.serviceName"
        ></el-option>
      </el-select>
      <!-- <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input" style="width:130px"></el-input> -->
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        :picker-options="pickerOptions"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        align="right"
        class="selectDate"
      ></el-date-picker>
    <el-button native-type="submit" icon="el-icon-search" @click="handleClick" class="selectButton">搜索</el-button>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in resposeNode" :key="index" :label="item" :name="item"></el-tab-pane>
    </el-tabs>
    <el-table :data="resposeData" style="width: 100%">
      <el-table-column prop="id" label="id" width="180"></el-table-column>
      <el-table-column prop="serviceClass" label="serviceClass" width="180"></el-table-column>
      <el-table-column prop="serviceMethod" label="serviceMethod"></el-table-column>
      <el-table-column prop="serviceName" label="serviceName"></el-table-column>
      <el-table-column prop="serviceIp" label="serviceIp"></el-table-column>
      <el-table-column prop="serviceError" label="serviceError"></el-table-column>
      <el-table-column prop="createTime" label="createTime"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="this.currentPage"
        :page-sizes="[3, 5, 8, 10]"
        :page-size="3"
        layout="total, sizes, prev, pager, next, jumper"
        :total="count"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { log } from "@/api";

export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      log
        .queries({
          node: this.nodes,
          count: this.pageSize,
          serviceName: this.value,
          start: this.value1[0],
          end: this.value1[1],
          endId: this.resposeData[29].id
        })
        .then(data => {
          console.log("response", data);
          this.resposeData = data.data.data.list;
          // this.count = data.data.data.count;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      log
        .queries({
          node: this.nodes,
          count: this.pageSize,
          serviceName: this.value,
          start: this.value1[0],
          end: this.value1[1],
          endId: this.resposeData[29].id
        })
        .then(data => {
          console.log("response", data);
          this.resposeData = data.data.data.list;
          // this.count = data.data.data.count;
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleClick(node) {
      console.log("下拉框的值", this.value);
      console.log("respon", node);
      this.nodes = node.lable;
      log
        .queries({
          node: this.nodes,
          count: this.pageSize,
          serviceName: this.value,
          start: this.value1[0],
          end: this.value1[1]
        })
        .then(data => {
          console.log("response", data);
          this.resposeData = data.data.data.list;
          this.count = data.data.data.count;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    log
      .service()
      .then(data => {
        console.log("responseService", data);
        this.resposeService = data.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    log
      .node("house")
      .then(data => {
        console.log("responseNode", data);
        this.resposeNode = data.data.data;
      })
      .catch(error => {
        console.log(error);
      });
    this.handleClick("");
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      input: "",
      value: "",
      currentPage: 1,
      resposeData: "",
      resposeService: "",
      resposeNode: "",
      count: "",
      nodes: "192.168.1.192",
      pageSize: "3"
    };
  }
};
</script>
<style lang="css">
@import '../logline.css';

</style>

