import { Component, signal } from '@angular/core';
import { SettingsCard } from '../settings-card/settings-card';
import { Setting } from '../setting';


@Component({
  imports: [SettingsCard],
  selector: 'app-settings-grid',
  styleUrl: './settings-grid.scss',
  templateUrl: './settings-grid.html',
})
export class SettingsGrid {
  protected readonly settings = signal<Setting[]>([
    {
      id: 1,
      name: 'Assessments',
      description: 'Create, view and manage Assessments',
      buttonNav: '/assessments'
    },
    {
      id: 2,
      name: 'Venues',
      description: 'Create, veiw and manage Venues and Venue Types',
      buttonNav: '/venues'
    },
    {
      id: 3,
      name: 'Riders',
      description: 'Create, view and manage Riders',
      buttonNav: '/riders'
    },
    {
      id: 4,
      name: 'Coaches',
      description: 'Create, view and manage Coaches',
      buttonNav: '/coaches'
    },
    {
      id: 5,
      name: 'Equipment',
      description: 'Create, view and manage equipment used for eahc measure',
      buttonNav: '/equipment'
    },
    {
      id: 6,
      name: 'Tests',
      description: 'Create, view and manage the different tests used to make up an assessment',
      buttonNav: '/tests'
    },
    {
      id: 7,
      name: 'Measures',
      description: 'Create, view and manage the different measures used in a test',
      buttonNav: '/measures'
    }
  ])
}
