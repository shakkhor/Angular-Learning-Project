
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'courses',  // <courses>
    template: `
        <h2> {{"Title: " +title}} </h2>

        <!-- for derective -->
        <ul>
        <li *ngFor="let course of courses">{{course}}</li>
        </ul>
        
        <h4>Start Date: {{project.startDate | date:'mediumDate'}}</h4> 
        <h4>{{project.bootstrapVersion}} </h4>
        
        <br>
        <h3> One way binded input field </h3>
        <!-- one way binding -->
        <input class="form-control"  (keyup.enter) ="onKeyUp($event)"  value = "{{email}}"/>
        <br>
         <input class="form-control" value = "{{email}}" />
        <br>
        <br>

        <!-- two way binding -->
        <h3> Two way binded input field </h3>
        <input class="form-control" [(ngModel)] = "twoWayBindingEmail" (keyup.enter) ="onTwoWayKeyUp()" />
        <br>
        <input class="form-control" value = "{{twoWayBindingEmail}}" />
        <br>
        <br>

        <!-- bootstrap import check ans success -->
        <h4> Attribute(color) binding example. Click the button to toggle color.</h4>
        <button (click)="onSave($event)" class="btn btn-primary btn-lg" [class.active]="isActive" [style.backgroundColor] ="isActive ? 'blue' : 'green'">Save</button>
   
        <!-- Url Unsafe issue resolved  
        <img [src]='sanitizer.bypassSecurityTrustResourceUrl(imgUrl)' />
        -->

    

      <!--  another solution for url unsafe event found @ https://stackoverflow.com/questions/37927657/unsafe-value-used-in-a-resource-url-context-with-angular-2
      <iframe [src]='sanitizer.bypassSecurityTrustResourceUrl(imgUrl)' width="1080" height="1080" frameborder="0"
        webkitallowfullscreen mozallowfullscreen allowfullscreen>
      </iframe> -->


      <h3>Assigment Two -- Favorite Icon. Click on the star</h3>
      <span [ngClass]="starSelected ? 'glyphicon glyphicon-star' : 'glyphicon glyphicon-star-empty'" (click)="onStarClick()"></span>

      <h3> Pipes(Title Casing) </h3>
       <h4>Before: {{text }} </h4>
 
      <h4>After: {{text |titlecase }} </h4>
 
  
    `
})

export class CoursesComponet {
    ///////////////////// Variables  & objects/////////////////////////

    title = "List of courses";
    courses;
    twoWayBindingEmail = "me@example.com";
    email = "me@example.com";
    imgUrl = "https://malaysia.timbangharga.com/cf/1050/cdn/HTB1tmZoKkSWBuNjSszdq6zeSpXa2/Gloss-Blue-Fairings-YZF-R6-2017-2018-Year-ABS-Motorcycle-Fairing-For-Yamaha-YZF-R6-17.jpg";
    isActive = true;
    starSelected = false;

    project = {
        title: "Angular Learning Project",
        startDate: new Date(2019, 7, 18),
        bootstrapVersion: "Bootstrap version: 3.3.7"

    }

    text = "This pAragraph is title caseD";

    /////////////////// Constructor ////////////////////////////
    constructor(service: CoursesService, public sanitizer: DomSanitizer) {
        this.courses = service.getCourses();
    }


    /////////////////////methods/////////////////////
    onSave($event) {
        this.isActive = !this.isActive

        // alert(event)
    }

    onKeyUp($event) {
        console.log("DEBUG ################## one way binding");
        console.log(this.email);
    }

    onTwoWayKeyUp() {
        console.log("DEBUG ################## two way binding");
        console.log(this.twoWayBindingEmail);
    }

    onStarClick() {
        this.starSelected = !this.starSelected;
        console.log("Click");

    }
}