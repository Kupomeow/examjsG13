let skills = [
    {
        "name": "FUSIL BIOTIQUE",
        "description": "Le fusil d’Ana projette des fléchettes qui régénèrent les points de vie de ses alliés ou infligent des dégâts continus à ses ennemis. La lunette de son fusil lui permet de zoomer sur ses cibles pour des tirs d’une extrême précision.",
        "id": "0"
    },
    {
        "name": "FLÉCHETTE HYPODERMIQUE",
        "description": "Ana tire une fléchette avec son arme de poing, provoquant l’évanouissement d’un ennemi (qui se réveille s’il subit des dégâts).",
        "id": "1"
    },
    {
        "name": "GRENADE BIOTIQUE",
        "description": "Ana lance une bombe biotique qui inflige des dégâts aux ennemis et soigne les alliés dans une zone de taille réduite. Pendant un court moment, les alliés affectés reçoivent plus de soins de toutes les sources, tandis que les ennemis pris dans l’explosion ne peuvent temporairement plus être soignés.",
        "id": "2"
    },
    {
        "name": "NANOBOOST",
        "description": "Lorsqu’ils reçoivent un bonus de combat de la part d’Ana, ses alliés infligent plus de dégâts et résistent mieux aux attaques ennemies.",
        "id": "3"
    },
    {
        "name": "CADUCÉE",
        "description": "Ange projette un des deux rayons sur un allié. En maintenant les rayons, elle peut soigner l’allié ciblé ou augmenter les dégâts qu’il inflige.",
        "id": "4"
    }, {
        "name": "MISÉRICORDE",
        "description": "Ange tire une salve avec son arme de poing.",
        "id": "5"
    },
    {
        "name": "ANGE GARDIEN",
        "description": "Ange vole vers un allié ciblé. Elle peut ainsi rejoindre rapidement ses coéquipiers pour mieux les assister dans les moments cruciaux.",
        "id": "6"
    },
    {
        "name": "RÉSURRECTION",
        "description": "Ange ranime un allié mort avec la totalité de ses points de vie.",
        "id": "7"
    },
    {
        "name": "SAUT DE L’ANGE",
        "description": "Grâce aux propulseurs de son armure Valkyrie, Ange peut ralentir sa vitesse de chute et descendre de n’importe quelle hauteur.",
        "id": "8"
    },
    {
        "name": "VALKYRIE",
        "description": "Confère à Ange la capacité à voler. Ses capacités sont améliorées.",
        "id": "9"
    }, {
        "name": "LE COBRA",
        "description": "Ashe peut utiliser sa carabine en mode semi-automatique pour enchaîner les tirs rapides, ou bien en mode viseur pour faire feu avec précision et infliger davantage de dégâts.",
        "id": "10"
    },
    {
        "name": "DYNAMITE",
        "description": "Ashe lance un bâton d’explosif qui saute après un court instant ou dès qu’elle lui tire dessus. L’explosion de Dynamite enflamme également les ennemis, ce qui leur inflige des dégâts sur la durée.",
        "id": "11"
    },
    {
        "name": "CANON SCIÉ",
        "description": "Ashe fait feu sur les ennemis devant elle, ce qui les repousse et la propulse en arrière, augmentant ainsi sa mobilité.",
        "id": "12"
    },
    {
        "name": "B.O.B.",
        "description": "Ashe appelle à la rescousse son fidèle acolyte omniaque, Bob, qui se rue en avant, propulse les ennemis dans les airs et déploie un tir de suppression grâce à ses bras armés de canons.",
        "id": "13"
    },
    {
        "name": "BIO-LANCEUR",
        "description": "Le bio-lanceur de Baptiste récompense la précision et la compensation du recul par une quantité importante de dégâts infligés. Sa rafale de trois coups peut également lancer des projectiles en cloche, qui soignent les alliés proches du point d’impact.",
        "id": "14"
    }, {
        "name": "SALVE RÉGÉNÉRANTE",
        "description": "Baptiste active une salve régénérante puissante, qui le soigne, ainsi que ses alliés proches, sur la durée.",
        "id": "15"
    },
    {
        "name": "CHAMP D’IMMORTALITÉ",
        "description": "Baptiste utilise un appareil qui crée un champ énergétique empêchant ses alliés de mourir. Le générateur peut être détruit.",
        "id": "16"
    },
    {
        "name": "MATRICE AMPLIFICATRICE",
        "description": "Baptiste crée une matrice qui double les dégâts et soins des projectiles alliés qui la traversent.",
        "id": "17"
    },
    {
        "name": "EXO-BOTTES",
        "description": "En s’accroupissant d’abord, Baptiste peut sauter plus haut.",
        "id": "18"
    },
    {
        "name": "CONFIGURATION : RECONNAISSANCE",
        "description": "En mode Reconnaissance, Bastion est parfaitement mobile et équipé d’une mitrailleuse légère qui tire des rafales régulières et est efficace à moyenne portée.",
        "id": "19"
    }, {
        "name": "CONFIGURATION : SENTINELLE",
        "description": "En mode Sentinelle, Bastion est une centrale électrique statique, protégée par un écran frontal et équipée d’une mitrailleuse rotative capable de déchaîner une pluie de balles. L’arme peut effectuer un « balayage » dévastateur à courte ou moyenne portée.",
        "id": "20"
    },
    {
        "name": "AUTORÉPARATION",
        "description": "Bastion récupère des points de vie, mais ses systèmes d’armement sont désactivés jusqu’à la fin de la réparation.",
        "id": "21"
    },
    {
        "name": "CONFIGURATION : TANK",
        "description": "En mode Tank, Bastion déploie des chenilles et un puissant canon à longue portée. Les tirs explosifs du canon démolissent les cibles présentes dans son large rayon d’explosion, mais Bastion ne peut conserver ce mode que pour un temps limité.",
        "id": "22"
    },
    {
        "name": "BATTERIE DE CANONS",
        "description": "Les armes d’assaut automatiques de Bouldozer sont excellentes pour éliminer la menace à moyenne portée.",
        "id": "23"
    }, {
        "name": "ROULÉ-BOULÉ",
        "description": "Bouldozer se roule en boule et augmente sa vitesse de déplacement.",
        "id": "24"
    },
    {
        "name": "GRIFFE-CRAMPON",
        "description": "Bouldozer projette une griffe-crampon pour se balancer rapidement depuis son point d’ancrage. Quand il provoque des collisions à grande vitesse, il blesse et repousse ses ennemis.",
        "id": "25"
    },
    {
        "name": "BOUCLIER DYNAMIQUE",
        "description": "Le bouclier personnel de Bouldozer, dont la puissance dépend du nombre d’ennemis à proximité, absorbe temporairement les dégâts.",
        "id": "26"
    },
    {
        "name": "PILONNAGE",
        "description": "Bouldozer atterrit avec force, ce qui blesse les ennemis et les projette en l’air.",
        "id": "27"
    },
    {
        "name": "CHAMP DE MINES",
        "description": "Bouldozer déploie un large champ de mines de proximité persistantes, qui explosent au contact des ennemis.",
        "id": "28"
    },
    {
        "name": "FLÉAU À RÉACTION",
        "description": "L’arme de mêlée de Brigitte a une portée augmentée, ce qui lui permet de frapper plusieurs ennemis en un seul coup.",
        "id": "29"
    },
    {
        "name": "MODULE DE RÉPARATION",
        "description": "Brigitte lance un module de réparation qui soigne un allié. Tout soin excédentaire sur cet allié lui octroie un bonus d’armure en compensation.",
        "id": "30"
    },
    {
        "name": "FLÉAU CINGLANT",
        "description": "Brigitte lance son fléau à distance et ce qui inflige des dégâts et repousse l’ennemi touché loin d’elle.",
        "id": "31"
    },
    {
        "name": "BOUCLIER-ÉCRAN",
        "description": "Brigitte déploie un bouclier d’énergie devant elle, qui absorbe un montant de dégâts limité.",
        "id": "32"
    },
    {
        "name": "CHARGE DE BOUCLIER",
        "description": "Une fois son bouclier-écran déployé, Brigitte peut charger vers l’avant et étourdir un ennemi.",
        "id": "33"
    },
    {
        "name": "RALLIEMENT",
        "description": "Brigitte se déplace plus rapidement et fournit à ses alliés proches un bonus d’amure qui dure jusqu’à ce qu’il soit absorbé par les dégâts subis.",
        "id": "34"
    },
    {
        "name": "ARC TEMPÊTE",
        "description": "Hanzo encoche une flèche et la décoche sur sa cible.",
        "id": "35"
    },
    {
        "name": "FLÈCHE SONIQUE",
        "description": "Hanzo projette une flèche équipée d’un sonar ; celle-ci marque tous les ennemis dans son rayon de détection et les rend plus faciles à traquer pour Hanzo et ses alliés.",
        "id": "36"
    },
    {
        "name": "RAFALE",
        "description": "Les prochaines flèches d’Hanzo sont lancées instantanément, mais leurs dégâts sont réduits.",
        "id": "37"
    },
    {
        "name": "FENTE",
        "description": "Hanzo peut effectuer des doubles sauts, ce qui lui permet de changer de direction dans les airs.",
        "id": "38"
    },
    {
        "name": "FRAPPE DU DRAGON",
        "description": "Hanzo invoque l’esprit d’un dragon qui fend les airs devant lui. Il traverse les murs sur son passage et dévore tous les ennemis rencontrés.",
        "id": "39"
    },
    {
        "name": "AMPLI",
        "description": "Lúcio peut frapper ses ennemis à l’aide de projectiles soniques ou les repousser avec une onde de choc sonore.",
        "id": "40"
    },
    {
        "name": "CROSSFADE",
        "description": "Lúcio se stimule constamment, ainsi que ses équipiers proches, grâce à la musique. Il peut alterner entre deux chansons : l’une augmente la vitesse de déplacement, la seconde rend des points de vie.",
        "id": "41"
    },
    {
        "name": "VOLUME MAX.",
        "description": "Lúcio augmente le volume de ses enceintes, ce qui améliore l’effet de ses chansons.",
        "id": "42"
    },
    {
        "name": "MUR DE SON",
        "description": "Des vagues protectrices irradient de l’ampli de Lúcio et lui procurent ainsi qu’à ses alliés proches des boucliers personnels.",
        "id": "43"
    },
    {
        "name": "PACIFICATEUR",
        "description": "McCree tire avec son fidèle six-coups. Il peut aussi actionner directement le chien pour vider très rapidement tout son barillet.",
        "id": "44"
    },
    {
        "name": "ROULADE",
        "description": "McCree plonge dans la direction de son déplacement et se redresse en ayant rechargé son revolver.",
        "id": "45"
    },
    {
        "name": "GRENADE FLASH",
        "description": "McCree jette une grenade aveuglante qui explose peu après avoir quitté sa main. La déflagration étourdit les ennemis dans un petit rayon.",
        "id": "46"
    },
    {
        "name": "IMPLACABLE",
        "description": "Concentration. Appréciation. Prise en main. McCree prend quelques précieux instants pour viser. Quand il se décide à tirer, il abat tous les ennemis dans son champ de vision. Plus ses cibles sont faibles, moins il aura besoin de viser pour que le tir soit mortel.",
        "id": "47"
    },
    {
        "name": "CANON ENDOTHERMIQUE",
        "description": "Le blaster de Mei libère un flux de givre concentré à courte portée qui endommage, ralentit et finit par geler sur place les ennemis. Mei peut aussi s’en servir pour tirer des glaçons à portée moyenne.",
        "id": "48"
    },
    {
        "name": "CRYOSTASE",
        "description": "Mei s’entoure instantanément d'un épais bloc de glace. Elle se soigne et échappe aux dégâts tant qu’elle est à l’intérieur, mais elle ne peut ni se déplacer, ni utiliser de capacités.",
        "id": "49"
    },
    {
        "name": "MUR DE GLACE",
        "description": "Mei génère un énorme mur de glace qui bouche les lignes de vue, empêche le déplacement et bloque les attaques.",
        "id": "50"
    },
    {
        "name": "BLIZZARD",
        "description": "Mei déploie un drone de modification du climat qui émet des bourrasques de vent et de neige dans une large zone. Les ennemis pris dans le blizzard sont ralentis et subissent des dégâts, et ceux qui s’attardent trop longtemps sont complètement gelés.",
        "id": "51"
    },
    {
        "name": "EMPRISE BIOTIQUE",
        "description": "De sa main gauche, Moira projette de l’énergie biotique qui soigne les alliés devant elle. Sa main droite génère un rayon à longue portée qui sape la vitalité des ennemis tout en soignant Moira et en rechargant son énergie biotique.",
        "id": "52"
    },
    {
        "name": "ORBE BIOTIQUE",
        "description": "Moira lance une sphère biotique rebondissante. Elle peut lui affecter un effet régénérant qui soigne les alliés qu’elle traverse, ou un effet nécrosant qui inflige des dégâts aux ennemis.",
        "id": "53"
    },
    {
        "name": "VOLATILITÉ",
        "description": "Moira se téléporte rapidement à une courte distance.",
        "id": "54"
    },
    {
        "name": "COALESCENCE",
        "description": "Moira canalise un rayon à longue portée qui soigne ses alliés et inflige des dégâts à ses ennemis même à travers les écrans.",
        "id": "55"
    },
    {
        "name": "CANON À FUSION",
        "description": "Le canon automatique d’Orisa inflige des dégâts en continu mais ralentit ses déplacements quand elle l’utilise.",
        "id": "56"
    },
    {
        "name": "BLINDAGE",
        "description": "Orisa subit temporairement moins de dégâts et ne peut pas être affectée par des effets incapacitants.",
        "id": "57"
    },
    {
        "name": "HALTE !",
        "description": "Orisa lance une charge à gravitons qu’elle peut faire exploser pour ralentir et attirer les ennemis proches dans la zone de déflagration.",
        "id": "58"
    },
    {
        "name": "DISPOSITIF DE PROTECTION",
        "description": "Orisa déploie un écran protecteur statique qui la protège ainsi que ses alliés.",
        "id": "59"
    },
    {
        "name": "SURCHARGEUR",
        "description": "Orisa déploie un appareil qui augmente les dégâts infligés par les alliés qui se trouvent dans sa ligne de vue.",
        "id": "60"
    },
    {
        "name": "LANCE-ROQUETTES FALCON",
        "description": "Pharah utilise son arme principale pour envoyer des roquettes qui infligent des dégâts significatifs dans une large zone de déflagration.",
        "id": "61"
    },
    {
        "name": "RÉACTEURS",
        "description": "Propulsée par les réacteurs de son armure, Pharah peut s’élever en altitude.",
        "id": "62"
    },
    {
        "name": "CONFLAGRATION",
        "description": "Pharah libère une roquette qui repousse violemment tous les ennemis avec lesquels elle entre en contact.",
        "id": "63"
    },
    {
        "name": "BARRAGE",
        "description": "Pharah dirige une salve continue de mini-roquettes pour détruire des groupes d’ennemis.",
        "id": "64"
    },
    {
        "name": "CANON À PARTICULES",
        "description": "Le puissant canon à particules de Zarya déchaîne un rayon d’énergie destructrice à courte portée. Zarya peut également s’en servir pour projeter une charge explosive capable de blesser plusieurs adversaires.",
        "id": "65"
    },
    {
        "name": "ÉCRAN DE PARTICULES",
        "description": "Le canon à particules peut émettre une barrière individuelle qui protège Zarya contre les attaques la ciblant, absorbant leur énergie pour augmenter les dégâts et la largeur du rayon de son arme.",
        "id": "66"
    },
    {
        "name": "ÉCRAN GÉNÉRÉ",
        "description": "Zarya englobe l’un de ses coéquipiers dans une barrière d’énergie qui absorbe les coups et renforce la puissance de son canon à particules.",
        "id": "67"
    },
    {
        "name": "ORBE À GRAVITONS",
        "description": "Zarya lance une bombe gravitationnelle qui attire les combattants ennemis et les blesse tant qu’ils restent piégés.",
        "id": "68"
    },
    {
        "name" : "LANCE-GRENADES",
        "description" : "Le lance-grenades de Chacal projette des grenades sur une bonne distance. Elles rebondissent pour atteindre leur destination et explosent quand elles frappent un ennemi.",
        "id" : "69"
    },
    {
        "name" : "MINE INCAPACITANTE",
        "description" : "Après avoir placé une de ses mines incapacitantes maison, Chacal peut la déclencher pour blesser les ennemis et les faire voler dans les airs... ou se propulser lui-même en l’air.",
        "id" : "70"
    },
    {
        "name" : "PIÈGE D’ACIER",
        "description" : "Chacal balance un piège géant à mâchoire métallique. Si un ennemi s’approche trop près du piège, il se referme, l’immobilisant et le blessant.",
        "id" : "71"
    },
    {
        "name" : "MAUVAIS PERDANT",
        "description" : "Le sens de l'humour complètement azimuté de Chacal subsiste après sa mort : s’il est tué, il largue plusieurs grenades dégoupillées.",
        "id" : "72"
    },
    {
        "name" : "PNEUMASTIC",
        "description" : "Chacal fait vrombir une bombe-pneu motorisée qui peut grimper sur les murs et les obstacles, et l’envoie rouler sur le champ de bataille. Il peut faire détoner le pneumastic à distance pour infliger d'importants dégâts aux ennemis pris dans l’explosion, ou simplement attendre qu’il explose de lui-même.",
        "id" : "73"
    },
    {
        "name" : "DÉFERRAILLEUR",
        "description" : "Le déferrailleur de Chopper lance du shrapnel à courte portée mais sur une large zone. Sinon il peut lancer une boule de shrapnels qui détone plus loin, éparpillant les fragments métalliques depuis le point d’impact.",
        "id" : "75"
    },
    {
        "name" : "INHALATEUR",
        "description" : "Chopper récupère une partie de ses points de vie sur une courte période.",
        "id" : "76"
    },
    {
        "name" : "TRAQUELARD",
        "description" : "Chopper lance sa chaîne vers une cible ; s’il l’attrape, il l’attire à lui, à courte portée.",
        "id" : "77"
    },
    {
        "name" : "ÉQUARISSEUR",
        "description" : "Après avoir ajouté un chargeur supplémentaire au-dessus de son déferrailleur, Chopper le bourre de munitions. Pendant une courte période, il mitraille une large zone devant lui avec des shrapnels qui repoussent les ennemis.",
        "id" : "78"
    },
    {
        "name" : "FUSIO-CANONS",
        "description" : "Le méca de D.VA est équipé de canons rotatifs jumelés à courte portée. Activés, ils infligent d’importants dégâts continus sans avoir besoin d’être rechargés, mais ils ralentissent les déplacements de D.Va.",
        "id" : "79"
    },
    {
        "name" : "PISTOLASER",
        "description" : "Lorsqu’elle est hors de son méca, D.Va peut continuer le combat avec une arme automatique à moyenne portée.",
        "id" : "80"
    },
    {
        "name" : "TURBORÉACTEURS",
        "description" : "Le méca se projette dans les airs et D.Va est propulsée en avant par l’inertie. Elle peut tourner et changer de direction ou foncer sur ses ennemis, les projetant en arrière.",
        "id" : "81"
    },
    {
        "name" : "MATRICE DÉFENSIVE",
        "description" : "D.Va peut maintenir son système de ciblage avant pendant un court instant. Tant qu’il est actif, les projectiles interceptés par la matrice sont neutralisés.",
        "id" : "82"
    },
    {
        "name" : "MICRO-MISSILES",
        "description" : "D.Va lance une volée de roquettes explosives.",
        "id" : "83"
    },
    {
        "name" : "AUTODESTRUCTION",
        "description" : "D.Va s’éjecte de son méca et fait sauter son réacteur. L’explosion inflige des dégâts considérables aux adversaires proches.",
        "id" : "84"
    },
    {
        "name" : "APPEL DU MÉCA",
        "description" : "Si son armure de combat blindée est détruite, D.Va peut appeler un nouveau méca et reprendre le combat.",
        "id" : "85"
    },
    {
        "name" : "CALIBRE PROSTHÉTIQUE",
        "description" : "Doomfist tire une rafale à courte portée par les articulations prosthétiques de son poing. Ses munitions se rechargent automatiquement sur la durée.",
        "id" : "86"
    },
    {
        "name" : "ONDE DE CHOC",
        "description" : "Doomfist bondit en avant et frappe le sol, ce qui attire vers lui les ennemis proches.",
        "id" : "87"
    },
    {
        "name" : "UPPERCUT",
        "description" : "Doomfist envoie un uppercut aux ennemis qui se trouvent devant lui et les fait voltiger.",
        "id" : "88"
    },
    {
        "name" : "DIRECT D’ENFER",
        "description" : "Doomfist charge un coup de poing, puis fonce vers l’avant et repousse un ennemi. Les dégâts sont augmentés si l’ennemi heurte un mur.",
        "id" : "89"
    },
    {
        "name" : "FRAPPE MÉTÉORE",
        "description" : "Doomfist bondit dans les airs, puis s’écrase au sol, infligeant alors d’importants dégâts.",
        "id" : "90"
    },
    {
        "name" : "BAISER DE LA VEUVE",
        "description" : "Fatale est équipée d’un fusil polyvalent idéal pour abattre à la lunette les cibles les plus lointaines. Il peut aussi être utilisé en mode automatique sur les cibles à moyenne portée.",
        "id" : "91"
    },
    {
        "name" : "GRAPPIN",
        "description" : "Fatale peut envoyer un grappin vers la position qu’elle vise. Une fois le grappin arrimé, elle est rapidement attirée le long de son câble, ce qui lui permet d’améliorer sa visibilité du champ de bataille et d’esquiver ou de contourner des cibles.",
        "id" : "92"
    },
    {
        "name" : "MINE VENIMEUSE",
        "description" : "Fatale applique des mines venimeuses à armement rapide qui adhèrent à quasiment n’importe quelle surface. Lorsqu’une cible s’aventure à portée du détecteur de mouvement intégré à la mine, cette dernière explose en dégageant un gaz empoisonné qui affecte tous les ennemis à proximité.",
        "id" : "93"
    },
    {
        "name" : "INFRAVISION",
        "description" : "La visière de reconnaissance de Fatale lui permet de voir la signature thermique de ses cibles, même au travers des murs ou autres obstacles pendant un certain temps. Cette perception améliorée est partagée avec ses alliés.",
        "id" : "94"
    },
    {
        "name" : "POMPES FUNÈBRES",
        "description" : "Faucheur met ses ennemis en pièces avec ses deux fusils à pompe.",
        "id" : "95"
    },
    {
        "name" : "FORME SPECTRALE",
        "description" : "Faucheur devient une ombre pendant une courte période. Sous cette forme spectrale, il ne peut être blessé et il est capable de passer au travers de ses ennemis mais ne peut pas utiliser son armement ou ses autres capacités.",
        "id" : "96"
    },
    {
        "name" : "VOIE DES OMBRES",
        "description" : "Après avoir marqué une destination de son choix, Faucheur disparaît pour réapparaître à cet endroit.",
        "id" : "97"
    },
    {
        "name" : "ÉCLOSION MORTELLE",
        "description" : "Quasi indiscernable, Faucheur vide ses deux fusils à pompe à tombeau ouvert, infligeant de très lourds dégâts à tous les ennemis proches.",
        "id" : "98"
    },
    {
        "name" : "SHURIKEN",
        "description" : "Genji lance trois shurikens mortels en succession rapide. Il peut également lancer trois shurikens en éventail.",
        "id" : "99"
    },
    {
        "name" : "RIPOSTE",
        "description" : "Avec des moulinets de son épée aussi rapides que l’éclair, Genji dévie les attaques et les renvoie vers ses adversaires.",
        "id" : "100"
    },
    {
        "name" : "FRAPPE DU VENT",
        "description" : "Genji file en avant, tranchant l’air de son katana et traversant les ennemis sur son passage. Si Genji élimine un adversaire grâce à cette capacité, il peut s’en servir immédiatement à nouveau.",
        "id" : "101"
    },
    {
        "name" : "LAME DU DRAGON",
        "description" : "Genji brandit son katana pendant une courte période. Il peut délivrer des coups mortels à toutes les cibles à portée jusqu’à ce qu’il rengaine son sabre.",
        "id" : "102"
    },
    {
        "name" : "MARTEAU À RÉACTION",
        "description" : "Le marteau à réaction de Reinhardt est une arme de combat rapproché exemplaire, capable d’infliger des dégâts brutaux sur un large arc à chaque coup.",
        "id" : "103"
    },
    {
        "name" : "ÉCRAN",
        "description" : "Reinhardt déploie devant lui un large écran énergétique qui peut absorber une grande quantité de dégâts avant de disparaître. Reinhardt peut se protéger ainsi que ses compagnons qui se trouvent derrière l’écran, mais il ne peut pas attaquer pendant qu’il le maintient en place.",
        "id" : "104"
    },
    {
        "name" : "CHARGE",
        "description" : "Reinhardt charge droit devant lui et saisit le premier ennemi qui se trouve sur son chemin. S’il entre en collision avec un mur, les adversaires qu’il porte sont écrasés et subissent des dégâts extrêmes.",
        "id" : "105"
    },
    {
        "name" : "FRAPPE DE FEU",
        "description" : "En faisant tournoyer son marteau devant lui, Reinhardt envoie un projectile enflammé qui transperce et inflige des dégâts à tous les ennemis qu’il touche.",
        "id" : "106"
    },
    {
        "name" : "CHOC SISMIQUE",
        "description" : "Reinhardt abat son marteau à réaction sur le sol, ce qui blesse et renverse tous les ennemis devant lui.",
        "id" : "107"
    },
    {
        "name" : "FUSIL À IMPULSIONS",
        "description" : "Le fusil à impulsions entièrement automatique du soldat : 76 reste particulièrement stable lorsque ce dernier vide son chargeur.",
        "id" : "108"
    },

    {
        "name" : "ROQUETTES LX",
        "description" : "Le fusil à impulsions du soldat : 76 tire plusieurs petites roquettes à la fois. L’explosion des roquettes inflige des dégâts aux ennemis dans une petite zone.",
        "id" : "109"
    },
    {
        "name" : "SPRINT",
        "description" : "Qu’il ait besoin de fuir les tirs ennemis ou de revenir au combat rapidement, le soldat : 76 peut foncer droit devant lui. Toute action autre qu’une course vers l’avant met fin à son Sprint.",
        "id" : "110"
    },
    {
        "name" : "CHAMP BIOTIQUE",
        "description" : "Le soldat : 76 pose au sol un émetteur biotique. L’énergie ainsi projetée soigne 76 et ses équipiers qui se trouvent dans le champ d’action.",
        "id" : "111"
    },
    {
        "name" : "VISIÈRE TACTIQUE",
        "description" : "La visière tactique de localisation du soldat : 76 « verrouille » la menace la plus proche de son viseur. Si un ennemi quitte son champ de vision, le soldat : 76 peut rapidement changer de cible.",
        "id" : "112"
    },
    {
        "name" : "PISTOLET MITRAILLEUR",
        "description" : "Le pistolet mitrailleur automatique de Sombra tire à courte portée.",
        "id" : "113"
    },

    {
        "name" : "PIRATAGE",
        "description" : "Sombra peut pirater ses ennemis et les priver temporairement de leurs capacités, ou corrompre les kits de soins pour empêcher ses adversaires de s’en servir.",
        "id" : "114"
    },
    {
        "name" : "FURTIVITÉ",
        "description" : "Sombra devient invisible et sa vitesse augmente considérablement. Le camouflage est désactivé si vous attaquez, si vous utilisez des capacités offensives ou si vous subissez des dégâts. Sombra ne peut pas capturer d’objectif tout en étant invisible.",
        "id" : "115"
    },
    {
        "name" : "TRANSDUCTEUR",
        "description" : "Sombra lance une balise de transduction vers laquelle elle peut se téléporter instantanément tant que celle-ci est active (même si la balise se trouve encore dans les airs).",
        "id" : "116"
    },
    {
        "name" : "IEM",
        "description" : "Sombra génère une large vague d’énergie électromagnétique qui désactive les boucliers ennemis et pirate tous les adversaires touchés par l’onde de choc.",
        "id" : "117"
    },
    {
        "name" : "PROJECTEUR À PHOTONS",
        "description" : "L’arme de Symmetra émet un rayon à courte portée, qui inflige des dégâts continus augmentant sur la durée. Le projecteur peut aussi envoyer une boule d’énergie surchargée qui inflige des dégâts importants.",
        "id" : "118"
    },
    {
        "name" : "TOURELLE SENTINELLE",
        "description" : "Symmetra installe une petite tourelle qui projette automatiquement des décharges réduisant la vitesse de l’ennemi le plus proche. Jusqu’à trois tourelles peuvent être déployées simultanément sur le champ de bataille.",
        "id" : "119"
    },
    {
        "name" : "TÉLÉPORTEUR",
        "description" : "Symmetra place à distance un socle de sortie temporaire et le connecte à celui placé à sa position actuelle. Les alliés (ainsi que certaines de leurs capacités, comme le Pneumastic de Chacal) peuvent voyager instantanément d’un socle à l’autre.",
        "id" : "120"
    },
    {
        "name" : "ÉCRAN PHOTONIQUE",
        "description" : "Symmetra déploie une barrière énergétique massive capable de traverser la carte et bloquer les attaques à distance.",
        "id" : "121"
    },
    {
        "name" : "PISTOLET À RIVETS",
        "description" : "Avec son pistolet, Torbjörn tire des rivets à longue portée ou des projectiles de métal surchauffé en petites rafales à courte portée.",
        "id" : "122"
    },
    {
        "name" : "MARTEAU DE FORGE",
        "description" : "Ce marteau polyvalent permet de réparer des tourelles et peut être utilisé comme arme en cas d’urgence.",
        "id" : "123"
    },
    {
        "name" : "DÉPLOIEMENT DE TOURELLE",
        "description" : "Torbjörn déploie une tourelle se construisant seule munie d’un système d'attaque automatisé.",
        "id" : "124"
    },
    {
        "name" : "SURCHARGE",
        "description" : "Torbjörn obtient de l’armure et ses vitesses d’attaque, de déplacement et de rechargement sont augmentées pendant un court instant.",
        "id" : "125"
    },
    {
        "name" : "CŒUR DE MAGMA",
        "description" : "Torbjörn crée des flaques de magma qui infligent d’énormes dégâts sur la durée (avec un bonus de dégâts à l’armure) et peuvent empêcher l’ennemi de se déplacer vers des emplacements cruciaux.",
        "id" : "126"
    },
    {
        "name" : "PULSEURS",
        "description" : "Tracer a une cadence de tir très rapide grâce à ses pistolets.",
        "id" : "127"
    },
    {
        "name" : "TRANSFERT",
        "description" : "Tracer fonce droit devant elle et réapparaît quelques mètres plus loin. Elle peut cumuler jusqu’à trois charges de transfert, et en génère régulièrement à quelques secondes d’intervalle.",
        "id" : "128"
    },
    {
        "name" : "RAPPEL",
        "description" : "Tracer bondit en arrière dans le temps et récupère les points de vie et les munitions dont elle disposait, ainsi que sa position précise sur la carte quelques secondes plus tôt.",
        "id" : "129"
    },
    {
        "name" : "BOMBE À IMPULSION",
        "description" : "Tracer lance une grosse charge explosive qui adhère à n’importe quelle surface, ou à l’adversaire ayant le malheur de la recevoir. Après un court délai, la bombe explose en infligeant des dégâts importants à tous les ennemis dans la zone de déflagration.",
        "id" : "130"
    },
    {
        "name" : "CANON TESLA",
        "description" : "Tant que Winston garde le doigt sur la gâchette, son arme envoie un flot de décharges électriques à courte portée.",
        "id" : "131"
    },
    {
        "name" : "PROPULSEURS",
        "description" : "Winston bondit dans les airs avec l’aide de sa réserve d’énergie dorsale et retombe en infligeant des dégâts significatifs et en étourdissant les ennemis proches.",
        "id" : "132"
    },
    {
        "name" : "GÉNÉRATEUR D’ÉCRAN",
        "description" : "Le générateur d’écran de Winston projette un champ de force en forme de bulle qui absorbe les dégâts jusqu’à sa destruction. Les alliés à l’intérieur sont protégés et peuvent tirer.",
        "id" : "133"
    },
    {
        "name" : "RAGE PRIMORDIALE",
        "description" : "Winston embrasse sa nature animale, augmentant notablement ses points de vie et le rendant très difficile à tuer, renforçant ses attaques en mêlée et lui permettant d’utiliser ses propulseurs plus souvent. Quand il est enragé, Winston ne peut utiliser que les propulseurs et les attaques au corps à corps.",
        "id" : "134"
    },
    {
        "name" : "ORBE DE DESTRUCTION",
        "description" : "Zenyatta lance ses orbes d’énergie destructrice soit individuellement, soit en rafale après avoir passé quelques secondes à rassembler de l’énergie.",
        "id" : "135"
    },
    {
        "name" : "ORBE D'HARMONIE",
        "description" : "Zenyatta lance un orbe au-dessus d’un allié ciblé. Tant que Zenyatta reste en vie, l’orbe restaure lentement les points de vie de cet allié. Ne peut être utilisé que sur un allié à la fois.",
        "id" : "136"
    },
    {
        "name" : "ORBE DE DISCORDE",
        "description" : "Lancer un orbe de discorde sur un ennemi amplifie la quantité de dégâts que celui-ci reçoit tant que Zenyatta est en vie. Ne peut être utilisé que sur un adversaire à la fois.",
        "id" : "137"
    },
    {
        "name" : "TRANSCENDANCE",
        "description" : "Zenyatta parvient à accéder à un stade d’existence supérieur pendant un court moment. Tant qu’il se transcende, Zenyatta ne peut pas utiliser ses capacités ou ses armes, mais il est immunisé aux dégâts et restaure automatiquement ses points de vie et ceux des alliés proches.",
        "id" : "138"
    }
]

// console.log(skills);