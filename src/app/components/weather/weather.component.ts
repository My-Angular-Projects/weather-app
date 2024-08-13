import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
} from '@angular/core';
import { IWeather } from '../../types';
import { WeatherService } from '../../services';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule,
} from '@angular/material/card';
import { MatInput } from '@angular/material/input';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'wt-weather',
  standalone: true,
  imports: [
    MatFormField,
    MatIcon,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatInput,
    MatCardImage,
    DecimalPipe,
    MatCardModule,
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
  private readonly destroyRef = inject(DestroyRef);
  private readonly weatherService = inject(WeatherService);
  public weather: IWeather | undefined;

  public searchWeather(city: string): void {
    this.weatherService
      .getWeather(city)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((weather: IWeather) => {
        this.weather = weather;
      });
  }
}
