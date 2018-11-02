import {Injectable} from '@angular/core';
import {Http} from '../http/http';
import {ParsingOptions, WorkBook} from 'xlsx';
import * as xlsx from 'xlsx';

const BOOK_TYPES = ['xlsx', 'xlsm', 'xlsb', 'xls', 'xla', 'biff8', 'biff5', 'biff2', 'xlml',
  'ods', 'fods', 'csv', 'txt', 'sylk', 'html', 'dif', 'rtf', 'prn', 'eth'];

export interface ImportJsonOptions<T> extends ParsingOptions {
  each?: (data: T) => T;
  headers?: string[];
}

export interface XLSXSheet {
  name?: string;
  data: any[];
}

export class XLSXFile {
  protected _workBook: WorkBook;
  protected _options: ImportJsonOptions<any>;

  get workBook() {
    if (!this._workBook) this._workBook = xlsx.utils.book_new();
    return this._workBook;
  }

  set workBook(b) {
    this._workBook = b;
  }

  constructor(public name: string = new Date().getTime() + '.xlsx', protected sheets: XLSXSheet[] = []) {
    this.syncToBook();
  }

  /**
   * 自动合并重复项
   */
  setSheet(sheet: XLSXSheet, skipSync = false) {
    let hasSheet = false;
    this.sheets = this.sheets.map(s => {
      hasSheet = hasSheet || (s.name === sheet.name);
      return hasSheet ? sheet : s;
    });
    if (!hasSheet) this.sheets.push(sheet);
    skipSync || this.syncToBook();
  }

  getSheet(name: string) {
    return this.sheets.filter(s => s.name === name);
  }
  getAllSheet() {
    return this.sheets;
  }

  setAllSheet(sheets: XLSXSheet) {
    this.sheets.forEach(s => this.setSheet(s, true));
    this.syncToBook();
  }

  hasSheet(name: string) {
    return !!this.getSheet(name);
  }


  setWorkBook(book: WorkBook, options: ImportJsonOptions<any> = <any> {}) {
    this._workBook = book;
    this._options = options;
  }

  syncToBook() {
    // reset
    this._workBook.SheetNames = [];
    this._workBook.Sheets = {};

    this.sheets.forEach(s => {
      this._options && this._options.each && (s.data = s.data.map(item => this._options.each(item)));
      this._workBook.SheetNames.push(s.name);
      this._workBook.Sheets[s.name] = xlsx.utils.json_to_sheet(s.data, this._options);
    });
  }
}

export class XLSXInstance {
  protected _file = new XLSXFile();

  constructor(protected http: Http) {
  }

  private _getExcelByInput() {
    return new Promise<File>(resolve => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel';
      input.onchange = () => resolve(input.files[0]);
      input.click();
    });
  }

  private _getExcelByHttp(url: string) {
    return this.http.call(url, null, {
      responseType: 'arraybuffer'
    });
  }

  getData(name: string) {
    const sheet = this._file.workBook.Sheets[name];
    return sheet ? xlsx.utils.sheet_to_json(sheet, {
      blankrows: true,
      raw: true,
    }) : null;
  }

  /**
   * 导入分以下几种情况
   * 1. data = ArrayBuffer / Blob / File 这三种直接读;
   * 2. data = string(url) 以http开头的，或者带有/的，以网络文件的形式获取并读取;
   * 3. data: XLSXFile;
   * 4. data = 空，弹出文件选择框
   * @param data
   * @param {ImportJsonOptions} options
   */
  import<D = any>(data?: any, options: ImportJsonOptions<D> = <any> {}) {
    return new Promise<WorkBook>((resolve, reject) => {
      if (data) {
        if (typeof data === 'string') {
          if (data.includes('http') && data.includes('/')) {
            this._getExcelByHttp(data).then(arrayBuffer => {
              options.type = 'buffer';
              this._file.workBook = xlsx.read(arrayBuffer, options);
              resolve(this._file.workBook);
            });
            // 直接返回
            return;
          } else {
            options.type = 'string';
          }
        } else if (data instanceof XLSXFile) {
          this._file = data;
          return resolve(this._file.workBook);
        } else {
          [
            {type: 'buffer', class: ArrayBuffer},
            {type: 'binary', class: Blob},
            {type: 'file', class: File}
          ].forEach(item => {
            if (data instanceof item.class) {
              options.type = <any> item.type;
            }
          });
        }
        this._file.workBook = xlsx.read(data, options);
        resolve(this._file.workBook);
      } else {
        this._getExcelByInput().then(file => {
          options.type = 'file';
          this._file = new XLSXFile(file.name);
          const fileReader = new FileReader();
          fileReader.readAsArrayBuffer(file);
          fileReader.onloadend = e => {
            options.type = 'buffer';
            this._file.workBook = xlsx.read(fileReader.result, options);
            resolve(this._file.workBook);
          };
        });
      }
    });
  }

  export() {
    let hasType = false;
    BOOK_TYPES.forEach(t => {
      if (!hasType) hasType = this._file.name.includes(t);
    });
    if (!hasType) this._file.name += '.xlsx';

    xlsx.writeFile(this._file.workBook, this._file.name, {
      type: 'file',
      bookType: 'xlsx',
      Props: {
        Author: 'https://www.github.com/eusen',
        Company: 'https://www.github.com/eusen',
        LastAuthor: 'https://www.github.com/eusen'
      }
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class XLSXFactory {
  constructor(protected _http: Http) {
  }

  build() {
    return new XLSXInstance(this._http);
  }
}
