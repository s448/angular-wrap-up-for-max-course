import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();;
  // newServerName = '';
  // newServerContent = '';

  @ViewChild("inputName", { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(inputRServer) {
    console.log(this.serverContentInput);
    console.log(inputRServer.value);
    this.serverCreated.emit({
      serverName: inputRServer.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(inputRBlueprint) {
    // this.blueprintCreated.emit({
    //   serverName: inputRBlueprint.value,
    //   serverContent: this.newServerContent
    // })
  }

}
