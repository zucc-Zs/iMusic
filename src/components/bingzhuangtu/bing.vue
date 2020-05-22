<template>
  <section class="chart-container">
    <el-row>
      <el-col :span="12">
        <div id="chartPie" style="width:100%; height:400px;"></div>
      </el-col>
    </el-row>
  </section>
</template>
<script>
  import echarts from 'echarts'

  export default {
    data() {
      return {
        chartPie: null
      }
    },
    methods: {
      drawPieChart() {
        this.chartPie = echarts.init(document.getElementById('chartPie'));
        this.chartPie.setOption({
          title: {
            text: 'Pie Chart',
            subtext: '纯属虚构',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        });
      },
      drawCharts() {
        this.drawPieChart()
      }
    },

    mounted: function () {
      this.drawCharts()
    }
    // updated: function () {
    //     this.drawCharts()
    // }
  }
</script>

<style scoped>
  .chart-container {
    width: 100%;
    float: left;
  }
  .el-col {
    padding: 30px 20px;
  }
</style>
