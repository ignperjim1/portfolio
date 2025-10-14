// ============================================
// GAME DETAIL PAGE DYNAMIC CONTENT
// ============================================

// Game data object
const gameData = {
    'afterworld': {
        title: 'After World',
        company: 'Viva Games',
        role: 'Lead Game Developer',
        year: '2024 - Present',
        tags: ['Unity', 'Zombie Survival', 'Android/iOS', 'Mobile'],
        heroImage: 'images/AfterWorld/Splash.png',
        description: 'After World is an immersive zombie survival game set in a post-apocalyptic world. Players must scavenge for resources, build shelters, and fight off hordes of zombies while managing their survival needs. The game features deep crafting systems, base building, and intense combat mechanics.',
        screenshots: [
            'images/AfterWorld/Characters.png',
            'images/AfterWorld/Combat.png',
            'images/AfterWorld/Inventory.png',
            'images/AfterWorld/PlayerCreation1.png',
            'images/AfterWorld/PlayerCreation2.png'
        ],
        myRole: [
            'Lead the complete game design and programming of After World',
            'Design and implement core gameplay mechanics including combat, crafting, and survival systems',
            'Create and maintain detailed design documentation',
            'Mentor other developers and coordinate with artists and QA teams',
            'Implement player progression and monetization systems',
            'Optimize game performance for mobile platforms'
        ],
        technologies: [
            'Unity Engine',
            'C# Programming',
            'Git Version Control',
            'Jira Project Management',
            'Google Analytics',
            'Firebase Integration'
        ],
        keyFeatures: [
            'Zombie Combat System',
            'Resource Management',
            'Base Building',
            'Character Customization',
            'Multiplayer Elements',
            'Progressive Difficulty'
        ]
    },
    'mining': {
        title: 'Idle Mining Town',
        company: 'Viva Games',
        role: 'Lead Game Developer',
        year: '2024 - Present',
        tags: ['Unity', 'Idle Incremental Game', 'Android', 'Maintenance & Optimization'],
        heroImage: 'images/Mining/Splash.png',
        description: 'Idle Mining Town is a captivating idle incremental game where players build and manage their own mining empire. The game features automated resource collection, factory management, and strategic upgrades to maximize efficiency and profits.',
        screenshots: [
            'images/Mining/Ciudad.png',
            'images/Mining/FactoryDetails.png',
            'images/Mining/FactoryList.png',
            'images/Mining/Gameplay.png',
            'images/Mining/TechnologyUpgrade.png'
        ],
        myRole: [
            'Lead development and maintenance of the idle game mechanics',
            'Implement and balance the incremental progression systems',
            'Optimize game performance and reduce loading times',
            'Design and implement new features and content updates',
            'Analyze player data to improve retention and monetization',
            'Coordinate with the team for regular content updates'
        ],
        technologies: [
            'Unity Engine',
            'C# Programming',
            'Data Analytics',
            'A/B Testing',
            'Git Version Control',
            'Jira Project Management'
        ],
        keyFeatures: [
            'Idle Resource Generation',
            'Factory Management System',
            'Technology Tree',
            'Prestige Mechanics',
            'Achievement System',
            'Offline Progress'
        ]
    },
    'hospital': {
        title: 'Hospital Empire - Idle Tycoon',
        company: 'Viva Games',
        role: 'Lead Game Developer',
        year: '2024 - Present',
        tags: ['Unity', 'Idle Incremental Game', 'Android', 'Maintenance & Optimization'],
        heroImage: 'images/Hospital/Splash.png',
        description: 'Hospital Empire is a strategic idle tycoon game where players build and manage their own hospital network. Manage patients, hire staff, upgrade facilities, and expand your medical empire across multiple locations.',
        screenshots: [
            'images/Hospital/hospital 1.png',
            'images/Hospital/hospital 2.png',
            'images/Hospital/hospital 3.png',
            'images/Hospital/hospital gameplay 1.png',
            'images/Hospital/hospital gameplay 2.png'
        ],
        myRole: [
            'Lead development and optimization of the hospital management systems',
            'Implement patient flow and staff management mechanics',
            'Design and balance the economic progression systems',
            'Create engaging idle mechanics and offline progression',
            'Analyze player behavior to improve game balance',
            'Coordinate content updates and new feature releases'
        ],
        technologies: [
            'Unity Engine',
            'C# Programming',
            'Data Analytics',
            'A/B Testing',
            'Git Version Control',
            'Jira Project Management'
        ],
        keyFeatures: [
            'Hospital Management',
            'Staff Hiring & Training',
            'Patient Care Systems',
            'Facility Upgrades',
            'Multi-location Expansion',
            'Idle Progression'
        ]
    },
    'bowtoys': {
        title: 'Bowtoys',
        company: 'Kometasoft S.L.',
        role: 'Junior Game Developer',
        year: '2022 - 2024',
        tags: ['Unity', 'Arcade Shooter', 'Android/iOS', 'Cancelled'],
        heroImage: 'images/Bowtoys/bowtoys-splash.jpg',
        description: 'Bowtoys was an arcade-style shooter game featuring colorful characters and fast-paced action. Players controlled various characters with unique abilities, engaging in multiplayer battles across different themed maps.',
        screenshots: [
            'images/Bowtoys/bowtoys-characters.jpg',
            'images/Bowtoys/bowtoys-mapaacuatico.jpg',
            'images/Bowtoys/bowtoys-mapacampo.jpg',
            'images/Bowtoys/bowtoys-mapadesierto.jpg',
            'images/Bowtoys/bowtoys-menu.jpg',
            'images/Bowtoys/bowtoys-panel.webp'
        ],
        myRole: [
            'Developed core gameplay mechanics and character systems',
            'Implemented multiplayer networking and matchmaking',
            'Designed and programmed character abilities and weapons',
            'Created level design tools and map generation systems',
            'Balanced gameplay mechanics and player progression',
            'Collaborated with artists and designers on feature implementation'
        ],
        technologies: [
            'Unity Engine',
            'C# Programming',
            'Photon Networking',
            'Git Version Control',
            'Confluence Documentation',
            'Jira Project Management'
        ],
        keyFeatures: [
            'Multiplayer Combat',
            'Character Abilities',
            'Dynamic Maps',
            'Weapon Systems',
            'Matchmaking',
            'Progression System'
        ]
    },
    'wow': {
        title: 'Wall of War',
        company: 'Kometasoft S.L.',
        role: 'Junior Game Developer',
        year: '2021 - 2022',
        tags: ['Unity', 'Arcade Shooter', 'Android', 'Cancelled'],
        heroImage: 'images/Wow/wow-icon.png',
        description: 'Wall of War was a tower defense style arcade shooter where players defended their base against waves of enemies. The game featured strategic placement of defensive structures and resource management.',
        screenshots: [
            'images/Wow/wowBosses.png',
            'images/Wow/wowCharacterSelect.png',
            'images/Wow/wowGameOver1.png',
            'images/Wow/wowGameOver2.png',
            'images/Wow/wowHUD.png',
            'images/Wow/wowMainMenu.png'
        ],
        myRole: [
            'Developed tower defense mechanics and enemy AI systems',
            'Implemented resource management and upgrade systems',
            'Designed and programmed wave generation and difficulty scaling',
            'Created UI systems for base management and upgrades',
            'Balanced gameplay progression and difficulty curves',
            'Worked closely with the lead programmer on core systems'
        ],
        technologies: [
            'Unity Engine',
            'C# Programming',
            'Git Version Control',
            'Confluence Documentation',
            'Jira Project Management'
        ],
        keyFeatures: [
            'Tower Defense Mechanics',
            'Enemy AI Systems',
            'Resource Management',
            'Wave Generation',
            'Upgrade Systems',
            'Strategic Gameplay'
        ]
    }
};

// Get game parameter from URL
function getGameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('game') || 'afterworld';
}

// Load game data and populate page
function loadGameData() {
    const gameId = getGameFromURL();
    const game = gameData[gameId];
    
    if (!game) {
        // Default to After World if game not found
        const defaultGame = gameData['afterworld'];
        populatePage(defaultGame);
        return;
    }
    
    populatePage(game);
}

// Populate page with game data
function populatePage(game) {
    // Update page title
    document.getElementById('page-title').textContent = `${game.title} | Nacho Pérez`;
    
    // Update hero section
    document.getElementById('game-title').textContent = game.title;
    document.getElementById('game-company').textContent = game.company;
    document.getElementById('game-role').textContent = game.role;
    document.getElementById('game-year').textContent = game.year;
    document.getElementById('game-hero-image').src = game.heroImage;
    document.getElementById('game-hero-image').alt = game.title;
    
    // Update tags
    const tagsContainer = document.getElementById('game-tags');
    tagsContainer.innerHTML = '';
    game.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // Update description
    document.getElementById('game-description').innerHTML = `<p>${game.description}</p>`;
    
    // Update screenshots
    const screenshotsContainer = document.getElementById('game-screenshots');
    screenshotsContainer.innerHTML = '';
    game.screenshots.forEach(screenshot => {
        const imgElement = document.createElement('img');
        imgElement.src = screenshot;
        imgElement.alt = `${game.title} Screenshot`;
        imgElement.className = 'screenshot';
        screenshotsContainer.appendChild(imgElement);
    });
    
    // Update my role
    const roleContainer = document.getElementById('my-role');
    roleContainer.innerHTML = '<ul>';
    game.myRole.forEach(role => {
        roleContainer.innerHTML += `<li>${role}</li>`;
    });
    roleContainer.innerHTML += '</ul>';
    
    // Update technologies
    const techContainer = document.getElementById('technologies');
    techContainer.innerHTML = '';
    game.technologies.forEach(tech => {
        const techElement = document.createElement('span');
        techElement.className = 'tech-tag';
        techElement.textContent = tech;
        techContainer.appendChild(techElement);
    });
    
    // Update key features
    const featuresContainer = document.getElementById('key-features');
    featuresContainer.innerHTML = '<ul>';
    game.keyFeatures.forEach(feature => {
        featuresContainer.innerHTML += `<li>${feature}</li>`;
    });
    featuresContainer.innerHTML += '</ul>';
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadGameData();
});
