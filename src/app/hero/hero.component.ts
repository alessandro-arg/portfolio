import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  titleText = 'Frontend';
  subtitleText = 'DEVELOPER';
  isPhotoHovered = false;

  titleLetters = this.titleText.split('').map((letter) => ({
    original: letter,
    display: letter,
  }));

  subtitleLetters = this.subtitleText.split('').map((letter) => ({
    original: letter,
    display: letter,
  }));

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
}
