---
title: KSeF — faktury ustrukturyzowane
---

Ten rozdział opisuje obsługę **Krajowego Systemu e‑Faktur (KSeF)** w MyCompany: przygotowanie dostępu, wysyłkę faktur sprzedaży do KSeF, kontrolę statusów, pobieranie faktur z KSeF oraz utworzenie na ich podstawie faktur zakupu.

Ważne:

- Główny mechanizm wysyłki (wyładunku) faktur do KSeF jest powiązany z formularzem **faktury** w module **„Fakturowanie”**.
- Lista/sekcja **„Faktury KSeF”** służy przede wszystkim do podglądu faktur ustrukturyzowanych, pobierania ich z KSeF oraz kontroli statusów; nie jest przeznaczona do ręcznego wprowadzania danych i wysyłania faktur.

## Jak zacząć (najkrótsza ścieżka)

1. Sprawdź wymagania i dane firmy (w szczególności NIP): [Wprowadzenie i wymagania](wprowadzenie.md).
2. Skonfiguruj i wykonaj logowanie (podpis / certyfikat / token): [Dostęp i logowanie](dostep-i-logowanie.md).
3. Wyślij fakturę sprzedaży z modułu „Fakturowanie” i monitoruj status: [Wysyłka faktur](wysylka-faktur.md).
4. Pobieraj faktury z KSeF do rejestru „Faktury KSeF”: [Pobieranie faktur](pobieranie-faktur.md).

## Spis treści

- [Wprowadzenie i wymagania](wprowadzenie.md) — kto korzysta, co jest potrzebne, wybór środowiska.
- [Dostęp i logowanie (podpis / certyfikat / token)](dostep-i-logowanie.md) — trzy warianty logowania i zasady bezpieczeństwa.
- [Szyfrowanie i sesja interaktywna](sesja-i-szyfrowanie.md) — kiedy pobierać certyfikaty publiczne i jak rozumieć sesję wysyłki.
- [Wysyłka faktur sprzedaży do KSeF i statusy](wysylka-faktur.md) — wysyłka z formularza faktury, numer referencyjny, numer KSeF, kontrola statusów.
- [Pobieranie faktur z KSeF](pobieranie-faktur.md) — pobieranie po przedziale dat jako sprzedawca lub nabywca.
- [Faktury zakupu na podstawie faktur z KSeF](faktury-zakupu.md) — utworzenie faktury zakupu w systemie i kontrola danych.
- [Automatyzacja (harmonogram)](automatyzacja.md) — cykliczne odświeżanie dostępu i pobieranie faktur.
- [Najczęstsze pytania i rozwiązywanie problemów](rozwiazywanie-problemow.md) — checklisty i typowe błędy.