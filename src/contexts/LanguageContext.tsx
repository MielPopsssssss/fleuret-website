import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.partners': 'Partenaires',
    'nav.waitlist': 'Rejoindre notre waitlist',
    
    // Hero
    'hero.title': 'Pentests en continu sur serveur et web, propulsés par une IA agentique.',
    'hero.subtitle': 'De votre IP au rapport audit‑ready, en continu, hébergé en Europe.',
    'hero.cta.demo': 'Voir notre POC fonctionnel',
    'hero.cta.waitlist': 'Rejoindre notre waitlist',
    
    // Features
    'features.title': 'Une Solution Révolutionnaire',
    'features.subtitle': 'Fleuret combine les dernières avancées en IA pour offrir une solution de pentesting sans compromis.',
    'features.hours.title': 'Résultats en Heures',
    'features.hours.desc': 'Obtenez vos résultats de pentest en quelques heures au lieu de plusieurs semaines.',
    'features.coverage.title': 'Couverture Complète',
    'features.coverage.desc': 'Aucune faille manquée grâce à nos agents IA spécialisés qui collaborent.',
    'features.continuous.title': 'Sécurité Continue 24/7',
    'features.continuous.desc': 'Surveillance et tests automatisés en continu pour une protection permanente.',
    'features.success.title': '72% de Réussite',
    'features.success.desc': 'Performances validées sur des benchmarks exigeants avec exploitation réelle.',
    
    // Benchmark
    'benchmark.title': 'Rapports Actionnables',
    'benchmark.subtitle': 'Des recommandations précises et exploitables pour chaque vulnérabilité détectée, avec preuves de concept et étapes de remédiation détaillées.',
    'benchmark.exploitation.title': 'Exploitation réelle',
    'benchmark.exploitation.desc': 'Preuves de concept validées',
    'benchmark.speed.title': 'Rapidité d\'exécution',
    'benchmark.speed.desc': 'Résultats en heures',
    'benchmark.validation.title': 'Validation PoC',
    'benchmark.validation.desc': 'Tests automatisés',
    'benchmark.efficiency.title': 'Efficacité ressources',
    'benchmark.efficiency.desc': 'Optimisation continue',
    
    // Process
    'process.title': 'Comment ça marche',
    'process.subtitle': 'Un processus simple et automatisé pour sécuriser votre infrastructure.',
    'process.step1.title': 'Ajoutez votre IP',
    'process.step1.desc': 'Indiquez simplement l\'adresse IP ou le domaine à tester',
    'process.step2.title': 'L\'IA analyse',
    'process.step2.desc': 'Nos agents IA collaborent pour identifier et exploiter les vulnérabilités',
    'process.step3.title': 'Recevez le rapport',
    'process.step3.desc': 'Obtenez un rapport détaillé avec les vulnérabilités et les recommandations',
    
    // Problem
    'problem.title': 'Le Défi de la Cybersécurité',
    'problem.subtitle': 'Les entreprises font face à des défis critiques en matière de sécurité informatique.',
    'problem.cost.title': 'Coût Élevé',
    'problem.cost.desc': 'Les pentests traditionnels coûtent entre 10k€ et 50k€ par test',
    'problem.time.title': 'Temps Long',
    'problem.time.desc': 'Plusieurs semaines d\'attente pour obtenir les résultats',
    'problem.coverage.title': 'Couverture Limitée',
    'problem.coverage.desc': 'Les tests manuels ne peuvent couvrir toutes les surfaces d\'attaque',
    'problem.continuous.title': 'Pas de Suivi Continu',
    'problem.continuous.desc': 'Les vulnérabilités apparaissent entre les tests annuels',
    
    // Roadmap
    'roadmap.title': 'Notre Roadmap',
    'roadmap.subtitle': 'De notre preuve de concept actuelle vers une solution complète de pentesting automatisé.',
    'roadmap.current': 'Actuel',
    'roadmap.q1': 'Q1 2025',
    'roadmap.q2': 'Q2 2025',
    'roadmap.q3': 'Q3 2025',
    'roadmap.current.title': 'Proof of Concept',
    'roadmap.current.desc': 'Agent IA capable d\'exploiter des vulnérabilités sur des CTFs',
    'roadmap.q1.title': 'Version Alpha',
    'roadmap.q1.desc': 'Tests sur applications web réelles avec premiers clients pilotes',
    'roadmap.q2.title': 'Version Beta',
    'roadmap.q2.desc': 'Couverture étendue : infrastructure, cloud, APIs avec rapports automatisés',
    'roadmap.q3.title': 'Version Production',
    'roadmap.q3.desc': 'Solution complète avec tests continus, intégrations CI/CD et conformité',
    
    // Sovereignty
    'sovereignty.title': 'Souveraineté Numérique',
    'sovereignty.subtitle': 'Une solution française, hébergée en Europe, pour protéger vos données sensibles.',
    'sovereignty.hosting.title': 'Hébergement Européen',
    'sovereignty.hosting.desc': 'Vos données restent en Europe, conformément au RGPD',
    'sovereignty.team.title': 'Équipe Française',
    'sovereignty.team.desc': 'Développé par une équipe d\'experts français en cybersécurité',
    'sovereignty.compliance.title': 'Conformité RGPD',
    'sovereignty.compliance.desc': 'Solution conçue pour répondre aux exigences réglementaires européennes',
    
    // Team
    'team.title': 'Notre Équipe',
    'team.subtitle': 'Une équipe d\'experts passionnés par la cybersécurité et l\'IA.',
    'team.augustin.role': 'CEO & Co-fondateur',
    'team.augustin.bio': 'Ex-Thales, diplômé de l\'ENS et du MVA. Expert en IA et cybersécurité.',
    'team.pierre.role': 'CTO & Co-fondateur',
    'team.pierre.bio': 'Diplômé de l\'X et EPITA. Spécialiste en systèmes distribués et IA.',
    'team.yanis.role': 'Lead Security Engineer',
    'team.yanis.bio': 'Expert en pentesting et sécurité offensive, multiple CTF awards.',
    
    // Partners
    'partners.title': 'Ils nous font confiance',
    
    // Footer
    'footer.tagline': 'Pentesting automatisé par IA pour la souveraineté numérique française.',
    'footer.contact': 'Contact',
    'footer.program': 'Programme',
    'footer.program.hec': 'HEC Launchpad - Janvier 2025',
    'footer.rights': '© 2025 fleuret.ai. Tous droits réservés.',
    
    // Demo Page
    'demo.back': 'Retour',
    'demo.title': 'Démonstration Interactive',
    'demo.subtitle': 'Voyez notre IA en action sur un challenge de sécurité',
    'demo.description': 'Notre IA agentique analyse, identifie et exploite les vulnérabilités de manière autonome. Cette démonstration montre les capacités de nos agents sur un environnement de test contrôlé.',
    'demo.cta': 'Prêt à sécuriser votre infrastructure ?',
    
    // Terminal Demo
    'terminal.ready': 'IA Autonome Prête',
    'terminal.watch': 'Observez notre IA en',
    'terminal.action': 'Action',
    'terminal.intro': 'Découvrez comment notre système autonome analyse, exploite et sécurise un environnement Active Directory en temps réel.',
    'terminal.launch': 'Lancer la Démonstration',
    'terminal.duration': '⚡ Durée: ~2 minutes • 🎯 Scénario réel de pentest',
    'terminal.title': 'fleuret.ai - Pentest Autonome',
    'terminal.pause': 'Pause',
    'terminal.play': 'Lancer',
    'terminal.resume': 'Reprendre',
    'terminal.replay': 'Rejouer',
    'terminal.reset': 'Réinitialiser',
    'terminal.ready.title': 'Terminal prêt',
    'terminal.ready.desc': 'Lancez la démonstration pour commencer',
    
    // Benchmark Details
    'benchmark.title.main': 'Rapports Actionnables',
    'benchmark.subtitle.main': 'Pour chaque vulnérabilité détectée',
    'benchmark.description': 'Au-delà de la simple détection, notre IA génère des recommandations précises et actionnables pour corriger chaque vulnérabilité identifiée. Chaque rapport inclut des étapes de remédiation détaillées, des exemples de code sécurisé et une priorisation basée sur le niveau de risque réel.',
    'benchmark.exploitation.label': 'Exploitation réelle',
    'benchmark.exploitation.description': 'Validation concrète des vulnérabilités par exploitation effective',
    'benchmark.rapidite.label': 'Rapidité d\'exécution',
    'benchmark.rapidite.description': 'Analyse complète et résultats en quelques heures',
    'benchmark.validation.label': 'Validation PoC',
    'benchmark.validation.description': 'Preuve de concept automatique pour chaque faille',
    'benchmark.efficacite.label': 'Efficacité ressources',
    'benchmark.efficacite.description': 'Optimisation intelligente des ressources IA',
    
    // Features Details
    'features.main.title': 'Une Solution',
    'features.main.complete': 'Complète',
    'features.main.subtitle': 'Reconnaissance, scanning, énumération, exploitation, post-exploitation et reporting, entièrement orchestrés par notre IA souveraine. Maîtrise totale des données, conformité européenne, leadership technologique.',
    'features.autonomous.title': 'Pipeline Autonome',
    'features.autonomous.desc': 'De l\'IP d\'entrée au rapport livrable, sans intervention humaine.',
    'features.mistral.title': 'IA Mistral Souveraine',
    'features.mistral.desc': 'LLM fine-tuné sur infrastructure française certifiée, conformité RGPD garantie et auditable.',
    'features.compliance.title': 'Conformité NIS2 & DORA',
    'features.compliance.desc': 'Ciblage prioritaire des exigences réglementaires européennes, anticipation des standards à venir.',
    'features.reports.title': 'Rapports Standards',
    'features.reports.desc': 'Format professionnel avec synthèse exécutive et preuves techniques exploitables.',
    'features.audit.title': 'Audit Continu',
    'features.audit.desc': 'Scans récurrents pour surveillance permanente et amélioration continue du modèle.',
    'features.performance.title': 'Performance Record',
    'features.performance.desc': '82% au benchmark XBOW (vs 77% secteur), meilleur ratio vitesse/précision/coût du marché.',
    
    // Problem Details
    'problem.main.title': 'Votre Équipe de Sécurité',
    'problem.main.overwhelmed': 'Est Débordée',
    'problem.main.subtitle': 'Vos déploiements s\'enchaînent à grande vitesse, mais vos pentests prennent 2 à 4 semaines, coûtant temps et argent.',
    'problem.nis2.title': 'Conformité NIS2',
    'problem.nis2.desc': 'Respectez les exigences européennes de cybersécurité',
    'problem.punctual.title': 'Tests Ponctuels',
    'problem.punctual.desc': 'Les pentests manuels ne testent qu\'à un instant T',
    'problem.expensive.title': 'Coûteux',
    'problem.expensive.desc': 'Budget et ressources humaines limités',
    'problem.exposure': 'Pendant ce temps, vos systèmes restent exposés aux cyberattaques',
    
    // Process Details
    'process.main.title': 'Comment ça',
    'process.main.works': 'Fonctionne',
    'process.main.subtitle': 'Un processus simple, entièrement automatisé du début à la fin.',
    'process.deploy.title': 'Déploiement en 1 Clic',
    'process.deploy.desc': 'Connectez vos applications, zéro configuration complexe. Mise en place instantanée.',
    'process.attack.title': 'Attaque Automatisée',
    'process.attack.desc': 'Des agents IA reproduisent les techniques des meilleurs pentesters et collaborent pour découvrir toutes les failles.',
    'process.exploits.title': 'Exploits Validés',
    'process.exploits.desc': 'Pas de faux positifs, seulement des preuves exploitables et des recommandations prioritaires avec rapports détaillés.',
    
    // Roadmap Details
    'roadmap.main.title': 'Notre',
    'roadmap.main.roadmap': 'Roadmap',
    'roadmap.main.subtitle': 'Innovation continue et amélioration constante de nos capacités de détection.',
    'roadmap.phase1.date': 'Sept - Oct 2025',
    'roadmap.phase1.title': 'Phase de Validation',
    'roadmap.phase1.item1': 'Étude de marché approfondie',
    'roadmap.phase1.item2': 'Interviews avec 100+ acteurs du secteur : DSI, RSSI, CEO, CTO, pentesters',
    'roadmap.phase1.item3': 'Réalisation d\'un POC qui benchmark à 50%',
    'roadmap.phase2.date': 'Nov - Déc 2025',
    'roadmap.phase2.title': 'Phase de Croissance',
    'roadmap.phase2.item1': 'Finalisation du MVP',
    'roadmap.phase2.item2': 'Recherche de LOI (Letters of Intent)',
    'roadmap.phase2.item3': 'Préparation de la levée de fonds',
    'roadmap.phase3.date': 'Q1 2026',
    'roadmap.phase3.title': 'Model Alloy',
    'roadmap.phase3.desc': 'Combinaison dynamique de plusieurs LLMs pour optimiser les performances selon le type de vulnérabilité.',
    'roadmap.completed': 'Terminé',
    
    // Sovereignty Details
    'sovereignty.badge': '🇫🇷 Souveraineté Française & Européenne',
    'sovereignty.main.title': 'Le Fleuret :',
    'sovereignty.main.precision': 'Précision, Intelligence & Excellence',
    'sovereignty.main.subtitle': 'Comme le fleuret incarne la tradition française de l\'escrime par sa précision et son intelligence tactique, Fleuret AI représente l\'excellence de la cybersécurité offensive européenne. Dans le cyber et l\'IA offensive, la maîtrise des données, des infrastructures et de l\'évolution technologique détermine le leadership de demain.',
    'sovereignty.risks.title': 'Risques des LLM Non-Souverains',
    'sovereignty.risks.gdpr': 'Fuites de secrets et données personnelles non maîtrisées (RGPD)',
    'sovereignty.risks.laws': 'Exposition aux lois étrangères (Cloud Act, Patriot Act)',
    'sovereignty.risks.purge': 'Impossibilité de garantir la purge d\'informations sensibles',
    'sovereignty.risks.enrichment': 'Enrichissement des écosystèmes hors-UE avec vos découvertes',
    'sovereignty.approach.title': 'Notre Approche Souveraine',
    'sovereignty.approach.mistral': '🇫🇷 LLM Mistral fine-tuné sur infrastructure française certifiée',
    'sovereignty.approach.hosting': '🇪🇺 Hébergement cloud souverain européen (Scaleway, OVH)',
    'sovereignty.approach.compliance': 'Conformité RGPD, NIS2, DORA garantie et auditable',
    'sovereignty.approach.innovations': 'Innovations et découvertes restent dans l\'écosystème européen',
    'sovereignty.data.title': '🇫🇷 Maîtrise des Données',
    'sovereignty.data.desc': 'Contrôle total sur les données d\'entraînement et leur gouvernance, sans exposition aux lois extraterritoriales américaines (Cloud Act, Patriot Act).',
    'sovereignty.infrastructure.title': '🇪🇺 Infrastructure Souveraine',
    'sovereignty.infrastructure.desc': 'Hébergement certifié EU, audits transparents, garantie de non-accès par des puissances tierces. Solution 100% européenne.',
    'sovereignty.excellence.title': 'Excellence Française 2030',
    'sovereignty.excellence.desc': 'Ambition de dominer le classement européen des IA offensives avec excellence technique française et conformité exemplaire.',
    'sovereignty.ranking.title': 'Vers le Classement de l\'IA Offensive : Horizon 2030',
    'sovereignty.ranking.market': 'Le marché se structure : L\'IA qui trouve le plus vite, au mieux, avec le moins de faux positifs, dominera le secteur. L\'accès aux meilleures données et la maîtrise de l\'infrastructure seront déterminants.',
    'sovereignty.ranking.europe': 'L\'Europe a une carte unique : Fusionner excellence technique (IA/ML, cybersécurité) et gouvernance data pour imposer un leader souverain.',
    'sovereignty.ranking.objective': 'Notre objectif : Être numéro 1 en donnant confiance par la souveraineté, la transparence et la conformité, tout en surpassant la concurrence sur la performance technique.',
    'sovereignty.ranking.advantage': 'L\'avantage compétitif : Posséder, entraîner et améliorer des LLM "made in EU" avec gouvernance ouverte et sécurisée pour attirer grands comptes et institutionnels.',
    
    // Team Details
    'team.main.title': 'L\'Équipe',
    'team.main.subtitle': 'Une combinaison unique d\'expertise en IA, cybersécurité et entrepreneuriat.',
    'team.yanis.name': 'Yanis Grigy',
    'team.yanis.role.main': 'CEO & Co-fondateur',
    'team.yanis.education': 'Télécom Paris, X-HEC Entrepreneur',
    'team.yanis.description': 'Vision stratégique et développement business.',
    'team.pierregabriel.name': 'Pierre-Gabriel Berlureau',
    'team.pierregabriel.role.main': 'CTO & Co-fondateur',
    'team.pierregabriel.education': 'ENS Ulm, MVA',
    'team.pierregabriel.description': 'Architecture IA et développement technique.',
    'team.augustin.name': 'Augustin Ponsin',
    'team.augustin.role.main': 'CPO & Co-fondateur',
    'team.augustin.education': 'Ex-Pentester, EPITA, EFREI, X-HEC',
    'team.augustin.description': 'Expertise pentesting et méthodologie.',
    'team.linkedin': 'LinkedIn',
    
    // Waitlist Page
    'waitlist.back': 'Retour',
    'waitlist.title': 'Rejoignez notre Waitlist',
    'waitlist.subtitle': 'Soyez parmi les premiers à découvrir Fleuret AI',
    'waitlist.name': 'Nom complet',
    'waitlist.email': 'Email professionnel',
    'waitlist.company': 'Entreprise',
    'waitlist.position': 'Poste',
    'waitlist.message': 'Message (optionnel)',
    'waitlist.message.placeholder': 'Parlez-nous de vos besoins en cybersécurité...',
    'waitlist.submit': 'Rejoindre la Waitlist',
    'waitlist.submitting': 'Envoi en cours...',
    'waitlist.success': 'Merci ! Nous vous contacterons bientôt.',
    'waitlist.error': 'Une erreur est survenue. Veuillez réessayer.',
    
    // 404 Page
    'notfound.title': '404',
    'notfound.subtitle': 'Oups ! Page introuvable',
    'notfound.home': 'Retour à l\'accueil',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.partners': 'Partners',
    'nav.waitlist': 'Join our waitlist',
    
    // Hero
    'hero.title': 'Continuous pentesting on server and web, powered by agentic AI.',
    'hero.subtitle': 'From your IP to audit-ready report, continuously, hosted in Europe.',
    'hero.cta.demo': 'See our functional POC',
    'hero.cta.waitlist': 'Join our waitlist',
    
    // Features
    'features.title': 'A Revolutionary Solution',
    'features.subtitle': 'Fleuret combines the latest AI advances to deliver an uncompromising pentesting solution.',
    'features.hours.title': 'Results in Hours',
    'features.hours.desc': 'Get your pentest results in hours instead of weeks.',
    'features.coverage.title': 'Complete Coverage',
    'features.coverage.desc': 'No vulnerability missed thanks to our specialized AI agents working together.',
    'features.continuous.title': '24/7 Continuous Security',
    'features.continuous.desc': 'Automated continuous monitoring and testing for permanent protection.',
    'features.success.title': '72% Success Rate',
    'features.success.desc': 'Performance validated on demanding benchmarks with real exploitation.',
    
    // Benchmark
    'benchmark.title': 'Actionable Reports',
    'benchmark.subtitle': 'Precise and actionable recommendations for each detected vulnerability, with proof of concept and detailed remediation steps.',
    'benchmark.exploitation.title': 'Real exploitation',
    'benchmark.exploitation.desc': 'Validated proof of concepts',
    'benchmark.speed.title': 'Fast execution',
    'benchmark.speed.desc': 'Results in hours',
    'benchmark.validation.title': 'PoC validation',
    'benchmark.validation.desc': 'Automated tests',
    'benchmark.efficiency.title': 'Resource efficiency',
    'benchmark.efficiency.desc': 'Continuous optimization',
    
    // Process
    'process.title': 'How it works',
    'process.subtitle': 'A simple and automated process to secure your infrastructure.',
    'process.step1.title': 'Add your IP',
    'process.step1.desc': 'Simply provide the IP address or domain to test',
    'process.step2.title': 'AI analyzes',
    'process.step2.desc': 'Our AI agents collaborate to identify and exploit vulnerabilities',
    'process.step3.title': 'Get the report',
    'process.step3.desc': 'Receive a detailed report with vulnerabilities and recommendations',
    
    // Problem
    'problem.title': 'The Cybersecurity Challenge',
    'problem.subtitle': 'Companies face critical challenges in IT security.',
    'problem.cost.title': 'High Cost',
    'problem.cost.desc': 'Traditional pentests cost between €10k and €50k per test',
    'problem.time.title': 'Long Time',
    'problem.time.desc': 'Several weeks of waiting to get results',
    'problem.coverage.title': 'Limited Coverage',
    'problem.coverage.desc': 'Manual tests cannot cover all attack surfaces',
    'problem.continuous.title': 'No Continuous Monitoring',
    'problem.continuous.desc': 'Vulnerabilities appear between annual tests',
    
    // Roadmap
    'roadmap.title': 'Our Roadmap',
    'roadmap.subtitle': 'From our current proof of concept to a complete automated pentesting solution.',
    'roadmap.current': 'Current',
    'roadmap.q1': 'Q1 2025',
    'roadmap.q2': 'Q2 2025',
    'roadmap.q3': 'Q3 2025',
    'roadmap.current.title': 'Proof of Concept',
    'roadmap.current.desc': 'AI agent capable of exploiting vulnerabilities on CTFs',
    'roadmap.q1.title': 'Alpha Version',
    'roadmap.q1.desc': 'Testing on real web applications with first pilot customers',
    'roadmap.q2.title': 'Beta Version',
    'roadmap.q2.desc': 'Extended coverage: infrastructure, cloud, APIs with automated reports',
    'roadmap.q3.title': 'Production Version',
    'roadmap.q3.desc': 'Complete solution with continuous testing, CI/CD integrations and compliance',
    
    // Sovereignty
    'sovereignty.title': 'Digital Sovereignty',
    'sovereignty.subtitle': 'A French solution, hosted in Europe, to protect your sensitive data.',
    'sovereignty.hosting.title': 'European Hosting',
    'sovereignty.hosting.desc': 'Your data stays in Europe, in compliance with GDPR',
    'sovereignty.team.title': 'French Team',
    'sovereignty.team.desc': 'Developed by a team of French cybersecurity experts',
    'sovereignty.compliance.title': 'GDPR Compliance',
    'sovereignty.compliance.desc': 'Solution designed to meet European regulatory requirements',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'A team of experts passionate about cybersecurity and AI.',
    'team.augustin.role': 'CEO & Co-founder',
    'team.augustin.bio': 'Former Thales, ENS and MVA graduate. Expert in AI and cybersecurity.',
    'team.pierre.role': 'CTO & Co-founder',
    'team.pierre.bio': 'École Polytechnique and EPITA graduate. Specialist in distributed systems and AI.',
    'team.yanis.role': 'Lead Security Engineer',
    'team.yanis.bio': 'Expert in pentesting and offensive security, multiple CTF awards.',
    
    // Partners
    'partners.title': 'They trust us',
    
    // Footer
    'footer.tagline': 'AI-powered automated pentesting for French digital sovereignty.',
    'footer.contact': 'Contact',
    'footer.program': 'Program',
    'footer.program.hec': 'HEC Launchpad - January 2025',
    'footer.rights': '© 2025 fleuret.ai. All rights reserved.',
    
    // Demo Page
    'demo.back': 'Back',
    'demo.title': 'Interactive Demo',
    'demo.subtitle': 'See our AI in action on a security challenge',
    'demo.description': 'Our agentic AI autonomously analyzes, identifies and exploits vulnerabilities. This demonstration shows the capabilities of our agents on a controlled test environment.',
    'demo.cta': 'Ready to secure your infrastructure?',
    
    // Terminal Demo
    'terminal.ready': 'Autonomous AI Ready',
    'terminal.watch': 'Watch our AI in',
    'terminal.action': 'Action',
    'terminal.intro': 'Discover how our autonomous system analyzes, exploits and secures an Active Directory environment in real time.',
    'terminal.launch': 'Launch Demonstration',
    'terminal.duration': '⚡ Duration: ~2 minutes • 🎯 Real pentest scenario',
    'terminal.title': 'fleuret.ai - Autonomous Pentest',
    'terminal.pause': 'Pause',
    'terminal.play': 'Start',
    'terminal.resume': 'Resume',
    'terminal.replay': 'Replay',
    'terminal.reset': 'Reset',
    'terminal.ready.title': 'Terminal ready',
    'terminal.ready.desc': 'Launch the demonstration to begin',
    
    // Benchmark Details
    'benchmark.title.main': 'Actionable Reports',
    'benchmark.subtitle.main': 'For each detected vulnerability',
    'benchmark.description': 'Beyond simple detection, our AI generates precise and actionable recommendations to fix each identified vulnerability. Each report includes detailed remediation steps, secure code examples and prioritization based on actual risk level.',
    'benchmark.exploitation.label': 'Real exploitation',
    'benchmark.exploitation.description': 'Concrete validation of vulnerabilities through effective exploitation',
    'benchmark.rapidite.label': 'Fast execution',
    'benchmark.rapidite.description': 'Complete analysis and results in hours',
    'benchmark.validation.label': 'PoC validation',
    'benchmark.validation.description': 'Automatic proof of concept for each vulnerability',
    'benchmark.efficacite.label': 'Resource efficiency',
    'benchmark.efficacite.description': 'Intelligent optimization of AI resources',
    
    // Features Details
    'features.main.title': 'A',
    'features.main.complete': 'Complete Solution',
    'features.main.subtitle': 'Reconnaissance, scanning, enumeration, exploitation, post-exploitation and reporting, fully orchestrated by our sovereign AI. Total data control, European compliance, technological leadership.',
    'features.autonomous.title': 'Autonomous Pipeline',
    'features.autonomous.desc': 'From IP entry to deliverable report, without human intervention.',
    'features.mistral.title': 'Sovereign Mistral AI',
    'features.mistral.desc': 'Fine-tuned LLM on certified French infrastructure, guaranteed and auditable GDPR compliance.',
    'features.compliance.title': 'NIS2 & DORA Compliance',
    'features.compliance.desc': 'Priority targeting of European regulatory requirements, anticipation of future standards.',
    'features.reports.title': 'Standard Reports',
    'features.reports.desc': 'Professional format with executive summary and actionable technical evidence.',
    'features.audit.title': 'Continuous Audit',
    'features.audit.desc': 'Recurring scans for permanent monitoring and continuous model improvement.',
    'features.performance.title': 'Record Performance',
    'features.performance.desc': '82% on XBOW benchmark (vs 77% sector), best speed/precision/cost ratio on the market.',
    
    // Problem Details
    'problem.main.title': 'Your Security Team',
    'problem.main.overwhelmed': 'Is Overwhelmed',
    'problem.main.subtitle': 'Your deployments happen at high speed, but your pentests take 2 to 4 weeks, costing time and money.',
    'problem.nis2.title': 'NIS2 Compliance',
    'problem.nis2.desc': 'Comply with European cybersecurity requirements',
    'problem.punctual.title': 'Point-in-Time Tests',
    'problem.punctual.desc': 'Manual pentests only test at a single moment',
    'problem.expensive.title': 'Expensive',
    'problem.expensive.desc': 'Limited budget and human resources',
    'problem.exposure': 'Meanwhile, your systems remain exposed to cyberattacks',
    
    // Process Details
    'process.main.title': 'How it',
    'process.main.works': 'Works',
    'process.main.subtitle': 'A simple process, fully automated from start to finish.',
    'process.deploy.title': '1-Click Deployment',
    'process.deploy.desc': 'Connect your applications, zero complex configuration. Instant setup.',
    'process.attack.title': 'Automated Attack',
    'process.attack.desc': 'AI agents reproduce the techniques of the best pentesters and collaborate to discover all vulnerabilities.',
    'process.exploits.title': 'Validated Exploits',
    'process.exploits.desc': 'No false positives, only actionable evidence and prioritized recommendations with detailed reports.',
    
    // Roadmap Details
    'roadmap.main.title': 'Our',
    'roadmap.main.roadmap': 'Roadmap',
    'roadmap.main.subtitle': 'Continuous innovation and constant improvement of our detection capabilities.',
    'roadmap.phase1.date': 'Sept - Oct 2025',
    'roadmap.phase1.title': 'Validation Phase',
    'roadmap.phase1.item1': 'In-depth market study',
    'roadmap.phase1.item2': 'Interviews with 100+ sector players: CIOs, CISOs, CEOs, CTOs, pentesters',
    'roadmap.phase1.item3': 'POC achievement benchmarking at 50%',
    'roadmap.phase2.date': 'Nov - Dec 2025',
    'roadmap.phase2.title': 'Growth Phase',
    'roadmap.phase2.item1': 'MVP finalization',
    'roadmap.phase2.item2': 'Search for LOI (Letters of Intent)',
    'roadmap.phase2.item3': 'Fundraising preparation',
    'roadmap.phase3.date': 'Q1 2026',
    'roadmap.phase3.title': 'Model Alloy',
    'roadmap.phase3.desc': 'Dynamic combination of multiple LLMs to optimize performance based on vulnerability type.',
    'roadmap.completed': 'Completed',
    
    // Sovereignty Details
    'sovereignty.badge': '🇫🇷 French & European Sovereignty',
    'sovereignty.main.title': 'The Fleuret:',
    'sovereignty.main.precision': 'Precision, Intelligence & Excellence',
    'sovereignty.main.subtitle': 'Like the foil embodies the French tradition of fencing through its precision and tactical intelligence, Fleuret AI represents the excellence of European offensive cybersecurity. In cyber and offensive AI, mastery of data, infrastructure and technological evolution determines tomorrow\'s leadership.',
    'sovereignty.risks.title': 'Risks of Non-Sovereign LLMs',
    'sovereignty.risks.gdpr': 'Uncontrolled leaks of secrets and personal data (GDPR)',
    'sovereignty.risks.laws': 'Exposure to foreign laws (Cloud Act, Patriot Act)',
    'sovereignty.risks.purge': 'Impossibility to guarantee purging of sensitive information',
    'sovereignty.risks.enrichment': 'Enrichment of non-EU ecosystems with your discoveries',
    'sovereignty.approach.title': 'Our Sovereign Approach',
    'sovereignty.approach.mistral': '🇫🇷 Fine-tuned Mistral LLM on certified French infrastructure',
    'sovereignty.approach.hosting': '🇪🇺 European sovereign cloud hosting (Scaleway, OVH)',
    'sovereignty.approach.compliance': 'Guaranteed and auditable GDPR, NIS2, DORA compliance',
    'sovereignty.approach.innovations': 'Innovations and discoveries remain within the European ecosystem',
    'sovereignty.data.title': '🇫🇷 Data Control',
    'sovereignty.data.desc': 'Total control over training data and their governance, without exposure to US extraterritorial laws (Cloud Act, Patriot Act).',
    'sovereignty.infrastructure.title': '🇪🇺 Sovereign Infrastructure',
    'sovereignty.infrastructure.desc': 'EU-certified hosting, transparent audits, guaranteed non-access by third-party powers. 100% European solution.',
    'sovereignty.excellence.title': 'French Excellence 2030',
    'sovereignty.excellence.desc': 'Ambition to dominate the European ranking of offensive AIs with French technical excellence and exemplary compliance.',
    'sovereignty.ranking.title': 'Towards the Offensive AI Ranking: 2030 Horizon',
    'sovereignty.ranking.market': 'The market is structuring: The AI that finds fastest, best, with the fewest false positives, will dominate the sector. Access to the best data and infrastructure control will be decisive.',
    'sovereignty.ranking.europe': 'Europe has a unique card: Merge technical excellence (AI/ML, cybersecurity) and data governance to impose a sovereign leader.',
    'sovereignty.ranking.objective': 'Our objective: Be number 1 by building trust through sovereignty, transparency and compliance, while surpassing the competition on technical performance.',
    'sovereignty.ranking.advantage': 'The competitive advantage: Own, train and improve "made in EU" LLMs with open and secure governance to attract large accounts and institutions.',
    
    // Team Details
    'team.main.title': 'The Team',
    'team.main.subtitle': 'A unique combination of expertise in AI, cybersecurity and entrepreneurship.',
    'team.yanis.name': 'Yanis Grigy',
    'team.yanis.role.main': 'CEO & Co-founder',
    'team.yanis.education': 'Télécom Paris, X-HEC Entrepreneur',
    'team.yanis.description': 'Strategic vision and business development.',
    'team.pierregabriel.name': 'Pierre-Gabriel Berlureau',
    'team.pierregabriel.role.main': 'CTO & Co-founder',
    'team.pierregabriel.education': 'ENS Ulm, MVA',
    'team.pierregabriel.description': 'AI architecture and technical development.',
    'team.augustin.name': 'Augustin Ponsin',
    'team.augustin.role.main': 'CPO & Co-founder',
    'team.augustin.education': 'Ex-Pentester, EPITA, EFREI, X-HEC',
    'team.augustin.description': 'Pentesting expertise and methodology.',
    'team.linkedin': 'LinkedIn',
    
    // Waitlist Page
    'waitlist.back': 'Back',
    'waitlist.title': 'Join our Waitlist',
    'waitlist.subtitle': 'Be among the first to discover Fleuret AI',
    'waitlist.name': 'Full name',
    'waitlist.email': 'Professional email',
    'waitlist.company': 'Company',
    'waitlist.position': 'Position',
    'waitlist.message': 'Message (optional)',
    'waitlist.message.placeholder': 'Tell us about your cybersecurity needs...',
    'waitlist.submit': 'Join the Waitlist',
    'waitlist.submitting': 'Submitting...',
    'waitlist.success': 'Thank you! We will contact you soon.',
    'waitlist.error': 'An error occurred. Please try again.',
    
    // 404 Page
    'notfound.title': '404',
    'notfound.subtitle': 'Oops! Page not found',
    'notfound.home': 'Back to home',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'en' || saved === 'fr') ? saved : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
