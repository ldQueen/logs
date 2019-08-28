<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <!-- 循环出表头，用英文的逗号拆分字串 -->
          <th>服务</th>
          <th>时间</th>
          <th>错误信息</th>
        </tr>
      </thead>
      <tbody v-for="(item,index) in resposeData" :key="index">
        <!-- 循环出有多少行数据，即 list 中有多少条数据，得到 list 中的每个元素 -->
        <tr>
          <!-- 循环取到元素的每个属性，并展示 -->
          <td v-for="(val,index) in item" :key="index">{{val}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
