import { Component, OnInit } from '@angular/core';
import {StoreTestService} from '../../../../store-test.service';

@Component({
  selector: 'app-cont5',
  templateUrl: './cont5.component.html',
  styleUrls: ['./cont5.component.css']
})
export class Cont5Component implements OnInit {

  database2 = this.service.database2;

  constructor(private service: StoreTestService) { }

  ngOnInit(): void {
  }

}
