import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/model/student';
import { CommomserviceService } from 'src/app/shared/commomservice.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private cs:CommomserviceService) { }
  stu:Student[];
  

  ngOnInit(): void {

    this.cs.getData().subscribe((data:Student[])=>
    {
      this.stu=data;
    });
    
  }

}
