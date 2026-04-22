---
title: Towary
---

Słownik **„Towary”** zawiera produkty i usługi, które są używane w pozycjach dokumentów (zamówienia, wydania, faktury, rachunki itp.).

## Produkty i usługi — jaka jest różnica

Towary dzielą się na dwa główne typy:

- **Produkty** — pozycje materialne, które zwykle biorą udział w ewidencji magazynowej.
- **Usługi** — prace i usługi, które nie wymagają składowania i nie tworzą stanów magazynowych.

Podział jest potrzebny, aby:

- poprawnie wykonywać operacje magazynowe (jeśli włączony jest obszar magazynowy);
- przechowywać atrybuty specyficzne dla produktów (np. waga, objętość, kraj pochodzenia — jeśli używane);
- uprościć wybór w dokumentach i analizę.

#### Kiedy utworzyć „produkt”

Utwórz **produkt**, jeśli pozycja:

- jest przyjmowana na magazyn i/lub wydawana z magazynu;
- wymaga kontroli stanów, rezerwacji, partii/numerów seryjnych (jeśli używane);
- ma cechy fizyczne ważne dla logistyki (waga/objętość).

Przykłady: surowce, komponenty, wyroby gotowe, materiały eksploatacyjne.

#### Kiedy utworzyć „usługę”

Utwórz **usługę**, jeśli pozycja:

- jest pracą/usługą i nie jest składowana w magazynie;
- nie powinna tworzyć ruchów magazynowych;
- jest rozliczana w dokumentach jako usługa (jednostką ilości jest „godzina”, „usługa”, „zlecenie”, „zmiana” itp.).

Przykłady: dostawa, montaż, naprawa, konsulting, najem.

## Przed tworzeniem towarów

Zaleca się uzupełnienie z wyprzedzeniem:

- **Jednostki miary** (co najmniej podstawowe);
- **Kategorie**, jeśli planujesz grupowanie towarów.

## Import produktów z pliku z użyciem OpenAI

Jeśli skonfigurowano opis importu produktów, na pasku narzędzi listy towarów dla drzewa kategorii pojawia się działanie **Import (GPT)**. Działanie służy do początkowego uzupełnienia lub rozszerzenia katalogu produktów z pliku dostawcy, arkusza, PDF, obrazu albo innego załączonego pliku, który OpenAI może odczytać.

#### Co trzeba przygotować

- uzupełnić klucz API OpenAI i w razie potrzeby utworzyć konfiguracje GPT dla modelu, rozumowania i dodatkowego promptu w ogólnych ustawieniach integracji;
- otworzyć **Dane podstawowe → Ustawienia** i na karcie **Towary** uzupełnić **Import (GPT) → Prompt**. Użyj **Default**, aby wczytać standardowy opis, a następnie dostosuj go do swoich plików katalogowych, jeśli trzeba;
- sprawdzić, czy jednostki miary mają stabilne ID, ponieważ import nie tworzy nowych jednostek miary;
- sprawdzić istniejące kategorie i produkty w wybranej gałęzi: są one wysyłane do OpenAI jako dane referencyjne, aby można było wykluczyć duplikaty.

#### Jak używać

1. Otwórz **Dane podstawowe → Towary**.
2. Wybierz kategorię, której gałąź ma zostać użyta jako zakres referencyjny do sprawdzania duplikatów.
3. Kliknij **Import (GPT)** i wybierz plik źródłowy. Jeśli skonfigurowano kilka konfiguracji GPT, wybierz tę, której chcesz użyć.
4. W oknie podglądu sprawdź nowo rozpoznane kategorie i produkty. Możesz poprawić pola oraz usunąć wiersze, które nie powinny zostać utworzone.
5. Zatwierdź/zapisz podgląd, aby utworzyć pozostałe kategorie i produkty, albo zamknij/anuluj go, aby odrzucić wynik.

#### Co jest tworzone

- kategorie z nazwą i kategorią nadrzędną;
- produkty z nazwą, kategorią, referencją i jednostką miary.

ID nowych kategorii i produktów są generowane przez system.

#### Ograniczenia i cechy działania

- Działanie jest ukryte, dopóki opis importu jest pusty.
- Istniejące kategorie i produkty nie są aktualizowane; scenariusz tworzy tylko nowe pozycje zwrócone przez OpenAI.
- Nowe jednostki miary nie są tworzone automatycznie. Jeśli OpenAI nie zwróci ID istniejącej jednostki, jednostka produktu może pozostać pusta.
- Dopasowanie kategorii wykorzystuje ID istniejących kategorii albo nazwy kategorii tworzonych w tym samym podglądzie. Jeśli kategorii nie uda się dopasować, system umieści wiersz w kategorii głównej.
- Zawsze sprawdzaj podgląd przed zapisem: rozpoznawanie przez OpenAI zależy od jakości pliku i skonfigurowanego opisu.
- Jeśli nie uzupełniono klucza API OpenAI albo żądanie zakończy się błędem, system pokaże komunikat i niczego nie zaimportuje.

## Lista towarów

Lista zwykle pokazuje:

- **Nazwa**;
- **ID**;
- **Typ** (jeśli używany);
- **Kategoria**;
- **Jednostka miary**.

Jeśli dostępna jest archiwizacja, użyj filtra **„Aktywnie”** / **„Zarchiwizowane”**.

## Karta towaru

Typowe pola:

- **Nazwa**;
- **Typ** (jeśli używany);
- **Pełne imię i nazwisko** (jeśli utrzymywane);
- **Kategoria**;
- **Jednostka miary**;
- **ID** (może być uzupełniane automatycznie);
- **Referencja** (jeśli używana);
- **Opis**;
- **Zarchiwizowane**.

### Ustawienia magazynowe

Jeśli w systemie włączony jest obszar magazynowy, w karcie towaru na zakładce **Magazynowanie** mogą być dostępne dodatkowe parametry:

- **Waga** i **Objętość**;
- **Jednostka SKU** i **Współczynnik** (używane do automatycznego przeliczania i ewidencji stanów bieżącego towaru poprzez inną pozycję bazową). Więcej szczegółów w sekcji [Magazynowe jednostki SKU](../inventory/product-sku.md).

Dla towarów można również skonfigurować współczynniki przeliczeniowe dla pakietów (na zakładce **Jednostki miary**), a na zakładkach **Zakup** i **Sprzedaż** — wybrać domyślne pakiety. Pozwala to na korzystanie z mechanizmu ewidencji opakowań bezpośrednio w dokumentach.

### Zalecenia dotyczące uzupełniania dla produktów

- Upewnij się, że wybrano **Kategorię** i **Jednostkę miary** (np. „szt.”, „kg”, „m”).
- Jeśli konfiguracja zawiera **Wagę**, **Objętość**, **Kraj pochodzenia** — uzupełnij je dla produktów, gdy atrybuty są wykorzystywane w logistyce, znakowaniu lub raportowaniu.

### Zalecenia dotyczące uzupełniania dla usług

- Wybierz jednostkę miary odzwierciedlającą zakres usługi (np. „godzina”, „usługa”, „zlecenie”).
- Wygodnie jest uwzględnić format/skład dostawy w nazwie (np. „Dostawa w mieście”, „Montaż (1 godzina)”), aby usługa była jednoznaczna przy wyborze.

## Komentarze i historia

Jeśli komentarze/historia są włączone w konfiguracji, karta może zawierać zakładkę z komentarzami i/lub historią zmian. Jest to przydatne do zapisywania ustaleń oraz powodów korekt.

## Praktyka utrzymania

- Stosuj spójny styl nazewnictwa dla aktywnych towarów.
- Jeśli towar nie jest już sprzedawany/kupowany, zarchiwizuj go, aby nie pojawiał się przy wyborze w nowych dokumentach.

## Typowe błędy

#### Usługa została utworzona jako produkt

W rezultacie usługa może zacząć zachowywać się jak pozycja magazynowa (np. oczekiwania dotyczące stanów lub niepoprawna logika w dokumentach).

Zalecenie: utwórz poprawny towar jako **usługę**, przełącz procesy na niego i przenieś niepoprawny towar do **Zarchiwizowane**.

#### Produkt został utworzony jako usługa

W rezultacie możesz utracić kontrolę stanów i operacje magazynowe.

Zalecenie: utwórz poprawny towar jako **produkt** i używaj go w dokumentach, w których wymagana jest ewidencja magazynowa.
