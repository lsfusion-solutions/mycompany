---
title: Buckety i modele
---

Ta strona opisuje codzienny proces wprowadzania modelu 3D do MyCompany, aby można go było wyświetlić w [Projekcie, Zestawieniu materiałów lub Zamówieniu produkcji](autodesk-viewer.md). Konfiguracja danych uwierzytelniających opisana jest osobno na stronie [Konfiguracja](autodesk-setup.md).

Samodzielna strona Autodesk znajduje się w **Dane podstawowe → Autodesk**. Strona zawiera trzy obszary:

- selektor **Bucket** u góry;
- listę **modeli** (z akcjami przesyłania / konwersji);
- panel **szczegółów** prezentujący **widoki**, **drzewo elementów** oraz przeglądarkę 3D dla wybranego modelu.

## Buckety

**Bucket** to kontener przechowywania w Autodesk Platform Services. Wszystkie pliki źródłowe (Revit, IFC, DWG, NWD, …) znajdują się w jednym lub kilku bucketach.

:::warning
**Klucze bucketów są globalnie unikalne w całym APS, a nie tylko w obrębie Twojego tenanta.** Jeśli spróbujesz utworzyć bucket o nazwie `models` lub `test`, najprawdopodobniej otrzymasz błąd `409 Conflict — Bucket already exists`, ponieważ ktoś gdzieś w APS już posiada ten klucz. Użyj prefiksu charakterystycznego dla tenanta, np. `mycompany-prod-models`.
:::

#### Utworzenie bucketa

1. Otwórz **Dane podstawowe → Autodesk** (lub zakładkę **Obiekty** w formularzu **integracji**).
2. Kliknij **+**, aby dodać nowy wiersz bucketa.
3. Uzupełnij:
   - **Key** — globalnie unikalna nazwa (małe litery, 3–128 znaków, tylko `a-z 0-9 _ - .`);
   - **Policy** — jak długo APS przechowuje plik źródłowy:
     - **transient** — 24 godziny (dla jednorazowych konwersji);
     - **temporary** — 30 dni;
     - **persistent** — przechowywany bezterminowo (dla danych produkcyjnych).
4. Kliknij **Create**. APS zwróci powodzenie (lub błąd, który możesz odczytać z odpowiedzi).

#### Lista istniejących bucketów

Kliknij **Get buckets**. Przycisk wywołuje APS i otwiera odpowiedź (plik JSON) — przydatne, gdy chcesz potwierdzić, co jest aktualnie przygotowane w Twojej aplikacji APS.

#### Usunięcie bucketa

Wybierz wiersz bucketa i kliknij **Delete**. APS usuwa bucket i **wszystko, co się w nim znajduje**. Operacja jest nieodwracalna.

## Modele

**Model** to jeden plik źródłowy przesłany do bucketa. Każdy wiersz modelu śledzi nazwę pliku (klucz), plik binarny, URN przypisany przez APS oraz bieżący status konwersji.

#### Załadowanie modelu (wybór pliku)

1. Wybierz bucket z selektora **Bucket**.
2. Kliknij **Load model**.
3. Wybierz plik z komputera (Revit `.rvt`, IFC `.ifc`, AutoCAD `.dwg`, Navisworks `.nwd` itp.).
4. Pojawi się nowy wiersz modelu z dołączonym plikiem. Plik **nie został jeszcze przesłany do APS** — znajduje się wyłącznie po stronie MyCompany.

W każdej chwili możesz użyć **Open**, aby pobrać plik źródłowy z powrotem z MyCompany.

#### Put — przesłanie do APS

Kliknij **Put** w wierszu modelu. MyCompany następnie:

1. Prosi APS o podpisane adresy URL do przesyłania S3 (po jednym na fragment; duże pliki są dzielone na fragmenty po 50 MB);
2. Przesyła każdy fragment bezpośrednio do S3;
3. Wywołuje APS, aby sfinalizować przesyłanie.

Po zakończeniu akcji pole **URN** zostanie wypełnione. Plik znajduje się teraz w APS i może zostać skonwertowany.

:::note
Obsługiwane są pliki do ok. 10 GB. Przesyłanie korzysta z nowoczesnego podejścia *signed S3* w APS, więc rozmiar ograniczony jest jedynie polityką bucketa w APS oraz Twoją siecią.
:::

#### Transform — konwersja do SVF2

Wybierz **Conversion method** (zobacz poniżej) i kliknij **Transform**. APS rozpoczyna konwersję pliku źródłowego do SVF2 (formatu, który czyta przeglądarka).

Konwersja jest **asynchroniczna** — akcja zwraca wynik natychmiast. Co jakiś czas klikaj **Get status**, aby odświeżyć manifest. Podczas pracy zadania:

- **Transform status** to `inprogress` (lub jedno z `pending`, `running`);
- **Transform progress** to procent / etykieta fazy.

Gdy **Transform status** = `success`, model jest gotowy do wyświetlenia.

#### Conversion method

Używana wyłącznie dla źródeł **IFC** (inne formaty ignorują to pole):

- **v4** — bieżąca rekomendacja Autodesk; odpowiada silnikowi używanemu przez Autodesk Docs dla nowych projektów.
- **v3** — poprzedni silnik IFC; nadal obsługiwany.
- **modern** — starszy, ale szeroko stosowany.
- **legacy** — jeszcze starszy; w trybie utrzymania.

Pozostaw puste, aby użyć domyślnego ustawienia platformy (`modern`). Dla nowej zawartości IFC preferuj **v4**.

## Widoki

**Widok** to jedna renderowalna scena w skonwertowanym modelu — widok 3D, arkusz 2D itp. Jeden plik Revit może wygenerować wiele widoków.

Po pomyślnej konwersji:

1. Wybierz model.
2. W panelu **szczegółów** kliknij **Get** w wierszu Widoki.

MyCompany pobiera listę widoków z APS i wyświetla ich **Nazwę**, **Rolę** (`3d`, `2d`, …) oraz **GUID**. Wybierz ten, który chcesz obejrzeć.

## Elementy i właściwości

Po wybraniu widoku możesz wyodrębnić jego drzewo obiektów (elementy) oraz metadane poszczególnych elementów (właściwości).

#### Pobranie elementów

Kliknij **Get** na pasku narzędzi Elementy. MyCompany pyta APS o drzewo obiektów wybranego widoku, parsuje je do hierarchii i wyświetla po lewej stronie. Każdy element ma:

- numeryczne **ID** (`objectid` z APS);
- **Nazwę** (np. *Wall — Generic 200mm*);
- relację rodzic / dziecko odzwierciedlającą hierarchię pliku źródłowego.

Wybranie elementu w drzewie podświetla odpowiadającą mu geometrię w przeglądarce 3D (i odwrotnie). To samo powiązanie drzewo↔scena działa w formularzach [Projektu / Zestawienia materiałów / Zamówienia produkcji](autodesk-viewer.md), gdy model zostanie powiązany.

#### Pobranie właściwości

Kliknij **Properties** na pasku narzędzi Elementy. MyCompany pobiera pełny zestaw właściwości każdego elementu wybranego widoku i zapisuje je. Właściwości są pogrupowane w **kategorie** (Identity Data, Constraints, Materials, …) i wyświetlane jako drzewo pod każdym elementem.

:::note
Wywołania właściwości mogą trwać dłużej dla dużych modeli. Pierwsze wywołanie po konwersji może zwrócić pustą zawartość, gdy APS nadal przygotowuje dane — odczekaj minutę i kliknij ponownie.
:::

## Powiązanie z towarem

Aby model pojawił się w zakładce **Autodesk** [towaru](../items.md):

1. Otwórz samodzielną stronę **Dane podstawowe → Autodesk**.
2. Wybierz model.
3. Ustaw jego pole **Towar** na wybrany towar.

Powiązanie z towarem jest opcją o najszerszym zasięgu: oprócz pojawienia się w samym formularzu towaru, ten sam model jest automatycznie wyświetlany w **każdym** [zestawieniu materiałów](../../manufacturing/bom.md) i [zamówieniu produkcji](../../manufacturing/orders.md) dla tego towaru — bez konieczności ustawiania osobnego powiązania z zestawieniem materiałów lub zamówieniem. Zobacz: [Przeglądarka w formularzach → W towarze](autodesk-viewer.md#on-an-item).

## Powiązanie z projektem

Aby model pojawił się w zakładce **Autodesk** [projektu](../../projectManagement/projects.md):

1. Otwórz samodzielną stronę **Dane podstawowe → Autodesk**.
2. Wybierz model.
3. Ustaw jego pole **Projekt** na wybrany [projekt](../../projectManagement/projects.md).

Przeglądarka 3D pojawi się w formularzu projektu dla każdego użytkownika z włączonym znacznikiem **Autodesk** w profilu — zobacz: [Przeglądarka w formularzach → W projekcie](autodesk-viewer.md#on-a-project), aby zobaczyć, co użytkownik faktycznie widzi.

## Powiązanie z zestawieniem materiałów

Ustaw pole **[Zestawienie materiałów](../../manufacturing/bom.md)** w modelu, gdy chcesz, aby model był powiązany z jednym konkretnym zestawieniem materiałów (a nie z każdym zestawieniem, które używa tego samego towaru). Jeden model może być jednocześnie powiązany z [projektem](../../projectManagement/projects.md), [zestawieniem materiałów](../../manufacturing/bom.md) i [towarem](../items.md) — formularz pobiera modele dopasowane przez *dowolne* z tych powiązań. Efekt na formularzu opisany jest w [Przeglądarka w formularzach → W zestawieniu materiałów](autodesk-viewer.md#on-a-bill-of-materials).

Gdy otwierane jest [zamówienie produkcji](../../manufacturing/orders.md), MyCompany automatycznie pobiera model powiązany z zestawieniem materiałów tego zamówienia **lub** z towarem tego zamówienia — nie ma osobnego powiązania „Zamówienie produkcji”. Zobacz: [Przeglądarka w formularzach → W zamówieniu produkcji](autodesk-viewer.md#on-a-manufacturing-order).

## Rozwiązywanie problemów

| Objaw | Prawdopodobna przyczyna | Co zrobić |
|---|---|---|
| **401 Unauthorized — *Token is not provided*** (`AUTH-010`) | Brak lub niepoprawne dane uwierzytelniające. | Wklej ponownie Key / Secret. Potwierdź, że aplikacja APS ma włączone właściwe API. |
| **409 Conflict — *Bucket already exists*** | Klucz bucketa jest zajęty globalnie w APS. | Wybierz bardziej unikalny klucz (z prefiksem tenanta). |
| Konwersja nigdy się nie kończy | Plik źródłowy zbyt złożony lub nieobsługiwany. | Sprawdź manifest klikając **Get status**; komunikaty błędów APS pojawiają się w **Transform progress**. |
| Puste Widoki / Elementy | Konwersja zakończyła się powodzeniem, ale wywołanie nastąpiło zanim APS dokończył przygotowywanie metadanych. | Odczekaj 30–60 sekund i kliknij **Get** ponownie. |
| Przeglądarka pokazuje czarne płótno | Token dostępu APS użytkownika wygasł i nie został odnowiony. | Przeładuj formularz. |
| Formularz nie ma zakładki **Autodesk** | Bieżący użytkownik ma wyłączony **Autodesk** w profilu *lub* nic nie zostało jeszcze powiązane. | Zobacz: [Konfiguracja](autodesk-setup.md#3-enable-autodesk-per-user) i powiąż model. |
