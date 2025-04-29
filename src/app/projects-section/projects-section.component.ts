import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOverlayComponent } from '../project-overlay/project-overlay.component';
import { Project } from '../project-overlay/project.model';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectOverlayComponent],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent implements OnInit {
  constructor(private navService: NavigationService) {}

  showOverlay = false;
  selectedProject: Project | null = null;
  projectKeys: string[] = [];
  currentProjectIndex = 0;

  projects: { [key: string]: Project } = {
    join: {
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      details:
        'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '5 weeks',
      skills: [
        { icon: './../../assets/img/skill_set/icons/css.png', name: 'CSS' },
        { icon: './../../assets/img/skill_set/icons/html.png', name: 'HTML' },
        {
          icon: './../../assets/img/skill_set/icons/firebase.png',
          name: 'Firebase',
        },
        {
          icon: './../../assets/img/skill_set/icons/js.png',
          name: 'JavaScript',
        },
      ],
      sticker: './../../assets/img/projects_section/featured_sticker.png',
      image: 'assets/img/projects_section/join_mockup.jpg',
      button1Text: 'GitHub',
      button2Text: 'Live Test',
      button1Link: 'https://github.com/alessandro-arg/join.git',
      button2Link: 'https://www.alessandro-argenziano.com/join',
    },
    'mafia-vs-orcs': {
      title: 'Mafia vs Orcs',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      details:
        'Short text that describes your role or the workflow for this specific project. Let a recruiter know more about your knowledge and ability to work independently or collaboratively in a structured way.',
      duration: '3 Weeks',
      skills: [
        {
          icon: './../../assets/img/skill_set/icons/js.png',
          name: 'JavaScript',
        },
        { icon: './../../assets/img/skill_set/icons/html.png', name: 'HTML' },
        { icon: './../../assets/img/skill_set/icons/css.png', name: 'CSS' },
      ],
      sticker: './../../assets/img/contacts/circle_logo.png',
      image: 'assets/img/projects_section/epl_mockup.jpg',
      button1Text: 'GitHub',
      button2Text: 'Live Test',
      button1Link: 'https://github.com/alessandro-arg/mafia_vs_orcs.git',
      button2Link: 'https://www.alessandro-argenziano.com/mafia_vs_orcs',
    },
    dabubble: {
      title: 'DABubble',
      description:
        'Slack clone app with real-time messaging and channel organization...',
      details: 'ddd',
      duration: '4 months',
      skills: [
        {
          icon: './../../assets/img/skill_set/icons/js.png',
          name: 'JavaScript',
        },
        { icon: './../../assets/img/skill_set/icons/html.png', name: 'HTML' },
        { icon: './../../assets/img/skill_set/icons/css.png', name: 'CSS' },
      ],
      sticker: './../../assets/img/contacts/circle_logo.png',
      image: 'assets/img/projects_section/dabubble_mockup.jpg',
      button1Text: 'GitHub',
      button2Text: 'Live Test',
      button1Link: 'https://dabubble.com',
      button2Link: 'https://github.com/dabubble-app',
    },
  };

  ngOnInit(): void {
    this.projectKeys = Object.keys(this.projects);
    this.navService.overlayClosed$.subscribe(() => {
      if (this.showOverlay) {
        this.closeOverlay();
      }
    });
  }

  openOverlay(projectId: string) {
    this.selectedProject = this.projects[projectId];
    this.currentProjectIndex = this.projectKeys.indexOf(projectId);
    if (this.selectedProject) {
      this.showOverlay = true;
      document.body.style.overflow = 'hidden';
    }
  }

  closeOverlay() {
    this.showOverlay = false;
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  showNextProject() {
    this.currentProjectIndex =
      (this.currentProjectIndex + 1) % this.projectKeys.length;
    const nextProjectId = this.projectKeys[this.currentProjectIndex];
    this.selectedProject = this.projects[nextProjectId];
  }
}
