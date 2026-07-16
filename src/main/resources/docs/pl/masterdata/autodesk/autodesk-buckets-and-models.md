---
title: Buckety i modele
---

Ta strona opisuje codzienny proces wprowadzania modelu 3D do MyCompany, aby można go było wyświetlić w [Projekcie, Zestawieniu materiałów lub Zamówieniu produkcji](autodesk-viewer.md). Konfiguracja danych uwierzytelniających opisana jest osobno na stronie [Konfiguracja](autodesk-setup.md).

Samodzielna strona Autodesk znajduje się w **Dane podstawowe → Autodesk**. Strona zawiera trzy obszary:

- selektor **Bucket** u góry;
- listę **modeli** (z akcjami przesyłania / konwersji) i obok niej listę **widoków** wybranego modelu;
- panel **szczegółów** z **drzewem elementów** oraz przeglądarką 3D.

## Buckety

**Bucket** to kontener przechowywania w Autodesk Platform Services. Wszystkie pliki źródłowe (Revit, IFC, DWG, NWD, …) znajdują się w jednym lub kilku bucketach.

:::warning
**Klucze bucketów są globalnie unikalne w całym APS, a nie tylko w obrębie Twojego tenanta.** Jeśli spróbujesz utworzyć bucket o nazwie `models` lub `test`, najprawdopodobniej otrzymasz błąd `409 Conflict — Bucket already exists`, ponieważ ktoś gdzieś w APS już posiada ten klucz. Użyj prefiksu charakterystycznego dla tenanta, np. `mycompany-prod-models`.
:::

#### Utworzenie bucketa

Buckety są zarządzane na zakładce **Obiekty** formularza **integracji** (samodzielna strona **Dane podstawowe → Autodesk** pozwala jedynie *wybrać* istniejący bucket).

1. Otwórz formularz **integracji** i przejdź na zakładkę **Obiekty**.
2. Kliknij **+**, aby dodać nowy wiersz bucketa (tworzy to jedynie lokalny rekord w MyCompany).
3. Uzupełnij:
   - **Klucz** — globalnie unikalna nazwa (małe litery, 3–128 znaków, tylko `a-z 0-9 _ - .`);
   - **Polityka** — jak długo APS przechowuje plik źródłowy:
     - **transient** — 24 godziny (dla jednorazowych konwersji);
     - **temporary** — 30 dni;
     - **persistent** — przechowywany bezterminowo (dla danych produkcyjnych).
4. Kliknij **Utwórz** — to ta akcja faktycznie tworzy bucket w APS. Odpowiedź APS nie jest wyświetlana; w razie niepowodzenia żądania pojawi się błąd. Aby potwierdzić utworzenie bucketa, użyj **Pobierz buckety**.

#### Lista istniejących bucketów

Kliknij **Pobierz buckety** (na tej samej zakładce **Obiekty**). Przycisk wywołuje APS i otwiera odpowiedź (plik JSON) — przydatne, gdy chcesz potwierdzić, co jest aktualnie przygotowane w Twojej aplikacji APS. Przycisk **nie** wypełnia lokalnej tabeli bucketów: lokalne wiersze i buckety w APS są utrzymywane osobno.

#### Usunięcie bucketa

Na zakładce **Obiekty** są dwa identycznie nazwane elementy **Usuń**: przycisk **Usuń** wewnątrz wiersza tabeli wywołuje APS i usuwa bucket wraz z **całą jego zawartością** — jest to nieodwracalne; przycisk **Usuń** na pasku narzędzi usuwa tylko lokalny wiersz i nie dotyka APS.

## Modele

**Model** to jeden plik źródłowy przesłany do bucketa. Każdy wiersz modelu śledzi nazwę pliku (klucz), plik binarny, URN przypisany przez APS oraz bieżący status konwersji.

#### Załadowanie modelu (wybór pliku)

1. Wybierz bucket z selektora **Bucket**.
2. Kliknij **Prześlij model**.
3. Wybierz plik z komputera (Revit `.rvt`, IFC `.ifc`, AutoCAD `.dwg`, Navisworks `.nwd` itp.).
4. Pojawi się nowy wiersz modelu z dołączonym plikiem. Plik **nie został jeszcze przesłany do APS** — znajduje się wyłącznie po stronie MyCompany.

W każdej chwili możesz użyć **Pobierz**, aby pobrać plik źródłowy z powrotem z MyCompany.

Akcja **Usuń** w wierszu modelu usuwa tylko lokalny rekord MyCompany — nie usuwa już przesłanego obiektu z bucketa APS.

#### Wgraj — przesłanie do APS

Kliknij **Wgraj** w wierszu modelu. MyCompany następnie:

1. Prosi APS o podpisane adresy URL do przesyłania S3 (po jednym na fragment; duże pliki są dzielone na fragmenty po 50 MB);
2. Przesyła każdy fragment bezpośrednio do S3;
3. Wywołuje APS, aby sfinalizować przesyłanie.

Po zakończeniu akcji pole **URN** zostanie wypełnione. Plik znajduje się teraz w APS i może zostać skonwertowany.

:::note
Obsługiwane są pliki do ok. 10 GB. Przesyłanie korzysta z nowoczesnego podejścia *signed S3* w APS, więc rozmiar ograniczony jest jedynie polityką bucketa w APS oraz Twoją siecią.
:::

#### Przekonwertuj — konwersja do SVF2

Wybierz **Metodę konwersji** (zobacz poniżej) i kliknij **Przekonwertuj**. APS rozpoczyna konwersję pliku źródłowego do SVF2 (formatu, który czyta przeglądarka).

Konwersja jest **asynchroniczna** — akcja zwraca wynik natychmiast. Co jakiś czas klikaj **Pobierz status**, aby odświeżyć manifest. Podczas pracy zadania:

- **Status konwersji** to `inprogress` (lub jedno z `pending`, `running`);
- **Postęp konwersji** to procent / etykieta fazy.

Gdy **Status konwersji** = `success`, model jest gotowy do wyświetlenia.

#### Metoda konwersji

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
2. Kliknij **Pobierz** na pasku narzędzi listy **widoków** (obok listy modeli).

MyCompany pobiera listę widoków z APS i wyświetla ich **Nazwę**, **Rolę** (`3d`, `2d`, …) oraz **GUID**. Wybierz widok, z którego elementami i właściwościami chcesz pracować — sama scena 3D zawsze pokazuje domyślny widok modelu.

## Elementy i właściwości

Po wybraniu widoku możesz wyodrębnić jego drzewo obiektów (elementy) oraz metadane poszczególnych elementów (właściwości).

#### Pobieranie elementów

Kliknij **Pobierz** na pasku narzędzi Elementy. MyCompany pyta APS o drzewo obiektów wybranego widoku, parsuje je do hierarchii i wyświetla po lewej stronie. Każdy element ma:

- numeryczne **ID** (`objectid` z APS);
- **Nazwę** (np. *Wall — Generic 200mm*);
- relację rodzic / dziecko odzwierciedlającą hierarchię pliku źródłowego.

Wybranie elementu w drzewie podświetla odpowiadającą mu geometrię w przeglądarce 3D (i odwrotnie). Dopasowanie wykorzystuje zewnętrzne identyfikatory elementów, które są ładowane razem z właściwościami — dlatego uruchom raz **Właściwości** (poniżej) dla danego widoku, aby powiązanie drzewo ↔ scena zadziałało. To samo powiązanie działa następnie w formularzach [Towaru / Projektu / Zestawienia materiałów / Zamówienia produkcji](autodesk-viewer.md), gdy model zostanie powiązany.

#### Pobieranie właściwości

Kliknij **Właściwości** na pasku narzędzi Elementy. MyCompany pobiera pełny zestaw właściwości każdego elementu wybranego widoku i zapisuje je. Właściwości są pogrupowane w **kategorie** (Identity Data, Constraints, Materials, …); aby przejrzeć listę właściwości elementu, otwórz go (edytuj).

Pobranie właściwości zastępuje zapisany zestaw właściwości całego modelu: akcja **Właściwości** najpierw czyści wcześniej wczytane wartości, a następnie importuje wartości aktualnie wybranego widoku. Po przełączeniu na inny widok ponownie uruchom **Właściwości**.

:::note
Wywołania właściwości mogą trwać dłużej dla dużych modeli. Pierwsze wywołanie po konwersji może zwrócić pustą zawartość, gdy APS nadal przygotowuje dane — odczekaj minutę i kliknij ponownie.
:::

## Powiązanie z towarem

Aby model pojawił się w zakładce **Autodesk** [towaru](../items.md):

1. Otwórz samodzielną stronę **Dane podstawowe → Autodesk**.
2. Wybierz model.
3. Ustaw jego pole **Towar** na wybrany towar.

Powiązanie z towarem jest opcją o najszerszym zasięgu: oprócz pojawienia się w samym formularzu towaru, ten sam model jest automatycznie wyświetlany w **każdym** [zestawieniu materiałów](../../manufacturing/bom.md) i [zamówieniu produkcji](../../manufacturing/orders.md) dla tego towaru — bez konieczności ustawiania osobnego powiązania z zestawieniem materiałów lub zamówieniem. Zobacz: [Przeglądarka w formularzach → W towarze](autodesk-viewer.md#w-towarze).

## Powiązanie z projektem

Aby model pojawił się w zakładce **Autodesk** [projektu](../../projectManagement/projects.md):

1. Otwórz samodzielną stronę **Dane podstawowe → Autodesk**.
2. Wybierz model.
3. Ustaw jego pole **Projekt** na wybrany [projekt](../../projectManagement/projects.md).

Przeglądarka 3D pojawi się w formularzu projektu dla każdego użytkownika z włączonym znacznikiem **Autodesk** w profilu — zobacz: [Przeglądarka w formularzach → W projekcie](autodesk-viewer.md#w-projekcie), aby zobaczyć, co użytkownik faktycznie widzi.

## Powiązanie z zestawieniem materiałów

Ustaw pole **[Bill of Materials](../../manufacturing/bom.md)** w modelu, gdy chcesz, aby model był powiązany z jednym konkretnym zestawieniem materiałów (a nie z każdym zestawieniem, które używa tego samego towaru). Jeden model może być jednocześnie powiązany z [projektem](../../projectManagement/projects.md), [zestawieniem materiałów](../../manufacturing/bom.md) i [towarem](../items.md), ale każdy formularz używa własnych powiązań: formularz projektu pokazuje modele powiązane z projektem, formularz towaru — modele powiązane z towarem, zestawienie materiałów — modele powiązane z samym zestawieniem lub z jego towarem, a zamówienie produkcji — modele powiązane z jego zestawieniem lub towarem. Efekt na formularzu opisany jest w [Przeglądarka w formularzach → W zestawieniu materiałów](autodesk-viewer.md#w-zestawieniu-materiałów).

Gdy otwierane jest [zamówienie produkcji](../../manufacturing/orders.md), MyCompany automatycznie pobiera model powiązany z zestawieniem materiałów tego zamówienia **lub** z towarem tego zamówienia — nie ma osobnego powiązania „Zamówienie produkcji”. Zobacz: [Przeglądarka w formularzach → W zamówieniu produkcji](autodesk-viewer.md#w-zamówieniu-produkcji).

## Rozwiązywanie problemów

| Objaw | Prawdopodobna przyczyna | Co zrobić |
|---|---|---|
| **401 Unauthorized — *Token is not provided*** (`AUTH-010`) | Brak lub niepoprawne dane uwierzytelniające. | Wklej ponownie Klucz / Sekret. Potwierdź, że aplikacja APS ma włączone właściwe API. |
| **409 Conflict — *Bucket already exists*** | Klucz bucketa jest zajęty globalnie w APS. | Wybierz bardziej unikalny klucz (z prefiksem tenanta). |
| Konwersja nigdy się nie kończy | Plik źródłowy zbyt złożony lub nieobsługiwany. | Kliknij **Pobierz status** — formularz pokazuje ogólny status i postęp manifestu (**Status konwersji** / **Postęp konwersji**). Szczegółowy błąd APS administrator sprawdza przez API APS. |
| Puste Widoki / Elementy | Konwersja zakończyła się powodzeniem, ale wywołanie nastąpiło zanim APS dokończył przygotowywanie metadanych. | Odczekaj 30–60 sekund i kliknij **Pobierz** ponownie. |
| Przeglądarka pokazuje czarne płótno | Token dostępu APS użytkownika wygasł i nie został odnowiony. | Przeładuj formularz. |
| Formularz nie ma zakładki **Autodesk** | Bieżący użytkownik ma wyłączony **Autodesk** w profilu. | Zobacz: [Konfiguracja](autodesk-setup.md#3-włącz-autodesk-dla-użytkownika). |
| Zakładka **Autodesk** jest pusta (brak modelu do wyboru) | Nic nie zostało jeszcze powiązane z obiektem lub konwersja się nie zakończyła. | Powiąż model i poczekaj, aż **Status konwersji** = `success`. |
