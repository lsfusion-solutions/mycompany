---
title: Rejestracja czasu
---

Funkcja **Rejestracja czasu** służy do zapisywania oznaczeń czasu pracy pracowników:

- **Check In** — rozpoczęcie czasu pracy
- **Check Out** — zakończenie czasu pracy

Każda rejestracja tworzy/aktualizuje rekord **Rejestracji czasu**. W zależności od użytej metody, system może również zapisywać **geolokację** (szerokość/długość geograficzną) oraz **zdjęcia**.

## Co jest zapisywane

Dla każdego rekordu rejestracji czasu system przechowuje:

- **Pracownik** — ustawiany automatycznie na aktualnie zalogowanego pracownika przy tworzeniu rekordu.
- **Data i godzina Check In** — wymagane.
- **Data i godzina Check Out** — opcjonalne do momentu, aż pracownik wykona Check Out.
- **Przepracowane godziny** — obliczane jako różnica między Check In i Check Out.
- **Geolokacja Check In / Check Out** — wartości szerokości i długości (jeśli dostępne).
- **Zdjęcia Check In / Check Out** — zapisywane przy użyciu kiosku (jeśli urządzenie/kamera są skonfigurowane).

## Główne zasady (jak system decyduje, co zrobić)

- System bierze pod uwagę **ostatni rekord rejestracji czasu** pracownika.
- Jeżeli ostatni rekord **nie ma jeszcze czasu Check Out**, traktowany jest jako **otwarty**.
  - W takim przypadku następna rejestracja będzie **Check Out**.
- Jeżeli **nie ma otwartego** rekordu, następna rejestracja będzie **Check In**.

## Metody Check In

### Rejestracja czasu na urządzeniu mobilnym

Pracownik rejestruje oznaczenia przez mobilny interfejs (**Rejestracja czasu** — dashboard).

Formularz pokazuje:

- duże przyciski **Start** (Check In) / **Stop** (Check Out);
- bieżący stan (otwarty/zamknięty) na podstawie ostatniego rekordu;
- listę ostatnich rekordów rejestracji dla aktualnego użytkownika (od najnowszego Check In);
- sumy dla **Tego tygodnia** i **Tego miesiąca**.

### Wymóg geolokacji (mobile)

Na urządzeniu mobilnym przyciski Check In/Check Out mogą być zablokowane, gdy geolokacja nie jest dostępna.

- Jeżeli **nie są dostępne wartości szerokości/długości**, przyciski **Start**/**Stop** są wyłączone.
- Wyjątek: jeżeli pracownik ma uprawnienie do rejestrowania czasu **bez geolokacji** (patrz „Ustawienia i uprawnienia”).

Blok geolokacji pokazuje również:

- aktualne wartości **szerokości** i **długości**;
- komunikat **błędu** (jeżeli klient nie może pobrać pozycji);
- kontrolkę do wymuszenia pobrania bieżącej pozycji urządzenia.

Uwagi:

- formularz mobilny odświeża się automatycznie (okresowo), dzięki czemu „przepracowany czas od Check In” jest aktualizowany.

### Co się dzieje przy Check In (mobile)

Gdy pracownik kliknie **Start**:

1. Tworzony jest nowy rekord rejestracji czasu.
2. **Check In** ustawiany jest na bieżący czas.
3. Jeżeli są dostępne, zapisywane są współrzędne **szerokości/długości** dla Check In.
4. Formularz przechodzi do nowo utworzonego rekordu na liście.

### Co się dzieje przy Check Out (mobile)

Gdy pracownik kliknie **Stop**:

1. System znajduje **ostatni** rekord rejestracji czasu pracownika.
2. **Check Out** ustawiany jest na bieżący czas.
3. Jeżeli są dostępne, zapisywane są współrzędne **szerokości/długości** dla Check Out.

Akcja **Stop** wymaga potwierdzenia.

Zalecenia:

- przed rejestracją upewnij się, że na urządzeniu są włączone usługi lokalizacji;
- przy słabym sygnale GPS oznaczenie może być niedostępne lub wymagać ponownej próby.

### Kiosk rejestracji czasu

Kiosk jest używany, gdy wygodniej jest rejestrować czas na miejscu (np. przy wejściu do biura lub punkcie kontrolnym).

Typowy scenariusz:

1. Pracownik skanuje **identyfikator / kod kreskowy**.
2. System dekoduje zeskanowaną wartość i próbuje dopasować ją do pracownika.
3. W zależności od aktualnego stanu pracownika zapisuje **Check In** lub **Check Out**.
4. Zapisywane jest **zdjęcie** (jeżeli kiosk/urządzenie obsługuje wykonanie zdjęcia).

Kiosk używa okna potwierdzenia z informacją o pracowniku i dużym komunikatem:

- **Check In** (zielone)
- **Check Out** (czerwone)

Jeśli pracownik nie zostanie rozpoznany, wyświetlany jest komunikat **„Pracownika nie znaleziono”**.

### Specyfika kiosku

- Kiosk blokuje ponowne przetworzenie tej samej zeskanowanej wartości w krótkim oknie czasu (aby uniknąć podwójnych skanów).
- Kiosk może wyświetlać listę pracowników, którzy są aktualnie **zalogowani (checked in) w pobliżu** (na podstawie porównania bieżących współrzędnych kiosku z zapisanymi współrzędnymi Check In).

## Ustawienia i uprawnienia

### Rejestracja czasu bez geolokacji

Istnieje ustawienie na poziomie pracownika **Rejestracja czasu bez geolokacji**.

- Jeżeli jest włączone dla pracownika, może on korzystać z rejestracji mobilnej nawet wtedy, gdy system nie może pobrać szerokości/długości.
- Jeżeli jest wyłączone, przyciski mobilne **Start/Stop** wymagają poprawnej geolokacji.

Opcja jest dostępna na karcie pracownika w sekcji **Rejestracja czasu**.

## Podgląd i edycja rejestracji (back office)

Formularze do pracy z rekordami rejestracji czasu:

- **Rejestracja czasu** — podgląd pojedynczego rekordu (w tym pól geolokacji i zdjęć, jeżeli są).
- **Rejestracje czasu** — lista rekordów z filtrami:
  - **Otwarte** (brak Check Out)
  - **Zamknięte** (wykonany Check Out)

W zależności od uprawnień, użytkownicy mogą ręcznie tworzyć/edytować/usuwać rekordy w back office (np. do korekt).

## Częste sytuacje

### Nie można zarejestrować oznaczenia z powodu geolokacji

Możliwe przyczyny:

- geolokacja jest wyłączona na urządzeniu;
- aplikacja nie ma dostępu do geolokacji;
- pracownik nie ma uprawnienia do rejestrowania czasu bez geolokacji.

Co zrobić:

- włącz usługi lokalizacji na urządzeniu;
- przyznaj aplikacji uprawnienia do geolokacji;
- jeśli organizacja na to pozwala, poproś administratora o włączenie opcji **Rejestracja czasu bez geolokacji** dla pracownika.

### Przepracowane godziny nie są wyświetlane / wyglądają niepoprawnie

Przepracowane godziny są obliczane na podstawie czasu **Check In** i **Check Out**.

Sprawdź:

- czy pracownik wykonał Check Out (w przeciwnym razie rekord jest „otwarty”);
- czy czas na urządzeniu jest poprawny;
- jeśli wprowadzono korekty ręcznie, zweryfikuj daty i godziny Check In/Check Out.

### Pracownika nie ma na liście kiosku

Sprawdź:

- poprawność identyfikatora (kod kreskowy/numer);
- czy pracownik jest utworzony w systemie;
- uprawnienia do rejestracji czasu.

Jeżeli kiosk pokazuje listę zalogowanych w pobliżu, sprawdź również:

- czy geolokacja kiosku jest dostępna;
- czy Check In pracownika został zapisany razem z geolokacją.