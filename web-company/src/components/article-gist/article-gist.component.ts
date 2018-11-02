import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

export interface ArticleGist {
  title?: string;
  subtitle?: string;
  cover?: string;
  author?: string;
  time?: string;
  gist?: string;
  url?: string;
}

@Component({
  selector: 'article-gist',
  templateUrl: './article-gist.component.html',
  styleUrls: ['./article-gist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleGistComponent implements OnInit {

  @Input() data: ArticleGist;

  constructor(protected router: Router) {
  }

  ngOnInit() {
  }

  navTo(url) {
    if (url) this.router.navigate([url]);
  }

}
