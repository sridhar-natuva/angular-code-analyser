import { Component } from '@angular/core';

const defaults = {

};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  readOnly = false;
  mode = 'javascript';
  
  options: any = {
    lineNumbers: true,
    
    mode: this.mode,
    styleActiveLine: true,
    matchBrackets: true,

    
  };
  defaults = defaults;

  changeMode() {
    this.options = {
      ...this.options,
      mode: this.mode,
    };
  }

  handleChange($event) {
    //console.log('ngModelChange', $event);
  }

  clear() {
    this.defaults[this.mode] = '';
  }
}
