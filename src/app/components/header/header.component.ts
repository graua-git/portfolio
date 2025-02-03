import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}

  reroute(path: string) {
    this.router.navigate([path]);
  }

  isActive(path: string) {
    return this.router.url === path;
  }
}
