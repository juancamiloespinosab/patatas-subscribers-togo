import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '@components/organisms/navbar/navbar.component';

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
