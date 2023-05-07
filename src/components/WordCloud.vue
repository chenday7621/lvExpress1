<template>
      <!-- 异步组件加载完成之后展示的控件 -->
      <div class="main">
        <section class="cloud-bed">
          <div class="cloud-box">
      <span
        v-for="(item, index) in dataList"
        :key="index"
        @click="getDataInfo(item)"
        :style="{color:item.color,background:item.bgColor}"
      >
        {{ item.name }}
      </span>
          </div>
        </section>
      </div>
</template>

<script>
import wordsJSON from "@/assets/data/wordsData.json"
import { onUnmounted, onMounted,onUpdated ,nextTick} from "vue";
export default {
  name: "word-cloud",
  setup() {
    onMounted (()=>{
      nextTick(()=>{
        radius = document.querySelector('.cloud-box').offsetWidth / 2
        initWordCloud()
      })
    })
    function updated (){
      let angleBasicA;
      let angleBasicB;

      if (active) {
        angleBasicA = (-Math.min(Math.max(-mouseY, -200 ), 200) / radius) * tspeed;
        angleBasicB = (Math.min(Math.max(-mouseX, -200 ), 200) / radius) * tspeed;
      } else {
        angleBasicA = lasta * 0.98;
        angleBasicB = lastb * 0.98;
      }
      sineCosine(angleBasicA, angleBasicB, 0);
      for(let j = 0; j < tagAttrList.length; j++) {
        let rx1 = tagAttrList[j].cx;
        let ry1 = tagAttrList[j].cy * cosA + tagAttrList[j].cz * (-sinA);
        let rz1 = tagAttrList[j].cy * sinA + tagAttrList[j].cz * cosA;

        let rx2 = rx1 * cosB + rz1 * sinB;
        let ry2 = ry1;
        let rz2 = rx1 * (-sinB) + rz1 * cosB;

        let rx3 = rx2 * cosC + ry2 * (-sinC);
        let ry3 = rx2 * sinC + ry2 * cosC;
        let rz3 = rz2;
        tagAttrList[j].cx = rx3;
        tagAttrList[j].cy = ry3;
        tagAttrList[j].cz = rz3;

        let per = 350 / (350 + rz3);

        tagAttrList[j].x = rx3 * per - 2;
        tagAttrList[j].y = ry3 * per;
        tagAttrList[j].scale = per;
        tagAttrList[j].alpha = per;

        tagAttrList[j].alpha = (tagAttrList[j].alpha - 0.6) * (10/6);
      }
      doPosition();
      depthSort();
    }

    let timer= 50 // 球体转动速率
    let radius= 0 // 词云球体面积大小
    let dtr= Math.PI/180 //鼠标滑过球体转动速度
    let active= false // 默认加载是否开启转动
    let lasta= 0 // 上下转动
    let lastb= 0.5 // 左右转动
    let distr= true
    let tspeed=0 // 鼠标移动上去时球体转动
    let  mouseX= 0
    let mouseY= 0
    let  tagAttrList= []
    let tagContent= null
    let cloudContent= null
    let sinA= ''
    let cosA= ''
    let sinB= ''
    let cosB= ''
    let sinC= ''
    let cosC =''
    let dataList=wordsJSON
    onUnmounted (()=>{
      clearInterval(timer)
    })
    // 获取点击文本信息
    function getDataInfo (item) {
      console.log(item, 'item')
    }
    function initWordCloud () {
      cloudContent = document.querySelector('.cloud-box');
      tagContent = cloudContent.getElementsByTagName('span');
      for (let i = 0; i < tagContent.length; i++) {
        let tagObj = {};
        tagObj.offsetWidth = tagContent[i].offsetWidth;
        tagObj.offsetHeight = tagContent[i].offsetHeight;
        tagAttrList.push(tagObj);
      }
      sineCosine(0, 0, 0);
      positionAll();
      cloudContent.onmouseover = () => {
        active=true;
      };
      cloudContent.onmouseout = () => {
        active=false;
      };
      cloudContent.onmousemove = (ev) => {
        let oEvent = window.event || ev;
        mouseX = oEvent.clientX - (cloudContent.offsetLeft + cloudContent.offsetWidth/2);
        mouseY = oEvent.clientY - (cloudContent.offsetTop + cloudContent.offsetHeight/2);
        mouseX/= 5;
        mouseY/= 5;
      };
      setInterval(updated, timer);
    }
    function positionAll () {
      let phi = 0;
      let theta = 0;
      let max = tagAttrList.length;
      let aTmp = [];
      let oFragment = document.createDocumentFragment();
      //随机排序
      for (let i=0; i < tagContent.length; i++) {
        aTmp.push(tagContent[i]);
      }
      aTmp.sort(() => {
        return Math.random() < 0.5 ? 1 : -1;
      });
      for (let i = 0; i < aTmp.length; i++) {
        oFragment.appendChild(aTmp[i]);
      }
      cloudContent.appendChild(oFragment);
      for(let i = 1; i < max + 1; i++){
        if (distr) {
          phi = Math.acos(-1 + (2 * i - 1) / max);
          theta = Math.sqrt(max * Math.PI) * phi;
        } else {
          phi = Math.random() * (Math.PI);
          theta = Math.random() * (2 * Math.PI);
        }
        //坐标变换
        tagAttrList[i-1].cx = radius * Math.cos(theta) * Math.sin(phi);
        tagAttrList[i-1].cy = radius * Math.sin(theta) * Math.sin(phi);
        tagAttrList[i-1].cz = radius * Math.cos(phi);
        tagContent[i-1].style.left = tagAttrList[i-1].cx + cloudContent.offsetWidth / 2 - tagAttrList[i-1].offsetWidth / 2 + 'px';
        tagContent[i-1].style.top = tagAttrList[i-1].cy + cloudContent.offsetHeight / 2 - tagAttrList[i-1].offsetHeight / 2 + 'px';
      }
    }

    function doPosition() {
      let len = cloudContent.offsetWidth/2;
      let height = cloudContent.offsetHeight/2;
      for (let i=0;i < tagAttrList.length;i++) {
        tagContent[i].style.left = tagAttrList[i].cx + len - tagAttrList[i].offsetWidth/2 + 'px';
        tagContent[i].style.top = tagAttrList[i].cy + height - tagAttrList[i].offsetHeight/2 + 'px';
        // this.tagContent[i].style.fontSize = Math.ceil(12 * this.tagAttrList[i].scale/2) + 8 + 'px';
        tagContent[i].style.fontSize = Math.ceil(12 * tagAttrList[i].scale/2) +2 + 'px';
        tagContent[i].style.filter = "alpha(opacity="+100 * tagAttrList[i].alpha+")";
        tagContent[i].style.opacity = tagAttrList[i].alpha;
      }
    }
    function depthSort(){
      let aTmp = [];
      for (let i = 0; i < tagContent.length; i++) {
        aTmp.push(tagContent[i]);
      }
      aTmp.sort((item1, item2) => item2.cz - item1.cz);
      for (let i = 0; i < aTmp.length; i++) {
        aTmp[i].style.zIndex=i;
      }
    }
    function sineCosine (a, b, c) {
      sinA = Math.sin(a * dtr);
      cosA = Math.cos(a * dtr);
      sinB = Math.sin(b * dtr);
      cosB = Math.cos(b * dtr);
      sinC = Math.sin(c * dtr);
      cosC = Math.cos(c * dtr);
    }

    return {
      dataList,getDataInfo
    }
  }
}
</script>


<style scoped>
.cloud-bed {
  width: 35vw;
  height: 35vw;
  /*background: rgba(226, 231, 236, 0.5);*/

}
.main{
  background: rgba(226, 231, 236, 0.5);
  width: 48vw;
  height: 43vw;
  position: absolute;
  left: 7%;
  top: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13%;
}
.cloud-box{
  position:relative;
  /*margin:20px auto 0px;*/
  width: 100%;
  height: 100%;
  background:	#00000000;
}
.cloud-box span{
  position: absolute;
  padding: 3px 6px;
  top: 0px;
  font-weight: bold;
  text-decoration:none;
  left:0px;
  background-image: linear-gradient(to bottom, red, #fff);
  background-clip: text;
  color: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  /* line-height: 50px;
  overflow:hidden;
  white-space: nowrap;
  text-overflow: ellipsis; */
}
/**{*/
/*  border: 1px solid red;*/
/*}*/
</style>
