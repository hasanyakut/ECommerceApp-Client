import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr : ToastrService) { }
  message(message: string, title:string,toastrOptions : Partial<ToastrOptions>){
    this.toastr[toastrOptions.messageType](
      message,
      title
    )
  }
}

export class ToastrOptions{
  messageType: ToastrMessageType
}

export enum ToastrMessageType{
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}