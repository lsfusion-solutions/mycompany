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

## Import cennika

Pozycje cennika można zaimportować z pliku zewnętrznego za pomocą konfigurowalnych **typów importu**.

### Typy importu

Otwórz **„Administracja” → „Aplikacja” → „Opcje”** i w bloku **Typy importu cennika** zarządzaj typami importu. Dla każdego typu można określić:

- **Nazwa** — widoczna dla użytkownika przy wyborze typu;
- **Skrypt** — opcjonalny skrypt uruchamiany przez standardową akcję importu;
- **Prompt** — instrukcje wysyłane do GPT na zakładce „Import (GPT)” (wypełniany sensownym wzorcem akcją **Domyślny**).

Na formularzu edycji typu importu można również:

- wskazać dostawców, dla których ma być używany ten typ (zakładka **Dostawcy**) — każdy dostawca może mieć tylko jeden typ importu;
- oznaczyć typ jako **Domyślny** (przełącznik) — jest on używany jako rezerwowy dla dostawców bez przypisanego własnego typu importu.

### Domyślny typ importu

Jeśli dostawca cennika nie ma przypisanego typu importu, system użyje typu oznaczonego jako **Domyślny** na formularzu edycji typu importu. Przycisk **Import** na karcie cennika pojawia się zawsze, gdy dostępny jest typ importu (dostawcy lub domyślny).

### Import z użyciem GPT

Gdy typ importu ma zdefiniowany **Prompt** dla GPT, na cenniku dostępna jest akcja **Import (GPT)**. Wysyła ona:

- załączony plik źródłowy wraz z danymi referencyjnymi (bieżący dostawca, inni dostawcy, towary oraz wcześniej używane nazwy/SKU dostawców) do [OpenAI](../administration/openai.md);
- odczytuje zwrócony JSON i tworzy linie cennika;
- zapisuje plik źródłowy na cenniku.

Domyślny prompt instruuje model, aby w wyniku zawrzeć **każdą** linię z pliku źródłowego, nawet jeśli towaru nie udało się dopasować — w takim przypadku pole `item` pozostaje puste, a `vendorReference`, `vendorName` i `price` są nadal wypełniane. Dzięki temu nie tracisz linii, które wymagają ręcznego dopasowania towaru po imporcie.

## Kopiowanie cennika

Jeśli chcesz szybko utworzyć nowy cennik na podstawie poprzedniego (na przykład dla nowego okresu), użyj kopiowania:

- tworzony jest nowy cennik;
- pola nagłówka i linie są kopiowane;
- następnie możesz zaktualizować okres obowiązywania i dostosować ceny.