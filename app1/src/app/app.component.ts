import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // Fix for Angular 9 + single-spa. Remove when the issue is fixed: https://github.com/single-spa/single-spa-angular/issues/130
    const element = document.getElementById('main');
    element.innerHTML = "";
  }
}
