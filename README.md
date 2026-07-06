# Alliance pour la Souveraineté Alimentaire – MENA
## Site Web – Spring Boot + React

---

## 🗂️ Structure du projet

```
asa-mena/
├── backend/          ← Spring Boot (Java 17)
│   ├── pom.xml
│   └── src/main/java/com/asamena/
│       ├── AsaMenaApplication.java   ← Point d'entrée
│       ├── config/CorsConfig.java     ← CORS pour React
│       ├── model/
│       │   ├── ContactMessage.java
│       │   └── Activite.java
│       └── controller/
│           ├── ContactController.java  ← POST /api/contact
│           └── ActiviteController.java ← GET /api/activites
│
└── frontend/         ← React + Vite
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.jsx                  ← Router principal
        ├── index.css                ← Variables CSS + styles globaux
        ├── data/content.js          ← Tous les textes de ta tante
        ├── components/
        │   ├── Navbar.jsx
        │   └── Footer.jsx
        └── pages/
            ├── Accueil.jsx          ← Page d'accueil avec Hero
            ├── APropos.jsx          ← Présentation, Vision, Mission
            ├── GroupesTravail.jsx   ← Les 7 groupes de travail
            ├── Thematiques.jsx      ← Souveraineté alimentaire + thèmes
            ├── Activites.jsx        ← Activités (API Spring Boot)
            ├── PaysMembres.jsx      ← 13 pays avec drapeaux
            └── Contact.jsx          ← Formulaire → API Spring Boot
```

---

## 🚀 Lancer le projet

### Backend (Spring Boot)
```bash
cd backend
./mvnw spring-boot:run
# Écoute sur http://localhost:8080
# Console H2 : http://localhost:8080/h2-console
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
# Écoute sur http://localhost:5173
# Le proxy Vite redirige /api → localhost:8080
```

---

## 🌐 Pages du site

| URL | Page |
|-----|------|
| `/` | Accueil / Hero |
| `/a-propos` | Présentation de l'Alliance |
| `/groupes` | Les 7 groupes de travail |
| `/thematiques` | Toutes les thématiques |
| `/activites` | Activités (données depuis l'API) |
| `/pays-membres` | 13 pays membres avec drapeaux |
| `/contact` | Formulaire de contact |

---

## 🎨 Design

- **Palette** : Vert olive `#3d6b4f` | Ocre `#c8933a` | Brun `#5c3d1e` | Blanc cassé `#faf8f3`
- **Typographie** : Playfair Display (titres) + Inter (corps)
- **Style** : Chaleureux & communautaire, responsive mobile

---

## 🔗 APIs Spring Boot

| Méthode | Route | Description |
|---------|-------|-------------|
| `POST` | `/api/contact` | Recevoir un message de contact |
| `GET` | `/api/activites` | Liste des activités |
| `GET` | `/api/activites/{id}` | Détail d'une activité |

---

## 🗄️ Base de données

- **Dev** : H2 en mémoire (fourni avec Spring Boot, sans installation)
- **Prod** : Remplacer dans `application.properties` par MySQL ou PostgreSQL

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/asamena
spring.datasource.username=root
spring.datasource.password=motdepasse
spring.jpa.database-platform=org.hibernate.dialect.MySQLDialect
```
