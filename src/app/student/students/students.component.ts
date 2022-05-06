import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
studnets:{
  name:string,
  id:string,
  branch:string
}[]=[];
count : number = 10;
  constructor() {
    for(let i=0; i<this.count; i++){
      this.studnets.push({
        name:'studnet' + i,
        id: i.toString(),
        branch :'branch' + i
      });
    }
   }

  ngOnInit(): void {
  }
  addstudent( obj:{
    name:string,
    id:string,
    branch:string
  }){
  if(obj.name=='' || obj.id=='' || obj.branch=='') return
  this.studnets.push(obj);
  }


}
