import { Component, Input, OnInit } from '@angular/core';
import { SearchConfig } from '../../interfaces';
import { SmartTableService } from '../../services/smart-table.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Input() config!: SearchConfig;

  constructor(private smartTableService: SmartTableService) {}

  ngOnInit(): void {}

  onSearch(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    filterValue.trim().toLowerCase();
  }
}
