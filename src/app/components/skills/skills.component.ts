import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'ASP.NET Core Web API',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Angular, PSD/Figma to NGX-Bootstrap',
      level: 'Expert',
      rating: 85,
    },
    {
      name: 'C#',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Data Structure',
      level: 'Intermidiate',
      rating: 60,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}