---
title: Cenniki dostawcy
---

## Gdzie znaleźć

Formularze do pracy z cennikami zwykle znajdują się w: **„Zakup” → „Operacje” → „Cenniki”**.

## Cel

**Cennik** przechowuje ceny [dostawcy](../masterdata/partners.md) i służy do:

- przygotowania cen zakupu;
- uzupełniania cen podczas tworzenia [zamówień zakupu](orders.md);
- rejestrowania zmian cen w okresach.

## Struktura cennika

W cenniku zwykle wskazuje się:

- [dostawcę](../masterdata/partners.md);
- okres obowiązywania (data od/do);
- notatkę.

### Linie cennika

W liniach określa się:

- [towar](../masterdata/items.md);
- cenę;
- w razie potrzeby — nazwę/SKU dostawcy (jeśli prowadzisz mapowanie).

## Komentarze i historia

Karta cennika może zawierać strumień komentarzy:

- dodawaj komentarze, aby rejestrować uzgodnienia i źródło cen;
- przeglądaj datę/godzinę i autora komentarzy.

## Statusy cennika

Cennik zwykle przechodzi przez dwa statusy:

1. **Projekt** — wartości cen można zmieniać; lista nowych cenników jest domyślnie filtrowana do tego statusu.
2. **Gotowe** — cennik jest aktywny; ceny stają się źródłem podstawiania w zamówieniach zakupu.

Przejście do „Gotowe” wykonuje się akcją **„Oznacz jako gotowy”** w karcie cennika.

## Import cen z zewnętrznego źródła

Jeśli dla [dostawcy](../masterdata/partners.md) skonfigurowano **typ importu cennika**, w karcie cennika tego dostawcy pojawia się akcja **„Import”**:

1. W ustawieniach utwórz/wybierz typ importu i zdefiniuj jego skrypt (na przykład parser XLSX/CSV lub wywołanie zewnętrznego API).
2. W karcie [dostawcy](../masterdata/partners.md) ustaw ten typ importu.
3. Utwórz cennik dla tego dostawcy i kliknij **„Import”** — skrypt automatycznie wypełni linie.

Akcja pojawia się tylko wtedy, gdy istnieje skrypt importu dla typu dostawcy; dla cennika przeniesionego do „Gotowe” (tylko do odczytu) akcja jest niedostępna.

## Kopiowanie cennika

Jeśli chcesz szybko utworzyć nowy cennik na podstawie poprzedniego (na przykład dla nowego okresu), użyj kopiowania:

- tworzony jest nowy cennik;
- pola nagłówka i linie są kopiowane;
- następnie możesz zaktualizować okres obowiązywania i dostosować ceny.