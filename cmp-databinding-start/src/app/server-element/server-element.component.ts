import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input("srv") element : {type: string, name: string, content: string}
  //@Input معناة انك مسموح لك تمررلة داتا من الاب له
  constructor() { }
  ngOnInit(): void {
  }
}
