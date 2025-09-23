// Main JavaScript for Multi-Generation Nuzlocke Tracker with Carousel, Streamer Mode, and Gym Leader Tracking

// Game data structure - simplified for single player
let gameData = {
    player: {
        caught: [],
        team: [null, null, null, null, null, null]
    },
    usedRoutes: [],
    failedRoutes: [],
    playerName: 'Trainer',
    currentGame: null, // Will be set by generation selector
    currentGeneration: null, // Track the generation
    gymProgress: {} // Track gym leader progress by game
};

// Carousel state
let currentCarouselIndex = 0;
let totalCarouselSlides = 7;

// Current gym progress tab
let currentGymTab = 'gymLeaders';

// Gym tracker expanded state
let gymTrackerExpanded = false;

// Confetti Animation Functions
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    document.body.appendChild(confettiContainer);

    // Create 150 confetti pieces
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confetti);
    }

    // Remove confetti after animation
    setTimeout(() => {
        document.body.removeChild(confettiContainer);
    }, 5000);
}

// Gym Leader Progress Functions
function initializeGymProgress() {
    if (!gameData.currentGame) return;

    if (!gameData.gymProgress[gameData.currentGame]) {
        gameData.gymProgress[gameData.currentGame] = {};
    }
}

// Calculate current level cap based on gym progress
function getCurrentLevelCap() {
    const gymData = getCurrentGymLeaders();
    if (!gymData) return '--';

    const currentProgress = gameData.gymProgress[gameData.currentGame] || {};

    // Count completed gym leaders
    const completedGyms = gymData.leaders.filter(leader => currentProgress[leader.id]).length;
    const totalGyms = gymData.leaders.length;

    // Count completed Kanto leaders if they exist
    let completedKanto = 0;
    let totalKanto = 0;
    if (gymData.kantoLeaders) {
        completedKanto = gymData.kantoLeaders.filter(leader => currentProgress[leader.id]).length;
        totalKanto = gymData.kantoLeaders.length;
    }

    const totalGymCount = totalGyms + totalKanto;
    const completedGymCount = completedGyms + completedKanto;

    // Check if champion is defeated
    const champion = gymData.eliteFour.find(member => member.title === 'Champion');
    const championDefeated = champion ? currentProgress[champion.id] : false;

    let nextEncounter = null;

    // Find the next undefeated encounter in order
    // Check main region gym leaders first
    if (!nextEncounter) {
        for (const leader of gymData.leaders) {
            if (!currentProgress[leader.id]) {
                nextEncounter = leader;
                break;
            }
        }
    }

    // Then check Kanto leaders if they exist and main region is complete
    if (!nextEncounter && gymData.kantoLeaders && completedGyms === totalGyms) {
        for (const leader of gymData.kantoLeaders) {
            if (!currentProgress[leader.id]) {
                nextEncounter = leader;
                break;
            }
        }
    }

    // Then check Elite Four if all gyms are complete
    if (!nextEncounter && completedGymCount === totalGymCount) {
        for (const member of gymData.eliteFour) {
            if (!currentProgress[member.id]) {
                nextEncounter = member;
                break;
            }
        }
    }

    // Return the appropriate level cap
    if (nextEncounter) {
        return nextEncounter.levelCap.toString();
    } else if (championDefeated) {
        // All completed, show final level cap or "Max"
        if (champion) {
            return champion.levelCap.toString();
        } else {
            return 'MAX';
        }
    }

    return '--';
}

function toggleGymTrackerExpanded() {
    gymTrackerExpanded = !gymTrackerExpanded;

    const expandableContent = document.getElementById('gym-expandable-content');
    const expandBtn = document.getElementById('gym-expand-btn');

    if (gymTrackerExpanded) {
        expandableContent.style.display = 'block';
        expandBtn.textContent = '▲';
        expandBtn.classList.add('expanded');
        expandBtn.title = 'Collapse gym tracker';

        // Render the full content when expanding
        renderGymProgressSummary();
        renderGymProgressTabs();
        renderGymLeadersGrid();
    } else {
        expandableContent.style.display = 'none';
        expandBtn.textContent = '▼';
        expandBtn.classList.remove('expanded');
        expandBtn.title = 'Expand gym tracker';
    }

    // Save the preference
    localStorage.setItem('gymTrackerExpanded', gymTrackerExpanded.toString());
}

function renderCompactProgressSummary() {
    const gymData = getCurrentGymLeaders();
    const summaryContainer = document.getElementById('compact-progress-summary');
    
    // Get current level cap regardless of gym data availability
    const currentLevelCap = getCurrentLevelCap();
    
    if (!gymData) {
        // If no gym data, just show the level cap
        summaryContainer.innerHTML = `
            <div class="compact-progress-item">
                <span>Level Cap:</span>
                <span class="compact-badge level-cap">${currentLevelCap}</span>
            </div>
        `;
        return;
    }

    const currentProgress = gameData.gymProgress[gameData.currentGame] || {};

    // Count completed gym leaders
    const completedGyms = gymData.leaders.filter(leader => currentProgress[leader.id]).length;
    const totalGyms = gymData.leaders.length;

    // Count completed Kanto leaders if they exist
    let completedKanto = 0;
    let totalKanto = 0;
    if (gymData.kantoLeaders) {
        completedKanto = gymData.kantoLeaders.filter(leader => currentProgress[leader.id]).length;
        totalKanto = gymData.kantoLeaders.length;
    }

    // Count completed Elite Four
    const completedEliteFour = gymData.eliteFour.filter(member => currentProgress[member.id]).length;
    const totalEliteFour = gymData.eliteFour.length;

    // Check if champion is defeated
    const champion = gymData.eliteFour.find(member => member.title === 'Champion');
    const championDefeated = champion ? currentProgress[champion.id] : false;

    let summaryHTML = `
        <div class="compact-progress-item">
            <span>Gyms:</span>
            <span class="compact-badge">${completedGyms}/${totalGyms}</span>
        </div>
    `;

    if (totalKanto > 0) {
        summaryHTML += `
            <div class="compact-progress-item">
                <span>Kanto:</span>
                <span class="compact-badge">${completedKanto}/${totalKanto}</span>
            </div>
        `;
    }

    summaryHTML += `
        <div class="compact-progress-item">
            <span>E4:</span>
            <span class="compact-badge elite-four">${completedEliteFour}/${totalEliteFour}</span>
        </div>
    `;

    if (championDefeated) {
        summaryHTML += `
            <div class="compact-progress-item">
                <span>Champion:</span>
                <span class="compact-badge champion">✓</span>
            </div>
        `;
    }

    summaryHTML += `
        <div class="compact-progress-item">
            <span>Level Cap:</span>
            <span class="compact-badge level-cap">${currentLevelCap}</span>
        </div>
    `;

    summaryContainer.innerHTML = summaryHTML;
}

function toggleGymLeader(leaderId) {
    initializeGymProgress();
    const currentProgress = gameData.gymProgress[gameData.currentGame];
    currentProgress[leaderId] = !currentProgress[leaderId];

    // Check if champion was just defeated
    const gymData = getCurrentGymLeaders();
    if (gymData) {
        const champion = gymData.eliteFour.find(member => member.title === 'Champion');
        if (champion && champion.id === leaderId && currentProgress[leaderId]) {
            // Champion defeated! Show confetti
            createConfetti();
            showToast('🎉 CHAMPION DEFEATED! Congratulations on completing your Nuzlocke! 🎉', 'success', 6000);
        }
    }

    saveData();
    renderGymLeaderTracker();
}

function renderGymLeaderTracker() {
    const gymData = getCurrentGymLeaders();
    if (!gymData) {
        document.getElementById('gym-leader-tracker').style.display = 'none';
        return;
    }

    document.getElementById('gym-leader-tracker').style.display = 'block';
    initializeGymProgress();

    // Always render the compact summary
    renderCompactProgressSummary();

    // Only render the expanded content if expanded
    if (gymTrackerExpanded) {
        renderGymProgressSummary();
        renderGymProgressTabs();
        renderGymLeadersGrid();
    }

    // Load saved expansion state
    const savedExpanded = localStorage.getItem('gymTrackerExpanded');
    if (savedExpanded !== null) {
        gymTrackerExpanded = savedExpanded === 'true';
        const expandableContent = document.getElementById('gym-expandable-content');
        const expandBtn = document.getElementById('gym-expand-btn');

        if (gymTrackerExpanded) {
            expandableContent.style.display = 'block';
            expandBtn.textContent = '▲';
            expandBtn.classList.add('expanded');
            expandBtn.title = 'Collapse gym tracker';
            renderGymProgressSummary();
            renderGymProgressTabs();
            renderGymLeadersGrid();
        } else {
            expandableContent.style.display = 'none';
            expandBtn.textContent = '▼';
            expandBtn.classList.remove('expanded');
            expandBtn.title = 'Expand gym tracker';
        }
    }
}

function renderGymProgressSummary() {
    const gymData = getCurrentGymLeaders();
    if (!gymData) return;

    const summaryContainer = document.getElementById('progress-summary');
    const currentProgress = gameData.gymProgress[gameData.currentGame] || {};

    // Count completed gym leaders
    const completedGyms = gymData.leaders.filter(leader => currentProgress[leader.id]).length;
    const totalGyms = gymData.leaders.length;

    // Count completed Kanto leaders if they exist
    let completedKanto = 0;
    let totalKanto = 0;
    if (gymData.kantoLeaders) {
        completedKanto = gymData.kantoLeaders.filter(leader => currentProgress[leader.id]).length;
        totalKanto = gymData.kantoLeaders.length;
    }

    // Count completed Elite Four
    const completedEliteFour = gymData.eliteFour.filter(member => currentProgress[member.id]).length;
    const totalEliteFour = gymData.eliteFour.length;

    // Check if champion is defeated
    const champion = gymData.eliteFour.find(member => member.title === 'Champion');
    const championDefeated = champion ? currentProgress[champion.id] : false;

    let summaryHTML = `
        <div class="progress-item">
            <span>Gym Leaders:</span>
            <span class="progress-badge">${completedGyms}/${totalGyms}</span>
        </div>
    `;

    if (totalKanto > 0) {
        summaryHTML += `
            <div class="progress-item">
                <span>Kanto Leaders:</span>
                <span class="progress-badge">${completedKanto}/${totalKanto}</span>
            </div>
        `;
    }

    summaryHTML += `
        <div class="progress-item">
            <span>Elite Four:</span>
            <span class="progress-badge elite-four">${completedEliteFour}/${totalEliteFour}</span>
        </div>
    `;

    if (championDefeated) {
        summaryHTML += `
            <div class="progress-item">
                <span>Champion:</span>
                <span class="progress-badge champion">DEFEATED!</span>
            </div>
        `;
    }

    summaryContainer.innerHTML = summaryHTML;

    // Show/hide champion defeated notice
    const championNotice = document.getElementById('champion-defeated-notice');
    if (championDefeated) {
        championNotice.style.display = 'block';
    } else {
        championNotice.style.display = 'none';
    }
}

function renderGymProgressTabs() {
    const gymData = getCurrentGymLeaders();
    if (!gymData) return;

    const tabsContainer = document.getElementById('gym-progress-tabs');
    let tabsHTML = `
        <button class="progress-tab ${currentGymTab === 'gymLeaders' ? 'active' : ''}" onclick="switchGymTab('gymLeaders')">
            Gym Leaders
        </button>
    `;

    if (gymData.kantoLeaders && gymData.kantoLeaders.length > 0) {
        tabsHTML += `
            <button class="progress-tab ${currentGymTab === 'kantoLeaders' ? 'active' : ''}" onclick="switchGymTab('kantoLeaders')">
                Kanto Leaders
            </button>
        `;
    }

    tabsHTML += `
        <button class="progress-tab ${currentGymTab === 'eliteFour' ? 'active' : ''}" onclick="switchGymTab('eliteFour')">
            Elite Four
        </button>
    `;

    tabsContainer.innerHTML = tabsHTML;
}

function switchGymTab(tab) {
    currentGymTab = tab;
    renderGymProgressTabs();
    renderGymLeadersGrid();
}

function renderGymLeadersGrid() {
    const gymData = getCurrentGymLeaders();
    if (!gymData) return;

    const gridContainer = document.getElementById('gym-leaders-grid');
    const currentProgress = gameData.gymProgress[gameData.currentGame] || {};

    let leaders = [];

    switch (currentGymTab) {
        case 'gymLeaders':
            leaders = gymData.leaders;
            break;
        case 'kantoLeaders':
            leaders = gymData.kantoLeaders || [];
            break;
        case 'eliteFour':
            leaders = gymData.eliteFour;
            break;
    }

    let gridHTML = '';

    leaders.forEach(leader => {
        const isDefeated = currentProgress[leader.id] || false;
        const isChampion = leader.title === 'Champion';

        let itemClass = 'gym-leader-item';
        if (isDefeated) itemClass += ' defeated';
        if (isChampion) itemClass += ' champion';

        const typeClass = leader.type.toLowerCase().replace(/[^a-z]/g, '');

        gridHTML += `
            <div class="${itemClass}" onclick="toggleGymLeader('${leader.id}')" style="cursor: pointer;">
                <input type="checkbox" 
                       class="gym-leader-checkbox" 
                       ${isDefeated ? 'checked' : ''} 
                       id="gym-${leader.id}"
                       onclick="toggleGymLeader('${leader.id}'); event.stopPropagation();">
                <div class="gym-leader-info">
                    <div class="gym-leader-name">${leader.name}</div>
                    <div class="gym-leader-details">
                        ${leader.location || leader.title} ${leader.badge ? `• ${leader.badge}` : ''}
                    </div>
                    <div class="gym-leader-type type-${typeClass}">${leader.type}</div>
                </div>
                <div class="level-cap">Lv. ${leader.levelCap}</div>
            </div>
        `;
    });

    gridContainer.innerHTML = gridHTML;
}

// Improved Toast notification system
function showToast(message, type = 'success', duration = 4000) {
    console.log(`Toast: [${type}] ${message}`); // Debug log

    // Get or create the container
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'toast-container';
        document.body.appendChild(container);
        console.log('Created new toast container');
    }

    // Create the toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;

    // Add toast to container
    container.appendChild(toast);
    console.log('Added toast to container:', message);

    // Force a reflow to ensure the element is in the DOM before animation
    toast.offsetHeight;

    // Set up auto-removal
    const removeToast = () => {
        if (toast && container && container.contains(toast)) {
            toast.classList.add('fade-out');
            setTimeout(() => {
                if (container && container.contains(toast)) {
                    container.removeChild(toast);
                    console.log('Removed toast:', message);
                }
            }, 400); // Match fade-out animation duration
        }
    };

    // Auto-remove after duration
    setTimeout(removeToast, duration);

    // Allow manual click-to-dismiss
    toast.addEventListener('click', removeToast);

    // Return the toast element for testing purposes
    return toast;
}

// Test function for toast notifications - accessible from browser console
function testToast() {
    showToast('Test success message! 🎉', 'success');
    setTimeout(() => showToast('Test error message! ❌', 'error'), 1000);
    setTimeout(() => showToast('Test info message! ℹ️', 'info'), 2000);
    setTimeout(() => showToast('Test warning message! ⚠️', 'warning'), 3000);
}

// Track selected generation during setup
let selectedGeneration = null;
let selectedGame = null;

// Pokemon data cache
let pokemonCache = {};

// Generation data with artwork and information
const generationData = [
    {
        id: 1,
        name: 'Kanto',
        fullName: 'Generation I',
        games: 'Red/Blue/Yellow',
        artwork: 'generationImages/gen1.png'
    },
    {
        id: 2,
        name: 'Johto',
        fullName: 'Generation II',
        games: 'Gold/Silver/Crystal',
        artwork: 'generationImages/gen2.png'
    },
    {
        id: 3,
        name: 'Hoenn',
        fullName: 'Generation III',
        games: 'Ruby/Sapphire/Emerald & FireRed/LeafGreen',
        artwork: 'generationImages/gen3.png'
    },
    {
        id: 4,
        name: 'Sinnoh',
        fullName: 'Generation IV',
        games: 'Diamond/Pearl/Platinum & HeartGold/SoulSilver',
        artwork: 'generationImages/gen4.png'
    },
    {
        id: 5,
        name: 'Unova',
        fullName: 'Generation V',
        games: 'Black/White & B2W2',
        artwork: 'generationImages/gen5.png'
    },
    {
        id: 6,
        name: 'Kalos',
        fullName: 'Generation VI',
        games: 'X/Y & ORAS',
        artwork: 'generationImages/gen6.png'
    },
    {
        id: 7,
        name: 'Alola',
        fullName: 'Generation VII',
        games: 'Sun/Moon & USUM',
        artwork: 'generationImages/gen7.png'
    }
];

// Generation Roman numerals for display
const generationRomanNumerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII'
};

// Validate if a Pokemon name is valid for the current generation
function isPokemonValidForGeneration(pokemonName, generation) {
    const cleanName = pokemonName.toLowerCase().trim();
    const validNames = getPokemonNamesUpToGen(generation).map(name => name.toLowerCase());
    return validNames.includes(cleanName);
}

// Initialize the carousel
function initializeCarousel() {
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');

    // Clear existing content
    track.innerHTML = '';
    indicators.innerHTML = '';

    // Create slides
    generationData.forEach((gen, index) => {
        // Create slide
        const slide = document.createElement('div');
        slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
        slide.onclick = () => selectGeneration(gen.id);

        slide.innerHTML = `
            <img src="${gen.artwork}" 
                 alt="${gen.fullName}" 
                 class="generation-artwork"
                 onerror="this.src='https://via.placeholder.com/120x120/78c850/ffffff?text=Gen+${gen.roman}'">
            <div class="generation-info">
                <div class="generation-name">${gen.fullName}</div>
                <div class="generation-games">${gen.games}</div>
            </div>
        `;

        track.appendChild(slide);

        // Create indicator dot
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.onclick = () => goToSlide(index);
        indicators.appendChild(dot);
    });

    currentCarouselIndex = 0;
    totalCarouselSlides = generationData.length;
    updateCarouselPosition();

    // Properly select the initial generation (Generation 1) with a small delay to ensure DOM is ready
    setTimeout(() => {
        selectGeneration(generationData[0].id);
    }, 100);
}

// Update carousel position
function updateCarouselPosition() {
    const track = document.getElementById('carousel-track');
    const slides = track.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');

    // Update track position
    track.style.transform = `translateX(-${currentCarouselIndex * 100}%)`;

    // Update active states
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentCarouselIndex);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentCarouselIndex);
    });
}

// Navigate to previous generation
function previousGeneration() {
    currentCarouselIndex = (currentCarouselIndex - 1 + totalCarouselSlides) % totalCarouselSlides;
    updateCarouselPosition();

    // Always update the game options when cycling through
    const currentGen = generationData[currentCarouselIndex];
    updateGameOptionsForGeneration(currentGen.id);
}

// Navigate to next generation
function nextGeneration() {
    currentCarouselIndex = (currentCarouselIndex + 1) % totalCarouselSlides;
    updateCarouselPosition();

    // Always update the game options when cycling through
    const currentGen = generationData[currentCarouselIndex];
    updateGameOptionsForGeneration(currentGen.id);
}

// Go to specific slide
function goToSlide(index) {
    currentCarouselIndex = index;
    updateCarouselPosition();

    // Update the game options for the selected generation
    const currentGen = generationData[currentCarouselIndex];
    updateGameOptionsForGeneration(currentGen.id);
}

// Update game options for a generation and auto-select when appropriate
function updateGameOptionsForGeneration(gen) {
    // Auto-select this generation when browsing
    selectedGeneration = gen;

    // Update Pokemon names immediately for autocomplete
    updatePokemonNamesForGeneration(gen);

    // Show game options
    const gameContainer = document.getElementById('game-select-container');
    const gameOptions = document.getElementById('game-options');
    gameContainer.style.display = 'block';

    const games = getGamesForGeneration(gen);
    gameOptions.innerHTML = '';

    games.forEach(game => {
        const btn = document.createElement('button');
        btn.className = 'game-option-btn';
        btn.textContent = game.name;
        btn.onclick = () => selectGame(game.key);
        gameOptions.appendChild(btn);
    });

    // Update evolution lines for preview
    if (typeof updateEvolutionLinesForGeneration === 'function') {
        updateEvolutionLinesForGeneration(gen);
    }

    // If there's only one game for this generation, auto-select it
    if (games.length === 1) {
        // Use setTimeout to ensure DOM is ready before selecting
        setTimeout(() => {
            selectGame(games[0].key);
        }, 0);
    } else {
        // Reset game selection state for multiple games
        selectedGame = null;
        document.querySelectorAll('.game-option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        document.getElementById('start-tracker').disabled = true;
    }
}

// Get available games for a generation
function getGamesForGeneration(generation) {
    const games = [];
    for (const [key, value] of Object.entries(gameRoutes)) {
        if (value.generation === generation) {
            games.push({ key, ...value });
        }
    }
    return games;
}

// Select generation in the carousel
function selectGeneration(gen) {
    selectedGeneration = gen;

    // Update Pokemon names immediately for autocomplete
    updatePokemonNamesForGeneration(gen);

    // Update carousel position to match selection
    const genIndex = generationData.findIndex(g => g.id === gen);
    if (genIndex !== -1 && genIndex !== currentCarouselIndex) {
        currentCarouselIndex = genIndex;
        updateCarouselPosition();
    }

    // Show game options
    const gameContainer = document.getElementById('game-select-container');
    const gameOptions = document.getElementById('game-options');
    gameContainer.style.display = 'block';

    const games = getGamesForGeneration(gen);
    gameOptions.innerHTML = '';

    games.forEach(game => {
        const btn = document.createElement('button');
        btn.className = 'game-option-btn';
        btn.textContent = game.name;
        btn.onclick = () => selectGame(game.key);
        gameOptions.appendChild(btn);
    });

    // Update evolution lines for the selected generation
    if (typeof updateEvolutionLinesForGeneration === 'function') {
        updateEvolutionLinesForGeneration(gen);
    }

    // If there's only one game for this generation, auto-select it
    if (games.length === 1) {
        selectGame(games[0].key);
    } else {
        // Reset game selection
        selectedGame = null;
        document.getElementById('start-tracker').disabled = true;
    }

    console.log(`Selected Generation ${gen}. Pokemon available: ${pokemonNames.length}`);
}

// Select game in the modal
function selectGame(gameKey) {
    selectedGame = gameKey;

    // Update UI
    document.querySelectorAll('.game-option-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.textContent === gameRoutes[gameKey].name) {
            btn.classList.add('selected');
        }
    });

    // Enable start button
    document.getElementById('start-tracker').disabled = false;
}

// Start the tracker with selected generation and game
function startTracker() {
    if (!selectedGeneration || !selectedGame) return;

    gameData.currentGeneration = selectedGeneration;
    gameData.currentGame = selectedGame;

    // Update Pokemon names and evolution lines
    updatePokemonNamesForGeneration(selectedGeneration);
    if (typeof updateEvolutionLinesForGeneration === 'function') {
        updateEvolutionLinesForGeneration(selectedGeneration);
    }

    saveData();

    // Hide modal
    document.getElementById('generation-selector-modal').style.display = 'none';

    // Initialize the main app
    initializeApp();

    // Refresh autocomplete to ensure it uses the correct generation
    refreshAutocomplete();

    // Show welcome toast
    showToast(`Started tracking Generation ${generationRomanNumerals[selectedGeneration]} - ${gameRoutes[selectedGame].name}!`, 'success');
}

// Get current routes based on selected game
function getCurrentRoutes() {
    return gameRoutes[gameData.currentGame]?.routes || [];
}

// Switch between games (only available when no Pokemon caught)
function switchGame() {
    const gameSelect = document.getElementById('game-select');
    const newGame = gameSelect.value;

    // Check if there's data that would be lost
    const hasData = gameData.player.caught.length > 0;

    if (hasData && newGame !== gameData.currentGame) {
        showToast('Cannot switch games after catching Pokemon! Please clear all data first.', 'error');
        gameSelect.value = gameData.currentGame;
        return;
    }

    gameData.currentGame = newGame;
    gameData.currentGeneration = gameRoutes[newGame].generation;

    // Update Pokemon names and evolution lines
    updatePokemonNamesForGeneration(gameData.currentGeneration);
    if (typeof updateEvolutionLinesForGeneration === 'function') {
        updateEvolutionLinesForGeneration(gameData.currentGeneration);
    }

    saveData();
    populateRoutes();
    updateRouteSelector();
    updateCounts();
    updateGenerationDisplay();
    refreshAutocomplete();
    renderGymLeaderTracker();

    showToast(`Switched to ${gameRoutes[newGame].name}!`, 'info');
}

// Update generation display badge
function updateGenerationDisplay() {
    const display = document.getElementById('generation-display');
    if (gameData.currentGeneration) {
        display.textContent = `Gen ${generationRomanNumerals[gameData.currentGeneration]}`;
    } else {
        display.textContent = '';
    }
}

// Initialize game selector
function initializeGameSelector() {
    const gameSelect = document.getElementById('game-select');
    gameSelect.innerHTML = '';

    // Only show games from the current generation
    if (gameData.currentGeneration) {
        const games = getGamesForGeneration(gameData.currentGeneration);
        games.forEach(game => {
            const option = document.createElement('option');
            option.value = game.key;
            option.textContent = game.name;
            gameSelect.appendChild(option);
        });

        gameSelect.value = gameData.currentGame || games[0].key;

        // Show the game selector if there are multiple games for this generation
        if (games.length > 1 && gameData.player.caught.length === 0) {
            document.getElementById('game-selector-ingame').style.display = 'block';
        }
    }
}

// Add keyboard navigation for carousel
document.addEventListener('keydown', function (e) {
    const modal = document.getElementById('generation-selector-modal');
    if (modal.style.display !== 'none') {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            previousGeneration();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextGeneration();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const currentGen = generationData[currentCarouselIndex];
            selectGeneration(currentGen.id);
        }
    }
});

// Get appropriate sprite URL based on generation
function getSpriteUrl(pokemonName, generation = null) {
    const gen = generation || gameData.currentGeneration || 3;
    const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

    // For now, we'll use the default sprites
    // In a full implementation, you'd fetch generation-specific sprites
    return `${baseUrl}/${pokemonName}.png`;
}

// Fetch Pokemon data from PokeAPI with generation awareness
async function getPokemonData(name, isShiny = false) {
    const cleanName = name.toLowerCase().trim().replace(/[^a-z0-9-]/g, '');

    const cacheKey = `${cleanName}_${isShiny ? 'shiny' : 'normal'}`;
    if (pokemonCache[cacheKey]) {
        return pokemonCache[cacheKey];
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${cleanName}`);
        if (!response.ok) {
            throw new Error('Pokemon not found');
        }

        const data = await response.json();
        const pokemonData = {
            name: data.name,
            displayName: data.name.charAt(0).toUpperCase() + data.name.slice(1),
            sprite: isShiny ? (data.sprites.front_shiny || data.sprites.front_default) : data.sprites.front_default,
            animatedSprite: isShiny ?
                (data.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_shiny ||
                    data.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default ||
                    data.sprites.front_shiny ||
                    data.sprites.front_default) :
                (data.sprites.versions?.['generation-v']?.['black-white']?.animated?.front_default || data.sprites.front_default),
            types: data.types.map(t => t.type.name),
            isShiny: isShiny
        };

        // Try to get generation-specific sprite
        const gen = gameData.currentGeneration;
        if (gen) {
            const genSprites = getGenerationSpecificSprite(data.sprites, gen, isShiny);
            if (genSprites) {
                pokemonData.sprite = genSprites;
            }
        }

        pokemonCache[cacheKey] = pokemonData;
        return pokemonData;
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        return null;
    }
}

// Get generation-specific sprite from sprite data
function getGenerationSpecificSprite(sprites, generation, isShiny = false) {
    const spriteType = isShiny ? 'front_shiny' : 'front_default';

    switch (generation) {
        case 1:
            return sprites.versions?.['generation-i']?.['red-blue']?.[spriteType] ||
                sprites.versions?.['generation-i']?.['yellow']?.[spriteType] ||
                sprites[spriteType] ||
                sprites.front_default;
        case 2:
            return sprites.versions?.['generation-ii']?.['crystal']?.[spriteType] ||
                sprites.versions?.['generation-ii']?.['gold']?.[spriteType] ||
                sprites[spriteType] ||
                sprites.front_default;
        case 3:
            return sprites.versions?.['generation-iii']?.['emerald']?.[spriteType] ||
                sprites.versions?.['generation-iii']?.['ruby-sapphire']?.[spriteType] ||
                sprites[spriteType] ||
                sprites.front_default;
        case 4:
            return sprites.versions?.['generation-iv']?.['platinum']?.[spriteType] ||
                sprites.versions?.['generation-iv']?.['diamond-pearl']?.[spriteType] ||
                sprites[spriteType] ||
                sprites.front_default;
        case 5:
            return sprites.versions?.['generation-v']?.['black-white']?.animated?.[spriteType] ||
                sprites.versions?.['generation-v']?.['black-white']?.[spriteType] ||
                sprites[spriteType] ||
                sprites.front_default;
        case 6:
            return sprites.versions?.['generation-vi']?.['x-y']?.[spriteType] ||
                sprites.versions?.['generation-vi']?.['omegaruby-alphasapphire']?.[spriteType] ||
                sprites[spriteType] ||
                sprites.front_default;
        case 7:
            return sprites.versions?.['generation-vii']?.['ultra-sun-ultra-moon']?.[spriteType] ||
                sprites.versions?.['generation-vii']?.['icons']?.[spriteType] ||
                sprites[spriteType] ||
                sprites.front_default;
        default:
            return sprites[spriteType] || sprites.front_default;
    }
}

// Check if a Pokemon or any from its evolution line is already caught
function isPokemonOrEvolutionCaught(pokemonName) {
    const cleanName = pokemonName.toLowerCase().trim().replace(/[^a-z0-9-]/g, '');

    // Get the evolution line for this Pokemon
    const evolutionLine = evolutionLines[cleanName] || [cleanName];

    // Check if any Pokemon in the evolution line is already caught
    for (let caught of gameData.player.caught) {
        const caughtCleanName = caught.name.toLowerCase().replace(/[^a-z0-9-]/g, '');
        if (evolutionLine.includes(caughtCleanName)) {
            return {
                caught: true,
                caughtName: caught.nickname || caught.displayName
            };
        }
    }

    return {
        caught: false,
        caughtName: null
    };
}

// Initialize the main application
function initializeApp() {
    populateRoutes();
    renderAll();
    updateRouteSelector();
    setupAutocomplete();
    updateCounts();
    updatePlayerNameDisplays();
    updateGenerationDisplay();
    initializeGameSelector();
    renderGymLeaderTracker();

    // Force update streamer window if it exists
    if (streamerWindow && !streamerWindow.closed) {
        setTimeout(() => {
            updateStreamerWindow();
        }, 100);
    }

    // Show initialization toast
    showToast('App initialized successfully!', 'info');
}

// Additional helper function to manually refresh streamer window
function forceRefreshStreamerWindow() {
    if (streamerWindow && !streamerWindow.closed) {
        try {
            updateStreamerWindow();
            showToast('Streamer window refreshed!', 'info');
        } catch (error) {
            console.error('Failed to refresh streamer window:', error);
            showToast('Failed to refresh streamer window. Try closing and reopening it.', 'error');
        }
    } else {
        showToast('No streamer window is currently open.', 'warning');
    }
}

// Initialize on page load
window.onload = function () {
    console.log('Loading app...');
    loadData();

    // Check if we need to show generation selector or main app
    if (!gameData.currentGeneration || !gameData.currentGame) {
        // Initialize and show carousel for new users
        console.log('Showing generation selector for new user');
        initializeCarousel();
        document.getElementById('generation-selector-modal').style.display = 'flex';
    } else {
        // Initialize main app for returning users
        console.log('Initializing main app for returning user');
        initializeApp();
    }
};

// Update Pokemon counts
function updateCounts() {
    const currentRoutes = getCurrentRoutes();
    const totalRoutes = currentRoutes.length;
    const completedRoutes = gameData.usedRoutes.length + gameData.failedRoutes.length;

    // Count fainted Pokemon
    const faintedCount = gameData.player.caught.filter(p => p.fainted).length;

    // Count failed encounters
    const failedCount = gameData.player.caught.filter(p => p.failedToCache).length;

    // Count shiny Pokemon
    const shinyCount = gameData.player.caught.filter(p => p.isShiny).length;

    document.getElementById('routes-completed').textContent = `${completedRoutes}/${totalRoutes}`;
    document.getElementById('fainted-count').textContent = faintedCount;
    document.getElementById('failed-encounters').textContent = failedCount;

    // Add or update shiny count display
    const shinyCountElement = document.getElementById('shiny-count');
    if (shinyCountElement) {
        shinyCountElement.textContent = shinyCount;
    }
}

// Replace the updatePokemonNamesForGeneration function
function updatePokemonNamesForGeneration(generation) {
    pokemonNames = getPokemonNamesUpToGen(generation);

    // Clear any existing autocomplete dropdowns to force refresh
    const dropdowns = document.querySelectorAll('.autocomplete-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
        dropdown.innerHTML = '';
    });

    console.log(`Updated Pokemon names for Generation ${generation}. Available Pokemon: ${pokemonNames.length}`);
}

// Add a helper function to refresh autocomplete after generation changes
function refreshAutocomplete() {
    // Clear existing autocomplete dropdowns
    const dropdowns = document.querySelectorAll('.autocomplete-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
        dropdown.innerHTML = '';
    });

    // Clear input values if they contain invalid Pokemon for current generation
    const pokemonInput = document.getElementById('pokemon-name');

    if (pokemonInput && pokemonInput.value) {
        if (!isPokemonValidForGeneration(pokemonInput.value, gameData.currentGeneration)) {
            pokemonInput.value = '';
        }
    }
}

// Simple autocomplete setup
function setupAutocomplete() {
    setupInputAutocomplete('pokemon-name', 'pokemon-dropdown');
}

// Update the setupInputAutocomplete function to better handle generation filtering
function setupInputAutocomplete(inputId, dropdownId) {
    const input = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);
    let currentFocus = -1;

    // Handle input events
    input.addEventListener('input', function () {
        const value = this.value.toLowerCase().trim();
        dropdown.innerHTML = '';
        currentFocus = -1;

        if (value.length < 1) {
            dropdown.style.display = 'none';
            return;
        }

        // Get current generation's Pokemon names
        const currentGenPokemon = gameData.currentGeneration
            ? getPokemonNamesUpToGen(gameData.currentGeneration)
            : pokemonNames;

        // Filter Pokemon names - only show those available in current generation
        const matches = currentGenPokemon.filter(name =>
            name.toLowerCase().includes(value)
        ).slice(0, 10); // Show max 10 suggestions

        if (matches.length === 0) {
            dropdown.style.display = 'none';
            return;
        }

        // Create dropdown items
        matches.forEach((name, index) => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.textContent = name;
            item.addEventListener('click', function () {
                input.value = name;
                dropdown.style.display = 'none';
            });
            dropdown.appendChild(item);
        });

        dropdown.style.display = 'block';
    });

    // Handle keyboard navigation
    input.addEventListener('keydown', function (e) {
        const items = dropdown.getElementsByClassName('autocomplete-item');

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentFocus++;
            addActive(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentFocus--;
            addActive(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (currentFocus > -1 && items[currentFocus]) {
                items[currentFocus].click();
            }
        } else if (e.key === 'Escape') {
            dropdown.style.display = 'none';
            currentFocus = -1;
        }
    });

    // Highlight active item
    function addActive(items) {
        if (!items) return;
        removeActive(items);
        if (currentFocus >= items.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = items.length - 1;
        items[currentFocus].classList.add('selected');
    }

    // Remove active highlighting
    function removeActive(items) {
        for (let i = 0; i < items.length; i++) {
            items[i].classList.remove('selected');
        }
    }

    // Hide dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (e.target !== input) {
            dropdown.style.display = 'none';
            currentFocus = -1;
        }
    });
}

// Populate route dropdown
function populateRoutes() {
    const select = document.getElementById('current-route');
    select.innerHTML = '<option value="">Select Route</option>';

    const currentRoutes = getCurrentRoutes();

    currentRoutes.forEach(route => {
        const option = document.createElement('option');
        option.value = route;
        option.textContent = route;

        // Check if route is completed or failed
        if (gameData.usedRoutes.includes(route)) {
            option.disabled = true;
            option.textContent += ' (Completed)';
            option.style.color = '#999';
        } else if (gameData.failedRoutes.some(failed => failed.route === route)) {
            option.disabled = true;
            option.textContent += ' (Failed)';
            option.className = 'failed';
            option.style.color = '#e74c3c';
        }

        select.appendChild(option);
    });
}

// Update route selector status and buttons
function updateRouteSelector() {
    const routeSelect = document.getElementById('current-route');
    const statusDiv = document.getElementById('route-status');
    const addButton = document.getElementById('add-pokemon-btn');
    const failedButton = document.getElementById('failed-btn');

    const selectedRoute = routeSelect.value;

    if (!selectedRoute) {
        statusDiv.textContent = 'Select a route to add Pokemon';
        addButton.disabled = true;
        failedButton.disabled = true;
    } else if (gameData.usedRoutes.includes(selectedRoute)) {
        statusDiv.textContent = 'This route is already completed!';
        addButton.disabled = true;
        failedButton.disabled = true;
    } else if (gameData.failedRoutes.some(failed => failed.route === selectedRoute)) {
        statusDiv.textContent = 'This route already failed!';
        addButton.disabled = true;
        failedButton.disabled = true;
    } else {
        statusDiv.textContent = `Ready to add Pokemon to ${selectedRoute}`;
        addButton.disabled = false;
        failedButton.disabled = false;
    }
}

// Add event listener to route selector
document.addEventListener('DOMContentLoaded', function () {
    const routeSelect = document.getElementById('current-route');
    if (routeSelect) {
        routeSelect.addEventListener('change', updateRouteSelector);
    }
});

// Updated addFailedEncounter function with generation validation and shiny support
async function addFailedEncounter() {
    const route = document.getElementById('current-route').value;
    const pokemonName = document.getElementById('pokemon-name').value;
    const nickname = document.getElementById('pokemon-nickname').value;
    const isShiny = document.getElementById('pokemon-shiny').checked;

    if (!route) {
        showToast('Please select a route', 'error');
        return;
    }

    if (!pokemonName) {
        showToast('Please enter a Pokemon name to record the failed encounter', 'error');
        return;
    }

    if (gameData.usedRoutes.includes(route)) {
        showToast('This route has already been completed!', 'error');
        return;
    }

    if (gameData.failedRoutes.some(failed => failed.route === route)) {
        showToast('This route has already been marked as failed!', 'error');
        return;
    }

    // Validate Pokemon is from correct generation
    if (!isPokemonValidForGeneration(pokemonName, gameData.currentGeneration)) {
        showToast(`${pokemonName} is not available in Generation ${generationRomanNumerals[gameData.currentGeneration]}!`, 'error');
        return;
    }

    // Check evolution line restrictions
    const evolutionCheck = isPokemonOrEvolutionCaught(pokemonName);
    if (evolutionCheck.caught) {
        showToast(`Cannot encounter ${pokemonName} - already have ${evolutionCheck.caughtName} from same evolution line`, 'error');
        return;
    }

    // Fetch Pokemon data with shiny status
    const pokemonData = await getPokemonData(pokemonName, isShiny);

    if (!pokemonData) {
        showToast('Pokemon not found! Please check the spelling.', 'error');
        return;
    }

    // Create failed encounter object
    const failedPokemon = {
        id: Date.now() + Math.random(),
        route: route,
        name: pokemonData.name,
        displayName: pokemonData.displayName,
        nickname: nickname || pokemonData.displayName,
        sprite: pokemonData.sprite,
        animatedSprite: pokemonData.animatedSprite,
        types: pokemonData.types,
        fainted: false,
        failedToCache: true, // Mark as failed to catch
        isShiny: isShiny
    };

    // Add to caught list
    gameData.player.caught.push(failedPokemon);

    // Create a failed route record
    const failedRoute = {
        route: route,
        pokemon: failedPokemon,
        timestamp: new Date().toISOString()
    };

    gameData.failedRoutes.push(failedRoute);

    // Clear inputs
    document.getElementById('pokemon-name').value = '';
    document.getElementById('pokemon-nickname').value = '';
    document.getElementById('pokemon-shiny').checked = false;
    document.getElementById('current-route').value = '';

    saveData();
    populateRoutes();
    renderAll();
    updateRouteSelector();
    updateCounts();

    const shinyText = isShiny ? ' (Shiny lost!)' : '';
    showToast(`Failed encounter recorded for ${route} - ${failedPokemon.nickname} fainted during capture${shinyText}`, 'warning');
}

// Updated addPokemon function with generation validation and shiny support
async function addPokemon() {
    const route = document.getElementById('current-route').value;
    const pokemonName = document.getElementById('pokemon-name').value;
    const nickname = document.getElementById('pokemon-nickname').value;
    const isShiny = document.getElementById('pokemon-shiny').checked;

    if (!route) {
        showToast('Please select a route', 'error');
        return;
    }

    if (!pokemonName) {
        showToast('Please enter a Pokemon name', 'error');
        return;
    }

    if (gameData.usedRoutes.includes(route)) {
        showToast('This route has already been completed!', 'error');
        return;
    }

    if (gameData.failedRoutes.some(failed => failed.route === route)) {
        showToast('This route has already been marked as failed!', 'error');
        return;
    }

    // Validate Pokemon is from correct generation
    if (!isPokemonValidForGeneration(pokemonName, gameData.currentGeneration)) {
        showToast(`${pokemonName} is not available in Generation ${generationRomanNumerals[gameData.currentGeneration]}!`, 'error');
        return;
    }

    // Check evolution line restrictions
    const evolutionCheck = isPokemonOrEvolutionCaught(pokemonName);
    if (evolutionCheck.caught) {
        showToast(`Cannot catch ${pokemonName} - already have ${evolutionCheck.caughtName} from same evolution line`, 'error');
        return;
    }

    // Fetch Pokemon data with shiny status
    const pokemonData = await getPokemonData(pokemonName, isShiny);

    if (!pokemonData) {
        showToast('Pokemon not found! Please check the spelling.', 'error');
        return;
    }

    // Create Pokemon object
    const pokemon = {
        id: Date.now() + Math.random(),
        route: route,
        name: pokemonData.name,
        displayName: pokemonData.displayName,
        nickname: nickname || pokemonData.displayName,
        sprite: pokemonData.sprite,
        animatedSprite: pokemonData.animatedSprite,
        types: pokemonData.types,
        fainted: false,
        failedToCache: false,
        isShiny: isShiny
    };

    // Add to caught list
    gameData.player.caught.push(pokemon);

    // Mark route as used
    gameData.usedRoutes.push(route);

    // Clear inputs
    document.getElementById('pokemon-name').value = '';
    document.getElementById('pokemon-nickname').value = '';
    document.getElementById('pokemon-shiny').checked = false;
    document.getElementById('current-route').value = '';

    saveData();
    populateRoutes();
    renderAll();
    updateRouteSelector();
    updateCounts();

    const shinyText = isShiny ? ' ✨' : '';
    showToast(`Caught ${pokemon.nickname} on ${route}${shinyText}`, 'success');
}

// Render all UI elements
function renderAll() {
    renderTeam();
    renderAvailablePokemon();
    updateCounts();
}

// Helper function to find a Pokemon in the caught array by ID
function findPokemonById(pokemonId) {
    const pokemon = gameData.player.caught.find(p => p.id.toString() === pokemonId.toString());
    if (pokemon) return { pokemon: pokemon };
    return null;
}

// Helper function to compact a team array (remove nulls and shift remaining Pokemon up)
function compactTeam(team) {
    const compacted = team.filter(pokemon => pokemon !== null);
    // Fill the rest with nulls to maintain 6-slot structure
    while (compacted.length < 6) {
        compacted.push(null);
    }
    return compacted;
}

// Faint a Pokemon
function faintPokemon(pokemonId) {
    if (!confirm('Mark this Pokemon as fainted? This will remove it from the team!')) return;

    const pokemonInfo = findPokemonById(pokemonId);
    if (!pokemonInfo) {
        console.error('Pokemon not found:', pokemonId);
        return;
    }

    const pokemon = pokemonInfo.pokemon;
    pokemon.fainted = true;

    // Remove Pokemon from team
    const team = gameData.player.team;
    for (let i = 0; i < team.length; i++) {
        if (team[i] && team[i].id.toString() === pokemonId.toString()) {
            team[i] = null;
        }
    }

    // Auto-compact team after removal
    gameData.player.team = compactTeam(team);

    saveData();
    renderAll();

    showToast(`${pokemon.nickname} has fainted and been removed from team`, 'error');
}

// Revive a Pokemon
function revivePokemon(pokemonId) {
    if (!confirm('Revive this Pokemon?')) return;

    const pokemonInfo = findPokemonById(pokemonId);
    if (!pokemonInfo) {
        console.error('Pokemon not found:', pokemonId);
        showToast('Error: Pokemon not found!', 'error');
        return;
    }

    const pokemon = pokemonInfo.pokemon;
    pokemon.fainted = false;

    saveData();
    renderAll();

    showToast(`${pokemon.nickname} has been revived!`, 'success');
}

// Delete a Pokemon
function deletePokemon(pokemonId) {
    if (!confirm('Delete this Pokemon?')) return;

    const pokemon = gameData.player.caught.find(p => p.id.toString() === pokemonId.toString());

    if (pokemon) {
        // Check if this was a failed encounter and remove from failedRoutes
        if (pokemon.failedToCache) {
            gameData.failedRoutes = gameData.failedRoutes.filter(failed =>
                failed.pokemon.id.toString() !== pokemonId.toString()
            );
        } else {
            // Remove route from used routes only if it was a successful catch
            gameData.usedRoutes = gameData.usedRoutes.filter(route => route !== pokemon.route);
        }
    }

    // Remove the Pokemon from caught list
    gameData.player.caught = gameData.player.caught.filter(p => p.id.toString() !== pokemonId.toString());

    // Remove from team and mark for compaction
    gameData.player.team = gameData.player.team.map(p => p && p.id.toString() === pokemonId.toString() ? null : p);

    // Auto-compact team after deletion
    gameData.player.team = compactTeam(gameData.player.team);

    saveData();
    populateRoutes();
    renderAll();
    updateRouteSelector();

    showToast(`Deleted ${pokemon.nickname}`, 'info');
}

// Clear team slot
function clearTeamSlot(slot) {
    const team = gameData.player.team;
    const pokemon = team[slot];

    if (pokemon) {
        if (confirm(`Remove ${pokemon.nickname} from the team?`)) {
            team[slot] = null;

            // Auto-compact team after removal
            gameData.player.team = compactTeam(team);

            saveData();
            renderAll();

            showToast(`Removed ${pokemon.nickname} from team`, 'info');
        }
    }
}

// Render team slots
function renderTeam() {
    const teamContainer = document.getElementById('player-team');
    const slots = teamContainer.querySelectorAll('.team-slot');
    const team = gameData.player.team;

    slots.forEach((slot, index) => {
        const pokemon = team[index];
        if (pokemon) {
            const isFainted = pokemon.fainted;
            const isShiny = pokemon.isShiny;

            let className = `team-slot filled`;
            if (isFainted) {
                className += ' fainted';
            }
            if (isShiny) {
                className += ' shiny-border';
            }

            slot.className = className;

            let overlayClass = '';
            if (isFainted) overlayClass += 'fainted-overlay ';
            if (isShiny) overlayClass += 'shiny-pokemon ';

            slot.innerHTML = `
                <div class="${overlayClass}" style="position: relative;">
                    <img src="${pokemon.animatedSprite || pokemon.sprite}" class="pokemon-sprite" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
                </div>
                <div>${pokemon.nickname}${isFainted ? ' (Fainted)' : ''}${isShiny ? ' ✨' : ''}</div>
                <div class="pokemon-types">
                    ${pokemon.types.map(t => `<span class="type-badge type-${t}">${t}</span>`).join('')}
                </div>
            `;
        } else {
            slot.className = 'team-slot';
            slot.innerHTML = 'Empty';
        }
    });
}

// Enhanced type conflict checking for single team
function getTypeConflictMessage(pokemon, team) {
    const teamPrimaryTypes = new Set();
    const teamAllTypes = new Set();

    team.forEach(p => {
        if (p && p.types.length > 0) {
            teamPrimaryTypes.add(p.types[0]);
            p.types.forEach(t => teamAllTypes.add(t));
        }
    });

    const pokemonPrimaryType = pokemon.types[0];
    const pokemonSecondaryType = pokemon.types[1];

    // Primary type cannot overlap with ANY type on the team
    if (teamAllTypes.has(pokemonPrimaryType)) {
        return `primary type ${pokemonPrimaryType} conflicts with team`;
    }

    // Secondary type cannot overlap with any PRIMARY type on the team
    if (pokemonSecondaryType && teamPrimaryTypes.has(pokemonSecondaryType)) {
        return `secondary type ${pokemonSecondaryType} conflicts with team's primary type`;
    }

    return null; // No conflict
}

// Add Pokemon to team
function addToTeam(pokemon) {
    const team = gameData.player.team;

    // Cannot add failed encounters to team
    if (pokemon.failedToCache) {
        showToast('Cannot add failed encounters to team!', 'error');
        return;
    }

    // Check if Pokemon is already in team
    if (team.some(p => p && p.id.toString() === pokemon.id.toString())) {
        showToast('This Pokemon is already on the team!', 'error');
        return;
    }

    // Auto-compact team first to ensure no gaps
    gameData.player.team = compactTeam(team);
    const compactedTeam = gameData.player.team;

    // Check if team is full after compacting
    if (compactedTeam.every(slot => slot !== null)) {
        showToast('Team is full!', 'error');
        return;
    }

    // Check type conflicts
    const conflict = getTypeConflictMessage(pokemon, compactedTeam);
    if (conflict) {
        showToast(`Cannot add ${pokemon.nickname}: ${conflict}`, 'error');
        return;
    }

    // Add Pokemon to first available slot
    const emptySlot = compactedTeam.findIndex(slot => slot === null);
    compactedTeam[emptySlot] = pokemon;
    saveData();
    renderAll();
    showToast(`Added ${pokemon.nickname} to team!`, 'success');
}

// Render available Pokemon for team building
function renderAvailablePokemon() {
    const container = document.getElementById('available-pokemon');
    const allPokemon = gameData.player.caught;

    if (allPokemon.length === 0) {
        container.innerHTML = '<div class="loading">No Pokemon caught yet!</div>';
        return;
    }

    container.innerHTML = '';

    allPokemon.forEach(pokemon => {
        const itemDiv = document.createElement('div');
        itemDiv.style.marginBottom = '8px';
        itemDiv.style.border = '2px solid #78c850';
        itemDiv.style.borderRadius = '4px';
        itemDiv.style.padding = '6px';

        // Set different background colors based on encounter type
        if (pokemon.failedToCache) {
            itemDiv.style.background = '#fff2f2';
            itemDiv.classList.add('failed-item');
        } else {
            itemDiv.style.background = '#f0f8ff';
        }

        // Check if can be added to team
        const team = gameData.player.team;
        const isFainted = pokemon.fainted;
        const isFailedEncounter = pokemon.failedToCache;
        const isInTeam = team.some(p => p && p.id.toString() === pokemon.id.toString());
        const teamFull = team.every(slot => slot !== null);

        let isValid = true;
        let conflictMessage = '';

        if (isFailedEncounter) {
            isValid = false;
            conflictMessage = 'Failed to catch';
        } else if (isFainted) {
            isValid = false;
            conflictMessage = 'Fainted';
        } else if (isInTeam) {
            isValid = false;
            conflictMessage = 'Already on team';
        } else if (teamFull) {
            isValid = false;
            conflictMessage = 'Team full';
        } else {
            const conflict = getTypeConflictMessage(pokemon, team);
            if (conflict) {
                isValid = false;
                conflictMessage = conflict;
            }
        }

        let itemClassName = 'available-item';
        if (isFailedEncounter) {
            itemClassName += ' failed-item';
        } else if (isFainted) {
            itemClassName += ' fainted';
        } else if (!isValid) {
            itemClassName += ' invalid';
        }

        itemDiv.className = itemClassName;

        const getOverlayClass = (pokemon) => {
            let overlayClass = '';
            if (pokemon.failedToCache) overlayClass += 'failed-overlay ';
            if (pokemon.fainted) overlayClass += 'fainted-overlay ';
            if (pokemon.isShiny) overlayClass += 'shiny-pokemon ';
            return overlayClass;
        };

        const getSpriteFilter = (pokemon) => {
            if (pokemon.fainted) return 'filter: grayscale(100%) contrast(50%);';
            if (pokemon.failedToCache) return 'filter: grayscale(80%) opacity(70%);';
            return '';
        };

        itemDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 8px;">
                <div class="${getOverlayClass(pokemon)}" style="position: relative;">
                    <img src="${pokemon.sprite}" style="width: 48px; height: 48px; image-rendering: pixelated; ${getSpriteFilter(pokemon)}" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'">
                </div>
                <div style="flex-grow: 1;">
                    <div style="font-weight: bold; color: #2a5834;">${pokemon.nickname}${isFainted ? ' (Fainted)' : ''}${isFailedEncounter ? ' (Failed)' : ''}${pokemon.isShiny ? ' ✨' : ''}</div>
                    <div style="font-size: 7px; color: #666;">${pokemon.route}</div>
                    <div style="display: flex; gap: 3px; margin-top: 2px;">
                        ${pokemon.types.map(t => `<span class="type-badge type-${t}" style="font-size: 6px; padding: 1px 4px;">${t}</span>`).join('')}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    ${isFainted ?
                `<button class="faint-btn" onclick="revivePokemon('${pokemon.id}')" style="background: #27ae60; border-color: #229954; font-size: 6px; padding: 2px 4px; min-width: 35px;">Revive</button>` :
                isFailedEncounter ? '' :
                    `<button class="faint-btn" onclick="faintPokemon('${pokemon.id}')" style="font-size: 6px; padding: 2px 4px; min-width: 35px;">Faint</button>`
            }
                    <button class="delete-btn" onclick="deletePokemon('${pokemon.id}')" style="font-size: 6px; padding: 2px 4px; min-width: 35px;">Delete</button>
                </div>
            </div>
        `;

        if (isValid && !isFainted && !isFailedEncounter) {
            itemDiv.style.cursor = 'pointer';
            itemDiv.onclick = (e) => {
                if (!e.target.matches('button, .delete-btn, .faint-btn')) {
                    addToTeam(pokemon);
                }
            };
        } else {
            itemDiv.title = conflictMessage;
        }

        container.appendChild(itemDiv);
    });
}

// Enhanced save function to also update streamer window
function saveData() {
    localStorage.setItem('nuzlockeDataMultiGen', JSON.stringify(gameData));

    // Trigger smart update instead of full update
    if (streamerWindow && !streamerWindow.closed) {
        setTimeout(() => {
            updateStreamerWindowSmart();
        }, 50); // Small delay to ensure data is saved
    }
}

// Load data from localStorage with generation support
function loadData() {
    const saved = localStorage.getItem('nuzlockeDataMultiGen');
    if (saved) {
        try {
            const loaded = JSON.parse(saved);
            gameData = {
                ...gameData,
                ...loaded,
                // Ensure all properties exist
                usedRoutes: loaded.usedRoutes || [],
                failedRoutes: loaded.failedRoutes || [],
                playerName: loaded.playerName || 'Trainer',
                currentGame: loaded.currentGame,
                currentGeneration: loaded.currentGeneration,
                gymProgress: loaded.gymProgress || {} // Load gym progress
            };

            // Add backwards compatibility properties
            if (gameData.player && gameData.player.caught) {
                gameData.player.caught.forEach(pokemon => {
                    if (pokemon.fainted === undefined) {
                        pokemon.fainted = false;
                    }
                    if (pokemon.failedToCache === undefined) {
                        pokemon.failedToCache = false;
                    }
                });
            }

            console.log('Data loaded successfully');
        } catch (e) {
            console.error('Error loading saved data:', e);
            showToast('Error loading saved data. Starting fresh.', 'warning');
        }
    }
}

// Clear all data
function clearAllData() {
    if (confirm('Are you sure you want to clear all data? This cannot be undone!')) {
        gameData = {
            player: {
                caught: [],
                team: [null, null, null, null, null, null]
            },
            usedRoutes: [],
            failedRoutes: [],
            playerName: 'Trainer',
            currentGame: null,
            currentGeneration: null,
            gymProgress: {}
        };
        saveData();

        // Show generation selector again
        initializeCarousel();
        document.getElementById('generation-selector-modal').style.display = 'flex';
        selectedGeneration = null;
        selectedGame = null;

        showToast('All data cleared successfully!', 'info');
    }
}

// Export data
function exportData() {
    const dataStr = JSON.stringify(gameData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `nuzlocke-save-gen${gameData.currentGeneration}-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();

    showToast('Save file exported successfully!', 'success');
}

// Import data
function importData() {
    document.getElementById('importFile').click();
}

// Handle file import with generation support
document.addEventListener('DOMContentLoaded', function () {
    const importFile = document.getElementById('importFile');
    if (importFile) {
        importFile.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function (event) {
                try {
                    const imported = JSON.parse(event.target.result);
                    if (imported.player && imported.player.caught !== undefined) {
                        gameData = {
                            ...imported,
                            usedRoutes: imported.usedRoutes || [],
                            failedRoutes: imported.failedRoutes || [],
                            playerName: imported.playerName || 'Trainer',
                            currentGame: imported.currentGame || 'hoenn_gen3',
                            currentGeneration: imported.currentGeneration || 3,
                            gymProgress: imported.gymProgress || {} // Import gym progress
                        };

                        // Update Pokemon names and evolution lines based on imported generation
                        updatePokemonNamesForGeneration(gameData.currentGeneration);
                        if (typeof updateEvolutionLinesForGeneration === 'function') {
                            updateEvolutionLinesForGeneration(gameData.currentGeneration);
                        }

                        // Save data first
                        saveData();

                        // Initialize the main app
                        initializeApp();

                        // Force update streamer window after a brief delay to ensure all data is loaded
                        if (streamerWindow && !streamerWindow.closed) {
                            setTimeout(() => {
                                updateStreamerWindow();
                                console.log('Streamer window force-updated after import');
                            }, 100);
                        }

                        showToast('Save file imported successfully!', 'success');
                    } else {
                        showToast('Invalid save file format!', 'error');
                    }
                } catch (error) {
                    showToast('Error reading save file: ' + error.message, 'error');
                }
            };
            reader.readAsText(file);

            // Reset the file input
            e.target.value = '';
        });
    }
});

// Edit player name function
function editPlayerName() {
    const currentName = gameData.playerName;
    const newName = prompt(`Enter your trainer name:`, currentName);

    if (newName && newName.trim()) {
        gameData.playerName = newName.trim();
        saveData();
        updatePlayerNameDisplays();
        renderGymLeaderTracker(); // Update gym tracker with new name
        showToast(`Trainer name updated to ${newName.trim()}!`, 'success');
    }
}

// Update all player name displays throughout the UI
function updatePlayerNameDisplays() {
    const playerName = gameData.playerName;

    // Update team header
    document.getElementById('player-team-header').textContent = `${playerName}'s Team`;

    // Re-render available Pokemon to update player labels
    renderAvailablePokemon();
}

// Streamer Mode Functions
let streamerWindow = null;

// Open Twitch Streamer Mode popup window
function openStreamerMode() {
    // Close existing window if open
    if (streamerWindow && !streamerWindow.closed) {
        streamerWindow.close();
    }

    // Create popup window with proper dimensions for single player
    const width = 600;  // Reduced width for single team
    const height = 200;  // Good height for single team
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;

    streamerWindow = window.open(
        '',
        'StreamerMode',
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,status=no`
    );

    if (streamerWindow) {
        setupStreamerWindow();

        // Ensure window is fully loaded before first update
        setTimeout(() => {
            if (streamerWindow && !streamerWindow.closed) {
                updateStreamerWindow();
            }
        }, 200);

        showToast('Streamer mode window opened! Resize and position it for your stream overlay.', 'success');
    } else {
        showToast('Failed to open streamer mode. Please allow popups for this site.', 'error');
    }
}

// Color themes for streamer mode
const streamerThemes = {
    'black-red': {
        name: 'Black & Red',
        background: 'rgba(0, 0, 0, 0.9)',
        accent: '#e74c3c',
        secondary: '#c0392b',
        text: '#ffffff',
        genBg: 'rgba(231, 76, 60, 0.9)'
    },
    'white-pink': {
        name: 'White & Pink',
        background: 'rgba(255, 255, 255, 0.95)',
        accent: '#e91e63',
        secondary: '#ad1457',
        text: '#333333',
        genBg: 'rgba(233, 30, 99, 0.9)'
    },
    'dark-blue': {
        name: 'Dark Blue & Cyan',
        background: 'rgba(20, 30, 60, 0.9)',
        accent: '#00bcd4',
        secondary: '#0097a7',
        text: '#ffffff',
        genBg: 'rgba(0, 188, 212, 0.9)'
    },
    'dark-purple': {
        name: 'Dark Purple & Pink',
        background: 'rgba(40, 20, 60, 0.9)',
        accent: '#e91e63',
        secondary: '#ad1457',
        text: '#ffffff',
        genBg: 'rgba(233, 30, 99, 0.9)'
    },
    'dark-green': {
        name: 'Dark Green & Lime',
        background: 'rgba(20, 40, 20, 0.9)',
        accent: '#8bc34a',
        secondary: '#689f38',
        text: '#ffffff',
        genBg: 'rgba(139, 195, 74, 0.9)'
    },
    'charcoal-orange': {
        name: 'Charcoal & Orange',
        background: 'rgba(40, 40, 40, 0.9)',
        accent: '#ff9800',
        secondary: '#f57c00',
        text: '#ffffff',
        genBg: 'rgba(255, 152, 0, 0.9)'
    },
    'navy-gold': {
        name: 'Navy & Gold',
        background: 'rgba(25, 35, 55, 0.9)',
        accent: '#ffc107',
        secondary: '#ff8f00',
        text: '#ffffff',
        genBg: 'rgba(255, 193, 7, 0.9)'
    },
    'dark-teal': {
        name: 'Dark Teal & White',
        background: 'rgba(20, 50, 50, 0.9)',
        accent: '#ffffff',
        secondary: '#f5f5f5',
        text: '#ffffff',
        genBg: 'rgba(255, 255, 255, 0.9)'
    },
    'maroon-yellow': {
        name: 'Maroon & Yellow',
        background: 'rgba(60, 20, 20, 0.9)',
        accent: '#ffeb3b',
        secondary: '#fbc02d',
        text: '#ffffff',
        genBg: 'rgba(255, 235, 59, 0.9)'
    },
    'gray-green': {
        name: 'Gray & Green',
        background: 'rgba(50, 50, 50, 0.9)',
        accent: '#4caf50',
        secondary: '#388e3c',
        text: '#ffffff',
        genBg: 'rgba(76, 175, 80, 0.9)'
    },
    'brown-cream': {
        name: 'Dark Brown & Cream',
        background: 'rgba(60, 40, 30, 0.9)',
        accent: '#fff8e1',
        secondary: '#ffecb3',
        text: '#ffffff',
        genBg: 'rgba(255, 248, 225, 0.9)'
    }
};

// Track previous state to avoid unnecessary updates
let previousStreamerState = {
    generation: null,
    playerName: null,
    team: [],
    gymProgress: null
};

// Setup the streamer window content and styling with level cap display
function setupStreamerWindow() {
    if (!streamerWindow) return;

    // Get saved theme or default to black-red
    const savedTheme = localStorage.getItem('streamerTheme') || 'black-red';

    streamerWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nuzlocke Team - Streamer Mode</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    image-rendering: pixelated;
                    image-rendering: -moz-crisp-edges;
                    image-rendering: crisp-edges;
                }
                
                body {
                    font-family: 'Press Start 2P', monospace;
                    padding: 10px;
                    font-size: 8px;
                    line-height: 1.4;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }
                
                .theme-selector {
                    position: absolute;
                    top: 5px;
                    left: 10px;
                    z-index: 100;
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    transition: opacity 0.5s ease, transform 0.5s ease;
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .theme-selector.hidden {
                    opacity: 0;
                    transform: translateY(-10px);
                    pointer-events: none;
                }
                
                .theme-selector:hover {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                    pointer-events: auto !important;
                }
                
                .theme-select, .sprite-size-select {
                    background: rgba(0, 0, 0, 0.8);
                    color: white;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    padding: 2px 4px;
                    font-family: 'Press Start 2P', monospace;
                    font-size: 6px;
                    border-radius: 3px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .theme-select:focus, .sprite-size-select:focus {
                    outline: none;
                    border-color: var(--accent-color);
                }
                
                .theme-select:hover, .sprite-size-select:hover {
                    background: rgba(0, 0, 0, 0.9);
                    border-color: rgba(255, 255, 255, 0.5);
                }
                
                .selector-label {
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 5px;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
                }
                
                .gym-progress-bar {
                    position: absolute;
                    top: 5px;
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex;
                    gap: 8px;
                    align-items: center;
                    background: rgba(0, 0, 0, 0.8);
                    padding: 4px 8px;
                    border-radius: 6px;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    transition: all 0.3s ease;
                    z-index: 90;
                }
                
                .gym-section {
                    display: flex;
                    align-items: center;
                    gap: 3px;
                }
                
                .gym-label {
                    font-size: 5px;
                    color: rgba(255, 255, 255, 0.8);
                    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
                }
                
                .gym-counter {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 1px 4px;
                    border-radius: 3px;
                    font-size: 6px;
                    font-weight: bold;
                    min-width: 20px;
                    text-align: center;
                    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
                    transition: all 0.3s ease;
                }
                
                .gym-counter.gyms {
                    color: #4CAF50;
                    border: 1px solid rgba(76, 175, 80, 0.5);
                }
                
                .gym-counter.elite-four {
                    color: #9C27B0;
                    border: 1px solid rgba(156, 39, 176, 0.5);
                }
                
                .gym-counter.champion {
                    color: #FF9800;
                    border: 1px solid rgba(255, 152, 0, 0.5);
                    animation: championGlow 2s ease-in-out infinite alternate;
                }
                
                .gym-counter.level-cap {
                    color: #2196F3;
                    border: 1px solid rgba(33, 150, 243, 0.5);
                    font-weight: bold;
                    min-width: 30px;
                }
                
                .gym-divider {
                    width: 1px;
                    height: 12px;
                    background: rgba(255, 255, 255, 0.3);
                }
                
                @keyframes championGlow {
                    0% { 
                        box-shadow: 0 0 3px rgba(255, 152, 0, 0.5);
                        background: rgba(255, 152, 0, 0.2);
                    }
                    100% { 
                        box-shadow: 0 0 8px rgba(255, 152, 0, 0.8);
                        background: rgba(255, 152, 0, 0.4);
                    }
                }
                
                .generation-info {
                    position: absolute;
                    top: 5px;
                    right: 10px;
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 6px;
                    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
                    transition: background 0.3s ease;
                }
                
                .streamer-container {
                    display: flex;
                    gap: 20px;
                    height: 100%;
                    align-items: center;
                    margin-top: 30px;
                    justify-content: center;
                }
                
                .team-section {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    padding: 8px;
                    backdrop-filter: blur(5px);
                    transition: all 0.3s ease;
                }
                
                .team-header {
                    text-align: center;
                    margin-bottom: 8px;
                    font-size: 10px;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
                    transition: color 0.3s ease;
                }
                
                .team-pokemon {
                    display: flex;
                    justify-content: space-between;
                    gap: 4px;
                    flex-wrap: nowrap;
                    width: 100%;
                }
                
                .pokemon-slot {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    min-width: 60px;
                    position: relative;
                    transition: opacity 0.3s ease;
                }
                
                .pokemon-sprite {
                    image-rendering: pixelated;
                    border: 1px solid rgba(255, 255, 255, 0.3);
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.1);
                    transition: border-color 0.3s ease;
                    position: relative;
                    z-index: 5;
                }
                
                .sprite-small {
                    width: 40px;
                    height: 40px;
                }
                
                .sprite-medium {
                    width: 48px;
                    height: 48px;
                }
                
                .sprite-large {
                    width: 64px;
                    height: 64px;
                }
                
                .sprite-xl {
                    width: 80px;
                    height: 80px;
                }
                
                .sprite-auto {
                    width: calc(8vw - 10px);
                    height: calc(8vw - 10px);
                    min-width: 32px;
                    min-height: 32px;
                    max-width: 100px;
                    max-height: 100px;
                }
                
                .pokemon-name {
                    font-size: 6px;
                    text-align: center;
                    margin-top: 2px;
                    max-width: 60px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
                
                .pokemon-types {
                    display: flex;
                    gap: 1px;
                    margin-top: 1px;
                    justify-content: center;
                }
                
                .type-badge {
                    padding: 1px 3px;
                    border-radius: 2px;
                    font-size: 4px;
                    color: #fff;
                    text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.5);
                    min-width: 20px;
                    text-align: center;
                }
                
                .empty-slot {
                    width: 48px;
                    height: 48px;
                    border: 1px dashed rgba(255, 255, 255, 0.3);
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.05);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 6px;
                    color: rgba(255, 255, 255, 0.5);
                    transition: border-color 0.3s ease;
                }
                
                .fainted {
                    opacity: 0.5;
                    filter: grayscale(100%);
                }
                
                .fainted-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(231, 76, 60, 0.8);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 4px;
                    border-radius: 4px;
                    z-index: 10;
                }
                
                /* Type colors */
                .type-normal { background: #a8a878; }
                .type-fire { background: #f08030; }
                .type-water { background: #6890f0; }
                .type-electric { background: #f8d030; }
                .type-grass { background: #78c850; }
                .type-ice { background: #98d8d8; }
                .type-fighting { background: #c03028; }
                .type-poison { background: #a040a0; }
                .type-ground { background: #e0c068; }
                .type-flying { background: #a890f0; }
                .type-psychic { background: #f85888; }
                .type-bug { background: #a8b820; }
                .type-rock { background: #b8a038; }
                .type-ghost { background: #705898; }
                .type-dragon { background: #7038f8; }
                .type-dark { background: #705848; }
                .type-steel { background: #b8b8d0; }
                .type-fairy { background: #ee99ac; }
            </style>
        </head>
        <body>
            <div class="theme-selector" id="theme-selector-container">
                <div>
                    <div class="selector-label">Theme:</div>
                    <select class="theme-select" id="theme-selector" onchange="changeTheme(this.value)">
                        ${Object.entries(streamerThemes).map(([key, theme]) =>
        `<option value="${key}" ${key === savedTheme ? 'selected' : ''}>${theme.name}</option>`
    ).join('')}
                    </select>
                </div>
                <div>
                    <div class="selector-label">Sprite Size:</div>
                    <select class="sprite-size-select" id="sprite-size-selector" onchange="changeSpriteSize(this.value)">
                        <option value="auto">Auto Scale</option>
                        <option value="small">Small</option>
                        <option value="medium" selected>Medium</option>
                        <option value="large">Large</option>
                        <option value="xl">XL</option>
                    </select>
                </div>
            </div>            
            <div class="gym-progress-bar" id="gym-progress-bar">
                <div class="gym-section">
                    <div class="gym-label">Gyms:</div>
                    <div class="gym-counter gyms" id="gym-count">0/8</div>
                </div>
                <div class="gym-divider"></div>
                <div class="gym-section">
                    <div class="gym-label">E4:</div>
                    <div class="gym-counter elite-four" id="elite-four-count">0/4</div>
                </div>
                <div class="gym-section" id="champion-section" style="display: none;">
                    <div class="gym-divider"></div>
                    <div class="gym-label">Champ:</div>
                    <div class="gym-counter champion" id="champion-status">✗</div>
                </div>
                <div class="gym-divider"></div>
                <div class="gym-section">
                    <div class="gym-label">Level Cap:</div>
                    <div class="gym-counter level-cap" id="level-cap-display">--</div>
                </div>
            </div>
            
            <div class="generation-info" id="streamer-gen-info">Gen I</div>
            <div class="streamer-container">
                <div class="team-section">
                    <div class="team-header" id="streamer-player-name">Trainer's Team</div>
                    <div class="team-pokemon" id="streamer-team"></div>
                </div>
            </div>
            
            <script>
                let hideTimeout;
                let isControlsVisible = true;
                
                function initializeAutoHide() {
                    const themeSelector = document.getElementById('theme-selector-container');
                    
                    function showControls() {
                        if (themeSelector) {
                            themeSelector.classList.remove('hidden');
                            isControlsVisible = true;
                        }
                        resetHideTimer();
                    }
                    
                    function hideControls() {
                        if (themeSelector) {
                            themeSelector.classList.add('hidden');
                            isControlsVisible = false;
                        }
                    }
                    
                    function resetHideTimer() {
                        clearTimeout(hideTimeout);
                        hideTimeout = setTimeout(hideControls, 5000);
                    }
                    
                    if (themeSelector) {
                        themeSelector.addEventListener('mouseenter', showControls);
                        themeSelector.addEventListener('mousemove', showControls);
                        
                        const selects = themeSelector.querySelectorAll('select');
                        selects.forEach(select => {
                            select.addEventListener('focus', showControls);
                            select.addEventListener('change', showControls);
                        });
                    }
                    
                    document.addEventListener('mousemove', function(e) {
                        if (e.clientX < 200 && e.clientY < 40) {
                            showControls();
                        }
                    });
                    
                    resetHideTimer();
                }
                
                function changeTheme(themeKey) {
                    const themes = ${JSON.stringify(streamerThemes)};
                    const theme = themes[themeKey];
                    
                    if (theme) {
                        document.body.style.background = theme.background;
                        document.body.style.color = theme.text;
                        
                        const teamSection = document.querySelector('.team-section');
                        if (teamSection) {
                            teamSection.style.border = '2px solid ' + theme.accent;
                        }
                        
                        const teamHeader = document.querySelector('.team-header');
                        if (teamHeader) {
                            teamHeader.style.color = theme.accent;
                        }
                        
                        const pokemonNames = document.querySelectorAll('.pokemon-name');
                        pokemonNames.forEach(nameEl => {
                            if (themeKey === 'white-pink') {
                                nameEl.style.textShadow = 'none';
                            } else {
                                nameEl.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.8)';
                            }
                        });
                        
                        const genInfo = document.getElementById('streamer-gen-info');
                        if (genInfo) {
                            genInfo.style.background = theme.genBg;
                            genInfo.style.color = theme.genBg.includes('fff') ? '#000' : '#fff';
                        }
                        
                        const gymProgressBar = document.getElementById('gym-progress-bar');
                        if (gymProgressBar) {
                            gymProgressBar.style.borderColor = theme.accent + '80';
                        }
                        
                        const sprites = document.querySelectorAll('.pokemon-sprite, .empty-slot');
                        sprites.forEach(sprite => {
                            sprite.style.borderColor = theme.accent + '80';
                        });
                        
                        if (window.opener && window.opener.localStorage) {
                            window.opener.localStorage.setItem('streamerTheme', themeKey);
                        }
                    }
                }
                
                function changeSpriteSize(sizeKey) {
                    const sprites = document.querySelectorAll('.pokemon-sprite');
                    sprites.forEach(sprite => {
                        sprite.classList.remove('sprite-small', 'sprite-medium', 'sprite-large', 'sprite-xl', 'sprite-auto');
                        sprite.classList.add('sprite-' + sizeKey);
                    });
                    
                    const emptySlots = document.querySelectorAll('.empty-slot');
                    emptySlots.forEach(slot => {
                        slot.classList.remove('sprite-small', 'sprite-medium', 'sprite-large', 'sprite-xl', 'sprite-auto');
                        slot.classList.add('sprite-' + sizeKey);
                        
                        if (sizeKey !== 'auto') {
                            const sizes = {
                                'small': '40px',
                                'medium': '48px',
                                'large': '64px',
                                'xl': '80px'
                            };
                            slot.style.width = sizes[sizeKey];
                            slot.style.height = sizes[sizeKey];
                        } else {
                            slot.style.width = '';
                            slot.style.height = '';
                        }
                    });
                    
                    if (window.opener && window.opener.localStorage) {
                        window.opener.localStorage.setItem('streamerSpriteSize', sizeKey);
                    }
                }
                
                document.addEventListener('DOMContentLoaded', function() {
                    const themeSelector = document.getElementById('theme-selector');
                    const spriteSizeSelector = document.getElementById('sprite-size-selector');
                    
                    if (themeSelector) {
                        changeTheme(themeSelector.value);
                    }
                    
                    if (window.opener && window.opener.localStorage) {
                        const savedSpriteSize = window.opener.localStorage.getItem('streamerSpriteSize') || 'medium';
                        spriteSizeSelector.value = savedSpriteSize;
                        changeSpriteSize(savedSpriteSize);
                    }
                    
                    initializeAutoHide();
                });
            </script>
        </body>
        </html>
    `);

    streamerWindow.document.close();

    // Reset previous state tracking
    previousStreamerState = {
        generation: null,
        playerName: null,
        team: [],
        gymProgress: null
    };

    // Initial render
    updateStreamerWindow();

    // Set up periodic updates with longer interval and smart updating
    if (window.streamerUpdateInterval) {
        clearInterval(window.streamerUpdateInterval);
    }

    window.streamerUpdateInterval = setInterval(() => {
        if (streamerWindow && !streamerWindow.closed) {
            updateStreamerWindowSmart();
        } else {
            clearInterval(window.streamerUpdateInterval);
            window.streamerUpdateInterval = null;
        }
    }, 2000); // Reduced to 2 seconds instead of 1

    // Handle window close
    streamerWindow.addEventListener('beforeunload', () => {
        if (window.streamerUpdateInterval) {
            clearInterval(window.streamerUpdateInterval);
            window.streamerUpdateInterval = null;
        }
        streamerWindow = null;
    });
}

// Function to update gym progress in streamer window with level cap display
function updateStreamerGymProgress(doc) {
    const gymData = getCurrentGymLeaders();
    if (!gymData) {
        // Hide gym progress if no gym data available
        const gymProgressBar = doc.getElementById('gym-progress-bar');
        if (gymProgressBar) {
            gymProgressBar.style.display = 'none';
        }
        return;
    }

    const currentProgress = gameData.gymProgress[gameData.currentGame] || {};

    // Show gym progress bar
    const gymProgressBar = doc.getElementById('gym-progress-bar');
    if (gymProgressBar) {
        gymProgressBar.style.display = 'flex';
    }

    // Count completed gym leaders
    const completedGyms = gymData.leaders.filter(leader => currentProgress[leader.id]).length;
    const totalGyms = gymData.leaders.length;

    // Count completed Kanto leaders if they exist
    let completedKanto = 0;
    let totalKanto = 0;
    if (gymData.kantoLeaders) {
        completedKanto = gymData.kantoLeaders.filter(leader => currentProgress[leader.id]).length;
        totalKanto = gymData.kantoLeaders.length;
    }

    // Total gym count (main region + kanto if applicable)
    const totalGymCount = totalGyms + totalKanto;
    const completedGymCount = completedGyms + completedKanto;

    // Count completed Elite Four (excluding champion)
    const eliteFourMembers = gymData.eliteFour.filter(member => member.title !== 'Champion');
    const completedEliteFour = eliteFourMembers.filter(member => currentProgress[member.id]).length;
    const totalEliteFour = eliteFourMembers.length;

    // Check if champion is defeated
    const champion = gymData.eliteFour.find(member => member.title === 'Champion');
    const championDefeated = champion ? currentProgress[champion.id] : false;

    // Calculate current level cap
    let currentLevelCap = '--';
    let nextEncounter = null;

    // Find the next undefeated encounter in order
    // Check main region gym leaders first
    if (!nextEncounter) {
        for (const leader of gymData.leaders) {
            if (!currentProgress[leader.id]) {
                nextEncounter = leader;
                break;
            }
        }
    }

    // Then check Kanto leaders if they exist and main region is complete
    if (!nextEncounter && gymData.kantoLeaders && completedGyms === totalGyms) {
        for (const leader of gymData.kantoLeaders) {
            if (!currentProgress[leader.id]) {
                nextEncounter = leader;
                break;
            }
        }
    }

    // Then check Elite Four if all gyms are complete
    if (!nextEncounter && completedGymCount === totalGymCount) {
        for (const member of gymData.eliteFour) {
            if (!currentProgress[member.id]) {
                nextEncounter = member;
                break;
            }
        }
    }

    // Set the level cap display
    if (nextEncounter) {
        currentLevelCap = nextEncounter.levelCap.toString();
    } else if (championDefeated) {
        // All completed, show final level cap or "Max"
        if (champion) {
            currentLevelCap = champion.levelCap.toString();
        } else {
            currentLevelCap = 'MAX';
        }
    }

    // Update gym counter
    const gymCountEl = doc.getElementById('gym-count');
    if (gymCountEl) {
        gymCountEl.textContent = `${completedGymCount}/${totalGymCount}`;

        // Add completion styling
        if (completedGymCount === totalGymCount && totalGymCount > 0) {
            gymCountEl.style.background = 'rgba(76, 175, 80, 0.4)';
            gymCountEl.style.color = '#4CAF50';
        } else {
            gymCountEl.style.background = 'rgba(255, 255, 255, 0.2)';
            gymCountEl.style.color = '#4CAF50';
        }
    }

    // Update Elite Four counter
    const eliteFourCountEl = doc.getElementById('elite-four-count');
    if (eliteFourCountEl) {
        eliteFourCountEl.textContent = `${completedEliteFour}/${totalEliteFour}`;

        // Add completion styling
        if (completedEliteFour === totalEliteFour && totalEliteFour > 0) {
            eliteFourCountEl.style.background = 'rgba(156, 39, 176, 0.4)';
            eliteFourCountEl.style.color = '#9C27B0';
        } else {
            eliteFourCountEl.style.background = 'rgba(255, 255, 255, 0.2)';
            eliteFourCountEl.style.color = '#9C27B0';
        }
    }

    // Update Champion status
    const championSection = doc.getElementById('champion-section');
    const championStatusEl = doc.getElementById('champion-status');
    if (championSection && championStatusEl && champion) {
        championSection.style.display = 'flex';
        championStatusEl.textContent = championDefeated ? '✓' : '✗';

        if (championDefeated) {
            championStatusEl.style.background = 'rgba(255, 152, 0, 0.4)';
            championStatusEl.style.color = '#FF9800';
        } else {
            championStatusEl.style.background = 'rgba(255, 255, 255, 0.2)';
            championStatusEl.style.color = '#FF9800';
        }
    } else if (championSection && !champion) {
        championSection.style.display = 'none';
    }

    // Update Level Cap display
    const levelCapEl = doc.getElementById('level-cap-display');
    if (levelCapEl) {
        levelCapEl.textContent = currentLevelCap;

        // Add styling based on status
        if (currentLevelCap === 'MAX') {
            levelCapEl.style.background = 'rgba(76, 175, 80, 0.4)';
            levelCapEl.style.color = '#4CAF50';
            levelCapEl.style.fontWeight = 'bold';
        } else if (currentLevelCap === '--') {
            levelCapEl.style.background = 'rgba(255, 255, 255, 0.2)';
            levelCapEl.style.color = '#2196F3';
            levelCapEl.style.fontWeight = 'normal';
        } else {
            // Active level cap
            levelCapEl.style.background = 'rgba(33, 150, 243, 0.4)';
            levelCapEl.style.color = '#2196F3';
            levelCapEl.style.fontWeight = 'bold';
        }
    }
}

function updateStreamerWindowSmart() {
    if (!streamerWindow || streamerWindow.closed) return;

    try {
        const doc = streamerWindow.document;

        if (!doc || doc.readyState !== 'complete') {
            return;
        }

        // Collect current state
        const currentState = {
            generation: gameData.currentGeneration,
            playerName: gameData.playerName,
            team: gameData.player.team.map(p => p ? {
                id: p.id,
                nickname: p.nickname,
                sprite: p.animatedSprite || p.sprite,
                types: p.types,
                fainted: p.fainted,
                isShiny: p.isShiny
            } : null),
            gymProgress: gameData.currentGame ? JSON.stringify(gameData.gymProgress[gameData.currentGame] || {}) : null
        };

        let hasChanges = false;

        // Check for generation change
        if (currentState.generation !== previousStreamerState.generation) {
            updateStreamerGeneration(doc, currentState.generation);
            hasChanges = true;
        }

        // Check for player name changes
        if (currentState.playerName !== previousStreamerState.playerName) {
            updateStreamerPlayerName(doc, currentState.playerName);
            hasChanges = true;
        }

        // Check for team changes
        if (JSON.stringify(currentState.team) !== JSON.stringify(previousStreamerState.team)) {
            updateStreamerTeamSmart(doc, currentState.team);
            hasChanges = true;
        }

        // Check for gym progress changes
        if (currentState.gymProgress !== previousStreamerState.gymProgress) {
            updateStreamerGymProgress(doc);
            hasChanges = true;
        }

        // Update previous state
        previousStreamerState = currentState;

        if (hasChanges) {
            console.log('Streamer window updated (changes detected)');
        }

    } catch (error) {
        console.error('Smart streamer window update failed:', error);
    }
}

// Helper functions for targeted updates
function updateStreamerGeneration(doc, generation) {
    const genInfo = doc.getElementById('streamer-gen-info');
    if (genInfo && generation) {
        const genDisplay = generationRomanNumerals[generation] || generation;
        genInfo.textContent = `Gen ${genDisplay}`;
    }
}

function updateStreamerPlayerName(doc, name) {
    const header = doc.getElementById('streamer-player-name');
    if (header) {
        header.textContent = `${name}'s Team`;
    }
}

// Smart team update that only changes what's different
function updateStreamerTeamSmart(doc, newTeam) {
    const container = doc.getElementById('streamer-team');
    if (!container) return;

    const savedSpriteSize = localStorage.getItem('streamerSpriteSize') || 'medium';

    // Get existing slots or create them
    let existingSlots = container.querySelectorAll('.pokemon-slot');

    // Ensure we have 6 slots
    while (existingSlots.length < 6) {
        const slotDiv = doc.createElement('div');
        slotDiv.className = 'pokemon-slot';
        container.appendChild(slotDiv);
        existingSlots = container.querySelectorAll('.pokemon-slot');
    }

    // Update each slot individually
    for (let i = 0; i < 6; i++) {
        const slot = existingSlots[i];
        const pokemon = newTeam[i];

        if (pokemon) {
            const isFainted = pokemon.fainted;
            const isShiny = pokemon.isShiny;

            slot.innerHTML = `
                <div class="${isFainted ? 'fainted' : ''} ${isShiny ? 'shiny-pokemon' : ''}" style="position: relative;">
                    <img src="${pokemon.sprite}" 
                         class="pokemon-sprite sprite-${savedSpriteSize} ${isShiny ? 'shiny-border' : ''}" 
                         onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'"
                         alt="${pokemon.nickname}">
                    ${isFainted ? '<div class="fainted-overlay">KO</div>' : ''}
                </div>
                <div class="pokemon-name">${pokemon.nickname}</div>
                <div class="pokemon-types">
                    ${pokemon.types.slice(0, 2).map(type =>
                `<span class="type-badge type-${type}">${type.substring(0, 3).toUpperCase()}</span>`
            ).join('')}
                </div>
            `;
        } else {
            slot.innerHTML = `<div class="empty-slot sprite-${savedSpriteSize}">Empty</div>`;
        }
    }
}

// Update the streamer window with current team data
function updateStreamerWindow() {
    if (!streamerWindow || streamerWindow.closed) {
        console.log('Streamer window is not available for update');
        return;
    }

    try {
        const doc = streamerWindow.document;

        // Check if document is ready
        if (!doc || doc.readyState !== 'complete') {
            console.log('Streamer window document not ready, retrying...');
            setTimeout(() => {
                if (streamerWindow && !streamerWindow.closed) {
                    updateStreamerWindow();
                }
            }, 100);
            return;
        }

        // Update generation info
        const genInfo = doc.getElementById('streamer-gen-info');
        if (genInfo && gameData.currentGeneration) {
            const genDisplay = generationRomanNumerals[gameData.currentGeneration] || gameData.currentGeneration;
            genInfo.textContent = `Gen ${genDisplay}`;
        }

        // Update gym progress
        updateStreamerGymProgress(doc);

        // Update player name
        const playerHeader = doc.getElementById('streamer-player-name');
        if (playerHeader) playerHeader.textContent = gameData.playerName + "'s Team";

        // Update team
        updateStreamerTeam(doc);

        console.log('Streamer window updated successfully');
    } catch (error) {
        console.error('Streamer window update failed:', error);

        // If there's an error, the window might be in a bad state
        // Try one more time after a longer delay
        setTimeout(() => {
            if (streamerWindow && !streamerWindow.closed) {
                try {
                    updateStreamerWindow();
                } catch (retryError) {
                    console.error('Streamer window retry update also failed:', retryError);
                }
            }
        }, 1000);
    }
}

// Update the team in the streamer window
function updateStreamerTeam(doc) {
    const container = doc.getElementById('streamer-team');
    if (!container) return;

    const team = gameData.player.team;
    container.innerHTML = '';

    // Get saved sprite size
    const savedSpriteSize = localStorage.getItem('streamerSpriteSize') || 'medium';

    for (let i = 0; i < 6; i++) {
        const pokemon = team[i];
        const slotDiv = doc.createElement('div');
        slotDiv.className = 'pokemon-slot';

        if (pokemon) {
            const isFainted = pokemon.fainted;
            const isShiny = pokemon.isShiny;

            // Add shiny styling if needed
            if (isShiny && doc.head) {
                // Add shiny CSS to streamer window if not already present
                let shinyStyle = doc.getElementById('shiny-styles');
                if (!shinyStyle) {
                    shinyStyle = doc.createElement('style');
                    shinyStyle.id = 'shiny-styles';
                    shinyStyle.textContent = `
                        .shiny-pokemon { 
                            position: relative; 
                        }
                        .shiny-pokemon::before {
                            content: '✨';
                            position: absolute;
                            top: -5px;
                            right: -5px;
                            font-size: 8px;
                            z-index: 20;
                            animation: sparkleFloat 1.5s ease-in-out infinite alternate;
                        }
                        @keyframes shinySparkle {
                            0%, 100% { filter: brightness(1) saturate(1); }
                            50% { filter: brightness(1.2) saturate(1.3) hue-rotate(10deg); }
                        }
                        @keyframes sparkleFloat {
                            0% { transform: translateY(0px) rotate(0deg); }
                            100% { transform: translateY(-2px) rotate(10deg); }
                        }
                    `;
                    doc.head.appendChild(shinyStyle);
                }
            }

            slotDiv.innerHTML = `
                <div class="${isFainted ? 'fainted' : ''} ${isShiny ? 'shiny-pokemon' : ''}" style="position: relative;">
                    <img src="${pokemon.animatedSprite || pokemon.sprite}" 
                         class="pokemon-sprite sprite-${savedSpriteSize} ${isShiny ? 'shiny-border' : ''}" 
                         onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png'"
                         alt="${pokemon.nickname}">
                    ${isFainted ? '<div class="fainted-overlay">KO</div>' : ''}
                </div>
                <div class="pokemon-name">${pokemon.nickname}</div>
                <div class="pokemon-types">
                    ${pokemon.types.slice(0, 2).map(type =>
                `<span class="type-badge type-${type}">${type.substring(0, 3).toUpperCase()}</span>`
            ).join('')}
                </div>
            `;
        } else {
            slotDiv.innerHTML = `<div class="empty-slot sprite-${savedSpriteSize}">Empty</div>`;
        }

        container.appendChild(slotDiv);
    }
}

// Get function to access current gym leaders (needs to be defined elsewhere or imported)
function getCurrentGymLeaders() {
    // This function should return gym leader data for the current game
    // It would typically be defined in gymLeaders.js
    if (typeof gymLeaders !== 'undefined' && gameData.currentGame) {
        return gymLeaders[gameData.currentGame];
    }
    return null;
}

// Make toast testing function available globally for debugging
window.testToast = testToast;