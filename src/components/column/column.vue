<!--&lt;!&ndash; 饼状图 &ndash;&gt;-->
<!--<style lang="stylus" scoped>-->
<!--  .column-->
<!--    height 1000px-->
<!--    background url('../../assets/bg.jpg') no-repeat-->
<!--    background-size 100% 100%-->
<!--    .main-->
<!--      width 100%-->
<!--      height calc(100% - 100px)-->
<!--      margin-top -15px-->
<!--</style>-->


<!--<template>-->
<!--  <div class="column">-->
<!--    <v-header :name="name" :legendArr="legendArr" :myChart="myChart"></v-header>-->
<!--    <v-filter :myChart="myChart" v-if="myChart._dom"></v-filter>-->
<!--    <div class="main"></div>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--  import echarts from 'echarts'-->
<!--  import header from 'components/header/header'-->
<!--  import filter from 'components/filter/filter'-->

<!--  export default {-->
<!--    data() {-->
<!--      return {-->
<!--        // myChart: null,-->
<!--        chartPie: null,-->
<!--        legendArr: [],-->
<!--        color: this.$store.state.color,-->
<!--        styleArr: [],-->
<!--        myChart: {},-->
<!--        name: '星座'-->
<!--      }-->
<!--    },-->
<!--    methods: {-->
<!--      _init() {-->
<!--        this.legendArr = this.myChart.getOption().series-->
<!--        this.legendArr.forEach((data) => {-->
<!--          data.selected = true;-->
<!--        })-->
<!--        this.$root.charts.push(this.myChart)-->
<!--        window.addEventListener('resize', function () {-->
<!--          this.myChart.resize()-->
<!--        }.bind(this))-->
<!--      },-->
<!--      drawPieChart() {-->
<!--        this.myChart = echarts.init(document.querySelector('.column .main'));-->
<!--        // this.chartPie = echarts.init(document.getElementById('chartPie'));-->
<!--        this.myChart.setOption({-->
<!--          title: {-->
<!--            text: 'Pie Chart',-->
<!--            subtext: '纯属虚构',-->
<!--            x: 'center'-->
<!--          },-->
<!--          tooltip: {-->
<!--            trigger: 'item',-->
<!--            formatter: "{a} <br/>{b} : {c} ({d}%)"-->
<!--          },-->
<!--          legend: {-->
<!--            orient: 'vertical',-->
<!--            left: 'left',-->
<!--            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']-->
<!--          },-->
<!--          series: [-->
<!--            {-->
<!--              name: '访问来源',-->
<!--              type: 'pie',-->
<!--              radius: '55%',-->
<!--              center: ['50%', '60%'],-->
<!--              data: [-->
<!--                { value: 335, name: '直接访问' },-->
<!--                { value: 310, name: '邮件营销' },-->
<!--                { value: 234, name: '联盟广告' },-->
<!--                { value: 135, name: '视频广告' },-->
<!--                { value: 1548, name: '搜索引擎' }-->
<!--              ],-->
<!--              itemStyle: {-->
<!--                emphasis: {-->
<!--                  shadowBlur: 10,-->
<!--                  shadowOffsetX: 0,-->
<!--                  shadowColor: 'rgba(0, 0, 0, 0.5)'-->
<!--                }-->
<!--              }-->
<!--            }-->
<!--          ]-->
<!--        });-->
<!--      },-->
<!--      drawCharts() {-->
<!--        this.drawPieChart()-->
<!--      }-->
<!--    },-->
<!--    mounted: function () {-->
<!--      this.drawCharts()-->
<!--    },-->
<!--    components: {-->
<!--      'v-header': header,-->
<!--      'v-filter': filter-->
<!--    }-->
<!--  }-->

<!--</script>-->




<template>
  <div>
    <div style="height: 40px; font-size: xx-large; color: white; line-height: 40px; margin-left: 20px; margin-top: 10px">
      <h1 style="float: left">星座</h1>
    </div>
  <section class="chart-container">
    <el-row>
      <el-col :span="12">
        <div id="chartPie" style="width:100%; height:400px;margin-top: 20px"></div>
      </el-col>
    </el-row>
  </section>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import header from 'components/header/header'
  import filter from 'components/filter/filter'
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
            // text: 'Pie Chart',
            subtext: '',
            x: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['♈️️白羊座', '♉️金牛座', '♊️双子座', '♋️巨蟹座', '♌️狮子座', '♍️处女座', '♎️天秤座', '♏️天蝎座', '♐️射手座', '♑️摩羯座', '♒️水瓶座', '♓️双鱼座', '默认设置']
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              data: [
                { value: 534, name: '♈️️白羊座' },
                { value: 196, name: '♉️金牛座' },
                { value: 319, name: '♊️双子座' },
                { value: 225, name: '♋️巨蟹座' },
                { value: 204, name: '♌️狮子座' },
                { value: 363, name: '♍️处女座' },
                { value: 275, name: '♎️天秤座' },
                { value: 283, name: '♏️天蝎座' },
                { value: 373, name: '♐️射手座' },
                { value: 722, name: '♑️摩羯座' },
                { value: 12355, name: '默认设置' },
                { value: 326, name: '♒️水瓶座' },
                { value: 285, name: '♓️双鱼座' }
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
  .column{
    height: 1000px;
    background: url('../../assets/bg.jpg') no-repeat;
    background-size: 100% 100%
  }
  .main{
    width: 100%;
    height: calc(100% - 100px);
    margin-top: -15px
  }

</style>
