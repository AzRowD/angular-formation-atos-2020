import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client.enum';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  @Input() init: Client;
  @Output() submited: EventEmitter<Client> = new EventEmitter();
  public states = Object.values(StateClient);
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.init.id],
      name: [this.init.name],
      totalCaHt: [this.init.totalCaHt],
      tva : [this.init.tva],
      comment: [this.init.comment],
      state: [this.init.state]


    });
  }

  public onSubmit(): void {
    this.submited.emit(this.form.value);
  }
}
