import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
name1:string;
id1:string;
branch1:string;
  
  constructor(private route:ActivatedRoute) { 
    let person = route.snapshot.queryParams;
    this.name1=person['name'];
    this.id1=person['id'];
    this.branch1=person['branch'];
  }

  ngOnInit(): void {
  }

}
