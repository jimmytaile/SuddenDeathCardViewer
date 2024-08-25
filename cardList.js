// List of Cards
const cardList = new Array(
  // Abilities
  ["abnormal_trick", "Abnormal Trick", "Eye Horror", "Momokashi"],
  ["agony_manifestation", "Agony Manifestation", "Blood Curse", "Ichor"],
  ["bomber_games", "Bomber Games", "Bomb", "Moneybags"],
  ["capital_diplomacy", "Capital Diplomacy", "Hot Dog Mutant", "Frank"],
  ["carrot_code", "Carrot Code", "Carrot Mutant", "Vitaminh"],
  ["danse_macabre", "Danse Macabre", "Blood Horror", "Hitzel"],
  ["death_bloom", "Death Bloom", "Flower Curse", "Helen"],
  ["desire_fire", "Desire Fire", "Spirit", "Vivian"],
  ["devil_slayer", "Devil Slayer", "Horror Killer", "Zormaku"],
  ["dynamite_disco_deal", "Dynamite Disco Deal", "Business", "Egao"],
  ["eye_of_principal", "Eye of Principal", "Mental", "Deimos"],
  ["futuristic_imagination", "Futuristic Imagination", "Temporal", "Chrona"],
  ["gamblers_paradox", "Gambler's Paradox", "Shambler Curse", "Nyx"],
  ["harbinger_sense", "Harbinger Sense", "Curse", "Felicity"],
  ["harpoon_toss", "Harpoon Toss", "Aquatic Killer", "Ximing"],
  ["ignore", "Ignore", "Snail Curse", "Blinker"],
  ["imitation_ooze", "Imitation Ooze", "Slime", "Phobos"],
  ["immortal_body", "Immortal Body", "Ritual Curse", "Thysia"],
  ["impending_doom", "Impending DOOM", "Curse Ritual", "Armageddon"],
  ["investigate", "Investigate", "Police", "Choizao"],
  ["knife_vacation", "Knife Vacation", "Human Killer", "PTK"],
  ["life_swap", "Life Swap", "Curse", "Isabelle"],
  ["mass_pickle_doomsday_ray", "Mass Pickle Doomsday Ray", "Pickle Mutant", "Geevil"],
  ["midas_touch", "Midas Touch", "Psychologic Tribe", "Quincy"],
  ["phasmonautica", "Phasmonautica", "Spirit", "Umbra"],
  ["redemption_chains", "Redemption Chains", "Police", "Detective Dark"],
  ["right_of_way", "Right-of-Way", "Police", "Traffic Knight"],
  ["royal_ego", "Royal Ego", "Pepper", "Zekoma"],
  ["shiromix", "Shiromix", "Remix", "Shiro"],
  ["suction_bomb", "Suction Bomb", "Business Nose", "Ezello Nariz"],
  ["sudden_nibble", "Sudden Nibble", "Spirit Hunger", "Nibble"],
  ["turbocharger_on", "Turbocharger On", "Mars", "Orion"],
  ["vending_machine", "Vending Machine", "Mascot Machine", "Miedo"],
  ["viridescent_calling", "Viridescent Calling", "Ritual", "Bishop"],
  ["white_noise_complex", "White Noise Complex", "Broadcast", "Glifa"],
  // Deck Cards
  ["acidification", "Acidification", "Acid Slime", ""],
  ["afterschool_cult_meeting", "Afterschool Cult Meeting", "Ritual", "Thysia"],
  ["anaheim_pepper", "Anaheim Pepper", "Pepper", ""],
  ["aurora_eclipse", "Aurora Eclipse", "Curse", "Isabelle"],
  ["bad_apple", "Bad Apple", "Apple Horror", ""],
  ["bathroom_break", "Bathroom Break", "Human Killer", "Aka Manto"],
  ["battle_report", "Battle Report", "Broadcast", "Glifa"],
  ["bell_pepper", "Bell Pepper", "Pepper", ""],
  ["best_friend_boost", "Best Friend Boost", "School", "Orion"],
  ["bishops_blessing", "Bishop's Blessing", "Ritual", "Bishop"],
  ["black_claw", "Black Claw", "Spirit", "Balance"],
  ["bloated_horror", "Bloated Horror", "Hunger Curse", ""],
  ["boom", "BOOM!", "Bomb", "Moneybags"],
  ["bottom_feeder", "Bottom Feeder", "Hunger Curse", ""],
  ["bounty_board", "Bounty Board", "Killer", ""],
  ["bounty_hunter", "Bounty Hunter", "Aquatic Killer", "Ximing"],
  ["broccoli_benediction", "Broccoli Benediction", "Broccoli Ritual", ""],
  ["candy_tower", "Candy Tower", "Candy", ""],
  ["carolina_reaper", "Carolina Reaper", "Pepper", ""],
  ["carrion_delivery", "Carrion Delivery", "Bird Horror", ""],
  ["carrot_juice_vendor", "Carrot Juice Vendor", "Carrot Business", "Vitaminh"],
  ["cayenne_pepper", "Cayenne Pepper", "Pepper", ""],
  ["church_of_ganjugomu", "Church of Ganjugomu", "Flower Ritual", ""],
  ["citrus_caper", "Citrus Caper", "Lemon Mutant", ""],
  ["cold_killer", "Cold Killer", "Human Killer", "Phobos"],
  ["colossal_terror", "Colossal Terror", "Pickle Mutant", "Geevil"],
  ["confectionary_champion", "Confectionary Champion", "Candy Mutant", ""],
  ["contaminated_water", "Contaminated Water", "Blood Curse", ""],
  ["crepuscular_anathema", "Crepuscular Anathema", "Spirit Curse", "Chatty"],
  ["criminal_culling", "Criminal Culling", "Human Killer", "Aka Manto"],
  ["crimson_maiden", "Crimson Maiden", "Blood Horror", "Ichor"],
  ["dark_prognostication", "Dark Prognostication", "Spirit", "Shin"],
  ["delirium", "Delirium", "Mental", "Deimos"],
  ["double_up", "Double Up", "Human Horror", ""],
  ["dragons_breath", "Dragon's Breath", "Pepper", ""],
  ["drunken_wish", "Drunken Wish", "Drug Spirit", "Woozy"],
  ["eavesdrop", "Eavesdrop", "Ear Horror", "Cochlea"],
  ["electric_public", "Electric Public", "Broadcast", "Glifa"],
  ["electroball", "Electroball", "Police", ""],
  ["encyclopedic_memory", "Encyclopedic Memory", "Mental Curse", "Choizao"],
  ["erased", "Erased", "School Horror", "Eraser Head"],
  ["expel_evil", "Expel Evil", "Blood Curse", ""],
  ["explosive_parasite", "Explosive Parasite", "Bomb Slime", ""],
  ["faceless_shambles", "Faceless Shambles", "Shambler Curse", ""],
  ["failing_papers", "Failing Papers", "School Paper", ""],
  ["fatigue", "Fatigue", "Mental Curse", ""],
  ["floridian_doorway", "Floridian Doorway", "Mouth Horror", ""],
  ["funny_sunny_day", "Funny Sunny Day", "School", ""],
  ["ghost_pepper", "Ghost Pepper", "Spirit Pepper", ""],
  ["gluttonous_punishment", "Gluttonous Punishment", "Hunger Curse", ""],
  ["goon_delivery", "Goon Delivery", "Psychologic Tribe", ""],
  ["grave_robbery", "Grave Robbery", "Human Killer", ""],
  ["green_light", "Green Light", "Police", "Traffic Knight"],
  ["guardian_of_tebble", "Guardian of Tebble", "Eye Horror", ""],
  ["habanero", "Habanero", "Pepper", ""],
  ["head_envy", "Head Envy", "Human Horror", "Head Collector"],
  ["hijack", "Hijack", "Hack", "Troy"],
  ["hired_help", "Hired Help", "Mascot Killer", "B.B."],
  ["honey_lurker", "Honey Lurker", "Honey Slime", ""],
  ["honeycomb_enigma", "Honeycomb Enigma", "Honey Curse", ""],
  ["hour_of_pain", "Hour of Pain", "Blood Killer", "Ichor"],
  ["hunting_season", "Hunting Season", "Spirit", ""],
  ["hysteric_phase_show", "Hysteric Phase Show", "Remix", "Shiro"],
  ["initiation_ceremony", "Initiation Ceremony", "Ritual", ""],
  ["jalapeno", "Jalapeño", "Pepper", ""],
  ["joyful_jamboree", "Joyful Jamboree", "Clown Curse", ""],
  ["lacerate", "Lacerate", "Human Killer", "Aka Manto"],
  ["leper", "Leper", "School Curse", "Felicity"],
  ["life_bloom", "Life Bloom", "Flower Ritual", ""],
  ["lollipop_bash", "Lollipop Bash", "Candy Mutant", ""],
  ["martian_blitz", "Martian Blitz", "Mars", "Orion"],
  ["masticate", "Masticate", "Mouth Horror", ""],
  ["mathematics_manifestation", "Mathematics Manifestation", "School Curse", "Math Maniac"],
  ["mental_strain", "Mental Strain", "Mental Curse", ""],
  ["money_money_money", "Money Money Money", "Business Curse", ""],
  ["mothman_sighting", "Mothman Sighting", "Bird Horror", "Mothman"],
  ["mulato_pepper", "Mulato Pepper", "Pepper", ""],
  ["murder_route", "Murder Route", "Human Killer", "PTK"],
  ["naga_viper", "Naga Viper", "Pepper", ""],
  ["netherpain", "Netherpain", "Blood Horror", ""],
  ["new_lease_on_life", "New Lease on Life", "Police", "Detective Dark"],
  ["nibble", "Nibble", "Spirit Hunger", "Nibble"],
  ["nibble_stand", "Nibble Stand", "Lemon Business", "Nibble"],
  ["nose_baron", "Nose Baron", "Business Nose", "Ezello Nariz"],
  ["oak_imprisonment", "Oak Imprisonment", "Ritual", ""],
  ["occult_shop", "Occult Shop", "Ritual Business", ""],
  ["one_in_a_million_invitation", "One in a Million Invitation", "Mutant Killer", "Eco"],
  ["one_two", "One-Two", "Hot Dog Mutant", "Frank"],
  ["paradise", "Paradise", "Dream", ""],
  ["party_addict", "Party Addict", "Drug", "Wade"],
  ["peeping_on_tom", "Peeping on Tom", "Eye Horror", "Tom"],
  ["peeping_tom", "Peeping Tom", "Eye Horror", "Tom"],
  ["pepper_x", "Pepper X", "Pepper", "Pepper X"],
  ["philanthropy", "Philanthropy", "Business", "Egao"],
  ["pickle_beam", "Pickle Beam", "Pickle Mutant", "Geevil"],
  ["pink_pink_playtime", "Pink Pink Playtime", "Mascot Killer", "Pinky"],
  ["placebo", "Placebo", "Psychologic Tribe Drug", ""],
  ["plutocrats_cough", "Plutocrat's Cough", "Business Curse", ""],
  ["poblano", "Poblano", "Pepper", ""],
  ["poltergeist", "Poltergeist", "Spirit", "Wisp"],
  ["psychologic_tribe", "Psychologic Tribe", "Psychologic Tribe", ""],
  ["psychotic_mind_coffin", "Psychotic Mind Coffin", "Mental Horror", "???"],
  ["purgation_parade", "Purgation Parade", "Spirit", "Plague"],
  ["purple_pity_party", "Purple Pity Party", "Mascot Killer", "Miedo"],
  ["red_light", "Red Light", "Police", "Traffic Knight"],
  ["revenge_ooze", "Revenge Ooze", "Blood Slime", ""],
  ["sad_mans_woes", "Sad Man's Woes", "Spirit", "Plague"],
  ["secret_soup", "Secret Soup", "Soup Mutant", "Albert"],
  ["serrano_pepper", "Serrano Pepper", "Pepper", ""],
  ["shady_alleyway", "Shady Alleyway", "Psychologic Tribe", "Quincy"],
  ["short_fuse", "Short Fuse", "Bomb", ""],
  ["shut_down", "Shut Down", "Hack", "Troy"],
  ["smoke_break", "Smoke Break", "Drug Horror", ""],
  ["snail_sale", "Snail Sale", "Snail Business", "Blinker"],
  ["sniff_sniff", "Sniff Sniff", "Nose Horror", ""],
  ["soul_harvest", "Soul Harvest", "Spirit", "Vivian"],
  ["spectral_torch", "Spectral Torch", "Spirit", "Umbra"],
  ["spiral_obsession", "Spiral Obsession", "Snail Curse", ""],
  ["spontaneous_combustion", "Spontaneous Combustion", "Curse", ""],
  ["star_cleansing_ray", "Star Cleansing Ray", "Eye Horror", ""],
  ["stitched_hecatomb", "Stitched Hecatomb", "Human Killer", ""],
  ["strangle", "Strangle", "Human Killer", "Aka Manto"],
  ["threat_level", "Threat Level", "Town Curse", ""],
  ["triple_scoop", "Triple Scoop", "Ice Cream Mutant", ""],
  ["underground_experiment", "Underground Experiment", "Slime", ""],
  ["underworld_banquet", "Underworld Banquet", "Ritual", "Bishop"],
  ["unleash_armageddon", "Unleash Armageddon", "Curse", "Armageddon"],
  ["vertigo", "Vertigo", "Snail Curse", "Blinker"],
  ["vicious_bait", "Vicious Bait", "Aquatic Horror", ""],
  ["vitamin_boost", "Vitamin Boost", "Carrot Mutant", "Vitaminh"],
  ["wandering_wisp", "Wandering Wisp", "Spirit", "Wisp"],
  ["wax_pepper", "Wax Pepper", "Pepper", ""],
  ["yellow_light", "Yellow Light", "Police", "Traffic Knight"],
  // Items
  ["asternsolid_shell", "Asternsolid Shell", "Snail Artifact", "Blinker"],
  ["blood_wine", "Blood Wine", "Drug Drink", ""],
  ["boodle_bag", "Boodle Bag", "Psychologic Tribe", ""],
  ["capsaicin_core", "Capsaicin Core", "Pepper Artifact", ""],
  ["chatty_the_talking_witch_hat", "Chatty the Talking Witch Hat", "Spirit Artifact", "Chatty"],
  ["clown_cola", "Clown Cola", "Mascot Drink", ""],
  ["dark_white", "Dark White", "Curse Book", ""],
  ["detached_hand", "Detached Hand", "Blood Hand", ""],
  ["eidolon_elixir", "Eidolon Elixir", "Spirit Drink", ""],
  ["flesh_fungus", "Flesh Fungus", "Eye Drug", ""],
  ["follower_mask", "Follower Mask", "Ritual Mask", ""],
  ["fortune_cookie", "Fortune Cookie", "Food", ""],
  ["freshly_squeezed_lemonade", "Freshly Squeezed Lemonade", "Lemon Drink", ""],
  ["nibble_bar", "Nibble Bar", "Candy", ""],
  ["observers_eye", "Observer's Eye", "Eye Horror", ""],
  ["orion_blizzard", "ORION Blizzard", "ORION", ""],
  ["orion_cyclone", "ORION Cyclone", "ORION", ""],
  ["orion_quake", "ORION Quake", "ORION", ""],
  ["orion_storm", "ORION Storm", "ORION", ""],
  ["orion_tornado", "ORION Tornado", "ORION", ""],
  ["orion_tsunami", "ORION Tsunami", "ORION", ""],
  ["orion_volcano", "ORION Volcano", "ORION", ""],
  ["pocket_encyclopedia", "Pocket Encyclopedia", "Book", ""],
  ["potion_of_self_love", "Potion of Self Love", "Drink", ""],
  ["psychologic_mask", "Psychologic Mask", "Psychologic Tribe Mask", ""],
  ["remote_control", "Remote Control", "Broadcast Device", ""],
  ["sniffer_mask", "Sniffer Mask", "Nose Mask", "Sniffer"],
  ["strange_totem", "Strange Totem", "Curse Artifact", ""],
  ["trusty_magnifying_glass", "Trusty Magnifying Glass", "Police", "Detective Dark"],
  // Tokens
  ["blue_paper", "Blue Paper", "Paper", ""],
  ["body_prison", "Body Prison", "Police", "Detective Dark"],
  ["consumed_by_the_void", "Consumed by the Void", "Shambler Curse", "Nyx"],
  ["despotic_worm", "Despotic Worm", "Hack Worm", ""],
  ["hot_pobombo", "Hot Pobombo", "Bomb", "Moneybags"],
  ["knife", "Knife", "Knife", "PTK"],
  ["marcidus_curse", "Marcidus Curse", "Curse", "Felicity"],
  ["masochist_armor", "Masochist Armor", "Blood Armor", "Ichor"],
  ["mutated_abnormal_trick", "Mutated Abnormal Trick", "Eye Horror", "Nyx"],
  ["mutated_agony_manifestation", "Mutated Agony Manifestation", "Blood Curse", "Nyx"],
  ["mutated_body_prison", "Mutated Body Prison", "Police", "Nyx"],
  ["mutated_bomber_games", "Mutated Bomber Games", "Bomb", "Nyx"],
  ["mutated_capital_diplomacy", "Mutated Capital Diplomacy", "Hot Dog Mutant", "Nyx"],
  ["mutated_carrot_code", "Mutated Carrot Code", "Carrot Mutant", "Nyx"],
  ["mutated_danse_macabre", "Mutated Danse Macabre", "Blood Horror", "Nyx"],
  ["mutated_death_bloom", "Mutated Death Bloom", "Flower Curse", "Nyx"],
  ["mutated_desire_fire", "Mutated Desire Fire", "Spirit", "Nyx"],
  ["mutated_devil_slayer", "Mutated Devil Slayer", "Horror Killer", "Nyx"],
  ["mutated_dynamite_disco_deal", "Mutated Dynamite Disco Deal", "Business", "Nyx"],
  ["mutated_eye_of_principal", "Mutated Eye of Principal", "Mental", "Nyx"],
  ["mutated_futuristic_imagination", "Mutated Futuristic Imagination", "Temporal", "Nyx"],
  ["mutated_harbinger_sense", "Mutated Harbinger Sense", "Curse", "Nyx"],
  ["mutated_harpoon_toss", "Mutated Harpoon Toss", "Aquatic Killer", "Nyx"],
  ["mutated_hot_pobombo", "Mutated Hot Pobombo", "Bomb", "Nyx"],
  ["mutated_ignore", "Mutated Ignore", "Snail Curse", "Nyx"],
  ["mutated_imitation_ooze", "Mutated Imitation Ooze", "Slime", "Nyx"],
  ["mutated_immortal_body", "Mutated Immortal Body", "Ritual Curse", "Nyx"],
  ["mutated_impending_doom", "Mutated Impending DOOM", "Curse Ritual", "Nyx"],
  ["mutated_investigate", "Mutated Investigate", "Police", "Nyx"],
  ["mutated_knife", "Mutated Knife", "Knife", "Nyx"],
  ["mutated_knife_vacation", "Mutated Knife Vacation", "Human Killer", "Nyx"],
  ["mutated_life_swap", "Mutated Life Swap", "Curse", "Nyx"],
  ["mutated_marcidus_curse", "Mutated Marcidus Curse", "Curse", "Nyx"],
  ["mutated_masochist_armor", "Mutated Masochist Armor", "Blood Armor", "Nyx"],
  ["mutated_mass_pickle_doomsday_ray", "Mutated Mass Pickle Doomsday Ray", "Pickle Mutant", "Nyx"],
  ["mutated_midas_touch", "Mutated Midas Touch", "Psychologic Tribe", "Nyx"],
  ["mutated_phasmonautica", "Mutated Phasmonautica", "Spirit", "Nyx"],
  ["mutated_redemption_chains", "Mutated Redemption Chains", "Police", "Nyx"],
  ["mutated_right_of_way", "Mutated Right-of-Way", "Police", "Nyx"],
  ["mutated_royal_ego", "Mutated Royal Ego", "Pepper", "Nyx"],
  ["mutated_shiromix", "Mutated Shiromix", "Remix", "Nyx"],
  ["mutated_suction_bomb", "Mutated Suction Bomb", "Business Nose", "Nyx"],
  ["mutated_sudden_nibble", "Mutated Sudden Nibble", "Spirit Hunger", "Nyx"],
  ["mutated_turbocharger_on", "Mutated Turbocharger On", "Mars", "Nyx"],
  ["mutated_vending_machine", "Mutated Vending Machine", "Mascot Machine", "Nyx"],
  ["mutated_viridescent_calling", "Mutated Viridescent Calling", "Ritual", "Nyx"],
  ["mutated_white_noise_complex", "Mutated White Noise Complex", "Broadcast", "Nyx"],
  ["red_paper", "Red Paper", "Paper", ""],
  ["useless_gold_1", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_2", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_3", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_4", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_5", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_6", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_7", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_8", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_9", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_10", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_11", "Useless Gold", "Useless Gold", ""],
  ["useless_gold_12", "Useless Gold", "Useless Gold", ""]
);