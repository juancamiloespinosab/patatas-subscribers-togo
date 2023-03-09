import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '@components/atomic-components';
import { NavComponent } from '@components/atomic-components/molecules/nav/nav.component';
import { LOGO_TYPE } from '@components/enums';

import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [SharedModule, LogoComponent, NavComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
})
export class NavbarComponent implements OnInit {
  logoType: LOGO_TYPE = LOGO_TYPE.WHITE

  constructor() {}

  ngOnInit(): void {}
}
