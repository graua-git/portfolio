import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  @Input() project: any;
}
