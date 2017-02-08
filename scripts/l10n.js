var l10n = {

	currentLanguage: "eng",

	translate: function(str) {		
		var lang = this.currentLanguage;
		if(!lang || !this.strings[lang]) {
			lang = "eng";
		}
		var res = this.strings[lang][str];		
		if (!res) {
			res = this.strings.eng[str];
		}
		return (this.strings[lang][str]) ? this.strings[lang][str] : "";
	},

	getMoneyConstant: function(money){
		switch(money){
			case "astralDiamonds": return "ADIAMONDS";
			case "platinum": return "PLATINUM";
			case "gold": return "GOLD";
			case "silver": return "SILVER";
			case "copper": return "COPPER";															
		}
	},

	strings: {

		eng: {

			//alignment
			ALIGNMENT_UNALIGNED: 							"Unaligned",
			ALIGNMENT_GOOD: 								"Good",
			ALIGNMENT_LAWFUL_GOOD: 							"Lawful Good",
			ALIGNMENT_EVIL: 								"Evil",
			ALIGNMENT_CHAOTIC_EVIL: 						"Chaotic Evil",

			//deities
			DEITY_AVANDRA: 									"Avandra",
			DEITY_BAHAMUT: 									"Bahamut",
			DEITY_CORELLON: 								"Corellon",
			DEITY_ERATHIS: 									"Erathis",
			DEITY_IOUN: 									"Ioun",
			DEITY_KORD: 									"Kord",
			DEITY_MELORA: 									"Melora",
			DEITY_MORADIN: 									"Moradin",
			DEITY_PELOR: 									"Pelor",
			DEITY_RAVEN_QUEEN: 								"The Raven Queen",
			DEITY_SEHANINE: 								"Sehanine",
			DEITY_ASMODEUS: 								"Asmodeus",
			DEITY_BANE: 									"Bane",
			DEITY_GRUUMSH: 									"Gruumsh",
			DEITY_LOLTH: 									"Lolth",
			DEITY_TIAMAT: 									"Tiamat",
			DEITY_TOROG: 									"Torog",
			DEITY_VECNA: 									"Vecna",
			DEITY_ZEHIR: 									"Zehir",

			//sizes
			SIZE_MEDIUM: 									"Medium",
			SIZE_SMALL: 									"Small",

			//gender
			GENDER_MALE: 									"Male", 
			GENDER_FEMALE: 									"Female", 

			//races
			RACE_DRAGONBORN: 								"Dragonborn", 
			RACE_DWARF: 									"Dwarf", 
			RACE_ELADRIN: 									"Eladrin", 
			RACE_ELF: 										"Elf",
			RACE_HALF_ELF: 									"Half-Elf",
			RACE_HALFLING: 									"Halfling",
			RACE_HUMAN: 									"Human",
			RACE_TIEFLING: 									"Tiefling",
			RACE_DEVA: 										"Deva",
			RACE_GNOME: 									"Gnome",
			RACE_GOLIATH: 									"Goliath",
			RACE_HALF_ORC: 									"Half-Orc",
			RACE_LT_SHIFTER: 								"Longtooth Shifter",
			RACE_RC_SHIFTER: 								"Razorclaw Shifter",
			RACE_GITHZERAI: 								"Githzerai",
			RACE_MINOTAUR: 									"Minotaur",
			RACE_SHARDMIND: 								"Shardmind",
			RACE_WILDEN: 									"Wilden",

			//classes
			CLASS_CLERIC: 									"Cleric",
			CLASS_FIGHTER: 									"Fighter",
			CLASS_PALADIN: 									"Paladin",
			CLASS_RANGER: 									"Ranger",
			CLASS_ROGUE: 									"Rogue",
			CLASS_WARLOCK: 									"Warlock",
			CLASS_WARLORD: 									"Warlord",
			CLASS_WIZARD: 									"Wizard",
			CLASS_AVENGER: 									"Avenger",
			CLASS_BARBARIAN: 								"Barbarian",
			CLASS_BARD: 									"Bard",
			CLASS_DRUID: 									"Druid",
			CLASS_INVOKER: 									"Invoker",
			CLASS_SHAMAN: 									"Shaman",
			CLASS_SORCERER: 								"Sorcerer",
			CLASS_WARDEN: 									"Warden",
			CLASS_ARDENT: 									"Ardent",
			CLASS_BATTLEMIND: 								"Battlemind",
			CLASS_MONK: 									"Monk",
			CLASS_PSION: 									"Psion",
			CLASS_RUNEPRIEST: 								"Runepriest",
			CLASS_SEEKER: 									"Seeker",

			//paragon paths
			PARAGON_PATH_ANGELIC_AVENGER: 					"Angelic avenger",
			PARAGON_PATH_DIVINE_ORACLE: 					"Divine oracle",
			PARAGON_PATH_RADIANT_SERVANT: 					"Radiant servant",
			PARAGON_PATH_WARPRIEST: 						"Warpriest",											
			PARAGON_PATH_IRON_VANGUARD: 					"Iron vanguard",
			PARAGON_PATH_KENSEI: 							"Kensei",
			PARAGON_PATH_PIT_FIGHTER: 						"Pit fighter",
			PARAGON_PATH_SWORDMASTER: 						"Swordmaster",
			PARAGON_PATH_ASTRAL_WEAPON: 					"Astral weapon",
			PARAGON_PATH_CHAMPION_OF_ORDER: 				"Champion of order",
			PARAGON_PATH_HOSPITALER: 						"Hospitaler",
			PARAGON_PATH_JUSTICIAR: 						"Justiciar",
			PARAGON_PATH_BATTLEFIELD_ARCHER: 				"Battlefield archer",
			PARAGON_PATH_BEAST_STALKER: 					"Beast stalker",
			PARAGON_PATH_PATHFINDER:						"Pathfinder",
			PARAGON_PATH_STORMWARDEN: 						"Stormwarden",
			PARAGON_PATH_CAT_BURGLAR: 						"Cat burglar",
			PARAGON_PATH_DAGGERMASTER: 						"Daggermaster",
			PARAGON_PATH_MASTER_INFILTRATOR: 				"Master infiltrator",
			PARAGON_PATH_SHADOW_ASSASSIN: 					"Shadow assassin",
			PARAGON_PATH_DOOMSAYER: 						"Doomsayer",
			PARAGON_PATH_FEYTOUCHED: 						"Feytouched",
			PARAGON_PATH_LIFE_STEALER: 						"Life-stealer",
			PARAGON_PATH_BATTLE_CAPTAIN: 					"Battle captain",
			PARAGON_PATH_COMBAT_VETERAN: 					"Combat veteran",
			PARAGON_PATH_KNIGHT_COMMANDER: 					"Knight commander",
			PARAGON_PATH_SWORD_MARSHAL: 					"Sword marshal",
			PARAGON_PATH_BATTLE_MAGE: 						"Battle mage",
			PARAGON_PATH_BLOOD_MAGE: 						"Blood mage",
			PARAGON_PATH_SPELLSTORM_MAGE: 					"Spellstorm mage",
			PARAGON_PATH_WIZARD_OF_THE_SPIRAL_TOWER: 		"Wizard of the Spiral Tower",
			PARAGON_PATH_HAMMER_OF_JUDGMENT: 				"Hammer of Judgment",
			PARAGON_PATH_OATHSWORN: 						"Oathsworn",
			PARAGON_PATH_UNVEILED_VISAGE: 					"Unveiled Visage",
			PARAGON_PATH_ZEALOUS_ASSASSIN: 					"Zealous Assassin",
			PARAGON_PATH_BEAR_WARRIOR: 						"Bear Warrior",
			PARAGON_PATH_FEARBRINGER_THANE: 				"Fearbringer Thane",
			PARAGON_PATH_FRENZIED_BERSERKER: 				"Frenzied Berserker",
			PARAGON_PATH_WILDRUNNER: 						"Wildrunner",
			PARAGON_PATH_STUDENT_OF_THE_SEVEN: 				"Student of the Seven",
			PARAGON_PATH_SUMMER_RHYMER: 					"Summer Rhymer",
			PARAGON_PATH_VOICE_OF_THUNDER: 					"Voice of Thunder",
			PARAGON_PATH_WAR_CHANTER: 						"War Chanter",
			PARAGON_PATH_BLOOD_MOON_STALKER: 				"Blood Moon Stalker",
			PARAGON_PATH_GUARDIAN_OF_THE_LIVING_GATE: 		"Guardian of the Living Gate",
			PARAGON_PATH_KEEPER_OF_THE_HIDDEN_FLAME: 		"Keeper of the Hidden Flame",
			PARAGON_PATH_SKY_HUNTER: 						"Sky Hunter",
			PARAGON_PATH_ANGELIC_ASPECT: 					"Angelic Aspect",
			PARAGON_PATH_BLIGHTSPEAKER: 					"Blightspeaker",
			PARAGON_PATH_FLAME_OF_HOPE: 					"Flame of Hope",
			PARAGON_PATH_HAMMER_OF_VENGEANCE: 				"Hammer of Vengeance",
			PARAGON_PATH_DISCIPLE_OF_THE_WORLD_SERPENT: 	"Disciple of the World Serpent",
			PARAGON_PATH_GHOST_PANTHER: 					"Ghost Panther",
			PARAGON_PATH_GREAT_BEAR_SHAMAN: 				"Great Bear Shaman",
			PARAGON_PATH_SPIRIT_TEMPEST: 					"Spirit Tempest",
			PARAGON_PATH_ARCANE_WELLSPRING: 				"Arcane Wellspring",
			PARAGON_PATH_DEMONSKIN_ADEPT: 					"Demonskin Adept",
			PARAGON_PATH_DRAGONSOUL_HEIR: 					"Dragonsoul Heir",
			PARAGON_PATH_WILD_MAGE: 						"Wild Mage",
			PARAGON_PATH_BLOODWRATH_GUARDIAN: 				"Bloodwrath Guardian",
			PARAGON_PATH_HORNED_CHAMPION: 					"Horned Champion",
			PARAGON_PATH_STORM_SENTINEL: 					"Storm Sentinel",
			PARAGON_PATH_VERDANT_LORD: 						"Verdant Lord",
			PARAGON_PATH_ARGENT_SOUL: 						"Argent Soul",
			PARAGON_PATH_PSIONIC_BINDER: 					"Psionic Binder",
			PARAGON_PATH_STYGIAN_ADEPT: 					"Stygian Adept",
			PARAGON_PATH_TALARIC_STRATEGIST: 				"Talaric Strategist",
			PARAGON_PATH_ETERNAL_BLADE: 					"Eternal Blade",
			PARAGON_PATH_IRON_GUARDIAN: 					"Iron Guardian",
			PARAGON_PATH_STEEL_EGO: 						"Steel Ego",
			PARAGON_PATH_ZEPHYR_BLADE: 						"Zephyr Blade",
			PARAGON_PATH_GHOSTWALKER: 						"Ghostwalker",
			PARAGON_PATH_INITIATE_OF_THE_DRAGON: 			"Initiate of the Dragon",
			PARAGON_PATH_MOUNTAIN_DEVOTEE: 					"Mountain Devotee",
			PARAGON_PATH_RADIANT_FIST: 						"Radiant Fist",
			PARAGON_PATH_CERULEAN_ADEPT: 					"Cerulean Adept",
			PARAGON_PATH_DREAMWALKER: 						"Dreamwalker",
			PARAGON_PATH_TIME_BENDER: 						"Time Bender",
			PARAGON_PATH_UNCARNATE: 						"Uncarnate",
			PARAGON_PATH_HAMMER_OF_VENGEANCE: 				"Hammer of Vengeance",
			PARAGON_PATH_LIGHT_BRINGER: 					"Light Bringer",
			PARAGON_PATH_MASTER_OF_THE_FORGE: 				"Master of the Forge",
			PARAGON_PATH_RUNE_SHIELD: 						"Rune Shield",
			PARAGON_PATH_CRIMSON_HUNTER: 					"Crimson Hunter",
			PARAGON_PATH_DEATH_ARROW: 						"Death Arrow",
			PARAGON_PATH_SEVEN_FATES_ARCHER: 				"Seven Fates Archer",
			PARAGON_PATH_SWIFT_STRIDER: 					"Swift Strider",
			PARAGON_PATH_ADROIT_EXPLORER: 					"Adroit Explorer",
			PARAGON_PATH_ANCESTRAL_INCARNATE: 				"Ancestral Incarnate",
			PARAGON_PATH_BLOODFURY_SAVAGE: 					"Bloodfury Savage",
			PARAGON_PATH_FEY_BEGUILER: 						"Fey Beguiler",
			PARAGON_PATH_FIRSTBORN_OF_MORADIN: 				"Firstborn of Moradin",
			PARAGON_PATH_HALFLING_SCOUNDREL: 				"Halfling Scoundrel",
			PARAGON_PATH_MOONSTALKER: 						"Moonstalker",
			PARAGON_PATH_SCION_OF_ARKHOSIA: 				"Scion of Arkhosia",
			PARAGON_PATH_SHIERE_KNIGHT: 					"Shiere Knight",
			PARAGON_PATH_STONEBLESSED: 						"Stoneblessed",
			PARAGON_PATH_TURATHI_HIGHBORN: 					"Turathi Highborn",
			PARAGON_PATH_TWILIGHT_GUARDIAN: 				"Twilight Guardian",
			PARAGON_PATH_BLOODED_CHAMPION: 					"Blooded Champion",
			PARAGON_PATH_NATURE_S_AVATAR: 					"Nature's Avatar",
			PARAGON_PATH_RRATHMAL: 							"Rrathmal",
			PARAGON_PATH_SHARD_DISCIPLE: 					"Shard Disciple",

			//epic destinies
			EPIC_DESTINY_ARCHMAGE: 							"Archmage",
			EPIC_DESTINY_DEADLY_TRICKSTER: 					"Deadly trickster",
			EPIC_DESTINY_DEMIGOD: 							"Demigod",
			EPIC_DESTINY_ETERNAL_SEEKER: 					"Eternal seeker",
			EPIC_DESTINY_FATESINGER: 						"Fatesinger",
			EPIC_DESTINY_GLORIOUS_SPIRIT: 					"Glorious Spirit",
			EPIC_DESTINY_HARBINGER_OF_DOOM: 				"Harbinger of Doom",
			EPIC_DESTINY_LOREKEEPER: 						"Lorekeeper",
			EPIC_DESTINY_PRIMAL_AVATAR: 					"Primal Avatar",
			EPIC_DESTINY_REVERED_ONE: 						"Revered One",
			EPIC_DESTINY_DIAMOND_SOUL: 						"Diamond Soul",
			EPIC_DESTINY_GODMIND: 							"Godmind",
			EPIC_DESTINY_INVINCIBLE_MIND: 					"Invincible Mind",
			EPIC_DESTINY_MASTER_OF_THE_ETERNAL_HUNT: 		"Master of the Eternal Hunt",
			EPIC_DESTINY_RUNE_MAKER: 						"Rune Maker",
			EPIC_DESTINY_WAR_MASTER: 						"War Master",

			//field hits and captions
			FIELD_HINT_PORTRAIT: 							"Portrait of your character",			
			ADD_XP_REPONSE_TEXT: 							"You've got some XP! How many?", 
			ADD_XP_RESPONSE_TITLE: 							"Add XP",
			ADD_ADIAMONDS_REPONSE_TEXT: 					"You've got some astral diamonds! How many?", 
			ADD_ADIAMONDS_RESPONSE_TITLE: 					"Add Astral Diamonds",
			ADD_PLATINUM_REPONSE_TEXT: 						"You've got some platinum! How much?", 
			ADD_PLATINUM_RESPONSE_TITLE: 					"Add Platinum",
			ADD_GOLD_REPONSE_TEXT: 							"You've got some golden coins! How many?", 
			ADD_GOLD_RESPONSE_TITLE: 						"Add Golden Coins",			
			ADD_SILVER_REPONSE_TEXT: 						"You've got some silver coins! How many?", 
			ADD_SILVER_RESPONSE_TITLE: 						"Add silver coins",															
			ADD_COPPER_REPONSE_TEXT: 						"You've got some copper coins! How many?", 
			ADD_COPPER_RESPONSE_TITLE: 						"Add copper coins",
			SPEND_ADIAMONDS_REPONSE_TEXT: 					"You've spent some astral diamonds! How many?", 
			SPEND_ADIAMONDS_RESPONSE_TITLE: 				"Spend Astral Diamonds",
			SPEND_PLATINUM_REPONSE_TEXT: 					"You've spent some platinum! How much?", 
			SPEND_PLATINUM_RESPONSE_TITLE: 					"Spend Platinum",
			SPEND_GOLD_REPONSE_TEXT: 						"You've spent some golden coins! How many?", 
			SPEND_GOLD_RESPONSE_TITLE: 						"Spend Golden Coins",			
			SPEND_SILVER_REPONSE_TEXT: 						"You've spent some silver coins! How many?", 
			SPEND_SILVER_RESPONSE_TITLE: 					"Spend silver coins",															
			SPEND_COPPER_REPONSE_TEXT: 						"You've spent some copper coins! How many?", 
			SPEND_COPPER_RESPONSE_TITLE: 					"Spend copper coins"

		},

		rus: {

			//alignment
			ALIGNMENT_UNALIGNED: 							"Без мировоззрения",
			ALIGNMENT_GOOD: 								"Добрый",
			ALIGNMENT_LAWFUL_GOOD: 							"Законно-добрый",
			ALIGNMENT_EVIL: 								"Злой",
			ALIGNMENT_CHAOTIC_EVIL: 						"Хаотично-злой",

			//deities
			DEITY_AVANDRA: 									"Авандра",
			DEITY_BAHAMUT: 									"Бахамут",
			DEITY_CORELLON: 								"Кореллон",
			DEITY_ERATHIS: 									"Эратис",
			DEITY_IOUN: 									"Йоун",
			DEITY_KORD: 									"Корд",
			DEITY_MELORA: 									"Мелора",
			DEITY_MORADIN: 									"Морадин",
			DEITY_PELOR: 									"Пелор",
			DEITY_RAVEN_QUEEN: 								"Королева Воронов",
			DEITY_SEHANINE: 								"Сеанин",
			DEITY_ASMODEUS: 								"Асмодей",
			DEITY_BANE: 									"Бейн",
			DEITY_GRUUMSH: 									"Груумш",
			DEITY_LOLTH: 									"Лолт",
			DEITY_TIAMAT: 									"Тиамат",
			DEITY_TOROG: 									"Торог",
			DEITY_VECNA: 									"Векна",
			DEITY_ZEHIR: 									"Зехир",

			//sizes
			SIZE_MEDIUM: 									"Средний",
			SIZE_SMALL: 									"Малый",

			//gender
			GENDER_MALE: 									"Муж.", 
			GENDER_FEMALE: 									"Жен.", 			

			//races
			RACE_DRAGONBORN: 								"Драконорождённый", 
			RACE_DWARF: 									"Дварф", 
			RACE_ELADRIN: 									"Эладрин", 
			RACE_ELF: 										"Эльф",
			RACE_HALF_ELF: 									"Полуэльф",
			RACE_HALFLING: 									"Полурослик",
			RACE_HUMAN: 									"Человек",
			RACE_TIEFLING: 									"Тифлинг",
			RACE_DEVA: 										"Дэв",
			RACE_GNOME: 									"Гном",
			RACE_GOLIATH: 									"Голиаф",
			RACE_HALF_ORC: 									"Полуорк",
			RACE_LT_SHIFTER: 								"Длиннозубый Шифтер",
			RACE_RC_SHIFTER: 								"Бритволапый Шифтер",
			RACE_GITHZERAI: 								"Гитзерай",
			RACE_MINOTAUR: 									"Минотавр",
			RACE_SHARDMIND: 								"Шардмайнд",
			RACE_WILDEN: 									"Древень",

			//classes
			CLASS_CLERIC: 									"Жрец",
			CLASS_FIGHTER: 									"Воин",
			CLASS_PALADIN: 									"Паладин",
			CLASS_RANGER: 									"Следопыт",
			CLASS_ROGUE: 									"Плут",
			CLASS_WARLOCK: 									"Колдун",
			CLASS_WARLORD: 									"Военачальник",
			CLASS_WIZARD: 									"Волшебник",
			CLASS_AVENGER: 									"Каратель",
			CLASS_BARBARIAN: 								"Варвар",
			CLASS_BARD: 									"Бард",
			CLASS_DRUID: 									"Друид",
			CLASS_INVOKER: 									"Апостол",
			CLASS_SHAMAN: 									"Шаман",
			CLASS_SORCERER: 								"Чародей",
			CLASS_WARDEN: 									"Хранитель",
			CLASS_ARDENT: 									"Ревнитель",
			CLASS_BATTLEMIND: 								"Пси-воин",
			CLASS_MONK: 									"Монах",
			CLASS_PSION: 									"Псионик",
			CLASS_RUNEPRIEST: 								"Жрец рун",
			CLASS_SEEKER: 									"Ловец",

			//paragon paths
			PARAGON_PATH_ANGELIC_AVENGER: 					"Ангельский мститель",
			PARAGON_PATH_DIVINE_ORACLE: 					"Божественный оракул",			
			PARAGON_PATH_RADIANT_SERVANT: 					"Сияющий служитель",
			PARAGON_PATH_WARPRIEST: 						"Боевой священник",								
			PARAGON_PATH_IRON_VANGUARD: 					"Стойкий лидер",
			PARAGON_PATH_KENSEI: 							"Кенсай",
			PARAGON_PATH_PIT_FIGHTER: 						"Задира",
			PARAGON_PATH_SWORDMASTER: 						"Мастер меча",
			PARAGON_PATH_ASTRAL_WEAPON: 					"Астральный воин",
			PARAGON_PATH_CHAMPION_OF_ORDER: 				"Защитник порядка",
			PARAGON_PATH_HOSPITALER: 						"Госпитальер",
			PARAGON_PATH_JUSTICIAR: 						"Юстициар",
			PARAGON_PATH_BATTLEFIELD_ARCHER: 				"Боевой стрелок",
			PARAGON_PATH_BEAST_STALKER: 					"Охотник",
			PARAGON_PATH_PATHFINDER:						"Проводник",
			PARAGON_PATH_STORMWARDEN: 						"Хранитель бури",
			PARAGON_PATH_CAT_BURGLAR: 						"Взломщик",
			PARAGON_PATH_DAGGERMASTER: 						"Специалист в кинжалах",
			PARAGON_PATH_MASTER_INFILTRATOR: 				"Мастер шпионажа",
			PARAGON_PATH_SHADOW_ASSASSIN: 					"Теневой убийца",
			PARAGON_PATH_DOOMSAYER: 						"Сказитель судеб",
			PARAGON_PATH_FEYTOUCHED: 						"Тронутый",
			PARAGON_PATH_LIFE_STEALER: 						"Похититель жизни",
			PARAGON_PATH_BATTLE_CAPTAIN: 					"Боевой капитан",
			PARAGON_PATH_COMBAT_VETERAN: 					"Ветеран",
			PARAGON_PATH_KNIGHT_COMMANDER: 					"Рыцарь-командир",
			PARAGON_PATH_SWORD_MARSHAL: 					"Первый мечник",
			PARAGON_PATH_BATTLE_MAGE: 						"Боевой маг",
			PARAGON_PATH_BLOOD_MAGE: 						"Маг крови",
			PARAGON_PATH_SPELLSTORM_MAGE: 					"Штормовой заклинатель",
			PARAGON_PATH_WIZARD_OF_THE_SPIRAL_TOWER: 		"Волшебник Спиральной башни",
			PARAGON_PATH_HAMMER_OF_JUDGMENT: 				"Молот правосудия",
			PARAGON_PATH_Oathsworn: 						"Хранитель клятвы",
			PARAGON_PATH_UNVEILED_VISAGE: 					"Святое воплощение",
			PARAGON_PATH_ZEALOUS_ASSASSIN: 					"Фанатичный убийца",
			PARAGON_PATH_BEAR_WARRIOR: 						"Медвежий воин",
			PARAGON_PATH_FEARBRINGER_THANE: 				"Устрашающий вождь",
			PARAGON_PATH_FRENZIED_BERSERKER: 				"Яростный берсерк",
			PARAGON_PATH_WILDRUNNER: 						"Дикий бегун",
			PARAGON_PATH_STUDENT_OF_THE_SEVEN: 				"Ученик Семи",
			PARAGON_PATH_SUMMER_RHYMER: 					"Летний рифмач",
			PARAGON_PATH_VOICE_OF_THUNDER: 					"Голос грома",
			PARAGON_PATH_WAR_CHANTER: 						"Певец войны",
			PARAGON_PATH_BLOOD_MOON_STALKER: 				"Охотник кровавой луны",
			PARAGON_PATH_GUARDIAN_OF_THE_LIVING_GATE: 		"Страж природных врат",
			PARAGON_PATH_Keeper_of_the_Hidden_Flame: 		"Хранитель скрытого пламени",
			PARAGON_PATH_SKY_HUNTER: 						"Небесный охотник",
			PARAGON_PATH_ANGELIC_ASPECT: 					"Воплощение ангела",
			PARAGON_PATH_BLIGHTSPEAKER: 					"Божественный каратель",
			PARAGON_PATH_FLAME_OF_HOPE: 					"Пламя надежды",
			PARAGON_PATH_HAMMER_OF_VENGEANCE: 				"Молот мести",
			PARAGON_PATH_DISCIPLE_OF_THE_WORLD_SERPENT: 	"Ученик мирового змея",
			PARAGON_PATH_GHOST_PANTHER: 					"Призрачная пантера",
			PARAGON_PATH_GREAT_BEAR_SHAMAN: 				"Шаман великого медведя",
			PARAGON_PATH_SPIRIT_TEMPEST: 					"Буря душ",
			PARAGON_PATH_ARCANE_WELLSPRING: 				"Источник магии",
			PARAGON_PATH_DEMONSKIN_ADEPT: 					"Носитель кожи демонов",
			PARAGON_PATH_DRAGONSOUL_HEIR: 					"Наследник драконьей души",
			PARAGON_PATH_WILD_MAGE: 						"Дикий маг",
			PARAGON_PATH_BLOODWRATH_GUARDIAN: 				"Страж кровавого гнева",
			PARAGON_PATH_HORNED_CHAMPION: 					"Рогатый чемпион",
			PARAGON_PATH_STORM_SENTINEL: 					"Грозовой страж",
			PARAGON_PATH_VERDANT_LORD: 						"Повелитель леса",
			PARAGON_PATH_ARGENT_SOUL: 						"Серебряная душа",
			PARAGON_PATH_PSIONIC_BINDER: 					"Псионический сковыватель",
			PARAGON_PATH_STYGIAN_ADEPT: 					"Мрачный адепт",
			PARAGON_PATH_TALARIC_STRATEGIST: 				"Таларический стратег",
			PARAGON_PATH_ETERNAL_BLADE: 					"Вечный клинок",
			PARAGON_PATH_IRON_GUARDIAN: 					"Железный страж",
			PARAGON_PATH_STEEL_EGO: 						"Стальное эго",
			PARAGON_PATH_ZEPHYR_BLADE: 						"Лезвие ветра",
			PARAGON_PATH_GHOSTWALKER: 						"Призрачный ходок",
			PARAGON_PATH_INITIATE_OF_THE_DRAGON: 			"Послушник драконов",
			PARAGON_PATH_MOUNTAIN_DEVOTEE: 					"Приверженец гор",
			PARAGON_PATH_RADIANT_FIST: 						"Лучащийся кулак",
			PARAGON_PATH_CERULEAN_ADEPT: 					"Адепт лазурного знака",
			PARAGON_PATH_DREAMWALKER: 						"Сноходец",
			PARAGON_PATH_TIME_BENDER: 						"Повелитель времени",
			PARAGON_PATH_UNCARNATE: 						"Развоплощённый",
			PARAGON_PATH_HAMMER_OF_VENGEANCE: 				"Молот мести",
			PARAGON_PATH_LIGHT_BRINGER: 					"Светоносец",
			PARAGON_PATH_MASTER_OF_THE_FORGE: 				"Владыка кузни",
			PARAGON_PATH_RUNE_SHIELD: 						"Рунный щит",
			PARAGON_PATH_CRIMSON_HUNTER: 					"Кровавый охотник",
			PARAGON_PATH_DEATH_ARROW: 						"Смертоносная стрела",
			PARAGON_PATH_SEVEN_FATES_ARCHER: 				"Лучник семи судеб",
			PARAGON_PATH_SWIFT_STRIDER: 					"Быстрый ходок",
			PARAGON_PATH_ADROIT_EXPLORER: 					"Находчивый исследователь",
			PARAGON_PATH_ANCESTRAL_INCARNATE: 				"Потомственное воплощение",
			PARAGON_PATH_BLOODFURY_SAVAGE: 					"Дикарь яростной крови",
			PARAGON_PATH_FEY_BEGUILER: 						"Фейский обманщик",
			PARAGON_PATH_FIRSTBORN_OF_MORADIN: 				"Перворождённый Морадина",
			PARAGON_PATH_HALFLING_SCOUNDREL: 				"Полурослик негодяй",
			PARAGON_PATH_MOONSTALKER: 						"Лунный охотник",
			PARAGON_PATH_SCION_OF_ARKHOSIA: 				"Наследник Аркозии",
			PARAGON_PATH_SHIERE_KNIGHT: 					"Рыцарь шайир",
			PARAGON_PATH_STONEBLESSED: 						"Камнесвященный",
			PARAGON_PATH_TURATHI_HIGHBORN: 					"Высокородный Турати",
			PARAGON_PATH_TWILIGHT_GUARDIAN: 				"Сумеречный страж",
			PARAGON_PATH_BLOODED_CHAMPION: 					"Кровавый чемпион",
			PARAGON_PATH_NATURE_S_AVATAR: 					"Воплощение природы",
			PARAGON_PATH_RRATHMAL: 							"Рратмал",
			PARAGON_PATH_SHARD_DISCIPLE: 					"Знаток частиц",			
			

			//epic destinies
			EPIC_DESTINY_ARCHMAGE: 							"Архимаг",
			EPIC_DESTINY_DEADLY_TRICKSTER: 					"Смертельный ловкач",
			EPIC_DESTINY_DEMIGOD: 							"Полубог",
			EPIC_DESTINY_ETERNAL_SEEKER: 					"Вечный странник",
			EPIC_DESTINY_FATESINGER: 						"Певец судьбы",
			EPIC_DESTINY_GLORIOUS_SPIRIT: 					"Великий дух",
			EPIC_DESTINY_HARBINGER_OF_DOOM: 				"Предвестник рока",
			EPIC_DESTINY_LOREKEEPER: 						"Хранитель мудрости",
			EPIC_DESTINY_PRIMAL_AVATAR: 					"Первородный аватар",
			EPIC_DESTINY_REVERED_ONE: 						"Почтенный мастер",
			EPIC_DESTINY_DIAMOND_SOUL: 						"Алмазная душа",
			EPIC_DESTINY_GODMIND: 							"Божественное сознание",
			EPIC_DESTINY_INVINCIBLE_MIND: 					"Непобедимый разум",
			EPIC_DESTINY_MASTER_OF_THE_ETERNAL_HUNT: 		"Мастер вечной охоты",
			EPIC_DESTINY_RUNE_MAKER: 						"Создатель рун",
			EPIC_DESTINY_WAR_MASTER: 						"Владыка войны",

			//field hits and captions
			FIELD_HINT_PORTRAIT: 							"Портрет вашего персонажа",
			ADD_XP_REPONSE_TEXT: 							"Вы получили опыт! Сколько?", 
			ADD_XP_RESPONSE_TITLE: 							"Добавить опыт",
			ADD_ADIAMONDS_REPONSE_TEXT: 					"Вы получили несколько астральных бриллиантов! Сколько?", 
			ADD_ADIAMONDS_RESPONSE_TITLE: 					"Добавить астральные бриллианты",
			ADD_PLATINUM_REPONSE_TEXT: 						"Вы получили несколько платиновых монет! Сколько?", 
			ADD_PLATINUM_RESPONSE_TITLE: 					"Добавить платиновые монеты",
			ADD_GOLD_REPONSE_TEXT: 							"Вы получили золотые монеты! Сколько?", 
			ADD_GOLD_RESPONSE_TITLE: 						"Добавить золотые монеты",			
			ADD_SILVER_REPONSE_TEXT: 						"Вы получили серебряные монеты! Сколько?", 
			ADD_SILVER_RESPONSE_TITLE: 						"Добавить серебряные монеты",															
			ADD_COPPER_REPONSE_TEXT: 						"Вы получили медные монеты! Сколько?", 
			ADD_COPPER_RESPONSE_TITLE: 						"Добавить медные монеты",
			SPEND_ADIAMONDS_REPONSE_TEXT: 					"Вы потратили несколько астральных бриллиантов! Сколько?", 
			SPEND_ADIAMONDS_RESPONSE_TITLE: 				"Потратить астральные бриллианты",
			SPEND_PLATINUM_REPONSE_TEXT: 					"Вы потратили платиновые монеты! Сколько?", 
			SPEND_PLATINUM_RESPONSE_TITLE: 					"Потратить платиновые монеты",
			SPEND_GOLD_REPONSE_TEXT: 						"Вы потратили золотые монеты! Сколько?", 
			SPEND_GOLD_RESPONSE_TITLE: 						"Потратить золотые монеты",			
			SPEND_SILVER_REPONSE_TEXT: 						"Вы потратили серебряные монеты! Сколько?", 
			SPEND_SILVER_RESPONSE_TITLE: 					"Потратить серебряные монеты",															
			SPEND_COPPER_REPONSE_TEXT: 						"Вы потратили медные монеты! Сколько?", 
			SPEND_COPPER_RESPONSE_TITLE: 					"Потратить медные монеты"			

		}		

	}

};