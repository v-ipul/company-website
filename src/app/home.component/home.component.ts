import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

interface ServiceCard {
  image: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  

  slides: Slide[] = [
    {
      image: 'img1.png',
      title: 'Ways We Serve',
      subtitle: 'Delivering authentic, impactful solutions that truly reflect you.',
      description: 'From consulting to integration, implementation to managed services, Atman partners with industries to create transformative, client-centric outcomes.',
      buttonText: 'Read More'
    },
    {
      image: 'img2.png',
      title: 'Atman Intelligence',
      subtitle: 'Harnessing AI to unlock potential and reimagine tomorrow.',
      description: 'With powerful analytics, agentic tools, and seamless data orchestration, Atman AI enables faster insights, smarter automation, and resilient growth.',
      buttonText: 'Read More'
    },
    {
      image: 'img3.png',
      title: 'Being Atman',
      subtitle: 'Our spirit in action, shaping authentic futures.',
      description: 'Rooted in values, guided by purpose, and driven by collaborations — Atman embodies authenticity, empowering progress with integrity and vision.',
      buttonText: 'Learn More'
    },
    {
      image: 'img4.png',
      title: 'Wisdom',
      subtitle: 'Collective wisdom shaping direction, dialogue, and transformation.',
      description: 'Through research, case studies, and thought leadership, Atman shares perspectives that spark ideas, inspire conversations, and drive purposeful action.',
      buttonText: 'Read More'
    },
    {
      image: 'img5.png',
      title: 'AC Foundation',
      subtitle: 'Creating meaningful change through education, farming, and wellbeing.',
      description: 'Atman Foundation empowers communities by nurturing skills, strengthening livelihoods, and promoting holistic wellbeing — building brighter, inclusive futures for all.',
      buttonText: 'Read More'
    }
  ];

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


  





@HostBinding('style.backgroundImage') backgroundImage = `url('img1.png')`;
@HostBinding('style.backgroundSize') backgroundSize = 'cover';
@HostBinding('style.backgroundPosition') backgroundPosition = 'center';
@HostBinding('style.backgroundRepeat') backgroundRepeat = 'no-repeat';
@HostBinding('style.height') height = '100vh';    // Full viewport height
@HostBinding('style.width') width = '100%';       // Full width
@HostBinding('style.display') display = 'block';

@HostBinding('style.transition') transition = 'background-image 0.8s ease-in-out, opacity 0.8s ease-in-out';
 


  ngOnInit(): void {
    setInterval(() => this.nextSlide(), 5000);
  }



  nextSlide(): void {
    this.current = (this.current + 1) % this.slides.length;
    this.backgroundImage = `url('${this.slides[this.current].image}')`;
  }

  goToSlide(index: number): void {
    this.current = index;
    this.backgroundImage = `url('${this.slides[this.current].image}')`;
  }
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
