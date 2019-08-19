import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' }
  ]

  categories = [
    { id: 1, name: 'Art' },
    { id: 2, name: 'Development' },
    { id: 2, name: 'Language' }
  ]




  constructor() { }

  ngOnInit() {
  }
  log(x) {
    console.log(x);
  }
}
