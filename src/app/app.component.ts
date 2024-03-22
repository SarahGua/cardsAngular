import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat Tree', 
      imageUrl : 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today'
    },
    { 
      title: 'Snowy Mountain', 
      imageUrl : 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'I saw this mountain today'
    },
    { 
      title: 'Mountain biking', 
      imageUrl : 'assets/biking.jpeg',
      username: 'biking',
      content: 'I did some biking today'
    }
  ]
}
