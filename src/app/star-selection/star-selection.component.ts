import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-star-selection',
  templateUrl: './star-selection.component.html',
  styleUrls: ['./star-selection.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: StarSelectionComponent,
      multi: true,
    },
  ],
})
export class StarSelectionComponent implements OnInit, ControlValueAccessor {
  starsToDisplay = 5;
  starArr = Array(this.starsToDisplay)
    .fill(null)
    .map((x, i) => i + 1);
  highlightedStars: number[] = [];

  onChange: (value: number) => void;

  constructor() {}

  ngOnInit() {}

  writeValue(star: number): void {
    this.highlightedStars = Array(star)
      .fill(null)
      .map((x, i) => i + 1);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState(isDisabled: boolean): void {}

  highlightStars(star: number) {
    this.onChange(star);
    this.highlightedStars = [];
    this.highlightedStars = Array(star)
      .fill(null)
      .map((x, i) => i + 1);
  }
}
