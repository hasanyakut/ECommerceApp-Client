import { Component, OnInit } from '@angular/core';
import $ from 'jquery';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ECommerceClient';

  ngOnInit(): void{
    $.get("https://localhost:7285/api/product", data => {
      console.log(data)
    })
  }
  
}

