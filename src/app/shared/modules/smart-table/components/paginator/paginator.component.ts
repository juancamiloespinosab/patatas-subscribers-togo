import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GenericQueryParamsRequest } from '@core/services/api/interfaces/request/generic-query-params-request.interface';
import { PaginatorConfig } from '../../interfaces';
import { SmartTableService } from '../../services/smart-table.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, AfterViewInit {
  @Input() config!: PaginatorConfig;

  constructor(private smartTableService: SmartTableService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.smartTableService.setPaginatorValue(this.config);
  }

  onPageChanged(event: any) {
    this.smartTableService.setPaginatorValue(event);
    this.smartTableService.emitQuery();
  }
}
