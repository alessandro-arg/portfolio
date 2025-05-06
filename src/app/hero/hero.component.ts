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

  titleLetters = this.titleText.split('').map((letter) => ({
    original: letter,
    display: letter,
  }));

  subtitleLetters = this.subtitleText.split('').map((letter) => ({
    original: letter,
    display: letter,
  }));

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

  onHover(letterObj: { original: string; display: string }) {
    letterObj.display = this.flipCase(letterObj.original);
  }

  onLeave(letterObj: { original: string; display: string }) {
    letterObj.display = letterObj.original;
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
