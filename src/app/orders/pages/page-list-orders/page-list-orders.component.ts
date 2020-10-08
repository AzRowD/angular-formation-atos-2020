import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Link } from 'src/app/core/interfaces/link';
import { ActivatedRoute } from '@angular/router';
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
  public myLinks: Link[];
  public title: string;
  constructor(
    private os: OrdersService,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = data.title;
    });
    this.myLinks = [
      {
      route: 'detail',
      label: 'Order details'
    },
    {
      route: 'comment',
      label: 'Order comment'
    }
  ];
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

  public changeState(item: Order, event): void {
    const state = event.target.value;
    this.os.changeState(item, state).subscribe((res) => {
      console.log(res);
      item.state = res.state;
      this.ref.detectChanges();
    });
  }
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe();
  // }
}
