/**
 * ==========================================================================
 * ASTRAL — BRUNCH / CAFÉ / SODA
 * Script d'application interactif (SPA, Animations & Modales)
 * ==========================================================================
 */

// Données du menu de secours (permet le fonctionnement direct même en local file://)
const FALLBACK_MENU_DATA = [
  {
    "id": "toasts",
    "name": "Les Toasts",
    "icon": "assets/toast.svg",
    "items": [
      {
        "id": "toast-benedicte",
        "name": "Œuf Bénédicte",
        "price": "7.00 €",
        "description": "Pain brioché, sauce Bénédicte, bacon, mâche et ciboulette.",
        "image": "images/toast_benedicte.jpg",
        "allergens": "Gluten, œuf, lactose",
        "nutrition": {
          "calories": "520 kcal",
          "proteines": "22 g",
          "glucides": "45 g",
          "lipides": "28 g"
        }
      },
      {
        "id": "toast-avocado",
        "name": "Avocado toast",
        "price": "7.90 €",
        "description": "Pain de campagne, fromage frais, avocat, saumon fumé, grenade.",
        "image": "images/toast_benedicte.jpg",
        "allergens": "Gluten, poisson, lactose",
        "nutrition": {
          "calories": "480 kcal",
          "proteines": "19 g",
          "glucides": "42 g",
          "lipides": "24 g"
        }
      },
      {
        "id": "toast-halloumi",
        "name": "Halloumi toast",
        "price": "6.90 €",
        "description": "Pain de campagne, fromage frais, piment d'Espelette et filet de miel, halloumi grillé.",
        "image": "images/toast_benedicte.jpg",
        "allergens": "Gluten, lactose",
        "nutrition": {
          "calories": "450 kcal",
          "proteines": "18 g",
          "glucides": "46 g",
          "lipides": "21 g"
        }
      }
    ]
  },
  {
    "id": "salades",
    "name": "Les Salades",
    "icon": "assets/salade.svg",
    "items": [
      {
        "id": "salade-cesar",
        "name": "La César",
        "price": "13.90 €",
        "description": "Batavia, Poulet, Croutons, tomate, Parmezan.",
        "image": "images/salade_cesar.jpg",
        "allergens": "Gluten, lactose",
        "nutrition": {
          "calories": "780 kcal",
          "proteines": "30 g",
          "glucides": "92 g",
          "lipides": "31 g"
        }
      },
      {
        "id": "salade-norvegienne",
        "name": "La Norvégienne",
        "price": "15.90 €",
        "description": "Mâche, Saumon, Concombre, Tomate, Sesame noire, Champignon.",
        "image": "images/salade_norvegienne.jpg",
        "allergens": "Poisson, sésame",
        "nutrition": {
          "calories": "620 kcal",
          "proteines": "34 g",
          "glucides": "38 g",
          "lipides": "26 g"
        }
      },
      {
        "id": "salade-mediterraneenne",
        "name": "La Méditerranéenne",
        "price": "16.90 €",
        "description": "Roquette, concombre, tomates, feta, olives grecques, basilic.",
        "image": "images/salade_cesar.jpg",
        "allergens": "Lactose",
        "nutrition": {
          "calories": "540 kcal",
          "proteines": "16 g",
          "glucides": "32 g",
          "lipides": "29 g"
        }
      }
    ]
  },
  {
    "id": "burgers",
    "name": "Les Burgers",
    "icon": "assets/hamburger.svg",
    "items": [
      {
        "id": "burger-classic",
        "name": "Le Classic Beef Cheese",
        "price": "13.90 €",
        "description": "Pain brioché, Steack haché 100% bœuf, cheddar, oignons frits, ketchup et moutarde.",
        "image": "images/burger_cheese.jpg",
        "allergens": "Gluten, lactose, moutarde",
        "nutrition": {
          "calories": "860 kcal",
          "proteines": "42 g",
          "glucides": "68 g",
          "lipides": "44 g"
        }
      },
      {
        "id": "burger-basquaise",
        "name": "Le Poulet Basquaise",
        "price": "15.90 €",
        "description": "Pain brioché, filet de poulet façon Basquaise, poivrons grillés, olives, pousses d'épinard et basilic.",
        "image": "images/burger_cheese.jpg",
        "allergens": "Gluten, lactose",
        "nutrition": {
          "calories": "790 kcal",
          "proteines": "46 g",
          "glucides": "64 g",
          "lipides": "36 g"
        }
      },
      {
        "id": "burger-saumon",
        "name": "Le Saumon",
        "price": "15.90 €",
        "description": "Pain à l'encre de seiche, pavé de saumon mi-cuit, fromage frais, mâche, aneth et échalotes.",
        "image": "images/burger_cheese.jpg",
        "allergens": "Gluten, poisson, lactose, mollusques",
        "nutrition": {
          "calories": "740 kcal",
          "proteines": "41 g",
          "glucides": "58 g",
          "lipides": "35 g"
        }
      }
    ]
  },
  {
    "id": "gaufres",
    "name": "Les Gaufres",
    "icon": "assets/gauffre.svg",
    "items": [
      {
        "id": "gaufre-classique",
        "name": "La Classique",
        "price": "4.50 €",
        "description": "Sucre glace, beurre fondu, chantilly maison.",
        "image": "images/gaufre_fruits.jpg",
        "allergens": "Gluten, œuf, lactose",
        "nutrition": {
          "calories": "410 kcal",
          "proteines": "7 g",
          "glucides": "52 g",
          "lipides": "20 g"
        }
      },
      {
        "id": "gaufre-choco",
        "name": "La Choco-noisette",
        "price": "5.50 €",
        "description": "Pâte à tartiner fondante, banane fraîche, éclats de noisettes torréfiées, chantilly.",
        "image": "images/gaufre_fruits.jpg",
        "allergens": "Gluten, œuf, lactose, fruits à coque",
        "nutrition": {
          "calories": "590 kcal",
          "proteines": "9 g",
          "glucides": "71 g",
          "lipides": "29 g"
        }
      },
      {
        "id": "gaufre-fruits",
        "name": "La Fruits rouges",
        "price": "5.90 €",
        "description": "Coulis de fruits rouges, fraises fraîches et myrtilles, chantilly.",
        "image": "images/gaufre_fruits.jpg",
        "allergens": "Gluten, œuf, lactose",
        "nutrition": {
          "calories": "460 kcal",
          "proteines": "8 g",
          "glucides": "62 g",
          "lipides": "21 g"
        }
      }
    ]
  },
  {
    "id": "cafes",
    "name": "Les Cafés",
    "icon": "assets/tass.svg",
    "items": [
      {
        "id": "cafe-espresso",
        "name": "L'Espresso",
        "price": "2.50 €",
        "description": "Café de spécialité 100 % arabica.",
        "image": "images/cafe_cappuccino.jpg",
        "allergens": "Aucun",
        "nutrition": {
          "calories": "5 kcal",
          "proteines": "0.3 g",
          "glucides": "0.5 g",
          "lipides": "0.1 g"
        }
      },
      {
        "id": "cafe-cappuccino",
        "name": "Le Cappuccino",
        "price": "4.50 €",
        "description": "Espresso, lait chaud, mousse de lait onctueuse, pointe de cacao.",
        "image": "images/cafe_cappuccino.jpg",
        "allergens": "Lactose",
        "nutrition": {
          "calories": "140 kcal",
          "proteines": "7 g",
          "glucides": "12 g",
          "lipides": "6 g"
        }
      },
      {
        "id": "cafe-latte",
        "name": "Le Latte macchiato",
        "price": "5.00 €",
        "description": "Espresso, généreuse mousse de lait, touche de vanille ou caramel.",
        "image": "images/cafe_cappuccino.jpg",
        "allergens": "Lactose",
        "nutrition": {
          "calories": "190 kcal",
          "proteines": "8 g",
          "glucides": "22 g",
          "lipides": "7 g"
        }
      }
    ]
  },
  {
    "id": "cocktails",
    "name": "Les Cocktails",
    "icon": "assets/cocktail.svg",
    "items": [
      {
        "id": "cocktail-spritz",
        "name": "Le Spritz",
        "price": "8.50 €",
        "description": "Aperol, prosecco, eau gazeuse, tranche d'orange fraîche.",
        "image": "images/cocktail_spritz.jpg",
        "allergens": "Sulfites",
        "nutrition": {
          "calories": "165 kcal",
          "proteines": "0.1 g",
          "glucides": "16 g",
          "lipides": "0 g"
        }
      },
      {
        "id": "cocktail-mojito",
        "name": "Le Mojito",
        "price": "9.00 €",
        "description": "Rhum blanc, menthe fraîche, citron vert, sucre de canne, eau gazeuse.",
        "image": "images/cocktail_spritz.jpg",
        "allergens": "Aucun",
        "nutrition": {
          "calories": "210 kcal",
          "proteines": "0.2 g",
          "glucides": "24 g",
          "lipides": "0 g"
        }
      },
      {
        "id": "cocktail-moscow",
        "name": "Le Moscow Mule",
        "price": "9.50 €",
        "description": "Vodka, ginger beer, jus et tranche de citron vert.",
        "image": "images/cocktail_spritz.jpg",
        "allergens": "Aucun",
        "nutrition": {
          "calories": "180 kcal",
          "proteines": "0.1 g",
          "glucides": "18 g",
          "lipides": "0 g"
        }
      }
    ]
  }
];

// État global de l'application
let currentMenuData = FALLBACK_MENU_DATA;
let dishesById = {};

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', async () => {
  await loadMenuData();
  renderMenu();
  setupCategoryScrollSpy();
  setupNavigation();
  setupModals();
  setupReservationForm();
});

/**
 * 1. CHARGEMENT DES DONNÉES DU MENU
 */
async function loadMenuData() {
  try {
    const res = await fetch('data/menu.json');
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        currentMenuData = data;
      }
    }
  } catch (e) {
    // Mode local file:// ou hors-ligne : utilisation du fallback sans erreur
    console.info('Utilisation des données intégrées pour Astral.');
  }

  // Indexation rapide des plats par id
  dishesById = {};
  currentMenuData.forEach(cat => {
    cat.items.forEach(dish => {
      dishesById[dish.id] = dish;
    });
  });
}

/**
 * 2. RENDU DU MENU (ICÔNES GAUCHE + PLATS DROITE)
 */
function renderMenu() {
  const navContainer = document.getElementById('category-nav-list');
  const dishesContainer = document.getElementById('dishes-container');

  if (!navContainer || !dishesContainer) return;

  navContainer.innerHTML = '';
  dishesContainer.innerHTML = '';

  currentMenuData.forEach((category, catIndex) => {
    // A. Bouton de catégorie avec icône et sparkles de scintillement
    const navBtn = document.createElement('button');
    navBtn.type = 'button';
    navBtn.className = `cat-nav-btn ${catIndex === 0 ? 'active' : ''}`;
    navBtn.setAttribute('data-cat-id', category.id);
    navBtn.setAttribute('aria-label', category.name);

    navBtn.innerHTML = `
      <div class="cat-icon-container">
        <img src="${category.icon}" alt="${category.name}" class="cat-icon-img" loading="lazy">
        <img src="assets/Sparkl b.svg" class="cat-sparkle cat-sparkle-1" alt="" aria-hidden="true">
        <img src="assets/SPARKL J.svg" class="cat-sparkle cat-sparkle-2" alt="" aria-hidden="true">
      </div>
    `;

    // Clic sur l'icône -> Défilement fluide vers la section
    navBtn.addEventListener('click', () => {
      const targetSection = document.getElementById(`cat-section-${category.id}`);
      if (targetSection) {
        // Mise à jour visuelle immédiate
        setActiveCategory(category.id);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    navContainer.appendChild(navBtn);

    // B. Section de plats pour cette catégorie
    const catSection = document.createElement('section');
    catSection.className = 'category-block';
    catSection.id = `cat-section-${category.id}`;
    catSection.setAttribute('data-cat-id', category.id);

    let dishesHTML = `
      <h2 class="category-title">${category.name}</h2>
    `;

    category.items.forEach(dish => {
      dishesHTML += `
        <article class="dish-card" id="dish-${dish.id}">
          <div class="dish-header-row">
            <h3 class="dish-title">${dish.name}</h3>
            <button type="button" class="dish-info-btn" data-dish-info="${dish.id}" aria-label="Informations nutritionnelles pour ${dish.name}">i</button>
          </div>
          <p class="dish-ingredients-text">${dish.description}</p>
          <div class="dish-image-box">
            <img src="${dish.image}" alt="${dish.name}" class="dish-img" loading="lazy">
          </div>
          <div class="dish-price-text">${dish.price}</div>
        </article>
      `;
    });

    catSection.innerHTML = dishesHTML;
    dishesContainer.appendChild(catSection);
  });

  // Écouteur sur tous les boutons (i) pour ouvrir la modale allergènes
  document.querySelectorAll('[data-dish-info]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const dishId = btn.getAttribute('data-dish-info');
      openAllergensModal(dishId);
    });
  });
}

/**
 * 3. DÉTECTION DU DÉFILEMENT (SCROLL SPY AVEC ANIMATION DES ICÔNES)
 */
function setupCategoryScrollSpy() {
  const sections = document.querySelectorAll('.category-block');
  if (sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-15% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const catId = entry.target.getAttribute('data-cat-id');
        if (catId) {
          setActiveCategory(catId);
        }
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

function setActiveCategory(catId) {
  document.querySelectorAll('.cat-nav-btn').forEach(btn => {
    if (btn.getAttribute('data-cat-id') === catId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * 4. NAVIGATION SPA (PAGES)
 */
function setupNavigation() {
  document.querySelectorAll('[data-go]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const targetViewId = el.getAttribute('data-go');
      switchView(targetViewId);
    });
  });
}

function switchView(viewId) {
  document.querySelectorAll('.page-view').forEach(view => {
    if (view.id === viewId) {
      view.style.display = 'flex';
      view.classList.add('active');
    } else {
      view.style.display = 'none';
      view.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'instant' });
}

/**
 * 5. GESTION DES MODALES (ALLERGÈNES & INFORMATIONS)
 */
function setupModals() {
  // Ouverture via data-modal
  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      const targetModal = document.getElementById(modalId);
      if (targetModal) {
        openModal(targetModal);
      }
    });
  });

  // Fermeture via data-close-modal ou clic sur l'arrière-plan
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop || e.target.closest('[data-close-modal]')) {
        closeModal(backdrop);
      }
    });
  });

  // Fermeture avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(closeModal);
    }
  });
}

function openModal(modalEl) {
  modalEl.classList.add('open');
  modalEl.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modalEl) {
  modalEl.classList.remove('open');
  modalEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/**
 * Modale Nutrition & Allergènes spécifique au plat
 */
function openAllergensModal(dishId) {
  const dish = dishesById[dishId];
  if (!dish) return;

  const modalEl = document.getElementById('modal-allergens');
  const ingredientsEl = document.getElementById('modal-dish-ingredients');
  const allergensEl = document.getElementById('modal-dish-allergens');
  const calEl = document.getElementById('modal-nutri-cal');
  const protEl = document.getElementById('modal-nutri-prot');
  const carbEl = document.getElementById('modal-nutri-carb');
  const fatEl = document.getElementById('modal-nutri-fat');

  if (ingredientsEl) ingredientsEl.textContent = dish.description || '-';
  if (allergensEl) allergensEl.textContent = dish.allergens || 'Aucun';
  
  if (dish.nutrition) {
    if (calEl) calEl.textContent = dish.nutrition.calories || '-';
    if (protEl) protEl.textContent = dish.nutrition.proteines || '-';
    if (carbEl) carbEl.textContent = dish.nutrition.glucides || '-';
    if (fatEl) fatEl.textContent = dish.nutrition.lipides || '-';
  }

  openModal(modalEl);
}

/**
 * 6. FORMULAIRE DE RÉSERVATION ET STEPPERS
 */
function setupReservationForm() {
  // A. Stepper Couverts (défaut: 2)
  let couverts = 2;
  const valCouverts = document.getElementById('val-couverts');
  const btnCouvertsMinus = document.getElementById('btn-couverts-minus');
  const btnCouvertsPlus = document.getElementById('btn-couverts-plus');

  if (btnCouvertsMinus && btnCouvertsPlus && valCouverts) {
    btnCouvertsMinus.addEventListener('click', () => {
      if (couverts > 1) {
        couverts--;
        valCouverts.textContent = couverts;
      }
    });

    btnCouvertsPlus.addEventListener('click', () => {
      if (couverts < 30) {
        couverts++;
        valCouverts.textContent = couverts;
      }
    });
  }

  // B. Stepper Date (défaut: 4 Août)
  let currentDate = new Date(2026, 7, 4); // 4 Août
  const valDate = document.getElementById('val-date');
  const btnDateMinus = document.getElementById('btn-date-minus');
  const btnDatePlus = document.getElementById('btn-date-plus');

  const updateDateDisplay = () => {
    if (valDate) {
      const options = { day: 'numeric', month: 'long' };
      const str = currentDate.toLocaleDateString('fr-FR', options);
      // Majuscule sur le mois (ex: "4 Août")
      valDate.textContent = str.replace(/^[0-9]+ /, match => match).replace(/[a-zàâäéèêëîïôöùûüç]+$/, m => m.charAt(0).toUpperCase() + m.slice(1));
    }
  };

  if (btnDateMinus && btnDatePlus) {
    btnDateMinus.addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() - 1);
      updateDateDisplay();
    });

    btnDatePlus.addEventListener('click', () => {
      currentDate.setDate(currentDate.getDate() + 1);
      updateDateDisplay();
    });
  }

  // C. Stepper Heure (défaut: 19h00)
  let currentHour = 19;
  let currentMin = 0;
  const valHeure = document.getElementById('val-heure');
  const btnHeureMinus = document.getElementById('btn-heure-minus');
  const btnHeurePlus = document.getElementById('btn-heure-plus');

  const updateHeureDisplay = () => {
    if (valHeure) {
      const minStr = currentMin === 0 ? '00' : (currentMin < 10 ? '0' + currentMin : currentMin);
      valHeure.textContent = `${currentHour}h${minStr}`;
    }
  };

  if (btnHeureMinus && btnHeurePlus) {
    btnHeureMinus.addEventListener('click', () => {
      currentMin -= 15;
      if (currentMin < 0) {
        currentMin = 45;
        currentHour--;
        if (currentHour < 8) currentHour = 23;
      }
      updateHeureDisplay();
    });

    btnHeurePlus.addEventListener('click', () => {
      currentMin += 15;
      if (currentMin >= 60) {
        currentMin = 0;
        currentHour++;
        if (currentHour > 23) currentHour = 8;
      }
      updateHeureDisplay();
    });
  }

  // D. Soumission du formulaire -> Écran de confirmation
  const form = document.getElementById('reservation-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('res-name');
      const phoneInput = document.getElementById('res-phone');

      if (!nameInput.value.trim() || !phoneInput.value.trim()) {
        alert('Veuillez renseigner votre nom et votre numéro de téléphone.');
        return;
      }

      // Transition vers l'écran de confirmation
      switchView('view-reservation-confirm');
    });
  }
}
