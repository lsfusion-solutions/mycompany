---
title: Ustawienia magazynowania
---

## Gdzie znaleźć

Otwórz **„Magazynowanie” → „Konfiguracja” → „Ustawienia”**.

## Co zwykle jest konfigurowane

- typy [przyjęć](receipts.md) i [wydań](shipments.md);
- użycie [przemieszczeń](transfers.md) (typ [wydania](shipments.md) z flagą „Przemieszczanie”);
- statusy dokumentów i dostępność akcji;
- reguły rezerwacji;
- użycie [partii i pakietów](lots-and-packages.md);
- wydruki.

## Typy przyjęć

Ustawienia zawierają katalog **typów przyjęć**. Typ przyjęcia określa, jak użytkownicy pracują z dokumentem.

Typ przyjęcia zwykle definiuje:

- **Numeracja** — jak generowany jest numer;
- **Domyślna lokalizacja** — jaka [lokalizacja](locations.md) jest ustawiana w nowych dokumentach;
- **Maksymalna ilość** — górny limit dla pola „Zaplanowana ilość” w pozycjach.

Jeżeli w systemie jest dokładnie jeden typ przyjęcia, może on być podstawiany automatycznie.

## Typy wydań

Ustawienia zawierają katalog **typów wydań**.

Typ wydania zwykle definiuje:

- **Numeracja**;
- **Domyślna lokalizacja (skąd)**;
- **Domyślna lokalizacja (dokąd)** (istotne dla przemieszczeń);
- flaga **„Przemieszczanie”** — włącza tryb „lokalizacja źródłowa → lokalizacja docelowa”;
- **Maksymalna ilość** — górny limit dla pola „Zaplanowana ilość” w pozycjach.

Walidacja:

- dla przemieszczeń, lokalizacja źródłowa i docelowa nie mogą być takie same.

## Rekomendowana kolejność konfiguracji

1. Skonfiguruj [lokalizacje](locations.md).
2. Skonfiguruj typy dokumentów ([przyjęcia](receipts.md)/[wydania](shipments.md)/[przemieszczenia](transfers.md)).
3. Skonfiguruj statusy i reguły przejść.
4. Włącz/skonfiguruj [partie i pakiety](lots-and-packages.md) (jeśli potrzebne).
5. Skonfiguruj [raporty](reports-and-ledgers.md) i prawa dostępu.