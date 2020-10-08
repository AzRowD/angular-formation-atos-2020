import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';
import { ClientsService } from 'src/app/core/services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {
  public item = new Client();
  constructor(
    private os: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public add(item: Client): void {
    console.log(item);
    this.os.add(item).subscribe((res) => {
      this.router.navigate(['clients']);
    });

    // subscribe this.os.add(item);
    //dans le sub redirect vers orders
  }
}
