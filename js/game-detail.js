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
        role: 'Lead Game Developer & Technical Director',
        year: '2024 - Present',
        tags: ['Unity', 'Zombie Survival', 'URP Migration', 'Multiplatform', 'RPG Mechanics', 'Base Building'],
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
                url: 'https://apps.apple.com/es/app/after-world-zombie-survival/id6741428349',
                icon: 'fab fa-app-store-ios'
            }
        ],
        description: 'After World is a multiplatform zombie survival RPG where players build and defend their base, explore procedurally generated missions, ' +
    'craft equipment, and level up skills.The game features deep RPG progression, strategic base building, intense combat, and a rich crafting system.'+
    'Originally started in 2015, the project was rescued from hiatus and I led its complete modernization to current Unity standards (URP14), optimization, and worldwide multiplatform release as the sole developer',
    
        myRole: [
            'Rescued legacy project from hiatus and modernized codebase to current Unity standards',
            'Led complete technical modernization from legacy LWRP to Unity URP14 with custom shader migration',
            'Led complete development cycle: design, programming, optimization, and multiplatform deployment',
            'Architected and implemented all gameplay systems, features, and content updates',
            'Optimized performance for mobile platforms (Android & iOS) and conducted technical QA',
            'Coordinated with Art and QA departments when additional support was needed'
        ],
        technologies: [
            'Unity Engine (C# Programming)',
            'Universal Render Pipeline (URP)',
            'A* Pathfinding Project',
            'Behavior Designer (AI)',
            'Firebase & Analytics Integration',
            'Git Version Control',
            'Multiplatform Deployment (Android/iOS)'
        ],
        screenshots: [
            'images/AfterWorld/Combat.png',
            'images/AfterWorld/DestacadaHacha.png',
            'images/AfterWorld/Characters.png',
            'images/AfterWorld/Splash.png'
        ],
        keyFeatures: [
            {
                title: "Base Building & City Management System",
                content: [
                    {
                        type: "text",
                        value: "Designed and implemented a comprehensive base building system where players construct and manage their survival settlement. " +
                        "Features include grid-based building placement, resource production buildings with automated crafting queues, defensive structures, " +
                        "storage management, and technology upgrades. The system uses a modular architecture with building inventory systems, task management, " +
                        "and persistent save data. Players can build walls, gates, crafting stations, resource generators, and defensive structures to protect against zombie hordes."
                    },
                    {
                        type: "video",
                        value: "videos/AfterWorld/lfs/BuildingBaseShowcase.mp4",
                        caption: "Base building mechanics: placement, construction, and management"
                    },
                    {
                        type: 'images',
                        value: [
                            "images/AfterWorld/BaseUpgradeGif.gif",
                            "images/AfterWorld/CommanderView.png",
                            "images/AfterWorld/DefensiveStructures.png"
                        ],
                        caption: "City management interface and base construction systems - defensive structures and upgrades",
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                ]
            },
            {
                title: "Combat System: Melee, Ranged & Zombie AI",
                content: [
                    {
                        type: "text",
                        value: "Developed a sophisticated combat system featuring melee and ranged weapons with distinct mechanics, hit reactions, stopping power, " +
                        "damage types, and knockback systems. Implemented intelligent zombie AI with horde behavior, pathfinding, aggro systems, and dynamic difficulty scaling. " +
                        "The damage system includes hit zones, critical hits, weapon durability, and tactical combat features like sneak attacks and dodge rolls. " +
                        "NPCs and zombies feature state machines for combat, patrol, and idle behaviors."
                    },
                    {
                        type: "video",
                        value: "videos/AfterWorld/lfs/CombateRanged.mp4",
                        caption: "Zombie horde AI and large-scale combat scenarios"
                    },
                    {
                        type: 'video',
                        value: ['videos/AfterWorld/lfs/Combat/CombatMeleeBat.mp4',
                            'videos/AfterWorld/lfs/Combat/CombatMeleeSpear.mp4',
                            'videos/AfterWorld/lfs/Combat/CombatGrenade.mp4',
                            'videos/AfterWorld/lfs/Combat/CombatClaymore.mp4',],
                        caption: 'Combat demonstration and weapons variety and mechanics',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                ]
            },
            {
                title: "Crafting System & Production Chains",
                content: [
                    {
                        type: "text",
                        value: "Architected a modular crafting system with recipe-based production, crafting benches, resource requirements, and queued task management. " +
                        "Players craft weapons, armor, consumables, building materials, and technological upgrades through specialized workstations. " +
                        "The system features automated production chains, inventory-aware crafting, learning points to unlock recipes, technology tiers, " +
                        "and batch crafting capabilities. Integrated with the base building system for production buildings that automatically craft queued items."
                    },
                    {
                        type: "video",
                        value: "videos/AfterWorld/lfs/Crafting.mp4",
                        caption: "Crafting interface and production chain demonstration in different workbenches (buildings)"
                    },
                    {
                        type: "images",
                        value: [
                            "images/AfterWorld/CraftingTable.png",
                            "images/AfterWorld/CraftingInProcess.png",
                        ],
                        caption: "Crafting interface, workbenches, and recipe management",
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    }
                ]
            },
            {
                title: "RPG Progression: Skills, Attributes & Leveling",
                content: [
                    {
                        type: "text",
                        value: "Designed a deep RPG progression system with experience-based leveling, skill trees with 90+ unique skills across multiple categories " +
                        "(Combat, Survival, Gathering, Stealth), attribute systems affecting character stats, and learning points for unlocking crafting recipes. " +
                        "Skills provide percentage-based bonuses to damage, health, stamina, resource gathering, stealth, and crafting efficiency. " +
                        "The modular stat system allows dynamic stat modifications from equipment, skills, buffs, and debuffs, creating strategic build variety."
                    },
                    {
                        type: "images",
                        value: [
                            "images/AfterWorld/LevelUp.png",
                            "images/AfterWorld/SkillsTree.png",
                        ],
                        caption: "Skill tree system and character progression interfaces",
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    }
                ]
            },
            {
                title: "Technical Modernization: LWRP to URP14 Migration",
                content: [
                    {
                        type: "text",
                        value: "Rescued a legacy project from hiatus and led the complete technical modernization from an outdated custom LWRP fork to Unity's Universal Render Pipeline 14. " +
                        "This involved migrating and adapting hundreds of custom shaders, including custom render features (fur rendering, post-processing, screen-space effects), " +
                        "and optimizing the rendering pipeline for multiplatform performance. The migration required deep understanding of Unity's rendering architecture, " +
                        "HLSL shader programming, and careful refactoring to maintain visual fidelity while improving performance."
                    },
                    {
                        type: 'video',
                        value: ['videos/AfterWorld/lfs/Tutorial-Antes.mp4',
                            'videos/AfterWorld/lfs/Tutorial-Despues.mp4',],
                        caption: 'Before/After comparison of the tutorial of the game',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'video',
                        value: ['videos/AfterWorld/lfs/Bosque-Antes.mp4',
                            'videos/AfterWorld/lfs/Bosque-Despues.mp4',],
                        caption: 'Before/After comparison of the first level of the game',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                ]
            },
            
        
        /*{
            title: "World Map & Procedural Mission System",
            content: [
                {
                    type: "text",
                    value: "Implemented an interconnected world map system with mission nodes, unlockable paths, and procedurally generated levels. " +
                    "Each mission features seeded random generation ensuring consistent layouts while providing variety through configurable spawn points, " +
                    "dynamic enemy placement, randomized loot, and day/night cycles. The system includes mission progression tracking, connection unlocking, " +
                    "campaign missions, event missions, and save state persistence. Players travel between locations, each with unique environmental themes and challenges."
                },
                {
                    type: "video",
                    value: "videos/AfterWorld/world-map-exploration.mp4",
                    caption: "World map navigation and mission selection system"
                    // Suggested: Player navigating world map, selecting missions, showing unlocked paths
                },
                {
                    type: "video",
                    value: "videos/AfterWorld/mission-gameplay.mp4",
                    caption: "Mission gameplay showcasing procedural generation and exploration"
                    // Suggested: Full mission playthrough showing exploration, combat, looting, and mission completion
                },
                {
                    type: "images",
                    value: [
                        "images/AfterWorld/world-map.png",
                        "images/AfterWorld/mission-select.png",
                        "images/AfterWorld/level-variety.png"
                    ],
                    caption: "World map interface and procedurally generated mission environments"
                    // Suggested: World map UI, mission details screen, various level screenshots
                }
            ]
        },
        
        {
            title: "Inventory & Equipment Management",
            content: [
                {
                    type: "text",
                    value: "Developed a comprehensive inventory system with equipment slots, backpack storage, chest inventories, and intelligent item stacking. " +
                    "Features include drag-and-drop interface, item filtering, equipment stats comparison, durability tracking, and inventory expansion through backpack items. " +
                    "The system supports multiple inventory types (player bag, equipment, building storage, enemy loot) with smart item transfer, " +
                    "automatic sorting, and transaction validation. Integrated with crafting, looting, and trading systems."
                },
                {
                    type: "video",
                    value: "videos/AfterWorld/inventory-management.mp4",
                    caption: "Inventory system and equipment management demonstration"
                    // Suggested: Player managing inventory, equipping items, comparing gear, organizing storage
                },
                {
                    type: "images",
                    value: [
                        "images/AfterWorld/inventory-ui.png",
                        "images/AfterWorld/equipment-screen.png",
                        "images/AfterWorld/loot-window.png"
                    ],
                    caption: "Inventory interface and equipment management systems"
                    // Suggested: Full inventory UI, equipment comparison tooltip, chest/storage interface
                }
            ]
        },
        
        {
            title: "Cross-Platform Optimization & Deployment",
            content: [
                {
                    type: "text",
                    value: "Led multiplatform development and optimization for Android, iOS, and Windows PC, each with platform-specific features and controls. " +
                    "Implemented dynamic quality settings with multiple preset levels (Low, Medium, High, Ultra) adjusting rendering features, shadows, " +
                    "post-processing, and draw distances. Optimized asset loading with Addressables system for efficient memory management. " +
                    "Integrated platform-specific SDKs for analytics, cloud saves, achievements, and in-app purchases. Achieved consistent 60 FPS on mid-range devices " +
                    "while maintaining visual quality on high-end platforms through adaptive quality and LOD systems."
                },
                {
                    type: "images",
                    value: [
                        "images/AfterWorld/platform-android.png",
                        "images/AfterWorld/platform-ios.png",
                        "images/AfterWorld/platform-pc.png",
                        "images/AfterWorld/quality-settings.png"
                    ],
                    caption: "Game running across multiple platforms with optimized performance"
                    // Suggested: Screenshots from each platform, quality settings UI, performance metrics
                }
            ]
        },
        
        {
            title: "Persistent Save System & Data Management",
            content: [
                {
                    type: "text",
                    value: "Architected a robust save/load system using custom serialization for game state persistence across sessions. " +
                    "The system saves player progression (level, skills, attributes), inventory states, base construction data, mission progress, " +
                    "world state, and entity data. Features automatic save intervals, manual save options, cloud backup integration, " +
                    "and data validation to prevent corruption. Implemented efficient serialization using ScriptableObject patterns and binary encoding " +
                    "for optimal file size and loading speed. Supports save migration between game versions."
                },
                {
                    type: "images",
                    value: [
                        "images/AfterWorld/save-system-architecture.png"
                    ],
                    caption: "Save system architecture and data persistence"
                    // Suggested: Diagram or code screenshot showing save system structure
                }
            ]
        }*/
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
        description: 'Idle Mining Town is an idle tycoon game where players build, manage, and expand mining towns. Players extract minerals, automate production chains, '+
        'and hire managers to optimize efficiency. The game features offline progression, tiered resource systems, strategic upgrades, and city expansion mechanics, delivering '+
        'a hybrid experience for both casual and dedicated players.'
        ,
        myRole: [
            'Lead development and maintenance of the idle game mechanics',
            'Design and implement new features and content updates',
            'Analyze player data to improve retention and monetization',
            'Coordinate with the team for regular content updates'
        ],
        technologies: [
            'Unity Engine (C# Programming)',
            'Data Analytics',
            'Git Version Control',
            'Jira Project Management'
        ],
        keyFeatures: [
            {
                title: "Idle Resource Simulation & Offline Progression",
                content: [
                    {
                        type: "text",
                        value: "Multi-layered resource generation system with automated collection and offline progression. Predictive algorithms ensure accurate simulation of resources earned while the player is away."
                    },
                    {
                        type: "video",
                        value: "videos/mining_playable.mp4",
                        caption: "Idle gameplay and resource generation demonstration"
                    }
                ]
            },
            {
                title: "Modular Factory Automation",
                content: [
                    {
                        type: "text",
                        value: "Designed scalable production chains with interdependent factories, bottleneck management, and upgrade prioritization. Players can optimize efficiency through strategic factory layout and automation."
                    },
                    {
                        type: "images",
                        value: ["images/Mining/FactoryList.png", "images/Mining/FactoryDetails.png"],
                        caption: "Factory management interface with modular production chains"
                    }
                ]
            },
            {
                title: "City Building & Tiered Progression",
                content: [
                    {
                        type: "text",
                        value: "Players expand their mining town with new buildings, unlockable resource tiers, and technology upgrades. Tiered progression ensures both accessible early gameplay and challenging late-game optimization."
                    },
                    {
                        type: "images",
                        value: ["images/Mining/Ciudad.png", "images/Mining/TechnologyUpgrade.png"],
                        caption: "City layout and technology upgrades"
                    }
                ]
            },
            {
                title: "AI-Driven Managers & Optimization",
                content: [
                    {
                        type: "text",
                        value: "Implemented AI-controlled managers with unique traits to automate production, reduce downtime, and provide bonuses. Players strategically assign managers to optimize resource collection and efficiency."
                    }
                ]
            },
            {
                title: "Data-Driven Analytics & Balancing",
                content: [
                    {
                        type: "text",
                        value: "Integrated player telemetry and analytics to monitor engagement, progression bottlenecks, and feature usage. Used data to inform balancing decisions, optimize retention, and guide content updates."
                    }
                ]
            },
            {
                title: "Strategic Depth & Hybrid Gameplay",
                content: [
                    {
                        type: "text",
                        value: "Balanced casual idle mechanics with strategic tycoon elements, allowing players to engage at their own pace. Players can optimize production, plan upgrades, and expand efficiently, creating long-term engagement."
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
        description: 'Hospital Empire is a strategic idle game where players build and manage their own hospital network. Manage patients, hire staff, upgrade facilities, '+
        'and expand your medical empire across multiple locations.<br>The game was created by spanish studio Bee Games, and published under my company Viva Games. When the studio closed '+
        'in 2024, the game was taken over completely by my company. After that it was sold to <span style="color: #48bfe3"><b>Plug In Digital</b></span>, a renowned publisher in the mobile games industry.'+
        '<br>My task here was to adapt the entire game to be published under <span style="color: #48bfe3"><b>Plug In Digital</b></span>, ensuring compatibility and compliance with platform requirements. That meant removing '+
        'all online-dependent systems, including analytics, server connections, Google Play services, IAPs and more, and identifying and resolving multiple bugs and issues found in the game. '+
        '<br>The process took around 2 months to be completed, with several iterations and milestones.'
        ,
        screenshots: [
            'images/Hospital/hospital 1.png',
            'images/Hospital/hospital 2.png',
            'images/Hospital/hospital 3.png',
            'images/Hospital/hospital gameplay 1.png',
            'images/Hospital/hospital gameplay 2.png'
        ],
        myRole: [
            'Adaptation of an existing idle hospital-management game for publishing under renowned publisher <span style="color: #48bfe3"><b>Plug In Digital</b></span>, ensuring compatibility and compliance with platform requirements',
            'Removal of all online-dependent systems, including analytics, server connections, Google Play services, IAPs and more',
            'Identification and resolution of multiple bugs and issues found in the game, including performance issues and UI bugs',
        ],
        technologies: [
            'Unity Engine (C# Programming)',
            'Git Version Control',
            'Jira Project Management'
        ],
        keyFeatures: [
            {
                title: 'Removal of all online-dependent systems',
                content: [
                    {
                        type: 'text',
                        value: 'I was in charge of removing all online-dependent systems. This included: '+
                        '<br>- Firebase (Crashlytics, Analytics, Remote Config) '+
                        '<br>- Android Performance Tuner '+
                        '<br>- Facebook SDK (Login, Share, App Invites) '+
                        '<br>- Ads (Google Admob, Ironsource, Unity Ads) '+
                        '<br>- Addressables (Asset Bundles) '+
                        '<br>- Google Play Games Services (Leaderboards, Achievements, Cloud Saving) '+
                        '<br>- IAPs (In-App Purchases) '+
                        '<br>- Push notifications '+
                        '<br>- Cloud Saving'+
                        '<br>This process took around a few weeks to be completed, specially because I had to redesign a lot of aspects of the game to fit the new requirements.'+
                        '<br><br>For example, now players didn\'t have Rewarded Ads, Interstitial Ads or IAPs to progress faster in the game, so I had to balance the game to make '+
                        'its progression and difficulty curve more fair and engaging. I also had to redesign UI elements to fit the new requirements and create a local saving system that '+
                        'replaced the cloud saving system.'
                    },
                ]
            },
            {
                title: 'Bugs and optimizations',
                content: [
                    {
                        type: 'text',
                        value: 'Plug In Digital also asked for some optimizations to the game, such as updating Android SDK to the latest version and allowing 16KB memory page size.'+
                        '<br><br>In terms of bugs, with the removal of online-dependent systems, a lot of them came up. Not only as a result of my changes, but also a lot of legacy bugs.'+
                        'I had to playtest the game throughly to identify and fix them. This process took around a few weeks to be completed, with several iterations and milestones.'
                    },
                ]
            },
        ]
    },
    'bowtoys': {
        title: 'Bowtoys',
        company: 'Kometasoft S.L.',
        role: 'Junior Game Developer',
        year: '2022 - 2024',
        tags: ['Unity', 'Arcade Shooter', 'Android/iOS', 'Cancelled project - Team of 4'],
        heroVideo: 'videos/Bowtoys/bowtoys-tutorial.mp4',
        storeLinks: [
            {
                store: 'Project Cancelled',
                url: '',
                icon: 'fas fa-ban'
            }
        ],
        description: 'Bowtoys was an archery-themed arcade skill game in which players must defeat their opponent '+
        'from a long distance, using their character\'s unique weapon and abilities. The game features a large '+
        'number of toy characters, each with a unique weapon with different effects and projectile trajectories. '+
        '<br>Each character also features a unique Fatality, a special move with which they can end the game in a surprising and shocking way.',
        myRole: [
            'Design, balance and implementation of several aspects of the game, including characters, levels, weapons...',
            'Testing and correction of all the bugs found during development',
            'Support of the lead programmer of the team, implementing features and mechanics',
            'Design and implementation of the first steps of the game (including tutorial games), changes in the UI, rewards and progression systems...',
        ],
        technologies: [
            'Unity Engine (C# Programming)',
            'Git Version Control',
            'Confluence Documentation',
            'Jira Project Management'
        ],
        keyFeatures: [
            {
                title: 'Game Mechanics',
                content: [
                    {
                        type: 'text',
                        value: 'The controls of the game are really simple and intuitive, adapted to mobile platforms and tablets. '+
                        'To shoot, players simply drag and drop, a formula which success has already been more than proven by franchises '+
                        'like Angry Birds (from which we took a lot of inspiration).'
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Weapons & Special Abilities</b></span><br>'+
                        'In order to make each match feel unique and motivate the player to keep playing, we gave the characters '+
                        'a very defined aesthetic. <br>In addition, we gave each character a weapon according to their aesthetic and '+
                        'personality. These weapons also vary from each other. The trajectory the weapon takes will depend on its shape '+
                        '(a spear does not behave the same in the air than a hammer), as well as with which part it hits the target and '+
                        'how much damage it does. <br><br>Tapping the screen while the weapon is in mid-air, the player can perform a '+
                        'special move. This move is unique to each character, and it goes from splitting the weapon into three smaller ones, '+
                        'explode the weapon in mid-air or even shoot lightning bolts.',
                    },
                    {
                        type: 'video',
                        value: ['videos/Bowtoys/bowtoys-crocodile-special.mp4','videos/Bowtoys/bowtoys-rabbit-special.mp4'],
                        caption: 'Each character has a unique special move',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Fatalities</b></span><br>'+
                        'Fatalities are a way of rewarding players for winning the game. Once players reduce their opponent\'s'+
                        ' health to 0, the opponent character will get stunned and players will have the chance to perform one last shot.'+
                        'If they land this shot, a cinematic will take place in which the enemy is destroyed in a very impressive and gory way.'+
                        '<br>Each character has its own Fatality and they were designed following the character\'s line of design.',
                    },
                    {
                        type: 'video',
                        value: ['videos/Bowtoys/bowtoys-fox-facility.mp4','videos/Bowtoys/bowtoys-pig-fatality.mp4'],
                        caption: 'Fatalities incentivize players to win the game rewarding them with a cinematic way of destroying their opponent',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Targets</b></span><br>'+
                        'To give variety to matches, we designed a target system where several targets appear in '+
                        'random positions between both players. If a player manages to hit one of these, this player will '+
                        'gain a temporary bonus, either by making himself smaller (and therefore harder to get hit), making the '+
                        'opponent bigger (and therefore easier to get hit), having an extra shot, etc.',
                    },
                    {
                        type: 'video',
                        value: 'videos/Bowtoys/bowtoys-targets.mp4',
                        caption: 'Targets keep the game interesting and reward skilled players',
                    },
                ]
            },
            {
                title: 'Game Modes',
                content: [
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Standard Match</b></span><br>'+
                        'This is the main game mode of the game. It begins with players choosing a character. The '+
                        'AI then generates a game against a random opponent character (or the other player\'s character '+
                        'if playing Local Multiplayer). The map generated will have a random layout depending on the '+
                        'player(s) current level. The more advanced the player(s), the more unevenness and slopes the '+
                        'scenario generates, increasing the difficulty to land shots. <br>Both characters need to take '+
                        'turns shooting each other with their respective weapons until the health of one of them reaches 0.'+
                        '<br><br>As I said, this game mode can also be played online with a friend who is connected to the same '+
                        'network.',
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Apple Shot</b></span><br>'+
                        'In this minigame, players have an NPC in front of them with a fruit on its head. Players must shoot '+
                        'trying to hit the fruit but not the NPC. If the player correctly hits the fruit, the NPC will respawn again '+
                        'with a new fruit on its head but this time further away from the player, making the task more difficult each time.'+
                        '<br>However, if the player hits the NPC, he will lose 1 out of 3 lives. If he loses all his lives, the game is over.'+
                        'When this happens, players will get a reward based on the amount of times they hit the fruit.'+
                        '<br>This minigame is unlocked at level 5 and players can access it from the Main Menu.',
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Bird Hunt</b></span><br>'+
                        'In this minigame, players have a limited amount of time to shoot the birds that appearn on '+
                        'top of the screen. Each bird drops coins when shot down, and there are birds that carry special '+
                        'items, like bombs that explode when shot and knock down other birds or clocks that grants more time.'+
                        '<br>The minigame ends when players run out of time and they are rewarded all the coins they collect.'+
                        '<br>This minigame is unlocked at level 10 and players can access it from the Main Menu.',
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Waves Mode</b></span><br>'+
                        'In this minigame, players are transported back in time. They will need to defend themselves from '+
                        'waves of troglodytes and dinosaurs, shooting all kinds of weapons of them - weapons from all characters in the game.'+
                        'If they survive enough time, a meteor will sweep all enemies, leading to a new round with increasingly resistant enemies. '+
                        '<br>The minigame ends when enemies touch the player or when players survive through all waves, obtaining a reward '+
                        'according to the number of waves they survived.'+
                        '<br>This minigame is accessible at the end of a Standard Match and players need to play with gems (premium currency) '+
                        'or with Fatalities tokens. The number of Fatalities the player has done are stored to be used as currency exclusively '+
                        'to grant access to this game mode. Players can play a Wave Mode game paying with gems or paying 3 Fataliy tokens.',
                    },
                    {
                        type: 'video',
                        value: 'videos/Bowtoys/bowtoys-minigames.mp4',
                        caption: 'Different game modes and minigames available in the game',
                    },
                ]
            },
            {
                title: 'Menu & In-Game UI',
                content: [
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Menu Screens</b></span><br>'+
                        'When designing the UI of the game menus, we opted for a casual and striking design, using bright colors with a lot of contrast. We wanted it to be simple, intuitive and colorful.'+
                        '<br>Since the charactters are stuffed animals, instead of using the typical roulette wheen to unlock prizes, we decided to use a Hook Machine, which is more in line with the context. '+
                        'Also, once we unlock a character, it is displayed in the Character Showcase, accessible from the Main Menu.'+
                        '<br><br>Being a mobile game, daily challenges, rewards and achievements are very important for progression and player retention. For that reason, we tried to design it in the most '+
                        'intuitive and simple way possible, maintaining the general aesthetics of the rest of the menu screens.',
                    },
                    {
                        type: 'images',
                        value: ['images/Bowtoys/bowtoys-menu.jpg', 'images/Bowtoys/bowtoysroulette.png', 'images/Bowtoys/bowtoyscharactershowcase.png',
                            'images/Bowtoys/bowtoysachievements.png', 'images/Bowtoys/bowtoysrewards.png', 'images/Bowtoys/bowtoysmissions.png',
                            'images/Bowtoys/bowtoysmatchend.png'],
                        caption: 'Different Menu Screens',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>In-Game UI</b></span><br>'+
                        'The following image corresponds to the In-Game UI of a Standard Match. We tried to design it to be as discrete as possible, so that players could have as much screen space as possible. '+
                        'In the upper part of the screen we find the health bars of both characters, in the left part a window that explains their character\'s special ability and in the right part some icons that '+
                        'indicate where things of interest are located, like the enemy character or targets. <br><br>In addition, while aiming the shot, a floating window indicates the angle and force of the shot, to help '+
                        'players aim better and hit more accurately.',
                    },
                    {
                        type: 'images',
                        value: ['images/Bowtoys/bowtoysingameui.png'],
                        caption: 'In Game UI of a Standard Match',
                        style: { justifyContent: 'center', paddingLeft: '3rem', paddingRight: '3rem' }
                    }
                ]
            },
        ]
    },
    'wow': {
        title: 'Wall of War',
        company: 'Kometasoft S.L.',
        role: 'Junior Game Developer',
        year: '2021 - 2022',
        tags: ['Unity', '2D Hero Shooter', 'Android', 'Cancelled project - Team of 4'],
        storeLinks: [
            {
                store: 'Project Cancelled',
                url: '',
                icon: 'fas fa-ban'
            }
        ],
        heroVideo: 'videos/Wow/wow-trailer.mp4',
        heroVideoSubtitle: 'WARNING - Some of the text in screenshots and videos may not be translated because they were taken at an early stage of development.',
        description: 'Wall of War was a 2D hero shooter game in which players face other opponents in a 1v1 arena or defeat waves of different enemies and bosses in a Survival Campaign mode. The game includes '+
        'a incredibly huge variety of characters, each with its own stats and special abilities. <br>The game shines for its frenetic and crazy gameplay and its inherent humor.',
        myRole: [
            'Design, balance and implementation of several aspects of the game, including characters, levels, weapons...',
            'Testing and correction of all the bugs found during development',
            'Support of the lead programmer of the team, implementing features and mechanics',
            'Design and implementation of the first steps of the game (including tutorial games), changes in the UI, rewards and progression systems...',
        ],
        technologies: [
            'Unity Engine (C# Programming)',
            'Git Version Control',
            'Confluence Documentation',
            'Jira Project Management'
        ],
        keyFeatures: [
            {
                title: 'Game Mechanics',
                content: [
                    {
                        type: 'text',
                        value: 'To control the character, players can use the typical control structure of a Mobile Top Down Shooter: with the left thumb they move the character and with the right thumb they aim, shoot and use abilities and objects.'+
                        ' When shooting, players can drag the right joystick to aim where they want to shoot - or hold it down without dragging to auto-aim. Players can also roll with a special button, that allows them to dodge bullets and other hazards.'
                    },
                    {
                        type: 'images',
                        value: ['images/Wow/wowHUD.png'],
                        caption: 'Gameplay HUD',
                        style: { justifyContent: 'center', paddingLeft: '3rem', paddingRight: '3rem' }
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Weapons</b></span><br>'+
                        'We included a lot of weapons in the game and we wanted to make each weapon feel different from the rest, without being unbalanced. There are automatic weapons, semiautomatic weapons, throwable weapons like grenades, melee weapons'+
                        ' (like a baseball bat), powerful weapons that need to cool off from time to time (like a minigun). <br>'+
                        'We also had what we called "joke weapons", that were weapons that did nothing by theirselves , like a throwable rubber duck, but when players pick up a potion from the ground these weapons become very powerful - in the case '+
                        'of the rubber duck, a Frankenstein-like duck appears and destroys everything. <br><br>'+
                        'Weapons have their own stats, which can be consulted and upgraded using coins in the Weapon Select Window in the Main Menu. These stats are: Damage, Fire Rate and Bullet Speed.'
                    },
                    {
                        type: 'images',
                        value: ['images/Wow/wowWeaponDisplay.png', 'images/Wow/wowCharacterSelect.png'],
                        caption: 'Character selection & weapons',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Characters</b></span><br>'+
                        'Characters were designed following a funny and simplistic aesthetic line, like cartoons. Many of them make references to famous pop culture characters, references to the city of Seville and even Internet memes. '+
                        '<br>Each has a special attack that can be performed once every so often.',
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Tutorial</b></span><br>',
                    },
                    {
                        type: 'video',
                        value: 'videos/Wow/wow-tutorial.mp4',
                        caption: 'This is a video of the introductory tutorial of the game, which I designed on my own. In it, a character will guide players through the different screens and will teach them the basic controls of the game such as '+
                        'moving, shooting, dodging, etc. Once that part is finished, players will be dragged to a new arena where the real game will begin.'
                    },
                ]
            },
            {
                title: 'Waves Mode',
                content: [
                    {
                        type: 'text',
                        value: 'Waves Mode is the main game mode of the game. It is an infinite game mode in which players will face waves of enemies with increasing difficulty. It also features boss fights every certain waves. At the end '+
                        'of each wave, players will be given to choose 3 upgrade cards (1 of them free, the other 2 are video rewards) that can consist of weapons, stat improvements, weapon upgrades, etc. <br> This game mode is infinite, '+
                        'so it will end when players die. Depending on how far players reach, they will obtain more or less rewards.'
                    },
                    {
                        type: 'video',
                        value: ['videos/Wow/wow-wavesmode.mp4','videos/Wow/wow-bossfight.mp4'],
                        caption: 'Waves mode and boss fight gameplay videos',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'images',
                        value: ['images/Wow/wowBosses.png'],
                        caption: 'Different bosses in the game - each with their own unique abilities and combat styles',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem'}
                    },
                    {
                        type: 'images',
                        value: ['images/Wow/wowSlimeVariations.png'],
                        caption: 'Enemy variations appear in higher waves, adding special abilities and behaviors to the enemies',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem'}
                    },
                ]
            },
            {
                title: 'History Mode',
                content: [
                    {
                        type: 'text',
                        value: 'History mode is the secondary mode of the game. It is unlocked at level 10 and consists of a series '+
                        'of 1v1 battles where players will fight against the different characters of the game, so that until they defeat '+
                        'one they will not be able to advance to the next one. There are a total of 47 battles and the rules for this game mode '+
                        'are very different from the Waves Mode.'+
                        '<br><br>Players start on one side of the map and their opponent on the opposite. Players have a few seconds to search for a weapon '+
                        'in their half of the map. Once that time is up, the big wall in the center of the map will fall and the battle will begin.'+
                        'Players need to defeat their opponent in a best of 3 rounds to win the battle.'+
                        '<br><br>This game mode was designed as a way to keep players engaged by giving them a different type of gameplay than the Waves Mode, '+
                        'something more linear and with a more marked progression. In this way, a level selector was designed and implemented, where players'+
                        'can see the characters they have already defeated and the ones they have left to defeat, as well as the rewards they can get along the way.'
                    },
                    {
                        type: 'video',
                        value: 'videos/Wow/wow-historymode.mp4',
                        caption: 'History Mode - Gameplay'
                    },
                ]
            },
            {
                title: 'Menu & In-Game UI',
                content: [
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Menu Screens</b></span><br>'+
                        'When designing the UI of the game menus, we took inspiration from games like Brawl Stars '+
                        'because we tried to convey the same sensations when choosing a character or changing weapons.'+
                        '<br>In the Character Select screen, players can find all the information related to the characters, '+
                        'like their special abilities and stats. Everything is displayed in a clear and intuitive way, with great '+
                        'contrast between the UI elements and the background.'+
                        '<br>In the Weapon Select screen, players can change their starting weapon for some of the game modes. Better '+
                        'and cooler weapons can be unlocked with player experience. They can also use coins to level up their weapons, to a '+
                        'maximum of 5 levels.'+
                        '<br><br>Being a mobile game, daily challenges and rewards, as well as achievements, are very important for progression '+
                        'and player retention. For this reason, we tried to design these aspects of the game in the most intuitive and simple '+
                        'possible way, maintaining the general aesthetics of the rest of the menu screens.'
                    },
                    {
                        type: 'images',
                        value: ['images/Wow/wowMainMenu.png', 'images/Wow/wowQuest.png',
                            'images/Wow/wowShop.png', 'images/Wow/wowCharacterSelect.png',
                            'images/Wow/wowWeaponDisplay.png', 'images/Wow/wowWeaponChange.png',
                        ],
                        caption: 'Different menu screens',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Battle Pass</b></span><br>'+
                        'A Battle Pass was designed and developed because they were so popular at the time and it was '+
                        'a great way to increase player progress and reward them for playing, as well as to increase retention.'
                    },
                    {
                        type: 'video',
                        value: 'videos/Wow/wow-battlepass.mp4',
                        caption: 'Battle Pass'
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>In-Game UI</b></span><br>'+
                        'We wanted players to be able to access information about both their character and their weapon '+
                        'in the middle of the gameplay, so we put all this information in the Pause Menu. In addition, '+
                        'players can also check the improvements and weapons they have been obtaining along the match.'+
                        '<br><br>On the Game Over screen, players can see a small and satisfying animation in which all the '+
                        'experience they have gained in the match is added to their current experience bar. When done, they '+
                        'can also take a look at the gold obtained and other data such as statistics about the game, like the '+
                        'largest combo of enemies defeated without being hit.'
                    },
                    {
                        type: 'images',
                        value: ['images/Wow/wowHUD.png', 'images/Wow/wowPause.png',
                            'images/Wow/wowGameOver1.png', 'images/Wow/wowGameOver2.png',
                        ],
                        caption: 'In-Game UI elements',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                ]
            },
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
        '<br>This is a multiplayer game where 2 players fight each other in a match that mixes the basics of a normal chess game with Turn-Based RPG '+
        'combat and components like stats, weapons, magic spells, etc. We as a team did an incredible job with the worldbuilding and the narrative, '+
        'but after 2 years working on the game we had to cancel it since we didn\'t have the resources and time to keep developing such a complex title in our free time.'+
        '<br><br>However, the game was at an advanced point of development and we even introduced it to the public at Gamepolis, a famous videogame fair celebrated in '+
        'Málaga (Spain). We were able to implement local multiplayer and we wanted to implement online multiplayer for the end of 2024, but we realized too late '+
        'that we had embarked on a task that was beyond us in complexity and scope.',
        myRole: [
            'Collaboration in the design of the idea and mechanics of the game, as well as the worldbuilding and the narrative',
            'Implementation of all the coding of the game, from the multiplayer to the combat system',
            'Testing and correction of all the bugs found during development'
        ],
        technologies: [
            'Unity Engine (C# Programming)',
            'Unreal Engine (Blueprints)',
            'Git Version Control',
            'Confluence Documentation',
            'Jira Project Management'
        ],
        keyFeatures: [
            {
                title: 'Working as a Lead',
                content: [
                    {
                        type: 'text',
                        value: 'My role in the development of this game was Lead Programmer. I was responsible for all the coding of the game, from the initial prototypes to the final touches before presenting the game at Gamepolis: the logic of the AI, '+
                        'the mechanics of the chess game, the Turn-Based combat system with magic and synergies, all the UI, the multiplayer system, etc.'+
                        '<br><br>It was also my responsability to supervise the rest of the programming team, which varied in number throughout the development (sometimes it was just me, sometimes we were up to 5 programmers), as well as '+
                        'teaching new people the codebase and the game mechanics. I\'m not going to lie, it was really stressful sometimes!'
                    },
                ]
            },
            {
                title: 'From Unity to Unreal Engine',
                content: [
                    {
                        type: 'text',
                        value: 'Although at first wer started developing the game in Unity, after a year we decided to make the leap to Unreal Engine. This allowed us to redo from scratch aspects of the game that we weren\'t '+
                        'quite fond of and also tweak others, this time with a clearer vision of what we wanted to achieve. For me it was a very hard experience, because changing engines in the middle of development was something '+
                        'I had never done before, but it was a great learning experience and I\'m glad we did it.'+
                        '<br><br>All the coding was carried out with BNlueprints, including the multiplayer and the combat system.'
                    },
                    {
                        type: 'text',
                        value: 'Here is how the game looked before doing the transition to Unreal Engine. You can compare it with the Gameplay Demo displayed on top of this page and judge by yourselves if it was worth the effort!'
                    },
                    
                    {
                        type: 'video',
                        value: 'videos/Shatraj/shatraj-unity.mp4',
                        caption: 'Shatraj - Unity Gameplay'
                    },
                    
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
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>Visuals</b></span><br>'+
                        '- For the aesthetic, since we wanted to represent the passing of time and day and night cycles, we decided to use the insides of a clock'+
                        ' as a setting for our mazes, thus taking a reference to steampunk aesthetics. <br><br>'+
                        '- For the character, we chose an endearing and friendly representation of a gear, and for the obstacles we relied on things that resembled'+
                        ' the insides of a machine, like nuts, bolts, sliding walls, rolling bars, etc.'
                    },
                    {
                        type: 'images',
                        value: ['images/EngineOfTime/draft-1.png', 'images/EngineOfTime/draft-2.png'],
                        caption: 'Drafts of the game',
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
                    },
                    {
                        type: 'text',
                        value: '<span style="color: #48bfe3"><b>More info about the game</b></span><br>'+
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
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
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
                            style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
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
                        style: { justifyContent: 'center', paddingLeft: '2rem', paddingRight: '2rem', gap: '3rem'}
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
            // Check if link should be disabled (empty URL or "Project Cancelled")
            const isDisabled = !store.url || store.url.trim() === '' || store.store === 'Project Cancelled';
            
            if (isDisabled) {
                // Create a disabled span element instead of a link
                const disabledElement = document.createElement('span');
                disabledElement.className = 'store-link disabled';
                disabledElement.innerHTML = `
                    <i class="${store.icon}"></i>
                    <span>${store.store}</span>
                `;
                storeLinksContainer.appendChild(disabledElement);
            } else {
                // Create a clickable link
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
            }
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
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => {
                // Open image in full-size modal (reusing the same modal from keyFeatures)
                openImageModal(screenshot, `${game.title} - Screenshot`);
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
    
    // Detect mobile devices (typically <= 768px width)
    const isMobile = window.innerWidth <= 768;
    
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
            img.style.cursor = 'pointer';
            img.addEventListener('click', () => openImageModal(block.value, block.caption));
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
            // Ensure container is always block-level, never flex or grid
            container.style.display = 'block';
            container.style.width = '100%';
            
            const imagesGrid = document.createElement('div');
            imagesGrid.className = 'images-grid';
            
            // Set grid to max 2 columns on desktop, 1 column on mobile
            imagesGrid.style.display = 'grid';
            // Use repeat with auto-fit but ensure max 2 columns by using minmax
            const numItems = block.value.length;
            if (isMobile) {
                // Mobile: always use 1 column
                imagesGrid.style.gridTemplateColumns = 'repeat(1, 1fr)';
            } else {
                // Desktop: use 2 columns max
                if (numItems <= 2) {
                    imagesGrid.style.gridTemplateColumns = `repeat(${numItems}, 1fr)`;
                } else {
                    // For more than 2 items, use auto-fit with minmax to cap at 2 columns
                    imagesGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                }
            }
            imagesGrid.style.maxWidth = '100%';
            imagesGrid.style.gap = '3rem';
            imagesGrid.style.gridAutoFlow = 'row';
            
            // Apply custom column setting if provided (but cap at 2 on desktop, 1 on mobile)
            if (block.columns) {
                const maxColumns = isMobile ? 1 : Math.min(block.columns, 2);
                imagesGrid.style.gridTemplateColumns = `repeat(${maxColumns}, 1fr)`;
            }
            
            // Apply custom styles to grid if provided (but preserve grid structure)
            if (block.style) {
                // Apply styles except display and gridAutoFlow (we'll set those explicitly)
                Object.keys(block.style).forEach(property => {
                    if (property !== 'display' && property !== 'gridAutoFlow' && property !== 'flexDirection') {
                        imagesGrid.style[property] = block.style[property];
                    }
                });
                // Always enforce grid layout for arrays (max 2 per row)
                imagesGrid.style.display = 'grid';
                imagesGrid.style.gridAutoFlow = 'row';
            }
            
            block.value.forEach(imgSrc => {
                const imgElement = document.createElement('img');
                imgElement.src = imgSrc;
                imgElement.alt = block.caption || 'Feature image';
                imgElement.style.cursor = 'pointer';
                imgElement.style.width = '100%';
                imgElement.style.height = 'auto';
                imgElement.style.objectFit = 'contain';
                imgElement.addEventListener('click', () => openImageModal(imgSrc, block.caption));
                imagesGrid.appendChild(imgElement);
            });
            container.appendChild(imagesGrid);
            
            if (block.caption) {
                const caption = document.createElement('p');
                caption.className = 'feature-caption';
                caption.textContent = block.caption;
                // Explicitly set caption to block, outside the grid
                caption.style.display = 'block';
                caption.style.width = '100%';
                caption.style.marginTop = '1rem';
                caption.style.clear = 'both'; // Ensure it's on a new line
                caption.style.position = 'relative'; // Ensure it's in normal flow
                container.appendChild(caption);
            }
            break;
            
        case 'video':
            container.className = 'feature-video';
            // Ensure container is always block-level, never flex or grid
            container.style.display = 'block';
            container.style.width = '100%';
            
            // Handle both single video (string) and multiple videos (array)
            if (Array.isArray(block.value)) {
                // Create a container for multiple videos using grid layout
                const videosContainer = document.createElement('div');
                videosContainer.className = 'videos-container';
                
                // Set grid to max 2 columns on desktop, 1 column on mobile
                videosContainer.style.display = 'grid';
                // Use repeat with auto-fit but ensure max 2 columns
                const numVideos = block.value.length;
                if (isMobile) {
                    // Mobile: always use 1 column
                    videosContainer.style.gridTemplateColumns = 'repeat(1, 1fr)';
                } else {
                    // Desktop: use 2 columns max
                    if (numVideos <= 2) {
                        videosContainer.style.gridTemplateColumns = `repeat(${numVideos}, 1fr)`;
                    } else {
                        // For more than 2 videos, use 2 columns
                        videosContainer.style.gridTemplateColumns = 'repeat(2, 1fr)';
                    }
                }
                videosContainer.style.maxWidth = '100%';
                videosContainer.style.gap = '3rem';
                videosContainer.style.gridAutoFlow = 'row';
                
                // Apply custom styles if provided (but preserve grid structure)
                if (block.style) {
                    // Apply styles except display, gridAutoFlow, and flexDirection (we'll set those explicitly)
                    Object.keys(block.style).forEach(property => {
                        if (property !== 'display' && property !== 'gridAutoFlow' && property !== 'flexDirection') {
                            videosContainer.style[property] = block.style[property];
                        }
                    });
                    // Always enforce grid layout for arrays (max 2 per row)
                    videosContainer.style.display = 'grid';
                    videosContainer.style.gridAutoFlow = 'row';
                }
                
                // Create a video element for each video in the array
                block.value.forEach((videoSrc, index) => {
                    const video = document.createElement('video');
                    video.controls = true;
                    const source = document.createElement('source');
                    source.src = videoSrc;
                    source.type = 'video/mp4';
                    video.appendChild(source);
                    
                    // Style video to fit in grid cell
                    video.style.width = '100%';
                    video.style.height = 'auto';
                    video.style.maxWidth = '100%';
                    video.style.objectFit = 'contain';
                    
                    videosContainer.appendChild(video);
                });
                
                container.appendChild(videosContainer);
            } else {
                // Single video
                const video = document.createElement('video');
                video.controls = true;
                const source = document.createElement('source');
                source.src = block.value;
                source.type = 'video/mp4';
                video.appendChild(source);
                container.appendChild(video);
            }
            
            if (block.caption) {
                const caption = document.createElement('p');
                caption.className = 'feature-caption';
                caption.textContent = block.caption;
                // Explicitly set caption to block, outside the grid/videos container
                caption.style.display = 'block';
                caption.style.width = '100%';
                caption.style.marginTop = '1rem';
                caption.style.clear = 'both'; // Ensure it's on a new line
                caption.style.position = 'relative'; // Ensure it's in normal flow
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
        // For images and videos, exclude display property to keep caption outside grid
        const isImagesOrVideos = block.type === 'images' || block.type === 'video';
        if (isImagesOrVideos) {
            // Apply styles except display to preserve block layout
            Object.keys(block.style).forEach(property => {
                if (property !== 'display') {
                    container.style[property] = block.style[property];
                }
            });
        } else {
            applyInlineStyles(container, block.style);
        }
    }
    
    return container;
}

// Helper function to apply inline styles from object
function applyInlineStyles(element, styleObj) {
    Object.keys(styleObj).forEach(property => {
        element.style[property] = styleObj[property];
    });
}

// Open image in full-size modal
function openImageModal(imageSrc, caption) {
    // Remove existing image modal if present
    const existingModal = document.getElementById('image-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal overlay
    const modal = document.createElement('div');
    modal.id = 'image-modal';
    modal.className = 'modal active';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.position = 'fixed';
    modal.style.zIndex = '10000';
    modal.style.left = '0';
    modal.style.top = '0';
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    modal.style.backdropFilter = 'blur(5px)';
    modal.style.cursor = 'pointer';
    
    // Create modal content container
    const modalContent = document.createElement('div');
    modalContent.style.position = 'relative';
    modalContent.style.maxWidth = '95%';
    modalContent.style.maxHeight = '95%';
    modalContent.style.display = 'flex';
    modalContent.style.flexDirection = 'column';
    modalContent.style.alignItems = 'center';
    modalContent.style.cursor = 'default';
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '-40px';
    closeBtn.style.right = '0';
    closeBtn.style.background = 'transparent';
    closeBtn.style.border = 'none';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '40px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.lineHeight = '1';
    closeBtn.style.padding = '0';
    closeBtn.style.width = '40px';
    closeBtn.style.height = '40px';
    closeBtn.style.zIndex = '10001';
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeImageModal();
    });
    
    // Create image element
    const fullImage = document.createElement('img');
    fullImage.src = imageSrc;
    fullImage.alt = caption || 'Full size image';
    fullImage.style.maxWidth = '100%';
    fullImage.style.maxHeight = '85vh';
    fullImage.style.objectFit = 'contain';
    fullImage.style.borderRadius = '8px';
    fullImage.style.boxShadow = '0 10px 50px rgba(0, 0, 0, 0.5)';
    
    // Create caption if provided
    if (caption) {
        const captionElement = document.createElement('p');
        captionElement.textContent = caption;
        captionElement.style.color = '#fff';
        captionElement.style.marginTop = '15px';
        captionElement.style.textAlign = 'center';
        captionElement.style.fontSize = '16px';
        modalContent.appendChild(captionElement);
    }
    
    // Assemble modal
    modalContent.appendChild(fullImage);
    modalContent.appendChild(closeBtn);
    modal.appendChild(modalContent);
    
    // Add to document
    document.body.appendChild(modal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeImageModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Close image modal
function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.remove();
    }
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
