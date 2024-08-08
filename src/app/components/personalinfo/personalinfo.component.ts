import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalinfo',
  templateUrl: './personalinfo.component.html',
  styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Novel Khan'],
    ['DOB', '11/12/1993'],
    ['Work Exp', '2 Years'],
    ['Education', 'BSc in CSE (2021)'],
    ['Interests', 'Chess Board'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Developer with 2 years of experience in asp.net core web api with angular-16 front-end.',
    'Worked as a full-stack developer in some tiny and enormous projects with various technologies (Asp.net Core Identity Famework, NGX-Bootstrap, Figma to Bootstrap-5 Conversion).',
    'I will complete all tasks within deadlines. Always eager to learn new technologies.',
    'Currently, I have been seeking to develop a tech career as an Asp.net Core Developer at any fast growing IT Firm where I can utilize my skills in .Net Development with C# & asp.net core web api based web application, and utilize my abilities of problem solving with OOP which meets clients need.',
  ];

  constructor() {}

  ngOnInit(): void {}
}