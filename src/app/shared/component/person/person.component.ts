import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from 'src/app/model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() getperson  !: IPerson

  constructor() { }

  ngOnInit(): void {
  }

}
