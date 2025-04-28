import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOverlayComponent } from '../project-overlay/project-overlay.component';
import { Project } from '../project-overlay/project.model';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectOverlayComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent {
  showOverlay = false;
  selectedProject: Project | null = null;

  projects: { [key: string]: Project } = {
    join: {
      title: 'Join',
      description: 'Task manager inspired by the Kanban System...',
      details: 'ddd',
      duration: '3 months',
      skills: ['Angular', 'TypeScript', 'SCSS'],
      image: 'assets/img/projects_section/join_project.png',
      button1Text: 'Live Demo',
      button2Text: 'GitHub',
      button1Link: 'https://live-demo.com',
      button2Link: 'https://github.com/repo',
    },
    'mafia-vs-orcs': {
      title: 'Mafia vs Orcs',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      details:
        'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '2 months',
      skills: ['JavaScript', 'OOP', 'HTML5 Canvas'],
      image: 'assets/img/projects_section/epl_mockup.jpg',
      button1Text: 'Play Now',
      button2Text: 'Source Code',
      button1Link: 'https://play-mafia.com',
      button2Link: 'https://github.com/mafia-vs-orcs',
    },
    dabubble: {
      title: 'DABubble',
      description:
        'Slack clone app with real-time messaging and channel organization...',
      details: 'ddd',
      duration: '4 months',
      skills: [
        './../../assets/img/skill_set/icons/js.png',
        './../../assets/img/skill_set/icons/html.png',
        './../../assets/img/skill_set/icons/css.png',
      ],
      image: 'assets/img/projects_section/dabubble_mockup.jpg',
      button1Text: 'Try It',
      button2Text: 'GitHub',
      button1Link: 'https://dabubble.com',
      button2Link: 'https://github.com/dabubble-app',
    },
  };

  openOverlay(projectId: string) {
    this.selectedProject = this.projects[projectId];
    if (this.selectedProject) {
      this.showOverlay = true;
      document.body.style.overflow = 'hidden';
    } else {
      console.error('Project not found:', projectId);
    }
  }

  closeOverlay() {
    this.showOverlay = false;
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}
