import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  languages = ['english', 'german', 'spanish', 'vietnamese', 'chinese'];
  selectedStep = 0;
  steps = [
    { label: 'XML Hochladen', description: 'Bitte laden Sie die XML-Ergebnis Datei hoch, um fortzufahren.' },
    { label: 'Produktionsprogramm', description: '' },
    { label: 'Materialplanung', description: '' },
    { label: 'Kapazitätsplanung', description: '' },
    { label: 'Beschaffungsplanung', description: '' },
    { label: 'Produktionsplanung', description: '' },
    { label: 'Ergebnis', description: '' }
  ];

  setLanguage(lang: string) {
    // Hier ggf. i18n-Service aufrufen
    console.log('Sprache gewählt:', lang);
  }
}
