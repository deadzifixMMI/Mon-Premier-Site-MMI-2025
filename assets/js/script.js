document.addEventListener('DOMContentLoaded', () => {

  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    link.classList.toggle('active', linkPath === currentPath);
  });

  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-track img');
  const prev = document.querySelector('.arrow.left');
  const next = document.querySelector('.arrow.right');

  const carouselTexts = [
  "La Moisson (Les Moyettes) Blanche Hoschedé-Monet",
  "Summer I Perle Fine",
  "La Luna Leonor Fini",
  "Jeune femme à la guitare (Young woman with a guitar) Marie Laurencin"
];

const textEl = document.getElementById('carousel-text');


  if (track && slides.length && prev && next) {
    let index = 0;

    if (textEl) {
      textEl.textContent = carouselTexts[0];
    }

    function updateCarousel() {
      const slideWidth = slides[0].clientWidth;
      track.style.transform = `translateX(-${index * slideWidth}px)`;

      if (textEl) {
        textEl.classList.add('fade-out');

        setTimeout(() => {
          textEl.textContent = carouselTexts[index];
          textEl.classList.remove('fade-out');
        }, 200);
      }
    }


    next.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      updateCarousel();
    });

    prev.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
  }

});

const translations = {
  fr: {
    'nav.home': 'ACCUEIL',
    'nav.museum': 'LE MUSÉE',
    'nav.exhibitions': 'EXPOSITIONS',
    'nav.info': 'INFOS PRATIQUES',

    'hero.title': 'Premier musée privé dédié aux\nfemmes artistes en Europe',
    'hero.intro': `Le Musée de la Famm met à l’honneur les femmes dans l’art et la culture,
    en valorisant leur créativité, leur engagement et leur influence à travers
    les époques. À travers ses collections et expositions, le musée donne une voix
    aux artistes et aux figures féminines souvent oubliées, tout en invitant le
    public à porter un regard nouveau sur leur place essentielle dans l’histoire
    et la société.`,

    'article.text':' "ALORS QUE JE FINISSAIS DE <br> RELIRE UN GRAND CLASSIQUE DE <br> L’HISTOIRE DE L’ART ET QUE J’EN <br> TOURNAIS LA DERNIÈRE PAGE, JE <br> ME SUIS DEMANDÉ « MAIS OU <br> SONT LES FEMMES ?» ',
    'visit.title':' PRÉPAREZ VOTRE VISITE',
    'event.title':' ÉVÈNEMENT A VENIR',
    'textexpo.title':' L’HEURE FAMM accueille Eva Laugier, chargée des publics à la Fondation Hartung-Bergman. De sa jeunesse bohème et engagée, à ses révélations esthétiques et picturales, en passant par son destin amoureux hors du commun préservé au sein d’une oliveraie antiboise, cette conférence invite à découvrir la voie romanesque de cette artiste ; guidée par une seule lumière, la sienne.',
    'button.title':'Découvrir l’exposition',
    'expo.title': 'EXPOSITION DU MOMENT',
    'firstexpo.title':'Première exposition institutionnelle en Europe consacrée à l’artiste Elizabeth Colomba. De la splendeur baroque de Vermeer et Caravage aux visions orientalistes d’Ingres et de Constant, en passant par la grâce rococo de Vigée Le Brun, l’artiste revisite les canons picturaux des maîtres anciens pour réécrire l’histoire avec un narratif inclusif et actuel.',
    'button1.title': 'Découvrir l’exposition',
    'exposition.title': 'EXPOSITION FIXE',
    'text1.title': "Cette collection du FAMM s'inscrit dans une volonté de donner aux artistes femmes la visibilité que leur talent mérite.En attendant le programme d’expositions temporaires du FAMM, qui débutera après l’été, les visiteurs peuvent découvrir une sélection d’œuvres de la collection permanente, couvrant les principaux courants artistiques, de l’impressionnisme à l’art contemporain. Près de 100 œuvres issues de la Collection Christian Levett sont ainsi exposées, réalisées par près de 90 artistes du monde entier.",
    'button2.title' : 'Découvrir l’exposition',
    'name.title': 'Nom',
    'adress.title': 'NOTRE ADRESSE',
    'maps.title': 'FAMM (Femmes Artistes du Musée de Mougins)<br> 32 Rue du Commandeur, 06250 Mougins <br>Le FAMM est ouvert tous les jours de 10h à 18h',
    'expositiontempo.title':'Exposition temporaire',
    'firstexpo2.title':'Première exposition institutionnelle en Europe consacrée à l’artiste Elizabeth Colomba Le 19 octobre 2025, FAMM a inauguré REMINISCENCE, la première exposition institutionnelle en Europe consacrée à l’artiste française Elizabeth Colomba, basée à New York. Placée sous le commissariat de Simon de Pury, figure emblématique du monde de l’art, l’exposition se tiendra au Centre d’Art de Mougins, récemment rénové et installé dans un bâtiment médiéval au cœur du village historique. Organisée en partenariat avec Collecta et en collaboration avec la Ville de Mougins, l’exposition sera présentée du 18 octobre 2025 au 6 avril 2026',
    'dateexpo.title':'13 Octobre - 6 Avril 2025 ',
    'buttonexpo.title': 'Découvrir l’exposition',
    'evexpo.title': 'Évenèment à venir',
    'coordonnée1-title' : 'FAMM (Femmes Artistes du Musée de Mougins)',
    'quoteexpo.title' : 'L’Heure FAMM accueille Eva Laugier, chargée des publics à la Fondation Hartung-Bergman. De sa jeunesse bohème et engagée, à ses révélations esthétiques et picturales, en passant par son destin amoureux hors du commun préservé au sein d’une oliveraie antiboise, cette conférence invite à découvrir la voie romanesque de cette artiste ; guidée par une seule lumière, la sienne.',
    'dateexpo.title': 'Mercredi 10 Décembre 2025',
    'coordonné2-title' : '32 Rue du Commandeur, 06250 Mougins',
    'buttonexpo1.title':'Découvrir l’exposition',
    'expo1.title': 'Exposition temporaire',
    'quoteexpo1.title': 'FAMM (Femmes Artistes du Musée de Mougins) dévoile au public depuis le 21 juin 2024, une centaine d’œuvres réalisées par près de 90 artistes femmes originaires du monde entier.  Situé en plein cœur du village historique de Mougins depuis 2011, abritent désormais des peintures, sculptures et photographies d’artistes majeures ayant marqué les grands mouvements artistiques de l’impressionnisme à l’art contemporain du XXIème siècle.  Parmi les grands noms de l’histoire de l’art, FAMM expose des œuvres de Berthe Morisot, Mary Cassatt, Eva Gonzalès, Blanche Hoschedé-Monet, Louise Nevelson, Barbara Hepworth, Frida Kahlo...',
    'ticketing.button': 'Billeterie',
    'buttonexpo2.title':'Découvrir l’exposition',
    'socialmedia.title': 'NOS RÉSEAUX',
    'placeholder.text': 'Ecrivez votre message...',
    'nameexpo.title' : 'Nom',
    'adressexpo.title':'NOTRE ADRESSE',
    'mapsexpo.title': 'FAMM (Femmes Artistes du Musée de Mougins) 32 Rue du Commandeur, 06250 Mougins Le FAMM est ouvert tous les jours de 10h à 18h',
    'socialmediaexpo.title': 'NOS RÉSEAUX',
    'joinusexpo.title': 'JOIGNEZ-NOUS',
    'submit.text': 'SOUMETTRE'
  




  },

  en: {
    'nav.home': 'HOME',
    'nav.museum': 'THE MUSEUM',
    'nav.exhibitions': 'EXHIBITIONS',
    'nav.info': 'PRACTICAL INFO',

    'hero.title': 'The first private museum dedicated to\nwomen artists in Europe',
  'hero.intro': `The FAMM Museum highlights women in art and culture by celebrating
  their creativity, commitment, and influence across the centuries. Through its
  collections and exhibitions, the museum gives a voice to women artists and
  historical female figures who have too often been overlooked, while inviting
  visitors to take a fresh look at their essential role in history and society.`,

  'article.text': '“AS I FINISHED REREADING <br> A GREAT CLASSIC OF ART <br> HISTORY AND TURNED THE LAST PAGE, I ASKED MYSELF «BUT <br> WHERE ARE THE WOMEN?» ” ',
  'visit.title':' PREPARE YOUR VISIT ',
  'event.title':' UPCOMING EVENT',   
  'textexpo.title':'L’HEURE FAMM welcomes Eva Laugier, Head of Public Programs at the Hartung-Bergman Foundation. From her bohemian and politically engaged youth to her aesthetic and pictorial revelations, and her extraordinary love story preserved within an olive grove in Antibes, this talk invites you to discover the captivating journey of this artist, guided by a single light: her own.',
  'button.title':'Discover exhibition',
  'expo.title': 'CURRENT EXHIBITION',
  'firstexpo.title': 'The first institutional exhibition in Europe dedicated to the artist Elizabeth Colomba. From the Baroque splendor of Vermeer and Caravaggio to the Orientalist visions of Ingres and Constant, by way of the Rococo grace of Vigée Le Brun, the artist revisits the pictorial canons of the Old Masters to rewrite history with an inclusive and contemporary narrative.',
  'button1.title': 'Discover exhibition',
  'exposition.title': 'PERMANENT EXHIBITION',
  'text1.title': "This FAMM collection reflects a commitment to giving women artists the visibility their talent deserves. While awaiting the FAMM's program of temporary exhibitions, which will begin after the summer, visitors can discover a selection of works from the permanent collection, covering the main artistic movements, from Impressionism to contemporary art. Nearly 100 works from the Christian Levett Collection are on display, created by almost 90 artists from around the world.",
  'button2.title' : 'Discover exhibition',
  'name.title':'Name',
  'adress.title': 'OUR ADDRESS',
  'maps.title': 'FAMM (Women Artists of the Mougins Museum) <br>32 Rue du Commandeur, 06250 Mougins <br>FAMM is open every day from 10 am to 6 pm',
  'expositiontempo.title':'Temporary Exhibition',
  'firstexpo2.title':'First institutional exhibition in Europe dedicated to the artist Elizabeth Colomba. On October 19, 2025, FAMM inaugurated REMINISCENCE, the first institutional exhibition in Europe dedicated to the French artist Elizabeth Colomba, based in New York. Curated by Simon de Pury, an emblematic figure in the art world, the exhibition is held at the recently renovated Mougins Art Center, housed in a medieval building in the heart of the historic village. Organized in partnership with Collecta and in collaboration with the City of Mougins, the exhibition will be presented from October 18, 2025 to April 6, 2026.',
  'dateexpo.title':' 1O October 13 - April 6, 2025',
  'buttonexpo.title': 'Discover exhibition',
  'evexpo.title': 'Upcoming event',
  'coordonnée1-title' : 'FAMM (Women Artists of the Mougins Museum)',
  'quoteexpo.title' : "L'heure FAMM  welcomes Eva Laugier, in charge of public relations at the Hartung-Bergman Foundation. From her bohemian and committed youth, to her aesthetic and pictorial revelations, via her extraordinary love story preserved within an olive grove in Antibes, this conference invites us to discover the romantic path of this artist; guided by a single light, her own.",
  'dateexpo.title': 'Wednesday, December 10, 2025',
  'buttonexpo1.title': 'Discover exhibition',
  'expo1.title': 'Temporary exposition',
  'quoteexpo1.title': 'FAMM (Women Artists of the Mougins Museum) has been showcasing approximately one hundred works by nearly 90 women artists from around the world since June 21, 2024. Located in the heart of the historic village of Mougins since 2011, the museum now houses paintings, sculptures, and photographs by major artists who have shaped the great artistic movements from Impressionism to 21st-century contemporary art.Among the great names in art history, FAMM exhibits works by Berthe Morisot, Mary Cassatt, Eva Gonzalès, Blanche Hoschedé-Monet, Louise Nevelson, Barbara Hepworth, Frida Kahlo...',
  'ticketing.button': 'Ticketing',
  'buttonexpo2.title':'Discover exhibition',
  'socialmedia.title': 'OUR SOCIAL MEDIAS',
  'joinus.title': 'JOIN US',
  'placeholder.text':'Write your message...',
  'nameexpo.title':'Name',
  'adressexpo.title': 'OUR ADDRESS',
  'mapsexpo.title': "FAMM (Women Artists of the Mougins Museum) <br>32 Rue du Commandeur, 06250 Mougins <br>FAMM is open every day from 10 am to 6 pm",
  'socialmediaexpo.title':'OUR SOCIAL MEDIAS',
  'joinusexpo.title': 'JOIN US',
  'submit.text': 'SUBMIT'









  }
  

  

};

const langToggles = document.querySelectorAll(
  '#lang-toggle, #lang-toggle-mobile'
);

const translatableEls = document.querySelectorAll('[data-i18n]');

let currentLang = localStorage.getItem('lang') || 'fr';

function applyLanguage(lang) {
  translatableEls.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
    }
  });

  langToggles.forEach(toggle => {
    toggle.textContent = lang.toUpperCase();
  });

  localStorage.setItem('lang', lang);
}

langToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr';
    applyLanguage(currentLang);
  });
});


if (currentLang !== 'fr') {
  applyLanguage(currentLang);
}

const burger = document.getElementById('burger-btn');
const menu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-menu');

if (burger && menu && closeBtn) {

  burger.addEventListener('click', () => {
    menu.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
}

const html = document.documentElement;

const toggles = document.querySelectorAll(
  '#theme-toggle-desktop, #theme-toggle-mobile'
);

const themeIcons = document.querySelectorAll('.theme-icon');
const logo = document.getElementById('site-logo');
const ticketIcons = document.querySelectorAll('.ticket-icon');
const instagramIcons = document.querySelectorAll('.social-instagram');
const tiktokIcons = document.querySelectorAll('.social-tiktok');
const desktopTickets = document.querySelectorAll('.ticket-desktop');
const mobileTickets  = document.querySelectorAll('.ticket-mobile');

const assets = {
  light: {
    desktopTicket: 'assets/Images/ticket-light.png',
    mobileTicket: 'assets/Images/ticket-dark-burger.png',
    icon: 'assets/Images/icon-moon.png',
    logo: 'assets/Images/logo-famm-light.png',

    instagram: 'assets/Images/instaicon-light.png',
    tiktok: 'assets/Images/tiktokicon-light.png'
  },
  dark: {
    desktopTicket: 'assets/Images/ticket-dark.png',
    mobileTicket: 'assets/Images/ticket-light-burger.png',
    icon: 'assets/Images/icon-sun.png',
    logo: 'assets/Images/logo-famm-dark.png',

    instagram: 'assets/Images/instaicon-dark.png',
    tiktok: 'assets/Images/tiktokicon-dark.png'
  }
};

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  themeIcons.forEach(icon => {
    icon.src = assets[theme].icon;
  });

  if (logo) {
    logo.src = assets[theme].logo;
  }

  desktopTickets.forEach(img => {
    img.src = assets[theme].desktopTicket;
  });

  mobileTickets.forEach(img => {
    img.src = assets[theme].mobileTicket;
  });

  instagramIcons.forEach(img => {
    img.src = assets[theme].instagram;
  });

  tiktokIcons.forEach(img => {
    img.src = assets[theme].tiktok;
  });

}

const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
});












/* ===============================
   KONAMI CODE
================================ */

const konamiSequence = [
  'arrowup',
  'arrowup',
  'arrowdown',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'arrowleft',
  'arrowright',
  'b',
  'a'
];

let konamiIndex = 0;
let konamiTimer = null;

window.addEventListener('keydown', (e) => {
  const key = e.key.toLowerCase();

  clearTimeout(konamiTimer);
  konamiTimer = setTimeout(() => {
    konamiIndex = 0;
  }, 1200);

  if (key === konamiSequence[konamiIndex]) {
    konamiIndex++;

    if (konamiIndex === konamiSequence.length) {
      document.documentElement.classList.toggle('konami-rainbow');
      konamiIndex = 0;
      console.log('🌈 KONAMI MODE TOGGLED 🌈');
    }
  } else {
    konamiIndex = 0;
  }
});


/* ===============================
   NYAN CAT SPAWN
================================ */

let nyanInterval = null;

function spawnNyanCat() {
  const wrapper = document.createElement('div');
  wrapper.className = 'nyan-wrapper';

  const trail = document.createElement('div');
  trail.className = 'nyan-trail';

  const cat = document.createElement('img');
  cat.src = 'assets/Images/easter_egg.png';
  cat.className = 'nyan-cat';
  cat.alt = 'Nyan Cat';

  const fromLeft = Math.random() > 0.5;
  const top = Math.random() * (window.innerHeight - 200) + 50;

  wrapper.style.top = `${top}px`;
  wrapper.classList.add(fromLeft ? 'from-left' : 'from-right');

  wrapper.appendChild(trail);
  wrapper.appendChild(cat);
  document.body.appendChild(wrapper);

  setTimeout(() => wrapper.remove(), 6000);
}



/* ===============================
   START / STOP AUTO (Observer)
================================ */

const observer = new MutationObserver(() => {
  const isActive = document.documentElement.classList.contains('konami-rainbow');

  if (isActive && !nyanInterval) {
    spawnNyanCat();
    nyanInterval = setInterval(spawnNyanCat, 1000);
  }

  if (!isActive && nyanInterval) {
    clearInterval(nyanInterval);
    nyanInterval = null;
  }
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['class']
});
