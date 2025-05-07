import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss'],
})
export class CursorComponent implements AfterViewInit {
  @ViewChild('cursor') cursorRef!: ElementRef<HTMLDivElement>;

  private mouseX = 0;
  private mouseY = 0;
  private currentX = 0;
  private currentY = 0;

  ngAfterViewInit(): void {
    document.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.animate();
  }

  handleMouseMove(e: MouseEvent) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }

  animate() {
    const cursor = this.cursorRef.nativeElement;

    const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

    const render = () => {
      this.currentX = lerp(this.currentX, this.mouseX, 0.05);
      this.currentY = lerp(this.currentY, this.mouseY, 0.05);
      cursor.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;

      requestAnimationFrame(render);
    };

    render();
  }
}
