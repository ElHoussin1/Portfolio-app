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
      title: 'Project One',
      shortDescription: 'Brief description of Project One.',
      longDescription: 'Detailed description of Project One. You can add multiple paragraphs, lists, or any other HTML content here to describe your project in depth.',
      imageUrl: 'assets/project1.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      projectUrl: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      shortDescription: 'Brief description of Project Two.',
      longDescription: 'Detailed description of Project Two. This is where you can provide an in-depth explanation of your project, its goals, and the problems it solves.',
      imageUrl: 'assets/project2.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      projectUrl: '#'
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