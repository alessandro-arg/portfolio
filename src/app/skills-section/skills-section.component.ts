import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent {
  stage: 'default' | 'transition' | 'revealed' = 'default';
  hoveredIndex: number | null = null;

  skillsIcons = [
    { src: './../../assets/img/skill_set/icons/html.png', name: 'HTML' },
    { src: './../../assets/img/skill_set/icons/css.png', name: 'CSS' },
    { src: './../../assets/img/skill_set/icons/js.png', name: 'JavaScript' },
    { src: './../../assets/img/skill_set/icons/ts.png', name: 'TypeScript' },
    { src: './../../assets/img/skill_set/icons/angular.png', name: 'Angular' },
    {
      src: './../../assets/img/skill_set/icons/firebase.png',
      name: 'Firebase',
    },
    { src: './../../assets/img/skill_set/icons/git.png', name: 'Git' },
    {
      src: './../../assets/img/skill_set/icons/rest_api.png',
      name: 'REST API',
    },
    { src: './../../assets/img/skill_set/icons/scrum.png', name: 'Scrum' },
    {
      src: './../../assets/img/skill_set/icons/material_design.png',
      name: 'Material Design',
    },
  ];

  onClick() {
    if (this.stage !== 'default') return;
    this.stage = 'transition';
    setTimeout(() => {
      this.stage = 'revealed';
    }, 300);
  }
}
