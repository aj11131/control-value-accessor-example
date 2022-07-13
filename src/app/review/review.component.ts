import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  reviewForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.reviewForm = this.fb.group({
      review: [''],
      stars: [0, Validators.min(1)],
    });
  }

  onSubmit() {
    console.log(this.reviewForm.value)
  }
}
