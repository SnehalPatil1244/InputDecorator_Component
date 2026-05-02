import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-para',
  templateUrl: './para.component.html',
  styleUrls: ['./para.component.scss']
})
export class ParaComponent implements OnInit {
@Input() getpara : any
  constructor() { }

  ngOnInit(): void {
  }

}
