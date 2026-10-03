import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './menu/menu';
import { Rider } from './rider/rider';

@Component({
  imports: [RouterOutlet, Menu, Rider],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('assessmentToolV0');
}
