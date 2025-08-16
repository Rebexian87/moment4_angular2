import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { courses } from '../models/courses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
   url: string = "https://webbutveckling.miun.se/files/ramschema.json";

  constructor(private http: HttpClient){ }


  // Service som läser in kurser från API med hjälp av HTTPClient

  loadCourses(): Observable<courses[]> {

    return this.http.get<courses[]>(this.url);
   

  }

  
   

}
