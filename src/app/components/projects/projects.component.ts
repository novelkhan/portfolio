import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'CyberHost',
      technologies: 'Asp.net Core Web Api, Angular, NGX-Bootstrap',
      description: [
        'Worked as a full-stack developer to develop apps that are powered by CyberHost.',
        'Developed role based authorization using Identity Framework.',
        'MS-SQL Server, JWT-Authentication, Email-Validation.',
      ],
      src: 'https://github.com/novelkhan/FileStorageApi'
    },
    {
      title: 'E - Travel Management System',
      technologies: 'C#, Asp.net Core Web API, Angular-16',
      description: [
        'Worked as a full stack developer to develop this application.',
        'Got to learn about JWT-Bearer',
        'Learned about SMTP to develop this application',
      ],
      src: 'https://github.com/novelkhan/ETravelApi'
    },
    {
      title: 'File Converter',
      technologies: 'Asp.net Core Web API, Angular-16',
      description: [
        'Worked on File to byte[] array convertion and vice-versa',
        'Learned multiple technologies to develop this application.',
      ],
      src: 'https://github.com/novelkhan/FileStorageApi'
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}