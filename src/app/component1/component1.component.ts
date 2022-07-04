import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import coursesData from '../../assets/data.json';

interface CourseData{
  courseName:String;
  enrollments:Number;
  completions:Number;

}

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
 courses:CourseData[]=coursesData;
 //temp:Number=this.courses[0].enrollments;
 temp:CourseData=this.courses[0];
  constructor() {
    
 
   }

  
 
     
   sortArray():void {
    for(var i=0;i<this.courses.length-1;i++){
      for(var j=i+1;j<this.courses.length;j++){
        if(this.courses[i].enrollments<this.courses[j].enrollments){
          this.temp=this.courses[i];
          this.courses[i]=this.courses[j];
          this.courses[j]=this.temp
        }
      }
     
    }
  }
  ngOnInit(): void {
    this.sortArray();
  }
  
 


}
