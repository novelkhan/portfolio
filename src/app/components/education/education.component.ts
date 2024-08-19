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
      duration: 'Passing Year - 2021',
      score: 'Global Institute of Information Technology (GIIT), Tangail',
    },
    {
      institute: 'Dhaka Board',
      course: 'HSC',
      duration: 'Passing Year - 2012',
      score: 'Shahid Roushon Ali Khan Degree College<br/>Basail, Tangail',
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}