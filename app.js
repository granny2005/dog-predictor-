// Breed Data
const breeds = [
  {
    name: "Labrador Retriever",
    description: "Friendly and outgoing, Labradors are excellent family dogs known for their gentle nature and versatility. They are one of the most popular breeds worldwide.",
    temperament: "Gentle, Active, Intelligent, Outgoing",
    lifespan: "10-12 years",
    care: "Regular exercise, brushing, and balanced diet. They are energetic dogs that need daily physical activity.",
    exercise: "High - Requires 1-2 hours of daily exercise including walks, play, and swimming"
  },
  {
    name: "Poodle",
    description: "Highly intelligent and easy to train, Poodles are elegant dogs known for their curly, hypoallergenic coat. They come in standard, miniature, and toy sizes.",
    temperament: "Alert, Active, Faithful, Intelligent",
    lifespan: "12-15 years",
    care: "Frequent grooming to maintain coat. Regular professional grooming every 6-8 weeks recommended.",
    exercise: "Moderate to High - Daily walks and mental stimulation required"
  },
  {
    name: "Beagle",
    description: "Small to medium-sized hound dogs with excellent sense of smell. Beagles are merry, friendly, and great with families and children.",
    temperament: "Gentle, Curious, Friendly, Merry",
    lifespan: "12-15 years",
    care: "Regular exercise and mental stimulation. Moderate grooming needs. Watch for weight gain.",
    exercise: "Moderate - Daily walks and playtime, loves outdoor activities"
  },
  {
    name: "German Shepherd",
    description: "Intelligent, loyal, and versatile working dogs. German Shepherds are confident and courageous, making excellent guard and family dogs.",
    temperament: "Confident, Courageous, Loyal, Intelligent",
    lifespan: "9-13 years",
    care: "Heavy year-round shedding. Needs energy outlet with regular exercise. Regular vet checkups for hip health.",
    exercise: "High - Requires vigorous daily exercise, training, and mental challenges"
  },
  {
    name: "Golden Retriever",
    description: "Friendly, intelligent, and devoted family companions. Golden Retrievers are known for their beautiful golden coat and gentle temperament.",
    temperament: "Friendly, Intelligent, Devoted, Trustworthy",
    lifespan: "10-12 years",
    care: "Regular grooming due to moderate to heavy shedding. Needs consistent exercise and mental stimulation.",
    exercise: "High - Loves swimming, retrieving, and outdoor activities. Needs 1-2 hours daily"
  },
  {
    name: "Bulldog",
    description: "Medium-sized dogs with a muscular build and distinctive pushed-in nose. Bulldogs are gentle, friendly, and make great companions.",
    temperament: "Docile, Willful, Friendly, Gregarious",
    lifespan: "8-10 years",
    care: "Clean facial wrinkles daily. Moderate exercise. Watch for breathing issues due to flat face.",
    exercise: "Low to Moderate - Short walks, avoid overexertion especially in heat"
  },
  {
    name: "Siberian Husky",
    description: "Medium-sized working dogs bred for pulling sleds. Huskies are energetic, outgoing, and have striking blue or multi-colored eyes.",
    temperament: "Outgoing, Alert, Friendly, Gentle",
    lifespan: "12-14 years",
    care: "Heavy shedding, especially seasonally. Requires extensive daily exercise. Strong prey drive.",
    exercise: "Very High - Needs running, hiking, and vigorous activities daily"
  },
  {
    name: "Chihuahua",
    description: "The smallest dog breed, Chihuahuas are alert and confident with big personalities. They are loyal companions and adapt well to apartment living.",
    temperament: "Alert, Devoted, Courageous, Lively",
    lifespan: "14-16 years",
    care: "Daily teeth brushing essential. Minimal grooming for smooth coat. Keep warm in cold weather.",
    exercise: "Low - Short walks and indoor play sufficient"
  },
  {
    name: "Rottweiler",
    description: "Large, powerful dogs originally bred for herding and guarding. Rottweilers are loyal, confident, and protective of their families.",
    temperament: "Loyal, Confident, Fearless, Good-natured",
    lifespan: "8-10 years",
    care: "Regular training and socialization essential. Moderate grooming. Watch for joint issues.",
    exercise: "Moderate to High - Daily walks and activities to prevent boredom"
  },
  {
    name: "Dachshund",
    description: "Small dogs with long bodies and short legs, originally bred for hunting badgers. Dachshunds are clever, lively, and courageous.",
    temperament: "Clever, Stubborn, Devoted, Lively",
    lifespan: "12-16 years",
    care: "Prevent jumping to protect back. Regular exercise. Moderate grooming depending on coat type.",
    exercise: "Moderate - Daily walks, but avoid activities that strain the back"
  },
  {
    name: "Boxer",
    description: "Medium to large-sized working dogs known for their muscular build and playful nature. Boxers are loyal, energetic family companions.",
    temperament: "Playful, Energetic, Loyal, Intelligent",
    lifespan: "10-12 years",
    care: "Minimal grooming. High exercise needs. Training and socialization important.",
    exercise: "High - Needs vigorous daily exercise and play"
  },
  {
    name: "Yorkshire Terrier",
    description: "Small terriers with long, silky coats. Yorkies are feisty, affectionate, and make excellent companions despite their tiny size.",
    temperament: "Bold, Confident, Courageous, Independent",
    lifespan: "13-16 years",
    care: "Daily brushing required. Regular grooming appointments. Dental care essential.",
    exercise: "Low to Moderate - Short walks and indoor play"
  },
  {
    name: "Shih Tzu",
    description: "Small companion dogs with long, flowing coats. Shih Tzus are affectionate, outgoing, and were bred to be companion dogs.",
    temperament: "Affectionate, Playful, Outgoing, Friendly",
    lifespan: "10-18 years",
    care: "Daily grooming required. Regular professional grooming. Clean face folds daily.",
    exercise: "Low - Short daily walks and indoor play"
  },
  {
    name: "Doberman Pinscher",
    description: "Large, athletic dogs known for intelligence and loyalty. Dobermans are alert, fearless guardians and devoted family companions.",
    temperament: "Alert, Loyal, Fearless, Obedient",
    lifespan: "10-13 years",
    care: "Minimal grooming. Extensive exercise and training needed. Early socialization important.",
    exercise: "High - Vigorous daily exercise and mental challenges required"
  },
  {
    name: "Australian Shepherd",
    description: "Medium-sized herding dogs known for intelligence and versatility. Aussies are energetic, trainable, and excel in dog sports.",
    temperament: "Intelligent, Active, Good-natured, Protective",
    lifespan: "12-15 years",
    care: "Regular brushing for moderate shedding. Extensive exercise and mental stimulation essential.",
    exercise: "Very High - Needs jobs to do, training, and vigorous daily activity"
  }
];

// State management
let currentImage = null;
let currentBreed = null;

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

function navigateTo(pageId) {
  // Remove active class from all pages and nav links
  pages.forEach(page => page.classList.remove('active'));
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Add active class to current page and nav link
  const targetPage = document.getElementById(pageId);
  const targetLink = document.querySelector(`a[href="#${pageId}"]`);
  
  if (targetPage) targetPage.classList.add('active');
  if (targetLink) targetLink.classList.add('active');
  
  // Close mobile menu
  navMenu.classList.remove('active');
  
  // Scroll to top
  window.scrollTo(0, 0);
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('href').substring(1);
    navigateTo(pageId);
  });
});

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Hero CTA
document.getElementById('heroTryNow').addEventListener('click', () => {
  navigateTo('identify');
});

// Upload functionality
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const browseBtn = document.getElementById('browseBtn');
const uploadSection = document.getElementById('uploadSection');
const previewSection = document.getElementById('previewSection');
const previewImage = document.getElementById('previewImage');
const changeImageBtn = document.getElementById('changeImageBtn');
const identifyBtn = document.getElementById('identifyBtn');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');
const tryAnotherBtn = document.getElementById('tryAnotherBtn');

uploadZone.addEventListener('click', () => {
  fileInput.click();
});

browseBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  fileInput.click();
});

uploadZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  uploadZone.style.borderColor = 'var(--color-primary)';
});

uploadZone.addEventListener('dragleave', () => {
  uploadZone.style.borderColor = '';
});

uploadZone.addEventListener('drop', (e) => {
  e.preventDefault();
  uploadZone.style.borderColor = '';
  
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    handleFile(files[0]);
  }
});

fileInput.addEventListener('change', (e) => {
  if (e.target.files.length > 0) {
    handleFile(e.target.files[0]);
  }
});

function handleFile(file) {
  if (!file.type.startsWith('image/')) {
    alert('Please upload an image file');
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (e) => {
    currentImage = e.target.result;
    previewImage.src = currentImage;
    uploadSection.style.display = 'none';
    previewSection.style.display = 'block';
    resultsSection.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

changeImageBtn.addEventListener('click', () => {
  uploadSection.style.display = 'block';
  previewSection.style.display = 'none';
  resultsSection.style.display = 'none';
  fileInput.value = '';
  currentImage = null;
});

identifyBtn.addEventListener('click', () => {
  if (!currentImage) return;
  
  // Show loading
  previewSection.style.display = 'none';
  loadingSection.style.display = 'block';
  
  // Simulate AI processing
  setTimeout(() => {
    // Randomly select a breed
    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
    currentBreed = randomBreed;
    
    // Generate random confidence between 85-98%
    const confidence = Math.floor(Math.random() * (98 - 85 + 1)) + 85;
    
    // Display results
    displayResults(randomBreed, confidence);
    
    loadingSection.style.display = 'none';
    resultsSection.style.display = 'grid';
  }, 2000);
});

function displayResults(breed, confidence) {
  document.getElementById('resultImage').src = currentImage;
  document.getElementById('confidenceBadge').textContent = `${confidence}% Confidence`;
  document.getElementById('breedName').textContent = breed.name;
  document.getElementById('breedDescription').textContent = breed.description;
  document.getElementById('breedTemperament').textContent = breed.temperament;
  document.getElementById('breedLifespan').textContent = breed.lifespan;
  document.getElementById('breedCare').textContent = breed.care;
  document.getElementById('breedExercise').textContent = breed.exercise;
}

tryAnotherBtn.addEventListener('click', () => {
  uploadSection.style.display = 'block';
  previewSection.style.display = 'none';
  resultsSection.style.display = 'none';
  fileInput.value = '';
  currentImage = null;
  currentBreed = null;
});

// Breed Library
const breedGrid = document.getElementById('breedGrid');

function renderBreedLibrary() {
  breedGrid.innerHTML = '';
  
  breeds.forEach(breed => {
    const card = document.createElement('div');
    card.className = 'breed-card';
    card.innerHTML = `
      <h3>${breed.name}</h3>
      <p>${breed.description.split('.')[0]}.</p>
    `;
    
    card.addEventListener('click', () => {
      showBreedModal(breed);
    });
    
    breedGrid.appendChild(card);
  });
}

// Modal functionality
const modal = document.getElementById('breedModal');
const modalClose = document.getElementById('modalClose');

function showBreedModal(breed) {
  document.getElementById('modalBreedName').textContent = breed.name;
  document.getElementById('modalDescription').textContent = breed.description;
  document.getElementById('modalTemperament').textContent = breed.temperament;
  document.getElementById('modalLifespan').textContent = breed.lifespan;
  document.getElementById('modalCare').textContent = breed.care;
  document.getElementById('modalExercise').textContent = breed.exercise;
  
  modal.classList.add('active');
}

modalClose.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});

// Initialize breed library
renderBreedLibrary();

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
    }
  });
});