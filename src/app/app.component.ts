import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ECommerceClient';

  constructor(private toastrService: CustomToastrService) {

    toastrService.message("Merhaba", "Hasan", {messageType : ToastrMessageType.Info});
    toastrService.message("Merhaba", "Hasan", {messageType : ToastrMessageType.Error});
    toastrService.message("Merhaba", "Hasan", {messageType : ToastrMessageType.Success});
    toastrService.message("Merhaba", "Hasan", {messageType : ToastrMessageType.Warning});
  
  }

}