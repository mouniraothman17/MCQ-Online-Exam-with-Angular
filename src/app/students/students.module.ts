import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './components/exam/exam.component';
import { SharedModule } from '../shared/modules/shared/shared.module';
import { MatrialModule } from '../shared/modules/material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExamComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    MatrialModule,
    FormsModule
  ],
  exports: [
    ExamComponent
  ]
})
export class StudentsModule { }
