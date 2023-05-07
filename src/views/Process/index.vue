<template >
  <div>
    <bg/>
    <backHome/>
    <div class="myTitle">
      快 递 包 装 材 料 科 普
    </div>
    <div class="body">
      <ul>
        <li id="fi" @click="go('tape')"><img src="@/assets/imgs/knowle/胶带.png"></li>
        <li id="se" @click="go('bag')"><img src="@/assets/imgs/knowle/塑料包装袋.png"></li>
        <li id="tr" @click="go('box')"><img src="@/assets/imgs/knowle/纸箱子.png"></li>
        <li id="fo" @click="go('filler')"><img src="@/assets/imgs/knowle/气柱包.png"></li>
      </ul>
      <div class="all"><img src="@/assets/imgs/knowle/国际快递.png" alt=""></div>
    </div>
  </div>
</template>
<script>
import router from '@/router/index'
import backHome from "@/components/BackHome";
import bg from '@/components/knowle/bg'
export default {
components:{
  backHome,bg
},
  setup(){
  // const options={'Tape':'胶带','Bag':'塑料袋','Box':'纸箱','Filler':'缓冲气柱袋'}
  // const options=['Tape','Bag','Box','Filler']
  function go(target){
    router.push({
      path:'/process/'+target
    })
  }
  return{
    go,
  }
  }
}
</script>
<style scoped lang="less">
.myTitle{
  font-family: '华文中宋';
  font-weight: 600;
  font-size: 70px;
  color: #f1f1f1;
  padding-top: 2%;
  text-align: center;
}
//*{
//  border: 1px solid red ;
//}
.all{
  width:450px;
  height: 380px;
  color: #dddddd;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  overflow: hidden;
  img{
    width:450px;
  }
}
@keyframes floating {
   0% {
     transform: translate3d(0, 0%, 0);
   }
   25% {
     transform: translate3d(0, 5%, 0);
   }
   75% {
     transform: translate3d(0, -5%, 0);
   }
   100% {
     transform: translate3d(0, 0%, 0);
   }
 }

li img{
  width: 210px;
  height: 210px;
  transition: 0.8s;
  animation: floating 4s infinite;
  //animation: scale-breathe  3s infinite linear;
  position: absolute;
}
li img:hover{
  width: 250px;
  height: 250px;
}
li{
  width: 230px;
  height: 230px;
  display: inline-block;
  position: absolute;
  /*background-color: rgba(255,255,255,0.2);*/
}
#fi{
  bottom: 12%;
  left: 10%;
}
#se{
  top: 20%;
  left: 25%;
}
#tr{
  top: 20%;
  right: 25%;
}
#fo{
  bottom: 12%;
  right: 10%;
}
</style>
