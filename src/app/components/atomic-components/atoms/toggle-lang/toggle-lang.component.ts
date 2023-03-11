import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateService } from '@ngx-translate/core';

@Component({
  imports: [CommonModule, MatCardModule],
  selector: 'app-toggle-lang',
  templateUrl: './toggle-lang.component.html',
  styleUrls: ['./toggle-lang.component.scss'],
  standalone: true,
})
export class ToggleLangComponent implements OnInit {
  imageUrl!: string;
  imageBaseUrl = 'assets/img/';
  imageFormat = 'png';
  actualLang = '';
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.actualLang = this.translateService.getDefaultLang();
    this.initIamgeUrl();
  }

  initIamgeUrl() {
    this.imageUrl = `${this.imageBaseUrl}${this.actualLang}.${this.imageFormat}`;
  }

  toggleLang() {
    this.actualLang === 'es' ? this.setLang('en') : this.setLang('es');
    this.initIamgeUrl();
  }

  setLang(lang: string) {
    this.actualLang = lang;
    this.translateService.setDefaultLang(lang);
    this.imageUrl = `${this.imageBaseUrl}${this.actualLang}.${this.imageFormat}`;
  }
}
