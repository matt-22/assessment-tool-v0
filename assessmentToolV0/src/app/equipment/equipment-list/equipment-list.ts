import { Component, inject, OnInit, signal } from '@angular/core';
import { MatTableModule, MatTable, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef } from '@angular/material/table';
import { Equipment } from '../equipment';
import { ɵEmptyOutletComponent } from '@angular/router';
import { EquipmentService } from '../../services/equipment-service';

@Component({
  imports: [MatTable, ɵEmptyOutletComponent, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatCell, MatCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef],
  selector: 'app-equipment-list',
  styleUrl: './equipment-list.scss',
  templateUrl: './equipment-list.html',
})
export class EquipmentList implements OnInit {

  private equipmentService = inject(EquipmentService)

  equipment = signal<Equipment[]>([])

  ngOnInit(): void {
    this.loadEquipment()
  }

  loadEquipment(){
    this.equipmentService.getEquipment().subscribe(data =>{
      this.equipment.set(data)
    })
  }

  displayedColumns: string[] = ['id', 'name']
}
