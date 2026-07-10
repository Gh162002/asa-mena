# Guide de déploiement ASA-MENA

## Architecture
- **Frontend** : Vercel (React/Vite)
- **Backend** : Render (Spring Boot / Docker)
- **Base de données** : Render PostgreSQL (Free tier)

---

## 1. Déployer le Backend sur Render

### Option A — Déploiement automatique via `render.yaml` (recommandé)

1. Pousser le code sur GitHub :
   ```bash
   git add .
   git commit -m "chore: configure production deployment"
   git push
   ```

2. Aller sur [https://dashboard.render.com](https://dashboard.render.com)
3. Cliquer **"New" → "Blueprint"**
4. Connecter votre repo GitHub et sélectionner ce dépôt
5. Render détecte automatiquement `render.yaml` et crée :
   - ✅ Le service web backend (Docker)
   - ✅ La base de données PostgreSQL

---

### Option B — Déploiement manuel (si Blueprint ne fonctionne pas)

#### Étape 1 : Créer la base de données PostgreSQL

1. Dashboard Render → **"New" → "PostgreSQL"**
2. Remplir :
   - **Name** : `asa-mena-db`
   - **Database** : `asamena`
   - **User** : `asamena_user`
   - **Plan** : Free
3. Cliquer **Create Database**
4. Copier les valeurs **JDBC_DATABASE_URL**, **JDBC_DATABASE_USERNAME**, **JDBC_DATABASE_PASSWORD** depuis l'onglet "Connections"

#### Étape 2 : Créer le service Web Backend

1. Dashboard Render → **"New" → "Web Service"**
2. Connecter votre repo GitHub
3. Remplir :
   - **Name** : `asa-mena-backend`
   - **Root Directory** : `backend`
   - **Runtime** : Docker
   - **Dockerfile Path** : `./Dockerfile`
   - **Plan** : Free
4. Dans **"Environment Variables"**, ajouter :

| Clé | Valeur |
|-----|--------|
| `JDBC_DATABASE_URL` | *(depuis votre DB Render)* |
| `JDBC_DATABASE_USERNAME` | *(depuis votre DB Render)* |
| `JDBC_DATABASE_PASSWORD` | *(depuis votre DB Render)* |
| `CORS_ORIGINS` | `https://votre-app.vercel.app` |
| `MAIL_USERNAME` | `fsalliancemena@gmail.com` |
| `MAIL_PASSWORD` | *(mot de passe d'application Gmail — voir ci-dessous)* |
| `CONTACT_EMAIL` | `fsalliancemena@gmail.com` |

5. Cliquer **Create Web Service**

---

## 2. Configurer Gmail pour l'envoi d'emails

Google bloque les connexions SMTP directes. Il faut créer un **mot de passe d'application** :

1. Aller sur [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Activer la **validation en 2 étapes** (obligatoire)
3. Aller dans **"Mots de passe des applications"**
4. Sélectionner : Application = "Autre" → taper `ASA-MENA Backend`
5. Copier le mot de passe généré (16 caractères)
6. Le coller dans la variable d'env `MAIL_PASSWORD` sur Render

---

## 3. Connecter le Frontend Vercel au Backend Render

Une fois le backend déployé, Render vous donne une URL du type :
`https://asa-mena-backend.onrender.com`

### Mettre à jour les appels API dans le frontend

Dans Vercel, aller dans **Settings → Environment Variables** et ajouter :

| Clé | Valeur |
|-----|--------|
| `VITE_API_URL` | `https://asa-mena-backend.onrender.com` |

### Mettre à jour le CORS sur Render

Dans les variables d'env du backend Render, mettre à jour :
```
CORS_ORIGINS = https://votre-app.vercel.app
```
*(remplacer par l'URL exacte de votre frontend Vercel)*

---

## 4. Vérification

Après déploiement, tester ces URLs :
- `https://asa-mena-backend.onrender.com/api/actualites` → doit retourner du JSON
- `https://asa-mena-backend.onrender.com/api/activites` → doit retourner du JSON

> ⚠️ **Note Free Tier Render** : Le service "s'endort" après 15 min d'inactivité.
> La première requête peut prendre 30-60 secondes. C'est normal sur le plan gratuit.

---

## 5. Récapitulatif des fichiers créés/modifiés

| Fichier | Rôle |
|---------|------|
| `backend/Dockerfile` | Image Docker pour Render |
| `render.yaml` | Blueprint Render (DB + backend auto) |
| `backend/src/main/resources/application.properties` | Config avec variables d'env |
| `backend/src/main/resources/application-prod.properties` | Config PostgreSQL production |
| `backend/src/main/java/.../config/CorsConfig.java` | CORS dynamique via env vars |
| `backend/src/main/java/.../controller/ContactController.java` | Envoi d'email réel + sauvegarde DB |
