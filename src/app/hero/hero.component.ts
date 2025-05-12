import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  titleText = 'Frontend';
  subtitleText = 'DEVELOPER';
  isPhotoHovered = false;
  isMobile: boolean | undefined = undefined;
  backgroundLoaded = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 800;
    }
  }

  flipCase(char: string): string {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  }

  onPhotoHover(state: boolean): void {
    this.isPhotoHovered = state;
  }

  buttonAnimationMobile(): void {
    this.checkScreenSize();
    if (this.isMobile) {
      setTimeout(() => {
        const button = document.querySelector('.hello_btn');
        button?.classList.add('show-hover');
      }, 1000);
    }
  }

  ngOnInit(): void {
    const img = new Image();
    img.src = 'assets/img/background/hero.png';
    img.onload = () => {
      this.backgroundLoaded = true;
    };
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth <= 800;
      window.addEventListener('resize', this.checkScreenSize.bind(this));
      this.buttonAnimationMobile();
    }
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 800;
  }

  scrollToContacts(): void {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
