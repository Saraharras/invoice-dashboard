#  Invoice Dashboard

Dashboard de monitoring des factures avec design style cockpit.

##  Objectif

Visualiser et surveiller les anomalies de facturation de manière claire et lisible.

##  Fonctionnalités

- **KPIs** : Total factures | Anomalies | Montant total
- **Tableau** : Liste des factures (ID, Fournisseur, Montant, Statut)
- **Codes couleur** : OK (vert) | WARNING (orange) | ANOMALY (rouge)
- **Design cockpit** : Interface néon cyberpunk
- **Console système** : Logs en temps réel

## 🚀 Installation

```bash
# 1. Créer le projet
ng new invoice-dashboard --standalone
cd invoice-dashboard

# 2. Remplacer les fichiers dans src/app/
# - app.component.ts
# - app.component.html
# - app.component.css

# 3. Lancer l'application
ng serve
