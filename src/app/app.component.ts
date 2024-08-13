import { Component } from '@angular/core';
import { WeatherComponent } from './components/weather/weather.component';

@Component({
  selector: 'wt-root',
  standalone: true,
  imports: [WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  //
}
