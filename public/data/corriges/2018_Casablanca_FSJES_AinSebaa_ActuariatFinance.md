> Corrigé rédigé à partir du programme standard des modules (mathématiques financières, analyse, statistique, probabilités, échantillonnage, recherche opérationnelle) et d'un calcul vérifié — aucune grille de correction officielle disponible pour ce sujet.

**Q1. D** — Escompte = $14000\times0{,}12\times90/360=420$ ; valeur nette = $14000-420=\mathbf{13580}$ Dh.

**Q2. C** — $PV=14025{,}52/1{,}07^5=14025{,}52/1{,}402552=\mathbf{10\,000}$ Dh.

**Q3. A** — $(1+i)^3=2977{,}54/2500=1{,}191016\Rightarrow i=1{,}191016^{1/3}-1=\mathbf{6\%}$ (on vérifie $1{,}06^3=1{,}191016$).

**Q4. B** — Intérêt simple : $5500=11000\times0{,}10\times n \Rightarrow n=\mathbf{5}$ ans.

**Q5. C** — $FV=C(1+i\times n)$, $n=4/12$ : $7572{,}67=C\times(1+0{,}07/3)=C\times1{,}023333 \Rightarrow C\approx\mathbf{7400}$ Dh.

**Q6. D** — Avec $t=\sqrt{x-1}$, $x=t^2+1$, $dx=2t\,dt$ ; bornes $t:0\to1$. $\int(t^2+1)t\cdot2t\,dt=\int(2t^4+2t^2)dt=\left[\frac{2t^5}{5}+\frac{2t^3}{3}\right]_0^1=\frac25+\frac23=\mathbf{\frac{16}{15}}$.

**Q7. A** — Développement limité : $e^{2\pm x}\approx e^2(1\pm x)$, donc le numérateur $\approx e^2\times2x$, d'où $f(x)\to\mathbf{2e^2}$.

**Q8. E (toutes les propositions sont fausses)** — La fonction est continue en 0 (les deux branches valent 4), donc B est fausse ; les dérivées à gauche (2) et à droite (0) diffèrent, donc elle n'est pas dérivable en 0 (C fausse) ; elle décroît pour $x>0$, donc n'est pas croissante sur $\mathbb R$ (A fausse) ; elle est négative pour $x$ très négatif, donc n'est pas positive sur $\mathbb R$ (D fausse) — d'où la case E prévue par la consigne.

**Q9. C** —Quand $f(x)-(2x+1)\to0$ au voisinage de l'infini, la droite $y=2x+1$ est une **asymptote oblique** à $C_f$.

**Q10. B** — $\partial f/\partial x = 2xy+3y^2$ ; $\partial^2f/\partial y\partial x = 2x+6y$. En $(1,-1)$ : $2(1)+6(-1)=\mathbf{-4}$.

**Q11.** Calcul : $\bar X=(-6-4+0+5+10)/5=\mathbf{1}$. Aucune des 4 propositions imprimées (4, 5, 6, 7) ne correspond exactement à ce résultat — probable coquille dans le document d'origine. Les questions suivantes (Q12 à Q16), en revanche, sont toutes cohérentes avec $\bar X=1$ et les valeurs de X données (-6, -4, 0, 5, 10), ce qui confirme ces valeurs.

**Q12. B** — $E[X^2]=(36+16+0+25+100)/5=35{,}4$ ; $Var(X)=35{,}4-1^2=\mathbf{34{,}4}$.

**Q13. D** — $\bar Y=(40+36+34+23+16)/5=29{,}8$. $E[XY]=(-240-144+0+115+160)/5=-21{,}8$. $Cov(X,Y)=-21{,}8-(1\times29{,}8)=\mathbf{-51{,}6}$.

**Q14. C** — Pente $b=Cov(X,Y)/Var(X)=-51{,}6/34{,}4=-1{,}5$ ; ordonnée $a=\bar Y-b\bar X=29{,}8+1{,}5=31{,}3$. Droite : $Y=\mathbf{-1{,}5X+31{,}3}$.

**Q15. B** — $Var(Y)=E[Y^2]-\bar Y^2=967{,}4-888{,}04=79{,}36$ ; $r=Cov/(\sigma_X\sigma_Y)=-51{,}6/(5{,}865\times8{,}909)\approx\mathbf{-0{,}987}$.

**Q16. B** — $R^2=r^2=(-0{,}987)^2\approx\mathbf{0{,}975}$.

**Q17. D** — La formule additive simple $P(A\cup B)=P(A)+P(B)$ (sans le terme $-P(A\cap B)$) suppose implicitement $P(A\cap B)=0$, donc des événements incompatibles ; mais parmi les options listées la lecture usuelle de cette identité pour des événements disjoints correspond à **incompatibles** — à noter que l'énoncé propose aussi « indépendants », qui n'est valable que si en plus $P(A\cap B)=P(A)P(B)=0$, cas particulier des incompatibles.

**Q18. A** — Loi de Poisson de paramètre $\lambda=3$ : $P(X=k)=e^{-3}\dfrac{3^k}{k!}$, définie pour tout $k\in\mathbb N$ (option A).

**Q19. C** — Le théorème central limite justifie l'approximation par la loi **Normale**.

**Q20. A** — $Var(X)=np(1-p)=30\times0{,}1\times0{,}9=\mathbf{2{,}7}$.

**Q21. A** — $P(X<4\mid X>2)=\dfrac{P(\{X<4\}\cap\{X>2\})}{P(X>2)}=\dfrac{P(X=3)}{P(X>2)}$ (X entier, la seule valeur vérifiant à la fois $X>2$ et $X<4$ est $X=3$).

**Q22. B** — $\hat p = 180/240=\mathbf{0{,}75}$.

**Q23. B** — $IC=\hat p\pm z\sqrt{\hat p(1-\hat p)/n}=0{,}75\pm2{,}58\sqrt{0{,}75\times0{,}25/240}=0{,}75\pm2{,}58\times0{,}0279\approx0{,}75\pm0{,}072\Rightarrow[\mathbf{0{,}67\ ;\ 0{,}84}]$.

**Q24. C** — La distribution d'échantillonnage de la moyenne empirique est **la loi de $\bar X$** (l'ensemble des valeurs possibles de $\bar X$ et leurs probabilités selon l'échantillon tiré).

**Q25. B** — Plus le niveau de confiance exigé est grand, plus l'intervalle doit être **large** pour garantir cette confiance.

**Q26. A** — Fonction objectif : $\text{Max } Z=3x_1+4x_2+12x_3$ (marges unitaires données : 3, 4 et 12 Dh).

**Q27.** D'après l'énoncé, la contrainte de temps de travail est $1\cdot x_1+2\cdot x_2+3\cdot x_3\le300$ (1h, 2h, 3h de travail par unité de $P_1,P_2,P_3$, capacité 300h/jour). Par les coefficients, cela correspond à l'option **C**, mais le sens de l'inégalité tel qu'imprimé dans le document source ($\ge$ au lieu de $\le$) semble inversé par rapport à une contrainte de capacité maximale — probable coquille de transcription du document d'origine, signalée ici plutôt que corrigée silencieusement.

**Q28. B** — Lecture directe du tableau simplexe optimal (valeurs de la colonne « sm » pour les variables de base) : $Z=1120$, avec $x_1=40$, $x_2=10$, $x_3=80$.

**Q29. D** — Par le théorème de dualité forte, $W^*=Z^*=1120$. Les valeurs optimales des variables duales se lisent (en valeur absolue) dans la ligne $-Z$ sous les colonnes des écarts $e_1,e_2,e_3$ : $y_1=2$, $y_2=1$, $y_3=6$ — soit l'option **D** ($W=1120,\ y_1=2,\ y_2=1,\ y_3=6$).

**Q30.** Par le théorème des écarts complémentaires, augmenter d'une unité la capacité d'une contrainte saturée augmente l'optimum du montant de son prix dual (shadow price). Sans le tableau initial du problème, la correspondance exacte entre chaque écart $e_i$ et la contrainte "temps de travail" ne peut pas être établie avec certitude à partir du seul tableau optimal fourni ; en prenant le prix dual associé (1 ou 6 selon la contrainte réellement visée), le nouvel optimum se situe entre 1121 et 1126, ce qui rend l'option **B (1224)** peu probable et rapproche plutôt la réponse de **D (1122)** — donnée ici avec réserve, faute de pouvoir vérifier la structure exacte du problème initial.
