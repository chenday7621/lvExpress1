<template>
      <div class="bg">
        <div class="title">
          <h1>最新消息</h1>
        </div>
        <select v-model="mySelect" @change="changeSelect">
          <option v-for="o in options" :value="o" :key="o">{{o}}</option>
        </select>
        <ul>
            <li v-for="item in list" href="item.href" :key="item.index" @click="go(item.href)">
              {{item.title}}
            </li>
        </ul>
      </div>
</template>

<script>
import PolicyJson from '@/assets/data/policyList.json'
import {  ref } from "vue";

export default {
  setup(){

    const plist=PolicyJson
    console.log(plist);

    let mySelect=ref('行业要闻')
    let list=ref(plist[0].data)
    console.log(list);
    const options=[]
    for(let o of plist){
      options.push(o.name)
    }
    console.log(options);

    function go(href){window.open(href,"_blank")}

    function changeSelect(){
      // console.log(mySelect.value);
      list.value=plist[options.indexOf(mySelect.value)].data
    }
    return{
      list,go,options,mySelect,changeSelect
    }
  }
}
</script>
<style scoped>
.bg{
  /*background-image: url("@/assets/imgs/线框.png") ;*/
  /*background-image: url("@/assets/imgs/plist.png");*/
  background: rgba(226, 231, 236, 0.5);
  /*background-repeat: no-repeat;*/
  /*background-size: 100% 100%;*/
  /*opacity: 0.8;*/
  width: 30%;
  /*margin: 0 auto;*/
  /*box-shadow: 0 0 15px 20px inset rgba(67, 172, 200, 0.2);*/

  /*text-align: center;*/
  overflow-y: scroll;
  height: 90vh;
  position: absolute;
  top: 5%;
  right: 7%;
}
h1{
  /*color: black;*/
  margin-top: 30px;
  margin-left: auto;
  color: rgba(0,0,0,0.7);
  font-family: 'Inter';
  font-size: 2.5em;
}
.title{
  text-align: center;
}
li{
  list-style: none;
  /*color: rgb(203, 243, 241);*/
  min-height: 35px;
  line-height: 30px;
  border-bottom: 1px solid rgba(133, 131, 131, 0.5);
  padding-left:15px ;

}
ul{
  padding-left: 0;
  /*text-align: center;*/
  padding-top: 10px;
}
li:hover{
  background-color: rgba(220, 220, 220,0.3);
  cursor: pointer;
}

/*定义滚动条高宽及背景
 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar
{
  width:8px;
  /*background-color:#F5F5F5;*/
}
/*定义滚动条轨道
 内阴影+圆角*/
::-webkit-scrollbar-track
{
  border-radius:10px;
}
/*定义滑块
 内阴影+圆角*/
::-webkit-scrollbar-thumb
{
  border-radius:10px;
  background-color:rgba(191, 192, 196,0.25);
}
::-webkit-scrollbar-thumb:hover
{
  background-color:rgba(191, 192, 196,0.4);
}

/*下拉框背景*/
select{
  background: rgba(0,0,0,0);
  width: 84px;
  height: 32px;
  font-size: 14px;
  color: black;
  text-align: center;
  border: 1px #817e7e solid;
  border-radius: 5px;

  position: absolute;
  right: 6%;
  top: 8%;
}
option{
  color: black;
  background: rgba(134, 156, 159, 0.2);
  line-height: 20px;
}
select:focus{
  border: 2px #ddd solid;
  box-shadow: 0 0 5px 1px #869c9f;
}
option:hover{
  background: #EBCCD1;
}
/**{*/
/*  border: 1px solid red;*/
/*}*/
</style>
