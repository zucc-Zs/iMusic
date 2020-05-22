<template>
  <div id="main">
    <div id="demo">
  <el-table
    :data="tableData"
    style="width: 100%"
    height="766"
    :default-sort = "{prop: 'singerorder', order: 'ascending'}"
    @row-click="tosinger">
    <el-table-column
      label="歌手排名"
      prop="singerorder">
    </el-table-column>
    <el-table-column
      prop="singerpicurl"
      label="歌手照片"
      width="180"
      >
      <!--插入图片链接的代码-->
      <template slot-scope="scope" >
        <img  :src="scope.row.singerpicurl" alt="" style="width: 100px;height: 100px">
      </template>
    </el-table-column>
    <el-table-column
      label="歌手名字"
      prop="singername">
    </el-table-column>
    <el-table-column
      label="专辑总数"
      sortable
      prop="singeralbumsize">
    </el-table-column>
    <el-table-column
      label="歌曲总数"
      sortable
      prop="singermusicsize">
    </el-table-column>
  </el-table>
    </div>
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  #demo{
    background: transparent;
  }
  #main{
    background-image: url('../../assets/bg.jpg');
    background-size: 100% 100%
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
        }]
      }
    },
    mounted() {
      this.$axios.get("/singer")
        .then(response => {
          this.tableData = response.data.singer
          // console.log(this.tableData)
        })
    },
    methods: {
      tosinger(val) {
        let thisRowData = this;
        thisRowData = val;
        // console.log(thisRowData.singername);
        this.$store.commit('singerid', thisRowData.singerid);
        this.$store.commit('singername', thisRowData.singername);
        this.$store.commit('singermg1v1url', thisRowData.singermg1v1url);
        this.$store.commit('singername', thisRowData.singername);
        this.$store.commit('singerinformation', thisRowData.singerinformation);
        this.$store.commit('singerpicurl', thisRowData.singerpicurl);
        // console.log(this.$store.state.singerinformation)
        this.$router.replace({path: '/singerandsong'})
      }
    }
  }
</script>
<style>
</style>
