import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss',
})
export class Error404Component {}
