import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '@components/atomic-components';
import { SharedModule } from '@shared/shared.module';

@Component({
  imports: [SharedModule, LogoComponent],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
