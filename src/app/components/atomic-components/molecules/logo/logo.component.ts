import { Component, Input, OnInit } from '@angular/core';
import { LOGO_TYPE } from '@components/enums';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  standalone: true,
})
export class LogoComponent implements OnInit {
  assetUrl = 'assets/img/';
  imageUrl: string = '';
  @Input() type: LOGO_TYPE = LOGO_TYPE.MAIN;

  constructor() {}

  ngOnInit(): void {
    this.imageUrl = `${this.assetUrl}/logo-${this.type}.png`;
  }
}
