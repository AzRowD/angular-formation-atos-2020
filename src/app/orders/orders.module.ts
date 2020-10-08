import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';
import { SharedModule } from '../shared/shared.module';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { CommentOrderComponent } from './components/comment-order/comment-order.component';
import { DetailOrderComponent } from './components/detail-order/detail-order.component';



@NgModule({
  declarations: [PageListOrdersComponent, PageAddOrderComponent, PageEditOrderComponent, FormOrderComponent, CommentOrderComponent, DetailOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule
  ]
})
export class OrdersModule { }
