import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../../services/endpoint.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  items: string[] = ['This', 'That', 'The Other'];
  item: string = '';

  constructor(private endpointService: EndpointService) {}

  ngOnInit(): void {
    this.endpointService
      .getHelloWorld()
      .subscribe((value: { hello: string }) => {
        console.log(value);
      });
  }

  addItem() {
    this.items.push(this.item);
  }

  removeItem() {
    this.items.pop();
  }
}
