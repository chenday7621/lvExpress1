<template>
  <div @click="backKnow" id="svg">
    <svg t="1682271688249" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4556" width="50" height="50">
      <path d="M482.7 249.9V106.1c0-37.4-45.3-56.2-71.7-29.7L140.3 347c-16.4 16.4-16.4 43 0 59.4L410.9 677c26.5 26.5 71.7 7.7 71.7-29.7v-155c96.1-0.3 271.5-10.7 271.5 227.7 0 118.1-92.8 216.8-216 239.6 198.1-24.4 326-236 326-361.9 0.1-292.6-309.4-346.3-381.4-347.8z"  p-id="4557"></path>
    </svg>
    <span>返回</span>
  </div>
</template>

<script>
export default {
  name: "backKnow",
  setup() {
    function backKnow() {
      window.location.href='https://lvexpress-3g35kdpa4e1e5443-1316996710.ap-shanghai.app.tcloudbase.com'
    }

    return {
      backKnow
    };
  }
};
</script>

<style scoped lang="less">
//*{
//  border: 1px solid red;
//}
div {
  position: absolute;
  width: 130px;
  left: 1vw;
  top: 1vh;
  display: flex;
  align-items: center;
  font-family: 'Inter';
  font-weight: 600;
  font-size: 30px;
  color: #f1f1f1;
  span {
    line-height: 45px;
    margin-left: 10px;
    font-size: 25px;
  }
  svg{
    fill:#ffffff;
  }
}

#svg:hover {
  cursor: pointer;
  color: rgb(118, 172, 185);
  svg{
    fill:rgb(118, 172, 185);
  }
}
</style>
