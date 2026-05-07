---
title: Konfiguracja
---

Ta strona wyjaśnia, jak połączyć MyCompany z **Autodesk Platform Services (APS)**, aby pozostała część integracji ([buckety, modele, przeglądarka](autodesk-buckets-and-models.md)) stała się dostępna.

Konfiguracja to jednorazowa praca administratora. Codzienni użytkownicy **nie** muszą powtarzać tych kroków — wystarczy, że zaznaczą znacznik **Autodesk** w swoim profilu.

## 1. Utwórz aplikację APS

1. Przejdź na <https://aps.autodesk.com/myapps/> i zaloguj się kontem Autodesk.
2. Kliknij **Create Application**.
3. Wybierz nazwę (jest widoczna tylko w konsoli APS) i zaznacz API potrzebne integracji:
   - **Data Management API** — dla bucketów i przesyłania plików źródłowych.
   - **Model Derivative API** — dla konwersji do SVF2 i odczytu drzewa obiektów.

   **Nie** są potrzebne BIM 360, Construction Cloud, Webhooks, Reality Capture ani Design Automation.
4. Integracja używa OAuth 2-legged (server-to-server), więc pole **Callback URL** możesz pozostawić puste (lub wpisać symbol zastępczy, np. `http://localhost`).
5. Zapisz aplikację. APS pokaże **Client ID** i **Client Secret** — pozostaw tę stronę otwartą, w następnym kroku obie wartości będą potrzebne.

#### Region

Integracja domyślnie korzysta z regionu **US** Autodesk. Jeśli wymagana jest rezydencja danych w UE / EMEA, skontaktuj się z deweloperem — wymaga to dodatkowego nagłówka `x-ads-region` przy tworzeniu bucketa oraz zmiany w JavaScript przeglądarki (`api: 'derivativeV2_EU'`). Bieżąca wersja jest skonfigurowana dla US.

## 2. Wprowadź dane uwierzytelniające w MyCompany

1. W MyCompany otwórz formularz konfiguracji **integracji** (lokalizacja zależy od wersji — zwykle w **Administracja → Integracje** lub podobnie).
2. Znajdź panel **Autodesk**.
3. Wklej:
   - **Key** = Client ID z APS;
   - **Secret** = Client Secret z APS.
4. Zapisz.

Dane uwierzytelniające są przechowywane w MyCompany; użytkownicy nie muszą ich znać.

#### Jak pobierane są tokeny

Nic więcej nie musisz robić — każda akcja Autodesk w MyCompany automatycznie żąda świeżego tokena OAuth z APS przed komunikacją z API. Tokeny są ponownie używane, dopóki nie pozostanie 60 sekund do ich wygaśnięcia, po czym pobierany jest nowy.

Jeśli pierwsza akcja zwróci *„Token is not provided”* lub **AUTH-010**, sprawdź dokładnie:

- czy wartości Key / Secret dokładnie odpowiadają tym z konsoli APS;
- czy aplikacja APS ma zaznaczone **Data Management API** i **Model Derivative API**;
- czy żaden firewall nie blokuje wychodzącego ruchu HTTPS do `developer.api.autodesk.com`.

## 3. Włącz Autodesk dla użytkownika

Integracja jest opt-in dla każdego użytkownika.

1. Każdy użytkownik, który potrzebuje przeglądarki, otwiera **Edytuj profil**.
2. Zaznacza znacznik **Autodesk**.
3. Zapisuje i przeładowuje stronę (JavaScript przeglądarki ładuje się dopiero przy pierwszym renderowaniu strony po włączeniu znacznika).

Dopóki znacznik nie jest ustawiony, zakładka **Autodesk** jest ukryta w formularzach Projektu / Zestawienia materiałów / Zamówienia produkcji.

## 4. Weryfikacja

Szybki test poprawności połączenia:

1. Otwórz **Dane podstawowe → Autodesk**.
2. Kliknij **Get buckets** — jeśli dane uwierzytelniające są poprawne, odpowiedź otworzy się jako plik JSON (na tym etapie może to być pusta lista — to normalne).
3. Jeśli pojawi się błąd **401 Unauthorized**: dane uwierzytelniające są nieprawidłowe. Wklej je ponownie.
4. Jeśli pojawi się jakikolwiek inny błąd: zobacz: [Buckety i modele — rozwiązywanie problemów](autodesk-buckets-and-models.md#troubleshooting).

Możesz teraz [utworzyć bucket i przesłać model](autodesk-buckets-and-models.md). Gdy model zostanie skonwertowany i powiązany, użytkownicy końcowi zobaczą go w formularzach [Projektu / Zestawienia materiałów / Zamówienia produkcji](autodesk-viewer.md).
