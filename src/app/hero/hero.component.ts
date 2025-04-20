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

  titleLetters: { letter: string; originalCase: string }[] = this.titleText
    .split('')
    .map((letter) => ({
      letter,
      originalCase: letter,
    }));

  subtitleLetters: { letter: string; originalCase: string }[] =
    this.subtitleText.split('').map((letter) => ({
      letter,
      originalCase: letter,
    }));

  onHover(
    letterObj: { letter: string; originalCase: string },
    event: MouseEvent
  ) {
    const letter = event.target as HTMLElement;
    if (letter) {
      letter.innerText =
        letterObj.originalCase === letterObj.originalCase.toUpperCase()
          ? letterObj.letter.toLowerCase()
          : letterObj.letter.toUpperCase();
    }
  }

  onLeave(
    letterObj: { letter: string; originalCase: string },
    event: MouseEvent
  ) {
    const letter = event.target as HTMLElement;
    letter.innerText = letterObj.originalCase;
  }
}
