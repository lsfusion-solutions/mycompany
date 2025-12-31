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