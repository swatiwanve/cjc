import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    StudentListComponent
  ],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[ StudentListComponent]
  
})
export class StudentModule { }
