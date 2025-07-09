import { Component} from '@angular/core';
import { courses } from '../../models/courses';
import { CoursesService } from '../../services/courses.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {



  courses: courses[] = [];

  filteredCourses: courses [] = [];

  filterValue: string='';



  

  constructor(private CoursesService: CoursesService) {}

  ngOnInit(){
      this.CoursesService.loadCourses().subscribe((courses)=> {this.courses=courses; this.filteredCourses=courses; })


   
  }



  applyFilter(): void {
   this.filteredCourses=this.courses.filter((course) => course.code.toLowerCase().includes(this.filterValue.toLowerCase()) || course.coursename.toLowerCase().includes(this.filterValue.toLowerCase()))
      
  }

}
