import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, ErrorHandler, LOCALE_ID, APP_INITIALIZER } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// i18n
import { I18NextModule, I18NEXT_SERVICE, ITranslationService } from "angular-i18next";
import { LanguageSelectorComponent } from "./language-selector/language-selector.component";
import { AppRoutingModule } from "./app-routing.module";

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LanguageSelectorComponent,
    HeaderComponent,
    EmptyRouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    I18NextModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  entryComponents: [],
  providers: [
    I18N_PROVIDERS
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
