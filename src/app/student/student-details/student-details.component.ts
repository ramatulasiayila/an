import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
name:string;
id:string;
branch:string;
  
  constructor(private route:ActivatedRoute) { 
    let person = route.snapshot.queryParams;
    this.name=person['name'];
    this.id=person['id'];
    this.branch=person['branch'];
  }

  ngOnInit(): void {
  }

}
