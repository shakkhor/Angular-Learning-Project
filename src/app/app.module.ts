import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponet } from './courses.componet';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './summary.pipe';
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponet,
    CourseComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
