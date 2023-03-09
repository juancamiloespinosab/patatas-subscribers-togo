import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NAV } from '@components/constants';
import { NAV_OPTION_TYPE } from '@components/enums';
import { Nav } from '@components/interfaces';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [CommonModule, SharedModule, RouterModule],
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
})
export class NavComponent implements OnInit {
  nav: Nav = NAV;

  NAV_OPTION_TYPE = NAV_OPTION_TYPE;

  constructor() {}

  ngOnInit(): void {}
}
