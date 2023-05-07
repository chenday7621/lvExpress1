<template>
  <div class="main">
    <h1 class="title">快递生命周期流程中的碳排放</h1>
    <br>
    <span class="fispan">干线支线交通工具运输耗油产生的碳排放</span>
    <br>
    <span class="sespan">分拣设备等运作耗电产生的碳排放和中转袋产生的碳排放</span>
    <br>
    <span class="thspan">快递包装、交通工具运输耗油产生的碳排放</span>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="less">
.main{
  background-image: url("@/assets/imgs/中间.png");
  /*background-attachment: fixed;*/
  background-size: 100% 100%;
  width: 60vw;
  height: 90vh;
  color: #dddddd;
  text-align: center;
  margin: 0 auto;
  h1{
    font-weight: normal;
    position: relative;
    top: 7%;
  }
}
.title{
  font-family: 'Inter';
  font-size: 2em;
  margin-bottom: 9%;
}
span{
  display: inline-block;
  //width: 200px;
  text-align: center;
  margin-bottom: 15%;
  font-size: 1.2em;
}
.fispan{
  position: relative;
  right: 26%;
}
.sespan{
  position: relative;
  left: 26%;
}
.thspan{
  position: relative;
  right:26%;
}
</style>
