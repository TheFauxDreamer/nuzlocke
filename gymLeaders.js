// Gym Leaders and Elite Four data for generations 1-7
// Includes level caps and progression tracking

const gymLeadersByGame = {
    // Generation 1 - Red/Blue/Yellow
    kanto_gen1: {
        name: "Red/Blue/Yellow",
        generation: 1,
        leaders: [
            { id: 'brock', name: 'Brock', location: 'Pewter City', type: 'Rock', levelCap: 14, badge: 'Boulder Badge' },
            { id: 'misty', name: 'Misty', location: 'Cerulean City', type: 'Water', levelCap: 21, badge: 'Cascade Badge' },
            { id: 'surge', name: 'Lt. Surge', location: 'Vermilion City', type: 'Electric', levelCap: 24, badge: 'Thunder Badge' },
            { id: 'erika', name: 'Erika', location: 'Celadon City', type: 'Grass', levelCap: 29, badge: 'Rainbow Badge' },
            { id: 'koga', name: 'Koga', location: 'Fuchsia City', type: 'Poison', levelCap: 43, badge: 'Soul Badge' },
            { id: 'sabrina', name: 'Sabrina', location: 'Saffron City', type: 'Psychic', levelCap: 43, badge: 'Marsh Badge' },
            { id: 'blaine', name: 'Blaine', location: 'Cinnabar Island', type: 'Fire', levelCap: 47, badge: 'Volcano Badge' },
            { id: 'giovanni', name: 'Giovanni', location: 'Viridian City', type: 'Ground', levelCap: 50, badge: 'Earth Badge' }
        ],
        eliteFour: [
            { id: 'lorelei', name: 'Lorelei', type: 'Ice', levelCap: 54, title: 'Elite Four' },
            { id: 'bruno', name: 'Bruno', type: 'Fighting', levelCap: 56, title: 'Elite Four' },
            { id: 'agatha', name: 'Agatha', type: 'Ghost', levelCap: 56, title: 'Elite Four' },
            { id: 'lance', name: 'Lance', type: 'Dragon', levelCap: 62, title: 'Elite Four' },
            { id: 'champion_blue', name: 'Blue', type: 'Mixed', levelCap: 65, title: 'Champion' }
        ]
    },

    // Generation 2 - Gold/Silver/Crystal
    johto_gen2: {
        name: "Gold/Silver/Crystal",
        generation: 2,
        leaders: [
            { id: 'falkner', name: 'Falkner', location: 'Violet City', type: 'Flying', levelCap: 9, badge: 'Zephyr Badge' },
            { id: 'bugsy', name: 'Bugsy', location: 'Azalea Town', type: 'Bug', levelCap: 15, badge: 'Hive Badge' },
            { id: 'whitney', name: 'Whitney', location: 'Goldenrod City', type: 'Normal', levelCap: 18, badge: 'Plain Badge' },
            { id: 'morty', name: 'Morty', location: 'Ecruteak City', type: 'Ghost', levelCap: 25, badge: 'Fog Badge' },
            { id: 'chuck', name: 'Chuck', location: 'Cianwood City', type: 'Fighting', levelCap: 29, badge: 'Storm Badge' },
            { id: 'jasmine', name: 'Jasmine', location: 'Olivine City', type: 'Steel', levelCap: 35, badge: 'Mineral Badge' },
            { id: 'pryce', name: 'Pryce', location: 'Mahogany Town', type: 'Ice', levelCap: 34, badge: 'Glacier Badge' },
            { id: 'clair', name: 'Clair', location: 'Blackthorn City', type: 'Dragon', levelCap: 41, badge: 'Rising Badge' }
        ],
        eliteFour: [
            { id: 'will', name: 'Will', type: 'Psychic', levelCap: 40, title: 'Elite Four' },
            { id: 'koga_e4', name: 'Koga', type: 'Poison', levelCap: 42, title: 'Elite Four' },
            { id: 'bruno_e4', name: 'Bruno', type: 'Fighting', levelCap: 42, title: 'Elite Four' },
            { id: 'karen', name: 'Karen', type: 'Dark', levelCap: 47, title: 'Elite Four' },
            { id: 'champion_lance', name: 'Lance', type: 'Dragon', levelCap: 50, title: 'Champion' }
        ],
        // Kanto portion for post-game
        kantoLeaders: [
            { id: 'surge_kanto', name: 'Lt. Surge', location: 'Vermilion City', type: 'Electric', levelCap: 51, badge: 'Thunder Badge', region: 'Kanto' },
            { id: 'sabrina_kanto', name: 'Sabrina', location: 'Saffron City', type: 'Psychic', levelCap: 53, badge: 'Marsh Badge', region: 'Kanto' },
            { id: 'misty_kanto', name: 'Misty', location: 'Cerulean City', type: 'Water', levelCap: 54, badge: 'Cascade Badge', region: 'Kanto' },
            { id: 'erika_kanto', name: 'Erika', location: 'Celadon City', type: 'Grass', levelCap: 56, badge: 'Rainbow Badge', region: 'Kanto' },
            { id: 'janine', name: 'Janine', location: 'Fuchsia City', type: 'Poison', levelCap: 58, badge: 'Soul Badge', region: 'Kanto' },
            { id: 'brock_kanto', name: 'Brock', location: 'Pewter City', type: 'Rock', levelCap: 56, badge: 'Boulder Badge', region: 'Kanto' },
            { id: 'blaine_kanto', name: 'Blaine', location: 'Cinnabar Island', type: 'Fire', levelCap: 59, badge: 'Volcano Badge', region: 'Kanto' },
            { id: 'blue_gym', name: 'Blue', location: 'Viridian City', type: 'Mixed', levelCap: 56, badge: 'Earth Badge', region: 'Kanto' }
        ]
    },

    // Generation 3 - Ruby/Sapphire/Emerald
    hoenn_gen3: {
        name: "Ruby/Sapphire/Emerald",
        generation: 3,
        leaders: [
            { id: 'roxanne', name: 'Roxanne', location: 'Rustboro City', type: 'Rock', levelCap: 14, badge: 'Stone Badge' },
            { id: 'brawly', name: 'Brawly', location: 'Dewford Town', type: 'Fighting', levelCap: 18, badge: 'Knuckle Badge' },
            { id: 'wattson', name: 'Wattson', location: 'Mauville City', type: 'Electric', levelCap: 22, badge: 'Dynamo Badge' },
            { id: 'flannery', name: 'Flannery', location: 'Lavaridge Town', type: 'Fire', levelCap: 26, badge: 'Heat Badge' },
            { id: 'norman', name: 'Norman', location: 'Petalburg City', type: 'Normal', levelCap: 31, badge: 'Balance Badge' },
            { id: 'winona', name: 'Winona', location: 'Fortree City', type: 'Flying', levelCap: 33, badge: 'Feather Badge' },
            { id: 'tate_liza', name: 'Tate & Liza', location: 'Mossdeep City', type: 'Psychic', levelCap: 42, badge: 'Mind Badge' },
            { id: 'wallace_juan', name: 'Wallace/Juan', location: 'Sootopolis City', type: 'Water', levelCap: 46, badge: 'Rain Badge' }
        ],
        eliteFour: [
            { id: 'sidney', name: 'Sidney', type: 'Dark', levelCap: 46, title: 'Elite Four' },
            { id: 'phoebe', name: 'Phoebe', type: 'Ghost', levelCap: 48, title: 'Elite Four' },
            { id: 'glacia', name: 'Glacia', type: 'Ice', levelCap: 50, title: 'Elite Four' },
            { id: 'drake', name: 'Drake', type: 'Dragon', levelCap: 53, title: 'Elite Four' },
            { id: 'champion_steven_wallace', name: 'Steven/Wallace', type: 'Steel/Water', levelCap: 57, title: 'Champion' }
        ]
    },

    // Generation 3 - FireRed/LeafGreen
    kanto_gen3: {
        name: "Fire Red/Leaf Green",
        generation: 3,
        leaders: [
            { id: 'brock_frlg', name: 'Brock', location: 'Pewter City', type: 'Rock', levelCap: 14, badge: 'Boulder Badge' },
            { id: 'misty_frlg', name: 'Misty', location: 'Cerulean City', type: 'Water', levelCap: 21, badge: 'Cascade Badge' },
            { id: 'surge_frlg', name: 'Lt. Surge', location: 'Vermilion City', type: 'Electric', levelCap: 24, badge: 'Thunder Badge' },
            { id: 'erika_frlg', name: 'Erika', location: 'Celadon City', type: 'Grass', levelCap: 29, badge: 'Rainbow Badge' },
            { id: 'koga_frlg', name: 'Koga', location: 'Fuchsia City', type: 'Poison', levelCap: 43, badge: 'Soul Badge' },
            { id: 'sabrina_frlg', name: 'Sabrina', location: 'Saffron City', type: 'Psychic', levelCap: 43, badge: 'Marsh Badge' },
            { id: 'blaine_frlg', name: 'Blaine', location: 'Cinnabar Island', type: 'Fire', levelCap: 47, badge: 'Volcano Badge' },
            { id: 'giovanni_frlg', name: 'Giovanni', location: 'Viridian City', type: 'Ground', levelCap: 50, badge: 'Earth Badge' }
        ],
        eliteFour: [
            { id: 'lorelei_frlg', name: 'Lorelei', type: 'Ice', levelCap: 54, title: 'Elite Four' },
            { id: 'bruno_frlg', name: 'Bruno', type: 'Fighting', levelCap: 56, title: 'Elite Four' },
            { id: 'agatha_frlg', name: 'Agatha', type: 'Ghost', levelCap: 56, title: 'Elite Four' },
            { id: 'lance_frlg', name: 'Lance', type: 'Dragon', levelCap: 62, title: 'Elite Four' },
            { id: 'champion_blue_frlg', name: 'Blue', type: 'Mixed', levelCap: 65, title: 'Champion' }
        ]
    },

    // Generation 4 - Diamond/Pearl/Platinum
    sinnoh_gen4: {
        name: "Diamond/Pearl/Platinum",
        generation: 4,
        leaders: [
            { id: 'roark', name: 'Roark', location: 'Oreburgh City', type: 'Rock', levelCap: 14, badge: 'Coal Badge' },
            { id: 'gardenia', name: 'Gardenia', location: 'Eterna City', type: 'Grass', levelCap: 22, badge: 'Forest Badge' },
            { id: 'maylene', name: 'Maylene', location: 'Veilstone City', type: 'Fighting', levelCap: 30, badge: 'Cobble Badge' },
            { id: 'crasher_wake', name: 'Crasher Wake', location: 'Pastoria City', type: 'Water', levelCap: 33, badge: 'Fen Badge' },
            { id: 'fantina', name: 'Fantina', location: 'Hearthome City', type: 'Ghost', levelCap: 35, badge: 'Relic Badge' },
            { id: 'byron', name: 'Byron', location: 'Canalave City', type: 'Steel', levelCap: 41, badge: 'Mine Badge' },
            { id: 'candice', name: 'Candice', location: 'Snowpoint City', type: 'Ice', levelCap: 45, badge: 'Icicle Badge' },
            { id: 'volkner', name: 'Volkner', location: 'Sunyshore City', type: 'Electric', levelCap: 48, badge: 'Beacon Badge' }
        ],
        eliteFour: [
            { id: 'aaron', name: 'Aaron', type: 'Bug', levelCap: 53, title: 'Elite Four' },
            { id: 'bertha', name: 'Bertha', type: 'Ground', levelCap: 55, title: 'Elite Four' },
            { id: 'flint', name: 'Flint', type: 'Fire', levelCap: 57, title: 'Elite Four' },
            { id: 'lucian', name: 'Lucian', type: 'Psychic', levelCap: 59, title: 'Elite Four' },
            { id: 'champion_cynthia', name: 'Cynthia', type: 'Mixed', levelCap: 62, title: 'Champion' }
        ]
    },

    // Generation 4 - HeartGold/SoulSilver
    johto_gen4: {
        name: "HeartGold/SoulSilver",
        generation: 4,
        leaders: [
            { id: 'falkner_hgss', name: 'Falkner', location: 'Violet City', type: 'Flying', levelCap: 9, badge: 'Zephyr Badge' },
            { id: 'bugsy_hgss', name: 'Bugsy', location: 'Azalea Town', type: 'Bug', levelCap: 15, badge: 'Hive Badge' },
            { id: 'whitney_hgss', name: 'Whitney', location: 'Goldenrod City', type: 'Normal', levelCap: 18, badge: 'Plain Badge' },
            { id: 'morty_hgss', name: 'Morty', location: 'Ecruteak City', type: 'Ghost', levelCap: 25, badge: 'Fog Badge' },
            { id: 'chuck_hgss', name: 'Chuck', location: 'Cianwood City', type: 'Fighting', levelCap: 29, badge: 'Storm Badge' },
            { id: 'jasmine_hgss', name: 'Jasmine', location: 'Olivine City', type: 'Steel', levelCap: 35, badge: 'Mineral Badge' },
            { id: 'pryce_hgss', name: 'Pryce', location: 'Mahogany Town', type: 'Ice', levelCap: 34, badge: 'Glacier Badge' },
            { id: 'clair_hgss', name: 'Clair', location: 'Blackthorn City', type: 'Dragon', levelCap: 41, badge: 'Rising Badge' }
        ],
        eliteFour: [
            { id: 'will_hgss', name: 'Will', type: 'Psychic', levelCap: 40, title: 'Elite Four' },
            { id: 'koga_hgss', name: 'Koga', type: 'Poison', levelCap: 42, title: 'Elite Four' },
            { id: 'bruno_hgss', name: 'Bruno', type: 'Fighting', levelCap: 42, title: 'Elite Four' },
            { id: 'karen_hgss', name: 'Karen', type: 'Dark', levelCap: 47, title: 'Elite Four' },
            { id: 'champion_lance_hgss', name: 'Lance', type: 'Dragon', levelCap: 50, title: 'Champion' }
        ],
        kantoLeaders: [
            { id: 'surge_hgss', name: 'Lt. Surge', location: 'Vermilion City', type: 'Electric', levelCap: 51, badge: 'Thunder Badge', region: 'Kanto' },
            { id: 'sabrina_hgss', name: 'Sabrina', location: 'Saffron City', type: 'Psychic', levelCap: 53, badge: 'Marsh Badge', region: 'Kanto' },
            { id: 'misty_hgss', name: 'Misty', location: 'Cerulean City', type: 'Water', levelCap: 54, badge: 'Cascade Badge', region: 'Kanto' },
            { id: 'erika_hgss', name: 'Erika', location: 'Celadon City', type: 'Grass', levelCap: 56, badge: 'Rainbow Badge', region: 'Kanto' },
            { id: 'janine_hgss', name: 'Janine', location: 'Fuchsia City', type: 'Poison', levelCap: 58, badge: 'Soul Badge', region: 'Kanto' },
            { id: 'brock_hgss', name: 'Brock', location: 'Pewter City', type: 'Rock', levelCap: 56, badge: 'Boulder Badge', region: 'Kanto' },
            { id: 'blaine_hgss', name: 'Blaine', location: 'Cinnabar Island', type: 'Fire', levelCap: 59, badge: 'Volcano Badge', region: 'Kanto' },
            { id: 'blue_hgss', name: 'Blue', location: 'Viridian City', type: 'Mixed', levelCap: 56, badge: 'Earth Badge', region: 'Kanto' }
        ]
    },

    // Generation 5 - Black/White
    unova_gen5: {
        name: "Black/White",
        generation: 5,
        leaders: [
            { id: 'cilan_chili_cress', name: 'Cilan/Chili/Cress', location: 'Striaton City', type: 'Grass/Fire/Water', levelCap: 14, badge: 'Trio Badge' },
            { id: 'lenora', name: 'Lenora', location: 'Nacrene City', type: 'Normal', levelCap: 20, badge: 'Basic Badge' },
            { id: 'burgh', name: 'Burgh', location: 'Castelia City', type: 'Bug', levelCap: 25, badge: 'Insect Badge' },
            { id: 'elesa', name: 'Elesa', location: 'Nimbasa City', type: 'Electric', levelCap: 28, badge: 'Bolt Badge' },
            { id: 'clay', name: 'Clay', location: 'Driftveil City', type: 'Ground', levelCap: 31, badge: 'Quake Badge' },
            { id: 'skyla', name: 'Skyla', location: 'Mistralton City', type: 'Flying', levelCap: 37, badge: 'Jet Badge' },
            { id: 'brycen', name: 'Brycen', location: 'Icirrus City', type: 'Ice', levelCap: 41, badge: 'Freeze Badge' },
            { id: 'drayden_iris', name: 'Drayden/Iris', location: 'Opelucid City', type: 'Dragon', levelCap: 44, badge: 'Legend Badge' }
        ],
        eliteFour: [
            { id: 'shauntal', name: 'Shauntal', type: 'Ghost', levelCap: 48, title: 'Elite Four' },
            { id: 'grimsley', name: 'Grimsley', type: 'Dark', levelCap: 48, title: 'Elite Four' },
            { id: 'caitlin', name: 'Caitlin', type: 'Psychic', levelCap: 48, title: 'Elite Four' },
            { id: 'marshal', name: 'Marshal', type: 'Fighting', levelCap: 48, title: 'Elite Four' },
            { id: 'champion_alder', name: 'Alder', type: 'Mixed', levelCap: 52, title: 'Champion' }
        ]
    },

    // Generation 5 - Black 2/White 2
    unova2_gen5: {
        name: "Black 2/White 2",
        generation: 5,
        leaders: [
            { id: 'cheren', name: 'Cheren', location: 'Aspertia City', type: 'Normal', levelCap: 12, badge: 'Basic Badge' },
            { id: 'roxie', name: 'Roxie', location: 'Virbank City', type: 'Poison', levelCap: 17, badge: 'Toxic Badge' },
            { id: 'burgh_b2w2', name: 'Burgh', location: 'Castelia City', type: 'Bug', levelCap: 25, badge: 'Insect Badge' },
            { id: 'elesa_b2w2', name: 'Elesa', location: 'Nimbasa City', type: 'Electric', levelCap: 28, badge: 'Bolt Badge' },
            { id: 'clay_b2w2', name: 'Clay', location: 'Driftveil City', type: 'Ground', levelCap: 31, badge: 'Quake Badge' },
            { id: 'skyla_b2w2', name: 'Skyla', location: 'Mistralton City', type: 'Flying', levelCap: 37, badge: 'Jet Badge' },
            { id: 'drayden_b2w2', name: 'Drayden', location: 'Opelucid City', type: 'Dragon', levelCap: 44, badge: 'Legend Badge' },
            { id: 'marlon', name: 'Marlon', location: 'Humilau City', type: 'Water', levelCap: 49, badge: 'Wave Badge' }
        ],
        eliteFour: [
            { id: 'shauntal_b2w2', name: 'Shauntal', type: 'Ghost', levelCap: 56, title: 'Elite Four' },
            { id: 'grimsley_b2w2', name: 'Grimsley', type: 'Dark', levelCap: 56, title: 'Elite Four' },
            { id: 'caitlin_b2w2', name: 'Caitlin', type: 'Psychic', levelCap: 56, title: 'Elite Four' },
            { id: 'marshal_b2w2', name: 'Marshal', type: 'Fighting', levelCap: 56, title: 'Elite Four' },
            { id: 'champion_iris', name: 'Iris', type: 'Dragon', levelCap: 59, title: 'Champion' }
        ]
    },

    // Generation 6 - X/Y
    kalos_gen6: {
        name: "X/Y",
        generation: 6,
        leaders: [
            { id: 'viola', name: 'Viola', location: 'Santalune City', type: 'Bug', levelCap: 14, badge: 'Bug Badge' },
            { id: 'grant', name: 'Grant', location: 'Cyllage City', type: 'Rock', levelCap: 25, badge: 'Cliff Badge' },
            { id: 'korrina', name: 'Korrina', location: 'Shalour City', type: 'Fighting', levelCap: 32, badge: 'Rumble Badge' },
            { id: 'ramos', name: 'Ramos', location: 'Coumarine City', type: 'Grass', levelCap: 35, badge: 'Plant Badge' },
            { id: 'clemont', name: 'Clemont', location: 'Lumiose City', type: 'Electric', levelCap: 37, badge: 'Voltage Badge' },
            { id: 'valerie', name: 'Valerie', location: 'Laverre City', type: 'Fairy', levelCap: 39, badge: 'Fairy Badge' },
            { id: 'olympia', name: 'Olympia', location: 'Anistar City', type: 'Psychic', levelCap: 44, badge: 'Psychic Badge' },
            { id: 'wulfric', name: 'Wulfric', location: 'Snowbelle City', type: 'Ice', levelCap: 47, badge: 'Iceberg Badge' }
        ],
        eliteFour: [
            { id: 'malva', name: 'Malva', type: 'Fire', levelCap: 63, title: 'Elite Four' },
            { id: 'siebold', name: 'Siebold', type: 'Water', levelCap: 63, title: 'Elite Four' },
            { id: 'wikstrom', name: 'Wikstrom', type: 'Steel', levelCap: 63, title: 'Elite Four' },
            { id: 'drasna', name: 'Drasna', type: 'Dragon', levelCap: 63, title: 'Elite Four' },
            { id: 'champion_diantha', name: 'Diantha', type: 'Mixed', levelCap: 68, title: 'Champion' }
        ]
    },

    // Generation 6 - Omega Ruby/Alpha Sapphire
    hoenn_gen6: {
        name: "Omega Ruby/Alpha Sapphire",
        generation: 6,
        leaders: [
            { id: 'roxanne_oras', name: 'Roxanne', location: 'Rustboro City', type: 'Rock', levelCap: 16, badge: 'Stone Badge' },
            { id: 'brawly_oras', name: 'Brawly', location: 'Dewford Town', type: 'Fighting', levelCap: 18, badge: 'Knuckle Badge' },
            { id: 'wattson_oras', name: 'Wattson', location: 'Mauville City', type: 'Electric', levelCap: 24, badge: 'Dynamo Badge' },
            { id: 'flannery_oras', name: 'Flannery', location: 'Lavaridge Town', type: 'Fire', levelCap: 26, badge: 'Heat Badge' },
            { id: 'norman_oras', name: 'Norman', location: 'Petalburg City', type: 'Normal', levelCap: 31, badge: 'Balance Badge' },
            { id: 'winona_oras', name: 'Winona', location: 'Fortree City', type: 'Flying', levelCap: 33, badge: 'Feather Badge' },
            { id: 'tate_liza_oras', name: 'Tate & Liza', location: 'Mossdeep City', type: 'Psychic', levelCap: 42, badge: 'Mind Badge' },
            { id: 'wallace_oras', name: 'Wallace', location: 'Sootopolis City', type: 'Water', levelCap: 46, badge: 'Rain Badge' }
        ],
        eliteFour: [
            { id: 'sidney_oras', name: 'Sidney', type: 'Dark', levelCap: 50, title: 'Elite Four' },
            { id: 'phoebe_oras', name: 'Phoebe', type: 'Ghost', levelCap: 51, title: 'Elite Four' },
            { id: 'glacia_oras', name: 'Glacia', type: 'Ice', levelCap: 52, title: 'Elite Four' },
            { id: 'drake_oras', name: 'Drake', type: 'Dragon', levelCap: 53, title: 'Elite Four' },
            { id: 'champion_steven_oras', name: 'Steven', type: 'Steel', levelCap: 57, title: 'Champion' }
        ]
    },

    // Generation 7 - Sun/Moon
    alola_gen7: {
        name: "Sun/Moon",
        generation: 7,
        leaders: [
            { id: 'ilima', name: 'Ilima (Totem Trial)', location: 'Verdant Cavern', type: 'Normal', levelCap: 14, badge: 'Normalium Z' },
            { id: 'lana', name: 'Lana (Totem Trial)', location: 'Brooklet Hill', type: 'Water', levelCap: 20, badge: 'Waterium Z' },
            { id: 'kiawe', name: 'Kiawe (Totem Trial)', location: 'Wela Volcano Park', type: 'Fire', levelCap: 24, badge: 'Firium Z' },
            { id: 'mallow', name: 'Mallow (Totem Trial)', location: 'Lush Jungle', type: 'Grass', levelCap: 28, badge: 'Grassium Z' },
            { id: 'sophocles', name: 'Sophocles (Totem Trial)', location: 'Hokulani Observatory', type: 'Electric', levelCap: 32, badge: 'Electrium Z' },
            { id: 'acerola', name: 'Acerola (Totem Trial)', location: 'Thrifty Megamart', type: 'Ghost', levelCap: 36, badge: 'Ghostium Z' },
            { id: 'mina', name: 'Mina (Totem Trial)', location: 'Vast Poni Canyon', type: 'Fairy', levelCap: 54, badge: 'Fairium Z' }
        ],
        eliteFour: [
            { id: 'hala', name: 'Hala', type: 'Fighting', levelCap: 54, title: 'Kahuna' },
            { id: 'olivia', name: 'Olivia', type: 'Rock', levelCap: 54, title: 'Kahuna' },
            { id: 'nanu', name: 'Nanu', type: 'Dark', levelCap: 54, title: 'Kahuna' },
            { id: 'hapu', name: 'Hapu', type: 'Ground', levelCap: 54, title: 'Kahuna' },
            { id: 'champion_kukui', name: 'Professor Kukui', type: 'Mixed', levelCap: 60, title: 'Champion' }
        ]
    },

    // Generation 7 - Ultra Sun/Ultra Moon
    alola_usum_gen7: {
        name: "Ultra Sun/Ultra Moon",
        generation: 7,
        leaders: [
            { id: 'ilima_usum', name: 'Ilima (Totem Trial)', location: 'Verdant Cavern', type: 'Normal', levelCap: 14, badge: 'Normalium Z' },
            { id: 'lana_usum', name: 'Lana (Totem Trial)', location: 'Brooklet Hill', type: 'Water', levelCap: 20, badge: 'Waterium Z' },
            { id: 'kiawe_usum', name: 'Kiawe (Totem Trial)', location: 'Wela Volcano Park', type: 'Fire', levelCap: 24, badge: 'Firium Z' },
            { id: 'mallow_usum', name: 'Mallow (Totem Trial)', location: 'Lush Jungle', type: 'Grass', levelCap: 28, badge: 'Grassium Z' },
            { id: 'sophocles_usum', name: 'Sophocles (Totem Trial)', location: 'Hokulani Observatory', type: 'Electric', levelCap: 32, badge: 'Electrium Z' },
            { id: 'acerola_usum', name: 'Acerola (Totem Trial)', location: 'Thrifty Megamart', type: 'Ghost', levelCap: 36, badge: 'Ghostium Z' },
            { id: 'mina_usum', name: 'Mina (Totem Trial)', location: 'Vast Poni Canyon', type: 'Fairy', levelCap: 54, badge: 'Fairium Z' }
        ],
        eliteFour: [
            { id: 'hala_usum', name: 'Hala', type: 'Fighting', levelCap: 63, title: 'Kahuna' },
            { id: 'olivia_usum', name: 'Olivia', type: 'Rock', levelCap: 63, title: 'Kahuna' },
            { id: 'nanu_usum', name: 'Nanu', type: 'Dark', levelCap: 63, title: 'Kahuna' },
            { id: 'hapu_usum', name: 'Hapu', type: 'Ground', levelCap: 63, title: 'Kahuna' },
            { id: 'champion_hau', name: 'Hau', type: 'Mixed', levelCap: 66, title: 'Champion' }
        ]
    }
};

// Helper function to get gym leaders for current game
function getCurrentGymLeaders() {
    if (!gameData.currentGame) return null;
    return gymLeadersByGame[gameData.currentGame] || null;
}

// Helper function to check if all gym leaders are defeated
function areAllGymLeadersDefeated() {
    const gymData = getCurrentGymLeaders();
    if (!gymData) return false;
    
    const gameProgress = gameData.gymProgress || {};
    const currentGameProgress = gameProgress[gameData.currentGame] || {};
    
    // Check main gym leaders
    const allMainDefeated = gymData.leaders.every(leader => 
        currentGameProgress[leader.id] === true
    );
    
    // Check Kanto leaders if they exist
    let allKantoDefeated = true;
    if (gymData.kantoLeaders && gymData.kantoLeaders.length > 0) {
        allKantoDefeated = gymData.kantoLeaders.every(leader => 
            currentGameProgress[leader.id] === true
        );
    }
    
    return allMainDefeated && allKantoDefeated;
}

// Helper function to check if all Elite Four are defeated
function areAllEliteFourDefeated() {
    const gymData = getCurrentGymLeaders();
    if (!gymData) return false;
    
    const gameProgress = gameData.gymProgress || {};
    const currentGameProgress = gameProgress[gameData.currentGame] || {};
    
    return gymData.eliteFour.every(member => 
        currentGameProgress[member.id] === true
    );
}

// Helper function to check if champion is defeated
function isChampionDefeated() {
    const gymData = getCurrentGymLeaders();
    if (!gymData) return false;
    
    const gameProgress = gameData.gymProgress || {};
    const currentGameProgress = gameProgress[gameData.currentGame] || {};
    
    const champion = gymData.eliteFour.find(member => member.title === 'Champion');
    return champion ? currentGameProgress[champion.id] === true : false;
}