import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Dashboard Grafana',
      shortDescription: 'A brief description of Project One.',
      longDescription: 'Detailed description of Project One. This project involves building a dashboard with Angular and integrating it with Grafana for data visualization.',
      imageUrl: 'assets/Grafana.png',
      technologies: ['Angular', 'Grafana', 'Data Visualization'],
      projectUrl: 'https://github.com/your-repo/project1'
    },
    {
      id: 2,
      title: 'Medhead Poc',
      shortDescription: 'A brief description of Project Two.',
      longDescription: 'Detailed description of Project Two. This project involves building a healthcare app using React and Firebase.',
      imageUrl: 'assets/Medhead.png',
      technologies: ['React', 'Firebase', 'Healthcare'],
      projectUrl: 'https://github.com/your-repo/project2'
    }
    // Add more projects as needed
  ];

  selectedProject: Project | null = null;

  openModal(project: Project): void {
    this.selectedProject = project;
  }

  closeModal(): void {
    this.selectedProject = null;
  }
}