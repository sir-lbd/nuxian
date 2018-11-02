import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-power-soc',
  templateUrl: './power-soc.component.html',
  styleUrls: ['./power-soc.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PowerSocComponent implements OnInit {
  all = [
    {
      title: {
        text: '效率素质报告',
        zlevel: '1'

      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        orient: 'horizontal',
        top: '10%',
        data: [
          '对比', '受测人A'
        ]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['语言理解', '逻辑判断', '数量关系', '资料分析', '思维策略']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '对比',
        color: '#91b9fd',
        data: [900, 1200, 800, 1000, 1200],
        type: 'line'
      }, {
        name: '受测人A',
        color: '#ffeaa9',
        data: [900, 1000, 980, 1000, 1335],
        type: 'line'
      }]
    },
    {
      title: {
        text: '动力素质报告'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        orient: 'horizontal',
        top: '10%',
        data: [
          '对比', '受测人B'
        ]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['权力动机', '回避失败', '争取成功', '风险决策', '亲和动机']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '对比',
        color: '#91b9fd',
        data: [800, 900, 500, 800, 1000],
        type: 'line'
      }, {
        name: '受测人B',
        color: '#ffeaa9',
        data: [700, 500, 980, 1080, 1355],
        type: 'line'
      }]
    },
    {
      title: {
        text: '风格素质报告'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        orient: 'horizontal',
        top: '10%',
        data: [
          '对比', '受测人C'
        ]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['艺术A', '事物C', '经营E', '研究I', '技能R','社交S']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '对比',
        color: '#91b9fd',
        data: [900, 1200, 500, 1400, 400,2200],
        type: 'line'
      }, {
        name: '受测人C',
        color: '#ffeaa9',
        data: [1000, 1500, 700, 800, 1385,1500],
        type: 'line'
      }]
    },
    {
      title: {
        text: '认知行为风格'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        orient: 'horizontal',
        top: '10%',
        data: [
          '对比', '受测人C'
        ]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['内向型', '感觉型', '思考型', '判断型', '情绪稳定']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '对比',
        color: '#91b9fd',
        data: [900, 1200, 1500, 1800,2200],
        type: 'line'
      }, {
        name: '受测人C',
        color: '#ffeaa9',
        data: [1000, 1500, 700, 800,1500],
        type: 'line'
      }]
    },
  ];
  chart = document.getElementsByClassName('chart');
  isShow = true;
  num: number;
  se = -1;
  sel = false;
  constructor() {
  }

  ngOnInit() {
    this.addChart(0);
  }
  open(i){
    this.se = i
    this.sel = !this.sel;
  }
  addChart(i){
    this.num = i;
    console.log("all",this.all)
  }
  select(event){
    console.log(event);
  }
}
