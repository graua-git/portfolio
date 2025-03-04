import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project: any;

  openLink(url: string | null) {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }
}
