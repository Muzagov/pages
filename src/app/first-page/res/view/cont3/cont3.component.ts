import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-cont3',
  templateUrl: './cont3.component.html',
  styleUrls: ['./cont3.component.css']
})
export class Cont3Component implements OnInit {

  database = this.service.database;

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
