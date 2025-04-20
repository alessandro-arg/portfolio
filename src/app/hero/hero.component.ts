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

  titleLetters: string[] = this.titleText.split('');
  subtitleLetters: string[] = this.subtitleText.split('');

  onHover(letter: string) {
    const span = <HTMLElement>event!.target;
    const currentText = span.innerText;

    if (currentText === currentText.toLowerCase()) {
      span.innerText = currentText.toUpperCase();
    } else {
      span.innerText = currentText.toLowerCase();
    }
  }

  onLeave(letter: string) {
    const span = <HTMLElement>event!.target;
    const currentText = span.innerText;

    if (currentText === currentText.toLowerCase()) {
      span.innerText = letter.toLowerCase();
    } else {
      span.innerText = letter.toUpperCase();
    }
  }
}
