# Smart Budget – Resources

> Questa repository contiene tutte le risorse del progetto **Smart Budget**: documentazione, diagrammi, mockup e artefatti di progettazione.

> Progetto per il corso di **Ingegneria del Software** – Corso di Laurea in **Ingegneria Informatica T**, Università di Bologna (UNIBO)

---

## 📋 Descrizione del progetto

**Smart Budget** è un'applicazione web per la gestione del budget personale. Permette agli utenti di:

- Gestire **conti** bancari e portafogli
- Registrare e categorizzare **transazioni**
- Tenere traccia di **debiti e crediti**
- Visualizzare **statistiche** sulle proprie spese
- Esportare i dati in formati standard
- Gestire il proprio **profilo utente**

---

## 📁 Struttura della repository

```
smart-budget-resources/
├── Docs/                        # Documentazione del progetto
│   ├── Abstract.pdf             # Abstract del progetto
│   ├── Analisi dei requisiti/   # Diagrammi dei casi d'uso e misuse case
│   ├── Analisi del problema/    # Modello del dominio, package, classi, interazioni
│   ├── Progettazione/           # Architettura, deployment, persistenza, dettaglio
│   └── Documentazione interna/  # Note e idee interne
├── Images/                      # Immagini PNG dei diagrammi
│   ├── Analisi dei requisiti/
│   ├── Analisi del problema/
│   └── Progettazione/
├── SVGs/                        # Diagrammi in formato SVG
│   ├── Analisi dei requisiti/
│   ├── Analisi del problema/
│   ├── Progettazione/
│   └── ClientView/
├── EMFs/                        # Diagrammi in formato EMF
├── Figma SVGs/                  # Mockup delle schermate (Figma)
├── Smart Budget.pdf             # Documento principale del progetto
├── Smart Budget.docx            # Documento principale (formato editabile)
└── versions.json                # Storico delle versioni
```

---

## 📐 Analisi dei Requisiti

### Diagramma dei Casi d'Uso
![Diagramma dei casi d'uso](Images/Analisi%20dei%20requisiti/Diagramma%20dei%20casi%20d'uso.png)

### Diagramma dei Misuse Case
![Diagramma dei misuse case](Images/Analisi%20dei%20requisiti/Diagramma%20dei%20misuse%20case.png)

---

## 🔍 Analisi del Problema

### Modello del Dominio
![Modello del Dominio](Images/Analisi%20del%20problema/Modello%20del%20Dominio.png)

### Diagramma dei Package
![Diagramma dei package](Images/Analisi%20del%20problema/Diagramma%20dei%20package.png)

### Diagrammi delle Classi

| Autenticazione | Conti | Budget |
|---|---|---|
| ![Autenticazione](Images/Analisi%20del%20problema/Autenticazione.png) | ![Conti](Images/Analisi%20del%20problema/Conti.png) | ![Budget](Images/Analisi%20del%20problema/Budget.png) |

| Categorie | Transazioni | Debiti e Crediti |
|---|---|---|
| ![Categorie](Images/Analisi%20del%20problema/Categorie.png) | ![Transazioni](Images/Analisi%20del%20problema/Transazioni.png) | ![DebitiCrediti](Images/Analisi%20del%20problema/DebitiCrediti.png) |

| Statistiche | Esportazione Dati | Gestione Profilo |
|---|---|---|
| ![Statistiche](Images/Analisi%20del%20problema/Statistiche.png) | ![EsportazioneDati](Images/Analisi%20del%20problema/EsportazioneDati.png) | ![GestioneProfiloUtente](Images/Analisi%20del%20problema/GestioneProfiloUtente.png) |

---

## 🏗️ Progettazione

### Architettura

| Diagramma dei Componenti | Diagramma dei Package |
|---|---|
| ![Componenti](Images/Progettazione/Architettura/Architettura%20-%20diagramma%20dei%20componenti.png) | ![Package](Images/Progettazione/Architettura/Architettura%20-%20diagramma%20dei%20package.png) |

### Persistenza – Diagramma E-R
![Diagramma E-R](Images/Progettazione/Persistenza/Persistenza%20-%20diagramma%20E-R.png)

### Progettazione di Dettaglio

| Modello del Dominio | API | Interfacce Server |
|---|---|---|
| ![Modello](Images/Progettazione/Progettazione%20di%20dettaglio/Dettaglio%20-%20modello%20del%20dominio.png) | ![API](Images/Progettazione/Progettazione%20di%20dettaglio/Dettaglio%20-%20API.png) | ![Interfacce](Images/Progettazione/Progettazione%20di%20dettaglio/Dettaglio%20-%20interfacce%20server.png) |

---

## 🎨 Mockup UI (Figma)

Alcuni esempi delle schermate dell'applicazione:

| Landing Page | Login | Home |
|---|---|---|
| ![Landing Page](Figma%20SVGs/Landing%20Page.png) | ![Login](Figma%20SVGs/Login.png) | ![Home](Figma%20SVGs/Home.png) |

| Transazioni | Budget | Statistiche |
|---|---|---|
| ![Transazioni](Figma%20SVGs/Transazioni.png) | ![Budget](Figma%20SVGs/Budget.png) | ![Statistiche](Figma%20SVGs/Statistiche.png) |

---

## 📦 Versione corrente

| Campo | Valore |
|---|---|
| **Versione** | 0.8.0 |
| **Data rilascio** | 2024-04-29 |
| **Autore** | alexsantini |
| **Descrizione** | Creato diagramma ER, modificati modelli del dominio di analisi e progettazione |

### Sotto-versioni

| Artefatto | Versione |
|---|---|
| Diagramma dei casi d'uso | 0.10 |
| Diagramma dei misuse case | 0.4 |
| Modello del dominio | 0.9 |
| Diagramma dei package | 0.1 |
| Diagramma delle classi | 0.8 |
| Diagramma delle interazioni | 0.6 |
| Progettazione | 0.1 |

---

## 👤 Autori

- **Alex Santini** – [@AlexSantini10](https://github.com/AlexSantini10)
- **ErJem** – [@ErJem](https://github.com/ErJem)
- **lucax58** – [@lucax58](https://github.com/lucax58)
