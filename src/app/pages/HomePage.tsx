import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Hero } from '../components/Hero';
import { ImpactNumbers } from '../components/ImpactNumbers';
import { Impatto } from '../components/Impatto';
import { Missione } from '../components/Missione';
import { FraternitaIntro } from '../components/FraternitaIntro';
import { Asilo } from '../components/Asilo';
import { ProgettoScuola } from '../components/ProgettoScuola';
import { Progetti } from '../components/Progetti';
import { Credibilita } from '../components/Credibilita';
import { RassegnaStampa } from '../components/RassegnaStampa';
import { Donazione } from '../components/Donazione';
import { Instagram } from '../components/Instagram';

export function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <Impatto />
      <ImpactNumbers />
      <Missione />
      <FraternitaIntro />
      <Asilo />
      <ProgettoScuola />
      <Progetti />
      <Credibilita />
      <RassegnaStampa />
      <Donazione />
      <Instagram />
    </>
  );
}
