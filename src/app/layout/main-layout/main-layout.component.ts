import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '@components/atomic-components';


@Component({
  imports: [NavbarComponent],
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  standalone: true,
})
export class MainLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
