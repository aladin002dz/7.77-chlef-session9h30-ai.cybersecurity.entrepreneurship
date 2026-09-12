# 7.77 Chlef — Session 09:30 · IA, Cybersécurité & Expérience Métier

**🔗 Aperçu en ligne : [mahfoudh.dev/7.77-chlef-session9h30-ai.cybersecurity.entrepreneurship](https://mahfoudh.dev/7.77-chlef-session9h30-ai.cybersecurity.entrepreneurship)**

Diaporama web trilingue (FR / EN / AR), construit à partir de
[`SESSION_09h30_31-45_ANS.md`](./SESSION_09h30_31-45_ANS.md), navigable :

- au **clavier** (← →, ↑ ↓, Espace, Home/End, `f` pour le plein écran) et à la **molette/trackpad**,
- au **doigt** sur mobile/tablette (glisser pour changer de diapositive, avec suivi du geste en temps réel),
- ou en **cliquant** sur les zones gauche/droite de l'écran.

L'index de la diapositive courante est conservé dans le hash de l'URL (`#3`), donc un lien direct ou un
rafraîchissement de page rouvre au bon endroit, et il est préservé lors d'un changement de langue.

## Stack

Même stack que [aladin002dz/aladin002dz.github.io](https://github.com/aladin002dz/aladin002dz.github.io) :

- **Next.js** (App Router, export statique `output: "export"`)
- **TypeScript**
- **Tailwind CSS v4**
- Contenu multilingue via `dictionaries/{fr,en,ar}.ts` + `lib/dictionary.ts`, routage `/`, `/en`, `/ar`
- Déploiement automatique sur **GitHub Pages** via GitHub Actions

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) (français), [/en](http://localhost:3000/en) ou [/ar](http://localhost:3000/ar).

## Build statique

```bash
npm run build
```

Génère le site dans `out/`. Le build de production (utilisé par la CI GitHub Pages) est préfixé par le
nom du dépôt (`basePath`) car ce n'est pas un dépôt `<user>.github.io` :

```bash
GITHUB_PAGES=true npm run build
```

## Déploiement

Le workflow [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) construit et publie
automatiquement le site sur GitHub Pages à chaque push sur `main`. Il faut activer une fois
**Settings → Pages → Source → GitHub Actions** sur le dépôt.

## Mettre à jour le contenu

Le contenu de chaque langue vit dans `dictionaries/fr.ts`, `dictionaries/en.ts` et `dictionaries/ar.ts`
(un objet `Dictionary` par langue, voir `lib/types.ts`). Chaque diapositive a un `title`, un `subtitle`
optionnel et un `body` en mini-markdown (`**gras**`, `*italique*`, `` `code` ``, `[texte](url)`, listes
`- ` / `1. `, citations `> `), rendu par `components/Markdown.tsx`.
