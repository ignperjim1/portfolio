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
 * HERO MEDIA:
 * - heroImage: Static image for game hero (fallback)
 * - heroVideo: Video for game hero (takes priority over heroImage)
 *   If heroVideo is present, it will be used instead of heroImage
 *   Hero videos have controls (play/pause/volume) and do NOT autoplay
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
        heroVideo: 'videos/AfterWorld/survival16_9.mp4',
        storeLinks: [
            {
                store: 'Google Play',
                url: 'https://play.google.com/store/apps/details?id=com.vivastudios.afterworld.zombie.survival&pcampaignid=web_share',
                icon: 'fab fa-google-play'
            },
            {
                store: 'App Store',
                url: '',//'https://apps.apple.com/app/after-world/id123456789',
                icon: 'fab fa-app-store-ios'
            }
        ],
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
        heroVideo: 'videos/Mining/mining-trailer.mp4',
        storeLinks: [
            {
                store: 'Google Play',
                url: 'https://play.google.com/store/apps/details?id=com.RadiusOne.IdleMiningTown&pcampaignid=web_share',
                icon: 'fab fa-google-play'
            }
        ],
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
        heroVideo: 'videos/Hospital/hospital ad.mp4',
        storeLinks: [
            {
                store: 'Google Play',
                url: 'https://play.google.com/store/apps/details?id=com.vivastudios.idle.hospital.tycoon.empire&pcampaignid=web_share',
                icon: 'fab fa-google-play'
            }
        ],
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
        storeLinks: [
            {
                store: 'Itch.io',
                url: 'https://kometasoft.itch.io/bowtoys',
                icon: 'fas fa-gamepad'
            },
            {
                store: 'Steam',
                url: 'https://store.steampowered.com/app/bowtoys',
                icon: 'fab fa-steam'
            }
        ],
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
        storeLinks: [
            {
                store: 'Itch.io',
                url: 'https://kometasoft.itch.io/wall-of-war',
                icon: 'fas fa-gamepad'
            }
        ],
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
    },
    'shatraj': {
        title: 'Shatraj',
        role: 'Lead Game Programmer',
        year: '2022 - 2024',
        tags: ['Unreal Engine & Unity', '3D Chess Game', 'Turn-Based RPG combat', 'Cancelled project - Team of 8', 'PC'],
        heroVideo: 'videos/Shatraj/shatraj-gameplay.mp4',
        heroVideoSubtitle: 'WARNING - Although only one screen is shown in the video, this is a local multiplayer game, so another player is controlling the opposing pieces on a different screen.',
        storeLinks: [],
        description: 'Shatraj is a cancelled project developed by the team of 201 Games, a little indie studio formed by 7 other friends and me. '+
        '\nThis is a multiplayer game where 2 players fight each other in a match that mixes the basics of a normal chess game with Turn-Based RPG '+
        'combat and components like stats, weapons, magic spells, etc. We as a team did an incredible job with the worldbuilding and the narrative, '+
        'but after 2 years working on the game we had to cancel it since we didn\'t have the resources and time to keep developing such a complex title in our free time.'+
        '\n\nHowever, the game was at an advanced point of development and we even introduced it to the public at Gamepolis, a famous videogame fair celebrated in '+
        'Málaga (Spain). We were able to implement local multiplayer and we wanted to implement online multiplayer for the end of 2024, but we realized too late '+
        'that we had embarked on a task that was beyond us in complexity and scope.',
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
    },
    'engine-of-time': {
        title: 'Engine of Time',
        role: 'Game Programmer',
        year: '2022',
        tags: ['Unity', 'Puzzles', 'Game Jam (72h) - Team of 3', 'PC'],
        heroImage: 'images/EngineOfTime/engineoftime-icon.png',
        heroVideo: 'videos/EngineOfTime/engine-of-time.mp4',
        storeLinks: [
            {
                store: 'Itch.io',
                url: 'https://corahe-game.itch.io/the-engine-of-time',
                icon: 'fas fa-gamepad'
            }
        ],
        description: 'Engine of Time is a maze-based puzzle game with mechanics inspired by the passing of time and day and night cycles,'+
        ' simulating the inside of a clock mechanism. I created it in collaboration with 3 other friends. <br><br>Night and day take place because'+
        ' of a time machine, that can\'t work properly without the small gears that compose it. The player must guide the gears across the maze in order'+
        ' to make the days to happen correctly in time.<br><br> The theme for this jam was <span style="color: #48bfe3">Night and day cycle</span> and'+
        ' we had 72h to create the game.',
        myRole: [
            'Collaboration in the design of the idea and mechanics of the game, as well as maze layouts and puzzles',
            'Implementation of all the coding of the game as the only programmer in the team, including the logic of the procedural generated mazes'
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
                title: 'Game Idea, Basics and More Info',
                content: [
                    {
                        type: 'text',
                        value: 'With the theme of the jam in mind, we held a couple of meetings to discuss what our game would be about.'+
                        '<br>We finally came up with the idea of a 2D maze puzzle game that mixed the concept of the passing of time and day and night cycles.'+
                        'The maze has a lighted area that represents the day and a dark area that represents the night. Both rotate around the maze simulating the passing of time.'+
                        'Obstacles and traps in the maze behave differently depending if they are in the day or night area. <br><br>'+
                        'The objective of the game is to reach the center of the maze before a full day has passed (that means, when the lighted area has rotated 360 degrees around the maze).'+
                        '<br>This way, we have 12 different mazes with increasing difficulty. Each time players finish a maze, they will be transported to the next one, which will be more complicated '+
                        'and will have a greater number of obstacles but they will have more time to complete it.'
                    },
                    {
                        type: 'images',
                        value: ['images/EngineOfTime/laberintodia.png', 'images/EngineOfTime/laberintonoche.png'],
                        caption: 'Day/Night areas in the maze',
                        columns: 2
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Visuals</b></span><br><br>'+
                        '- For the aesthetic, since we wanted to represent the passing of time and day and night cycles, we decided to use the insides of a clock'+
                        ' as a setting for our mazes, thus taking a reference to steampunk aesthetics. <br><br>'+
                        '- For the character, we chose an endearing and friendly representation of a gear, and for the obstacles we relied on things that resembled'+
                        ' the insides of a machine, like nuts, bolts, sliding walls, rolling bars, etc.'
                    },
                    {
                        type: 'images',
                        value: ['images/EngineOfTime/draft-1.png', 'images/EngineOfTime/draft-2.png'],
                        caption: 'Drafts of the game',
                        columns: 2
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>More info about the game</b></span><br><br>'+
                        '- The level selector consists in the main platform of the game, with each level representing our progress throughout the game. The player'+
                        ' can turn it around with the mouse like a wheel to choose different levels (only if he has completed that level before). <br><br>'+
                        '- In game, players have a preparation time where they can take a look at the entire maze and plan their path before starting the level.'+
                        ' When this time expires, the camera is focused on the character and vision is greatly reduced.<br><br>'+
                        '- Time ends if the light gives a full rotation around the maze, as if a whole day has passed. During the game, on the bottom right '+
                        ' corner players can find a little compass that hints them where the light and night zones are currently, so to help keep track of the time they have left.<br><br>'+
                        '- Different obstacles react to day and night differently. Some of them will move or spin faster in the night, or viceversa.'
                    },
                    {
                        type: 'images',
                            value: ['images/EngineOfTime/visionprevia.png', 'images/EngineOfTime/selector-nivel.png'],
                        caption: 'Maze layout and level selector',
                        columns: 2
                    },
                ]
            },
        ]
    },
    'zero-to-hundred': {
        title: 'Zero to Hundred',
        role: 'Game Programmer',
        year: '2022',
        tags: ['Unity', '2D Shooter', 'Game Jam (48h) - Team of 4', 'PC'],
        heroImage: 'images/ZeroToHundred/SPLASH-ART_01.png',
        heroVideo: 'videos/ZeroToHundred/Zero to Hundred - Gameplay.mp4',
        storeLinks: [
            {
                store: 'Itch.io',
                url: 'https://201games.itch.io/zero-to-hundred',
                icon: 'fas fa-gamepad'
            }
        ],
        description: 'Zero to Hundred is a game I created in collaboration with 3 other friends for the Indie Spain Jam 2022, where we had a week to create a game. The jam theme was <span style="color: #48bfe3">From 0 to 100</span> and the optional subtheme was <span style="color: #48bfe3">Replayability</span>.<br><br>The game is a 2D shooter where the player controls a mobile phone lost in space that must remain next to a charging station until its battery is refilled, all this while surviving waves of enemies in the form of mobile apps that will try to stop it. <br><br>It was my first jam and, although we didn\'t win it definitely was an experience I hope I can repeat again some time!',
        screenshots: [
            'images/Zerotohundred/SPLASH-ART_01.png',
            'images/Zerotohundred/cobp.png',
            'images/Zerotohundred/Moviles.png',
        ],
        myRole: [
            'Collaboration in the design of the idea and mechanics of the game, enemies and objectives',
            'Implementation of all the coding of the game as the only programmer in the team'
        ],
        technologies: [
            'Unity Engine',
            'C# Programming',
            'Git Version Control',
            'Confluence Documentation',
            'Jira Project Management'
        ],
    },
    
    'fruitwatchers': {
        title: 'Fruitwatchers',
        role: 'Solo Developer',
        year: '2022',
        tags: ['Unity', '2D Platformer', 'PC/Android'],
        heroImage: 'images/Fruitwatchers/ScreenshotLevel6.png',
        heroVideo: 'videos/Fruitwatchers/fruitwatchers-level1.mp4',
        storeLinks: [
            {
                store: 'Itch.io',
                url: 'https://nachoperez.itch.io/fruitwatchers',
                icon: 'fas fa-gamepad'
            }
        ],
        description: 'Fruitwatchers is a friendly and colorful 2D platformer where you play as an apprentice of Fruitwatcher, whose task will be to rescue all the fruits lost all around the different worlds.\nThe game contains 5 different worlds to visit (plus special worlds only available after finishing the game and rescuing all the fruits), more than 25 enemies and traps and 4 different characters with unique abilities.\nIt\'s heavily inspired by classic platformers like Super Mario Bros.',
        myRole: [
            'Design of the game\'s mechanics and systems (e.g. rewards, progression, enemy AI, etc.)',
            'Design of the different levels based on existing assets',
            'All scripting of the game',
            'Modification of assets using Aseprite for the pixel art (almost all assets were reused from other artists)'
        ],
        technologies: [
            'Unity (C#)',
            'Aseprite (Pixel Art)',
        ],
        keyFeatures: [
            {
                title: 'Game Idea & Basics',
                content: [
                    {
                        type: 'text',
                        value: 'The idea of the game was predefined by the assets that I had to use. This had its positive part, since using existing sprites and animations were going to save me a tremendous amount of time, but at the same time I was constricted when it came to conceiving how I wanted the game to be. <br><br>Ultimately, I decided to stick with the resources I had and make a classic platformer. I used the animations the enemies and characters already had to establish their behavior and attacks, I added unique abilities to the 4 unlockable characters so that only a certain character could access a certain area of a level to grab a hidden fruit. I also created the different worlds from the pixel art assets of various artists, trying to make them as varied but cohesive as possible.'
                    },
                    {
                        type: 'images',
                        value: ['images/Fruitwatchers/Gif1.gif',
                            'images/Fruitwatchers/Screenshot1.png',
                            'images/Fruitwatchers/Gif2.gif',
                            'images/Fruitwatchers/Screenshot2.png',
                            'images/Fruitwatchers/Gif3.gif',
                            'images/Fruitwatchers/ScreenshotLevel6.png',
                            'images/Fruitwatchers/Gif4.gif',
                            'images/Fruitwatchers/ScreenshotLevel7.png',],
                        columns: 2
                    }
                ]
            },
            {
                title: 'Changes during development',
                content: [
                    {
                        type: 'text',
                        value: 'As development of the game progressed, many of the things I wanted to implement changed. <br><br> - During conception phase, I had in mind to implement a local multiplayer for up to 4 players, similar to the ones found in the most recent 2D Super Mario games, which I couldn\'t do because I didn\'t have the necessary experience at the time.<br><br>- Since I decided not to implement the local multiplayer, I wanted to do something special and I decided to release the game simultaneously on both PC and Android devices. That meant modifying certain game features, as well as almost the entire in-game interface.'
                    },
                    {
                        type: 'images',
                        value: ['images/Fruitwatchers/ScreenshotAndroid1.png', 'images/Fruitwatchers/ScreenshotAndroid2.png', 
                            'images/Fruitwatchers/ScreenshotAndroid3.png', 'images/Fruitwatchers/ScreenshotAndroid4.png'],
                        caption: 'Changes in the in-game interface',
                        columns: 2
                    }
                ]
            }
        ]
    },
    'other-projects': {
        title: 'Unfinished projects/Demos',
        role: 'Game Developer',
        year: '2021 - 2025',
        tags: ['Unity/Unreal Engine', 'Demo', 'Level Design', 'Gameplay Programming', 'Game Design'],
        heroImage: 'images/OtherProjects/spaceshipcrash-screenshot.png',
        description: 'These are a collection of different levels and demos that, for some reason, I have not finished but I think they deserve to be here. Most of them helped me learn both how to program and how to design levels and even some 3D modeling basics.',
        myRole: [
            'Developed various gameplay mechanics and systems',
            'Designed and programmed level design and gameplay systems',
            '3D modeled some of the assets',
        ],
        technologies: [
            'Unity Engine (Blueprints)',
            'Unity (C#)',
            'Maya (3D Modeling)',
            'Aseprite (Pixel Art)',
        ],
        keyFeatures: [
            {
                title: 'Recreating Game Mechanics - Demos',
                content: [
                    {
                        type: 'text',
                        value: '<a href="https://www.youtube.com/@mixandjam/">Mix and Jam</a> is a Youtube channel dedicated to recreating the most striking and iconic mechanics of video games in Unity.'+
                        'I discovered it and started following its videos, learning how to recreate those mechanics that I had grown up with and that had made me fall in love with video games as a child.'+
                        '<br><br>'+
                        'His channel is great for learning, since it explains how to replicate the different mechanics but he doesn\'t go into great detail either, so that leaves room for the person'+
                        ' who watches the video to try and find out how he has solved a certain problem, just as if it was a class exercise.'+
                        '<br><br>'+
                        'In my opinion they are a great way to learn game programming and get ideas for future projects.'
                    },
                    {
                        type: 'video',
                        value: 'videos/Others/mario-kingdom-select.mp4',
                        caption: 'Recreating Kingdom select menu from Super Mario Odyssey'
                    },
                    {
                        type: 'video',
                        value: 'videos/Others/gow-axe-throw.mp4',
                        caption: 'Recreating Axe Throw mechanic from God of War (2018)'
                    },
                    {
                        type: 'video',
                        value: 'videos/Others/celeste-movement.mp4',
                        caption: 'Recreating Celeste\'s main character moveset and artistic style'
                    },

                ]
            },
            {
                title: 'Spaceship Crash - Unreal Engine Level',
                content: [
                    {
                        type: 'text',
                        value: 'Spaceship Crash is the provisional game I gave to one of the first levels I created using Unreal Engine 4.'+
                        'It puts us in the role of the captain of a spaceship that has suffered a problem with the generator and must try to repair it before the ship explodes.'+
                        '<br><br>'+
                        'All the programming was done with Blueprints and the assets can be found for free in the Epic Games Store.'
                    },
                    {
                        type: 'video',
                        value: 'videos/Others/spaceship-crash.mp4',
                        caption: 'Full gameplay video'
                    },
                ]
            },
            {
                title: 'Pirate\'s Lair - Unity Level',
                content: [
                    {
                        type: 'text',
                        value: 'Pirate\'s Lair is the provisional game I gave to one of the first levels I created using Unity.'+
                        'It puts us in the role of a treasure hunter in search of the lost treasure of the famous pirate Calico Jack. Before dying, the pirate separated the treasure map'+
                        'into 5 pieces and hid them away.'+
                        '<br><br>'+
                        'All the programming was done with in Unity with C# and almost all the assets were created by me using Maya 3D.'
                    },
                    {
                        type: 'video',
                        value: 'videos/Others/pirates-lair.mp4',
                        caption: 'Full gameplay video'
                    },
                ]
            }
        ]
    },
    
    
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
    
        // Use hero video if available, otherwise use hero image
        const heroContainer = document.querySelector('.game-hero-image');
        if (game.heroVideo) {
            // Generate consistent IDs
            const videoId = `hero-video-${game.id}`;
            const overlayId = `hero-play-overlay-${game.id}`;
            
            // Create video element with custom play button overlay
            let subtitleHtml = '';
            if (game.heroVideoSubtitle) {
                subtitleHtml = `<p class="hero-video-subtitle">${game.heroVideoSubtitle}</p>`;
            }
            heroContainer.innerHTML = `
                <div class="hero-video-container">
                    <video controls class="hero-video" id="${videoId}">
                        <source src="${game.heroVideo}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="hero-play-overlay" id="${overlayId}">
                        <div class="play-button">
                            <i class="fas fa-play"></i>
                        </div>
                        <p class="play-text">Click to play</p>
                    </div>
                </div>
                ${subtitleHtml}
            `;

            // Use setTimeout to ensure elements are rendered
            setTimeout(() => {
                const video = document.getElementById(videoId);
                const overlay = document.getElementById(overlayId);
            
            if (video && overlay) {
                let hasPlayedOnce = false;
                let seeking = false;
                
                overlay.addEventListener('click', () => {
                    video.play();
                    overlay.style.display = 'none';
                    hasPlayedOnce = true;
                });
                
                // Track when user starts seeking
                video.addEventListener('seeking', () => {
                    seeking = true;
                });
                
                // Track when user stops seeking
                video.addEventListener('seeked', () => {
                    seeking = false;
                });
                
                // Hide overlay when video starts playing and mark as played
                video.addEventListener('play', () => {
                    overlay.style.display = 'none';
                    hasPlayedOnce = true;
                });
                
                // Don't show overlay on pause if video has been played before
                video.addEventListener('pause', () => {
                    if (!seeking && !hasPlayedOnce) {
                        overlay.style.display = 'flex';
                    }
                });
            }
        }, 100);
    } else {
        // Use image as fallback
        const img = document.getElementById('game-hero-image');
        img.src = game.heroImage;
        img.alt = game.title;
    }
    
    // Update tags
    const tagsContainer = document.getElementById('game-tags');
    tagsContainer.innerHTML = '';
    game.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        tagsContainer.appendChild(tagElement);
    });
    
    // Update store links
    const storeLinksContainer = document.getElementById('store-links');
    storeLinksContainer.innerHTML = '';
    if (game.storeLinks && game.storeLinks.length > 0) {
        game.storeLinks.forEach(store => {
            const linkElement = document.createElement('a');
            linkElement.href = store.url;
            linkElement.target = '_blank';
            linkElement.rel = 'noopener noreferrer';
            linkElement.className = 'store-link';
            linkElement.innerHTML = `
                <i class="${store.icon}"></i>
                <span>${store.store}</span>
            `;
            storeLinksContainer.appendChild(linkElement);
        });
    }
    
    // Update description
    document.getElementById('game-description').innerHTML = `<p>${game.description}</p>`;
    
    // Update my role
    const roleContainer = document.getElementById('my-role');
    roleContainer.innerHTML = '<ul>';
    game.myRole.forEach(role => {
        roleContainer.innerHTML += `<li>${role}</li>`;
    });
    roleContainer.innerHTML += '</ul>';
    
    // Update screenshots
    const screenshotsSection = document.getElementById('screenshots-section');
    const screenshotsContainer = document.getElementById('game-screenshots');
    if (game.screenshots && game.screenshots.length > 0) {
        screenshotsSection.style.display = 'block';
        screenshotsContainer.innerHTML = '';
        game.screenshots.forEach(screenshot => {
            const img = document.createElement('img');
            img.src = screenshot;
            img.alt = game.title;
            img.className = 'screenshot';
            img.addEventListener('click', () => {
                // Simple modal/lightbox functionality could be added here
                window.open(screenshot, '_blank');
            });
            screenshotsContainer.appendChild(img);
        });
    } else {
        screenshotsSection.style.display = 'none';
    }
    
    // Update key features with expandable dropdowns
    const featuresSection = document.getElementById('key-features-section');
    const featuresContainer = document.getElementById('key-features');
    if (game.keyFeatures && game.keyFeatures.length > 0) {
        featuresSection.style.display = 'block';
        featuresContainer.innerHTML = '';
        game.keyFeatures.forEach((feature, index) => {
            const featureElement = createFeatureElement(feature, index);
            featuresContainer.appendChild(featureElement);
        });
    } else {
        featuresSection.style.display = 'none';
    }
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
            textPara.innerHTML = block.value;
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
