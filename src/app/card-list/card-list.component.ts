import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { obj } from 'myNotes';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
cards: any = []

ngOnInit(): void {
this.cards = obj

}
}
