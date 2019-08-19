import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('likesCount') totalLikes: number;
  @Input('isLiked') liked: boolean;

  constructor() { }

  ngOnInit() {
    //this.totalLikes = 0;
  }
  onClickTweet() {
    console.log(this.totalLikes);
    if (this.liked) {
      this.totalLikes--;
    } else {
      this.totalLikes++;
    }
    this.liked = !this.liked;
    console.log(this.totalLikes);
  }

}
