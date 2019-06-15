import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer mb-4 mt-5">
    Angular {{ version }}
    <br>

   
    <a href="https://github.com/sridhar-natuva/angular-code-analyser">View Source</a>
  </footer>
  `,
  styles: [
    `
      .footer {
        line-height: 2;
        text-align: center;
        font-size: 69%;
        color: #999;
        font-family: var(--font-family-monospace);
      }
    `,
  ],
})
export class FooterComponent {
  version = VERSION.full;
}
