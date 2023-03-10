import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SmartTableService } from '@shared/modules/smart-table/services/smart-table.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private a: SmartTableService) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
  }
}
