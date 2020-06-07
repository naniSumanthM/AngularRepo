import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html'
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @ViewChild('test', {static: true}) input: ElementRef;

  constructor() {
  }

  ngOnInit() {
    console.log(this.input.nativeElement);
  }

  onAddServer(serverInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverInput.value,
      serverContent: contentInput.value
    });
  }

  onAddBlueprint(serverInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverInput.value,
      serverContent: contentInput.value
    });
  }
}
