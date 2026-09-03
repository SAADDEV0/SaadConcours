> Corrigé avec calculs détaillés.

**Question préliminaire — Intérêt de l'actuariat pour l'entreprise**

L'actuariat permet de quantifier et de tarifer les risques (assurance, retraite, prévoyance), d'assurer la solvabilité financière de l'entreprise face à des engagements futurs incertains, et d'éclairer les décisions de gestion des risques (provisionnement, réassurance).

**Exercice 1**

a) Statistiques : Min=3000, Max=15000, moyenne X̄=8000, écart-type S=1000, Mode=8000, Médiane=8000. Interprétation : la population des salaires est centrée autour de 8000 DH (moyenne=mode=médiane), avec un étalement modéré (écart-type=1000, soit 12,5% de la moyenne) mais une étendue très large (Min=3000 à Max=15000), suggérant la présence de valeurs extrêmes peu fréquentes.

b) Symétrie : puisque moyenne = mode = médiane = 8000, la distribution est (approximativement) **symétrique**.

**Exercice 2**

Données : n=8, ΣXᵢ=27,5 ; ΣXᵢ²=97,38.

1) Un estimateur T de μ est sans biais si E(T)=μ ; il est convergent si sa variance tend vers 0 quand n→∞ (convergence en probabilité vers μ).

2) Estimation ponctuelle : X̄ = ΣXᵢ/n = 27,5/8 = **3,4375 kg**. Interprétation : le poids moyen estimé à la naissance dans l'échantillon est d'environ 3,44 kg.

3) X̄ suit une loi Normale N(μ, σ²/n) (la population est normale par hypothèse) — ou, σ² étant inconnue et estimée, une loi de Student à n-1=7 degrés de liberté pour la statistique standardisée (X̄-μ)/(S/√n).

4) Variance empirique corrigée : S² = [ΣXᵢ² - n×X̄²]/(n-1) = [97,38 - 8×(3,4375)²]/7 = [97,38 - 94,53]/7 ≈ 2,85/7 ≈ 0,4071 ; S ≈ 0,638. Intervalle de confiance à 99% : X̄ ± t₍₇₎₍₀,₉₉₅₎ × S/√n = 3,4375 ± 3,499×0,638/√8 ≈ 3,4375 ± 3,499×0,2256 ≈ 3,4375 ± 0,789. **IC à 99% ≈ [2,65 ; 4,23] kg.**
