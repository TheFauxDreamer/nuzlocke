// Routes and locations for Pokemon games across generations 1-7
const gameRoutes = {
    // Generation 1
    kanto_gen1: {
        name: "Red/Blue/Yellow",
        generation: 1,
        routes: [
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
            "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18",
            "Route 19", "Route 20", "Route 21", "Route 22", "Route 23", "Route 24", "Route 25",
            "Viridian Forest", "Mt. Moon", "Rock Tunnel", "Pokemon Tower",
            "Safari Zone", "Seafoam Islands", "Pokemon Mansion", "Victory Road",
            "Cerulean Cave", "Power Plant", "Diglett's Cave"
        ]
    },
    
    // Generation 2
    johto_gen2: {
        name: "Gold/Silver/Crystal",
        generation: 2,
        routes: [
            "Route 29", "Route 30", "Route 31", "Route 32", "Route 33", "Route 34",
            "Route 35", "Route 36", "Route 37", "Route 38", "Route 39", "Route 40",
            "Route 41", "Route 42", "Route 43", "Route 44", "Route 45", "Route 46",
            "Route 47", "Route 48", "Route 26", "Route 27", "Route 28",
            "Dark Cave", "Sprout Tower", "Ruins of Alph", "Union Cave", "Slowpoke Well",
            "Ilex Forest", "Burned Tower", "Tin Tower", "Whirl Islands", "Mt. Mortar",
            "Ice Path", "Dragon's Den", "Mt. Silver", "Victory Road",
            // Kanto routes in Gen 2
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
            "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18",
            "Route 19", "Route 20", "Route 21", "Route 22", "Route 24", "Route 25",
            "Viridian Forest", "Mt. Moon", "Rock Tunnel", "Diglett's Cave", "Cerulean Cave"
        ]
    },
    
    // Generation 3 - Hoenn
    hoenn_gen3: {
        name: "Ruby/Sapphire/Emerald",
        generation: 3,
        routes: [
            "Route 101", "Route 102", "Route 103", "Route 104", "Route 105",
            "Route 106", "Route 107", "Route 108", "Route 109", "Route 110",
            "Route 111", "Route 112", "Route 113", "Route 114", "Route 115",
            "Route 116", "Route 117", "Route 118", "Route 119", "Route 120",
            "Route 121", "Route 122", "Route 123", "Route 124", "Route 125",
            "Route 126", "Route 127", "Route 128", "Route 129", "Route 130",
            "Route 131", "Route 132", "Route 133", "Route 134",
            "Petalburg Woods", "Rusturf Tunnel", "Granite Cave", "Abandoned Ship",
            "New Mauville", "Safari Zone", "Mt. Pyre", "Shoal Cave",
            "Seafloor Cavern", "Cave of Origin", "Victory Road", "Sky Pillar"
        ]
    },
    
    // Generation 3 - Kanto Remakes
    kanto_gen3: {
        name: "Fire Red/Leaf Green",
        generation: 3,
        routes: [
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
            "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18",
            "Route 19", "Route 20", "Route 21", "Route 22", "Route 23", "Route 24", "Route 25",
            "Viridian Forest", "Mt. Moon", "Rock Tunnel", "Pokemon Tower",
            "Safari Zone", "Silph Co.", "Pokemon Mansion", "Victory Road", "Seafoam Islands",
            "Power Plant", "Diglett's Cave", "Cerulean Cave",
            // Sevii Islands
            "Kindle Road", "Treasure Beach", "Cape Brink", "Bond Bridge", "Three Isle Port",
            "Five Isle Meadow", "Memorial Pillar", "Water Labyrinth", "Resort Gorgeous",
            "Water Path", "Green Path", "Outcast Island", "Ruin Valley", "Trainer Tower",
            "Canyon Entrance", "Sevault Canyon", "Tanoby Ruins", "Mt. Ember",
            "Berry Forest", "Icefall Cave", "Rocket Warehouse", "Lost Cave", "Pattern Bush",
            "Altering Cave", "Dotted Hole"
        ]
    },
    
    // Generation 4 - Sinnoh
    sinnoh_gen4: {
        name: "Diamond/Pearl/Platinum",
        generation: 4,
        routes: [
            "Route 201", "Route 202", "Route 203", "Route 204", "Route 205",
            "Route 206", "Route 207", "Route 208", "Route 209", "Route 210",
            "Route 211", "Route 212", "Route 213", "Route 214", "Route 215",
            "Route 216", "Route 217", "Route 218", "Route 219", "Route 220",
            "Route 221", "Route 222", "Route 223", "Route 224", "Route 225",
            "Route 226", "Route 227", "Route 228", "Route 229", "Route 230",
            "Oreburgh Gate", "Oreburgh Mine", "Valley Windworks", "Eterna Forest",
            "Fuego Ironworks", "Mt. Coronet", "Great Marsh", "Solaceon Ruins",
            "Lost Tower", "Hallowed Tower", "Sendoff Spring", "Turnback Cave",
            "Snowpoint Temple", "Victory Road", "Ravaged Path", "Floaroma Meadow",
            "Stark Mountain", "Resort Area", "Old Chateau", "Wayward Cave",
            "Ruin Maniac Cave", "Maniac Tunnel", "Trophy Garden", "Iron Island",
            "Lake Verity", "Lake Valor", "Lake Acuity", "Newmoon Island", "Flower Paradise"
        ]
    },
    
    // Generation 4 - Johto Remakes
    johto_gen4: {
        name: "HeartGold/SoulSilver",
        generation: 4,
        routes: [
            "Route 29", "Route 30", "Route 31", "Route 32", "Route 33", "Route 34",
            "Route 35", "Route 36", "Route 37", "Route 38", "Route 39", "Route 40",
            "Route 41", "Route 42", "Route 43", "Route 44", "Route 45", "Route 46",
            "Route 47", "Route 48", "Route 26", "Route 27", "Route 28",
            "Dark Cave", "Sprout Tower", "Ruins of Alph", "Union Cave", "Slowpoke Well",
            "Ilex Forest", "Burned Tower", "Bell Tower", "Whirl Islands", "Mt. Mortar",
            "Ice Path", "Dragon's Den", "Mt. Silver", "Victory Road", "National Park",
            "Cliff Cave", "Frontier Access", "Cliff Edge Gate", "Safari Zone",
            // Kanto routes
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
            "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18",
            "Route 19", "Route 20", "Route 21", "Route 22", "Route 24", "Route 25",
            "Viridian Forest", "Mt. Moon", "Rock Tunnel", "Diglett's Cave", "Cerulean Cave",
            "Seafoam Islands", "Pokemon Mansion"
        ]
    },
    
    // Generation 5 - Unova
    unova_gen5: {
        name: "Black/White",
        generation: 5,
        routes: [
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
            "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18",
            "Dreamyard", "Wellspring Cave", "Pinwheel Forest", "Desert Resort",
            "Relic Castle", "Cold Storage", "Mistralton Cave", "Chargestone Cave",
            "Twist Mountain", "Dragonspiral Tower", "Moor of Icirrus", "Challenger's Cave",
            "Victory Road", "Giant Chasm", "Abundant Shrine", "Lostlorn Forest",
            "Trial Chamber", "Guidance Chamber", "Entree Forest", "P2 Laboratory",
            "Marvelous Bridge", "Village Bridge", "Tubeline Bridge", "Driftveil Drawbridge",
            "Skyarrow Bridge"
        ]
    },
    
    // Generation 5 - Unova Sequels
    unova2_gen5: {
        name: "Black 2/White 2",
        generation: 5,
        routes: [
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 11", "Route 12", "Route 13",
            "Route 14", "Route 15", "Route 16", "Route 17", "Route 18", "Route 19",
            "Route 20", "Route 21", "Route 22", "Route 23",
            "Floccesy Ranch", "Virbank Complex", "Castelia Sewers", "Relic Passage",
            "Desert Resort", "Relic Castle", "Lostlorn Forest", "Chargestone Cave",
            "Mistralton Cave", "Celestial Tower", "Twist Mountain", "Strange House",
            "Reversal Mountain", "Undella Bay", "Seaside Cave", "Giant Chasm",
            "Victory Road", "Plasma Frigate", "Nature Preserve", "Dragonspiral Tower",
            "Moor of Icirrus", "Pinwheel Forest", "Dreamyard", "Wellspring Cave",
            "Trial Chamber", "Clay Tunnel", "Underground Ruins", "Rocky Mountain Room"
        ]
    },
    
    // Generation 6 - Kalos
    kalos_gen6: {
        name: "X/Y",
        generation: 6,
        routes: [
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
            "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18",
            "Route 19", "Route 20", "Route 21", "Route 22",
            "Santalune Forest", "Connecting Cave", "Glittering Cave", "Reflection Cave",
            "Tower of Mastery", "Azure Bay", "Sea Spirit's Den", "Kalos Power Plant",
            "Pokeball Factory", "Lost Hotel", "Frost Cavern", "Terminus Cave",
            "Pokemon Village", "Victory Road", "Unknown Dungeon", "Friend Safari",
            "Chamber of Emptiness", "Battle Chateau", "Parfum Palace"
        ]
    },
    
    // Generation 6 - Hoenn Remakes
    hoenn_gen6: {
        name: "Omega Ruby/Alpha Sapphire",
        generation: 6,
        routes: [
            "Route 101", "Route 102", "Route 103", "Route 104", "Route 105",
            "Route 106", "Route 107", "Route 108", "Route 109", "Route 110",
            "Route 111", "Route 112", "Route 113", "Route 114", "Route 115",
            "Route 116", "Route 117", "Route 118", "Route 119", "Route 120",
            "Route 121", "Route 122", "Route 123", "Route 124", "Route 125",
            "Route 126", "Route 127", "Route 128", "Route 129", "Route 130",
            "Route 131", "Route 132", "Route 133", "Route 134",
            "Petalburg Woods", "Rusturf Tunnel", "Granite Cave", "Abandoned Ship",
            "New Mauville", "Safari Zone", "Mt. Pyre", "Shoal Cave", "Seafloor Cavern",
            "Cave of Origin", "Victory Road", "Sky Pillar", "Meteor Falls",
            "Fiery Path", "Jagged Pass", "Desert Underpass", "Artisan Cave",
            "Altering Cave", "Mirage Forest", "Mirage Cave", "Mirage Island",
            "Mirage Mountain", "Crescent Isle", "Fabled Cave", "Gnarled Den",
            "Nameless Cavern", "Pathless Plain", "Trackless Forest", "Secret Islet",
            "Secret Shore", "Secret Meadow", "Soaring in the Sky"
        ]
    },
    
    // Generation 7 - Alola
    alola_gen7: {
        name: "Sun/Moon",
        generation: 7,
        routes: [
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
            "Route 13", "Route 14", "Route 15", "Route 16", "Route 17",
            "Melemele Sea", "Hau'oli Outskirts", "Kala'e Bay", "Melemele Meadow",
            "Seaward Cave", "Ten Carat Hill", "Verdant Cavern", "Hano Grand Resort",
            "Hano Beach", "Akala Outskirts", "Brooklet Hill", "Wela Volcano Park",
            "Dividing Peak Tunnel", "Diglett's Tunnel", "Lush Jungle", "Memorial Hill",
            "Malie Garden", "Mount Hokulani", "Blush Mountain", "Secluded Shore",
            "Tapu Village", "Mount Lanakila", "Vast Poni Canyon", "Poni Plains",
            "Poni Meadow", "Poni Grove", "Poni Wilds", "Ancient Poni Path",
            "Poni Breaker Coast", "Ruins of Conflict", "Ruins of Life",
            "Ruins of Abundance", "Ruins of Hope", "Aether Paradise", "Exeggutor Island",
            "Resolution Cave", "Lake of the Sunne", "Lake of the Moone", "Altar of the Sunne",
            "Altar of the Moone", "Ultra Space"
        ]
    },
    
    // Generation 7 - Alola Enhanced
    alola_usum_gen7: {
        name: "Ultra Sun/Ultra Moon",
        generation: 7,
        routes: [
            "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6",
            "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12",
            "Route 13", "Route 14", "Route 15", "Route 16", "Route 17",
            "Melemele Sea", "Hau'oli Outskirts", "Kala'e Bay", "Melemele Meadow",
            "Seaward Cave", "Ten Carat Hill", "Verdant Cavern", "Hano Grand Resort",
            "Hano Beach", "Akala Outskirts", "Brooklet Hill", "Wela Volcano Park",
            "Dividing Peak Tunnel", "Diglett's Tunnel", "Lush Jungle", "Memorial Hill",
            "Malie Garden", "Mount Hokulani", "Blush Mountain", "Secluded Shore",
            "Tapu Village", "Mount Lanakila", "Vast Poni Canyon", "Poni Plains",
            "Poni Meadow", "Poni Grove", "Poni Wilds", "Ancient Poni Path",
            "Poni Breaker Coast", "Ruins of Conflict", "Ruins of Life",
            "Ruins of Abundance", "Ruins of Hope", "Aether Paradise", "Exeggutor Island",
            "Resolution Cave", "Sandy Cave", "Lake of the Sunne", "Lake of the Moone",
            "Ultra Space", "Ultra Wormhole", "Ultra Jungle", "Ultra Desert",
            "Ultra Deep Sea", "Ultra Plant", "Ultra Forest", "Ultra Crater",
            "Ultra Ruin", "Ultra Space Wilds", "Ultra Megalopolis"
        ]
    }
};

// Default routes (for backwards compatibility)
let routes = gameRoutes.hoenn_gen3.routes;