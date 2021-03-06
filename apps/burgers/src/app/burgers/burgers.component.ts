import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Burger, BurgersFacade } from '@level/core-data';

@Component({
  selector: 'level-burgers',
  templateUrl: './burgers.component.html',
  styleUrls: ['./burgers.component.scss']
})
export class BurgersComponent implements OnInit {
  burgers$: Observable<Burger[]> = this.burgersFacade.allBurgers$;
  worstBurgers: Burger[];
  bestBurgers: Burger[] = [
    {
      id: 4,
      name: "Whopper",
      calories: 45,
      carbs: 31,
      protein: 2,
    }
  ];

  constructor(private burgersFacade: BurgersFacade) { }

  ngOnInit() {
    this.burgersFacade.loadAll();
    this.burgers$.subscribe(burgers => this.worstBurgers = burgers);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    }
  }
}
