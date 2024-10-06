import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  isDarkMode = false; // Track if dark mode is on
  isBackToTopVisible = false; // Track visibility of back to top button

  ngOnInit() {
    // Check for saved theme in localStorage and apply it
    if (this.isBrowser()) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.enableDarkMode(); // If saved as 'dark', enable dark mode
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isBackToTopVisible = window.pageYOffset > 300;
  }

  // Toggle between dark and light modes
  toggleDarkMode() {
    if (this.isDarkMode) {
      this.disableDarkMode(); // If dark mode is active, disable it
    } else {
      this.enableDarkMode(); // If dark mode is not active, enable it
    }
  }

  // Enable dark mode (add 'dark-mode' class to body)
  enableDarkMode() {
    document.body.classList.add('dark-mode'); // Add 'dark-mode' class to <body>
    localStorage.setItem('theme', 'dark'); // Save preference in localStorage
    this.isDarkMode = true;
  }

  // Disable dark mode (remove 'dark-mode' class from body)
  disableDarkMode() {
    document.body.classList.remove('dark-mode'); // Remove 'dark-mode' class from <body>
    localStorage.setItem('theme', 'light'); // Save preference in localStorage
    this.isDarkMode = false;
  }

  // Utility function to check if we're in the browser environment
  isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Scroll to top function
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}