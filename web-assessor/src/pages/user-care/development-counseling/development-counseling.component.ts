import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'div.sub-page.counseling',
  templateUrl: './development-counseling.component.html',
  styleUrls: ['./development-counseling.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DevelopmentCounselingComponent implements OnInit {
  reports = [
    {
      title: '专家',
      subtitle: '更专业专业的测评',
      icon: '/assets/img/doctor.jpg',
      details: [
        {
          label: '宏伟专选',
        }, {
          label: '精准定位',
        }, {
          label: '细节分析',
        }, {
          label: '专业性高',
        },
      ],
    }, {
      title: '高级咨询师',
      subtitle: '更好帮你分析测评',
      icon: '/assets/img/doctor.jpg',
      details: [
        {
          label: '宏伟专选',
        }, {
          label: '精准定位',
        }, {
          label: '细节分析',
        }, {
          label: '专业性高',
        },
      ],
    }, {
      title: '咨询师',
      subtitle: '更专业专业的测评',
      icon: '/assets/img/doctor.jpg',
      details: [
        {
          label: '宏伟专选',
        }, {
          label: '精准定位',
        }, {
          label: '细节分析',
        }, {
          label: '专业性高',
        },
      ],
    },
  ];

  constructor(public _router: Router) {
  }

  ngOnInit() {
  }

  goExpertSelect() {
    this._router.navigate(['/user-care/development-counseling/expert-introduction']);
  }
}
