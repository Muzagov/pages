import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-cont4',
  templateUrl: './cont4.component.html',
  styleUrls: ['./cont4.component.css']
})
export class Cont4Component implements OnInit {

  database1 = this.service.database1;

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
