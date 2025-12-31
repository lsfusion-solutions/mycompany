---
title: KSeF — wprowadzenie i wymagania
---

Ten rozdział dotyczy integracji z **Krajowym Systemem e‑Faktur (KSeF)**: wysyłki faktur sprzedaży, pobierania faktur z KSeF oraz ich wykorzystania w procesach księgowych.

## Dla kogo jest ta instrukcja

- **Księgowość / finanse** — wysyłka faktur sprzedaży, kontrola statusów, pobieranie faktur zakupu.
- **Administrator / osoba wdrażająca** — przygotowanie dostępu (certyfikat / token / podpis), konfiguracja automatyzacji.

## Co jest potrzebne, żeby korzystać z KSeF

1. **Uzupełnione dane firmy** (w szczególności numer NIP) — KSeF identyfikuje podmiot po NIP.
2. **Dostęp do KSeF** dla danej firmy w Twojej organizacji:
   - certyfikat KSeF (do logowania), albo
   - token KSeF (z odpowiednimi uprawnieniami), albo
   - jednorazowe logowanie przez podpisanie żądania (jeśli w Twojej organizacji tak pracujecie).
3. **Uprawnienia w MyCompany** do modułu fakturowania i operacji KSeF.

## Środowisko KSeF

MyCompany pozwala wskazać, z jakim środowiskiem KSeF ma się łączyć.

- Dla środowiska produkcyjnego zwykle nie wpisuje się dodatkowego sufiksu.
- Dla środowisk innych niż produkcyjne (np. testowych) można użyć sufiksu w adresie KSeF.

Jeśli nie masz pewności, jakie środowisko jest wymagane w Twojej organizacji, skontaktuj się z administratorem lub osobą wdrażającą.