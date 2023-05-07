<template>
  <div id="fore2" style="width:62vw; height:75vh"></div>
  <div class="selecting">
    <select v-model="myOpt" @change="changeType">
      <option value="0">回测及预测数据：10个</option>
      <option value="1">回测及预测数据：15个</option>
    </select>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted,ref } from "vue";
export default {
  setup(){
    let myOpt=ref(0)
    //数据
    let fifData={}
    fifData.x=["2019-01","2019-02","2019-03","2019-04","2019-05","2019-06","2019-07","2019-08","2019-09","2019-10","2019-11","2019-12","2020-01","2020-02","2020-03","2020-04","2020-05","2020-06","2020-07","2020-08","2020-09","2020-10","2020-11","2020-12","2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10","2021-11","2021-12","2022-01","2022-02","2022-03","2022-04","2022-05","2022-06","2022-07","2022-08","2022-09","2022-10","2022-11","2022-12","2023-01","2023-02", '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']
    fifData.hui=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,"106.53","84.051","67.633","90.964","92.746","97.245","100.37","99.152","99.98","103.65","104.8","119.44","113.36","91.493","75.589"]
    fifData.huide2=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,"92.3738","69.227","50.7698","73.4922","74.5144","78.6272","81.4022","79.963","80.614","84.1616","85.2184","99.7914","93.6614","71.7578","55.8268"]
    fifData.huide1=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '7.0781', '7.4120', '8.4316', '8.7359', '9.1158', '9.3089', '9.4839', '9.5945', '9.6830', '9.7442', '9.7908', '9.8243', '9.8493', '9.8676', '9.8811']
    fifData.huipl1=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '14.1562', '14.8240', '16.8632', '17.4718', '18.2316', '18.6178', '18.9678', '19.1890', '19.3660', '19.4884', '19.5816', '19.6486', '19.6986', '19.7352', '19.7622']
    fifData.huipl2=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '7.0781', '7.4120', '8.4316', '8.7359', '9.1158', '9.3089', '9.4839', '9.5945', '9.6830', '9.7442', '9.7908', '9.8243', '9.8493', '9.8676', '9.8811']

    fifData.yu=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,"95.361","107.92","106.46","112.81","109.78","111.57","114.69","116.12","130.58","124.58","102.65","86.767","110.52","112.69","117.51"]
    fifData.yude2=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,"81.2048","93.096","89.5968","95.3382","91.5484","92.9522","95.7222","96.931","111.214","105.0916","83.0684","67.1184","90.8214","92.9548","97.7478"]
    fifData.yude1=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '7.0781', '7.4120', '8.4316', '8.7359', '9.1158', '9.3089', '9.4839', '9.5945', '9.6830', '9.7442', '9.7908', '9.8243', '9.8493', '9.8676', '9.8811']
    fifData.yupl1=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '14.1562', '14.8240', '16.8632', '17.4718', '18.2316', '18.6178', '18.9678', '19.1890', '19.3660', '19.4884', '19.5816', '19.6486', '19.6986', '19.7352', '19.7622']
    fifData.yupl2=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '7.0781', '7.4120', '8.4316', '8.7359', '9.1158', '9.3089', '9.4839', '9.5945', '9.6830', '9.7442', '9.7908', '9.8243', '9.8493', '9.8676', '9.8811']

    let tenData={}
    tenData.x=["2019-01","2019-02","2019-03","2019-04","2019-05","2019-06","2019-07","2019-08","2019-09","2019-10","2019-11","2019-12","2020-01","2020-02","2020-03","2020-04","2020-05","2020-06","2020-07","2020-08","2020-09","2020-10","2020-11","2020-12","2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10","2021-11","2021-12","2022-01","2022-02","2022-03","2022-04","2022-05","2022-06","2022-07","2022-08","2022-09","2022-10","2022-11","2022-12","2023-01","2023-02", '2', '3', '4', '5', '6', '7', '8', '9', '10']
    tenData.hui=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, "89.045","89.364","91.868","92.53","97.905","99.506","115.09","109.51","88.244","72.766"]
    tenData.huide2=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,"74.8888","74.54","75.0048","75.0582","79.6734","80.8882","96.1222","90.321","68.878","53.2776"]
    tenData.huide1=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '7.0781', '7.4120', '8.4316', '8.7359', '9.1158', '9.3089', '9.4839', '9.5945', '9.6830', '9.7442']
    tenData.huipl1=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '14.1562', '14.8240', '16.8632', '17.4718', '18.2316', '18.6178', '18.9678', '19.1890', '19.3660', '19.4884']
    tenData.huipl2=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '7.0781', '7.4120', '8.4316', '8.7359', '9.1158', '9.3089', '9.4839', '9.5945', '9.6830', '9.7442']

    tenData.yu=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,"95.361","107.92","106.46","112.81","109.78","111.57","114.69","116.12","130.58","124.58"]
    tenData.yude2=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined,"81.2048","93.096","89.5968","95.3382","91.5484","92.9522","95.7222","96.931","111.214","105.0916"]
    tenData.yude1=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '7.0781', '7.4120', '8.4316', '8.7359', '9.1158', '9.3089', '9.4839', '9.5945', '9.6830', '9.7442']
    tenData.yupl1=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '14.1562', '14.8240', '16.8632', '17.4718', '18.2316', '18.6178', '18.9678', '19.1890', '19.3660', '19.4884']
    tenData.yupl2=[undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, '7.0781', '7.4120', '8.4316', '8.7359', '9.1158', '9.3089', '9.4839', '9.5945', '9.6830', '9.7442']


    function changeType(){
      console.log(myOpt.value);
      let charts = echarts.init(document.querySelector(`#fore2`));
      let newData={}
      if(myOpt.value==0){
        newData=tenData
      }else{
        newData=fifData
      }
      console.log(newData);
      charts.setOption({
        xAxis: [
          {
            data:newData.x
          }
        ],
        series:[
          {
            name: '回测',
            data:newData.hui
          },
          {
            name:'回测-2个σ,95.5%',
            data:newData.huide2
          },
          {
            name:'回测-1个σ,68.3%',
            data:newData.huide1
          },
          {
            name:'回测+1个σ,68.3%',
            data:newData.huipl1
          },
          {
            name:'回测+2个σ,95.5%',
            data:newData.huipl2
          },
          {
            name: '预测',
            data:newData.yu
          },
          {
            name: '预测-2个σ,95.5%',
            data:newData.yude2
          },
          {
            name: '预测-1个σ,68.3%',
            data:newData.yude1
          },
          {
            name: '预测+1个σ,68.3%',
            data:newData.yupl1
          },
          {
            name: '预测+2个σ,95.5%',
            data:newData.yupl2
          }
        ]
      })
    }


    onMounted(()=>{
      initCharts()
    })
    function initCharts(){
      let charts = echarts.init(document.querySelector(`#fore2`));
      charts.setOption({
        title: {
          text: '快递包装全生命周期碳排放量预测',
          textStyle: {
            fontSize: 25,
            color: "#fff",
          },
          bottom: 10,
          left: "center",
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          formatter:function (params) {
            let htmlStr=params[0].name
            for(let i=0;i<params.length;i++){
              if(params[i].value==undefined){
                continue
              }else{
                htmlStr+='<div>'+params[i].marker+params[i].seriesName + '&nbsp&nbsp&nbsp<span style="font-weight: bolder;">'+params[i].value + '</span>'+'</div>'
              }
            }
            return htmlStr
            }
        },
        legend: {
          data: ['原始', '回测', '回测-2个σ,95.5%', '回测-1个σ,68.3%', '回测+1个σ,68.3%','回测+2个σ,95.5%','预测','预测-2个σ,95.5%', '预测-1个σ,68.3%', '预测+1个σ,68.3%','预测+2个σ,95.5%'],
          textStyle: {
            color:'rgb(166, 166, 166)'
          },
          width:700,
          left:'10%'
        },
        grid:{
          bottom: '20%'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data:tenData.x,
            axisLine: {
              lineStyle: {
                color: "#ccc"
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: "#ccc"
              }
            },
          }
        ],

        series: [
          {
            //原始
            name: '原始',
            type: 'line',
            lineStyle:{
              color:"rgb(162, 118, 189)"
            },

            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data: ["45.2","27.6","48.6","49.2","52.3","54.6","52.5","53","56","57.6","71.2","67.3","37.8","27.7","59.8","65","73.8","74.7","69.4","72.4","80.9","82.3","97.3","92.5","84.9","46.2","88.2","85","92.2","97.4","89.3","89.9","94.5","99.5","113.3","102.5","87.7","69.1","85.4","74.8","92.4","102.6","96.5","94.3","97.1","98.6","103.5","103.7","72.3","91.8"]
          },

          {
            //回测
            name: '回测',
            type: 'line',
            lineStyle:{
              color:"rgb( 40, 102, 156)"
            },
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data:tenData.hui
          },
          {
            //-2
            name: '回测-2个σ,95.5%',
            type: 'line',
            opacity: 0.8,
            stack: 'Total1',
            areaStyle: {
              color:"transparent"
            },
            lineStyle: {
              width: 0
            },
            showSymbol:false,
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            data:tenData.huide2
          },
          {
            //-1
            name: '回测-1个σ,68.3%',
            type: 'line',
            stack: 'Total1',
            areaStyle: {
              color:"rgb(188, 241, 255)"
            },
            lineStyle: {
              width: 0
            },
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data:tenData.huide1
          },
          {
            //+1
            name: '回测+1个σ,68.3%',
            type: 'line',
            stack: 'Total1',
            areaStyle: {
              color:"rgb(155, 234, 255)"
            },
            lineStyle: {
              width: 0
            },
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data:tenData.huipl1
          },
          {
            //+2
            name: '回测+2个σ,95.5%',
            type: 'line',
            stack: 'Total1',
            areaStyle: {
              color:"rgb(188, 241, 255)"
            },
            lineStyle: {
              width: 0
            },
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data:tenData.huipl2
          },

          {
            //预测
            name: '预测',
            type: 'line',
            lineStyle:{
              color:"rgb( 173, 30, 0)"
            },
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data:tenData.yu
          },
          {
            //-2
            name: '预测-2个σ,95.5%',
            type: 'line',
            opacity: 0.8,
            stack: 'Total',
            areaStyle: {
              color:"transparent"
            },
            lineStyle: {
              width: 0
            },
            showSymbol:false,
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            data:tenData.yude2
          },
          {
            //-1
            name: '预测-1个σ,68.3%',
            type: 'line',
            stack: 'Total',
            areaStyle: {
              color:"rgba(241, 157, 62,0.7)"
            },
            lineStyle: {
              width: 0
            },
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data:tenData.yude1
          },
          {
            //+1
            name: '预测+1个σ,68.3%',
            type: 'line',
            stack: 'Total',
            areaStyle: {
              color:"rgb(241, 157, 62)"
            },
            lineStyle: {
              width: 0
            },
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data:tenData.yupl1
          },
          {
            //+2
            name: '预测+2个σ,95.5%',
            type: 'line',
            stack: 'Total',
            areaStyle: {
              color:"rgba(241, 157, 62,0.7)"
            },
            lineStyle: {
              width: 0
            },
            // emphasis: {
            //   focus: 'series'
            // },
            emphasis: {
              focus: 'axis'
            },
            smooth: true,
            showSymbol:false,
            data:tenData.yupl2


          },
        ]
      });
      window.addEventListener("resize", function() {
        charts.resize();
      });
    }

    return{
      myOpt,changeType
    }
  }

}
/*
option = {
  title: {
    text: 'Stacked Area Chart'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['原始', '回测', '+1', '-1', '+2','-2']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data:["2019-01","2019-02","2019-03","2019-04","2019-05","2019-06","2019-07","2019-08","2019-09","2019-10","2019-11","2019-12","2020-01","2020-02","2020-03","2020-04","2020-05","2020-06","2020-07","2020-08","2020-09","2020-10","2020-11","2020-12","2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10","2021-11","2021-12","2022-01","2022-02","2022-03","2022-04","2022-05","2022-06","2022-07","2022-08","2022-09","2022-10","2022-11","2022-12","2023-01","2023-02"]
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      //原始
      name: '原始',
      type: 'line',
      // stack: 'Total',
      // areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      smooth: true,
      showSymbol:false,
      data: ["45.2","27.6","48.6","49.2","52.3","54.6","52.5","53","56","57.6","71.2","67.3","37.8","27.7","59.8","65","73.8","74.7","69.4","72.4","80.9","82.3","97.3","92.5","84.9","46.2","88.2","85","92.2","97.4","89.3","89.9","94.5","99.5","113.3","102.5","87.7","69.1","85.4","74.8","92.4","102.6","96.5","94.3","97.1","98.6","103.5","103.7","72.3","91.8"]
    },
    {
      //回测
      name: '回测',
      type: 'line',
      // stack: 'Total',
      // areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      smooth: true,
      showSymbol:false,
      data:[undefined,"0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","106.53","84.051","67.633","90.964","92.746","97.245","100.37","99.152","99.98","103.65","104.8","119.44","113.36","91.493","75.589"]
    },
    {
      //+1
      name: '+1',
      type: 'line',
      // stack: 'Total',
      // areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      smooth: true,
      showSymbol:false,
      data:[undefined,"0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","113.6081","91.463","76.0646","99.6999","101.8618","106.5539","109.8539","108.7465","109.663","113.3942","114.5908","129.2643","123.2093","101.3606","85.4701"]
    },
    {
      //-1
      name: '-1',
      type: 'line',
      // stack: 'Total',
      // areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      smooth: true,
      showSymbol:false,
      data: [undefined,"0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","99.4519","76.639","59.2014","82.2281","83.6302","87.9361","90.8861","89.5575","90.297","93.9058","95.0092","109.6157","103.5107","81.6254","65.7079"]
    },

     {
       //+2
      name: '+2',
      type: 'line',
      // stack: 'Total',
      // label: {
      //   show: true,
      //   position: 'top'
      // },
      // areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      smooth: true,
      showSymbol:false,
      data:[undefined,"0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","120.6862","98.875","84.4962","108.4358","110.9776","115.8628","119.3378","118.341","119.346","123.1384","124.3816","139.0886","133.0586","111.2282","95.3512"]

     },
       {
      //-2
      name: '-2',
      type: 'line',
      // stack: 'Total',
      // label: {
      //   show: true,
      //   position: 'top'
      // },
      showSymbol:false,
      // areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      smooth: true,
      data:[undefined,"0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","92.3738","69.227","50.7698","73.4922","74.5144","78.6272","81.4022","79.963","80.614","84.1616","85.2184","99.7914","93.6614","71.7578","55.8268"]
    },
  ]
};
*/
</script>

<style scoped lang="less">
#fore1{
  //padding-top: 8vh;
}
select{
  border: 3px solid rgb(94, 108, 129);
  background-color: transparent;
  color: #dddddd;
  font-size: 16px;
  width: 25vh;
  height: 6vh;
}
option{
  background-color: rgb(0,0,0,0);
}
.selecting{
  position: absolute;
  right: 18vw;
  top: 9vh;
}
</style>

