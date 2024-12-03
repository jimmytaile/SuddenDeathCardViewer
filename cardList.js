// List of Cards
const cardList = new Array(
  // Abilities
  ["agony_manifest", "Agony Manifest", "Ability", "Icklurtra"],
  ["bomber_games", "Bomber Games", "Ability", "Moneybags"],
  ["danse_macabre", "Danse Macabre", "Ability", "Hitzel"],
  ["death_bloom", "Death Bloom", "Ability", "Helen"],
  ["desire_fire", "Desire Fire", "Ability", "Vivian"],
  ["devil_slayer", "Devil Slayer", "Ability", "Zormaku"],
  ["eye_of_principal", "Eye of Principal", "Ability", "Deimos"],
  ["futuristic_imagination", "Futuristic Imagination", "Ability", "Chrona"],
  ["harbinger_sense", "Harbinger Sense", "Ability", "Felicity"],
  ["harpoon_toss", "Harpoon Toss", "Ability", "Ximing"],
  ["ignore", "Ignore", "Ability", "Blinker"],
  ["imitation_ooze", "Imitation Ooze", "Ability", "Phobos"],
  ["immortal_body", "Immortal Body", "Ability", "Thysia"],
  ["investigate", "Investigate", "Ability", "Choizao"],
  ["life_swap", "Life Swap", "Ability", "Isabelle"],
  ["mass_pickle_doomsday_ray", "Mass Pickle Doomsday Ray", "Ability", "Geevil"],
  ["midas_touch", "Midas Touch", "Ability", "Quincy"],
  ["right_of_way", "Right-of-Way", "Ability", "Traffic Knight"],
  ["royal_ego", "Royal Ego", "Ability", "Zekoma"],
  ["shiromix", "Shiromix", "Ability", "Shiro"],
  ["suction_bomb", "Suction Bomb", "Ability", "Ezello Nariz"],
  ["sudden_nibble", "Sudden Nibble", "Ability", "Nibble"],
  ["turbocharger_on", "Turbocharger On", "Ability", "Orion"],
  ["vending_machine", "Vending Machine", "Ability", "Miedo"],
  ["viridescent_calling", "Viridescent Calling", "Ability", "Bishop"],
  ["white_noise_complex", "White Noise Complex", "Ability", "Glifa"],
  // Deck Cards
  ["10_10_mediocrity", "10/10 Mediocrity", "Event", ""],
  ["abnormal_trick", "Abnormal Trick", "Event", ""],
  ["afterschool_cult_meeting", "Afterschool Cult Meeting", "Event", ""],
  ["anaheim_pepper", "Anaheim Pepper", "Event", "Pepper"],
  ["anxiety_gradient", "Anxiety Gradient", "Event", ""],
  ["aurora_eclipse", "Aurora Eclipse", "Event", ""],
  ["bad_apple", "Bad Apple", "Event", ""],
  ["balatro_hijinks", "Balatro Hijinks", "Event", ""],
  ["bathroom_break", "Bathroom Break", "Event", ""],
  ["battle_report", "Battle Report", "Event", ""],
  ["bell_pepper", "Bell Pepper", "Event", "Pepper"],
  ["best_friend_boost", "Best Friend Boost", "Event", ""],
  ["bishops_blessing", "Bishop's Blessing", "Event", ""],
  ["black_claw", "Black Claw", "Event", ""],
  ["blasphemy", "Blasphemy", "Event", ""],
  ["bloated_horror", "Bloated Horror", "Event", ""],
  ["boodle_bag", "Boodle Bag", "Event", ""],
  ["boom", "BOOM!", "Event", ""],
  ["bottom_feeder", "Bottom Feeder", "Event", ""],
  ["bounty_board", "Bounty Board", "Event", ""],
  ["bounty_hunter", "Bounty Hunter", "Event", ""],
  ["brain_limbo", "Brain Limbo", "Event", ""],
  ["broccoli_benediction", "Broccoli Benediction", "Event", ""],
  ["candy_tower", "Candy Tower", "Event", ""],
  ["capital_diplomacy", "Capital Diplomacy", "Event", ""],
  ["carolina_reaper", "Carolina Reaper", "Event", "Pepper"],
  ["carrion_delivery", "Carrion Delivery", "Event", ""],
  ["cayenne_pepper", "Cayenne Pepper", "Event", "Pepper"],
  ["church_of_ganjugomu", "Church of Ganjugomu", "Event", ""],
  ["citrus_caper", "Citrus Caper", "Event", ""],
  ["colossal_terror", "Colossal Terror", "Event", ""],
  ["confectionary_champion", "Confectionary Champion", "Event", ""],
  ["contaminated_water", "Contaminated Water", "Event", ""],
  ["criminal_culling", "Criminal Culling", "Event", ""],
  ["crimson_maiden", "Crimson Maiden", "Event", ""],
  ["dark_prog", "Dark Prog", "Event", ""],
  ["dead_dread_disease", "Dead Dread Disease", "Event", ""],
  ["delete", "Delete", "Event", ""],
  ["delirium", "Delirium", "Event", ""],
  ["despotic_worm", "Despotic Worm", "Event", ""],
  ["double_up", "Double Up", "Event", ""],
  ["dragons_breath", "Dragon's Breath", "Event", "Pepper"],
  ["dream_driver", "Dream Driver", "Event", ""],
  ["dynamite_disco_deal", "Dynamite Disco Deal", "Event", ""],
  ["eavesdrop", "Eavesdrop", "Event", ""],
  ["electric_public", "Electric Public", "Event", ""],
  ["electroball", "Electroball", "Event", ""],
  ["encyclopedic_memory", "Encyclopedic Memory", "Event", ""],
  ["erased", "Erased", "Event", ""],
  ["expel_evil", "Expel Evil", "Event", ""],
  ["faceless_shambles", "Faceless Shambles", "Event", ""],
  ["floridian_doorway", "Floridian Doorway", "Event", ""],
  ["fortune_cookie", "Fortune Cookie", "Event", ""],
  ["funny_sunny_day", "Funny Sunny Day", "Event", ""],
  ["furcifer", "Furcifer", "Event", ""],
  ["gamblers_paradox", "Gamblers_Paradox", "Event", ""],
  ["ghost_pepper", "Ghost Pepper", "Event", ""],
  ["glutton", "Glutton", "Event", ""],
  ["goon_delivery", "Goon Delivery", "Event", ""],
  ["grave_robbery", "Grave Robbery", "Event", ""],
  ["green_light", "Green Light", "Event", ""],
  ["guardian_of_tebble", "Guardian of Tebble", "Event", ""],
  ["habanero", "Habanero", "Event", "Pepper"],
  ["head_envy", "Head Envy", "Event", ""],
  ["hired_help", "Hired Help", "Event", ""],
  ["honey_bath", "Honey Bath", "Event", ""],
  ["honeycomb_enigma", "Honeycomb Enigma", "Event", ""],
  ["hour_of_pain", "Hour of Pain", "Event", ""],
  ["initiation_ceremony", "Initiation Ceremony", "Event", ""],
  ["jalapeno", "Jalapeño", "Event", "Pepper"],
  ["joyful_jamboree", "Joyful Jamboree", "Event", ""],
  ["knife_vacation", "Knife Vacation", "Event", ""],
  ["leper", "Leper", "Event", ""],
  ["life_bloom", "Life Bloom", "Event", ""],
  ["liquid_wish", "Liquid Wish", "Event", ""],
  ["lollipop_bash", "Lollipop Bash", "Event", ""],
  ["marcidus_curse", "Marcidus Curse", "Event", ""],
  ["martian_blitz", "Martian Blitz", "Event", ""],
  ["masticate", "Masticate", "Event", ""],
  ["mathematics_madness", "Mathematics Madness", "Event", ""],
  ["money_money_money", "Money Money Money", "Event", ""],
  ["ms_invitation", "M's Invitation", "Event", ""],
  ["mulato_pepper", "Mulato Pepper", "Event", "Pepper"],
  ["murder_route", "Murder Route", "Event", ""],
  ["naga_viper", "Naga Viper", "Event", "Pepper"],
  ["netherpain", "Netherpain", "Event", ""],
  ["new_lease_on_life", "New Lease on Life", "Event", ""],
  ["nibble", "Nibble", "Event", ""],
  ["nibble_stand", "Nibble Stand", "Event", ""],
  ["nose_baron", "Nose Baron", "Event", ""],
  ["oak_imprisonment", "Oak Imprisonment", "Event", ""],
  ["occult_shop", "Occult Shop", "Event", ""],
  ["one_two", "One-Two", "Event", ""],
  ["paradise_algorithm", "Paradise Algorithm", "Event", ""],
  ["peeping_on_tom", "Peeping on Tom", "Event", ""],
  ["peeping_tom", "Peeping Tom", "Event", ""],
  ["pepper_x", "Pepper X", "Event", "Pepper"],
  ["phasmonautica", "Phasmonautica", "Event", ""],
  ["philanthropy", "Philanthropy", "Event", ""],
  ["pickle_beam", "Pickle Beam", "Event", ""],
  ["pink_playtime", "Pink Playtime", "Event", ""],
  ["placebo", "Placebo", "Event", ""],
  ["plutocrats_cough", "Plutocrat's Cough", "Event", ""],
  ["poblano", "Poblano", "Event", "Pepper"],
  ["psychologic_tribe", "Psychologic Tribe", "Event", ""],
  ["psychotic_mind_coffin", "Psychotic Mind Coffin", "Event", ""],
  ["purgation_parade", "Purgation Parade", "Event", ""],
  ["purple_pity_party", "Purple Pity Party", "Event", ""],
  ["red_light", "Red Light", "Event", ""],
  ["redemption_chains", "Redemption Chains", "Event", ""],
  ["sad_mans_woes", "Sad Man's Woes", "Event", ""],
  ["secret_soup", "Secret Soup", "Event", ""],
  ["serrano_pepper", "Serrano Pepper", "Event", "Pepper"],
  ["shady_alleyway", "Shady Alleyway", "Event", ""],
  ["short_fuse", "Short Fuse", "Event", ""],
  ["smoke_break", "Smoke Break", "Event", ""],
  ["snail_sale", "Snail Sale", "Event", ""],
  ["sniff_sniff", "Sniff Sniff", "Event", ""],
  ["soul_harvest", "Soul Harvest", "Event", ""],
  ["spectral_torch", "Spectral Torch", "Event", ""],
  ["spiral_obsession", "Spiral Obsession", "Event", ""],
  ["static_chaos_syndrome", "Static Chaos Syndrome", "Event", ""],
  ["stitched_hecatomb", "Stitched Hecatomb", "Event", ""],
  ["stress", "Stress", "Event", ""],
  ["terminus_signal", "Terminus Signal", "Event", ""],
  ["triple_scoop", "Triple Scoop", "Event", ""],
  ["underworld_banquet", "Underworld Banquet", "Event", ""],
  ["unhumanization_trial", "Unhumanization Trial", "Event", ""],
  ["unleash_armageddon", "Unleash Armageddon", "Event", ""],
  ["vertigo", "Vertigo", "Event", ""],
  ["vicious_bait", "Vicious Bait", "Event", ""],
  ["wandering_wisp", "Wandering Wisp", "Event", ""],
  ["wax_pepper", "Wax Pepper", "Event", "Pepper"],
  ["white_panoply", "White Panoply", "Event", ""],
  ["yellow_light", "Yellow Light", "Event", ""],
  ["zero_degree_murder", "Zero-Degree Murder", "Event", ""],
  // Items
  ["asternsolid_shell", "Asternsolid Shell", "Item", ""],
  ["backup_milk_carton", "Backup Milk Carton", "Item", ""],
  ["blood_wine", "Blood Wine", "Item", ""],
  ["capsaicin_core", "Capsaicin Core", "Item", ""],
  ["chatty", "Chatty", "Item", ""],
  ["clown_cola", "Clown Cola", "Item", ""],
  ["dark_white", "Dark White", "Item", ""],
  ["detached_hand", "Detached Hand", "Item", ""],
  ["eidolon_elixir", "Eidolon Elixir", "Item", ""],
  ["flesh_fungus", "Flesh Fungus", "Item", ""],
  ["follower_mask", "Follower Mask", "Item", "Mask"],
  ["freshly_squeezed_lemonade", "Freshly Squeezed Lemonade", "Item", ""],
  ["nibble_bar", "Nibble Bar", "Item", ""],
  ["observers_eye", "Observer's Eye", "Item", ""],
  ["orion_blizzard", "ORION Blizzard", "Item", "ORION"],
  ["orion_cyclone", "ORION Cyclone", "Item", "ORION"],
  ["orion_quake", "ORION Quake", "Item", "ORION"],
  ["orion_storm", "ORION Storm", "Item", "ORION"],
  ["orion_tornado", "ORION Tornado", "Item", "ORION"],
  ["orion_tsunami", "ORION Tsunami", "Item", "ORION"],
  ["orion_volcano", "ORION Volcano", "Item", "ORION"],
  ["pocket_encyclopedia", "Pocket Encyclopedia", "Item", ""],
  ["potion_of_self_love", "Potion of Self-Love", "Item", ""],
  ["psychologic_mask", "Psychologic Mask", "Item", "Mask"],
  ["remote_control", "Remote Control", "Item", ""],
  ["sniffer_mask", "Sniffer Mask", "Item", "Mask"],
  ["strange_totem", "Strange Totem", "Item", ""],
  ["trusty_magnifying_glass", "Trusty Magnifying Glass", "Item", ""],
  // Tokens
  ["2_gold", "+2 Gold", "Event", ""],
  ["accept_invitation", "Accept Invitation", "Event", ""],
  ["acidification", "Acidification", "Event", ""],
  ["bbs_help", "B.B.'s Help'", "Event", ""],
  ["blue_paper", "Blue Paper", "Event", ""],
  ["both_kinda_pain", "Both Kinda Pain", "Event", ""],
  ["chocolate", "Chocolate!!!", "Event", ""],
  ["deny_invitation", "Deny Invitation", "Event", ""],
  ["devastation", "Devastation", "Event", ""],
  ["emotional_pain", "Emotional Pain", "Event", ""],
  ["exsanguination", "Exsanguination", "Event", ""],
  ["fame", "Fame", "Event", ""],
  ["fortune", "Fortune", "Event", ""],
  ["fun", "Fun", "Event", ""],
  ["gelatos_help", "Gelato's Help", "Event", ""],
  ["good_goods", "Good Goods", "Event", ""],
  ["hot_pobombo", "Hot Pobombo", "Event", ""],
  ["knife", "Knife", "Event", ""],
  ["lacerated", "Lacerated", "Event", ""],
  ["masochist_armor", "Masochist Armor", "Item", ""],
  ["one_lemonade_please", "One Lemonade Please!", "Event", ""],
  ["physical_pain", "Physical Pain", "Event", ""],
  ["pinkys_help", "Pinky's Help", "Event", ""],
  ["red_paper", "Red Paper", "Event", ""],
  ["strangled", "Strangled", "Event", ""],
  ["useless_gold_1", "Useless Gold", "Event", ""],
  ["useless_gold_2", "Useless Gold", "Event", ""],
  ["useless_gold_3", "Useless Gold", "Event", ""],
  ["useless_gold_4", "Useless Gold", "Event", ""],
  ["useless_gold_5", "Useless Gold", "Event", ""],
  ["useless_gold_6", "Useless Gold", "Event", ""],
  ["useless_gold_7", "Useless Gold", "Event", ""],
  ["useless_gold_8", "Useless Gold", "Event", ""],
  ["useless_gold_9", "Useless Gold", "Event", ""],
  ["useless_gold_10", "Useless Gold", "Event", ""],
  ["useless_gold_11", "Useless Gold", "Event", ""],
  ["useless_gold_12", "Useless Gold", "Event", ""]
);