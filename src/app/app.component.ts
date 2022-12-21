import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'smartcapital';
  constructor(translate: TranslateService) {
    //translate.addLangs(['en', 'fr', 'ar']);
    translate.setDefaultLang('en');
    const lang = localStorage.getItem('lang') || 'en';
    translate.use(lang);
    document.documentElement.lang = lang;
  }
}
