<img width="1639" height="975" alt="image" src="https://github.com/user-attachments/assets/bcc33aef-9c5c-423a-bdda-d6675554c11d" />
<img width="879" height="594" alt="image" src="https://github.com/user-attachments/assets/12b19699-6f8d-4975-b42a-52e104ae1f40" />
<img width="961" height="720" alt="image" src="https://github.com/user-attachments/assets/a85ada9a-572e-4c3e-8102-36d39f10db1d" />
🧪 Labo de Comparaison de Sérialisation : JSON, XML et Protobuf
-->  Objectif du Projet
Ce projet est un laboratoire pratique développé dans le cadre de mes études à l'EMSI (École Marocaine des Sciences de l'Ingénieur) pour comparer les mécanismes de sérialisation de données populaires : JSON, XML et Protobuf (Protocol Buffers).

L'objectif principal est de quantifier l'efficacité de chaque format en mesurant la taille des fichiers générés après la sérialisation d'un même ensemble de données structurées (une liste d'employés).

--> Fonctionnalités Clés
Sérialisation Multiple : Une liste d'objets Employee est sérialisée simultanément en trois formats différents sur une seule requête API.

Comparaison de Taille : Le serveur mesure précisément la taille en octets de chaque fichier généré.

Stockage Local : Les fichiers sérialisés sont sauvegardés dans le dossier public/serialized pour une inspection manuelle.

Interface Utilisateur (UI) : Une application Next.js affiche les résultats de la taille des fichiers et calcule la réduction de taille offerte par Protobuf par rapport à JSON.

🛠️ Stack Technique
Frontend : Next.js (React)

Backend (API) : Next.js API Routes (Node.js)

Sérialisation :

JSON : JSON.stringify()

XML : xml-js

Protobuf : protobufjs (pour la génération et la sérialisation binaire)
