<template>
  <div>
    <bg/>
    <div id="top">
      <back-know/>
      <span>包装快递材料——塑料袋</span>
      <div id="nav">
        <ul>
          <li @click="change(1)"><img :src="require(`@/assets/imgs/knowle/${options[0]}.png`)" alt=""></li>
          <li @click="change(2)"><img :src="require(`@/assets/imgs/knowle/${options[1]}.png`)" alt=""></li>
          <li @click="change(3)"><img :src="require(`@/assets/imgs/knowle/${options[2]}.png`)" alt=""></li>
        </ul>
      </div>
    </div>
    <div v-if="num==1">
      <bagIndex/>
      <div id="fot">
        <nextpage @click="change(2)"/>
      </div>
    </div>
    <div v-else-if="num==2">
      <bagUpper/>
      <div id="fot">
        <prepage @click="change(1)"/>
        <nextpage @click="change(3)"/>
      </div>
    </div>
    <div v-else="num==3">
      <bagLower/>
      <div id="fot">
        <prepage @click="change(2)"/>
      </div>
    </div>
  </div>
</template>

<script>
import {ref,reactive} from 'vue'
import backKnow from "@/components/knowle/backKnow";
import nextpage from "@/components/knowle/nextpage";
import bg from '@/components/knowle/bg'
import Prepage from "@/components/knowle/prepage";
import bagIndex from "@/components/knowle/bag/bagIndex";
import bagUpper from "@/components/knowle/bag/bagUpper";
import bagLower from "@/components/knowle/bag/bagLower";
export default {
  name: "index",
  components:{
    Prepage,
    backKnow,nextpage,bg,
    bagIndex,bagLower,bagUpper
  },
  setup(){
    let num=ref(1)
    const options=reactive(['selected','unselected','unselected'])
    function change(n){
      num.value=n
      console.log(num.value);
      for (let i=0;i<3;i++){
        options[i]='unselected'
      }
      options[num.value-1]='selected'
    }
    return{
      num,change,options
    }
  }
};
</script>

<style scoped lang="less">

li{
  list-style: none;
  img{
    width: 35px;
    height: 35px;
  }
}
ul{
  display: flex;
  flex-direction: row;
}

#mid{
  display: flex;
  flex-direction: row;
}
*{
  //border: 1px solid red;
  margin: 0;
  padding: 0;
  color: #dddddd;
}
#nav{
  display: inline-block;
}
#left{
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 40px 30px;
  img{
    width: 320px;
    height: 380px;
  }
  .ch{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
  }
  .en{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
  }
}
#right{
  margin: 40px 100px;
  .title{
    width: 200px;
    height: 70px;
    background-image: url("@/assets/imgs/knowle/titlebg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    //background-attachment: fixed;
    color: #3d3d3d;
    font-size: 30px;
    line-height: 70px;
    text-align: center;
  }
  .content{
    background: rgba(217, 217, 217,0.3);
    height: 380px;
    padding: 40px 80px;
    display: flex;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 44px;

    text-indent: 2em;
  }
}
#top{
  padding-top: 30px;
  height: 50px;
  #nav{
    position: fixed;
    right: 5%;
  }
  span{
    position: fixed;
    right: 14%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 550;
    font-size: 25px;
    line-height: 45px;
  }

}
</style>
