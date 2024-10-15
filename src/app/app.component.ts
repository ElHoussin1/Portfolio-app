import { Component, OnInit, HostListener } from '@angular/core';
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SkillsComponent } from "./components/skills/skills.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ContactComponent, AboutComponent, HomeComponent, ProjectsComponent, SkillsComponent]
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  isDarkMode = false; // Track if dark mode is on
  isBackToTopVisible = false; // Track visibility of back-to-top button
  isScrollToBottomVisible = true; // Track visibility of scroll-to-bottom button

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
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Show the "Back to Top" button after scrolling down 300px
    this.isBackToTopVisible = scrollTop > 300;

    // Show the "Scroll to Bottom" button unless the user is near the bottom of the page
    this.isScrollToBottomVisible = windowHeight + scrollTop < documentHeight - 50;
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

  // Scroll to bottom function
  scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
