import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DiaryComponent } from './diary/diary.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todos';
}
