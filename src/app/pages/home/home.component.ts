import { Component, inject, signal } from '@angular/core';
import { courses } from '../../models/courses';
import { CoursesService } from '../../services/courses.service';
// import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courses = signal<courses[]>([]);
  error = signal<string | null>(null);

  CoursesService = inject(CoursesService);

  ngOnInit(){
    this.loadCourses()
  }

  async loadCourses () {
    try {
      const response = await this.CoursesService.loadCourses();
      this.courses.set(response)
      console.table(this.courses())
    } catch(error) {
      console.log(error);
      this.error.set("Data kan ej laddas, försök igen senare");
      
    }

  }

}
