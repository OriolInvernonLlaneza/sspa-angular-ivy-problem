
import { NgZone } from '@angular/core';
 // import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';
import { AppModule } from './app/app.module';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import i18next from 'i18next';
import resources from 'src/locales';

const domElementGetter = () => document.getElementById('main');

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);

    i18next.loadNamespaces('template').then(() => {
      i18next.addResourceBundle('en', 'template', resources.en, true, true);
      i18next.addResourceBundle('es', 'template', resources.es, true, true);
    });

    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<app1-root />',
  Router,
  NavigationStart,
  NgZone,
  domElementGetter,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
