---
title: "Integracja z telefonią Zadarma"
---

Moduł integracji z telefonią IP Zadarma pozwala na połączenie Twojej chmurowej centrali PBX z systemem w celu automatyzacji obsługi połączeń, prowadzenia historii komunikacji z klientami oraz odsłuchiwania nagrań rozmów.

## 1. Przygotowanie w panelu Zadarma

Przed przystąpieniem do konfiguracji w systemie, należy wykonać następujące czynności w panelu klienta Zadarma:

1.  **Uzyskanie kluczy API**:
    *   Przejdź do sekcji **Ustawienia -> API i integracje**.
    *   Wygeneruj i skopiuj wartości **Klucz** (Key) oraz **Secret**.
2.  **Konfiguracja powiadomień**:
    *   W tej samej sekcji znajdź pole adresu dla powiadomień (Webhooks).
    *   Wprowadź adres w formacie: `https://<adres_twojego_systemu>/exec/Zadarma.notify`.
    *   Włącz powiadomienia o zdarzeniach, które chcesz śledzić (np. początek połączenia, odebranie, zakończenie).

## 2. Ustawienia połączenia w systemie

Parametry połączenia określa się w sekcji ustawień integracji na karcie **Zadarma**.

Wypełnij następujące pola:
*   **Url** — adres serwera telefonii (domyślnie `https://api.zadarma.com`).
*   **Klucz** — klucz API uzyskany z panelu Zadarma.
*   **Secret** — sekret API uzyskany z panelu Zadarma.

## 3. Konfiguracja PBX i pracowników

Dla poprawnego działania systemu konieczne jest pobranie informacji o numerach wewnętrznych i powiązanie ich z pracownikami.

1.  Na karcie **PBX** kliknij przycisk **Pobierz PBX**.
2.  System pobierze identyfikator PBX oraz listę numerów wewnętrznych z chmury Zadarma.
3.  Dla każdego pobranego numeru wybierz odpowiednią osobę w kolumnie **Pracownik**. Pozwoli to na przypisywanie historii połączeń do konkretnych osób.

## 4. Obsługa połączeń

### Połączenia przychodzące
Po otrzymaniu połączenia system wykonuje szereg automatycznych akcji:
*   **Identyfikacja klienta**: System wyszukuje rekordy powiązane z numerem telefonu.
*   **Kierowanie połączeń**: Jeśli dzwoniący jest przypisany do konkretnego menedżera, system może poinformować centralę PBX o konieczności przekierowania połączenia na numer wewnętrzny tego pracownika.
*   **Rejestracja**: W sekcji połączeń automatycznie tworzony jest rekord zawierający czas, uczestników oraz rezultat rozmowy.

### Połączenia wychodzące
Możesz wykonywać połączenia bezpośrednio z systemu:
1.  Kliknij przycisk połączenia obok numeru telefonu.
2.  System zainicjuje **Callback** (oddzwanianie).
3.  Najpierw zadzwoni Twój telefon (lub aplikacja telefoniczna).
4.  Po odebraniu system połączy Cię z numerem klienta.

### Widget WebRTC
Jeśli funkcja WebRTC jest włączona, możesz wykonywać i odbierać połączenia bezpośrednio w przeglądarce, bez użycia zewnętrznych telefonów czy aplikacji. Widget załaduje się automatycznie, jeśli do Twojego użytkownika przypisany jest numer wewnętrzny, a system pomyślnie pobierze klucz WebRTC z Zadarma.

## 5. Nagrania rozmów

Jeśli Twoja centrala PBX jest skonfigurowana do nagrywania rozmów, możesz ich odsłuchiwać bezpośrednio w systemie:

1.  Na liście połączeń skorzystaj z funkcji pobierania nagrania.
2.  W zależności od ustawień, system odtworzy nagranie zdalnie lub pobierze plik do lokalnego odtworzenia.
3.  Ustawienie **Odtwórz nagranie zdalnie** w konfiguracji Zadarma określa metodę odtwarzania.
