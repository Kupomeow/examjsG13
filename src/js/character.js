let characters = [
    {
        "id" : 0,
        "name" : "Ana",
        "description" : "L’arsenal polyvalent d’Ana lui permet de soigner et de renforcer ses alliés à distance, tandis que son fusil biotique, ses fléchettes tranquillisantes et ses grenades biotiques neutralisent quiconque menace ses camarades.",
        "role" : roles[1],
        "competences" : [
            skills[0], skills[1], skills[2], skills[3]
        ],
        "image" : "ana.png"
    },
    {
        "id" : 1,
        "name" : "Ange",
        "description" : "L’armure Valkyrie d’Ange lui permet de veiller sur ses coéquipiers tel un ange gardien. Grâce aux rayons de son Caducée, elle peut les soigner, les ressusciter ou les renforcer.",
        "role" : roles[1],
        "competences" : [
            skills[4], skills[5], skills[6], skills[7], skills[8], skills[9]
        ],
        "image" : "mercy.png"
    },
    {
        "id" : 2,
        "name" : "Ashe",
        "description" : "Ashe fait feu rapidement en tenant sa carabine à hauteur de hanche ou bien utilise son viseur pour infliger un tir dévastateur. Elle peut faire sauter ses ennemis avec des bâtons de dynamite et les salves puissantes de son canon scié lui permettent de les repousser. Et elle n’est pas seule : quand le besoin s’en fait sentir, elle peut appeler à la rescousse Bob, son ami omniaque.",
        "role" : roles[0],
        "competences" : [
            skills[10], skills[11], skills[12], skills[13]
        ],
        "image" : "ashe.png"
    },
    {
        "id" : 3,
        "name" : "Baptiste",
        "description" : "Baptiste dispose d'un assortiment d’armes et d’appareils expérimentaux pour garder ses alliés en vie et éliminer les menaces en territoire hostile. Secouriste militaire aguerri, il est tout aussi capable de sauver des vies que d’éliminer l’ennemi.",
        "role" : roles[1],
        "competences" : [
            skills[14], skills[15], skills[16], skills[17], skills[18]
        ],
        "image" : "baptiste.png"
    },
    {
        "id" : 4,
        "name" : "Bastion",
        "description" : "Avec son protocole de réparation et sa capacité à alterner entre configuration d’assaut stationnaire, de reconnaissance ou de tank, les chances de victoire de Bastion sont très élevées.",
        "role" : roles[0],
        "competences" : [
            skills[19], skills[20], skills[21], skills[22]
        ],
        "image" : "bastion.png"
    },
    {
        "id" : 5,
        "name" : "Bouldozer",
        "description" : "Bouldozer roule sur le champ de bataille, en se servant de son arsenal et de son méca imposant pour écraser ses ennemis.",
        "role" : roles[2],
        "competences" : [
            skills[23], skills[24], skills[25], skills[26], skills[27], skills[28]
        ],
        "image" : "hammond.png"
    },
    {
        "id" : 6,
        "name" : "Brigitte",
        "description" : "Brigitte est spécialisée dans les armures. Elle peut lancer des modules de réparation pour soigner ses alliés, ou les soigner automatiquement quand elle inflige des dégâts à ses ennemis à l’aide de son fléau. Cette arme peut toucher plusieurs cibles à la fois et a la capacité d’effectuer une frappe cinglante qui étourdit un ennemi à distance. Quand Brigitte entre dans la mêlée, son bouclier-écran lui fournit une protection pendant qu’elle attaque ses ennemis avec sa charge de bouclier. Sa capacité ultime, Ralliement, lui octroie un bonus de vitesse non négligeable pendant quelques secondes et fournit un bonus d’armure persistant à tous ses alliés proches.",
        "role" : roles[1],
        "competences" : [
            skills[29], skills[30], skills[31], skills[32], skills[33], skills[34]
        ],
        "image" : "brigitte.png"
    },
    {
        "id" : 7,
        "name" : "Hanzo",
        "description" : "Les flèches polyvalentes de Hanzo peuvent révéler ses ennemis, ou se fragmenter pour toucher plusieurs cibles. Il peut également grimper aux murs pour tirer depuis une position élevée, et invoquer un gigantesque esprit dragon.",
        "role" : roles[0],
        "competences" : [
            skills[35], skills[36], skills[37], skills[38], skills[39]
        ],
        "image" : "hanzo.png"
    },
    {
        "id" : 8,
        "name" : "Lucio",
        "description" : "Sur le champ de bataille, l’ampli high-tech de Lúcio envoie des projectiles soniques sur ses ennemis et les repousse avec des ondes de choc. Ses chansons soignent ses alliés ou augmentent leur vitesse de déplacement, et il peut changer de morceau à la volée.",
        "role" : roles[1],
        "competences" : [
            skills[40], skills[41], skills[42], skills[43]
        ],
        "image" : "lucio.png"
    },
    {
        "id" : 9,
        "name" : "McCree",
        "description" : "Armé de son Pacificateur, McCree abat ses cibles avec une précision redoutable et se met à couvert plus vite que son ombre.",
        "role" : roles[0],
        "competences" : [
            skills[44], skills[45], skills[46], skills[47]
        ],
        "image" : "mccree.png"
    },
    {
        "id" : 10,
        "name" : "Mei",
        "description" : "Mei manipule le climat pour ralentir ses ennemis et protéger les endroits importants. Son canon endothermique projette de redoutables pointes de glace ou libère un flux de givre, et elle peut entrer en cryostase pour survivre aux contre-attaques, ou bloquer le chemin de l’équipe adverse avec un mur de glace.",
        "role" : roles[0],
        "competences" : [
            skills[48], skills[49], skills[50], skills[51]
        ],
        "image" : "mei.png"
    },
    {
        "id" : 11,
        "name" : "Moira",
        "description" : "Les capacités biotiques de Moira lui permettent de contribuer aux soins prodigués ou aux dégâts infligés dans n’importe quelle situation. D’un coté, son emprise biotique lui permet d’intervenir à courte portée, de l’autre, son orbe biotique peut infliger des dégâts ou prodiguer des soins à longue distance. Elle peut également utiliser Volatilité pour échapper à des groupes d’ennemis ou rester à portée de ses alliés nécessitant son aide. Une fois Coalescence chargée, Moira peut éviter la mort à plusieurs alliés en même temps ou donner le coup de grâce à des ennemis déjà affaiblis.",
        "role" : roles[1],
        "competences" : [
            skills[52], skills[53], skills[54], skills[55]
        ],
        "image" : "moira.png"
    },
    {
        "id" : 12,
        "name" : "Orisa",
        "description" : "Orisa est le pilier central de son équipe, qu’elle défend en première ligne grâce à son écran protecteur. Elle peut attaquer à distance, renforcer ses propres défenses, projeter des charges à gravitons qui ralentissent et déplacent ses adversaires, ou encore déployer un surchargeur qui augmente les dégâts infligés par plusieurs de ses alliés.",
        "role" : roles[2],
        "competences" : [
            skills[56], skills[57], skills[58], skills[59], skills[60]
        ],
        "image" : "orisa.png"
    },
    {
        "id" : 13,
        "name" : "Pharah",
        "description" : "Fendant les airs dans son armure de combat et armée d’un lance-roquettes tirant des projectiles incapacitants ou dévastateurs, Pharah jouera assurément un rôle crucial dans chaque bataille.",
        "role" : roles[0],
        "competences" : [
            skills[61], skills[62], skills[63], skills[64]
        ],
        "image" : "pharah.png"
    },
    {
        "id" : 14,
        "name" : "Zarya",
        "description" : "Avec ses robustes écrans convertissant les dégâts subis en énergie pour son énorme canon à particules, Zarya représente un atout de choix pour tenir les premières lignes du champ de bataille.",
        "role" : roles[2],
        "competences" : [
            skills[65], skills[66], skills[67], skills[68]
        ],
        "image" : "zarya.png"
    },
    {
        "id" : 15,
        "name" : "Chacal",
        "description" : "Chacal a tout ce qu’il faut dans son arsenal pour interdire l’accès d’une zone à ses adversaires : un lance-grenades qui tire des projectiles rebondissants, des mines incapacitantes qui envoient valser ses ennemis et des pièges d’acier pour les immobiliser.",
        "role" : roles[0],
        "competences" : [skills[69],skills[70],skills[71],skills[72],skills[73]],
        "image" : "junkrat.png"
    },
    {
        "id" : 16,
        "name" : "Chopper",
        "description" : "Avec son emblématique traquelard, Chopper attrape et attire ses ennemis avant de les réduire en miettes d’un coup de déferrailleur. Il est assez robuste pour survivre à de lourds dégâts, et peut récupérer ses points de vie grâce à son inhalateur.",
        "role" : roles[2],
        "competences" : [skills[75],skills[76],skills[77],skills[78]],
        "image" : "raodhog.png"
    },
    {
        "id" : 17,
        "name" : "D.VA",
        "description" : "Le méca de D.Va est aussi agile que puissant : ses fusio-canons jumelés tirent en continu à courte portée, et elle peut activer ses turboréacteurs pour bondir par-dessus ennemis et obstacles, ou abattre les projectiles en plein air avec sa matrice défensive.",
        "role" : roles[2],
        "competences" : [skills[79],skills[80],skills[81],skills[82],skills[83],skills[84],skills[85]],
        "image" : "dva.png"
    },
    {
        "id" : 18,
        "name" : "Doomfist",
        "description" : "Les améliorations cybernétiques de Doomfist font de lui un combattant de première ligne à la fois puissant et très mobile. Capable d’infliger des dégâts à distance avec son calibre prosthétique, il peut également frapper le sol pour projeter ses ennemis dans les airs, ou charger dans la mêlée grâce à son direct d’enfer. Face à un groupe compact, Doomfist bondit hors de vue de ses adversaires pour mieux s’écraser au sol dans une spectaculaire frappe météore.",
        "role" : roles[0],
        "competences" : [skills[86],skills[87],skills[88],skills[89],skills[90]],
        "image" : "doomfist.png"
    },
    {
        "id" : 19,
        "name" : "Fatale",
        "description" : "Fatale emploie tous les moyens à sa disposition pour éliminer ses cibles : des mines qui diffusent un gaz toxique, une visière qui confère une vision infrarouge à son équipe et un puissant fusil à lunette qui peut tirer en mode automatique.",
        "role" : roles[0],
        "competences" : [skills[91],skills[92],skills[93],skills[94]],
        "image" : "widowmaker.png"
    },
    {
        "id" : 20,
        "name" : "Faucheur",
        "description" : "Avec Pompes funèbres, sa capacité spectrale lui permettant d’éviter tout dégât et son pouvoir à se déplacer dans les ombres, Faucheur est l’un des êtres les plus redoutables de la planète.",
        "role" : roles[0],
        "competences" : [skills[95],skills[96],skills[97],skills[98]],
        "image" : "reaper.png"
    },
    {
        "id" : 21,
        "name" : "Genji",
        "description" : "Genji lance des shurikens précis et mortels sur ses cibles, et utilise son katana à la pointe de la technologie pour dévier les projectiles ou exécuter une Frappe du vent qui blesse sérieusement ses ennemis.",
        "role" : roles[0],
        "competences" : [skills[99],skills[100],skills[101],skills[102]],
        "image" : "genji.png"
    },
    {
        "id" : 22,
        "name" : "Reinhardt",
        "description" : "Protégé par une armure motorisée, armé d’un marteau et propulsé par un réacteur, Reinhardt charge ses ennemis et défend ses alliés à l’aide d’une large écran énergétique.",
        "role" : roles[2],
        "competences" : [skills[103],skills[104],skills[105],skills[106],skills[107]],
        "image" : "reinhardt.png"
    },
    {
        "id" : 23,
        "name" : "Soldat 76",
        "description" : "Équipé d’armes ultra avancées, dont un fusil à impulsions expérimental également capable de tirer plusieurs roquettes LX à la fois, soldat : 76 est un guerrier rapide et expérimenté qui sait soutenir ses alliés.",
        "role" : roles[0],
        "competences" : [skills[108],skills[109],skills[110],skills[111],skills[112]],
        "image" : "soldier76.png"
    },
    {
        "id" : 24,
        "name" : "Sombra",
        "description" : "Ses talents de camouflage et ses attaques affaiblissantes font de Sombra une experte en infiltration. En piratant ses ennemis pour les déstabiliser, elle en fait des cibles faciles à éliminer tandis que son IEM peut conférer un avantage de poids contre des groupes entiers d’adversaires. Les capacités de transduction et de camouflage de Sombra en font une cible quasi insaisissable.",
        "role" : roles[0],
        "competences" : [skills[113],skills[114],skills[115],skills[116],skills[117]],
        "image" : "sombra.png"
    },
    {
        "id" : 25,
        "name" : "Symmetra",
        "description" : "Symmetra utilise son Projecteur à photons pour éliminer ses adversaires, protéger ses alliés, placer des téléporteurs et déployer des tourelles sentinelles à particules.",
        "role" : roles[0],
        "competences" : [skills[118],skills[119],skills[120],skills[121]],
        "image" : "symmetra.png"
    },
    {
        "id" : 26,
        "name" : "Torbjorn",
        "description" : "L’incroyable arsenal de Torbjörn comprend un pistolet à rivets, un marteau et une forge personnelle servant à construire des tourelles.",
        "role" : roles[0],
        "competences" : [skills[122],skills[123],skills[124],skills[125],skills[126]],
        "image" : "tobjorn.png"
    },
    {
        "id" : 27,
        "name" : "Tracer",
        "description" : "Armées de deux pulseurs, de bombes à retardement énergétiques et d’une langue bien pendue, Tracer est capable de passer immédiatement d’un endroit à un autre et de remonter dans le temps pour mieux combattre les injustices à travers le monde.",
        "role" : roles[0],
        "competences" : [skills[127],skills[128],skills[129],skills[130]],
        "image" : "tracer.png"
    },
    {
        "id" : 28,
        "name" : "Winston",
        "description" : "Winston manie d’impressionnantes inventions (des propulseurs, un canon Tesla dévastateur et un générateur d’écran portable, entre autres) avec une force littéralement surhumaine.",
        "role" : roles[2],
        "competences" : [skills[131],skills[132],skills[133],skills[134]],
        "image" : "winston.png"
    },
    {
        "id" : 29,
        "name" : "Zenyatta",
        "description" : "Zenyatta invoque des orbes d’harmonie et de discorde pour soigner ses coéquipiers et affaiblir ses ennemis, tout en maintenant un état de transcendance qui le rend insensible aux dégâts.",
        "role" : roles[1],
        "competences" : [skills[135],skills[136],skills[137],skills[138]],
        "image" : "zenyatta.png"
    },
]