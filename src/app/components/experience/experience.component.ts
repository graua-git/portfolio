import { Component, Input } from '@angular/core';

@Component({
  selector: 'experience-card',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceCardComponent {
  @Input() experience: any;
}
