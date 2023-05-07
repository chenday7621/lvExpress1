<template>
  <div id="fore3" style="width:62vw; height:75vh"></div>
</template>
<script>
import * as echarts from 'echarts'
import { onMounted } from "vue";
export default {
  setup(){
    onMounted(()=>{
      initCharts()
    })
    function initCharts(){
      let charts = echarts.init(document.querySelector(`#fore3`));
      charts.setOption({
        color: [ 'rgb(236, 199, 3)', 'rgb(147, 191, 108)', 'rgb(232, 181, 57)', 'rgb(229, 90, 68)','rgb(108, 156, 205)'],
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
          }
        },
        legend: {
          data: [ '生产', '再生产', '填埋','焚烧','原材料'],
          textStyle: {
            color:'rgb(166, 166, 166)'
          },
          // left:'45%',
          top:'13%',
        },
        grid:{
          bottom: '20%'
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2010','2012','2015','2018','2021','2023E','2025E'],
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            },
          }
        ],
        series: [
          {
            name: '生产',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(236, 199, 3)'
                },
                {
                  offset: 1,
                  color: 'rgba(236, 199, 3)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [ 0.005,0.006,0.008,0.009,0.01,0.012,0.015]

          },
          {
            name: '再生产',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(147, 191, 108)'
                },
                {
                  offset: 1,
                  color: 'rgba(147, 191, 108)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [ -0.005,-0.007,-0.01,-0.017,-0.022,-0.03,-0.04]
          },
          {
            name: '填埋',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(232, 181, 57)'
                },
                {
                  offset: 1,
                  color: 'rgba(232, 181, 57)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data:  [0.005,0.006,0.006,0.007,0.008,0.009,0.01]
          },
          {
            name: '焚烧',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(229, 90, 68)'
                },
                {
                  offset: 1,
                  color: 'rgba(229, 90, 68)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data:  [0.007,0.008,0.009,0.015,0.02,0.04,0.06]
          }, {
            name: '原材料',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(108, 156, 205)'
                },
                {
                  offset: 1,
                  color: 'rgba(108, 156, 205)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: [0.009,0.015,0.045,0.1,0.19,0.29,0.46]
          },
        ]
      })
      window.addEventListener("resize", function() {
        charts.resize();
      });
    }
  }

}

</script>

<style scoped lang="less">
#fore1{
  //padding-top: 8vh;
}
</style>

