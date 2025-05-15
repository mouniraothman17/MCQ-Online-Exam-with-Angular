import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  dataSource: any
  dataTable:any
  displayedColumns: any
  qustionsLength:any[]=[]


  constructor(private service: AuthService , private doctorSer:DoctorService){
    this.displayedColumns = ['position', 'name', 'subjectName', 'degree'];
  }

  ngOnInit(): void {
    this.getStudents();
  }



      getStudents() {
        this.service.getUsers("students").subscribe((res: any) => {
          console.log(res);

          this.dataSource = res.map((student: any) => {
            if (student?.subjects) {
              return student?.subjects?.map((subject: any) => {
                return {
                  name: student.username,
                  subjectName: subject.name,
                  degree: subject.degree,
                  total: subject.questionLength
                }

              })
        } else {
          return [{
            name: student.username,
            subjectName: "——",
            degree: "——",
            total:''
          }]
        }
      })
      this.dataTable = [];

      this.dataSource.forEach((item: any) => {
        item.forEach((subItem: any) => {
          this.dataTable.push({
            name: subItem.name,
            subjectName: subItem.subjectName,
            degree: subItem.degree,
            total:subItem.total
          })
        })
      });
      console.log(this.dataTable);
    })

  }

}
