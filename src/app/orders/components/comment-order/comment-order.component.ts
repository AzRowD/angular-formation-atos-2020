import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from 'src/app/core/services/orders.service';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-comment-order',
  templateUrl: './comment-order.component.html',
  styleUrls: ['./comment-order.component.scss']
})
export class CommentOrderComponent implements OnInit {
  //public myItem$ = new Subject<Order>();
  public comment = new FormControl();
  constructor(private os: OrdersService) { }

  ngOnInit(): void {

    this.os.myItem$.subscribe((res) => {
     console.log(res);
     this.comment.setValue(res.comment);
    });

    this.comment.valueChanges.pipe(debounceTime(1000)).subscribe((text) => {
      console.log(text);
      this.os.myItem$.value.comment =text;
      this.os.update(this.os.myItem$.value).subscribe();
    })
  }

}
