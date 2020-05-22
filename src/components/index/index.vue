<template>
    <div id="main">
      <h1 id="hello">🎵QQ音乐</h1>
      <button class="button" style="margin-left: 427px" v-on:click="toyonghu"><span>用户分析</span></button>
      <button class="button" style="margin-left: 170px" v-on:click="tosinger"><span>百强歌手</span></button>
    </div>
</template>

<script>
    export default {
      methods: {
        toyonghu() {
          this.$router.replace({path: '/dashboard'})
        },
        tosinger() {
          this.$router.replace({path: '/singer'})
        }
      }
    }
</script>

<style scoped>
  #main{
    position: relative;
    width: 100%;
    height: 100%;
    background: url('../../assets/bg.jpg');
    /*background-size: 100% 100%*/
  }
  #hello{
    font-size: 150px;
    color: white;
    text-align: center;
    height: 400px;
    line-height: 400px;
  }
  .button {
    display: inline-block;
    border-radius: 4px;
    background-color: cornflowerblue;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 28px;
    padding: 20px;
    width: 200px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
  }

  .button span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
  }

  .button span:after {
    content: '»';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  .button:hover span {
    padding-right: 25px;
  }

  .button:hover span:after {
    opacity: 1;
    right: 0;
  }
</style>
