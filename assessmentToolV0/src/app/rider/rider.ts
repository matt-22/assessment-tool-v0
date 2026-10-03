import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { provideNativeDateAdapter, MatOption, MatOptgroup } from '@angular/material/core';

@Component({
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatOption, MatOptgroup],
  providers: [provideNativeDateAdapter()],
  selector: 'app-rider',
  styleUrl: './rider.scss',
  templateUrl: './rider.html',
})
export class Rider {}
