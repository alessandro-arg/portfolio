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

  skillsIcons = [
    './../../assets/img/skill_set/icons/html.png',
    './../../assets/img/skill_set/icons/css.png',
    './../../assets/img/skill_set/icons/js.png',
    './../../assets/img/skill_set/icons/ts.png',
    './../../assets/img/skill_set/icons/angular.png',
    './../../assets/img/skill_set/icons/firebase.png',
    './../../assets/img/skill_set/icons/git.png',
    './../../assets/img/skill_set/icons/rest_api.png',
    './../../assets/img/skill_set/icons/scrum.png',
    './../../assets/img/skill_set/icons/material_design.png',
  ];

  onClick() {
    if (this.stage !== 'default') return;
    this.stage = 'transition';
    setTimeout(() => {
      this.stage = 'revealed';
    }, 300);
  }
}
