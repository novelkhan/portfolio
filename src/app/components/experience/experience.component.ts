import { Component, OnInit } from '@angular/core';
import { WorkExperience } from 'src/app/models/models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'mainBackend',
      company: 'Asp.net Core Web API',
      duration: 'Dec 12, 2022 - Mar 14, 2024',
      description: [
        'Worked with Asp.net Core Identity Framework, Angular Client App',
        'NGX-Bootstrap, Angular-15',
      ],
    },
    {
      role: 'ApiCrud',
      company: 'Angular 16.2.1 Project',
      duration: 'Dec 31, 2023 - Jul 25, 2024',
      description: [
        'Working to perform complex file operations in an angular project',
        'Working to develop new technique to make file operations easier.',
      ],
    },
    {
      role: 'img-api',
      company: 'Asp.net Core Web API',
      duration: 'Dec 3, 2022 - Jul 17, 2024',
      description: [
        'Involved in various file type conversion',
        'CI/CD, LINQ, Entity Framewoork Core',
        'Github Action is used to auto deploy'
      ],
    },
    {
      role: 'ImgApiForNg',
      company: 'Asp.net Core Web API Project',
      duration: 'Jan 22, 2024 - Mar Jul 30, 2024',
      description: [
        'Integrate Angular with This API Application',
        'Worked on Development of Simple User Data Related Operations',
      ],
    },
    {
      role: 'ImgCrud',
      company: 'Angular 16.2.1 Project',
      duration: 'Jan 21, 2024 - Jul 30, 2024',
      description: [
        'Worked on User Data',
        'Bootstrap-5, Bootstrap-Icon',
      ],
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}