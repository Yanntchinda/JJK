# Bookmap Trading — Journal de trading

Journal de trading en français, avec applications Windows (Electron) et Android (Capacitor). Le logo du dépôt est intégré à l’interface, à l’icône Android et à l’installeur Windows.

## Contenu

```text
JJK/
├── .github/workflows/
│   ├── build-windows.yml             # installeur Windows EXE
│   └── build-android.yml             # APK Android
├── android/                          # projet natif Android et wrapper Gradle
├── assets/bookmap-trading-logo.png   # logo de l’application
├── capacitor.config.json             # configuration Capacitor
├── index.html                        # entrée navigateur
├── journal-de-trading.html           # tableau de bord, calendrier et journal
├── main.cjs                           # démarrage de l’application Electron
├── package.json                      # dépendances et scripts de build
└── scripts/                           # préparation des icônes et fichiers web
```

Fonctions : suivi des comptes et trades, statistiques et graphiques, calendrier, import/export CSV et sauvegardes JSON. Les données sont conservées localement sur l’appareil ; faites régulièrement une sauvegarde JSON.

## Télécharger l’APK

Le workflow **Build Android APK** compile automatiquement un APK lors d’un push ou d’une pull request. L’artefact `bookmap-trading-journal-android-apk` est téléchargeable depuis la page de l’exécution **Actions** pendant 30 jours.

Pour publier aussi un lien direct vers le fichier `.apk` dans une pré-version GitHub, lancer **Actions → Build Android APK → Run workflow** et laisser `publish_release` activé. L’APK est signé avec la clé de débogage Android : il peut être installé directement après autorisation des installations provenant de cette source, mais cette clé n’est pas destinée à une publication sur Google Play.

## Construire l’APK en local

Prérequis : Node.js 22+, Java 21 et Android SDK.

```bash
npm ci
npm run android:sync
npx capacitor-assets generate --android --assetPath assets --iconBackgroundColor '#060b17' --splashBackgroundColor '#060b17'
cd android
./gradlew assembleDebug
```

L’APK sera créé dans `android/app/build/outputs/apk/debug/app-debug.apk`.

## Windows

L’installeur Windows est construit avec Electron Builder et publié comme artefact par **Build Windows EXE**. Voir l’onglet **Actions** pour télécharger l’archive ZIP ou lancer une pré-version avec lien direct vers le `.exe`.
