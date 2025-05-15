import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewExamComponent } from './components/new-exam/new-exam.component';
import { StudentsComponent } from './components/students/students.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { MatrialModule } from '../shared/modules/material/material.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NewExamComponent,
    StudentsComponent,
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatrialModule,
    ToastrModule,
    FormsModule
  ]
})
export class DoctorModule { }
