import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "National University",
      course: 'BSc in CSE',
      duration: '2021',
      score: '2.65 out of 4.00',
    },
    {
      institute: 'Dhaka Board',
      course: 'HSC',
      duration: '2012',
      score: '3.40 out of 5.00',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}