import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-overview-list',
  templateUrl: './overview-list.component.html',
  styleUrls: ['./overview-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OverviewListComponent implements OnInit {
  all = [
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
        text: '认知行为风格'
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
        name: '受测人C',
        color: '#ffeaa9',
        data: [1000, 1500, 700, 800, 1385],
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
        name: '受测人C',
        color: '#ffeaa9',
        data: [1000, 1500, 700, 800, 1385],
        type: 'line'
      }]
    },

  ];
  report = [
    {
      title: '针对组织贡献',
      content: ` '很多人常常有这样的情绪，总是觉得组织或者上司亏待了他们
        '或者是怀才不遇，其实这是个人的偏见。
        '一位知识工作者，他的“表现”是由，他个人的贡献而定的。'
       `,
      children: [
        '已完成',
        '编辑中',
        '未完成',
      ]
    },
    {
      title: '领导素质',
      content: ` '很多人常常有这样的情绪，总是觉得组织或者上司亏待了他们
        '或者是怀才不遇，其实这是个人的偏见。
        '一位知识工作者，他的“表现”是由，他个人的贡献而定的。'`,
      children: [
        '已完成',
        '编辑中',
        '未完成',
      ]
    },{
      title: '潜在缺陷',
      content: ` '很多人常常有这样的情绪，总是觉得组织或者上司亏待了他们
        '一位知识工作者，他的“表现”是由，他个人的贡献而定的。'
       `,
      children: [
        '已完成',
        '编辑中',
        '未完成',
      ]
    },
    {
      title: '偏好环境',
      content: ` '很多人常常有这样的情绪，总是觉得组织或者上司亏待了他们
        '或者是怀才不遇，其实这是个人的偏见。
       `,
      children: [
        '已完成',
        '编辑中',
        '未完成',
      ]
    }
  ];
  isShow = true;
  num: number;
  se = -1;
  sel = false;

  constructor(protected routerInfo: ActivatedRoute) {
  }

  ngOnInit() {
    this.rightClick();
    console.log('report', this.report)
  }

  rep() {
    console.log(this.report)
  }

  rightClick() {
    let right = document.oncontextmenu;

  }

  open(i) {
    this.se = i
    this.sel = !this.sel;
  }

  addChart(i) {
    this.num = i;
    console.log(this.all);

  }
}
