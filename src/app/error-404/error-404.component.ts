import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss',
})
export class Error404Component {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('Page Not Found - Alessandro Argenziano');
    this.meta.updateTag({
      name: 'description',
      content:
        'Oops! That page doesn’t exist. Return home or explore the portfolio of Angular developer Alessandro Argenziano.',
    });
  }
}
