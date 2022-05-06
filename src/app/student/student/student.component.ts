import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input()name:string='';
  @Input()id:string='';
  @Input()branch:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
