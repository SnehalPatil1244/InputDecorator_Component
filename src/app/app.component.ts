import { Component } from '@angular/core';
import { IPerson } from './model/person';
import { Icomment } from './model/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Wel-Come To The Beautiful World Of Angular !!';

  person : IPerson =  {
    fname : 'Jhon',
    lname : 'Doe',
    Age : 32


  }

  CommentObj : Icomment =  {
    postId:  1,
    name : "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }


  para = 'Angular is a powerful open-source front-end framework developed and maintained by Google. It is used to build dynamic, scalable, and high-performance web applications, especially Single Page Applications (SPAs).'
}
