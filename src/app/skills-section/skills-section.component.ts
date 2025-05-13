import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
})
export class SkillsSectionComponent implements OnInit {
  currentState: 'initial' | 'hover' | 'reveal' = 'initial';
  animating = false;
  hoveredIndex: number | null = null;
  isMobile = false;

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

  handleClick() {
    if (this.animating || this.currentState !== 'initial') return;
    this.animating = true;
    this.currentState = 'hover';
    setTimeout(() => {
      this.currentState = 'reveal';
      this.animating = false;
    }, 100);
  }

  resetSticker(event: Event) {
    event.stopPropagation();
    if (this.animating || this.currentState !== 'reveal') return;

    this.currentState = 'initial';
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 700;
  }
}
