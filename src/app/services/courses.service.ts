import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { courses } from '../models/courses';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private url: string = "https://webbutveckling.miun.se/files/ramschema.json";

  http = inject(HttpClient);

  // Läs in kurser

  async loadCourses(): Promise<courses[]> {

    const courses = this.http.get<courses[]>(this.url);
    return await firstValueFrom(courses); 

  }

  
   
  constructor() { }
}
