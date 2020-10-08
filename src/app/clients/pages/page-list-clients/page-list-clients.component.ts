import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss']
})
export class PageListClientsComponent implements OnInit {

  public states = Object.values(StateClient);
  public collection$: Observable<Client[]>;
  public headers: string[];
  constructor(
    private os: ClientsService,
    private ref: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.collection$ = this.os.collection;
    this.headers = [
      'Name',
      'Total CA HT',
      'TVA',
      'Total CA TTC',
      'State'
    ];

  }

  public changeState(item: Client, event): void {
    const state = event.target.value;
    this.os.changeState(item, state).subscribe((res) => {
      console.log(res);
      item.state = res.state;
      this.ref.detectChanges();
    });
  }

}
