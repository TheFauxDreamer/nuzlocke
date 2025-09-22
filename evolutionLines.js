// Pokemon evolution lines data for generations 1-7
// This is a boilerplate - add specific evolution lines as needed

const evolutionLinesByGeneration = {
    // Generation 1 Evolution Lines
    gen1: {
        // Starters
        'bulbasaur': ['bulbasaur', 'ivysaur', 'venusaur'],
        'ivysaur': ['bulbasaur', 'ivysaur', 'venusaur'],
        'venusaur': ['bulbasaur', 'ivysaur', 'venusaur'],

        'charmander': ['charmander', 'charmeleon', 'charizard'],
        'charmeleon': ['charmander', 'charmeleon', 'charizard'],
        'charizard': ['charmander', 'charmeleon', 'charizard'],

        'squirtle': ['squirtle', 'wartortle', 'blastoise'],
        'wartortle': ['squirtle', 'wartortle', 'blastoise'],
        'blastoise': ['squirtle', 'wartortle', 'blastoise'],

        // Bug Pokemon
        'caterpie': ['caterpie', 'metapod', 'butterfree'],
        'metapod': ['caterpie', 'metapod', 'butterfree'],
        'butterfree': ['caterpie', 'metapod', 'butterfree'],

        'weedle': ['weedle', 'kakuna', 'beedrill'],
        'kakuna': ['weedle', 'kakuna', 'beedrill'],
        'beedrill': ['weedle', 'kakuna', 'beedrill'],

        // Normal/Flying Pokemon
        'pidgey': ['pidgey', 'pidgeotto', 'pidgeot'],
        'pidgeotto': ['pidgey', 'pidgeotto', 'pidgeot'],
        'pidgeot': ['pidgey', 'pidgeotto', 'pidgeot'],

        'rattata': ['rattata', 'raticate'],
        'raticate': ['rattata', 'raticate'],

        'spearow': ['spearow', 'fearow'],
        'fearow': ['spearow', 'fearow'],

        // Poison Pokemon
        'ekans': ['ekans', 'arbok'],
        'arbok': ['ekans', 'arbok'],

        // Electric Pokemon
        'pikachu': ['pikachu', 'raichu'],
        'raichu': ['pikachu', 'raichu'],

        // Ground Pokemon
        'sandshrew': ['sandshrew', 'sandslash'],
        'sandslash': ['sandshrew', 'sandslash'],

        // Nidoran lines
        'nidoran♀': ['nidoran♀', 'nidorina', 'nidoqueen'],
        'nidorina': ['nidoran♀', 'nidorina', 'nidoqueen'],
        'nidoqueen': ['nidoran♀', 'nidorina', 'nidoqueen'],

        'nidoran♂': ['nidoran♂', 'nidorino', 'nidoking'],
        'nidorino': ['nidoran♂', 'nidorino', 'nidoking'],
        'nidoking': ['nidoran♂', 'nidorino', 'nidoking'],

        // Fairy Pokemon
        'clefairy': ['clefairy', 'clefable'],
        'clefable': ['clefairy', 'clefable'],

        // Fire Pokemon
        'vulpix': ['vulpix', 'ninetales'],
        'ninetales': ['vulpix', 'ninetales'],

        // Normal Pokemon
        'jigglypuff': ['jigglypuff', 'wigglytuff'],
        'wigglytuff': ['jigglypuff', 'wigglytuff'],

        // Flying Pokemon
        'zubat': ['zubat', 'golbat'],
        'golbat': ['zubat', 'golbat'],

        // Grass Pokemon
        'oddish': ['oddish', 'gloom', 'vileplume'],
        'gloom': ['oddish', 'gloom', 'vileplume'],
        'vileplume': ['oddish', 'gloom', 'vileplume'],

        'paras': ['paras', 'parasect'],
        'parasect': ['paras', 'parasect'],

        'venonat': ['venonat', 'venomoth'],
        'venomoth': ['venonat', 'venomoth'],

        'bellsprout': ['bellsprout', 'weepinbell', 'victreebel'],
        'weepinbell': ['bellsprout', 'weepinbell', 'victreebel'],
        'victreebel': ['bellsprout', 'weepinbell', 'victreebel'],

        // Ground Pokemon
        'diglett': ['diglett', 'dugtrio'],
        'dugtrio': ['diglett', 'dugtrio'],

        'geodude': ['geodude', 'graveler', 'golem'],
        'graveler': ['geodude', 'graveler', 'golem'],
        'golem': ['geodude', 'graveler', 'golem'],

        // Normal Pokemon
        'meowth': ['meowth', 'persian'],
        'persian': ['meowth', 'persian'],

        // Water Pokemon
        'psyduck': ['psyduck', 'golduck'],
        'golduck': ['psyduck', 'golduck'],

        'poliwag': ['poliwag', 'poliwhirl', 'poliwrath'],
        'poliwhirl': ['poliwag', 'poliwhirl', 'poliwrath'],
        'poliwrath': ['poliwag', 'poliwhirl', 'poliwrath'],

        'tentacool': ['tentacool', 'tentacruel'],
        'tentacruel': ['tentacool', 'tentacruel'],

        'seel': ['seel', 'dewgong'],
        'dewgong': ['seel', 'dewgong'],

        'shellder': ['shellder', 'cloyster'],
        'cloyster': ['shellder', 'cloyster'],

        'krabby': ['krabby', 'kingler'],
        'kingler': ['krabby', 'kingler'],

        'horsea': ['horsea', 'seadra'],
        'seadra': ['horsea', 'seadra'],

        'goldeen': ['goldeen', 'seaking'],
        'seaking': ['goldeen', 'seaking'],

        'staryu': ['staryu', 'starmie'],
        'starmie': ['staryu', 'starmie'],

        'magikarp': ['magikarp', 'gyarados'],
        'gyarados': ['magikarp', 'gyarados'],

        // Fighting Pokemon
        'mankey': ['mankey', 'primeape'],
        'primeape': ['mankey', 'primeape'],

        'machop': ['machop', 'machoke', 'machamp'],
        'machoke': ['machop', 'machoke', 'machamp'],
        'machamp': ['machop', 'machoke', 'machamp'],

        // Fire Pokemon
        'growlithe': ['growlithe', 'arcanine'],
        'arcanine': ['growlithe', 'arcanine'],

        'ponyta': ['ponyta', 'rapidash'],
        'rapidash': ['ponyta', 'rapidash'],

        // Psychic Pokemon
        'abra': ['abra', 'kadabra', 'alakazam'],
        'kadabra': ['abra', 'kadabra', 'alakazam'],
        'alakazam': ['abra', 'kadabra', 'alakazam'],

        'slowpoke': ['slowpoke', 'slowbro'],
        'slowbro': ['slowpoke', 'slowbro'],

        'drowzee': ['drowzee', 'hypno'],
        'hypno': ['drowzee', 'hypno'],

        // Electric Pokemon
        'magnemite': ['magnemite', 'magneton'],
        'magneton': ['magnemite', 'magneton'],

        'voltorb': ['voltorb', 'electrode'],
        'electrode': ['voltorb', 'electrode'],

        // Normal/Flying Pokemon
        'doduo': ['doduo', 'dodrio'],
        'dodrio': ['doduo', 'dodrio'],

        // Poison Pokemon
        'grimer': ['grimer', 'muk'],
        'muk': ['grimer', 'muk'],

        'koffing': ['koffing', 'weezing'],
        'weezing': ['koffing', 'weezing'],

        // Ghost Pokemon
        'gastly': ['gastly', 'haunter', 'gengar'],
        'haunter': ['gastly', 'haunter', 'gengar'],
        'gengar': ['gastly', 'haunter', 'gengar'],

        // Grass Pokemon
        'exeggcute': ['exeggcute', 'exeggutor'],
        'exeggutor': ['exeggcute', 'exeggutor'],

        // Ground Pokemon
        'cubone': ['cubone', 'marowak'],
        'marowak': ['cubone', 'marowak'],

        'rhyhorn': ['rhyhorn', 'rhydon'],
        'rhydon': ['rhyhorn', 'rhydon'],

        // Fossil Pokemon
        'omanyte': ['omanyte', 'omastar'],
        'omastar': ['omanyte', 'omastar'],

        'kabuto': ['kabuto', 'kabutops'],
        'kabutops': ['kabuto', 'kabutops'],

        // Dragon Pokemon
        'dratini': ['dratini', 'dragonair', 'dragonite'],
        'dragonair': ['dratini', 'dragonair', 'dragonite'],
        'dragonite': ['dratini', 'dragonair', 'dragonite'],

        // Eevee evolutions
        'eevee': ['eevee', 'vaporeon', 'jolteon', 'flareon'],
        'vaporeon': ['eevee', 'vaporeon'],
        'jolteon': ['eevee', 'jolteon'],
        'flareon': ['eevee', 'flareon'],

        // Single stage Pokemon
        'farfetch\'d': ['farfetch\'d'],
        'onix': ['onix'],
        'hitmonlee': ['hitmonlee'],
        'hitmonchan': ['hitmonchan'],
        'lickitung': ['lickitung'],
        'chansey': ['chansey'],
        'tangela': ['tangela'],
        'kangaskhan': ['kangaskhan'],
        'mr. mime': ['mr. mime'],
        'scyther': ['scyther'],
        'jynx': ['jynx'],
        'electabuzz': ['electabuzz'],
        'magmar': ['magmar'],
        'pinsir': ['pinsir'],
        'tauros': ['tauros'],
        'lapras': ['lapras'],
        'ditto': ['ditto'],
        'porygon': ['porygon'],
        'aerodactyl': ['aerodactyl'],
        'snorlax': ['snorlax'],
        'articuno': ['articuno'],
        'zapdos': ['zapdos'],
        'moltres': ['moltres'],
        'mewtwo': ['mewtwo'],
        'mew': ['mew']
    },

    // Generation 2 Evolution Lines
    gen2: {
        // Starters
        'chikorita': ['chikorita', 'bayleef', 'meganium'],
        'bayleef': ['chikorita', 'bayleef', 'meganium'],
        'meganium': ['chikorita', 'bayleef', 'meganium'],

        'cyndaquil': ['cyndaquil', 'quilava', 'typhlosion'],
        'quilava': ['cyndaquil', 'quilava', 'typhlosion'],
        'typhlosion': ['cyndaquil', 'quilava', 'typhlosion'],

        'totodile': ['totodile', 'croconaw', 'feraligatr'],
        'croconaw': ['totodile', 'croconaw', 'feraligatr'],
        'feraligatr': ['totodile', 'croconaw', 'feraligatr'],

        // Baby Pokemon and their evolutions
        'pichu': ['pichu', 'pikachu', 'raichu'],
        'cleffa': ['cleffa', 'clefairy', 'clefable'],
        'igglybuff': ['igglybuff', 'jigglypuff', 'wigglytuff'],
        'smoochum': ['smoochum', 'jynx'],
        'elekid': ['elekid', 'electabuzz'],
        'magby': ['magby', 'magmar'],

        // New Eevee evolutions
        'espeon': ['eevee', 'espeon'],
        'umbreon': ['eevee', 'umbreon'],

        // Normal evolution lines
        'sentret': ['sentret', 'furret'],
        'furret': ['sentret', 'furret'],

        'hoothoot': ['hoothoot', 'noctowl'],
        'noctowl': ['hoothoot', 'noctowl'],

        'ledyba': ['ledyba', 'ledian'],
        'ledian': ['ledyba', 'ledian'],

        'spinarak': ['spinarak', 'ariados'],
        'ariados': ['spinarak', 'ariados'],

        'crobat': ['zubat', 'golbat', 'crobat'],

        'chinchou': ['chinchou', 'lanturn'],
        'lanturn': ['chinchou', 'lanturn'],

        'togepi': ['togepi', 'togetic'],
        'togetic': ['togepi', 'togetic'],

        'natu': ['natu', 'xatu'],
        'xatu': ['natu', 'xatu'],

        'mareep': ['mareep', 'flaaffy', 'ampharos'],
        'flaaffy': ['mareep', 'flaaffy', 'ampharos'],
        'ampharos': ['mareep', 'flaaffy', 'ampharos'],

        'bellossom': ['oddish', 'gloom', 'bellossom'],

        'marill': ['marill', 'azumarill'],
        'azumarill': ['marill', 'azumarill'],

        'sudowoodo': ['sudowoodo'],

        'politoed': ['poliwag', 'poliwhirl', 'politoed'],

        'hoppip': ['hoppip', 'skiploom', 'jumpluff'],
        'skiploom': ['hoppip', 'skiploom', 'jumpluff'],
        'jumpluff': ['hoppip', 'skiploom', 'jumpluff'],

        'aipom': ['aipom'],

        'sunkern': ['sunkern', 'sunflora'],
        'sunflora': ['sunkern', 'sunflora'],

        'yanma': ['yanma'],

        'wooper': ['wooper', 'quagsire'],
        'quagsire': ['wooper', 'quagsire'],

        'murkrow': ['murkrow'],

        'slowking': ['slowpoke', 'slowking'],

        'misdreavus': ['misdreavus'],

        'unown': ['unown'],

        'wobbuffet': ['wobbuffet'],

        'girafarig': ['girafarig'],

        'pineco': ['pineco', 'forretress'],
        'forretress': ['pineco', 'forretress'],

        'dunsparce': ['dunsparce'],

        'gligar': ['gligar'],

        'steelix': ['onix', 'steelix'],

        'snubbull': ['snubbull', 'granbull'],
        'granbull': ['snubbull', 'granbull'],

        'qwilfish': ['qwilfish'],

        'scizor': ['scyther', 'scizor'],

        'shuckle': ['shuckle'],

        'heracross': ['heracross'],

        'sneasel': ['sneasel'],

        'teddiursa': ['teddiursa', 'ursaring'],
        'ursaring': ['teddiursa', 'ursaring'],

        'slugma': ['slugma', 'magcargo'],
        'magcargo': ['slugma', 'magcargo'],

        'swinub': ['swinub', 'piloswine'],
        'piloswine': ['swinub', 'piloswine'],

        'corsola': ['corsola'],

        'remoraid': ['remoraid', 'octillery'],
        'octillery': ['remoraid', 'octillery'],

        'delibird': ['delibird'],

        'mantine': ['mantine'],

        'skarmory': ['skarmory'],

        'houndour': ['houndour', 'houndoom'],
        'houndoom': ['houndour', 'houndoom'],

        'kingdra': ['horsea', 'seadra', 'kingdra'],

        'phanpy': ['phanpy', 'donphan'],
        'donphan': ['phanpy', 'donphan'],

        'porygon2': ['porygon', 'porygon2'],

        'stantler': ['stantler'],

        'smeargle': ['smeargle'],

        // Tyrogue evolves into one of three fighting types
        'tyrogue': ['tyrogue', 'hitmonlee'],
        'hitmonlee': ['tyrogue', 'hitmonlee'],
        'hitmonchan': ['tyrogue', 'hitmonchan'],
        'hitmontop': ['tyrogue', 'hitmontop'],

        'miltank': ['miltank'],

        'blissey': ['chansey', 'blissey'],

        // Legendary beasts
        'raikou': ['raikou'],
        'entei': ['entei'],
        'suicune': ['suicune'],

        // Pseudo-legendary line
        'larvitar': ['larvitar', 'pupitar', 'tyranitar'],
        'pupitar': ['larvitar', 'pupitar', 'tyranitar'],
        'tyranitar': ['larvitar', 'pupitar', 'tyranitar'],

        // Legendary birds/mascots
        'lugia': ['lugia'],
        'ho-oh': ['ho-oh'],
        'celebi': ['celebi']
    },

    // Generation 3 Evolution Lines
    gen3: {
        // Starters
        'treecko': ['treecko', 'grovyle', 'sceptile'],
        'grovyle': ['treecko', 'grovyle', 'sceptile'],
        'sceptile': ['treecko', 'grovyle', 'sceptile'],

        'torchic': ['torchic', 'combusken', 'blaziken'],
        'combusken': ['torchic', 'combusken', 'blaziken'],
        'blaziken': ['torchic', 'combusken', 'blaziken'],

        'mudkip': ['mudkip', 'marshtomp', 'swampert'],
        'marshtomp': ['mudkip', 'marshtomp', 'swampert'],
        'swampert': ['mudkip', 'marshtomp', 'swampert'],

        // Early Route Pokémon
        'poochyena': ['poochyena', 'mightyena'],
        'mightyena': ['poochyena', 'mightyena'],

        'zigzagoon': ['zigzagoon', 'linoone'],
        'linoone': ['zigzagoon', 'linoone'],

        // Wurmple split evolution
        'wurmple': ['wurmple', 'silcoon', 'beautifly'],
        'silcoon': ['wurmple', 'silcoon', 'beautifly'],
        'beautifly': ['wurmple', 'silcoon', 'beautifly'],
        'cascoon': ['wurmple', 'cascoon', 'dustox'],
        'dustox': ['wurmple', 'cascoon', 'dustox'],

        // Water-type lines
        'lotad': ['lotad', 'lombre', 'ludicolo'],
        'lombre': ['lotad', 'lombre', 'ludicolo'],
        'ludicolo': ['lotad', 'lombre', 'ludicolo'],

        'wingull': ['wingull', 'pelipper'],
        'pelipper': ['wingull', 'pelipper'],

        'surskit': ['surskit', 'masquerain'],
        'masquerain': ['surskit', 'masquerain'],

        // Grass-type lines
        'seedot': ['seedot', 'nuzleaf', 'shiftry'],
        'nuzleaf': ['seedot', 'nuzleaf', 'shiftry'],
        'shiftry': ['seedot', 'nuzleaf', 'shiftry'],

        'shroomish': ['shroomish', 'breloom'],
        'breloom': ['shroomish', 'breloom'],

        // Flying types
        'taillow': ['taillow', 'swellow'],
        'swellow': ['taillow', 'swellow'],

        // Psychic types
        'ralts': ['ralts', 'kirlia', 'gardevoir'],
        'kirlia': ['ralts', 'kirlia', 'gardevoir'],
        'gardevoir': ['ralts', 'kirlia', 'gardevoir'],

        'meditite': ['meditite', 'medicham'],
        'medicham': ['meditite', 'medicham'],

        'spoink': ['spoink', 'grumpig'],
        'grumpig': ['spoink', 'grumpig'],

        // Normal types
        'slakoth': ['slakoth', 'vigoroth', 'slaking'],
        'vigoroth': ['slakoth', 'vigoroth', 'slaking'],
        'slaking': ['slakoth', 'vigoroth', 'slaking'],

        'whismur': ['whismur', 'loudred', 'exploud'],
        'loudred': ['whismur', 'loudred', 'exploud'],
        'exploud': ['whismur', 'loudred', 'exploud'],

        'skitty': ['skitty', 'delcatty'],
        'delcatty': ['skitty', 'delcatty'],

        'spinda': ['spinda'],

        'zangoose': ['zangoose'],

        'kecleon': ['kecleon'],

        // Bug/Ground types
        'nincada': ['nincada', 'ninjask'],
        'ninjask': ['nincada', 'ninjask'],
        'shedinja': ['shedinja'], // Special evolution from Nincada

        'trapinch': ['trapinch', 'vibrava', 'flygon'],
        'vibrava': ['trapinch', 'vibrava', 'flygon'],
        'flygon': ['trapinch', 'vibrava', 'flygon'],

        // Fighting types
        'makuhita': ['makuhita', 'hariyama'],
        'hariyama': ['makuhita', 'hariyama'],

        // Steel types
        'aron': ['aron', 'lairon', 'aggron'],
        'lairon': ['aron', 'lairon', 'aggron'],
        'aggron': ['aron', 'lairon', 'aggron'],

        'beldum': ['beldum', 'metang', 'metagross'],
        'metang': ['beldum', 'metang', 'metagross'],
        'metagross': ['beldum', 'metang', 'metagross'],

        // Electric types
        'electrike': ['electrike', 'manectric'],
        'manectric': ['electrike', 'manectric'],

        'plusle': ['plusle'],
        'minun': ['minun'],

        'volbeat': ['volbeat'],
        'illumise': ['illumise'],

        // Poison types
        'gulpin': ['gulpin', 'swalot'],
        'swalot': ['gulpin', 'swalot'],

        'seviper': ['seviper'],

        // Water types
        'carvanha': ['carvanha', 'sharpedo'],
        'sharpedo': ['carvanha', 'sharpedo'],

        'wailmer': ['wailmer', 'wailord'],
        'wailord': ['wailmer', 'wailord'],

        'barboach': ['barboach', 'whiscash'],
        'whiscash': ['barboach', 'whiscash'],

        'corphish': ['corphish', 'crawdaunt'],
        'crawdaunt': ['corphish', 'crawdaunt'],

        'feebas': ['feebas', 'milotic'],
        'milotic': ['feebas', 'milotic'],

        'clamperl': ['clamperl', 'huntail'],
        'huntail': ['clamperl', 'huntail'],
        'gorebyss': ['clamperl', 'gorebyss'],

        'relicanth': ['relicanth'],
        'luvdisc': ['luvdisc'],

        'spheal': ['spheal', 'sealeo', 'walrein'],
        'sealeo': ['spheal', 'sealeo', 'walrein'],
        'walrein': ['spheal', 'sealeo', 'walrein'],

        // Fire/Ground types
        'numel': ['numel', 'camerupt'],
        'camerupt': ['numel', 'camerupt'],

        'torkoal': ['torkoal'],

        // Rock/Ground types
        'nosepass': ['nosepass'],

        'lunatone': ['lunatone'],
        'solrock': ['solrock'],

        'baltoy': ['baltoy', 'claydol'],
        'claydol': ['baltoy', 'claydol'],

        // Fossils
        'lileep': ['lileep', 'cradily'],
        'cradily': ['lileep', 'cradily'],

        'anorith': ['anorith', 'armaldo'],
        'armaldo': ['anorith', 'armaldo'],

        // Flying types
        'swablu': ['swablu', 'altaria'],
        'altaria': ['swablu', 'altaria'],

        'tropius': ['tropius'],

        // Grass types
        'cacnea': ['cacnea', 'cacturne'],
        'cacturne': ['cacnea', 'cacturne'],

        'roselia': ['roselia'],

        // Dark/Ghost types
        'sableye': ['sableye'],
        'mawile': ['mawile'],

        'shuppet': ['shuppet', 'banette'],
        'banette': ['shuppet', 'banette'],

        'duskull': ['duskull', 'dusclops'],
        'dusclops': ['duskull', 'dusclops'],

        // Ice types
        'snorunt': ['snorunt', 'glalie'],
        'glalie': ['snorunt', 'glalie'],

        // Unique types
        'castform': ['castform'],
        'absol': ['absol'],
        'chimecho': ['chimecho'],

        // Cross-generation evolutions (Gen 3 additions to existing lines)
        'azurill': ['azurill', 'marill', 'azumarill'],
        'marill': ['azurill', 'marill', 'azumarill'],
        'azumarill': ['azurill', 'marill', 'azumarill'],

        'wynaut': ['wynaut', 'wobbuffet'],
        'wobbuffet': ['wynaut', 'wobbuffet'],

        // Dragon types
        'bagon': ['bagon', 'shelgon', 'salamence'],
        'shelgon': ['bagon', 'shelgon', 'salamence'],
        'salamence': ['bagon', 'shelgon', 'salamence'],

        // Legendary Regis
        'regirock': ['regirock'],
        'regice': ['regice'],
        'registeel': ['registeel'],

        // Eon duo
        'latias': ['latias'],
        'latios': ['latios'],

        // Weather trio
        'kyogre': ['kyogre'],
        'groudon': ['groudon'],
        'rayquaza': ['rayquaza'],

        // Mythicals
        'jirachi': ['jirachi'],
        'deoxys': ['deoxys']
    },

    // Generation 4 Evolution Lines
    gen4: {
        // Starters
        'turtwig': ['turtwig', 'grotle', 'torterra'],
        'grotle': ['turtwig', 'grotle', 'torterra'],
        'torterra': ['turtwig', 'grotle', 'torterra'],

        'chimchar': ['chimchar', 'monferno', 'infernape'],
        'monferno': ['chimchar', 'monferno', 'infernape'],
        'infernape': ['chimchar', 'monferno', 'infernape'],

        'piplup': ['piplup', 'prinplup', 'empoleon'],
        'prinplup': ['piplup', 'prinplup', 'empoleon'],
        'empoleon': ['piplup', 'prinplup', 'empoleon'],

        // Early route Pokémon
        'starly': ['starly', 'staravia', 'staraptor'],
        'staravia': ['starly', 'staravia', 'staraptor'],
        'staraptor': ['starly', 'staravia', 'staraptor'],

        'bidoof': ['bidoof', 'bibarel'],
        'bibarel': ['bidoof', 'bibarel'],

        'kricketot': ['kricketot', 'kricketune'],
        'kricketune': ['kricketot', 'kricketune'],

        'shinx': ['shinx', 'luxio', 'luxray'],
        'luxio': ['shinx', 'luxio', 'luxray'],
        'luxray': ['shinx', 'luxio', 'luxray'],

        // New pre-evolution and evolution
        'budew': ['budew', 'roselia', 'roserade'],
        'roserade': ['budew', 'roselia', 'roserade'],

        'cranidos': ['cranidos', 'rampardos'],
        'rampardos': ['cranidos', 'rampardos'],

        'shieldon': ['shieldon', 'bastiodon'],
        'bastiodon': ['shieldon', 'bastiodon'],

        'burmy': ['burmy', 'wormadam'],  // or mothim for male
        'wormadam': ['burmy', 'wormadam'],
        'mothim': ['burmy', 'mothim'],

        'combee': ['combee', 'vespiquen'],  // female only
        'vespiquen': ['combee', 'vespiquen'],

        'pachirisu': ['pachirisu'],

        'buizel': ['buizel', 'floatzel'],
        'floatzel': ['buizel', 'floatzel'],

        'cherubi': ['cherubi', 'cherrim'],
        'cherrim': ['cherubi', 'cherrim'],

        'shellos': ['shellos', 'gastrodon'],
        'gastrodon': ['shellos', 'gastrodon'],

        // New evolution for old Pokémon
        'ambipom': ['aipom', 'ambipom'],

        'drifloon': ['drifloon', 'drifblim'],
        'drifblim': ['drifloon', 'drifblim'],

        'buneary': ['buneary', 'lopunny'],
        'lopunny': ['buneary', 'lopunny'],

        // New evolution for old Pokémon
        'mismagius': ['misdreavus', 'mismagius'],
        'honchkrow': ['murkrow', 'honchkrow'],

        'glameow': ['glameow', 'purugly'],
        'purugly': ['glameow', 'purugly'],

        // New pre-evolution
        'chingling': ['chingling', 'chimecho'],

        'stunky': ['stunky', 'skuntank'],
        'skuntank': ['stunky', 'skuntank'],

        'bronzor': ['bronzor', 'bronzong'],
        'bronzong': ['bronzor', 'bronzong'],

        // New pre-evolution
        'bonsly': ['bonsly', 'sudowoodo'],
        'mime jr.': ['mime jr.', 'mr. mime'],
        'happiny': ['happiny', 'chansey', 'blissey'],

        'chatot': ['chatot'],
        'spiritomb': ['spiritomb'],

        'gible': ['gible', 'gabite', 'garchomp'],
        'gabite': ['gible', 'gabite', 'garchomp'],
        'garchomp': ['gible', 'gabite', 'garchomp'],

        // New pre-evolution
        'munchlax': ['munchlax', 'snorlax'],

        'riolu': ['riolu', 'lucario'],
        'lucario': ['riolu', 'lucario'],

        'hippopotas': ['hippopotas', 'hippowdon'],
        'hippowdon': ['hippopotas', 'hippowdon'],

        'skorupi': ['skorupi', 'drapion'],
        'drapion': ['skorupi', 'drapion'],

        'croagunk': ['croagunk', 'toxicroak'],
        'toxicroak': ['croagunk', 'toxicroak'],

        'carnivine': ['carnivine'],

        'finneon': ['finneon', 'lumineon'],
        'lumineon': ['finneon', 'lumineon'],

        // New pre-evolution
        'mantyke': ['mantyke', 'mantine'],

        'snover': ['snover', 'abomasnow'],
        'abomasnow': ['snover', 'abomasnow'],

        // New evolutions for old Pokémon
        'weavile': ['sneasel', 'weavile'],
        'magnezone': ['magnemite', 'magneton', 'magnezone'],
        'lickilicky': ['lickitung', 'lickilicky'],
        'rhyperior': ['rhyhorn', 'rhydon', 'rhyperior'],
        'tangrowth': ['tangela', 'tangrowth'],
        'electivire': ['elekid', 'electabuzz', 'electivire'],
        'magmortar': ['magby', 'magmar', 'magmortar'],
        'togekiss': ['togepi', 'togetic', 'togekiss'],
        'yanmega': ['yanma', 'yanmega'],
        'leafeon': ['eevee', 'leafeon'],
        'glaceon': ['eevee', 'glaceon'],
        'gliscor': ['gligar', 'gliscor'],
        'mamoswine': ['swinub', 'piloswine', 'mamoswine'],
        'porygon-z': ['porygon', 'porygon2', 'porygon-z'],
        'gallade': ['ralts', 'kirlia', 'gallade'],  // male kirlia only
        'probopass': ['nosepass', 'probopass'],
        'dusknoir': ['duskull', 'dusclops', 'dusknoir'],
        'froslass': ['snorunt', 'froslass'],  // female snorunt only

        'rotom': ['rotom'],

        // Legendary Pokémon
        'uxie': ['uxie'],
        'mesprit': ['mesprit'],
        'azelf': ['azelf'],
        'dialga': ['dialga'],
        'palkia': ['palkia'],
        'heatran': ['heatran'],
        'regigigas': ['regigigas'],
        'giratina': ['giratina'],
        'cresselia': ['cresselia'],
        'phione': ['phione'],
        'manaphy': ['manaphy'],
        'darkrai': ['darkrai'],
        'shaymin': ['shaymin'],
        'arceus': ['arceus']
    },

    // Generation 5 Evolution Lines
    gen5: {
        // Starters
        'snivy': ['snivy', 'servine', 'serperior'],
        'servine': ['snivy', 'servine', 'serperior'],
        'serperior': ['snivy', 'servine', 'serperior'],

        'tepig': ['tepig', 'pignite', 'emboar'],
        'pignite': ['tepig', 'pignite', 'emboar'],
        'emboar': ['tepig', 'pignite', 'emboar'],

        'oshawott': ['oshawott', 'dewott', 'samurott'],
        'dewott': ['oshawott', 'dewott', 'samurott'],
        'samurott': ['oshawott', 'dewott', 'samurott'],

        // Normal/Field Pokémon
        'patrat': ['patrat', 'watchog'],
        'watchog': ['patrat', 'watchog'],

        'lillipup': ['lillipup', 'herdier', 'stoutland'],
        'herdier': ['lillipup', 'herdier', 'stoutland'],
        'stoutland': ['lillipup', 'herdier', 'stoutland'],

        'purrloin': ['purrloin', 'liepard'],
        'liepard': ['purrloin', 'liepard'],

        // Elemental Monkeys
        'pansage': ['pansage', 'simisage'],
        'simisage': ['pansage', 'simisage'],

        'pansear': ['pansear', 'simisear'],
        'simisear': ['pansear', 'simisear'],

        'panpour': ['panpour', 'simipour'],
        'simipour': ['panpour', 'simipour'],

        // Psychic/Dream Pokémon
        'munna': ['munna', 'musharna'],
        'musharna': ['munna', 'musharna'],

        // Flying Pokémon
        'pidove': ['pidove', 'tranquill', 'unfezant'],
        'tranquill': ['pidove', 'tranquill', 'unfezant'],
        'unfezant': ['pidove', 'tranquill', 'unfezant'],

        // Electric Pokémon
        'blitzle': ['blitzle', 'zebstrika'],
        'zebstrika': ['blitzle', 'zebstrika'],

        // Rock Pokémon
        'roggenrola': ['roggenrola', 'boldore', 'gigalith'],
        'boldore': ['roggenrola', 'boldore', 'gigalith'],
        'gigalith': ['roggenrola', 'boldore', 'gigalith'],

        // Psychic/Flying
        'woobat': ['woobat', 'swoobat'],
        'swoobat': ['woobat', 'swoobat'],

        // Ground/Steel
        'drilbur': ['drilbur', 'excadrill'],
        'excadrill': ['drilbur', 'excadrill'],

        // Normal (no evolution)
        'audino': ['audino'],

        // Fighting Pokémon
        'timburr': ['timburr', 'gurdurr', 'conkeldurr'],
        'gurdurr': ['timburr', 'gurdurr', 'conkeldurr'],
        'conkeldurr': ['timburr', 'gurdurr', 'conkeldurr'],

        // Water/Ground
        'tympole': ['tympole', 'palpitoad', 'seismitoad'],
        'palpitoad': ['tympole', 'palpitoad', 'seismitoad'],
        'seismitoad': ['tympole', 'palpitoad', 'seismitoad'],

        // Fighting (no evolution)
        'throh': ['throh'],
        'sawk': ['sawk'],

        // Bug/Grass
        'sewaddle': ['sewaddle', 'swadloon', 'leavanny'],
        'swadloon': ['sewaddle', 'swadloon', 'leavanny'],
        'leavanny': ['sewaddle', 'swadloon', 'leavanny'],

        // Bug/Poison
        'venipede': ['venipede', 'whirlipede', 'scolipede'],
        'whirlipede': ['venipede', 'whirlipede', 'scolipede'],
        'scolipede': ['venipede', 'whirlipede', 'scolipede'],

        // Grass Pokémon
        'cottonee': ['cottonee', 'whimsicott'],
        'whimsicott': ['cottonee', 'whimsicott'],

        'petilil': ['petilil', 'lilligant'],
        'lilligant': ['petilil', 'lilligant'],

        // Water (no evolution)
        'basculin': ['basculin'],

        // Ground/Dark
        'sandile': ['sandile', 'krokorok', 'krookodile'],
        'krokorok': ['sandile', 'krokorok', 'krookodile'],
        'krookodile': ['sandile', 'krokorok', 'krookodile'],

        // Fire/Psychic
        'darumaka': ['darumaka', 'darmanitan'],
        'darmanitan': ['darumaka', 'darmanitan'],

        // Grass (no evolution)
        'maractus': ['maractus'],

        // Bug/Rock
        'dwebble': ['dwebble', 'crustle'],
        'crustle': ['dwebble', 'crustle'],

        // Dark/Fighting
        'scraggy': ['scraggy', 'scrafty'],
        'scrafty': ['scraggy', 'scrafty'],

        // Psychic/Flying (no evolution)
        'sigilyph': ['sigilyph'],

        // Ghost/Ground
        'yamask': ['yamask', 'cofagrigus'],
        'cofagrigus': ['yamask', 'cofagrigus'],

        // Fossil Pokémon
        'tirtouga': ['tirtouga', 'carracosta'],
        'carracosta': ['tirtouga', 'carracosta'],

        'archen': ['archen', 'archeops'],
        'archeops': ['archen', 'archeops'],

        // Poison
        'trubbish': ['trubbish', 'garbodor'],
        'garbodor': ['trubbish', 'garbodor'],

        // Dark
        'zorua': ['zorua', 'zoroark'],
        'zoroark': ['zorua', 'zoroark'],

        // Normal
        'minccino': ['minccino', 'cinccino'],
        'cinccino': ['minccino', 'cinccino'],

        // Psychic Lines
        'gothita': ['gothita', 'gothorita', 'gothitelle'],
        'gothorita': ['gothita', 'gothorita', 'gothitelle'],
        'gothitelle': ['gothita', 'gothorita', 'gothitelle'],

        'solosis': ['solosis', 'duosion', 'reuniclus'],
        'duosion': ['solosis', 'duosion', 'reuniclus'],
        'reuniclus': ['solosis', 'duosion', 'reuniclus'],

        // Water/Flying
        'ducklett': ['ducklett', 'swanna'],
        'swanna': ['ducklett', 'swanna'],

        // Ice
        'vanillite': ['vanillite', 'vanillish', 'vanilluxe'],
        'vanillish': ['vanillite', 'vanillish', 'vanilluxe'],
        'vanilluxe': ['vanillite', 'vanillish', 'vanilluxe'],

        // Normal/Grass
        'deerling': ['deerling', 'sawsbuck'],
        'sawsbuck': ['deerling', 'sawsbuck'],

        // Electric/Flying (no evolution)
        'emolga': ['emolga'],

        // Trade Evolution Bug/Steel
        'karrablast': ['karrablast', 'escavalier'],
        'escavalier': ['karrablast', 'escavalier'],

        'shelmet': ['shelmet', 'accelgor'],
        'accelgor': ['shelmet', 'accelgor'],

        // Grass/Poison
        'foongus': ['foongus', 'amoonguss'],
        'amoonguss': ['foongus', 'amoonguss'],

        // Water/Ghost
        'frillish': ['frillish', 'jellicent'],
        'jellicent': ['frillish', 'jellicent'],

        // Water (no evolution)
        'alomomola': ['alomomola'],

        // Bug/Electric
        'joltik': ['joltik', 'galvantula'],
        'galvantula': ['joltik', 'galvantula'],

        // Grass/Steel
        'ferroseed': ['ferroseed', 'ferrothorn'],
        'ferrothorn': ['ferroseed', 'ferrothorn'],

        // Steel
        'klink': ['klink', 'klang', 'klinklang'],
        'klang': ['klink', 'klang', 'klinklang'],
        'klinklang': ['klink', 'klang', 'klinklang'],

        // Electric
        'tynamo': ['tynamo', 'eelektrik', 'eelektross'],
        'eelektrik': ['tynamo', 'eelektrik', 'eelektross'],
        'eelektross': ['tynamo', 'eelektrik', 'eelektross'],

        // Psychic
        'elgyem': ['elgyem', 'beheeyem'],
        'beheeyem': ['elgyem', 'beheeyem'],

        // Ghost/Fire
        'litwick': ['litwick', 'lampent', 'chandelure'],
        'lampent': ['litwick', 'lampent', 'chandelure'],
        'chandelure': ['litwick', 'lampent', 'chandelure'],

        // Dragon
        'axew': ['axew', 'fraxure', 'haxorus'],
        'fraxure': ['axew', 'fraxure', 'haxorus'],
        'haxorus': ['axew', 'fraxure', 'haxorus'],

        // Ice
        'cubchoo': ['cubchoo', 'beartic'],
        'beartic': ['cubchoo', 'beartic'],

        // Ice (no evolution)
        'cryogonal': ['cryogonal'],

        // Electric/Ground (no evolution)
        'stunfisk': ['stunfisk'],

        // Fighting
        'mienfoo': ['mienfoo', 'mienshao'],
        'mienshao': ['mienfoo', 'mienshao'],

        // Dragon (no evolution)
        'druddigon': ['druddigon'],

        // Ground/Ghost
        'golett': ['golett', 'golurk'],
        'golurk': ['golett', 'golurk'],

        // Dark/Steel
        'pawniard': ['pawniard', 'bisharp'],
        'bisharp': ['pawniard', 'bisharp'],

        // Normal (no evolution)
        'bouffalant': ['bouffalant'],

        // Normal/Flying
        'rufflet': ['rufflet', 'braviary'],
        'braviary': ['rufflet', 'braviary'],

        'vullaby': ['vullaby', 'mandibuzz'],
        'mandibuzz': ['vullaby', 'mandibuzz'],

        // Fire/Normal (no evolution)
        'heatmor': ['heatmor'],

        // Bug/Steel (no evolution)
        'durant': ['durant'],

        // Dark/Dragon
        'deino': ['deino', 'zweilous', 'hydreigon'],
        'zweilous': ['deino', 'zweilous', 'hydreigon'],
        'hydreigon': ['deino', 'zweilous', 'hydreigon'],

        // Bug/Fire
        'larvesta': ['larvesta', 'volcarona'],
        'volcarona': ['larvesta', 'volcarona'],

        // Legendary Pokémon (no evolution)
        'cobalion': ['cobalion'],
        'terrakion': ['terrakion'],
        'virizion': ['virizion'],
        'tornadus': ['tornadus'],
        'thundurus': ['thundurus'],
        'reshiram': ['reshiram'],
        'zekrom': ['zekrom'],
        'landorus': ['landorus'],
        'kyurem': ['kyurem'],

        // Mythical Pokémon (no evolution)
        'keldeo': ['keldeo'],
        'meloetta': ['meloetta'],
        'genesect': ['genesect']
    },

    // Generation 6 Evolution Lines
    gen6: {
        // Starters
        'chespin': ['chespin', 'quilladin', 'chesnaught'],
        'quilladin': ['chespin', 'quilladin', 'chesnaught'],
        'chesnaught': ['chespin', 'quilladin', 'chesnaught'],

        'fennekin': ['fennekin', 'braixen', 'delphox'],
        'braixen': ['fennekin', 'braixen', 'delphox'],
        'delphox': ['fennekin', 'braixen', 'delphox'],

        'froakie': ['froakie', 'frogadier', 'greninja'],
        'frogadier': ['froakie', 'frogadier', 'greninja'],
        'greninja': ['froakie', 'frogadier', 'greninja'],

        // New Eevee evolution
        'sylveon': ['eevee', 'sylveon'],

        // Early route Pokémon
        'bunnelby': ['bunnelby', 'diggersby'],
        'diggersby': ['bunnelby', 'diggersby'],

        'fletchling': ['fletchling', 'fletchinder', 'talonflame'],
        'fletchinder': ['fletchling', 'fletchinder', 'talonflame'],
        'talonflame': ['fletchling', 'fletchinder', 'talonflame'],

        'scatterbug': ['scatterbug', 'spewpa', 'vivillon'],
        'spewpa': ['scatterbug', 'spewpa', 'vivillon'],
        'vivillon': ['scatterbug', 'spewpa', 'vivillon'],

        'litleo': ['litleo', 'pyroar'],
        'pyroar': ['litleo', 'pyroar'],

        'flabebe': ['flabebe', 'floette', 'florges'],
        'floette': ['flabebe', 'floette', 'florges'],
        'florges': ['flabebe', 'floette', 'florges'],

        'skiddo': ['skiddo', 'gogoat'],
        'gogoat': ['skiddo', 'gogoat'],

        'pancham': ['pancham', 'pangoro'],
        'pangoro': ['pancham', 'pangoro'],

        'furfrou': ['furfrou'],

        'espurr': ['espurr', 'meowstic'],
        'meowstic': ['espurr', 'meowstic'],

        'honedge': ['honedge', 'doublade', 'aegislash'],
        'doublade': ['honedge', 'doublade', 'aegislash'],
        'aegislash': ['honedge', 'doublade', 'aegislash'],

        'spritzee': ['spritzee', 'aromatisse'],
        'aromatisse': ['spritzee', 'aromatisse'],

        'swirlix': ['swirlix', 'slurpuff'],
        'slurpuff': ['swirlix', 'slurpuff'],

        'inkay': ['inkay', 'malamar'],
        'malamar': ['inkay', 'malamar'],

        'binacle': ['binacle', 'barbaracle'],
        'barbaracle': ['binacle', 'barbaracle'],

        'skrelp': ['skrelp', 'dragalge'],
        'dragalge': ['skrelp', 'dragalge'],

        'clauncher': ['clauncher', 'clawitzer'],
        'clawitzer': ['clauncher', 'clawitzer'],

        'helioptile': ['helioptile', 'heliolisk'],
        'heliolisk': ['helioptile', 'heliolisk'],

        'tyrunt': ['tyrunt', 'tyrantrum'],
        'tyrantrum': ['tyrunt', 'tyrantrum'],

        'amaura': ['amaura', 'aurorus'],
        'aurorus': ['amaura', 'aurorus'],

        'hawlucha': ['hawlucha'],

        'dedenne': ['dedenne'],

        'carbink': ['carbink'],

        'goomy': ['goomy', 'sliggoo', 'goodra'],
        'sliggoo': ['goomy', 'sliggoo', 'goodra'],
        'goodra': ['goomy', 'sliggoo', 'goodra'],

        'klefki': ['klefki'],

        'phantump': ['phantump', 'trevenant'],
        'trevenant': ['phantump', 'trevenant'],

        'pumpkaboo': ['pumpkaboo', 'gourgeist'],
        'gourgeist': ['pumpkaboo', 'gourgeist'],

        'bergmite': ['bergmite', 'avalugg'],
        'avalugg': ['bergmite', 'avalugg'],

        'noibat': ['noibat', 'noivern'],
        'noivern': ['noibat', 'noivern'],

        // Legendaries and Mythicals
        'xerneas': ['xerneas'],
        'yveltal': ['yveltal'],
        'zygarde': ['zygarde'],
        'diancie': ['diancie'],
        'hoopa': ['hoopa'],
        'volcanion': ['volcanion']
    },

    // Generation 7 Evolution Lines
    gen7: {
        // Starters
        'rowlet': ['rowlet', 'dartrix', 'decidueye'],
        'dartrix': ['rowlet', 'dartrix', 'decidueye'],
        'decidueye': ['rowlet', 'dartrix', 'decidueye'],

        'litten': ['litten', 'torracat', 'incineroar'],
        'torracat': ['litten', 'torracat', 'incineroar'],
        'incineroar': ['litten', 'torracat', 'incineroar'],

        'popplio': ['popplio', 'brionne', 'primarina'],
        'brionne': ['popplio', 'brionne', 'primarina'],
        'primarina': ['popplio', 'brionne', 'primarina'],

        // Early Route Pokémon
        'pikipek': ['pikipek', 'trumbeak', 'toucannon'],
        'trumbeak': ['pikipek', 'trumbeak', 'toucannon'],
        'toucannon': ['pikipek', 'trumbeak', 'toucannon'],

        'yungoos': ['yungoos', 'gumshoos'],
        'gumshoos': ['yungoos', 'gumshoos'],

        'grubbin': ['grubbin', 'charjabug', 'vikavolt'],
        'charjabug': ['grubbin', 'charjabug', 'vikavolt'],
        'vikavolt': ['grubbin', 'charjabug', 'vikavolt'],

        'crabrawler': ['crabrawler', 'crabominable'],
        'crabominable': ['crabrawler', 'crabominable'],

        // Single stage Pokémon
        'oricorio': ['oricorio'],

        'cutiefly': ['cutiefly', 'ribombee'],
        'ribombee': ['cutiefly', 'ribombee'],

        'rockruff': ['rockruff', 'lycanroc'],
        'lycanroc': ['rockruff', 'lycanroc'],

        'wishiwashi': ['wishiwashi'],

        'mareanie': ['mareanie', 'toxapex'],
        'toxapex': ['mareanie', 'toxapex'],

        'mudbray': ['mudbray', 'mudsdale'],
        'mudsdale': ['mudbray', 'mudsdale'],

        'dewpider': ['dewpider', 'araquanid'],
        'araquanid': ['dewpider', 'araquanid'],

        'fomantis': ['fomantis', 'lurantis'],
        'lurantis': ['fomantis', 'lurantis'],

        'morelull': ['morelull', 'shiinotic'],
        'shiinotic': ['morelull', 'shiinotic'],

        'salandit': ['salandit', 'salazzle'],
        'salazzle': ['salandit', 'salazzle'],

        'stufful': ['stufful', 'bewear'],
        'bewear': ['stufful', 'bewear'],

        'bounsweet': ['bounsweet', 'steenee', 'tsareena'],
        'steenee': ['bounsweet', 'steenee', 'tsareena'],
        'tsareena': ['bounsweet', 'steenee', 'tsareena'],

        'comfey': ['comfey'],
        'oranguru': ['oranguru'],
        'passimian': ['passimian'],

        'wimpod': ['wimpod', 'golisopod'],
        'golisopod': ['wimpod', 'golisopod'],

        'sandygast': ['sandygast', 'palossand'],
        'palossand': ['sandygast', 'palossand'],

        'pyukumuku': ['pyukumuku'],

        'type: null': ['type: null', 'silvally'],
        'silvally': ['type: null', 'silvally'],

        'minior': ['minior'],
        'komala': ['komala'],
        'turtonator': ['turtonator'],
        'togedemaru': ['togedemaru'],
        'mimikyu': ['mimikyu'],
        'bruxish': ['bruxish'],
        'drampa': ['drampa'],
        'dhelmise': ['dhelmise'],

        'jangmo-o': ['jangmo-o', 'hakamo-o', 'kommo-o'],
        'hakamo-o': ['jangmo-o', 'hakamo-o', 'kommo-o'],
        'kommo-o': ['jangmo-o', 'hakamo-o', 'kommo-o'],

        // Legendary/Mythical
        'tapu koko': ['tapu koko'],
        'tapu lele': ['tapu lele'],
        'tapu bulu': ['tapu bulu'],
        'tapu fini': ['tapu fini'],

        'cosmog': ['cosmog', 'cosmoem', 'solgaleo'], // or lunala
        'cosmoem': ['cosmog', 'cosmoem', 'solgaleo'], // or lunala
        'solgaleo': ['cosmog', 'cosmoem', 'solgaleo'],
        'lunala': ['cosmog', 'cosmoem', 'lunala'],

        'necrozma': ['necrozma'],

        // Ultra Beasts
        'nihilego': ['nihilego'],
        'buzzwole': ['buzzwole'],
        'pheromosa': ['pheromosa'],
        'xurkitree': ['xurkitree'],
        'celesteela': ['celesteela'],
        'kartana': ['kartana'],
        'guzzlord': ['guzzlord'],

        // Mythical
        'magearna': ['magearna'],
        'marshadow': ['marshadow'],
        'zeraora': ['zeraora'],

        // Alolan forms (treat as separate evolution lines)
        'rattata-alola': ['rattata-alola', 'raticate-alola'],
        'raticate-alola': ['rattata-alola', 'raticate-alola'],

        'raichu-alola': ['pichu', 'pikachu', 'raichu-alola'],

        'sandshrew-alola': ['sandshrew-alola', 'sandslash-alola'],
        'sandslash-alola': ['sandshrew-alola', 'sandslash-alola'],

        'vulpix-alola': ['vulpix-alola', 'ninetales-alola'],
        'ninetales-alola': ['vulpix-alola', 'ninetales-alola'],

        'diglett-alola': ['diglett-alola', 'dugtrio-alola'],
        'dugtrio-alola': ['diglett-alola', 'dugtrio-alola'],

        'meowth-alola': ['meowth-alola', 'persian-alola'],
        'persian-alola': ['meowth-alola', 'persian-alola'],

        'geodude-alola': ['geodude-alola', 'graveler-alola', 'golem-alola'],
        'graveler-alola': ['geodude-alola', 'graveler-alola', 'golem-alola'],
        'golem-alola': ['geodude-alola', 'graveler-alola', 'golem-alola'],

        'grimer-alola': ['grimer-alola', 'muk-alola'],
        'muk-alola': ['grimer-alola', 'muk-alola'],

        'exeggutor-alola': ['exeggcute', 'exeggutor-alola'],

        'marowak-alola': ['cubone', 'marowak-alola']
    }
};

// Combine all evolution lines based on selected generation
function getEvolutionLines(generation) {
    let combinedLines = {};

    for (let gen = 1; gen <= generation && gen <= 7; gen++) {
        const genLines = evolutionLinesByGeneration[`gen${gen}`] || {};
        // Merge with existing lines (later generations may update evolution lines)
        combinedLines = { ...combinedLines, ...genLines };
    }

    return combinedLines;
}

// For backwards compatibility
let evolutionLines = getEvolutionLines(7);

// Update evolution lines based on selected generation
function updateEvolutionLinesForGeneration(generation) {
    evolutionLines = getEvolutionLines(generation);
}