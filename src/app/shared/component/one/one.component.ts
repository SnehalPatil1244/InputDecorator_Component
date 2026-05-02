import { Component, Input, OnInit } from '@angular/core';
import { IPerson } from 'src/app/model/person';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
   @Input() gettitle : any


  constructor() { }

  ngOnInit(): void {
  }

}
