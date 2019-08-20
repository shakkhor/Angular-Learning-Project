import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any;

  constructor(private http: HttpClient) {

  }

  getPosts() {
    this.posts = this.http.get('https://jsonplaceholder.typicode.com/posts');
    console.log(this.posts);
  }


}
