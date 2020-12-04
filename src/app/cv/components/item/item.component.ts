import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Personne } from './../../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  constructor(
    private cvService: CvService
  ) {}

  ngOnInit(): void {}
  selectItem() {
    this.cvService.selectPersonne(this.personne);
  }
}
