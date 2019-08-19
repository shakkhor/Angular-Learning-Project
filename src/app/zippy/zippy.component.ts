import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input('title') title: string;
  isExpanded: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
