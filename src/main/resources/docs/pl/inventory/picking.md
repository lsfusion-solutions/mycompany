---
title: Zadania kompletacyjne
---

Zadania kompletacyjne służą do organizacji kompletacji w [lokalizacji](locations.md) podczas realizacji [wydania](shipments.md).

## Ogólna logika

1. Dla [wydania](shipments.md) tworzone są zadania kompletacyjne.
2. Pracownik magazynu wykonuje kompletację (często przez UI mobilne):
   - skanuje miejsce składowania/towar (jeśli włączone);
   - wprowadza faktycznie skompletowaną ilość.
3. Zakończone zadania aktualizują dane [wydania](shipments.md).

## UI mobilne

W formularzu mobilnym zwykle dostępne są:

- lista zadań;
- skanowanie kodów kreskowych;
- potwierdzanie kompletacji.