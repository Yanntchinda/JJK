# Bookmap Trading — Journal de trading

Application de journal de trading en français, transformée en application Windows autonome avec le logo fourni dans le dépôt.

## Contenu

```text
JJK/
├── .github/workflows/build-windows.yml  # compilation automatique sur GitHub Actions
├── assets/
│   └── bookmap-trading-logo.png         # logo utilisé dans l’application et l’installeur
├── index.html                           # point d’entrée navigateur (redirige vers l’application)
├── journal-de-trading.html              # tableau de bord, calendrier, journal et paramètres
├── main.cjs                             # fenêtre de bureau Electron
├── package.json                         # scripts, dépendances et configuration de l’installeur
└── scripts/create-icon.cjs              # génération de l’icône Windows (.ico) depuis le logo
```

L’application permet de suivre les trades et comptes, consulter les statistiques et graphiques, importer/exporter des CSV et sauvegarder/restaurer les données en JSON. Les données sont enregistrées localement dans le profil de l’application/navigateur : exportez régulièrement une sauvegarde JSON.

## Récupérer le fichier `.exe` depuis GitHub

À chaque push ou pull request, GitHub Actions construit l’installeur Windows 64 bits. Pour le télécharger :

1. Ouvrir l’onglet **Actions** du dépôt et sélectionner **Build Windows EXE**.
2. Ouvrir la dernière exécution terminée avec succès.
3. Télécharger l’artefact `bookmap-trading-journal-windows-x64`.
4. L’installeur se trouve dans l’archive téléchargée (`Bookmap Trading - Journal Setup ... .exe`).

La compilation peut aussi être lancée manuellement depuis **Actions → Build Windows EXE → Run workflow**. Cette exécution manuelle publie aussi l’installeur `.exe` comme fichier direct dans une pré-version de **Releases** (en plus de l’artefact ZIP).

## Construire en local

Prérequis : Node.js 22 ou plus récent et npm.

```bash
npm ci
npm start       # lancer l’application de bureau
npm run dist    # générer l’installeur Windows dans dist/
```

`npm run dist` génère l’icône `.ico` à partir du PNG du logo, puis empaquette l’application avec Electron Builder. Le fichier `.ico` et les fichiers générés dans `dist/` ne sont pas suivis par Git.

> Le workflow Windows est la voie recommandée pour produire l’installeur `.exe` ; il s’exécute sur une machine Windows fournie par GitHub Actions.
