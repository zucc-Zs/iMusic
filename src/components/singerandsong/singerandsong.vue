<template>
  <div id="main" style="background-color: white">
    <div style="height: 400px; width: 100%; padding-top: 50px; border-radius: 20px; margin-left: 100px">
      <div style="height:100%;width: 30%; float:left; border-radius: 20px">
        <img id="picture" width="90%" height="90%" style="border-radius: 20px">
      </div>
      <div style="height:100%;width: 70%; float:left">
        <div style="height: 40%; width: 100%">
          <h1 id="name" style="padding-left:50px; font-size: 100px; padding-top: 20px; color: white"></h1>
        </div>
        <div id="introduction" style="height: 60%; width: 80%; padding-left: 50px;word-wrap: break-word; font-size: x-large; line-height: 200%; color: white">
        </div>
      </div>
    </div>
    <div style="width:100%; height: 100%; margin-left: 6.7%">
      <el-table
        :data="tableData"
        style="width: 90%; border-radius: 20px"
        height="766">
<!--        <el-table-column-->
<!--          label="歌曲id"-->
<!--          prop="songid">-->
<!--        </el-table-column>-->
        <el-table-column
          label="歌曲名"
          prop="songname">
        </el-table-column>
        <el-table-column
          label="专辑名"
          prop="zhuanji">
        </el-table-column>
        <el-table-column
          label="歌手"
          prop="singername">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
    import qs from 'qs'
    export default {
      name: "singerandsong",
      data() {
        return {
          tableData: [],
          singerId: ''
        }
      },
      mounted() {
        // console.log(this.$store.state.singermg1v1url),
        document.getElementById("picture").src = this.$store.state.singerpicurl
        document.getElementById("name").innerHTML = this.$store.state.singername
        document.getElementById("introduction").innerHTML = this.$store.state.singerinformation
        this.singerId = this.$store.state.singerid
        var ca = qs.stringify({singerId: this.singerId})
        console.log(ca)
        this.$axios({
          method: 'post',
          url: '/singerSong',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: ca
        }).then(response => {
          // console.log(response.data.singerSong)
          this.tableData = response.data.singerSong
          // console.log(this.tableData)
        })
      }
    }
</script>

<style scoped>
  #main{
    background-color: red;
  }
</style>
