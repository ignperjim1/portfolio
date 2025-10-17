// ============================================
// GAME DETAIL PAGE DYNAMIC CONTENT
// ============================================

/*
 * CUSTOMIZABLE KEY FEATURES SYSTEM
 * 
 * Each game's keyFeatures is an array of feature objects. Each feature contains:
 * - title: The feature name (shown in the dropdown header)
 * - content: An array of content blocks that can be mixed and matched
 * 
 * Available Content Block Types:
 * 
 * 1. TEXT BLOCK:
 *    { type: 'text', value: 'Your text here' }
 *    { type: 'text', heading: 'Section Title', value: 'Your text here' }
 * 
 * 2. SINGLE IMAGE:
 *    { type: 'image', value: 'path/to/image.jpg', caption: 'Optional caption' }
 *    { type: 'image', value: 'path/to/image.jpg', caption: 'Caption', customClass: 'large-image' }
 *    { type: 'image', value: 'path/to/image.jpg', style: { maxWidth: '400px', margin: '0 auto' } }
 * 
 * 3. MULTIPLE IMAGES (Grid):
 *    { type: 'images', value: ['image1.jpg', 'image2.jpg'], caption: 'Optional caption' }
 *    { type: 'images', value: ['img1.jpg', 'img2.jpg'], columns: 3, customClass: 'tall-images' }
 *    { type: 'images', value: ['img1.jpg', 'img2.jpg'], style: { gap: '2rem' } }
 * 
 * 4. VIDEO:
 *    { type: 'video', value: 'path/to/video.mp4', caption: 'Optional caption' }
 *    { type: 'video', value: 'path/to/video.mp4', customClass: 'small-video' }
 *    { type: 'video', value: 'path/to/video.mp4', style: { maxWidth: '800px' } }
 * 
 * 5. CODE SNIPPET:
 *    { type: 'code', language: 'csharp', value: 'your code here' }
 *    { type: 'code', language: 'csharp', value: 'code', customClass: 'compact-code' }
 * 
 * CUSTOMIZATION OPTIONS:
 * - customClass: Add custom CSS class for specific styling
 * - style: Add inline styles as an object { property: 'value' }
 * - columns: For 'images' type, specify number of columns (default: auto-fit)
 * 
 * EXAMPLE WITH CUSTOM STYLING:
 * {
 *     title: 'My Feature',
 *     content: [
 *         { type: 'text', value: 'Description text' },
 *         { type: 'video', value: 'videos/demo.mp4', customClass: 'fullwidth-video' },
 *         { type: 'images', value: ['img1.jpg', 'img2.jpg'], columns: 2, style: { gap: '2rem' } },
 *         { type: 'image', value: 'big.jpg', customClass: 'hero-image', style: { maxWidth: '100%' } }
 *     ]
 * }
 * 
 * You can use any combination of these blocks in any order!
 * No need to create separate HTML files - just customize the data below.
 */

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
            {
                title: 'Zombie Combat System',
                content: [
                    {
                        type: 'text',
                        value: 'Advanced combat mechanics featuring multiple weapon types, zombie AI with different behaviors, and dynamic difficulty scaling. The system includes hit detection, damage calculation, and special effects.'
                    },
                    {
                        type: 'video',
                        value: 'videos/AfterWorld/survival16_9.mp4',
                        caption: 'Combat gameplay demonstration',
                        customClass: 'fullwidth-video'  // Make video full width
                    },
                    {
                        type: 'image',
                        value: 'images/AfterWorld/Combat.png',
                        caption: 'Zombie combat screenshot',
                        customClass: 'large-image'  // Make image large
                    },
                    {
                        type: 'text',
                        heading: 'Technical Implementation',
                        value: 'Implemented using Unity\'s physics system with custom collision detection. Features include weapon switching, combo attacks, and environmental damage. The AI uses state machines for different zombie types.',
                        customClass: 'highlighted-text'  // Highlight this section
                    },
                    {
                        type: 'code',
                        language: 'csharp',
                        value: '// Zombie AI State Machine\npublic class ZombieAI : MonoBehaviour\n{\n    public enum ZombieState { Idle, Chasing, Attacking, Dead }\n    private ZombieState currentState;\n    \n    void Update() {\n        switch(currentState) {\n            case ZombieState.Chasing:\n                ChasePlayer();\n                break;\n            case ZombieState.Attacking:\n                AttackPlayer();\n                break;\n        }\n    }\n}'
                    }
                ]
            },
            {
                title: 'Resource Management',
                content: [
                    {
                        type: 'text',
                        value: 'Comprehensive resource system including food, water, materials, and ammunition. Players must balance immediate survival needs with long-term base building goals.'
                    },
                    {
                        type: 'image',
                        value: 'images/AfterWorld/Inventory.png',
                        caption: 'Inventory management system'
                    }
                ]
            },
            {
                title: 'Character Customization',
                content: [
                    {
                        type: 'text',
                        value: 'Extensive character creation and progression system with visual customization, skill trees, and equipment upgrades.'
                    },
                    {
                        type: 'images',
                        value: ['images/AfterWorld/PlayerCreation1.png', 'images/AfterWorld/PlayerCreation2.png', 'images/AfterWorld/Characters.png'],
                        caption: 'Character creation options',
                        columns: 3,  // Force 3 columns
                        customClass: 'large-gap'  // Add extra gap between images
                    },
                    {
                        type: 'text',
                        heading: 'Features',
                        value: 'Over 50 customization options including appearance, clothing, and equipment. The skill system affects gameplay mechanics and unlocks new abilities as players progress.'
                    }
                ]
            }
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
            {
                title: 'Idle Resource Generation',
                content: [
                    {
                        type: 'text',
                        value: 'Automated resource collection system that continues even when the player is offline. Features multiple resource types and exponential growth mechanics.'
                    },
                    {
                        type: 'video',
                        value: 'videos/mining_playable.mp4',
                        caption: 'Idle gameplay demonstration'
                    }
                ]
            },
            {
                title: 'Factory Management',
                content: [
                    {
                        type: 'text',
                        value: 'Complex factory automation system where players build and upgrade production chains to maximize efficiency and profits.'
                    },
                    {
                        type: 'images',
                        value: ['images/Mining/FactoryList.png', 'images/Mining/FactoryDetails.png'],
                        caption: 'Factory management interface'
                    }
                ]
            },
            {
                title: 'City Building & Upgrades',
                content: [
                    {
                        type: 'text',
                        value: 'Build and manage your mining town with various buildings and infrastructure. Upgrade technologies to unlock new capabilities.'
                    },
                    {
                        type: 'images',
                        value: ['images/Mining/Ciudad.png', 'images/Mining/TechnologyUpgrade.png'],
                        caption: 'City overview and technology upgrades'
                    }
                ]
            }
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
            {
                title: 'Hospital Management',
                content: [
                    {
                        type: 'text',
                        value: 'Comprehensive hospital management system where players oversee all aspects of medical facility operations including patient flow, staff management, and facility upgrades.'
                    },
                    {
                        type: 'images',
                        value: ['images/Hospital/hospital 1.png', 'images/Hospital/hospital 2.png', 'images/Hospital/hospital 3.png'],
                        caption: 'Hospital management overview'
                    }
                ]
            },
            {
                title: 'Patient Care & Gameplay',
                content: [
                    {
                        type: 'text',
                        value: 'Realistic patient care simulation with diagnosis, treatment, and recovery mechanics. Manage multiple departments and emergency situations.'
                    },
                    {
                        type: 'images',
                        value: ['images/Hospital/hospital gameplay 1.png', 'images/Hospital/hospital gameplay 2.png'],
                        caption: 'Patient care gameplay'
                    }
                ]
            }
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
            {
                title: 'Multiplayer Combat',
                content: [
                    {
                        type: 'text',
                        value: 'Real-time multiplayer combat system with low-latency networking and synchronized gameplay. Uses Photon Networking for PvP battles with advanced hit detection and damage calculation.'
                    },
                    {
                        type: 'video',
                        value: 'videos/placeholder.mp4', // Replace with actual video if available
                        caption: 'Multiplayer combat gameplay'
                    },
                    {
                        type: 'code',
                        language: 'csharp',
                        value: '// Multiplayer Combat\npublic class CombatSystem : MonoBehaviourPunPV\n{\n    [PunRPC]\n    public void DealDamage(int targetId, int damage) {\n        var target = PhotonView.Find(targetId);\n        target.GetComponent<PlayerHealth>().TakeDamage(damage);\n    }\n}'
                    }
                ]
            },
            {
                title: 'Character Abilities',
                content: [
                    {
                        type: 'text',
                        value: 'Unique character abilities system with special powers and cooldown mechanics. Features over 20 different abilities across 8 character classes.'
                    },
                    {
                        type: 'images',
                        value: ['images/Bowtoys/bowtoys-characters.jpg', 'images/Bowtoys/bowtoyscharactershowcase.png'],
                        caption: 'Character selection and abilities'
                    }
                ]
            },
            {
                title: 'Dynamic Maps',
                content: [
                    {
                        type: 'text',
                        value: 'Procedurally generated maps with interactive elements and environmental hazards. Features 5 different map types with unique mechanics.'
                    },
                    {
                        type: 'images',
                        value: ['images/Bowtoys/bowtoys-mapaacuatico.jpg', 'images/Bowtoys/bowtoys-mapacampo.jpg', 'images/Bowtoys/bowtoys-mapadesierto.jpg'],
                        caption: 'Different map environments'
                    }
                ]
            },
            {
                title: 'UI & Progression',
                content: [
                    {
                        type: 'text',
                        value: 'Comprehensive UI system with achievements, missions, rewards, and player progression tracking.'
                    },
                    {
                        type: 'images',
                        value: ['images/Bowtoys/bowtoysachievements.png', 'images/Bowtoys/bowtoysmissions.png', 'images/Bowtoys/bowtoysrewards.png'],
                        caption: 'Achievements, missions, and rewards systems'
                    },
                    {
                        type: 'text',
                        heading: 'In-Game UI',
                        value: 'Polished in-game UI with match end screens, roulette system, and real-time HUD elements.'
                    },
                    {
                        type: 'images',
                        value: ['images/Bowtoys/bowtoysingameui.png', 'images/Bowtoys/bowtoysmatchend.png'],
                        caption: 'In-game UI elements'
                    }
                ]
            },
            {
                title: 'Weapon Systems',
                content: [
                    {
                        type: 'text',
                        value: 'Diverse weapon system with different weapon types and upgrade mechanics. Features 15+ weapon types with unique stats and abilities.'
                    }
                ]
            }
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
            {
                title: 'Tower Defense Mechanics',
                content: [
                    {
                        type: 'text',
                        value: 'Classic tower defense gameplay with strategic tower placement and enemy pathing systems. Features multiple tower types and upgrade paths.'
                    },
                    {
                        type: 'images',
                        value: ['images/Wow/wowHUD.png', 'images/Wow/wowMainMenu.png'],
                        caption: 'Game HUD and main menu'
                    }
                ]
            },
            {
                title: 'Characters & Bosses',
                content: [
                    {
                        type: 'text',
                        value: 'Multiple playable characters with unique abilities and challenging boss encounters throughout the game.'
                    },
                    {
                        type: 'images',
                        value: ['images/Wow/wowCharacterSelect.png', 'images/Wow/wowBosses.png'],
                        caption: 'Character selection and boss fights'
                    }
                ]
            }
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
    
    // Update my role
    const roleContainer = document.getElementById('my-role');
    roleContainer.innerHTML = '<ul>';
    game.myRole.forEach(role => {
        roleContainer.innerHTML += `<li>${role}</li>`;
    });
    roleContainer.innerHTML += '</ul>';
    
    // Update key features with expandable dropdowns
    const featuresContainer = document.getElementById('key-features');
    featuresContainer.innerHTML = '';
    game.keyFeatures.forEach((feature, index) => {
        const featureElement = createFeatureElement(feature, index);
        featuresContainer.appendChild(featureElement);
    });
}

// Create expandable feature element
function createFeatureElement(feature, index) {
    const featureDiv = document.createElement('div');
    featureDiv.className = 'feature-item';
    
    // Create header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'feature-header';
    headerDiv.onclick = () => toggleFeature(index);
    headerDiv.innerHTML = `
        <h3 class="feature-title">${feature.title}</h3>
        <i class="fas fa-chevron-down feature-chevron" id="chevron-${index}"></i>
    `;
    
    // Create content container
    const contentDiv = document.createElement('div');
    contentDiv.className = 'feature-content';
    contentDiv.id = `content-${index}`;
    
    // Render each content block
    feature.content.forEach(block => {
        const blockElement = createContentBlock(block);
        if (blockElement) {
            contentDiv.appendChild(blockElement);
        }
    });
    
    featureDiv.appendChild(headerDiv);
    featureDiv.appendChild(contentDiv);
    
    return featureDiv;
}

// Create individual content blocks based on type
function createContentBlock(block) {
    const container = document.createElement('div');
    
    switch(block.type) {
        case 'text':
            container.className = 'feature-text';
            if (block.heading) {
                const heading = document.createElement('h4');
                heading.textContent = block.heading;
                heading.className = 'feature-text-heading';
                container.appendChild(heading);
            }
            const textPara = document.createElement('p');
            textPara.textContent = block.value;
            container.appendChild(textPara);
            break;
            
        case 'image':
            container.className = 'feature-image';
            const img = document.createElement('img');
            img.src = block.value;
            img.alt = block.caption || 'Feature image';
            container.appendChild(img);
            if (block.caption) {
                const caption = document.createElement('p');
                caption.className = 'feature-caption';
                caption.textContent = block.caption;
                container.appendChild(caption);
            }
            break;
            
        case 'images':
            container.className = 'feature-images';
            const imagesGrid = document.createElement('div');
            imagesGrid.className = 'images-grid';
            
            // Apply custom column setting if provided
            if (block.columns) {
                imagesGrid.style.gridTemplateColumns = `repeat(${block.columns}, 1fr)`;
            }
            
            // Apply custom styles to grid if provided
            if (block.style) {
                applyInlineStyles(imagesGrid, block.style);
            }
            
            block.value.forEach(imgSrc => {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                imgElement.alt = block.caption || 'Feature image';
                imagesGrid.appendChild(imgElement);
            });
            container.appendChild(imagesGrid);
            if (block.caption) {
                const caption = document.createElement('p');
                caption.className = 'feature-caption';
                caption.textContent = block.caption;
                container.appendChild(caption);
            }
            break;
            
        case 'video':
            container.className = 'feature-video';
            const video = document.createElement('video');
            video.controls = true;
            const source = document.createElement('source');
            source.src = block.value;
            source.type = 'video/mp4';
            video.appendChild(source);
            container.appendChild(video);
            if (block.caption) {
                const caption = document.createElement('p');
                caption.className = 'feature-caption';
                caption.textContent = block.caption;
                container.appendChild(caption);
            }
            break;
            
        case 'code':
            container.className = 'feature-code';
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.className = block.language || 'csharp';
            code.textContent = block.value;
            pre.appendChild(code);
            container.appendChild(pre);
            break;
            
        default:
            return null;
    }
    
    // Apply custom class if provided
    if (block.customClass) {
        container.classList.add(block.customClass);
    }
    
    // Apply inline styles if provided
    if (block.style) {
        applyInlineStyles(container, block.style);
    }
    
    return container;
}

// Helper function to apply inline styles from object
function applyInlineStyles(element, styleObj) {
    Object.keys(styleObj).forEach(property => {
        element.style[property] = styleObj[property];
    });
}

// Toggle feature expansion
function toggleFeature(index) {
    const content = document.getElementById(`content-${index}`);
    const chevron = document.getElementById(`chevron-${index}`);
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        chevron.style.transform = 'rotate(180deg)';
    } else {
        content.style.display = 'none';
        chevron.style.transform = 'rotate(0deg)';
    }
}

// Initialize page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadGameData();
});
