import { Component, OnInit, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  name:string='';
  id:string='';
  branch:string='';
  obj:{
    name:string,
    id:string,
    branch:string
  }={
    name:'',
    id:'',
    branch:''
  }
  @Output() usercreted = new EventEmitter<{
    name:string,
    id:string,
    branch:string
  }>();
  constructor() { }

  ngOnInit(): void { 
  }
  createduser()
{
this.usercreted.emit(this.obj);
}
}  
