import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { StarSelectionComponent } from './star-selection/star-selection.component';
import { ReviewComponent } from './review/review.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightStarPipe } from './highlight-star.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule],
  declarations: [ AppComponent, StarSelectionComponent, ReviewComponent, HighlightStarPipe  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
