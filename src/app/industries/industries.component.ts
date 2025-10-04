import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServiceCard {
  image: string;
  title: string;
  subtitle: string;
}
@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './industries.html',
  styleUrls: ['./industries.css']
})
export class IndustriesComponent {

  cards: ServiceCard[] = [
    { image: 'card1.png', title: 'Implementation & Integration', subtitle: 'Making change smooth' },
    { image: 'card2.png', title: 'Consulting', subtitle: 'Clarity before the leap.' },
    { image: 'card3.png', title: 'Managed Services', subtitle: 'Keeping you ahead' },
  ];

  current = 0;
  currentIndex = 0;
  mobileMenuOpen = false;
  isHovering = false;
isDropdownOpen = false;
  mobileSubmenuOpen = false;
  isCollapsed = true;
  navHovered = false;

isContactDropdownOpen: boolean = false;

onContactDropdownHover(state: boolean) {
  this.isContactDropdownOpen = state;
}

isWisdomDropdownOpen: boolean = false;

onWisdomDropdownHover(state: boolean) {
  this.isWisdomDropdownOpen = state;
}
  isAcDropdownOpen: boolean = false;
onAcDropdownHover(state: boolean) {
  this.isAcDropdownOpen = state;
}



  toggleMobileSubmenu(): void {
    this.mobileSubmenuOpen = !this.mobileSubmenuOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleNavbar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  isMenuOpen = false;


  isWaysDropdownOpen = false;
isAtmanDropdownOpen = false;

// Ways We Serve dropdown hover
onWaysDropdownHover(state: boolean) {
  this.isWaysDropdownOpen = state;
}

// Being Atman dropdown hover
onAtmanDropdownHover(state: boolean) {
  this.isAtmanDropdownOpen = state;
}


  constructor() {}
 toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onHover(state: boolean): void {
    this.isHovering = state;
  }

  onDropdownHover(state: boolean): void {
    this.isDropdownOpen = state;
  }

  


activeMegaIndex: number | null = null;

toggleMega(index: number) {
  const isMobile = window.innerWidth < 992;
  if (!isMobile) return;
  this.activeMegaIndex = this.activeMegaIndex === index ? null : index;
}

  
  get prevIndex() {
    return (this.currentIndex - 1 + this.cards.length) % this.cards.length;
  }
  get nextIndex() {
    return (this.currentIndex + 1) % this.cards.length;
  }

  prevCard() {
  this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
}

nextCard() {
  this.currentIndex = (this.currentIndex + 1) % this.cards.length;
}



// Get card style for circular positioning
getCardStyle(index: number) {
  const total = this.cards.length;
  const offset = index - this.currentIndex;

  // Circular offset
  const pos = ((offset + total) % total);

  // Define positions (left, center, right)
  let style: any = {
    left: '50%',
    transform: 'translateX(-50%) scale(0.7)',
    zIndex: 1,
    opacity: 0.5
  };

  if (pos === 0) {
    style = { left: '50%', transform: 'translateX(-50%) scale(1)', zIndex: 5, opacity: 1 };
  } else if (pos === 1 || pos === - (total - 1)) {
    style = { left: '75%', transform: 'translateX(-50%) scale(0.8)', zIndex: 3, opacity: 0.7 };
  } else if (pos === total - 1 || pos === -1) {
    style = { left: '25%', transform: 'translateX(-50%) scale(0.8)', zIndex: 3, opacity: 0.7 };
  } else {
    style = { left: '100%', transform: 'translateX(-50%) scale(0.6)', zIndex: 0, opacity: 0 };
  }

  return style;
}


}
