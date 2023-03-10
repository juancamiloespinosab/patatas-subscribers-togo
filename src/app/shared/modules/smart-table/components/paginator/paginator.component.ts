import { Component, Input, OnInit } from '@angular/core';
import { PaginatorConfig } from '../../interfaces';
import { SmartTableService } from '../../services/smart-table.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() config!: PaginatorConfig;

  constructor(private smartTableService: SmartTableService) { }

  ngOnInit(): void {
  }

  onPageChanged(event: any) {
    console.log(event);
    
  }

}
