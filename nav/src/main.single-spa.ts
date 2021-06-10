import { NgZone } from '@angular/core';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { Router, NavigationStart } from '@angular/router';
import i18next from 'i18next';
import resources from 'src/locales';

const domElementGetter = () => document.getElementById('navbar');

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);

    i18next.loadNamespaces('nav').then(() => {
      i18next.addResourceBundle('en', 'nav', resources.en, true, true);
      i18next.addResourceBundle('es', 'nav', resources.es, true, true);
    });    
    
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  domElementGetter,
  template: '<nav-root />',
  Router,
  NgZone,
  AnimationEngine,
  NavigationStart
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
