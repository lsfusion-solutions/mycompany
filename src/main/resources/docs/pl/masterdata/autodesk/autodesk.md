---
title: Integracja z Autodesk — dokumentacja użytkownika
---

Ta dokumentacja opisuje, jak korzystać z integracji **Autodesk** w MyCompany: jak połączyć się z Autodesk Platform Services (APS), jak przesyłać i konwertować modele 3D oraz jak przeglądać te modele w **[Projektach](../../projectManagement/projects.md)**, **[Zestawieniach materiałów](../../manufacturing/bom.md)** i **[Zamówieniach produkcji](../../manufacturing/orders.md)**.

Integracja jest zbudowana na bazie [Autodesk Platform Services](https://aps.autodesk.com) (dawniej Autodesk Forge) i wykorzystuje APS Viewer do wyświetlania modeli SVF2 w przeglądarce.

## Spis treści

- [Szybki start](#szybki-start)
- [Nawigacja](#nawigacja)
- [Terminy](#terminy)

Sekcje:

- [Konfiguracja](autodesk-setup.md) — utworzenie aplikacji APS i wprowadzenie danych uwierzytelniających.
- [Buckety i modele](autodesk-buckets-and-models.md) — przesyłanie plików źródłowych, konwersja do SVF2, widoki i elementy.
- [Przeglądarka w formularzach](autodesk-viewer.md) — wyświetlanie modelu 3D w projekcie, zestawieniu materiałów lub zamówieniu produkcji.

## Szybki start

Typowy scenariusz *„podłącz APS → prześlij model → zobacz go w projekcie”*:

1. Utwórz aplikację Autodesk Platform Services i skopiuj jej **Client ID** oraz **Client Secret**. Zobacz: [Konfiguracja](autodesk-setup.md).
2. W MyCompany otwórz formularz **integracji**, znajdź panel **Autodesk** i wklej **Klucz** (Client ID) oraz **Sekret** (Client Secret).
3. Włącz Autodesk w swoim profilu użytkownika: otwórz **Edytuj profil**, zaznacz **Autodesk** i zapisz.
4. Utwórz **bucket** (kontener na pliki źródłowe w APS) — zobacz: [Buckety i modele](autodesk-buckets-and-models.md#buckety).
5. Dodaj plik Revit / IFC / DWG / NWD do bucketa przyciskiem **Prześlij model** i kliknij **Wgraj** (przesłanie binarne do APS).
6. Kliknij **Przekonwertuj**, aby skonwertować model do SVF2, i klikaj **Pobierz status**, dopóki nie pojawi się *success*.
7. Na tej samej stronie **Dane podstawowe → Autodesk** pobierz **widoki** i **elementy** modelu (przyciski **Pobierz**) i powiąż model, wypełniając jego pole **Towar**, **[Projekt](../../projectManagement/projects.md)** lub **Bill of Materials**. **[Zamówienia produkcji](../../manufacturing/orders.md)** automatycznie przejmują model swojego zestawienia materiałów lub towaru.
8. Otwórz odpowiedni formularz — przeglądarka 3D wyrenderuje model bezpośrednio na stronie.

## Nawigacja

Funkcjonalność Autodesk pojawia się w trzech miejscach:

- **Dane podstawowe → Autodesk** — samodzielna strona, na której znajdują się buckety, modele, widoki, elementy i właściwości.
- formularz **integracji** (administracja) — gdzie konfigurowane są Client ID / Client Secret oraz lista bucketów.
- Zakładka **Autodesk** w formularzach **[Towaru](../items.md)**, **[Projektu](../../projectManagement/projects.md)**, **[Zestawienia materiałów](../../manufacturing/bom.md)** i **[Zamówienia produkcji](../../manufacturing/orders.md)** — gdzie użytkownicy końcowi faktycznie oglądają model.

Dokładne położenie w menu i widoczność zależą od uprawnień użytkownika oraz od tego, czy użytkownik ma włączoną opcję **Autodesk** w swoim profilu.

## Role użytkowników i uprawnienia

Typowy podział obowiązków (są to zalecenia — sama integracja definiuje jedynie znacznik **Autodesk** dla poszczególnych użytkowników; dostęp do konkretnych akcji jest kontrolowany przez standardowy mechanizm uprawnień lsFusion):

- **Administrator** — konfiguruje aplikację APS, wprowadza dane uwierzytelniające, tworzy buckety, przesyła pliki źródłowe i uruchamia konwersję. Zobacz: [Konfiguracja](autodesk-setup.md) i [Buckety i modele](autodesk-buckets-and-models.md).
- **Inżynier / uczestnik projektu** — łączy istniejący model z projektem / zestawieniem materiałów / towarem na samodzielnej stronie **Dane podstawowe → Autodesk** i przegląda go w osadzonej przeglądarce. Zobacz: [Przeglądarka w formularzach](autodesk-viewer.md).
- **Użytkownik tylko do odczytu** — widzi model w formularzu, ale nie zmienia powiązań ani nie uruchamia konwersji.

Zakładka **Autodesk** jest widoczna tylko przy włączonym znaczniku **Autodesk** w profilu użytkownika. Jeśli zakładka jest widoczna, ale pusta (brak modelu do wyboru), sprawdź: *(a)* czy z obiektem powiązano model, *(b)* czy konwersja zakończyła się powodzeniem (model musi mieć status *success*).

## Terminy

#### Bucket

**[Bucket](autodesk-buckets-and-models.md#buckety)** to kontener APS przechowujący pliki źródłowe. Klucze bucketów są unikalne w obrębie **całego APS** (a nie tylko Twojego tenanta), więc wymagają unikalnego prefiksu.

#### Model

**[Model](autodesk-buckets-and-models.md#modele)** to jeden plik źródłowy (Revit, IFC, DWG, NWD itp.) przesłany do bucketa. Każdy model ma własny status konwersji oraz pochodną SVF2.

#### Widok

**[Widok](autodesk-buckets-and-models.md#widoki)** to jedna renderowalna prezentacja modelu — zwykle scena 3D lub arkusz 2D. Pojedynczy plik Revit może wygenerować wiele widoków.

#### Element

**[Element](autodesk-buckets-and-models.md#elementy-i-właściwości)** to jeden obiekt w widoku — ściana, kolumna, instalacja. Drzewo elementów odzwierciedla hierarchię Revit / IFC.

#### Towar

**[Towar](../items.md)** może mieć powiązany jeden lub więcej modeli Autodesk — zobacz: [Powiązanie z towarem](autodesk-buckets-and-models.md#powiązanie-z-towarem). Jest to najszersze powiązanie: model powiązany z towarem automatycznie pojawia się w formularzu towaru, w każdym zestawieniu materiałów dla tego towaru oraz w każdym zamówieniu produkcji dla tego towaru.

#### Zestawienie materiałów (BoM)

**[Zestawienie materiałów](../../manufacturing/bom.md)** w MyCompany może być powiązane z jednym lub wieloma modelami Autodesk — zobacz: [Powiązanie z zestawieniem materiałów](autodesk-buckets-and-models.md#powiązanie-z-zestawieniem-materiałów) — dzięki czemu odpowiednia geometria 3D jest wyświetlana obok komponentów zestawienia. Modele powiązane z towarem zestawienia również pojawiają się w tym miejscu.

#### Zamówienie produkcji

**[Zamówienie produkcji](../../manufacturing/orders.md)** wyświetla model Autodesk powiązany z jego zestawieniem materiałów **lub** z jego towarem, dzięki czemu użytkownik na hali produkcyjnej widzi geometrię odpowiadającą zamówieniu produkcji — zobacz: [W zamówieniu produkcji](autodesk-viewer.md#w-zamówieniu-produkcji).

#### Projekt

**[Projekt](../../projectManagement/projects.md)** może mieć powiązanych jeden lub więcej modeli Autodesk, oglądanych w jego zakładce Autodesk — zobacz: [W projekcie](autodesk-viewer.md#w-projekcie).
