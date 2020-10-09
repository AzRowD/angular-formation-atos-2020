import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StateOrder } from '../enums/state-order.enum';
import { Order } from '../models/order';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private collection$: Observable<Order[]>;
  private urlApi = environment.urlApi;
  public myItem$ = new BehaviorSubject<Order>(null);
  constructor(private http: HttpClient) {
    // this.collection = this.http.get<Order[]>(this.urlApi + '/orders');
    this.collection = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      tap((data) => {
        this.myItem$.next(data[0]);
      })
    );

  }

  get collection(): Observable<Order[]> {
    return this.collection$;
  }

  set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  public changeState(item: Order, state: StateOrder): Observable<Order> {
    // item.state = state;
    const obj = { ...item };
    obj.state = state;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }

  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  public getItemById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  // delete
}
