import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public item = new Order();
  constructor(
    private os: OrdersService,
    private router: Router,
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public add(item: Order): void {
    console.log(item);
    this.os.add(item).subscribe((res) => {
      this.router.navigate(['orders']);
    });

    // subscribe this.os.add(item);
    //dans le sub redirect vers orders
  }

}
