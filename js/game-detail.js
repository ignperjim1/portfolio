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
            {
                title: 'Zombie Combat System',
                description: 'Advanced combat mechanics featuring multiple weapon types, zombie AI with different behaviors, and dynamic difficulty scaling. The system includes hit detection, damage calculation, and special effects.',
                details: 'Implemented using Unity\'s physics system with custom collision detection. Features include weapon switching, combo attacks, and environmental damage. The AI uses state machines for different zombie types.',
                codeSnippet: '// Zombie AI State Machine\npublic class ZombieAI : MonoBehaviour\n{\n    public enum ZombieState { Idle, Chasing, Attacking, Dead }\n    private ZombieState currentState;\n    \n    void Update() {\n        switch(currentState) {\n            case ZombieState.Chasing:\n                ChasePlayer();\n                break;\n            case ZombieState.Attacking:\n                AttackPlayer();\n                break;\n        }\n    }\n}',
                video: 'videos/AfterWorld/survival16_9.mp4'
            },
            {
                title: 'Resource Management',
                description: 'Comprehensive resource system including food, water, materials, and ammunition. Players must balance immediate survival needs with long-term base building goals.',
                details: 'Features dynamic resource consumption based on player actions, weather effects, and difficulty level. Includes resource trading between players and automated collection systems.',
                codeSnippet: '// Resource Management System\npublic class ResourceManager : MonoBehaviour\n{\n    [SerializeField] private Dictionary<ResourceType, int> resources;\n    \n    public bool ConsumeResource(ResourceType type, int amount) {\n        if (resources[type] >= amount) {\n            resources[type] -= amount;\n            return true;\n        }\n        return false;\n    }\n}',
                video: null
            },
            {
                title: 'Base Building',
                description: 'Modular base construction system allowing players to build and customize their shelters. Includes defensive structures, resource storage, and crafting stations.',
                details: 'Uses a grid-based placement system with snap-to-grid functionality. Features include structural integrity calculations, upgrade paths, and multiplayer synchronization.',
                codeSnippet: '// Base Building System\npublic class BuildingSystem : MonoBehaviour\n{\n    public void PlaceBuilding(Vector3 position, BuildingType type) {\n        if (CanPlaceBuilding(position, type)) {\n            Instantiate(buildingPrefabs[type], position, Quaternion.identity);\n            UpdateGrid(position, type);\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Character Customization',
                description: 'Extensive character creation and progression system with visual customization, skill trees, and equipment upgrades.',
                details: 'Features over 50 customization options including appearance, clothing, and equipment. Skill system affects gameplay mechanics and unlocks new abilities.',
                codeSnippet: '// Character Customization\npublic class CharacterCustomizer : MonoBehaviour\n{\n    public void ApplyCustomization(CharacterData data) {\n        SetAppearance(data.appearance);\n        SetSkills(data.skills);\n        SetEquipment(data.equipment);\n    }\n}',
                video: null
            },
            {
                title: 'Multiplayer Elements',
                description: 'Cooperative and competitive multiplayer features including shared bases, resource trading, and PvP combat zones.',
                details: 'Uses Photon Networking for real-time multiplayer. Features include voice chat, clan systems, and cross-platform play between mobile and PC.',
                codeSnippet: '// Multiplayer Sync\npublic class MultiplayerSync : MonoBehaviourPunPV\n{\n    void Update() {\n        if (photonView.IsMine) {\n            photonView.RPC("SyncPosition", RpcTarget.Others, transform.position);\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Progressive Difficulty',
                description: 'Dynamic difficulty system that adapts to player skill level and progression. Includes seasonal events and special challenges.',
                details: 'Uses machine learning algorithms to analyze player behavior and adjust difficulty accordingly. Features include adaptive enemy spawning and resource scarcity.',
                codeSnippet: '// Difficulty Manager\npublic class DifficultyManager : MonoBehaviour\n{\n    public void AdjustDifficulty(PlayerStats stats) {\n        float difficulty = CalculateDifficulty(stats);\n        UpdateEnemySpawnRate(difficulty);\n        UpdateResourceScarcity(difficulty);\n    }\n}',
                video: null
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
                description: 'Automated resource collection system that continues even when the player is offline. Features multiple resource types and exponential growth mechanics.',
                details: 'Implemented using Unity\'s coroutine system for background calculations. Includes offline time calculation and bonus multipliers for returning players.',
                codeSnippet: '// Idle Resource Generation\npublic class IdleResourceGenerator : MonoBehaviour\n{\n    public void CalculateOfflineProgress() {\n        float offlineTime = Time.time - lastPlayTime;\n        float resources = baseRate * offlineTime * multiplier;\n        AddResources(resources);\n    }\n}',
                video: 'videos/mining_playable.mp4'
            },
            {
                title: 'Factory Management System',
                description: 'Complex factory automation system where players build and upgrade production chains to maximize efficiency and profits.',
                details: 'Features modular factory components, conveyor belt systems, and automated resource routing. Includes factory templates and blueprint sharing.',
                codeSnippet: '// Factory Management\npublic class FactoryManager : MonoBehaviour\n{\n    public void UpgradeFactory(FactoryType type) {\n        factories[type].Upgrade();\n        RecalculateProduction();\n    }\n}',
                video: null
            },
            {
                title: 'Technology Tree',
                description: 'Progressive research system that unlocks new buildings, upgrades, and mechanics as players advance through the game.',
                details: 'Features branching research paths with prerequisites and unlock conditions. Includes visual progress indicators and research bonuses.',
                codeSnippet: '// Technology Tree\npublic class TechnologyTree : MonoBehaviour\n{\n    public bool UnlockTechnology(Technology tech) {\n        if (CanUnlock(tech)) {\n            tech.Unlock();\n            return true;\n        }\n        return false;\n    }\n}',
                video: null
            },
            {
                title: 'Prestige Mechanics',
                description: 'End-game progression system that allows players to reset their progress for permanent bonuses and new content.',
                details: 'Features prestige currency, permanent upgrades, and exclusive content. Includes prestige point calculations and bonus stacking.',
                codeSnippet: '// Prestige System\npublic class PrestigeManager : MonoBehaviour\n{\n    public void Prestige() {\n        float prestigePoints = CalculatePrestigePoints();\n        ResetProgress();\n        AddPrestigePoints(prestigePoints);\n    }\n}',
                video: null
            },
            {
                title: 'Achievement System',
                description: 'Comprehensive achievement system with over 100 different achievements covering all aspects of gameplay.',
                details: 'Features progress tracking, achievement categories, and reward systems. Includes hidden achievements and special event achievements.',
                codeSnippet: '// Achievement System\npublic class AchievementManager : MonoBehaviour\n{\n    public void CheckAchievements() {\n        foreach(var achievement in achievements) {\n            if (achievement.CheckCondition() && !achievement.IsUnlocked()) {\n                achievement.Unlock();\n            }\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Offline Progress',
                description: 'Advanced offline progression system that continues game calculations even when the app is closed.',
                details: 'Uses Unity\'s Application.persistentDataPath for data persistence. Includes offline time limits and progress acceleration bonuses.',
                codeSnippet: '// Offline Progress\npublic class OfflineProgress : MonoBehaviour\n{\n    void OnApplicationPause(bool pauseStatus) {\n        if (pauseStatus) {\n            SaveGame();\n            lastPauseTime = Time.time;\n        }\n    }\n}',
                video: null
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
                description: 'Comprehensive hospital management system where players oversee all aspects of medical facility operations.',
                details: 'Features patient flow management, room allocation, and emergency response systems. Includes real-time statistics and performance metrics.',
                codeSnippet: '// Hospital Management\npublic class HospitalManager : MonoBehaviour\n{\n    public void ProcessPatient(Patient patient) {\n        AssignRoom(patient);\n        ScheduleTreatment(patient);\n        UpdateStatistics();\n    }\n}',
                video: null
            },
            {
                title: 'Staff Hiring & Training',
                description: 'Advanced staff management system with hiring, training, and career progression mechanics.',
                details: 'Features different staff types (doctors, nurses, technicians), skill trees, and performance-based promotions.',
                codeSnippet: '// Staff Management\npublic class StaffManager : MonoBehaviour\n{\n    public void HireStaff(StaffType type, int level) {\n        var newStaff = CreateStaff(type, level);\n        staffList.Add(newStaff);\n        UpdateStaffUI();\n    }\n}',
                video: null
            },
            {
                title: 'Patient Care Systems',
                description: 'Realistic patient care simulation with diagnosis, treatment, and recovery mechanics.',
                details: 'Features medical procedures, treatment effectiveness, and patient satisfaction systems.',
                codeSnippet: '// Patient Care\npublic class PatientCare : MonoBehaviour\n{\n    public void DiagnosePatient(Patient patient) {\n        var diagnosis = RunTests(patient);\n        var treatment = GetTreatment(diagnosis);\n        StartTreatment(patient, treatment);\n    }\n}',
                video: null
            },
            {
                title: 'Facility Upgrades',
                description: 'Extensive upgrade system for hospital facilities, equipment, and infrastructure.',
                details: 'Features modular room upgrades, equipment purchases, and facility expansion options.',
                codeSnippet: '// Facility Upgrades\npublic class FacilityUpgrade : MonoBehaviour\n{\n    public void UpgradeFacility(FacilityType type) {\n        if (CanAffordUpgrade(type)) {\n            ApplyUpgrade(type);\n            DeductCost(type);\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Multi-location Expansion',
                description: 'Hospital network expansion system allowing players to open multiple facilities across different locations.',
                details: 'Features location-specific challenges, market analysis, and cross-facility resource sharing.',
                codeSnippet: '// Multi-location System\npublic class LocationManager : MonoBehaviour\n{\n    public void OpenNewLocation(Location location) {\n        if (CanAffordLocation(location)) {\n            CreateHospital(location);\n            UpdateNetworkUI();\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Idle Progression',
                description: 'Automated hospital operations that continue generating revenue and treating patients while offline.',
                details: 'Features offline patient processing, revenue generation, and staff efficiency calculations.',
                codeSnippet: '// Idle Progression\npublic class IdleProgression : MonoBehaviour\n{\n    public void CalculateOfflineRevenue() {\n        float offlineTime = GetOfflineTime();\n        float revenue = CalculateRevenue(offlineTime);\n        AddRevenue(revenue);\n    }\n}',
                video: null
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
                description: 'Real-time multiplayer combat system with low-latency networking and synchronized gameplay.',
                details: 'Uses Photon Networking for PvP battles. Features include hit detection, damage calculation, and anti-cheat systems.',
                codeSnippet: '// Multiplayer Combat\npublic class CombatSystem : MonoBehaviourPunPV\n{\n    [PunRPC]\n    public void DealDamage(int targetId, int damage) {\n        var target = PhotonView.Find(targetId);\n        target.GetComponent<PlayerHealth>().TakeDamage(damage);\n    }\n}',
                video: null
            },
            {
                title: 'Character Abilities',
                description: 'Unique character abilities system with special powers and cooldown mechanics.',
                details: 'Features over 20 different abilities across 8 character classes. Includes ability combinations and synergy effects.',
                codeSnippet: '// Character Abilities\npublic class AbilitySystem : MonoBehaviour\n{\n    public void UseAbility(AbilityType ability) {\n        if (CanUseAbility(ability)) {\n            ExecuteAbility(ability);\n            StartCooldown(ability);\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Dynamic Maps',
                description: 'Procedurally generated maps with interactive elements and environmental hazards.',
                details: 'Features 5 different map types with unique mechanics. Includes destructible environments and power-up spawns.',
                codeSnippet: '// Dynamic Maps\npublic class MapGenerator : MonoBehaviour\n{\n    public void GenerateMap(MapType type) {\n        var mapData = GetMapData(type);\n        CreateMap(mapData);\n        SpawnPowerUps();\n    }\n}',
                video: null
            },
            {
                title: 'Weapon Systems',
                description: 'Diverse weapon system with different weapon types and upgrade mechanics.',
                details: 'Features 15+ weapon types with unique stats and abilities. Includes weapon customization and rarity system.',
                codeSnippet: '// Weapon System\npublic class WeaponManager : MonoBehaviour\n{\n    public void EquipWeapon(Weapon weapon) {\n        currentWeapon = weapon;\n        UpdateWeaponUI();\n        ApplyWeaponStats();\n    }\n}',
                video: null
            },
            {
                title: 'Matchmaking',
                description: 'Intelligent matchmaking system that pairs players of similar skill levels.',
                details: 'Features skill-based matching, region selection, and queue time optimization.',
                codeSnippet: '// Matchmaking\npublic class MatchmakingManager : MonoBehaviour\n{\n    public void FindMatch() {\n        var players = GetPlayersInQueue();\n        var match = CreateMatch(players);\n        StartGame(match);\n    }\n}',
                video: null
            },
            {
                title: 'Progression System',
                description: 'Character progression system with experience points, levels, and unlockable content.',
                details: 'Features skill trees, cosmetic unlocks, and achievement rewards. Includes seasonal progression tracks.',
                codeSnippet: '// Progression System\npublic class ProgressionManager : MonoBehaviour\n{\n    public void AddExperience(int amount) {\n        experience += amount;\n        if (experience >= nextLevelExp) {\n            LevelUp();\n        }\n    }\n}',
                video: null
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
                description: 'Classic tower defense gameplay with strategic tower placement and enemy pathing systems.',
                details: 'Features multiple tower types, upgrade paths, and strategic positioning mechanics. Includes tower combinations and special abilities.',
                codeSnippet: '// Tower Defense\npublic class TowerDefense : MonoBehaviour\n{\n    public void PlaceTower(Vector3 position, TowerType type) {\n        if (CanPlaceTower(position)) {\n            var tower = Instantiate(towerPrefabs[type], position, Quaternion.identity);\n            towers.Add(tower);\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Enemy AI Systems',
                description: 'Advanced enemy AI with different behavior patterns and adaptive difficulty.',
                details: 'Features multiple enemy types with unique abilities, pathfinding, and group behavior mechanics.',
                codeSnippet: '// Enemy AI\npublic class EnemyAI : MonoBehaviour\n{\n    public void UpdateAI() {\n        if (health <= 0) {\n            Die();\n        } else {\n            MoveTowardsTarget();\n            AttackIfInRange();\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Resource Management',
                description: 'Strategic resource management system for tower construction and upgrades.',
                details: 'Features multiple resource types, resource generation, and economic decision-making mechanics.',
                codeSnippet: '// Resource Management\npublic class ResourceManager : MonoBehaviour\n{\n    public bool SpendResources(ResourceType type, int amount) {\n        if (resources[type] >= amount) {\n            resources[type] -= amount;\n            return true;\n        }\n        return false;\n    }\n}',
                video: null
            },
            {
                title: 'Wave Generation',
                description: 'Dynamic wave generation system with increasing difficulty and special events.',
                details: 'Features procedural wave generation, boss waves, and special event waves with unique mechanics.',
                codeSnippet: '// Wave Generation\npublic class WaveGenerator : MonoBehaviour\n{\n    public void GenerateWave(int waveNumber) {\n        var waveData = CalculateWaveData(waveNumber);\n        SpawnEnemies(waveData);\n        StartWaveTimer();\n    }\n}',
                video: null
            },
            {
                title: 'Upgrade Systems',
                description: 'Comprehensive upgrade system for towers, abilities, and base defenses.',
                details: 'Features multiple upgrade paths, upgrade costs, and permanent progression mechanics.',
                codeSnippet: '// Upgrade System\npublic class UpgradeSystem : MonoBehaviour\n{\n    public void UpgradeTower(Tower tower, UpgradeType upgrade) {\n        if (CanAffordUpgrade(upgrade)) {\n            tower.ApplyUpgrade(upgrade);\n            DeductCost(upgrade);\n        }\n    }\n}',
                video: null
            },
            {
                title: 'Strategic Gameplay',
                description: 'Deep strategic gameplay requiring careful planning and resource allocation.',
                details: 'Features multiple victory conditions, strategic depth, and replayability through different strategies.',
                codeSnippet: '// Strategic Gameplay\npublic class GameManager : MonoBehaviour\n{\n    public void CheckVictoryConditions() {\n        if (enemiesKilled >= requiredKills && baseHealth > 0) {\n            WinGame();\n        }\n    }\n}',
                video: null
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
    featureDiv.innerHTML = `
        <div class="feature-header" onclick="toggleFeature(${index})">
            <h3 class="feature-title">${feature.title}</h3>
            <i class="fas fa-chevron-down feature-chevron" id="chevron-${index}"></i>
        </div>
        <div class="feature-content" id="content-${index}">
            <p class="feature-description">${feature.description}</p>
            <div class="feature-details">
                <h4>Technical Details:</h4>
                <p>${feature.details}</p>
            </div>
            ${feature.codeSnippet ? `
                <div class="feature-code">
                    <h4>Code Example:</h4>
                    <pre><code>${feature.codeSnippet}</code></pre>
                </div>
            ` : ''}
            ${feature.video ? `
                <div class="feature-video">
                    <h4>Video Demo:</h4>
                    <video controls>
                        <source src="${feature.video}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            ` : ''}
        </div>
    `;
    return featureDiv;
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
