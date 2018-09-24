import { Component, OnInit } from '@angular/core';
import { Card } from './modals/card.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'matthewmullin.io';
  projects: Card[] = [
    {
      title: `Retriever`,
      body: `Retriever is a web and mobile application that aims to streamline veterinary recruitment. Candidates are matched to
      specific jobs depending on their skillset and preferences. Both the native mobile application and the Angular web
      app were designed to reduce the time from opening the app to having a successfull application. A focus on simple User
      Experience was key to achieving this.`,
      img: '/src/assets/Group 7.png',
      tags: ['Angular', 'Kotlin', 'Firebase', 'Algolia']
    },
    {
      title: `CH Consulting`,
      body: `Our in-house software built from the ground up using the Angular framework. This web application is used internally
      to manage the daily workflows and procedures for our accounting firm. The package was designed to add the necessary controls
      to ensure all tasks that needed doing where done. This includes everything from the creation of job workflows, to client management,
      to tax calculations as well as automatic invoicing.`,
      img: '/src/assets/Group 7.png',
      tags: ['Angular', 'GCP', 'BigQuery', 'Firebase', 'SageOne API']
    }
  ];

  ngOnInit() {}
}
