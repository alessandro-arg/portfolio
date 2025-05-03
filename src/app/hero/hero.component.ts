import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
  titleText = 'Frontend';
  subtitleText = 'DEVELOPER';
  isPhotoHovered = false;
  isMobile = false;

  titleLetters = this.titleText.split('').map((letter) => ({
    original: letter,
    display: letter,
  }));

  subtitleLetters = this.subtitleText.split('').map((letter) => ({
    original: letter,
    display: letter,
  }));

  onPhotoHover(state: boolean): void {
    this.isPhotoHovered = state;
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.checkScreenSize();
      window.addEventListener('resize', this.checkScreenSize.bind(this));
    }
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 800;
  }
}
