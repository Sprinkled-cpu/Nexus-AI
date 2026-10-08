import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- SMARTPHONES ---
  {
    id: 'phone-1',
    name: 'Google Pixel 8a',
    brand: 'Google',
    category: 'smartphones',
    price: 499,
    originalPrice: 549,
    rating: 4.6,
    reviewsCount: 1420,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    description: 'The AI-first phone with Google Tensor G3, extraordinary camera capabilities, and 7 years of updates.',
    features: [
      'Google Tensor G3 chip',
      '64MP dual-camera system with Best Take & Magic Eraser',
      '6.1" Actua OLED 120Hz display',
      'All-day battery life (up to 72 hours with Extreme Saver)',
      'IP67 water resistance'
    ],
    tags: ['phone', 'smartphone', 'under $500', 'budget', 'android', 'camera', 'ai', 'google'],
    specs: {
      'Display': '6.1-inch OLED 120Hz',
      'Processor': 'Tensor G3',
      'RAM / Storage': '8GB / 128GB',
      'Battery': '4,492 mAh',
      'Weight': '188g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'phone-2',
    name: 'Samsung Galaxy A35 5G',
    brand: 'Samsung',
    category: 'smartphones',
    price: 349,
    originalPrice: 399,
    rating: 4.4,
    reviewsCount: 890,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    description: 'Super AMOLED 120Hz screen, 50MP triple camera with OIS, and 5000mAh battery for unbeatable budget value.',
    features: [
      '6.6" Super AMOLED 120Hz display',
      '50MP main camera with Optical Image Stabilization',
      '5,000 mAh battery with 25W fast charge',
      'Corning Gorilla Glass Victus+ & IP67 rating',
      'Knox Vault hardware-backed security'
    ],
    tags: ['phone', 'smartphone', 'under $500', 'under $400', 'budget', 'samsung', '5g', 'battery'],
    specs: {
      'Display': '6.6-inch Super AMOLED 120Hz',
      'Processor': 'Exynos 1380',
      'RAM / Storage': '6GB / 128GB',
      'Battery': '5,000 mAh',
      'Weight': '209g'
    },
    inStock: true
  },
  {
    id: 'phone-3',
    name: 'OnePlus 12R',
    brand: 'OnePlus',
    category: 'smartphones',
    price: 499,
    originalPrice: 599,
    rating: 4.7,
    reviewsCount: 950,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    description: 'Flagship killer with Snapdragon 8 Gen 2, blazing 100W SUPERVOOC charging, and 5500mAh powerhouse battery.',
    features: [
      'Snapdragon 8 Gen 2 high-performance chipset',
      '1.5K 120Hz ProXDR 4th Gen LTPO display',
      '100W SUPERVOOC charging (1-100% in 26 mins)',
      '5,500 mAh battery',
      'Dual Cryo-velocity VC cooling for gaming'
    ],
    tags: ['phone', 'smartphone', 'under $500', 'gaming', 'fast charging', 'performance', 'flagship killer'],
    specs: {
      'Display': '6.78-inch AMOLED 120Hz LTPO',
      'Processor': 'Snapdragon 8 Gen 2',
      'RAM / Storage': '16GB / 256GB',
      'Battery': '5,500 mAh',
      'Weight': '207g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'phone-4',
    name: 'Apple iPhone 15 Pro',
    brand: 'Apple',
    category: 'smartphones',
    price: 999,
    originalPrice: 1099,
    rating: 4.8,
    reviewsCount: 2310,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    description: 'Forged in titanium with revolutionary A17 Pro chip, customizable Action button, and versatile 48MP camera system.',
    features: [
      'Aerospace-grade titanium design with textured matte glass',
      'A17 Pro chip with 6-core GPU for console gaming',
      '48MP Main camera with 3x optical telephoto lens',
      'Action button for fast shortcuts',
      'USB-C with USB 3 speeds up to 10Gb/s'
    ],
    tags: ['phone', 'smartphone', 'premium', 'apple', 'ios', 'iphone', 'flagship', 'titanium', 'camera'],
    specs: {
      'Display': '6.1-inch Super Retina XDR OLED ProMotion',
      'Processor': 'Apple A17 Pro (3nm)',
      'RAM / Storage': '8GB / 128GB',
      'Battery': '3,274 mAh',
      'Weight': '187g'
    },
    inStock: true
  },

  // --- LAPTOPS ---
  {
    id: 'laptop-1',
    name: 'Apple MacBook Air 13" (M2)',
    brand: 'Apple',
    category: 'laptops',
    price: 999,
    originalPrice: 1099,
    rating: 4.9,
    reviewsCount: 3100,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: 'Incredibly thin and fast laptop with Apple M2 chip, silent fanless design, and up to 18 hours of battery life.',
    features: [
      'Apple M2 chip with 8-core CPU and 10-core GPU',
      'Liquid Retina display with 500 nits brightness',
      'Up to 18 hours battery life',
      'Silent, completely fanless acoustic design',
      'MagSafe 3 charging and dual Thunderbolt ports'
    ],
    tags: ['laptop', 'macbook', 'coding', 'programming', 'lightweight', 'apple', 'students', 'battery life'],
    specs: {
      'Display': '13.6-inch Liquid Retina (2560x1664)',
      'Processor': 'Apple M2 8-core',
      'RAM / Storage': '16GB Unified / 256GB SSD',
      'Battery': '52.6 Wh (Up to 18h)',
      'Weight': '1.24 kg'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'laptop-2',
    name: 'Acer Swift Go 14 (OLED)',
    brand: 'Acer',
    category: 'laptops',
    price: 649,
    originalPrice: 799,
    rating: 4.5,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant 2.8K 90Hz OLED screen paired with Intel Core Ultra 5 and AI Boost engine in an ultra-portable chassis.',
    features: [
      '14" 2.8K 90Hz 100% DCI-P3 OLED display',
      'Intel Core Ultra 5 125H processor with Intel Arc Graphics',
      'Dedicated Intel AI NPU for Copilot and video effects',
      '1440p QHD webcam with temporal noise reduction',
      'Thin aluminum chassis weighing only 1.3kg'
    ],
    tags: ['laptop', 'oled', 'under $700', 'budget', 'students', 'office', 'lightweight', 'intel'],
    specs: {
      'Display': '14-inch 2.8K (2880x1800) OLED 90Hz',
      'Processor': 'Intel Core Ultra 5 125H',
      'RAM / Storage': '16GB LPDDR5X / 512GB PCIe Gen4',
      'Battery': '65 Wh (Up to 12h)',
      'Weight': '1.32 kg'
    },
    inStock: true
  },
  {
    id: 'laptop-3',
    name: 'Lenovo Legion Slim 5 Gaming Laptop',
    brand: 'Lenovo',
    category: 'laptops',
    price: 1249,
    originalPrice: 1449,
    rating: 4.7,
    reviewsCount: 880,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=800&q=80',
    description: 'Pure gaming and creative horsepower with AMD Ryzen 7 8845HS and NVIDIA GeForce RTX 4060 graphics.',
    features: [
      'NVIDIA GeForce RTX 4060 8GB GDDR6 GPU (140W TGP)',
      'AMD Ryzen 7 8845HS 8-core / 16-thread processor',
      '16" WQXGA (2560x1600) 165Hz IPS gaming display',
      'Legion ColdFront 5.0 advanced thermal cooling',
      'Legion TrueStrike keyboard with anti-ghosting'
    ],
    tags: ['laptop', 'gaming', 'rtx 4060', 'video editing', '3d modeling', 'heavy work', 'lenovo'],
    specs: {
      'Display': '16-inch WQXGA 165Hz 100% sRGB',
      'Processor': 'AMD Ryzen 7 8845HS',
      'RAM / Storage': '16GB DDR5 / 1TB NVMe SSD',
      'GPU': 'RTX 4060 8GB',
      'Weight': '2.3 kg'
    },
    inStock: true
  },

  // --- AUDIO ---
  {
    id: 'audio-1',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'audio',
    price: 398,
    originalPrice: 449,
    rating: 4.8,
    reviewsCount: 4200,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    description: 'Industry-leading noise canceling headphones with dual processors and 8 microphones for unmatched silence and crystal calls.',
    features: [
      'Two processors and 8 microphones for auto-optimizing ANC',
      'Up to 30 hours battery life with quick charging',
      'Crystal clear hands-free calling with AI voice beamforming',
      'Multipoint Bluetooth connection to switch between devices',
      'Ultra-comfortable, lightweight soft fit leather'
    ],
    tags: ['audio', 'headphones', 'anc', 'noise cancelling', 'travel', 'wireless', 'sony', 'audiophile'],
    specs: {
      'Driver': '30mm carbon fiber composite',
      'Battery': '30h (ANC on) / 40h (ANC off)',
      'Connectivity': 'Bluetooth 5.2 / LDAC / 3.5mm jack',
      'Weight': '250g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'audio-2',
    name: 'Anker Soundcore Life Q30',
    brand: 'Anker',
    category: 'audio',
    price: 79,
    originalPrice: 99,
    rating: 4.5,
    reviewsCount: 6500,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'The best budget active noise cancelling headphones with hybrid ANC, customizable EQ, and 40 hours of playtime.',
    features: [
      'Hybrid active noise cancellation (Transport, Outdoor, Indoor)',
      'Hi-Res Audio certified with 40mm silk diaphragm drivers',
      '40-hour playtime in ANC mode (60 hours normal mode)',
      'Soundcore companion app with 22 EQ presets',
      'Fast 5-minute charge gives 4 hours of music'
    ],
    tags: ['audio', 'headphones', 'budget', 'under $100', 'anc', 'noise cancelling', 'anker', 'long battery'],
    specs: {
      'Driver': '40mm dynamic drivers',
      'Battery': '40-60 hours',
      'Weight': '260g',
      'App Support': 'Soundcore iOS / Android'
    },
    inStock: true
  },
  {
    id: 'audio-3',
    name: 'Apple AirPods Pro (2nd Gen, USB-C)',
    brand: 'Apple',
    category: 'audio',
    price: 249,
    originalPrice: 279,
    rating: 4.8,
    reviewsCount: 5400,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    description: 'Up to 2x more active noise cancellation, Adaptive Audio, and personalized Spatial Audio with dynamic head tracking.',
    features: [
      'Apple H2 headphone chip delivering smarter noise cancellation',
      'Adaptive Audio dynamically blends Transparency and ANC',
      'Conversation Awareness lowers volume when you speak',
      'MagSafe Charging Case (USB-C) with speaker and lanyard loop',
      'Dust, sweat, and water resistance (IP54)'
    ],
    tags: ['audio', 'earbuds', 'in-ear', 'apple', 'anc', 'wireless', 'airpods', 'iphone companion'],
    specs: {
      'Chip': 'Apple H2 chip',
      'Battery': '6 hours per charge (30 hours with case)',
      'Water Resistance': 'IP54',
      'Weight': '5.3g per earbud'
    },
    inStock: true,
    popular: true
  },

  // --- WEARABLES ---
  {
    id: 'watch-1',
    name: 'Garmin Forerunner 265',
    brand: 'Garmin',
    category: 'wearables',
    price: 449,
    originalPrice: 479,
    rating: 4.8,
    reviewsCount: 740,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    description: 'The ultimate GPS running smartwatch with brilliant AMOLED touchscreen, training readiness metrics, and 13 days of battery.',
    features: [
      '1.3" colorful AMOLED touchscreen display',
      'Morning Report with sleep score, HRV status, and workout suggestions',
      'Multi-band GPS for pinpoint pacing accuracy',
      'Training Readiness and Recovery Time insights',
      'Up to 13 days of battery life in smartwatch mode'
    ],
    tags: ['wearable', 'smartwatch', 'fitness', 'running', 'marathon', 'garmin', 'gps', 'under $500', 'sports'],
    specs: {
      'Display': '1.3" AMOLED 416x416',
      'Battery': 'Up to 13 days (20 hrs in GPS mode)',
      'Water Rating': '5 ATM (50 meters)',
      'Weight': '47g'
    },
    inStock: true
  },
  {
    id: 'watch-2',
    name: 'Apple Watch Series 9',
    brand: 'Apple',
    category: 'wearables',
    price: 399,
    originalPrice: 429,
    rating: 4.7,
    reviewsCount: 2200,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    description: 'Powerful S9 SiP with Double Tap gesture, brighter display, on-device Siri, and advanced health & ECG sensors.',
    features: [
      'Double tap gesture for magical one-handed interactions',
      'Edge-to-edge Always-On Retina display (up to 2000 nits)',
      'ECG app and Blood Oxygen sensor',
      'Crash Detection & Fall Detection for emergency SOS',
      'Carbon neutral product combinations available'
    ],
    tags: ['wearable', 'smartwatch', 'apple', 'health', 'ecg', 'fitness', 'iphone companion', 'under $500'],
    specs: {
      'Chip': 'S9 SiP dual-core',
      'Display': 'OLED Always-On 2000 nits',
      'Battery': '18 hours (36h Low Power Mode)',
      'Weight': '38.7g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'watch-3',
    name: 'Amazfit GTR 4',
    brand: 'Amazfit',
    category: 'wearables',
    price: 199,
    originalPrice: 229,
    rating: 4.4,
    reviewsCount: 680,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    description: 'Classic round design with 14-day ultra battery life, dual-band GPS tracking, and 150+ sports modes.',
    features: [
      'Ultra-long 14-day battery life on a single charge',
      'Dual-band circularly-polarized GPS antenna system',
      '1.43" HD AMOLED display with anti-glare glass bezel',
      'Bluetooth phone calls and local music storage',
      'BioTracker 4.0 PPG biometric optical sensor'
    ],
    tags: ['wearable', 'smartwatch', 'budget', 'under $200', 'long battery', 'fitness', 'sports'],
    specs: {
      'Display': '1.43-inch AMOLED',
      'Battery': '14 days typical use',
      'Water Rating': '5 ATM',
      'Weight': '34g (without strap)'
    },
    inStock: true
  },

  // --- GAMING ---
  {
    id: 'gaming-1',
    name: 'Valve Steam Deck OLED (512GB)',
    brand: 'Valve',
    category: 'gaming',
    price: 549,
    originalPrice: 599,
    rating: 4.9,
    reviewsCount: 1650,
    image: 'https://images.unsplash.com/photo-1612287233649-752178051287?auto=format&fit=crop&w=800&q=80',
    description: 'Handheld gaming PC powerhouse featuring a stunning 7.4" 90Hz HDR OLED screen and 50Wh battery for on-the-go AAA gaming.',
    features: [
      '7.4" 90Hz HDR OLED display with 1,000,000:1 contrast ratio',
      '6nm AMD APU for improved thermal efficiency and speed',
      '50Wh battery providing 3-12 hours of gameplay',
      'Wi-Fi 6E for ultra-fast game downloads and cloud streaming',
      'Ergonomic full-size controls with capacitive thumbsticks'
    ],
    tags: ['gaming', 'handheld', 'pc gaming', 'steam', 'portable', 'oled', 'console'],
    specs: {
      'Display': '7.4" OLED 90Hz HDR 1000 nits',
      'APU': '6nm AMD Zen 2 (4c/8t) + RDNA 2',
      'Storage': '512GB NVMe SSD',
      'Battery': '50Wh',
      'Weight': '640g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'gaming-2',
    name: 'Sony PlayStation 5 Slim Digital',
    brand: 'Sony',
    category: 'gaming',
    price: 449,
    originalPrice: 499,
    rating: 4.8,
    reviewsCount: 3800,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    description: 'Sleek, slimmed-down console design packing 1TB of ultra-high speed SSD storage, ray tracing, and 120fps capability.',
    features: [
      '1TB built-in high speed SSD storage',
      'Haptic feedback and adaptive triggers via DualSense wireless controller',
      'Tempest 3D AudioTech for immersive soundscapes',
      'Support for 4K 120Hz TVs and 8K displays',
      'Hardware-accelerated ray tracing'
    ],
    tags: ['gaming', 'console', 'ps5', 'playstation', 'sony', 'under $500', '4k gaming', 'living room'],
    specs: {
      'Processor': 'Custom AMD Zen 2 8-core',
      'GPU': 'AMD RDNA 2 10.3 TFLOPs',
      'Storage': '1TB NVMe SSD',
      'Output': 'HDMI 2.1 up to 4K 120Hz'
    },
    inStock: true
  },
  {
    id: 'gaming-3',
    name: 'Nintendo Switch OLED Model',
    brand: 'Nintendo',
    category: 'gaming',
    price: 349,
    originalPrice: 379,
    rating: 4.8,
    reviewsCount: 4500,
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80',
    description: 'Play at home on the TV or on-the-go with a vibrant 7-inch OLED screen, wide adjustable stand, and enhanced audio.',
    features: [
      '7-inch OLED screen with vivid colors and crisp contrast',
      'Wide adjustable tabletop stand for comfortable multiplayer',
      'Wired LAN port in the TV dock',
      '64GB internal storage plus microSD expansion',
      'Play anywhere in TV mode, Tabletop mode, or Handheld mode'
    ],
    tags: ['gaming', 'nintendo', 'switch', 'handheld', 'family', 'portable', 'under $400', 'under $500'],
    specs: {
      'Display': '7.0-inch OLED 720p (1080p docked)',
      'Storage': '64GB internal (expandable up to 2TB)',
      'Battery': '4.5 - 9.0 hours',
      'Weight': '420g with Joy-Cons'
    },
    inStock: true
  },

  // --- CAMERAS & ACCESSORIES ---
  {
    id: 'camera-1',
    name: 'Sony ZV-E10 Mirrorless Camera',
    brand: 'Sony',
    category: 'cameras',
    price: 698,
    originalPrice: 798,
    rating: 4.6,
    reviewsCount: 710,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    description: 'Large 24.2 MP APS-C sensor camera engineered for content creators with 4K video, flip screen, and directional 3-capsule mic.',
    features: [
      '24.2 MP APS-C Exmor CMOS sensor',
      'Fast Hybrid AF with Real-time Eye AF for humans and animals',
      'Product Showcase Setting for beauty and tech reviews',
      'Side-opening vari-angle LCD touch screen',
      '4K HDR recording with background defocus button'
    ],
    tags: ['camera', 'vlogging', 'youtube', 'content creator', 'video', 'mirrorless', 'sony', 'photography'],
    specs: {
      'Sensor': '24.2MP APS-C',
      'Video': '4K at 30fps / 1080p at 120fps',
      'ISO Range': '100 - 32,000',
      'Weight': '343g'
    },
    inStock: true
  },
  {
    id: 'acc-1',
    name: 'Logitech MX Master 3S Wireless Mouse',
    brand: 'Logitech',
    category: 'accessories',
    price: 99,
    originalPrice: 119,
    rating: 4.9,
    reviewsCount: 5200,
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic ergonomic productivity mouse with 8K DPI any-surface tracking and 90% quieter clicks.',
    features: [
      'MagSpeed electromagnetic scrolling - 1,000 lines in 1 second',
      '8,000 DPI sensor tracks on glass and any surface',
      'Quiet clicks with 90% reduced click noise',
      'App-specific customizations and cross-computer Flow control',
      'Ergonomic silhouette supporting hand and wrist'
    ],
    tags: ['accessories', 'mouse', 'productivity', 'office', 'coding', 'ergonomic', 'under $100', 'logitech'],
    specs: {
      'DPI': '200 to 8000 DPI',
      'Battery': 'Up to 70 days per full charge',
      'Connectivity': 'Bluetooth Low Energy & Logi Bolt',
      'Weight': '141g'
    },
    inStock: true,
    popular: true
  },
  {
    id: 'acc-2',
    name: 'Anker Prime 20,000mAh Power Bank (200W)',
    brand: 'Anker',
    category: 'accessories',
    price: 109,
    originalPrice: 129,
    rating: 4.7,
    reviewsCount: 1120,
    image: 'https://images.unsplash.com/photo-1609592426867-0c7f12e1dfdf?auto=format&fit=crop&w=800&q=80',
    description: 'Ultra-high 200W total output portable charger capable of fast-charging two laptops simultaneously with smart digital display.',
    features: [
      '200W total multi-device output (up to 100W per port)',
      '20,000 mAh capacity charges a MacBook Pro 16" halfway in 40 mins',
      'Smart digital display reveals battery percentage and live wattage',
      'ActiveShield 2.0 temperature monitoring 3 million times a day',
      'Compact can-sized travel-friendly footprint'
    ],
    tags: ['accessories', 'power bank', 'charger', 'portable', 'travel', 'anker', 'fast charging', 'usb-c'],
    specs: {
      'Capacity': '20,000 mAh',
      'Max Output': '200W Total (Dual 100W)',
      'Ports': '2x USB-C + 1x USB-A',
      'Weight': '540g'
    },
    inStock: true
  }
];

export const SAMPLE_QUERIES = [
  { label: '📱 Phone under $500', query: 'I want a phone under $500 with great camera and battery' },
  { label: '💻 Coding laptop', query: 'Best lightweight laptop for coding and web development under $1200' },
  { label: '🎧 Noise-cancelling headphones', query: 'Noise cancelling headphones for travel and flights' },
  { label: '🏃 Fitness smartwatch', query: 'Smartwatch for marathon running and fitness tracking' },
  { label: '🎮 Handheld gaming console', query: 'Portable handheld gaming device under $600' },
  { label: '💼 Productivity accessories under $100', query: 'Productivity mouse and desk accessories under $100' }
];
