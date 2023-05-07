<template >
    <div id="main" :class="{'firstc':num===3,'secondc':num!=3}">
      <div class="title">
      <span>{{content}}</span>
    </div>
      <div class="btn">
        <BackHome/>
      </div>

      <ul>
        <li @click="change(0)" :class="{active:num===0}">
          <el-popover
            placement="bottom"
            :width="100"
            trigger="hover"
            popper-class="popoverDiv"
            color="red"
          >
            <div class="popovercon">快递行业发展</div>
            <template #reference>
              <svg t="1682562338769" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2649" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"><path d="M96 128C43 128 0 171 0 224c0 30.2 14.2 58.6 38.4 76.8l435.2 326.4c22.8 17 54 17 76.8 0l435.2-326.4c24.2-18.2 38.4-46.6 38.4-76.8 0-53-43-96-96-96H96zM0 352v416c0 70.6 57.4 128 128 128h768c70.6 0 128-57.4 128-128V352L588.8 678.4a127.8 127.8 0 0 1-153.6 0L0 352z" p-id="2650"></path></svg></template>
          </el-popover>
          </li>
        <li @click="change(1)" :class="{active:num===1}">
          <el-popover
            placement="bottom"
            :width="100"
            trigger="hover"
          >
            <div class="popovercon">快递包装回收现状</div>
            <template #reference>
              <svg t="1682562361979" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2863" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"><path d="M4 754.8l86 148.6A102.7 102.7 0 0 0 181.8 960h570.8l-118.4-205.2zM1003.6 700L671.2 118.6A102.76 102.76 0 0 0 580.4 64h-176.8l514.6 895.2 81.4-141c3.8-6.4 42-59.4 4-118.2zM550 609l-231-400L88 609z" p-id="2864" ></path></svg>
            </template>
          </el-popover></li>
        <li @click="change(4)" :class="{active:num===4}">
          <el-popover
            placement="bottom"
            :width="100"
            trigger="hover"
          >
            <div class="popovercon">碳排放分析</div>
            <template #reference>
              <svg t="1682562408825" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3279" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"><path d="M895.914667 128v85.333333a298.666667 298.666667 0 0 1-298.666667 298.666667h-42.666667v42.666667h213.333334v298.666666a85.333333 85.333333 0 0 1-85.333334 85.333334h-341.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-298.666666h213.333333v-128a298.666667 298.666667 0 0 1 298.666667-298.666667h128z m-661.333334-42.666667a319.573333 319.573333 0 0 1 261.290667 135.210667A339.712 339.712 0 0 0 426.581333 426.666667v42.666666h-21.333333a320 320 0 0 1-320-320V85.333333h149.333333z" p-id="3280" ></path></svg></template>
          </el-popover>
        </li>
        <li @click="change(7)" :class="{active:num===7}">
          <el-popover
            placement="bottom"
            :width="100"
            trigger="hover"
          >
            <div class="popovercon">预测</div>
            <template #reference>
              <svg t="1682562384243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3073" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="35"><path d="M128 128c0-35.4-28.6-64-64-64S0 92.6 0 128v672c0 88.4 71.6 160 160 160h800c35.4 0 64-28.6 64-64s-28.6-64-64-64H160c-17.6 0-32-14.4-32-32V128z m813.2 173.2c25-25 25-65.6 0-90.6s-65.6-25-90.6 0L640 421.4l-114.8-114.8c-25-25-65.6-25-90.6 0l-224 224c-25 25-25 65.6 0 90.6s65.6 25 90.6 0l178.8-178.6 114.8 114.8c25 25 65.6 25 90.6 0l256-256z" p-id="3074"></path></svg></template>
          </el-popover></li>
      </ul>
      <div v-if="num==0">
        <info-industry/>
      </div>
      <div v-else-if="num===1||num===2||num===3">
        <info-recycle/>
      </div>
      <div v-else-if="num===4||num===5||num===6">
        <info-carbon/>
      </div>
      <div v-else>
        <info-forecast/>
      </div>

    </div>
</template>
<script>
import BackHome from "@/components/BackHome";
import {ref} from "vue";
import { useStore } from "vuex"
import infoIndustry from "@/views/Info/infoIndustry";
import infoCarbon from "@/views/Info/infoCarbon";
import infoRecycle from "@/views/Info/infoRecycle";
import infoForecast from "@/views/Info/infoForecast";
export default {
  components:{
    BackHome,infoIndustry,infoCarbon,infoForecast,infoRecycle
  },
  setup(){
    let num=ref(0)
    const store=useStore()
    function change(n){
      num.value=n
      store.commit('setCount',n)
    }

    return{
      num,change
    }
  },
  computed:{
    content(){
      const spans=['快递行业发展数据可视化', '快递包装回收现状数据可视化','快递包装全生命周期碳排放分析','数据预测分析']
      // let content=spans[computed(()=>store.state.count)]
      let storeNum=this.$store.state.count
      if (storeNum>=4){
        if (storeNum<=6){
          storeNum=2
        }else{
          storeNum=3
        }
      }
      return spans[storeNum]
    }
  }
}
</script>
<style>
.popovercon{
  text-align: center;
}
</style>
<style scoped lang="less">

#main{
  position : absolute;
  width : 100%;
  height : 100%;
}
.firstc{
  background-image: url("@/assets/imgs/forbg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.secondc{
  background-image: url("@/assets/imgs/bg2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
.title{
  color: aliceblue;
  height: 65px;
  line-height: 65px;
  text-align: center;
position: relative;
  font-weight: 400;
  font-size: 2rem;
  background-image: url("@/assets/imgs/顶部栏.png");
  background-size:  100% auto;
  background-attachment: fixed;
}
.btn{
  position: fixed;
  top: 10px;
}
ul{
  color: rgb(181, 196, 217);
  display: flex;
  flex-direction: row;
  list-style: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 1.1em;
  text-align: center;
  align-items: center;
  padding: 0;
  margin: 0;
  position: absolute;
  right: 5%;
  top: 1%;
  li{
    display: inline-block;
    margin-left: 3vw;
    height: 6vh;
    &:hover{
      color:white;
      cursor: pointer;
      svg{
        fill:rgb(118, 172, 185);
      }
    }
    svg{
      fill: rgba(211, 229, 239, 0.7);
    }
  }
}
.active{
  color: white;
  border-bottom: 3px solid #659198;
  font-weight: 400;
  svg{
    fill:rgb(118, 172, 185);
  }
}
*{
  //border: 1px solid red;
  padding: 0;
  margin: 0;
}
</style>
