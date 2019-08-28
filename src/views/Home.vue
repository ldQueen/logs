<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="系统"
        width="180">
      </el-table-column>
      <el-table-column
        prop="number"
        label="个数">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            number: '1'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            number: '2'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            number: '3'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            number: '4'
          }]
        }
      }
    }
  </script>


