---
title: Rejestracja czasu
---

Sekcja „Rejestracja czasu” służy do zapisywania oznaczeń czasu pracy pracowników: **Check In** oraz **Check Out**. W zależności od ustawień mogą być używane geolokacja i zdjęcie.

## Metody Check In

### Rejestracja czasu na urządzeniu mobilnym

Pracownik zapisuje oznaczenia przez UI mobilne:

- **„Check In”** — rozpoczęcie czasu pracy;
- **„Check Out”** — zakończenie czasu pracy.

Jeśli włączona jest kontrola geolokacji, zapisywane są współrzędne (szerokość i długość). W niektórych organizacjach może być dozwolona **rejestracja czasu bez geolokacji**.

Zalecenia:

- przed rejestracją upewnij się, że na urządzeniu są włączone usługi lokalizacji;
- przy słabym sygnale GPS oznaczenie może być niedostępne lub wymagać ponownej próby.

### Kiosk rejestracji czasu

Kiosk jest używany, gdy wygodniej jest rejestrować czas na miejscu (np. przy wejściu do biura lub punkcie kontrolnym).

Typowy scenariusz:

1. Pracownik dotyka/skanuje **identyfikator**.
2. System identyfikuje pracownika.
3. W zależności od aktualnego stanu zapisuje **„Check In”** lub **„Check Out”**.
4. Jeśli skonfigurowano, może zostać wykonane zdjęcie.

Jeśli pracownik nie zostanie rozpoznany, wyświetlany jest komunikat **„Pracownika nie znaleziono”**.

## Częste sytuacje

### Nie można zarejestrować oznaczenia z powodu geolokacji

Możliwe przyczyny:

- geolokacja jest wyłączona na urządzeniu;
- aplikacja nie ma dostępu do geolokacji;
- rejestracja czasu bez geolokacji jest zabroniona w ustawieniach organizacji.

### Pracownika nie ma na liście kiosku

Sprawdź:

- poprawność identyfikatora (kod kreskowy/numer);
- czy pracownik jest utworzony w systemie;
- uprawnienia do rejestracji czasu.