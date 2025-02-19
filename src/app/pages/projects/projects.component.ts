import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../../components/project/project.component';
import { CommonModule } from '@angular/common';
import projectData from '../../../assets/projects.json'

interface Project {
  name: string;
  start_month: string;
  start_year: string;
  end_month: string;
  end_year: string;
  present: boolean;
  description: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  imports: [ProjectComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = projectData;
}
