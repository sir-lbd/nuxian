import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-psycholog-list',
  templateUrl: './psycholog-list.component.html',
  styleUrls: ['./psycholog-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PsychologListComponent implements OnInit {

  all = [
    {
      title: {
        text: '效率素质量表'
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
        data: [900, 1200, 1500, 1800, 2100],
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
        text: '效率素质量表'
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
        data: ['语言理解', '逻辑判断', '数量关系', '资料分析', '思维策略']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '对比',
        color: '#91b9fd',
        data: [900, 1200, 1500, 1800, 2100],
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
        text: '效率素质量表'
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
        data: ['语言理解', '逻辑判断', '数量关系', '资料分析', '思维策略']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: '对比',
        color: '#91b9fd',
        data: [900, 1200, 1500, 1800, 2100],
        type: 'line'
      }, {
        name: '受测人B',
        color: '#ffeaa9',
        data: [700, 500, 980, 1080, 1355],
        type: 'line'
      }]
    },
  ];
  isShow = true;
  num: number;
  se = -1;
  sel = false;
  constructor() {
  }

  ngOnInit() {

  }
  open(i){
    this.se = i
    this.sel = !this.sel;
  }
  addChart(i){
    this.num = i;
    console.log(this.all);

  }
}
