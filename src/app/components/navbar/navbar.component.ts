import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  lang: string | null | undefined;
  constructor() {}

  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 100) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
  }
  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    window.location.reload();
  }
}
