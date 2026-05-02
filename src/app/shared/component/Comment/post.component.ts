import { Component, Input, OnInit } from '@angular/core';
import { Icomment } from 'src/app/model/comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() getcard ! : Icomment


  constructor() { }

  ngOnInit(): void {
  }

}
