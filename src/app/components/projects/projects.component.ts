import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Project, ProjectCategory } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  private dataService = inject(DataService);

  categories: ProjectCategory[] = ['Tous', 'Résidentiel', 'Commercial', 'Industriel', 'Autres'];
  selectedCategory = signal<ProjectCategory>('Tous');

  allProjects: Project[] = this.dataService.getProjects();

  filteredProjects = computed(() => {
    const category = this.selectedCategory();
    if (category === 'Tous') {
      return this.allProjects;
    }
    return this.allProjects.filter(p => p.category === category);
  });

  setCategory(cat: ProjectCategory): void {
    this.selectedCategory.set(cat);
  }
}
