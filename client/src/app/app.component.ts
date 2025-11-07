import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { RouterOutlet } from "@angular/router";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  protected title = 'Skinet';
  
}
