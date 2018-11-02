import {MatPaginatorIntl} from '@angular/material';

export class MyPaginator {
  length = 10;
  constructor(private matPaginatorIntl: MatPaginatorIntl) {

  }

  setPaginator(): MatPaginatorIntl {
    // 設定顯示笔數資訊文字
    this.matPaginatorIntl.getRangeLabel = (page: number, pageSize: number, length: number): string => {
      if (length === 0 || pageSize === 0) {
        return `共 ${Math.ceil(length / 10)} 页`; // ，当前第${page + 1}页
      }

      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;

      return `共 ${Math.ceil(length / 10)} 页`; // ，当前第${page + 1}页
    };

    // 設定其他顯示資訊文字
    this.matPaginatorIntl.itemsPerPageLabel = '每页条数：';
    this.matPaginatorIntl.nextPageLabel = '下一页';
    this.matPaginatorIntl.previousPageLabel = '上一页';
    this.matPaginatorIntl.firstPageLabel = '移到首页';
    this.matPaginatorIntl.lastPageLabel = '移到尾页';
    return this.matPaginatorIntl;
  }
}
