import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '@components/atomic-components';

@Component({
  imports: [NavbarComponent],
  selector: 'app-void-navbar-layout',
  templateUrl: './void-navbar-layout.component.html',
  styleUrls: ['./void-navbar-layout.component.scss'],
  standalone: true
})
export class VoidNavbarLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
