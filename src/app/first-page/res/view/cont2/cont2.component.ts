import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-cont2',
  templateUrl: './cont2.component.html',
  styleUrls: ['./cont2.component.css']
})
export class Cont2Component implements OnInit {

  Items() {
    return this.service.Items();
  }

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
