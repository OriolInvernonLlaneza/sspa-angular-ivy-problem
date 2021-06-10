import { Component, OnInit, Inject, HostListener, ElementRef } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';

@Component({
  selector: 'nav-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {
  isExpanded = false;
  languages: string[];
  language: string;

  constructor(@Inject(I18NEXT_SERVICE) private i18NextService: ITranslationService, private eRef: ElementRef) {
    this.i18NextService.events.initialized.subscribe((e) => {
      if (e) {
        this.updateState(this.i18NextService.language);
      }
    });

    this.languages = [
      'es',
      'en'
    ];
  }

  ngOnInit() {
  }

  changeLanguage(lang: string) {
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang).then(x => {
        this.updateState(lang);
        document.location.reload();
      });
    }
  }

  private updateState(lang: string) {
    this.language = lang;
  }
}
