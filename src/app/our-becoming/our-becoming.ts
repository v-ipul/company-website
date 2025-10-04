import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

interface ValueItem {
  key: string;
  title: string;
  description: string;
  image: string;
}

import { RouterLink } from '@angular/router';

interface Column {
  letter: string;
  title: string;
  description: string;
  image: string;
}

interface Panel {
  id: string;
  title: string;
  desc: string;
  img: string;
}

interface MenuItem {
  title: string;
  isOpen: boolean;
  left: { title: string; desc: string };
  right: { icon: string; title: string; sub: string[] }[];
}

interface RhythmSlide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-our-becoming',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-becoming.html',
  styleUrls: ['./our-becoming.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ flex: '0.8' })), // collapsed narrow state
      state('expanded', style({ flex: '4' })), // expanded wide state
      transition('collapsed <=> expanded', [animate('400ms ease-in-out')]),
    ]),
  ],
})
export class OurBecomingComponent implements OnInit, AfterViewInit {
  //  ngAfterViewInit() {
  //   this.startAutoScroll();
  // }



   activeIndex = 0;

  values: any[] = [
    {
      letter: 'A',
      title: 'Ambition',
      description:
        'We aim high, not for ourselves alone, but to create lasting impact for those we serve.',
      image:
        'bannerB1.jpg',
    },
    {
      letter: 'T',
      title: 'Trust',
      description:
        'Trust is the foundation of all our relationships—earned and nurtured every day.',
      image:
        'bannerS1.jpeg',
    },
    {
      letter: 'M',
      title: 'Mindful',
      description:
        'We act with awareness, respect, and consideration for others and the world.',
      image:
        'bannerS3.jpeg',
    },
    {
      letter: 'A',
      title: 'Accountability',
      description:
        'We take ownership of our actions, decisions, and outcomes with integrity.',
      image:
        'bannerS3.jpeg',
    },
    {
      letter: 'N',
      title: 'Noble',
      description:
        'We aspire to do what is right and noble, beyond just what is expected.',
      image:
        'bannerS4.jpeg',
    },
  ];

  setActive(index: number) {
    this.activeIndex = index;
  }

  @ViewChild('slider', { static: false }) slider!: ElementRef<HTMLDivElement>;
  isHovering = false;
  isDropdownOpen = false;
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  

  // Hero Video
  ngAfterViewInit(): void {
    if (this.heroVideo) {
      const video = this.heroVideo.nativeElement;
      video.muted = true;
      video.play().catch(err => console.log('⚠️ Autoplay blocked:', err));
    }
    this.autoScroll();
  }


  ngOnInit(): void {
    console.log('✅ OurBecomingComponent initialized successfully');
  }

  // Columns (Values)


  // Panels (Walk With Us / Tabs)
  activeTab: string = 'collaborative_culture';
  panels: Panel[] = [
    { id: 'collaborative_culture', title: 'Collaborative Culture', desc: 'At Atman, we believe every journey is unique—and together, we’re building a path where ambition meets opportunity. If you’re passionate about making an impact, eager to learn, and ready to help shape the future of technology and services, you’ll find your place here.', img: 'meeting.png' },
    { id: 'growth_learning', title: 'Growth Learning', desc: 'At Atman, we believe every journey is unique...', img: '01.jpg' },
    { id: 'purposeful_work', title: 'Purposeful Work', desc: 'At Atman, we believe every journey is unique...', img: 'acountibility.jpg' },
    { id: 'diversity_inclusion', title: 'Diversity & Inclusion', desc: 'At Atman, we believe every journey is unique...', img: 'Image.png' }
  ];


  cards = [
    { img: 'carousel-img-01.png', title: 'Authenticity', text: 'Be true, be you' },
    { img: 'carousel-img-02.png', title: '', text: 'We start by listening. We co-design solutions that fit your DNA' },
    { img: 'carousel-img-03.png', title: '', text: 'We deliver with care, making change seamless. And when it’s live, we stay with you—supporting, refining, and helping you grow.' },
    { img: 'carousel-img-04.png', title: '', text: 'You need a partner who can see beyond tools and buzzwords, to the heart of what makes you unique.' },
  ];

  // Duplicate cards dynamically for seamless scrolling
  get duplicatedCards() {
    return [...this.cards, ...this.cards];
  }

  private scrollStep = 2;      // pixels per move
  private intervalTime = 20;   // ms per move

  selectTab(tabId: string) { this.activeTab = tabId; }
  onHover(state: boolean): void { this.isHovering = state; }

  // Navbar & Mobile Menu
  mobileMenuOpen: boolean = false;
  toggleMobileMenu() { this.mobileMenuOpen = !this.mobileMenuOpen; }

  activeMobileMenu: string | null = null;
  toggleMobileSubMenu(menu: string) {
    this.activeMobileMenu = this.activeMobileMenu === menu ? null : menu;
  }


  menuOpen: boolean = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }

  submenuOpen: { [key: string]: boolean } = {};
  toggleSubmenu(key: string) { this.submenuOpen[key] = !this.submenuOpen[key]; }
  onDropdownHover(state: boolean): void { this.isDropdownOpen = state; }

  // Dropdowns Hover States
  isWaysDropdownOpen: boolean = false;
  isAtmanDropdownOpen: boolean = false;
  isWisdomDropdownOpen: boolean = false;
  isAcDropdownOpen: boolean = false;
  isContactDropdownOpen: boolean = false;

  onWaysDropdownHover(state: boolean) { this.isWaysDropdownOpen = state; }
  onAtmanDropdownHover(state: boolean) { this.isAtmanDropdownOpen = state; }
  onWisdomDropdownHover(state: boolean) { this.isWisdomDropdownOpen = state; }
  onAcDropdownHover(state: boolean) { this.isAcDropdownOpen = state; }
  onContactDropdownHover(state: boolean) { this.isContactDropdownOpen = state; }

  // Mega Menu (Mobile Only)
  activeMegaIndex: number | null = null;
  toggleMega(index: number) {
    if (window.innerWidth < 992) {
      this.activeMegaIndex = this.activeMegaIndex === index ? null : index;
    }
  }




  autoScroll() {
    const sliderEl = this.slider.nativeElement;
    const maxScroll = sliderEl.scrollWidth - sliderEl.clientWidth;
    let interval = setInterval(scrollFunc, this.intervalTime);

    sliderEl.addEventListener('mouseenter', () => clearInterval(interval));
    sliderEl.addEventListener('mouseleave', () => interval = setInterval(scrollFunc, this.intervalTime));

    function scrollFunc() {
      if (sliderEl.scrollLeft < maxScroll) sliderEl.scrollLeft += 1;
      else sliderEl.scrollLeft = 0;
    }
  }


  // Menu Items
  menuItems: MenuItem[] = [
    {
      title: 'Ways We Serve', isOpen: false,
      left: { title: 'Ways We Serve', desc: 'Delivering authentic, impactful solutions...' },
      right: [
        { icon: 'icon/view-grid.png', title: 'Analytics', sub: ['Churn Predictor', 'Forecaster Agent'] },
        { icon: 'icon/Industries_we_serve.png', title: 'Industries', sub: ['Manufacturing', 'Banking & Finance'] },
      ]
    },
    {
      title: 'AI', isOpen: false,
      left: { title: 'Artificial Intelligence', desc: 'Atman harnesses AI...' },
      right: [
        { icon: 'icon/view-grid.png', title: 'Analytics', sub: ['Turning data into foresight'] },
      ]
    }
  ];

  toggleMobileDropdown(item: MenuItem) { item.isOpen = !item.isOpen; }

  constructor() { }
}
