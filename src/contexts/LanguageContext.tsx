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
