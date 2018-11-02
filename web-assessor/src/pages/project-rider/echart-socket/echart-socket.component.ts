import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-echart-socket',
  templateUrl: './echart-socket.component.html',
  styleUrls: ['./echart-socket.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EchartSocketComponent implements OnInit {
  act = 0;
  userName = ''
  name = [
    {
      user: '姚明',
    },
    {
      user: '校长',
    }
  ]
  butt= [
    {
      title: '能力量表',
      url:''
    },
    {
      title: '心理量表',
      url:''
    },
    {
      title: '动机量表',
      url:''
    },
    {
      title: '16pf',
      url:''
    },
    {
      title: '综合评价',
      url:''
    }
  ];
  options: any;
  public option = {
    title: {
      text: '效率素质企业能力管理量表'
    },
    tooltip: {
      trigger: 'axis'
    },
    // legend: {
    //   data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
    // },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['语言理解','逻辑判断','逻辑判断','逻辑判断','逻辑判断','逻辑判断','逻辑判断']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name:'邮件营销',
        type:'line',
        stack: '总量',
        data:[120, 132, 101, 134, 90, 230, 210]
      },
      {
        name:'联盟广告',
        type:'line',
        stack: '总量',
        data:[220, 182, 191, 234, 290, 330, 310]
      },
      // {
      //   name:'视频广告',
      //   type:'line',
      //   stack: '总量',
      //   data:[150, 232, 201, 154, 190, 330, 410]
      // },
      {
        name:'直接访问',
        type:'line',
        stack: '总量',
        data:[320, 332, 301, 334, 390, 330, 320]
      },
      {
        name:'搜索引擎',
        type:'line',
        stack: '总量',
        data:[820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };
  constructor() { }

  ngOnInit() {
    this.options = [
      {
        title: '试试'
      }
    ]
  }
  goDetail(i){
    this.act = i;
  }

}
