import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  // public collection: Order[];
  // private sub: Subscription;
  public states = Object.values(StateOrder);
  public collection$: Observable<Order[]>;
  public headers: string[];
  constructor(private os: OrdersService) { }
  ngOnInit(): void {
    this.collection$ = this.os.collection;
    this.headers = [
      'Type',
      'Client',
      'NbJours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
    // this.sub = this.os.collection.subscribe((datas) => {
    //   this.collection = datas;
    // });
  }
  public popup(): void {
    console.log('open popup');
  }
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
