> Corrigé indicatif rédigé par SaadConcours, pas une correction officielle de la FSJES Oujda. La consigne demande de **répondre en bref** : le jury attend une réponse structurée et technique (1 à 2 copies doubles), pas une dissertation. Les éléments de contexte marocain sont à actualiser avant le concours.

## Structure conseillée

1. Introduction courte (définitions, problématique).
2. Fonctionnement de Bitcoin.
3. Fonctionnement de Monero.
4. Comparaison sur le plan de la cybersécurité (tableau).
5. Conclusion (arbitrage transparence / confidentialité, enjeux de régulation).

## Introduction

- **Crypto-monnaie** : actif numérique émis et échangé sans autorité centrale, dont les transactions sont validées par un réseau pair-à-pair et enregistrées dans un registre distribué et infalsifiable, la **blockchain**.
- **Cybersécurité** : capacité d'un système à garantir la **confidentialité**, l'**intégrité** et la **disponibilité** des données et des transactions, et à résister aux attaques.
- **Problématique** : les deux monnaies reposent sur la même technologie de base, mais font des choix opposés — Bitcoin privilégie la **transparence** du registre, Monero la **confidentialité** des transactions. Lequel de ces choix offre la meilleure sécurité, et pour qui ?

## I. Le fonctionnement de Bitcoin

- **Origine** : livre blanc publié en 2008 sous le pseudonyme de Satoshi Nakamoto, réseau lancé en janvier 2009.
- **Blockchain publique** : chaque bloc contient un lot de transactions et l'empreinte (hash SHA-256) du bloc précédent ; modifier un bloc passé obligerait à recalculer toute la chaîne qui suit.
- **Cryptographie asymétrique** : chaque utilisateur détient une **clé privée** (qui signe les transactions) et une **clé publique** dont est dérivée son **adresse**. Qui possède la clé privée possède les bitcoins.
- **Consensus par preuve de travail (Proof of Work)** : les **mineurs** mettent en concurrence leur puissance de calcul pour trouver un hash valide ; le gagnant ajoute le bloc (environ toutes les 10 minutes) et reçoit une récompense en bitcoins nouvellement créés, plus les frais de transaction.
- **Offre plafonnée** à 21 millions d'unités, récompense divisée par deux environ tous les quatre ans (*halving*).
- **Transparence totale** : montants, adresses émettrices et destinataires sont publics et consultables par tous. Bitcoin est donc **pseudonyme**, pas anonyme : une adresse reliée à une identité (par une plateforme d'échange soumise au KYC, par exemple) permet de retracer tout l'historique.

## II. Le fonctionnement de Monero

- **Origine** : lancé en 2014, fondé sur le protocole **CryptoNote** ; objectif affiché : une monnaie **confidentielle par défaut** et **fongible** (chaque unité est interchangeable, aucune n'est « marquée » par son historique).
- Même principe de **blockchain** et de **preuve de travail**, avec l'algorithme **RandomX** (depuis 2019), conçu pour être miné efficacement sur des processeurs ordinaires et limiter la domination des machines spécialisées (ASIC).
- Trois mécanismes de confidentialité :
  1. **Signatures de cercle (ring signatures)** : la signature de l'expéditeur est mélangée à celles d'autres utilisateurs ; on ne peut pas savoir lequel a réellement dépensé les fonds → **l'émetteur est masqué**.
  2. **Adresses furtives (stealth addresses)** : une adresse à usage unique est générée pour chaque paiement → **le destinataire est masqué**.
  3. **RingCT (Ring Confidential Transactions)** : les montants sont chiffrés tout en restant vérifiables → **le montant est masqué**.
- Des **clés de consultation (view keys)** permettent à l'utilisateur de montrer volontairement ses transactions (à un auditeur, à l'administration fiscale).

## III. Comparaison au niveau de la cybersécurité

| Critère | Bitcoin | Monero |
|---|---|---|
| Intégrité du registre | Très forte : réseau le plus puissant au monde, attaque des 51 % extrêmement coûteuse | Forte, mais réseau beaucoup plus petit, donc attaque des 51 % théoriquement moins coûteuse |
| Confidentialité des utilisateurs | Faible : historique public, traçable par l'analyse de la blockchain | Très forte : émetteur, destinataire et montant masqués par défaut |
| Traçabilité en cas de vol ou de fraude | Élevée : les fonds volés peuvent être suivis et parfois gelés par les plateformes | Quasi nulle : les fonds deviennent intraçables |
| Auditabilité de l'offre de monnaie | Directe : chacun peut vérifier le nombre d'unités en circulation | Indirecte (preuves cryptographiques) : une faille pourrait permettre une création de monnaie invisible |
| Usages malveillants | Rançongiciels (historiquement), mais de moins en moins en raison de la traçabilité | Monnaie privilégiée des rançongiciels, du *cryptojacking* (minage clandestin sur des machines piratées) et des places de marché illicites |
| Maturité du code | Code audité depuis 2009, évolutions prudentes | Protocole plus complexe, donc surface d'attaque cryptographique plus large |
| Position des régulateurs | Toléré et encadré dans de nombreux pays | Retiré de plusieurs plateformes d'échange, sous pression réglementaire (lutte anti-blanchiment) |

**Risques communs aux deux** : perte ou vol de la **clé privée** (irréversible), piratage des **plateformes d'échange** (faillite de Mt. Gox en 2014), hameçonnage, portefeuilles malveillants, erreurs irréversibles d'adresse.

**Lecture critique** : la cybersécurité n'a pas le même sens pour tous les acteurs.
- Du point de vue de l'**utilisateur** soucieux de sa vie privée, Monero est plus sûr (pas d'exposition de son patrimoine ni de ses paiements).
- Du point de vue du **système et du régulateur**, Bitcoin est plus sûr (réseau plus robuste, fraude traçable, offre vérifiable).

## Conclusion

- Bitcoin et Monero partagent la blockchain et la preuve de travail, mais s'opposent sur l'arbitrage **transparence / confidentialité**.
- Bitcoin offre une sécurité **systémique** supérieure ; Monero une sécurité **individuelle** (vie privée) supérieure, au prix d'une traçabilité quasi nulle qui en fait un outil prisé de la cybercriminalité.
- **Ouverture (Maroc)** : l'Office des Changes a rappelé dès novembre 2017 que les transactions en monnaies virtuelles constituent une infraction à la réglementation des changes, et Bank Al-Maghrib travaille depuis à un cadre légal des crypto-actifs. Pour un étudiant IAEG, l'enjeu est la conciliation entre innovation (blockchain, monnaie numérique de banque centrale) et exigences de sécurité et de lutte contre le blanchiment.
