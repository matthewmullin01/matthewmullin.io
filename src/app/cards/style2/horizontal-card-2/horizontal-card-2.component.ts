import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../../modals/card.modal';

@Component({
  selector: 'app-horizontal-card-2',
  templateUrl: './horizontal-card-2.component.html',
  styleUrls: ['./horizontal-card-2.component.scss']
})
export class HorizontalCard2Component implements OnInit {
  @Input()
  cardInfo: Card;

  constructor() {}

  ngOnInit() {}
}
