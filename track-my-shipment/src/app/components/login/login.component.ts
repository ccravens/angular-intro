import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  items: string[] = ['This', 'That', 'The Other'];
  item: string = '';

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.items.push(this.item);
  }

  removeItem() {
    this.items.pop();
  }
}
