import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  show: boolean = false;
  buttonName: any = 'Show';
  detail: string = "";
  log = [];

  constructor() {
    this.detail = "pa$$w0rd"
  }

  ngOnInit() { }

  toggle() {
    this.show = !this.show;
    this.log.push(this.log.length + 1);
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }

}
