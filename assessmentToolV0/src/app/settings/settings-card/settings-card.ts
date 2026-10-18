import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatAnchor } from '@angular/material/button';
import { Setting } from '../setting';
import { RouterLink } from '@angular/router';

@Component({
  imports: [MatCardModule, MatListModule, MatAnchor, RouterLink],
  selector: 'app-settings-card',
  styleUrl: './settings-card.scss',
  templateUrl: './settings-card.html',
})
export class SettingsCard {

  readonly setting = input.required<Setting>()
}
