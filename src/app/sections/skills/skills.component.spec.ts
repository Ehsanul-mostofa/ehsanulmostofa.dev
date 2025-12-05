import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    { label: 'Angular', icon: 'assets/skills/angular.png' },
    { label: 'TypeScript', icon: 'assets/skills/typescript.png' },
    { label: 'JavaScript', icon: 'assets/skills/js.png' },
    { label: 'HTML', icon: 'assets/skills/html.png' },
    { label: 'CSS', icon: 'assets/skills/css.png' },

    { label: 'Node.js', icon: 'assets/skills/node.png' },
    { label: 'Express', icon: 'assets/skills/express.png' },
    { label: 'MongoDB', icon: 'assets/skills/mongo.png' },
    { label: 'Git', icon: 'assets/skills/git.png' },
    { label: 'Postman', icon: 'assets/skills/postman.png' },
  ];
}
