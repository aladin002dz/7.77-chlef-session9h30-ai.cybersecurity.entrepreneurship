import type { Dictionary } from "@/lib/types";

export const fr: Dictionary = {
  lang: "fr",
  dir: "ltr",
  meta: {
    title: "IA, Cybersécurité & Expérience Métier",
    description:
      "Travailler plus vite, protéger sa famille, monétiser son savoir — Session 09:30, Programme 7.77, Skills Center Mobilis Chlef.",
  },
  ui: {
    counter: "{current} / {total}",
    prevAria: "Diapositive précédente",
    nextAria: "Diapositive suivante",
    swipeHint: "Glissez pour naviguer",
    keyboardHint: "Utilisez ← → pour naviguer",
    fullscreenAria: "Plein écran",
    exitFullscreenAria: "Quitter le plein écran",
    langLabel: "Langue",
    footer: "Programme 7.77 · Skills Center Mobilis Chlef",
    startLabel: "Diapositive",
  },
  slides: [
    {
      title: "IA, Cybersécurité & Expérience Métier",
      subtitle: "Travailler plus vite, protéger sa famille, monétiser son savoir",
      body: "**Intervenant :** Mahfoudh Arous — Skills Center Mobilis Chlef · Programme 7.77",
    },
    {
      title: "La Question du Matin",
      body: `*Quelle tâche administrative vous prend 2 heures chaque semaine et vous épuise ?*

- Rédaction de comptes-rendus interminables
- Courriers de relance et correspondances hiérarchiques
- Synthèse de documents réglementaires ou cahiers des charges

**Le constat :** votre temps à haute valeur ajoutée est absorbé par la friction bureaucratique.`,
    },
    {
      title: "Sortir de l'Illusion du Gadget",
      body: `**L'illusion courante :** « L'IA va faire mon travail à ma place. »

**La réalité en 3 niveaux (Framework AI Fluency) :**
1. **Assistance (Faible valeur ajoutée)** — Traduire un texte, résumer des notes brutes, reformuler un email. Utile, mais tout le monde sait le faire.
2. **Augmentation (Haute valeur ajoutée)** — L'IA devient votre sparring-partner critique. Elle challenge votre stratégie, détecte vos angles morts contractuels et audite vos arguments.
3. **Autonomie (Agentivité IA)** — L'IA exécute seule une chaîne de tâches séquentielles (tri, analyse préliminaire, ébauche de réponse) — indispensable pour ceux qui managent des équipes.`,
    },
    {
      title: "Les 4 Compétences du Professionnel",
      body: `1. **Délégation** — Savoir exactement quelle corvée confier à la machine et quelle décision humaine stratégique conserver.
2. **Description** — Donner le contexte métier complet, la posture, et le niveau de contrainte juridique ou hiérarchique.
3. **Discernement** — Repérer immédiatement l'erreur factuelle, l'invention légale ou l'incohérence contextuelle (goût, intuition, expérience...).
4. **Diligence** — Rester juridiquement et professionnellement responsable de ce qui sort sous votre signature.`,
    },
    {
      title: "Mauvais Prompt vs Bon Prompt",
      body: `**Le mauvais réflexe :**
> « Écris-moi une lettre pour relancer un fournisseur en retard. »

**Résultat :** Texte creux, impersonnel, robotique, totalement déconnecté des réalités contractuelles et administratives algériennes.

**Pourquoi ça échoue :** L'IA extrapole dans le vide si vous ne lui imposez pas un cadre fermé.`,
    },
    {
      title: "La Méthode RCTFC (Le Standard Pro)",
      body: `- **R — Rôle :** Assistant administratif expérimenté, habitué aux négociations contractuelles du secteur public/privé algérien.
- **C — Contexte :** Entreprise / établissement basé à Chlef ; une commande d'équipements a un retard de livraison injustifié de 3 semaines.
- **T — Tâche :** Rédiger une mise en demeure formelle et ferme, tout en préservant le partenariat commercial futur.
- **F — Format :** Courrier administratif standard, environ 130 mots, français soutenu et direct.
- **C — Contraintes :** Ne pas menacer immédiatement de pénalités de retard, mais exiger un calendrier d'engagement ferme sous 48h.`,
    },
    {
      title: "Atelier Pratique",
      subtitle: "30 min — Travail en binômes",
      body: `1. Prenez vos smartphones, connectez-vous sur \`chatgpt.com\` ou \`claude.ai\`.
2. Choisissez une corvée administrative réelle vécue cette semaine à Chlef.
3. Rédigez votre prompt en appliquant rigoureusement le modèle **RCTFC**.
4. Lisez le résultat généré et identifiez **au moins 2 défauts** (ex : formule trop agressive, mention d'une loi inexistante, ton trop familier).
5. Ajustez en une seule itération pour repartir avec un document prêt à être imprimé ou envoyé.`,
    },
    {
      title: "Le Mur des Hallucinations",
      body: `**Le phénomène d'hallucination :** L'IA a horreur du vide. Lorsqu'elle ne dispose pas de la réponse exacte, plutôt que de l'avouer, elle invente parfois des informations de toutes pièces pour satisfaire votre requête.

**Le danger invisible :** Elle ne produit généralement pas d'absurdités évidentes. Elle va plutôt générer des éléments faux mais extrêmement crédibles (faux rapports, faux articles de loi, fausses statistiques).

**La règle d'or :** L'IA est une « machine à plausibilité », pas à vérité. L'expert métier, c'est vous. Ne validez jamais une source, un chiffre ou une référence légale sans vérification externe.`,
    },
    {
      title: "Cybersécurité — Le Piège des Liens et QR Codes Malveillants",
      body: `**Le danger des QR codes (Quishing) :** Scanner un QR code dans un lieu public ou sur un document non vérifié peut vous rediriger vers un site frauduleux ou télécharger un malware à votre insu.

**Les liens trompeurs (Phishing) :** Méfiez-vous des liens reçus par SMS (Smishing), email ou sur les réseaux sociaux. Les pirates clonent souvent des sites officiels (banques, services publics) pour voler vos identifiants.

**Les bons réflexes :**
1. **Vérifiez l'URL** — Avant d'entrer un mot de passe ou des données, assurez-vous que l'adresse du site est exacte.
2. **Ne scannez pas aveuglément** — Évitez les QR codes douteux ou collés par-dessus d'autres affichages.
3. **Privilégiez l'accès direct** — Tapez vous-même l'adresse du service web au lieu de cliquer sur un lien reçu.`,
    },
    {
      title: 'Le Piège du "Vibe Coding"',
      body: `**Qu'est-ce que le Vibe Coding ?** La tendance consistant à développer des applications en générant tout le code via l'IA, souvent sans avoir les compétences techniques pour le comprendre.

**Les dangers majeurs :**
- **Identifiants en clair** — L'IA peut générer du code contenant vos mots de passe ou clés d'API « en dur », les rendant accessibles à tous si le code est publié.
- **Failles de sécurité ignorées** — En copiant-collant aveuglément le code généré, les utilisateurs laissent des failles majeures, facilement exploitables par les pirates.

**La règle d'or (sécurisation des clés) :**
- Stockez toujours vos clés d'API et mots de passe dans un fichier \`.env\`.
- **Crucial :** ajoutez ce fichier \`.env\` à votre \`.gitignore\` pour éviter qu'il ne soit publié accidentellement sur GitHub.
- Faites toujours valider la sécurité de vos applications avant de les publier.`,
    },
    {
      title: "Risques Familiaux — BaridiMob & Clonage Vocal",
      body: `**Fraude BaridiMob :**
- **Règle absolue :** le code SMS / OTP est strictement personnel et secret. Aucun agent d'Algérie Poste ou de banque ne vous le demandera au téléphone.
- **Le vol silencieux d'OTP :** méfiez-vous des applications malveillantes (surtout hors stores officiels). Si une application obtient l'autorisation de lire vos SMS, elle peut intercepter vos codes en arrière-plan et les envoyer aux pirates.

**Arnaque type :** l'escroc vous contacte via un faux profil (Facebook, WhatsApp) au nom d'un proche. Il prétexte une urgence et vous demande un transfert BaridiMob immédiat.

**L'antidote immédiat :** ne vous fiez ni à la photo de profil, ni au nom affiché. Appelez toujours la personne directement sur son véritable numéro pour vérifier l'information de vive voix.`,
    },
    {
      title: "Vos Enfants et l'IA",
      body: `**Constat terrain :** vos collégiens et lycéens utilisent déjà ChatGPT, Perplexity ou des filtres IA, souvent plus vite que vous. L'interdiction stricte ne fonctionne jamais.

**Le véritable risque :** ce n'est pas l'outil, c'est ce qu'on y dépose (photos personnelles, nom de famille, établissement scolaire, localisation).

**Prévention :** les photos et audios peuvent être détournés (deepfakes, chantage scolaire). Les enfants doivent savoir qu'ils peuvent vous en parler sans crainte d'être punis ou privés d'écran.`,
    },
    {
      title: "Les Données Taboues",
      subtitle: "Ce qu'on ne donne JAMAIS à l'IA",
      body: `**Ne collez jamais dans un outil cloud public :**
- Documents internes confidentiels et bilans d'entreprise non publics
- Pièces d'identité, numéros de passeport, permis
- Coordonnées bancaires, RIB, relevés CCP
- Dossiers médicaux, ordonnances
- Données nominatives de collègues ou de tiers

**Règle d'or :** *Écrivez dans le prompt comme si votre patron ou votre voisin pouvait le lire demain sur un panneau d'affichage.*`,
    },
    {
      title: "Action Immédiate — Sécuriser sa Boîte Mail",
      body: `**Pourquoi la boîte mail ?** C'est la clé de voûte de toute votre existence numérique. Qui la contrôle peut réinitialiser vos banques, réseaux sociaux et démarches administratives.

**Procédure en direct (2 minutes) :**
1. Vérifier si vos identifiants ont déjà fuité sur [haveibeenpwned.com](https://haveibeenpwned.com).
2. Ouvrir les paramètres du compte Google / Microsoft sur votre smartphone.
3. Activer la validation en deux étapes (**2FA**).`,
    },
    {
      title: "Valoriser son Expertise et sa Visibilité",
      body: `- **Développer sa visibilité en ligne** — Ne restez pas dans l'ombre. Prenez la parole sur les réseaux professionnels pour partager votre expérience et vos idées.
- **Construire un portfolio solide** — Rassemblez et documentez vos réalisations, projets et expérimentations pour prouver concrètement votre savoir-faire.
- **Créer et expérimenter** — L'apprentissage passe par la pratique. Lancez des projets, testez de nouvelles idées et partagez ouvertement vos apprentissages.
- **Réseauter et connecter avec les gens** — La finalité reste humaine. Utilisez ces outils pour identifier vos pairs, engager la conversation et bâtir des relations authentiques.`,
    },
    {
      title: "Rester à Jour Sans Y Passer ses Soirées",
      body: `**Le piège :** la surcharge informationnelle. De nouveaux modèles et outils sortent chaque semaine.

**La méthode minimaliste et durable :**
- Pas 10 newsletters : une seule lecture ciblée (ex : [TLDR AI](https://tldr.tech/ai) en 5 minutes ou [Superhuman AI](https://www.joinsuperhuman.ai/)).
- **Pour la vidéo :** suivre une chaîne pertinente (ex : [Entrepreneur DZ](https://www.youtube.com/@Entrepreneurdz/)).
- Un rituel unique : 10 minutes chaque dimanche soir ou lundi matin à 08h00.

> « Vous n'avez pas besoin de tout savoir. Vous avez besoin de savoir où regarder le jour où vous en aurez besoin. »`,
    },
    {
      title: "Votre Engagement Dès Aujourd'hui",
      body: `1. **Une tâche administrative automatisée** dès lundi avec la structure RCTFC.
2. **Un modèle de prompt sauvegardé** dans vos notes personnelles.
3. **2FA activée** sur votre compte principal et mot de passe de secours familial fixé à la maison.`,
    },
    {
      title: "Ressources & Contact",
      body: `- **Site web :** [mahfoudh.dev](https://mahfoudh.dev)
- **YouTube :** \`@mahfoudh_arous\` (Français) · ورشة البرمجة مع محفوظ (Arabe)
- **Programme National 7.77 :** renseignements complémentaires auprès des encadrants du Skills Center Mobilis Chlef.
- **Échanges & Questions-Réponses :** tour de table ouvert.`,
    },
  ],
};
