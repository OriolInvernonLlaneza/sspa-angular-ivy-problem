import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'nav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  ngOnDestroy() {
    // Fix for Angular 9 + single-spa. Remove when the issue is fixed: https://github.com/single-spa/single-spa-angular/issues/130
    const element = document.getElementById('navbar');
    element.innerHTML = "";
  }
}
