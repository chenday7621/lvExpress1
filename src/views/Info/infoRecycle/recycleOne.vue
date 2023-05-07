<template>
  <div class="all">
    <div class="infoleft">
      <leftTop />
      <left-bot />
    </div>
    <bot-ani/>
    <div class="infomid">
      <div class="title">
        <img src="@/assets/imgs/zuo.png" alt="" class="left">
        <h1>快递包装组成材料分布</h1>
        <img src="@/assets/imgs/you.png" alt="" class="right">
      </div>
      <topie />
      <midpie />
      <botpie />
    </div>
    <div class="inforight">
      <right-top />
      <right-bot />
    </div>

  </div>
</template>

<script>
import midpie from "@/components/myRecycle/midPie/midpie";
import topie from "@/components/myRecycle/midPie/topie";
import botpie from "@/components/myRecycle/midPie/botpie";
import leftTop from "@/components/myRecycle/onePage/leftTop";
import leftBot from "@/components/myRecycle/onePage/leftBot";
import rightTop from "@/components/myRecycle/onePage/rightTop";
import rightBot from "@/components/myRecycle/onePage/rightBot";
import BotAni from "@/components/myRecycle/onePage/botAni";
export default {
  components: {
    BotAni,
    midpie,
    leftTop, leftBot, topie,
    rightBot, rightTop, botpie
  }
};
</script>

<style scoped>
* {
  color: white;
  /*border: 1px solid red;*/
}
.left{
  display: inline-block;
  position: relative;
}
.right{
  position: relative;
  display: inline-block;
}
h1{
  font-weight: 550;
  font-size: 2.4vh;
  display: inline-block;
}
.all {
  display: flex;
  flex-direction: row;
}

.infomid, .inforight, .infoleft {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.infomid {
  width: 32.5vw;
  padding-top: 2vh;
  text-align: center;
}

.inforight {
  width: 33.5vw;
}

.infoleft {
  width: 33.5vw;
}
</style>
