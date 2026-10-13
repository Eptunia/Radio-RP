# Radio RP

Talkie-walkie push-to-talk dans le navigateur, pour serveur GTA RP.
Audio en WebRTC entre joueurs, Firebase uniquement pour la mise en relation. Aucun serveur à héberger.

## Contenu

| Fichier | Rôle |
|---|---|
| `index.html` | L'appli |
| `firebase-config.js` | **Seul fichier à modifier** (config Firebase + TURN) |
| `database.rules.json` | Règles de sécurité de la base |
| `firebase.json`, `.firebaserc` | Config Firebase CLI |
| `deploy-rules.sh` | Envoie les règles à Firebase |
| `.github/workflows/pages.yml` | Déploiement automatique sur GitHub Pages |

## Installation

### 1. Firebase
1. https://console.firebase.google.com > **Ajouter un projet**.
2. **Authentication** > Commencer > **Anonyme** > Activer.
3. **Realtime Database** > Créer une base (mode verrouillé, région Europe).
4. **Paramètres du projet** > Tes applis > **</>** (Web) > copie la config dans `firebase-config.js`
   (vérifie que `databaseURL` est bien présent).
5. Remplace `ton-projet` dans `.firebaserc`, puis envoie les règles :
   ```bash
   ./deploy-rules.sh ton-projet
   ```
   (ou colle le contenu de `database.rules.json` dans Realtime Database > Règles > Publier.)

### 2. GitHub
```bash
git init && git add . && git commit -m "Radio RP"
git branch -M main
git remote add origin https://github.com/TON_PSEUDO/radio-rp.git
git push -u origin main
```
Puis sur GitHub : **Settings > Pages > Source : GitHub Actions**.
Le site sera sur `https://TON_PSEUDO.github.io/radio-rp/` après le premier déploiement (onglet Actions).

### 3. Autoriser le domaine
Firebase > Authentication > Paramètres > **Domaines autorisés** > ajoute `TON_PSEUDO.github.io`.

## Utilisation
Chaque joueur ouvre le lien, choisit un indicatif et une fréquence, puis maintient **Parler** (ou la touche **V** sur PC).
Même fréquence = même canal. Une fréquence secrète (`police-xk92`) sert de canal privé.
Mode **basculer** : un appui ouvre le micro, un deuxième le coupe. **Son coupé** mute la réception.

## Dépannage
- **Micro refusé** : la page doit être en HTTPS (GitHub Pages l'est) et le micro autorisé.
- **Erreur Firebase** : auth anonyme non activée, ou domaine non autorisé.
- **On se voit mais on ne s'entend pas** : réseau strict, ajoute un serveur TURN dans `firebase-config.js`.
- **Limite** : environ 6 à 8 personnes par canal.
- Sur PC, la page doit être au premier plan pour recevoir la touche V : sur téléphone ou second écran, pas de souci.
