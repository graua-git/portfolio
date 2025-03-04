import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import experienceData from '../../../assets/experience.json';
import { ExperienceCardComponent } from '../../components/experience/experience.component';

interface Experience {
  title: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent, CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[] = experienceData;
}
