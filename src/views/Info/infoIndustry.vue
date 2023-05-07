<template >
  <div class="mybody">
    <businessData/>
    <areaData/>
    <MapData/>
    <platformData/>
    <provinceData/>
  </div>
</template>
<script>
import MapData from "@/components/myData/mapData";
import businessData from "@/components/myData/businessData";
import areaData from "@/components/myData/areaData";
import provinceData from "@/components/myData/provinceData";
import platformData from "@/components/myData/platformData";
import BackHome from "@/components/BackHome";

export default {
  components:{
    BackHome,MapData,businessData,areaData,provinceData,platformData
  }
}
</script>
<style scoped>
/**{*/
/*  border: 1px solid red;*/
/*}*/
.mybody{
  background-size: 100% 100%;
  background-attachment: fixed;
  /*height: 600px;*/
  width : 100%;
  height : 100%;
}
</style>
