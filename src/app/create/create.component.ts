import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  title = 'title app-create.ts';
  constructor() { }

  ngOnInit(): void {
  }

  getTitle() {
    return this.title;
  }
}
