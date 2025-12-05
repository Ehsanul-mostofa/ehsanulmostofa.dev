import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    { label: 'Angular', icon: 'assets/icons/angular.png' },
    { label: 'TypeScript', icon: 'assets/icons/ts.png' },
    { label: 'C#', icon: 'assets/icons/csharp.png' },
    { label: '.NET Core', icon: 'assets/icons/net.png' },
    { label: 'JavaScript', icon: 'assets/icons/js.png' },
    { label: 'Oracle', icon: 'assets/icons/database.png' },
    { label: 'HTML', icon: 'assets/icons/html.png' },
    { label: 'CSS', icon: 'assets/icons/css.png' },
    { label: 'Node.js', icon: 'assets/icons/node.png' },
    { label: 'Python', icon: 'assets/icons/python.png' },
    { label: 'AWS', icon: 'assets/icons/aws.png' },
    { label: 'Git', icon: 'assets/icons/git.png' },
    { label: 'Agile', icon: 'assets/icons/scrum.png' },
    { label: 'Microservice', icon: 'assets/icons/microservice.png' },
    { label: 'ChatGPT', icon: 'assets/icons/neural-network.png' },
  ];
}
