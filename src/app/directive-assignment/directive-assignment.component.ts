import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent implements OnInit {
  logs: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDetailsToogled() {
    this.logs.push(Date.now().toString())
  }

  getColor() {
    return this.logs.length >= 5 ? 'blue' : 'green';
  }
}
