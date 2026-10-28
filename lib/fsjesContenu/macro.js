// Macroéconomie 2 (S2) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
// Les chapitres 1 à 4 de l'ancien module « Macroéconomie » sont passés en Macroéconomie 1 (S1, macro1.js) le 2026-10-28.
const md = String.raw;

const chapitres = {
  1: {
    titre: "Le marché des biens et services : le multiplicateur et la courbe IS",
    description: "Modèle keynésien : revenu d'équilibre, multiplicateur, multiplicateurs budgétaires, économie ouverte, écart déflationniste et courbe IS, exercices corrigés.",
    resume: md`
## L'essentiel — Multiplicateur et courbe IS

- Hypothèses : prix fixes, sous-emploi, production déterminée par la **demande effective**.
- Équilibre fermé sans État : $Y^* = (c_0 + I_0) / (1 - c)$, équivalent à $S = I$.
- **Multiplicateur** $k = 1 / (1 - c)$ : une dépense devient revenu, dont une partie est redépensée ; les fuites (épargne) arrêtent le processus.
- Avec l'État : $Y^* = (c_0 - c\,T + I_0 + G) / (1 - c)$ ; $k_G = 1/(1 - c)$, $k_T = -c/(1 - c)$, budget équilibré : 1 (Haavelmo).
- Impôt proportionnel : $k = 1 / (1 - c(1 - t))$ (stabilisateur automatique) ; économie ouverte : $k = 1 / (1 - c(1 - t) + m)$.
- **Écart déflationniste** ($Y^* < Y_{pe}$) ou **inflationniste** ; écart en demande $= (Y_{pe} - Y^*) / k$.
- **Paradoxe de l'épargne** : épargner plus réduit le revenu sans augmenter l'épargne totale.
- **IS** : $Y = k(A_0 - b\,r)$, décroissante ; se déplace vers la droite quand $G$ augmente ou $T$ baisse.
`,
    exercices: md`
### Exercice 2 — Multiplicateur en économie ouverte

Une économie est décrite par : $C = 100 + 0{,}8\,Y_d$ ; $T = 0{,}25\,Y$ ; $I = 300$ ; $G = 400$ ; $X = 350$ ; $M = 50 + 0{,}2\,Y$.

1. Calculez le multiplicateur et le revenu d'équilibre.
2. Calculez le solde budgétaire et le solde commercial.
3. Les exportations augmentent de 60 (demande européenne). Calculez le nouveau revenu, le nouveau solde commercial et le nouveau solde budgétaire.

<details><summary>Voir le corrigé</summary>

**1)** $k = 1 / (1 - 0{,}8 \times 0{,}75 + 0{,}2) = 1 / 0{,}6 \approx 1{,}667$. Dépense autonome : $100 + 300 + 400 + 350 - 50 = 1\,100$ ; $Y^* = 1\,100 / 0{,}6 \approx \mathbf{1\,833{,}33}$.

**2)** $T = 458{,}33$ ; solde budgétaire $= 458{,}33 - 400 = \mathbf{+58{,}33}$. $M = 50 + 366{,}67 = 416{,}67$ ; solde commercial $= 350 - 416{,}67 = \mathbf{-66{,}67}$.

**3)** $\Delta Y = 60 / 0{,}6 = 100$ ; $Y = \mathbf{1\,933{,}33}$. $M = 50 + 386{,}67 = 436{,}67$ ; solde commercial $= 410 - 436{,}67 = \mathbf{-26{,}67}$ (amélioration de 40 seulement, car 20 d'importations supplémentaires sont induites). $T = 483{,}33$ ; solde budgétaire $= \mathbf{+83{,}33}$ : la croissance améliore aussi les finances publiques.

</details>

### Exercice 3 — Le paradoxe de l'épargne

Dans une économie fermée sans État, $C = 200 + 0{,}75\,Y$ et $I = 300$.

1. Calculez le revenu d'équilibre, la consommation et l'épargne.
2. Les ménages, inquiets, décident d'épargner 50 de plus à tout niveau de revenu ($c_0$ passe à 150). Calculez le nouvel équilibre.
3. Commentez. Que se passerait-il si l'investissement dépendait positivement du revenu ?

<details><summary>Voir le corrigé</summary>

**1)** $Y^* = 500 / 0{,}25 = \mathbf{2\,000}$ ; $C = 200 + 1\,500 = 1\,700$ ; $S = 300 = I$.

**2)** $Y^* = 450 / 0{,}25 = \mathbf{1\,800}$ ; $C = 150 + 1\,350 = 1\,500$ ; $S = 1\,800 - 1\,500 = 300$.

**3)** Le revenu baisse de 200 (multiplicateur 4) et l'épargne totale **reste égale à 300**, car elle doit égaliser l'investissement : l'effort d'épargne est annulé par la baisse du revenu. Si l'investissement augmentait avec le revenu, la baisse du revenu réduirait l'investissement, et l'épargne totale **diminuerait** : le paradoxe serait encore plus fort.

</details>
`,
    qcm: [
      { q: "Avec une PmC de 0,75, le multiplicateur d'investissement vaut :", choix: ["0,75", "4", "1,33", "0,25"], bonne: 1, explication: "k = 1 / (1 − 0,75)." },
      { q: "Le multiplicateur fiscal (impôts forfaitaires) est égal à :", choix: ["1 / (1 − c)", "− c / (1 − c)", "1", "c"], bonne: 1, explication: "Une baisse d'impôt est en partie épargnée." },
      { q: "Selon le théorème d'Haavelmo, le multiplicateur du budget équilibré vaut :", choix: ["0", "1", "1 / (1 − c)", "c"], bonne: 1, explication: "ΔG = ΔT entraîne ΔY = ΔG." },
      { q: "En économie ouverte, le multiplicateur est plus faible car :", choix: ["Les exportations augmentent", "Les importations constituent une fuite", "L'épargne disparaît", "Les prix augmentent"], bonne: 1, explication: "Une partie de la dépense profite aux producteurs étrangers." },
      { q: "c = 0,8 ; t = 0,25. Le multiplicateur avec impôt proportionnel vaut :", choix: ["5", "2,5", "4", "1,25"], bonne: 1, explication: "1 / (1 − 0,8 × 0,75) = 1 / 0,4." },
      { q: "Revenu d'équilibre 900, revenu de plein emploi 1 000, multiplicateur 4. L'écart déflationniste en demande est de :", choix: ["100", "25", "400", "250"], bonne: 1, explication: "100 / 4 = 25." },
      { q: "La courbe IS représente l'équilibre :", choix: ["Du marché monétaire", "Du marché des biens et services", "Du marché du travail", "De la balance des paiements"], bonne: 1, explication: "Investissement = épargne." },
      { q: "Une hausse des dépenses publiques déplace la courbe IS :", choix: ["Vers la gauche", "Vers la droite", "Ne la déplace pas", "La rend verticale"], bonne: 1, explication: "À taux donné, le revenu d'équilibre augmente de k × ΔG." },
      { q: "La courbe IS est décroissante car :", choix: ["Une hausse du taux réduit l'investissement et le revenu", "Une hausse du revenu augmente le taux", "La demande de monnaie baisse", "Les prix sont flexibles"], bonne: 0, explication: "Baisse de l'investissement amplifiée par le multiplicateur." },
      { q: "Le paradoxe de l'épargne signifie qu'une hausse de l'épargne désirée :", choix: ["Augmente le revenu", "Réduit le revenu sans augmenter l'épargne totale", "Augmente l'investissement", "Réduit les impôts"], bonne: 1, explication: "L'épargne reste égale à l'investissement autonome." },
    ],
  },

  2: {
    titre: "La monnaie et le marché monétaire : la courbe LM",
    description: "Monnaie : fonctions, création monétaire, multiplicateur, agrégats M1 M2 M3 au Maroc, demande de monnaie keynésienne, courbe LM et Bank Al-Maghrib.",
    resume: md`
## L'essentiel — Monnaie et courbe LM

- Fonctions : **unité de compte**, **intermédiaire des échanges**, **réserve de valeur** ; formes : fiduciaire, scripturale, électronique.
- « **Les crédits font les dépôts** » : les banques créent la monnaie en prêtant ; le remboursement la détruit.
- Base monétaire $H = B + R$ ; multiplicateur $m = (1 + e) / (e + r)$ ; $M = m \times H$.
- Agrégats de BAM : **M1** (fiduciaire + scriptural), **M2** (+ comptes sur carnets), **M3** (+ dépôts à terme, devises, OPCVM monétaires…). Contreparties : avoirs extérieurs nets, créances sur l'économie, créances nettes sur l'État.
- Demande de monnaie keynésienne : transaction et précaution ($k\,Y$), spéculation ($L_0 - h\,r$) ; **trappe à liquidité**.
- **LM** : $M^o / P = k\,Y + L_0 - h\,r$ ; croissante ; horizontale (trappe), verticale (cas classique).
- Hausse de $M^o$ : LM vers la droite ; hausse de $P$ : LM vers la gauche.
- **Bank Al-Maghrib** (loi 40-17) : stabilité des prix ; taux directeur, open market, facilités permanentes, réserve obligatoire.
`,
    exercices: md`
### Exercice 2 — Le multiplicateur monétaire

La base monétaire d'une économie est de 400 milliards de DH. Le public conserve des billets équivalant à 30 % de ses dépôts et les banques gardent 10 % de leurs dépôts en réserves.

1. Calculez le multiplicateur monétaire et la masse monétaire.
2. La banque centrale relève le taux de réserve à 20 %. Calculez la nouvelle masse monétaire.
3. Le développement du paiement mobile réduit la préférence pour les billets à 20 % (réserves à 10 %). Quel est l'effet ?

<details><summary>Voir le corrigé</summary>

**1)** $m = 1{,}3 / (0{,}3 + 0{,}1) = \mathbf{3{,}25}$ ; $M = 3{,}25 \times 400 = \mathbf{1\,300}$.

**2)** $m = 1{,}3 / 0{,}5 = 2{,}6$ ; $M = \mathbf{1\,040}$ : la hausse des réserves obligatoires réduit la capacité de création monétaire (baisse de 260).

**3)** $m = 1{,}2 / 0{,}3 = 4$ ; $M = \mathbf{1\,600}$ : moins de billets signifie moins de fuites hors du système bancaire, donc plus de création monétaire à base monétaire donnée.

</details>

### Exercice 3 — Prix des obligations et taux d'intérêt

Une obligation perpétuelle rapporte un coupon fixe de 60 DH par an.

1. Quel est son prix si le taux d'intérêt du marché est de 6 % ? de 4 % ? de 8 % ?
2. Expliquez pourquoi, selon Keynes, les agents détiennent plus de monnaie lorsque le taux d'intérêt est bas.

<details><summary>Voir le corrigé</summary>

**1)** Prix d'une rente perpétuelle $= \text{coupon} / r$ : **1 000 DH** à 6 %, **1 500 DH** à 4 %, **750 DH** à 8 %. Le prix des obligations varie en sens inverse du taux.

**2)** Quand le taux est bas, les agents anticipent sa remontée, donc une **baisse du prix des obligations** (perte en capital) : ils préfèrent garder de la monnaie en attendant. Quand le taux est élevé, ils anticipent une baisse du taux, donc une hausse du prix des titres, et achètent des obligations. La demande de monnaie de spéculation est ainsi **décroissante** du taux d'intérêt.

</details>
`,
    qcm: [
      { q: "La fonction de la monnaie qui permet de comparer les prix est :", choix: ["La réserve de valeur", "L'unité de compte", "L'intermédiaire des échanges", "La spéculation"], bonne: 1, explication: "Tous les prix sont exprimés en dirhams." },
      { q: "« Les crédits font les dépôts » signifie que :", choix: ["Les dépôts précèdent toujours les crédits", "Les banques créent de la monnaie en accordant des crédits", "La banque centrale accorde les crédits", "Les crédits réduisent la masse monétaire"], bonne: 1, explication: "Le compte de l'emprunteur est crédité : monnaie nouvelle." },
      { q: "Billets = 25 % des dépôts, réserves = 15 %. Le multiplicateur monétaire vaut :", choix: ["2,5", "3,125", "4", "6,67"], bonne: 1, explication: "1,25 / 0,40 = 3,125." },
      { q: "L'agrégat M1 comprend :", choix: ["Les dépôts à terme", "La monnaie fiduciaire et les dépôts à vue", "Les comptes sur carnets", "Les bons du Trésor"], bonne: 1, explication: "C'est l'agrégat le plus liquide." },
      { q: "Selon Keynes, la demande de monnaie de spéculation :", choix: ["Augmente avec le taux d'intérêt", "Diminue quand le taux d'intérêt augmente", "Dépend du revenu", "Est nulle"], bonne: 1, explication: "Coût d'opportunité et anticipations sur le prix des titres." },
      { q: "La courbe LM est croissante car une hausse du revenu :", choix: ["Réduit l'offre de monnaie", "Augmente la demande de transaction, ce qui fait monter le taux", "Réduit l'investissement", "Augmente les prix"], bonne: 1, explication: "L'offre étant fixe, le taux monte pour réduire la demande de spéculation." },
      { q: "Dans la trappe à liquidité, la courbe LM est :", choix: ["Verticale", "Horizontale", "Décroissante", "Inexistante"], bonne: 1, explication: "La demande de monnaie est infinie au taux plancher." },
      { q: "Une hausse de l'offre de monnaie déplace LM :", choix: ["Vers la gauche", "Vers la droite", "Vers le haut", "Ne la déplace pas"], bonne: 1, explication: "À revenu donné, le taux d'intérêt baisse." },
      { q: "L'objectif principal de Bank Al-Maghrib est :", choix: ["Le plein emploi", "La stabilité des prix", "La croissance des exportations", "L'équilibre budgétaire"], bonne: 1, explication: "Fixé par son statut (loi 40-17)." },
      { q: "Le taux directeur de Bank Al-Maghrib est le taux :", choix: ["Des crédits immobiliers", "Des avances à 7 jours accordées aux banques", "Des dépôts à terme", "Des bons du Trésor à 10 ans"], bonne: 1, explication: "Il oriente le taux interbancaire." },
    ],
  },

  3: {
    titre: "L'équilibre IS-LM et la politique économique",
    description: "Modèle IS-LM : équilibre général, politique budgétaire et effet d'éviction, politique monétaire, efficacité selon les pentes et policy mix.",
    resume: md`
## L'essentiel — IS-LM et politique économique

- **IS** (biens, décroissante) et **LM** (monnaie, croissante) ; leur intersection donne $(Y^*, r^*)$.
- $Y^* = \dfrac{h\,A_0 + b\,(M^o/P - L_0)}{h\,(1 - c) + b\,\ell}$.
- **Politique budgétaire** : IS vers la droite ; $r$ monte, l'investissement baisse : **effet d'éviction** ; multiplicateur $h / (h(1 - c) + b\,\ell) < 1/(1 - c)$.
- **Politique monétaire** : LM vers la droite ; $r$ baisse, $I$ et $Y$ augmentent. Canaux : taux, crédit, change, prix des actifs, anticipations.
- Trappe à liquidité (LM horizontale) : budget efficace, monnaie inefficace. Cas classique (LM verticale) : l'inverse. IS verticale : monnaie inefficace.
- **Policy mix** : relance budgétaire + monnaie accommodante = pas d'éviction.
- Limites : prix fixes, économie fermée (Mundell-Fleming), anticipations.
`,
    exercices: md`
### Exercice 2 — Lecture de l'effet d'éviction

On donne IS : $Y = 2\,400 - 60\,r$ et LM : $Y = 1\,200 + 90\,r$ ; le multiplicateur simple vaut 3 et $I = 400 - 20\,r$.

1. Calculez l'équilibre.
2. Les dépenses publiques augmentent de 50. Calculez le nouvel équilibre et l'effet d'éviction.
3. Montrez que l'effet d'éviction correspond à la baisse de l'investissement multipliée par 3.

<details><summary>Voir le corrigé</summary>

**1)** $2\,400 - 60\,r = 1\,200 + 90\,r \Rightarrow r = \mathbf{8\,\%}$, $Y = \mathbf{1\,920}$.

**2)** IS : $Y = 2\,550 - 60\,r$ ; $2\,550 - 60\,r = 1\,200 + 90\,r \Rightarrow r = \mathbf{9\,\%}$, $Y = \mathbf{2\,010}$. Hausse de 90 au lieu de 150 : éviction de **60**.

**3)** L'investissement passe de $400 - 160 = 240$ à $400 - 180 = 220$ : baisse de 20, et $20 \times 3 = 60$ ✔.

</details>

### Exercice 3 — Quelle politique choisir ?

Pour chaque situation, indiquez la politique la plus efficace pour relancer l'activité et justifiez avec les courbes IS et LM :
1. Les taux d'intérêt sont déjà proches de zéro et les agents thésaurisent.
2. La demande de monnaie est très peu sensible au taux d'intérêt.
3. Les entreprises, très pessimistes, n'investissent pas quel que soit le taux.
4. Le déficit public est déjà élevé mais l'inflation est faible.

<details><summary>Voir le corrigé</summary>

1. **Trappe à liquidité** (LM horizontale) : la politique monétaire ne peut plus baisser le taux ; la **politique budgétaire** est pleinement efficace, sans éviction.
2. LM presque **verticale** (cas classique) : la relance budgétaire est presque entièrement évincée ; la **politique monétaire** est efficace.
3. IS presque **verticale** : la baisse du taux ne stimule pas l'investissement ; seule la **politique budgétaire** agit directement sur la demande.
4. Un **policy mix** : assainissement budgétaire progressif accompagné d'un **assouplissement monétaire** (baisse des taux) pour soutenir l'investissement privé.

</details>
`,
    qcm: [
      { q: "Le modèle IS-LM a été formalisé par :", choix: ["Keynes", "Hicks", "Friedman", "Phillips"], bonne: 1, explication: "John Hicks, 1937." },
      { q: "Une hausse des dépenses publiques déplace :", choix: ["LM vers la droite", "IS vers la droite", "IS vers la gauche", "LM vers la gauche"], bonne: 1, explication: "La demande de biens augmente à tout taux d'intérêt." },
      { q: "L'effet d'éviction résulte :", choix: ["D'une baisse des prix", "De la hausse du taux d'intérêt qui réduit l'investissement privé", "D'une hausse des exportations", "D'une baisse des impôts"], bonne: 1, explication: "La hausse du revenu augmente la demande de monnaie." },
      { q: "Une hausse de l'offre de monnaie entraîne dans IS-LM :", choix: ["Hausse du taux et baisse du revenu", "Baisse du taux et hausse du revenu", "Hausse des deux", "Aucun effet"], bonne: 1, explication: "LM se déplace vers la droite." },
      { q: "Dans la trappe à liquidité, la politique monétaire est :", choix: ["Très efficace", "Inefficace", "Inflationniste", "Obligatoire"], bonne: 1, explication: "Le taux ne peut plus baisser." },
      { q: "Si la courbe LM est verticale, la politique budgétaire :", choix: ["Est pleinement efficace", "Est inefficace (éviction totale)", "Réduit le taux", "Augmente l'offre de monnaie"], bonne: 1, explication: "Le revenu est fixé par l'offre de monnaie." },
      { q: "Pour supprimer l'effet d'éviction d'une relance budgétaire, la banque centrale doit :", choix: ["Réduire l'offre de monnaie", "Augmenter l'offre de monnaie pour garder le taux constant", "Augmenter le taux directeur", "Vendre des devises"], bonne: 1, explication: "C'est un policy mix de relance coordonnée." },
      { q: "IS : Y = 2 000 − 80r ; LM : Y = 1 100 + 100r. Le taux d'équilibre est :", choix: ["4 %", "5 %", "6 %", "9 %"], bonne: 1, explication: "180 r = 900." },
      { q: "Le multiplicateur budgétaire dans IS-LM est :", choix: ["Supérieur au multiplicateur simple", "Inférieur au multiplicateur simple", "Toujours égal à 1", "Nul"], bonne: 1, explication: "À cause de l'éviction, sauf trappe à liquidité." },
      { q: "Le modèle de Mundell-Fleming étend IS-LM :", choix: ["Au long terme", "À l'économie ouverte", "Au marché du travail", "À l'inflation"], bonne: 1, explication: "Il intègre le change et les mouvements de capitaux." },
    ],
  },

  4: {
    titre: "Le marché du travail et l'offre globale",
    description: "Demande de travail (PmL = W/P), offre de travail, équilibre et chômage, rigidités nominales et réelles, courbe d'offre globale et chocs d'offre, corrigés.",
    resume: md`
## L'essentiel — Marché du travail et offre globale

- Court terme : capital fixe, $Y = F(N)$ ; **productivité marginale** $PmL = F'(N)$ **décroissante**.
- **Demande de travail** : profit maximal pour $PmL = W/P = w$ ; $N^d(w)$ décroissante. Exemple : $Y = 100\sqrt{N}$ donne $N^d = 2\,500 / w^2$.
- **Offre de travail** : arbitrage travail-loisir, effets de substitution et de revenu ; $N^s(w)$ en général croissante.
- **Salaires flexibles** : $N^d = N^s$ fixe $w^*$, $N^*$ et la **production potentielle** $Y_p$, indépendants de $P$ : **OG verticale** (classique, long terme).
- **Rigidité nominale** ($\overline{W}$ fixe) : $w = \overline{W}/P$ ; une hausse de $P$ réduit $w$, augmente l'emploi et la production : **OG croissante** de court terme.
- **Rigidité réelle** (SMIG, conventions, salaire d'efficience) : $w$ trop élevé, chômage **classique** durable.
- Chômage involontaire = $N^s(w) - N^d(w)$ ; taux = chômeurs / $N^s$.
- Formes de l'OG : horizontale (dépression), croissante (court terme), verticale (long terme) ; $Y = Y_p + \beta\,(P - P^e)$.
- **Chocs d'offre** négatifs (sécheresse, énergie) : OG vers la gauche ; gains de productivité : OG vers la droite.
`,
    exercices: md`
### Exercice 2 — Salaire minimum et chômage

Sur un marché du travail, la demande des entreprises est $N^d = 200 - 10\,w$ et l'offre des ménages $N^s = 50 + 20\,w$ (N en milliers, $w$ salaire réel en milliers de DH).

1. Calculez le salaire réel et l'emploi d'équilibre.
2. Un salaire minimum réel est fixé à 6. Calculez l'emploi, l'offre de travail, le chômage et son taux.
3. De quel type de chômage s'agit-il ? Citez deux politiques susceptibles de le réduire sans baisser le salaire minimum.

<details><summary>Voir le corrigé</summary>

**1)** $200 - 10\,w = 50 + 20\,w$, soit $w^* = \mathbf{5}$ et $N^* = \mathbf{150}$.

**2)** $N^d = 200 - 60 = \mathbf{140}$ ; $N^s = 50 + 120 = \mathbf{170}$ ; chômage : $\mathbf{30}$ milliers ; taux : $30 / 170 \approx \mathbf{17{,}6\,\%}$. L'emploi recule de 10 milliers, tandis que 20 milliers de personnes supplémentaires se présentent sur le marché.

**3)** Chômage **classique** : le salaire réel est supérieur au salaire d'équilibre. Pour le réduire sans baisser le salaire minimum, il faut augmenter la **productivité** (formation, équipement), ce qui déplace la demande de travail vers la droite, ou réduire le coût du travail pour l'employeur sans toucher au salaire net (allègement des cotisations sur les bas salaires).

</details>

### Exercice 3 — Construire l'offre globale de court terme

Une économie produit selon $Y = 100\sqrt{N}$. Le salaire nominal est fixé par les conventions collectives à $\overline{W} = 10$.

1. Établissez la demande de travail en fonction du salaire réel, puis en fonction de $P$.
2. Calculez le salaire réel, l'emploi et la production pour $P = 0{,}8$ ; $1$ ; $1{,}2$.
3. Déduisez l'équation de l'offre globale de court terme et commentez.
4. Pourquoi cette courbe devient-elle verticale à long terme ?

<details><summary>Voir le corrigé</summary>

**1)** $PmL = 50 / \sqrt{N} = w$ donne $N^d = 2\,500 / w^2$. Avec $w = 10 / P$ : $N^d = 2\,500\,P^2 / 100 = \mathbf{25\,P^2}$.

**2)**

| $P$ | $w = 10/P$ | $N = 25\,P^2$ | $Y = 100\sqrt{N}$ |
|---:|---:|---:|---:|
| 0,8 | 12,5 | 16 | 400 |
| 1 | 10 | 25 | 500 |
| 1,2 | 8,33 | 36 | 600 |

**3)** $Y = 100 \times 5\,P = \mathbf{500\,P}$ : l'offre globale est **croissante**. Quand les prix montent, le salaire nominal étant fixe, le salaire réel baisse et les entreprises embauchent davantage.

**4)** À long terme, les salariés constatent la hausse des prix et renégocient leur salaire nominal pour retrouver leur salaire réel : l'emploi et la production reviennent à leur niveau d'équilibre, quel que soit $P$. L'offre globale est alors verticale au niveau de la production potentielle.

</details>
`,
    qcm: [
      { q: "À court terme, la productivité marginale du travail est :", choix: ["Constante", "Décroissante", "Toujours nulle", "Croissante"], bonne: 1, explication: "Loi des rendements décroissants, le capital étant fixe." },
      { q: "Une entreprise qui maximise son profit embauche jusqu'à ce que :", choix: ["PmL = W", "PmL = W/P", "PmL = P", "W = P"], bonne: 1, explication: "La productivité marginale égale le salaire réel." },
      { q: "Y = 100√N. La productivité marginale du travail est :", choix: ["100/N", "50/√N", "100√N", "200/√N"], bonne: 1, explication: "La dérivée de 100√N est 100 / (2√N)." },
      { q: "L'effet de substitution d'une hausse du salaire réel pousse les ménages à :", choix: ["Travailler moins", "Travailler plus", "Épargner moins", "Consommer moins"], bonne: 1, explication: "Le loisir devient plus coûteux." },
      { q: "Avec des salaires flexibles, une hausse du niveau des prix :", choix: ["Augmente l'emploi", "Ne modifie ni l'emploi ni la production", "Réduit la production", "Crée du chômage"], bonne: 1, explication: "Le salaire nominal suit, le salaire réel est inchangé." },
      { q: "Avec un salaire nominal rigide, une hausse des prix :", choix: ["Augmente le salaire réel", "Réduit le salaire réel et augmente l'emploi", "Est sans effet", "Réduit l'emploi"], bonne: 1, explication: "W/P baisse, les embauches deviennent rentables." },
      { q: "L'offre globale de long terme est :", choix: ["Horizontale", "Verticale", "Décroissante", "Croissante"], bonne: 1, explication: "Au niveau de la production potentielle." },
      { q: "Un salaire d'efficience est :", choix: ["Le salaire minimum légal", "Un salaire supérieur au salaire du marché pour motiver les salariés", "Un salaire indexé sur les prix", "Un salaire fixé par l'État"], bonne: 1, explication: "C'est une source de rigidité réelle." },
      { q: "Nd = 140, Ns = 170 au salaire en vigueur. Le taux de chômage est d'environ :", choix: ["21,4 %", "17,6 %", "30 %", "82,4 %"], bonne: 1, explication: "30 / 170, l'offre de travail étant la population active." },
      { q: "Une sécheresse au Maroc constitue :", choix: ["Un choc de demande positif", "Un choc d'offre négatif", "Une politique monétaire", "Un choc d'offre positif"], bonne: 1, explication: "La production agricole baisse à prix donné : l'OG se déplace vers la gauche." },
    ],
  },

  5: {
    titre: "Le modèle offre globale-demande globale",
    description: "Modèle OG-DG : demande globale tirée d'IS-LM, offre globale de court et long terme, chocs de demande et d'offre, neutralité de la monnaie, stagflation.",
    resume: md`
## L'essentiel — Le modèle OG-DG

- **Demande globale** : couples $(P, Y)$ qui équilibrent IS et LM ; on tire $r$ de IS et on le reporte dans LM écrite avec $M^o / P$.
- DG **décroissante** : effet d'encaisses réelles (Keynes), effet de richesse (Pigou), effet de compétitivité.
- DG vers la droite : hausse de $G$ ou de $M^o$, baisse de $T$ ou du taux directeur, confiance, exportations.
- **OG de court terme** croissante : $Y = Y_p + \beta\,(P - P^e)$ ; **OG de long terme** verticale en $Y = Y_p$.
- Équilibre : OG = DG, souvent une équation du second degré en $P$ (racine positive).
- Hors du long terme, les salaires et les anticipations s'ajustent et ramènent $Y$ vers $Y_p$.
- **Choc de demande** positif : $P$ et $Y$ augmentent à court terme ; à long terme seuls les prix montent (**neutralité de la monnaie**, éviction totale pour une relance budgétaire).
- **Choc d'offre** négatif : $P$ monte et $Y$ baisse, c'est la **stagflation** (1973, Maroc 2022 : inflation de 6,6 %).
- Dilemme : accompagner le choc (plus d'inflation) ou le combattre (plus de récession) ; seules les politiques d'offre traitent la cause.
`,
    exercices: md`
### Exercice 2 — Relance budgétaire dans le modèle OG-DG

On reprend l'économie de l'exercice 5 : IS $Y = 1\,200 - 40\,r$, LM $M^o / P = 0{,}5\,Y - 20\,r$ avec $M^o = 400$, OG de court terme $Y = 600 + 400\,P$, $Y_p = 1\,000$. L'IS a été obtenue avec un multiplicateur de 4.

1. Les dépenses publiques augmentent de 25. Écrivez la nouvelle courbe IS, puis la nouvelle demande globale.
2. Calculez l'équilibre de court terme ($P$, $Y$, $r$).
3. Calculez l'équilibre de long terme. Que devient le taux d'intérêt ? Concluez sur l'effet d'éviction.

<details><summary>Voir le corrigé</summary>

**1)** IS se déplace de $4 \times 25 = 100$ : $Y = 1\,300 - 40\,r$, soit $r = (1\,300 - Y)/40$. Dans LM : $400/P = 0{,}5\,Y - 0{,}5\,(1\,300 - Y) = Y - 650$, d'où $\mathbf{Y = 650 + 400 / P}$.

**2)** $650 + 400/P = 600 + 400\,P$ donne $400\,P^2 - 50\,P - 400 = 0$, soit $P = \dfrac{50 + \sqrt{2\,500 + 640\,000}}{800} \approx \mathbf{1{,}065}$ et $Y \approx 600 + 425{,}8 = \mathbf{1\,025{,}8}$. Taux : $r = (1\,300 - 1\,025{,}8)/40 \approx \mathbf{6{,}86\,\%}$ (contre 5 % au départ).

**3)** $Y = 1\,000$ : $400/P = 350$, soit $P \approx \mathbf{1{,}143}$ ; $r = (1\,300 - 1\,000)/40 = \mathbf{7{,}5\,\%}$. La production revient à son potentiel : les 25 de dépenses publiques supplémentaires ont été entièrement compensés par une baisse de l'investissement privé ($10 \times 2{,}5 = 25$, la sensibilité de l'investissement au taux étant de 10). L'**éviction est totale** à long terme ; la relance n'a eu qu'un effet temporaire sur la production et a laissé des prix plus élevés.

</details>

### Exercice 3 — Identifier les chocs

Pour chaque événement, indiquez la courbe déplacée (OG ou DG), le sens du déplacement et l'effet de court terme sur $P$ et $Y$ :
1. Bank Al-Maghrib baisse son taux directeur.
2. La flambée du prix du pétrole renchérit les coûts de transport et d'énergie.
3. Une récession dans la zone euro réduit les exportations marocaines.
4. Une excellente campagne agricole après plusieurs années de sécheresse.
5. L'État augmente l'investissement public dans les infrastructures.
6. Les salariés anticipent une forte inflation et obtiennent des hausses de salaires nominaux.

<details><summary>Voir le corrigé</summary>

| Événement | Courbe | Sens | Effet sur $P$ | Effet sur $Y$ |
|---|---|---|---|---|
| 1. Baisse du taux directeur | DG | Droite | Hausse | Hausse |
| 2. Hausse du pétrole | OG | Gauche | Hausse | Baisse (stagflation) |
| 3. Récession en zone euro | DG | Gauche | Baisse | Baisse |
| 4. Bonne campagne agricole | OG | Droite | Baisse | Hausse |
| 5. Investissement public | DG | Droite | Hausse | Hausse |
| 6. Hausse de $P^e$ et des salaires | OG | Gauche (vers le haut) | Hausse | Baisse |

Règle : un choc de demande fait varier $P$ et $Y$ dans le **même sens**, un choc d'offre en **sens contraire**.

</details>
`,
    qcm: [
      { q: "La courbe de demande globale relie :", choix: ["Le taux d'intérêt et le revenu", "Le niveau des prix et la production demandée", "Le salaire et l'emploi", "L'inflation et le chômage"], bonne: 1, explication: "Elle est tirée de l'équilibre IS-LM pour chaque niveau des prix." },
      { q: "Une hausse du niveau des prix réduit la demande globale parce que :", choix: ["La courbe IS se déplace", "L'offre réelle de monnaie baisse et le taux d'intérêt monte", "Les impôts augmentent", "La production potentielle baisse"], bonne: 1, explication: "C'est l'effet d'encaisses réelles." },
      { q: "L'effet Pigou désigne :", choix: ["L'effet d'éviction", "L'effet de richesse lié à la valeur réelle des encaisses", "L'effet multiplicateur", "L'effet de compétitivité"], bonne: 1, explication: "Des prix plus élevés réduisent la richesse réelle et la consommation." },
      { q: "Une hausse des dépenses publiques déplace :", choix: ["L'OG vers la droite", "La DG vers la droite", "La DG vers la gauche", "L'OG de long terme"], bonne: 1, explication: "Elle déplace IS, donc la demande globale." },
      { q: "L'offre globale de long terme est :", choix: ["Croissante", "Verticale au niveau de la production potentielle", "Horizontale", "Décroissante"], bonne: 1, explication: "Les salaires et les anticipations sont ajustés." },
      { q: "À long terme, une hausse de 10 % de la masse monétaire entraîne :", choix: ["Une hausse de 10 % de la production", "Une hausse de 10 % des prix, la production étant inchangée", "Une baisse des prix", "Une hausse du taux d'intérêt réel"], bonne: 1, explication: "Neutralité de la monnaie à long terme." },
      { q: "Un choc d'offre négatif provoque à court terme :", choix: ["Une baisse des prix et de la production", "Une hausse des prix et une baisse de la production", "Une hausse des prix et de la production", "Aucun effet"], bonne: 1, explication: "C'est la stagflation." },
      { q: "DG : Y = 600 + 400/P et OG : Y = 600 + 400P. Le niveau des prix d'équilibre est :", choix: ["0,5", "1", "1,5", "2"], bonne: 1, explication: "400/P = 400P donne P² = 1." },
      { q: "Le premier choc pétrolier de 1973 est surtout :", choix: ["Un choc de demande positif", "Un choc d'offre négatif", "Une politique monétaire restrictive", "Un choc de demande négatif"], bonne: 1, explication: "La hausse du prix de l'énergie renchérit les coûts de production." },
      { q: "En 2022, l'inflation au Maroc a atteint en moyenne annuelle, selon le HCP :", choix: ["1,4 %", "6,6 %", "12 %", "0,6 %"], bonne: 1, explication: "Inflation importée (énergie, céréales) cumulée avec la sécheresse." },
    ],
  },

  6: {
    titre: "Inflation, chômage et politique monétaire",
    description: "Inflation (IPC, causes, théorie quantitative, relation de Fisher), chômage BIT, loi d'Okun, courbe de Phillips et politique de Bank Al-Maghrib.",
    resume: md`
## L'essentiel — Inflation, chômage, politique monétaire

- **Inflation** : hausse générale et durable des prix ; désinflation, déflation, stagflation, hyperinflation.
- **IPC** (HCP) : indice de Laspeyres, $\sum w_i \, p_{i,t} / p_{i,0} \times 100$ ; **inflation sous-jacente** hors produits volatils et réglementés.
- Salaire réel = nominal / indice ; **Fisher** : $(1 + i) = (1 + r)(1 + \pi)$.
- Causes : demande, coûts, importée, monétaire, structurelle ; spirale prix-salaires. Maroc 2022 : inflation importée supérieure à 6 %.
- **Théorie quantitative** : $M V = P Y$ ; $\pi \approx \Delta M/M - \Delta Y/Y$ si $V$ stable.
- **Chômage (BIT)** : sans emploi, disponible, en recherche active ; taux = chômeurs / population active. Types : frictionnel, structurel, conjoncturel, classique.
- **Okun** : $\Delta u = -\alpha(g - g^*)$. **Phillips** augmentée : $\pi = \pi^e - \beta(u - u^*)$ ; verticale à long terme (NAIRU).
- **Bank Al-Maghrib** : taux directeur relevé de 1,5 % à 3 % (2022-2023) puis abaissé à partir de 2024 ; transition vers le ciblage d'inflation.
`,
    exercices: md`
### Exercice 2 — Indice de Laspeyres

Un panier comprend trois biens (quantités de l'année de base) :

| Bien | Quantité | Prix année 0 | Prix année 1 |
|---|---:|---:|---:|
| Farine (kg) | 20 | 8 | 9 |
| Huile (litres) | 5 | 18 | 21 |
| Transport (trajets) | 40 | 5 | 5 |

1. Calculez le coût du panier en année 0 et en année 1, puis l'indice de Laspeyres.
2. Calculez les pondérations de chaque bien dans le panier de base et retrouvez l'indice par la moyenne pondérée des indices élémentaires.

<details><summary>Voir le corrigé</summary>

**1)** Année 0 : $160 + 90 + 200 = 450$ ; année 1 : $180 + 105 + 200 = 485$. Indice : $485 / 450 \times 100 \approx \mathbf{107{,}78}$ (inflation de 7,78 %).

**2)** Pondérations : farine $160/450 \approx 35{,}6\,\%$ ; huile $90/450 = 20\,\%$ ; transport $200/450 \approx 44{,}4\,\%$. Indices élémentaires : 112,5 ; 116,67 ; 100. Moyenne pondérée : $0{,}3556 \times 112{,}5 + 0{,}2 \times 116{,}67 + 0{,}4444 \times 100 \approx 40 + 23{,}33 + 44{,}44 = \mathbf{107{,}78}$ ✔.

</details>

### Exercice 3 — Chômage et activité

Dans un pays, la population en âge de travailler est de 28 millions ; 12,6 millions de personnes ont un emploi et 1,8 million sont au chômage au sens du BIT.

1. Calculez la population active, le taux d'activité et le taux de chômage.
2. 300 000 chômeurs découragés cessent de chercher un emploi. Recalculez le taux de chômage et commentez.

<details><summary>Voir le corrigé</summary>

**1)** Population active : $12{,}6 + 1{,}8 = \mathbf{14{,}4}$ millions ; taux d'activité : $14{,}4 / 28 \approx$ **51,4 %** ; taux de chômage : $1{,}8 / 14{,}4 =$ **12,5 %**.

**2)** Ils sortent de la population active (ils ne recherchent plus d'emploi) : chômeurs 1,5 million, population active 14,1 millions, taux de chômage $1{,}5 / 14{,}1 \approx$ **10,6 %**. Le chômage baisse sans création d'emplois : il faut toujours regarder aussi le **taux d'activité** (tombé à 50,4 %) et le taux d'emploi.

</details>
`,
    qcm: [
      { q: "L'inflation est :", choix: ["La hausse du prix d'un produit", "Une hausse générale et durable des prix", "Une baisse du PIB", "Une hausse des salaires"], bonne: 1, explication: "Elle réduit le pouvoir d'achat de la monnaie." },
      { q: "La désinflation désigne :", choix: ["Une baisse des prix", "Un ralentissement de la hausse des prix", "Une hausse du chômage", "Une hausse des taux"], bonne: 1, explication: "Les prix augmentent encore, mais moins vite." },
      { q: "Au Maroc, l'indice des prix à la consommation est calculé par :", choix: ["Bank Al-Maghrib", "Le HCP", "Le ministère du Commerce", "L'Office des changes"], bonne: 1, explication: "Chaque mois." },
      { q: "Taux nominal 5 %, inflation 3 %. Le taux réel est d'environ :", choix: ["8 %", "1,94 %", "2,5 %", "0,6 %"], bonne: 1, explication: "1,05 / 1,03 − 1 ≈ 1,94 %." },
      { q: "Selon la théorie quantitative, si M augmente de 10 %, Y de 4 % et V est stable, l'inflation est d'environ :", choix: ["14 %", "6 %", "4 %", "10 %"], bonne: 1, explication: "π ≈ 10 − 4." },
      { q: "Est chômeur au sens du BIT une personne :", choix: ["Sans emploi seulement", "Sans emploi, disponible et en recherche active", "Qui travaille à temps partiel", "Qui a plus de 60 ans"], bonne: 1, explication: "Les trois conditions sont cumulatives." },
      { q: "Le chômage dû à une insuffisance de la demande est :", choix: ["Frictionnel", "Keynésien (conjoncturel)", "Classique", "Structurel"], bonne: 1, explication: "Il se combat par la relance de la demande." },
      { q: "La courbe de Phillips originale relie :", choix: ["Croissance et chômage", "Hausse des salaires et chômage", "Monnaie et prix", "Taux et investissement"], bonne: 1, explication: "Phillips, 1958, au Royaume-Uni." },
      { q: "Selon Friedman, à long terme la courbe de Phillips est :", choix: ["Décroissante", "Verticale", "Horizontale", "Croissante"], bonne: 1, explication: "Le chômage revient à son niveau naturel." },
      { q: "Face à l'inflation de 2022, Bank Al-Maghrib a :", choix: ["Baissé son taux directeur", "Relevé son taux directeur", "Supprimé le taux directeur", "Dévalué le dirham de 20 %"], bonne: 1, explication: "De 1,5 % à 3 % entre septembre 2022 et mars 2023." },
    ],
  },
};

export default chapitres;
