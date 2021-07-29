import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, Subject } from "rxjs";
import { debounceTime, map, switchMap } from 'rxjs/operators';

@Component({
  selector: "autocomplete-input",
  template: `<div class="wrapper">
      <!--<div class="control" [ngClass]="{'is-loading': isloading}">-->
        <!--<input type="text" class="input" (paste)="search($event)" (keyup)="search($event)"/>-->
      <!--</div>-->
      <!--<div class="list is-hoverable" *ngIf="!(items | async)?.length">-->
        <!--<a *ngFor="let i of items$ | async" class="list-item" (click)="selectItem(i)">-->
        <!--{{i}}-->
        <!--</a>-->      <!--</div>-->
    <div class="ng-autocomplete">
      <ng-autocomplete [data]="data" [searchKeyword]="keyword" (selected)='selectEvent($event)'
                       (inputChanged)='onChangeSearch($event)' (inputFocused)='onFocused($event)' [itemTemplate]="itemTemplate"
                       [notFoundTemplate]="notFoundTemplate">
      </ng-autocomplete>

      <ng-template #itemTemplate let-item>
        <a [innerHTML]="item.name"></a>
      </ng-template>

      <ng-template #notFoundTemplate let-notFound>
        <div [innerHTML]="notFound"></div>
      </ng-template>
    </div>
    </div>`
})

export class AutocompleteComponent implements OnInit {

  keyword = 'name';

  data = [
    {
      id: 1,
      name: 'Dakota Gaylord PhD',
      address: '14554 Smith Mews'
    },
    {
      id: 2,
      name: 'Maria Legros',
      address: '002 Pagac Drives'
    },
    {
      id: 3,
      name: 'Brandyn Fritsch',
      address: '8542 Lowe Mountain'
    },
    {
      id: 4,
      name: 'Glenna Ward V',
      address: '1260 Oda Summit'
    },
    {
      id: 5,
      name: 'Jamie Veum',
      address: '5017 Lowe Route'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectEvent(item) {
    // do something with selected item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e){
    // do something when input is focused
  }

}
