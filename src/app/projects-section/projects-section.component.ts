import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectOverlayComponent } from '../project-overlay/project-overlay.component';
import { Project } from '../project-overlay/project.model';
import { NavigationService } from '../navigation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule, ProjectOverlayComponent, TranslateModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent implements OnInit {
  constructor(private navService: NavigationService) {}

  showOverlay = false;
  selectedProject: Project | null = null;
  projectKeys: string[] = [];
  currentProjectIndex = 0;
  isMobile = false;

  projects: { [key: string]: Project } = {
    join: {
      title: 'Join',
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
      button1Link: 'https://github.com/alessandro-arg/join.git',
      button2Link: 'https://www.alessandro-argenziano.com/join',
    },
    'mafia-vs-orcs': {
      title: 'Mafia vs Orcs',
      skills: [
        {
          icon: './../../assets/img/skill_set/icons/js.png',
          name: 'JavaScript',
        },
        { icon: './../../assets/img/skill_set/icons/html.png', name: 'HTML' },
        { icon: './../../assets/img/skill_set/icons/css.png', name: 'CSS' },
      ],
      sticker: './../../assets/img/contacts/circle_logo.png',
      image: 'assets/img/projects_section/mafia_mockup.jpg',
      button1Link: 'https://github.com/alessandro-arg/mafia_vs_orcs.git',
      button2Link: 'https://www.alessandro-argenziano.com/mafia_vs_orcs',
    },
    dabubble: {
      title: 'DABubble',
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
      button1Link: 'https://dabubble.com',
      button2Link: 'https://github.com/dabubble-app',
    },
  };

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
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

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 650;
  }
}
