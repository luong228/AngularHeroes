import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  @Input() hero? : Hero;
  ngOnInit(): void {
    console.log("Init")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }
  ngDoCheck(): void {
    // console.log("Do check");
    
  }
  ngOnDestroy(): void {
    console.log("Destroy");
    
  }
}
