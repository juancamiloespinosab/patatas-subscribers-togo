import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(component: ComponentType<unknown>, data: any) {
    const dialogRef = this.dialog.open(component, data);
    return dialogRef.afterClosed();
  }
}
