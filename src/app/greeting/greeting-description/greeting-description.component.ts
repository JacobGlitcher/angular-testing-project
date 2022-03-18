import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-description',
  templateUrl: './greeting-description.component.html',
  styleUrls: ['./greeting-description.component.scss']
})
export class GreetingDescriptionComponent implements OnInit {
  age: number = 24
  name: string = 'Alex';

  constructor() { }

  ngOnInit(): void {
  }

}
