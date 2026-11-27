// Crédits Bancaires et Gestion des Risques Crédits (S6, filière Techniques de banque et assurance) — compléments par chapitre : description SEO, résumé, exercices 2 et 3, QCM.
const md = String.raw;

const chapitres = {
1: {
titre: "Le crédit bancaire et le risque de crédit",
description: "Rôle et typologie des crédits bancaires, crédits par décaissement et par signature, PD, EAD et LGD, chaîne du crédit, loi 103-12 et division des risques.",
resume: md`
## L'essentiel — Le crédit bancaire et le risque de crédit

- Le crédit finance l'économie, crée de la monnaie et constitue la première source de revenus (marge d'intérêt) d'une banque commerciale.
- Il relève des opérations de banque de la **loi 103-12**, sous le contrôle de **Bank Al-Maghrib**.
- Typologie : bénéficiaire, objet (exploitation, investissement, consommation, habitat), durée (CT < 2 ans, MT 2 à 7 ans, LT), forme.
- **Décaissement** (fonds versés) / **signature** (cautions, avals, crédit documentaire) : la signature devient un décaissement si elle est appelée.
- Risque de crédit = risque de perte liée au défaut de l'emprunteur ; trois composantes : **PD**, **EAD**, **LGD**.
- Risques voisins : concentration, pays, contrepartie, dégradation.
- Origine : asymétrie d'information → sélection adverse et aléa moral.
- Chaîne du crédit : instruction, décision (délégation de pouvoirs), mise en place, suivi, recouvrement amiable, contentieux ; séparation commercial / risques.
- **Division des risques** : risques sur un même bénéficiaire (groupe compris) plafonnés en pourcentage des fonds propres (abaissement de 20 % à 15 % annoncé par BAM en 2016) ; crédits consortiaux pour les gros dossiers.
- Fin 2025 : 102,3 milliards de DH de créances en souffrance, 8,26 % des crédits (base sociale).
`,
exercices: md`
### Exercice 2 — Le coût d'une perte de crédit

Une banque accorde 200 crédits de 1 000 000 DH à un an. Sa marge nette (après coût des ressources et frais) est de 1,8 % par crédit sain.

1. Quelle marge réalise-t-elle si tous les crédits sont remboursés ?
2. Trois crédits font défaut ; la banque récupère 40 % de chacun. Quel est son résultat ?
3. Combien de défauts de ce type suffisent à annuler la marge ?

<details><summary>Voir le corrigé</summary>

1. $200 \times 1\,000\,000 \times 1{,}8 \% = $ **3 600 000 DH**.
2. Marge des 197 crédits sains : $197 \times 18\,000 = 3\,546\,000$ DH ; perte sur les 3 défauts : $3 \times 600\,000 = 1\,800\,000$ DH. Résultat : **1 746 000 DH**, moins de la moitié de la marge prévue.
3. Chaque défaut coûte 600 000 DH de perte plus 18 000 DH de marge non perçue, soit 618 000 DH. $3\,600\,000 / 618\,000 \approx 5{,}8$ : à partir de **6 défauts** sur 200 (3 %), la banque perd de l'argent.

</details>

### Exercice 3 — Asymétrie d'information

Une banque relève brutalement son taux sur les crédits aux PME de 6 % à 10 % pour compenser des pertes récentes.

1. Quelles entreprises vont continuer à emprunter ? Quel mécanisme est à l'œuvre ?
2. Quel comportement peut-on craindre des entreprises une fois financées ?
3. Quels outils permettent de réduire ces risques sans augmenter les taux ?

<details><summary>Voir le corrigé</summary>

1. Les entreprises aux projets sûrs et peu rentables renoncent ; restent celles dont les projets sont plus risqués (elles acceptent un taux élevé parce qu'elles ne seront pas toujours en mesure de rembourser) : c'est la **sélection adverse**. La hausse du taux peut augmenter les pertes au lieu de les réduire.
2. L'**aléa moral** : pour payer des intérêts élevés, l'entreprise peut se lancer dans des projets plus risqués que prévu.
3. Une meilleure **information** (analyse financière, Credit Bureau, relation de long terme), des **garanties** et un apport personnel du dirigeant, des **clauses** (affectation des fonds, ratios à respecter), un **suivi** du compte, et la segmentation des taux selon la note de chaque client (chapitre 5).

</details>
`,
qcm: [
{ q: "Au Maroc, la distribution de crédits est réservée aux établissements agréés en vertu de la loi :", choix: ["103-12", "31-08", "09-08", "69-21"], bonne: 0, explication: "Loi relative aux établissements de crédit et organismes assimilés." },
{ q: "Une caution de bonne exécution d'un marché public est un crédit :", choix: ["Par signature", "Par décaissement", "À la consommation", "Immobilier"], bonne: 0, explication: "La banque ne paie que si l'engagement est appelé." },
{ q: "Un crédit à 5 ans pour l'achat d'une machine est un crédit :", choix: ["D'investissement à moyen terme", "D'exploitation à court terme", "À la consommation", "Par signature"], bonne: 0, explication: "Le moyen terme va de 2 à 7 ans." },
{ q: "La probabilité de défaut est notée :", choix: ["PD", "LGD", "EAD", "EL"], bonne: 0, explication: "LGD : perte en cas de défaut ; EAD : exposition au défaut." },
{ q: "La perte en cas de défaut (LGD) mesure :", choix: ["La part de l'exposition perdue après recouvrement", "La probabilité que le client ne paie pas", "Le montant prêté au départ", "Le taux d'intérêt du crédit"], bonne: 0, explication: "Elle dépend des garanties et du recouvrement." },
{ q: "Des taux trop élevés attirent surtout les emprunteurs risqués : c'est :", choix: ["La sélection adverse", "L'aléa moral", "Le risque de liquidité", "Le risque pays"], bonne: 0, explication: "L'aléa moral concerne le comportement après le financement." },
{ q: "La règle de division des risques s'apprécie :", choix: ["Par bénéficiaire, groupe de sociétés liées compris", "Par agence de la banque", "Par type de crédit", "Par année civile"], bonne: 0, explication: "Les sociétés liées forment un même bénéficiaire." },
{ q: "La délégation de pouvoirs fixe :", choix: ["Le montant maximal que chaque niveau peut accorder seul", "Le taux directeur", "La liste des garanties légales", "Le salaire des chargés de clientèle"], bonne: 0, explication: "Les gros dossiers remontent au comité de crédit." },
{ q: "Selon Bank Al-Maghrib, le taux de créances en souffrance des banques sur base sociale à fin 2025 était d'environ :", choix: ["8,3 %", "2 %", "15 %", "25 %"], bonne: 0, explication: "8,26 %, pour 102,3 milliards de DH." },
{ q: "La séparation des fonctions dans le crédit signifie que :", choix: ["Celui qui vend le crédit n'est pas celui qui en juge le risque", "Chaque client a deux banques", "Le crédit est versé en deux fois", "Le contentieux est confié à l'État"], bonne: 0, explication: "C'est un principe de contrôle interne." },
],
},
2: {
titre: "L'analyse d'une demande de crédit d'entreprise",
description: "Dossier de crédit d'entreprise, règle des 5 C, CAF et ratio de couverture du service de la dette, endettement, apport, BFR en jours et conditions d'accord.",
resume: md`
## L'essentiel — Analyser une demande de crédit d'entreprise

- Question centrale : l'entreprise peut-elle rembourser **avec son activité** ?
- Dossier : documents juridiques, états de synthèse sur 3 ans, situation récente, objet et plan de financement, endettement (Credit Bureau), garanties → **note de crédit**.
- **5 C** : Character, Capacity, Capital, Collateral, Conditions ; la capacité prime sur les garanties.
- $CAF \approx$ résultat net + dotations − reprises.
- $DSCR = CAF / \text{annuités}$ ; au moins 1,2 à 1,5 selon les banques et les secteurs.
- Délai de remboursement $=$ dettes de financement / CAF ; lourd au-delà de 3 à 4 ans.
- Endettement $=$ dettes de financement / capitaux propres (au plus 1 environ) ; apport des associés 20 à 30 % au moins ; comptes courants bloqués.
- Annuité constante : $a = C \times \frac{i}{1 - (1+i)^{-n}}$.
- Crédits de fonctionnement : $BFR \approx \frac{CA}{360} \times$ BFR en jours, moins la part couverte par le fonds de roulement.
- Décision : accord, refus motivé ou **contre-proposition** ; conditions préalables, **covenants**, exigibilité anticipée.
`,
exercices: md`
### Exercice 2 — Dimensionner un découvert

Une société de distribution de matériel électrique à Casablanca réalise 54 000 000 DH de chiffre d'affaires HT. Son BFR représente 50 jours de chiffre d'affaires et son fonds de roulement s'élève à 5 000 000 DH. Elle demande un découvert de 4 000 000 DH.

1. Calculez son BFR en DH et le besoin de financement à court terme.
2. Faut-il accorder le découvert demandé ? Que peut cacher l'écart ?

<details><summary>Voir le corrigé</summary>

1. $BFR = 54\,000\,000 / 360 \times 50 = $ **7 500 000 DH**. Besoin à court terme : $7\,500\,000 - 5\,000\,000 = $ **2 500 000 DH**.
2. On limite les autorisations à environ **2 500 000 DH** (découvert et escompte confondus). Les 1 500 000 DH demandés en plus ne correspondent pas à l'exploitation : ils financeraient peut-être un investissement, des pertes ou un retrait des associés. Le banquier demande l'explication ; si c'est un investissement, il propose un crédit à moyen terme.

</details>

### Exercice 3 — Capacité d'emprunt maximale

Une entreprise de Meknès dégage une CAF de 2 400 000 DH par an et paie déjà 1 000 000 DH d'annuités. Sa banque exige un DSCR d'au moins 1,25.

1. Quel service total de la dette l'entreprise peut-elle supporter ?
2. Quel montant maximal peut-elle emprunter sur 7 ans à 5 % ?

<details><summary>Voir le corrigé</summary>

1. Service maximal : $2\,400\,000 / 1{,}25 = $ **1 920 000 DH** ; annuité disponible pour le nouveau crédit : $1\,920\,000 - 1\,000\,000 = $ **920 000 DH**.
2. $C = a \times \frac{1 - 1{,}05^{-7}}{0{,}05} = 920\,000 \times 5{,}7864 \approx$ **5 323 000 DH**.

</details>
`,
qcm: [
{ q: "Le critère central des 5 C pour accorder un crédit d'entreprise est :", choix: ["La capacité de remboursement", "La valeur des garanties", "Le nombre de salariés", "L'ancienneté du compte"], bonne: 0, explication: "La garantie n'est qu'une seconde issue." },
{ q: "Le DSCR rapporte :", choix: ["La CAF au service annuel de la dette", "Les capitaux propres aux dettes", "Le chiffre d'affaires à l'EBE", "Les intérêts au capital emprunté"], bonne: 0, explication: "Il mesure la marge de sécurité de remboursement." },
{ q: "Un DSCR de 0,9 signifie que :", choix: ["La CAF ne couvre pas les annuités", "L'entreprise est très peu endettée", "Le crédit est garanti à 90 %", "L'entreprise rembourse en 9 ans"], bonne: 0, explication: "Il faudrait puiser dans la trésorerie ou réemprunter." },
{ q: "Dettes de financement 9 000 000 DH, CAF 3 000 000 DH : le délai de remboursement est de :", choix: ["3 ans", "0,33 an", "6 ans", "12 ans"], bonne: 0, explication: "9 / 3." },
{ q: "Le ratio d'endettement (gearing) rapporte :", choix: ["Les dettes de financement aux capitaux propres", "Les capitaux propres au total du bilan", "La CAF aux dettes", "Le BFR au chiffre d'affaires"], bonne: 0, explication: "Un repère courant est d'au plus 1." },
{ q: "Bloquer les comptes courants d'associés pendant la durée du crédit permet :", choix: ["De les assimiler à des quasi-fonds propres", "De supprimer les intérêts", "D'éviter la TVA", "De réduire le BFR"], bonne: 0, explication: "Les associés ne peuvent pas les retirer avant la banque." },
{ q: "CA HT 72 000 000 DH et BFR de 45 jours : le BFR vaut :", choix: ["9 000 000 DH", "4 500 000 DH", "16 000 000 DH", "720 000 DH"], bonne: 0, explication: "72 000 000 / 360 × 45." },
{ q: "Financer un investissement de 10 ans par un découvert est :", choix: ["Une erreur d'adéquation entre durée du besoin et durée du financement", "La solution la moins chère", "Une exigence de Bank Al-Maghrib", "Un crédit par signature"], bonne: 0, explication: "Le découvert est précaire et cher." },
{ q: "Un covenant est :", choix: ["Un engagement de l'emprunteur à respecter pendant la vie du crédit", "Une garantie hypothécaire", "Un taux d'intérêt variable", "Une pénalité fiscale"], bonne: 0, explication: "Son non-respect peut rendre le crédit exigible." },
{ q: "Face à une demande qui ne respecte pas les normes, le banquier peut :", choix: ["Faire une contre-proposition chiffrée", "Accorder sans condition", "Doubler le montant", "Supprimer l'analyse"], bonne: 0, explication: "Apport plus élevé, montant réduit, durée ou produit différents." },
],
},
3: {
titre: "Le crédit aux particuliers",
description: "Crédit à la consommation et crédit immobilier : mensualités, TEG, taux d'endettement et reste à vivre, loi 31-08, aide directe au logement, FOGARIM.",
resume: md`
## L'essentiel — Le crédit aux particuliers

- Deux familles : **crédit à la consommation** (prêt personnel, automobile, renouvelable, LOA) et **crédit immobilier** (15 à 25 ans).
- Le revenu stable du ménage joue le rôle de la CAF ; domiciliation et prélèvement sur salaire réduisent le risque.
- Mensualité constante : $m = C \times \frac{i}{1 - (1+i)^{-n}}$ avec $i = t/12$ et $n$ en mois.
- **TEG** : intérêts + frais + assurances obligatoires ; plafonnement par le **TMIC**, révisé chaque semestre.
- **Taux d'endettement** = total des mensualités / revenu net ; plafond interne souvent proche de 40 %.
- **Reste à vivre** = revenu − charges fixes : à apprécier selon la taille du ménage.
- Immobilier : coût total (prix + frais), apport, **quotité de financement**, durée ; hypothèque de premier rang + assurance décès-invalidité.
- Allonger la durée baisse la mensualité mais augmente le coût total des intérêts.
- **Loi 31-08** : offre préalable écrite, TEG, délai de réflexion ou de rétractation, remboursement anticipé encadré.
- Aide directe au logement (depuis 2024) : 100 000 DH jusqu'à 300 000 DH TTC, 70 000 DH de 300 000 à 700 000 DH TTC ; fonds de garantie **FOGARIM** et **FOGALOGE** gérés par **Tamwilcom**.
`,
exercices: md`
### Exercice 2 — Le coût d'un crédit automobile

M. Alaoui, enseignant à Fès, emprunte 60 000 DH à 9 % sur 48 mois pour acheter une voiture. Des frais de dossier de 900 DH sont prélevés au départ.

1. Calculez la mensualité et le coût total des intérêts.
2. Le TEG est-il supérieur ou inférieur à 9 % ? Pourquoi ?
3. M. Alaoui gagne 9 500 DH nets et n'a pas d'autre crédit. Calculez son taux d'endettement.

<details><summary>Voir le corrigé</summary>

1. $i = 0{,}0075$ ; $m = 60\,000 \times \frac{0{,}0075}{1 - 1{,}0075^{-48}} \approx$ **1 493,10 DH**. Total remboursé : $48 \times 1\,493{,}10 \approx 71\,669$ DH ; intérêts **11 669 DH** environ.
2. **Supérieur** : M. Alaoui ne dispose en réalité que de 59 100 DH (frais déduits) mais rembourse les mêmes mensualités ; le TEG intègre les frais de dossier.
3. $1\,493{,}10 / 9\,500 \approx$ **15,7 %** : très en dessous des plafonds usuels.

</details>

### Exercice 3 — Un premier logement avec l'aide directe

Un couple de Kénitra achète un premier logement de 280 000 DH TTC. Les frais d'acquisition s'élèvent à 20 000 DH, payés par le couple sur ses économies. Il gagne 6 500 DH nets par mois.

1. Quel montant d'aide directe peut-il recevoir ?
2. Calculez le montant à emprunter et la mensualité sur 20 ans à 5 %, avec et sans l'aide (sans l'aide, il emprunterait les 280 000 DH).
3. Calculez le taux d'endettement dans les deux cas.

<details><summary>Voir le corrigé</summary>

1. Prix inférieur à 300 000 DH TTC, premier logement : **100 000 DH**.
2. Avec l'aide : emprunt de $280\,000 - 100\,000 = $ **180 000 DH** ; $i = 0{,}05/12$, $n = 240$ ; mensualité ≈ **1 187,92 DH**. Sans l'aide : 280 000 DH, mensualité ≈ **1 847,88 DH**.
3. Avec l'aide : $1\,187{,}92 / 6\,500 \approx$ **18,3 %** ; sans l'aide : $1\,847{,}88 / 6\,500 \approx$ **28,4 %**. L'aide joue le rôle d'un apport et rend le dossier beaucoup plus sûr ; si les revenus du couple étaient irréguliers, la banque pourrait en plus demander la garantie du FOGARIM.

</details>
`,
qcm: [
{ q: "Pour calculer la mensualité d'un crédit au taux annuel de 6 %, on utilise un taux mensuel de :", choix: ["0,5 %", "6 %", "0,6 %", "72 %"], bonne: 0, explication: "6 % / 12." },
{ q: "Le taux effectif global (TEG) intègre :", choix: ["Les intérêts, les frais et les assurances obligatoires", "Les seuls intérêts", "Le seul taux directeur", "Les impôts du client"], bonne: 0, explication: "Il permet de comparer les offres." },
{ q: "Revenu net 10 000 DH, mensualités totales 3 500 DH : le taux d'endettement est de :", choix: ["35 %", "28,6 %", "3,5 %", "65 %"], bonne: 0, explication: "3 500 / 10 000." },
{ q: "Le reste à vivre est :", choix: ["Le revenu diminué de toutes les charges fixes", "Le capital restant dû", "L'apport personnel", "La durée restante du crédit"], bonne: 0, explication: "Il complète le taux d'endettement." },
{ q: "Allonger la durée d'un crédit immobilier :", choix: ["Baisse la mensualité et augmente le coût total des intérêts", "Baisse la mensualité et le coût total", "Augmente la mensualité", "Ne change rien"], bonne: 0, explication: "On paie des intérêts plus longtemps." },
{ q: "La garantie principale d'un crédit immobilier est en général :", choix: ["L'hypothèque de premier rang sur le bien", "Le nantissement du fonds de commerce", "Un aval sur une lettre de change", "Un dépôt à terme"], bonne: 0, explication: "Complétée par l'assurance décès-invalidité." },
{ q: "La loi marocaine qui protège l'emprunteur pour le crédit à la consommation et immobilier est la loi :", choix: ["31-08", "103-12", "21-18", "17-95"], bonne: 0, explication: "Loi édictant des mesures de protection du consommateur." },
{ q: "Pour un premier logement de 250 000 DH TTC, l'aide directe au logement s'élève à :", choix: ["100 000 DH", "70 000 DH", "50 000 DH", "250 000 DH"], bonne: 0, explication: "Prix inférieur ou égal à 300 000 DH TTC." },
{ q: "Le FOGARIM garantit des crédits immobiliers aux ménages :", choix: ["À revenus modestes ou irréguliers", "Non résidents uniquement", "Qui achètent un bureau", "Qui ont déjà deux logements"], bonne: 0, explication: "Il est géré par Tamwilcom." },
{ q: "Un taux d'intérêt supérieur au TMIC est :", choix: ["Usuraire", "Promotionnel", "Variable", "Obligatoire"], bonne: 0, explication: "Le taux maximum des intérêts conventionnels plafonne les taux." },
],
},
4: {
titre: "Les garanties du crédit",
description: "Garanties du crédit bancaire : caution, aval, hypothèque, nantissements, loi 21-18 sur les sûretés mobilières, Tamwilcom, décote et taux de couverture.",
resume: md`
## L'essentiel — Les garanties du crédit

- La garantie est la **seconde issue** : elle réduit la perte, incite à rembourser et réduit provisions et fonds propres.
- On prête sur une capacité de remboursement **avec** une garantie, jamais **sur** une garantie.
- **Sûretés personnelles** : caution simple, caution **solidaire**, aval, garantie autonome à première demande, lettre d'intention ; valeur = patrimoine libre du garant.
- **Sûretés réelles** : hypothèque (titre foncier), nantissement du fonds de commerce, du matériel, gage sur stocks, nantissement de titres et de comptes, cession de créances, gage sur véhicule ; le **rang** compte.
- **Loi 21-18** (2019) : sûretés mobilières sans dépossession facilitées, registre national électronique des sûretés mobilières.
- **Tamwilcom** (ex-CCG, loi 36-20) : garantit une partie des crédits aux TPE-PME et au logement, contre commission.
- Valeur retenue $=$ valeur d'expertise $\times (1 - \text{décote})$ : vente forcée, délai, frais, dépréciation, créanciers prioritaires.
- Taux de couverture $= \sum$ valeurs retenues / encours ; partie non couverte → LGD.
- Bonne garantie : adaptée à l'objet, proportionnée, réalisable, suivie.
`,
exercices: md`
### Exercice 2 — Choisir la garantie

Associez à chaque crédit la garantie la plus adaptée et justifiez :

1. un crédit de campagne à une coopérative oléicole de Meknès ;
2. un crédit d'équipement pour un tracteur ;
3. un prêt immobilier à un fonctionnaire ;
4. un préfinancement d'un marché public de construction d'une école ;
5. un crédit à une filiale d'un groupe industriel solide.

<details><summary>Voir le corrigé</summary>

1. **Gage sur les stocks** d'huile (éventuellement warrant) : le crédit finance la récolte, qui est vendue ensuite.
2. **Nantissement du matériel** (ou gage sur le tracteur) : le bien financé garantit son propre crédit.
3. **Hypothèque de premier rang** sur le logement + assurance décès-invalidité.
4. **Nantissement du marché** (cession ou nantissement de la créance sur l'administration) : la banque est payée directement par le maître d'ouvrage.
5. **Caution solidaire** ou garantie à première demande de la **société mère**, voire lettre d'intention bien rédigée.

</details>

### Exercice 3 — Couverture et décote

Une banque prête 2 400 000 DH à une PME de Fès. Garanties : hypothèque de deuxième rang sur un local évalué à 2 000 000 DH, grevé d'une hypothèque de premier rang de 900 000 DH au profit d'une autre banque ; nantissement d'un dépôt à terme de 300 000 DH ouvert dans la banque.

1. Quelle valeur retenir pour l'hypothèque, avec une décote de 30 % sur le prix de vente forcée ?
2. Quelle valeur retenir pour le dépôt à terme ?
3. Calculez le taux de couverture et la partie non couverte.

<details><summary>Voir le corrigé</summary>

1. Prix de réalisation : $2\,000\,000 \times 0{,}7 = 1\,400\,000$ DH ; l'autre banque est payée d'abord (900 000 DH) : valeur retenue **500 000 DH**.
2. Le dépôt est disponible dans la banque, sans risque de dépréciation : **300 000 DH** (pas de décote).
3. Couverture : $800\,000 / 2\,400\,000 \approx$ **33,3 %** ; partie non couverte : **1 600 000 DH**. Le crédit repose surtout sur la capacité de remboursement.

</details>
`,
qcm: [
{ q: "La garantie est appelée la seconde issue du crédit parce que :", choix: ["La première issue est le remboursement par l'activité", "Elle est payée en deuxième", "Elle est toujours de deuxième rang", "Elle n'intervient qu'après deux ans"], bonne: 0, explication: "On ne prête pas sur une garantie." },
{ q: "Avec une caution solidaire, la banque :", choix: ["Peut poursuivre directement la caution", "Doit d'abord vendre les biens du débiteur", "Ne peut jamais poursuivre la caution", "Devient propriétaire de l'entreprise"], bonne: 0, explication: "C'est la forme usuelle en pratique bancaire." },
{ q: "Une caution donnée sur une lettre de change s'appelle :", choix: ["Un aval", "Un warrant", "Un nantissement", "Une hypothèque"], bonne: 0, explication: "Elle relève du droit cambiaire." },
{ q: "L'hypothèque porte sur :", choix: ["Un immeuble", "Un fonds de commerce", "Des marchandises", "Un compte à terme"], bonne: 0, explication: "Inscrite à la conservation foncière." },
{ q: "La loi 21-18 concerne :", choix: ["Les sûretés mobilières", "Le crédit immobilier", "La protection des données", "Les délais de paiement"], bonne: 0, explication: "Elle crée un registre national électronique des sûretés mobilières." },
{ q: "Tamwilcom est :", choix: ["L'ex-Caisse centrale de garantie", "Une banque commerciale privée", "La bourse de Casablanca", "Un service de Bank Al-Maghrib"], bonne: 0, explication: "Transformée en société anonyme par la loi 36-20." },
{ q: "Valeur d'expertise 1 000 000 DH, décote 35 % : la valeur retenue est :", choix: ["650 000 DH", "350 000 DH", "1 350 000 DH", "1 000 000 DH"], bonne: 0, explication: "1 000 000 × 0,65." },
{ q: "Garanties retenues 1 800 000 DH pour un encours de 3 000 000 DH : le taux de couverture est :", choix: ["60 %", "40 %", "167 %", "180 %"], bonne: 0, explication: "1,8 / 3." },
{ q: "Le fonds de commerce subit en général une forte décote parce que :", choix: ["Sa clientèle disparaît souvent avec le défaut", "Il est toujours de premier rang", "Il est garanti par l'État", "Il ne peut pas être vendu"], bonne: 0, explication: "Sa valeur repose sur l'activité." },
{ q: "Compter les mêmes machines dans le nantissement du fonds de commerce et dans un nantissement séparé du matériel conduit à :", choix: ["Un double comptage", "Une décote nulle", "Une garantie à première demande", "Une baisse de l'encours"], bonne: 0, explication: "Un même bien ne garantit qu'une fois." },
],
},
5: {
titre: "La mesure et la tarification du risque de crédit",
description: "Scoring, notation interne, PD, LGD, EAD et facteur de conversion, perte attendue et inattendue, fonds propres, taux minimal d'un crédit et RAROC.",
resume: md`
## L'essentiel — Mesurer et tarifer le risque de crédit

- **Scoring** : note statistique (régression logistique) estimée sur l'historique ; grille de points et seuils de décision.
- **Notation interne** des entreprises : classes (A à E…) associées à une **PD** à un an ; sert à décider, tarifer, déléguer, surveiller.
- Perte attendue : $EL = PD \times LGD \times EAD$ ; coût du risque $= PD \times LGD$.
- Ligne de crédit : $EAD = \text{utilisé} + CCF \times (\text{autorisé} - \text{utilisé})$.
- LGD : dépend des garanties, de leur décote, du rang et du recouvrement.
- Perte attendue → prix et provisions ; **perte inattendue** → fonds propres ; la concentration l'aggrave, la diversification la réduit.
- Fonds propres alloués $\approx 12 \% \times$ pondération $\times$ montant (ratio de solvabilité minimal de BAM : 12 %).
- Taux minimal : $t_{\min} = t_{\text{ressource}} + PD \times LGD + \text{frais} + k(r_{FP} - t_{\text{ressource}})$.
- $RAROC = \frac{\text{intérêts} - \text{refinancement de } (C - FP) - \text{frais} - EL}{FP}$ ; créateur de valeur si RAROC > rentabilité exigée.
- Tarification au risque : un taux unique attire les clients les plus risqués.
`,
exercices: md`
### Exercice 2 — Appliquer une grille de score

Avec la grille du cours (seuils : 70 points et plus, accord ; 50 à 69, étude ; moins de 50, refus), notez les deux demandes suivantes :

1. Mme Tazi, fonctionnaire depuis 4 ans, taux d'endettement après crédit de 33 %, aucun incident, apport de 10 %.
2. M. Bennani, commerçant indépendant depuis 8 ans, taux d'endettement après crédit de 28 %, un incident de paiement il y a deux ans, apport de 25 %.

<details><summary>Voir le corrigé</summary>

1. Ancienneté 10 + endettement 15 + incidents 25 + statut 20 + apport 0 = **70 points** : accord automatique.
2. Ancienneté 20 + endettement 25 + incidents 0 + statut 5 + apport 10 = **60 points** : **étude** par un analyste, qui examinera la cause de l'incident et la régularité des revenus.

</details>

### Exercice 3 — Perte attendue d'un portefeuille

Une agence porte trois engagements :

| Crédit | Montant | PD | LGD |
|---|---|---|---|
| A : prêt amortissable (capital restant dû) | 10 000 000 DH | 0,5 % | 30 % |
| B : prêt amortissable | 4 000 000 DH | 3 % | 50 % |
| C : découvert autorisé de 2 000 000 DH, utilisé à 1 000 000 DH (CCF 75 %) | — | 8 % | 60 % |

1. Calculez l'EAD et la perte attendue de chaque crédit.
2. Calculez la perte attendue totale et le coût du risque moyen du portefeuille.

<details><summary>Voir le corrigé</summary>

1. A : $EAD = 10\,000\,000$, $EL = 0{,}005 \times 0{,}3 \times 10\,000\,000 = $ **15 000 DH**. B : $EL = 0{,}03 \times 0{,}5 \times 4\,000\,000 = $ **60 000 DH**. C : $EAD = 1\,000\,000 + 0{,}75 \times 1\,000\,000 = 1\,750\,000$ DH ; $EL = 0{,}08 \times 0{,}6 \times 1\,750\,000 = $ **84 000 DH**.
2. Total : **159 000 DH** pour une EAD de 15 750 000 DH, soit un coût du risque moyen d'environ **1,01 %**. Le plus petit engagement (C) porte plus de la moitié de la perte attendue.

</details>
`,
qcm: [
{ q: "Un score de crédit est construit à partir :", choix: ["De l'historique de crédits dont on connaît le remboursement", "Des seules garanties", "Du taux directeur", "Des souhaits du client"], bonne: 0, explication: "C'est un classement supervisé." },
{ q: "La perte attendue d'un crédit est égale à :", choix: ["PD × LGD × EAD", "PD + LGD + EAD", "EAD / PD", "LGD × taux d'intérêt"], bonne: 0, explication: "Elle se couvre par le prix et les provisions." },
{ q: "PD 2 %, LGD 50 %, EAD 1 000 000 DH : la perte attendue est de :", choix: ["10 000 DH", "20 000 DH", "500 000 DH", "1 000 DH"], bonne: 0, explication: "0,02 × 0,5 × 1 000 000." },
{ q: "Autorisation 4 000 000 DH, utilisation 1 000 000 DH, CCF 50 % : l'EAD vaut :", choix: ["2 500 000 DH", "1 000 000 DH", "4 000 000 DH", "1 500 000 DH"], bonne: 0, explication: "1 000 000 + 0,5 × 3 000 000." },
{ q: "La perte inattendue est couverte par :", choix: ["Les fonds propres", "Le taux d'intérêt seul", "Les dépôts de la clientèle", "Le coût de la ressource"], bonne: 0, explication: "C'est la logique des accords de Bâle." },
{ q: "Le coût du risque d'un crédit de PD 1 % et de LGD 40 % est de :", choix: ["0,4 %", "1 %", "40 %", "1,4 %"], bonne: 0, explication: "PD × LGD." },
{ q: "Avec une pondération de 100 % et un ratio exigé de 12 %, un crédit de 2 000 000 DH mobilise des fonds propres de :", choix: ["240 000 DH", "120 000 DH", "2 000 000 DH", "24 000 DH"], bonne: 0, explication: "12 % × 2 000 000." },
{ q: "Un crédit dont le RAROC est inférieur à la rentabilité exigée des fonds propres :", choix: ["Détruit de la valeur pour les actionnaires", "Est sans risque", "Doit être provisionné à 100 %", "A une PD nulle"], bonne: 0, explication: "Sauf autres revenus de la relation." },
{ q: "La diversification d'un portefeuille de crédits réduit surtout :", choix: ["La perte inattendue", "La perte attendue de chaque crédit", "Le coût de la ressource", "Les frais de dossier"], bonne: 0, explication: "Les défauts ne surviennent pas tous en même temps." },
{ q: "Appliquer le même taux à tous les emprunteurs risque de :", choix: ["Attirer les emprunteurs les plus risqués", "Supprimer le risque de crédit", "Réduire la PD de tous", "Augmenter les garanties"], bonne: 0, explication: "C'est la sélection adverse." },
],
},
6: {
titre: "Le suivi, le classement et le recouvrement des créances",
description: "Créances en souffrance selon la circulaire 19/G/2002 de BAM : pré-douteuses, douteuses, compromises, agios réservés, provisions, quotités, IFRS 9, recouvrement.",
resume: md`
## L'essentiel — Suivi, classement et recouvrement

- Signaux d'alerte : découvert gelé, dépassements, baisse des mouvements, impayés, retard des états de synthèse, crise du secteur → mise sous surveillance.
- **Circulaire 19/G/2002** : créances **pré-douteuses** (impayé de 90 jours), **douteuses** (180 jours ; redressement judiciaire), **compromises** (360 jours ; liquidation, action en justice, déchéance du terme).
- Comptes à vue : absence de mouvements créditeurs couvrant les agios et une partie du solde pendant 180 jours (douteuse) ou 360 jours (compromise).
- 9 mensualités impayées → compromise ; crédit restructuré impayé 180 jours → compromise.
- **Contagion** à toutes les créances sur la contrepartie, sauf pour les particuliers ; classement **indépendant des garanties**.
- **Agios réservés** : intérêts des créances en souffrance comptés en produits seulement à l'encaissement.
- Provisions minimales : **20 %**, **50 %**, **100 %** de la base $=$ encours − agios réservés − garanties × quotités.
- Quotités : **100 %** (État, Tamwilcom homologuée, dépôts, titres d'État), **80 %** (banques de premier ordre, assurance-crédit), **50 %** (hypothèques) ; hypothèque ramenée à 25 % après 5 ans et 0 % après 10 ans ; caution ordinaire non déductible.
- **Circulaire 1/W/2025** (en vigueur le 1er janvier 2027) : créances saines, **sensibles**, en souffrance ; **IFRS 9** : étapes 1 (pertes sur 12 mois), 2 et 3 (pertes sur la durée de vie).
- Recouvrement : amiable (relances, rééchelonnement, restructuration) puis contentieux (injonction de payer, saisies, réalisation des garanties, déclaration de créance, loi 73-17).
`,
exercices: md`
### Exercice 2 — L'effet du temps sur une hypothèque

Une créance compromise de 1 000 000 DH (sans agios réservés) est garantie par une hypothèque sur un immeuble de 800 000 DH.

1. Calculez la provision l'année du classement.
2. Calculez-la au bout de 5 ans, puis de 10 ans, si l'hypothèque n'a pas été réalisée.
3. Quelle leçon pour la gestion du contentieux ?

<details><summary>Voir le corrigé</summary>

1. Quotité 50 % : base $1\,000\,000 - 400\,000 = 600\,000$ ; provision à 100 % : **600 000 DH**.
2. Après 5 ans, quotité 25 % : base $1\,000\,000 - 200\,000 = 800\,000$ ; provision **800 000 DH**. Après 10 ans, quotité 0 % : provision **1 000 000 DH**.
3. Une garantie non réalisée perd sa valeur réglementaire : la banque doit réaliser rapidement ses garanties ou négocier une solution, sans quoi ses provisions augmentent chaque année.

</details>

### Exercice 3 — Les étapes d'IFRS 9

Un groupe bancaire coté a accordé trois crédits de 1 000 000 DH chacun (LGD 40 %) :

- X : aucune dégradation depuis l'octroi ; PD à 12 mois 1 % ;
- Y : retard de 45 jours et baisse de notation ; PD sur la durée de vie 8 % ;
- Z : en défaut ; perte attendue estimée à partir d'une PD de 100 %.

1. Classez chaque crédit dans une étape.
2. Calculez la provision IFRS 9 de chacun.

<details><summary>Voir le corrigé</summary>

1. X : **étape 1** ; Y : **étape 2** (dégradation significative, retard de plus de 30 jours) ; Z : **étape 3** (défaut).
2. X : $1 \% \times 40 \% \times 1\,000\,000 = $ **4 000 DH** (pertes sur 12 mois) ; Y : $8 \% \times 40 \% \times 1\,000\,000 = $ **32 000 DH** (pertes sur la durée de vie) ; Z : $100 \% \times 40 \% \times 1\,000\,000 = $ **400 000 DH**. Le passage de l'étape 1 à l'étape 2 multiplie ici la provision par 8, avant tout défaut.

</details>
`,
qcm: [
{ q: "Selon la circulaire 19/G/2002, un crédit amortissable dont une échéance est impayée depuis 100 jours est :", choix: ["Pré-douteux", "Douteux", "Compromis", "Sain"], bonne: 0, explication: "Seuil de 90 jours ; douteux à 180 jours." },
{ q: "Une créance sur une entreprise en liquidation judiciaire est classée :", choix: ["Compromise", "Pré-douteuse", "Douteuse", "Saine si elle est garantie"], bonne: 0, explication: "La liquidation rend le recouvrement peu probable." },
{ q: "Un crédit à remboursements mensuels est classé compromis dès qu'il cumule :", choix: ["9 échéances impayées", "3 échéances impayées", "6 échéances impayées", "12 échéances impayées"], bonne: 0, explication: "Règle propre aux crédits mensuels." },
{ q: "La règle de contagion ne s'applique pas :", choix: ["Aux particuliers", "Aux sociétés anonymes", "Aux SARL", "Aux entreprises publiques"], bonne: 0, explication: "Pour une entreprise, toutes ses créances sont reclassées." },
{ q: "Les intérêts décomptés sur une créance en souffrance sont inscrits :", choix: ["En agios réservés", "En produits de l'exercice", "En capitaux propres", "En dépôts de la clientèle"], bonne: 0, explication: "Ils ne deviennent des produits qu'à l'encaissement." },
{ q: "Les taux minimaux de provision des créances pré-douteuses, douteuses et compromises sont :", choix: ["20 %, 50 % et 100 %", "10 %, 20 % et 50 %", "25 %, 50 % et 75 %", "50 %, 75 % et 100 %"], bonne: 0, explication: "Appliqués à la base nette des agios réservés et des garanties." },
{ q: "Pour le calcul des provisions, une hypothèque est retenue à une quotité de :", choix: ["50 %", "100 %", "80 %", "0 %"], bonne: 0, explication: "Ramenée à 25 % après 5 ans et à 0 % après 10 ans." },
{ q: "Créance douteuse de 600 000 DH, agios réservés 20 000 DH, sans garantie admise : la provision minimale est de :", choix: ["290 000 DH", "300 000 DH", "580 000 DH", "116 000 DH"], bonne: 0, explication: "(600 000 − 20 000) × 50 %." },
{ q: "La catégorie des créances sensibles est introduite par :", choix: ["La circulaire 1/W/2025", "La circulaire 19/G/2002", "La loi 31-08", "La loi 21-18"], bonne: 0, explication: "En vigueur à partir du 1er janvier 2027." },
{ q: "Selon IFRS 9, une créance saine dont le risque n'a pas augmenté depuis l'octroi est provisionnée sur la base des pertes attendues :", choix: ["À 12 mois", "Sur toute la durée de vie", "À 100 %", "Nulles"], bonne: 0, explication: "C'est l'étape 1." },
],
},
};

export default chapitres;
