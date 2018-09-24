import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../modals/card.modal';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss']
})
export class ProjectContentComponent implements OnInit {
  @Input()
  cardInfo: Card;

  constructor() {}

  ngOnInit() {}
}
