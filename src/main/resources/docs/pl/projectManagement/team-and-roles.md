---
title: Zespół i role w projekcie
---

Ta strona opisuje pracę z uczestnikami projektu: zespoły, role i przypisania.

Zaleca się prowadzić zespół i role od pierwszych dni projektu: ułatwia to przypisywanie zagadnień, kontrolę obciążenia oraz raportowanie udziału.

## Zespół

Zespół to osobna lista pracowników, którą można przypisać **do wielu projektów jednocześnie**. Zespoły prowadzone są w **„Projekty” → „Konfiguracja”**.

Jest to wygodne, gdy ta sama grupa pracuje nad różnymi projektami lub nad kilkoma obszarami w organizacji.

Ważne kwestie:

- jeśli dodasz/usuniesz pracownika z zespołu, lista pracowników przypisanych do projektu zmieni się **we wszystkich projektach**, do których przypisano ten zespół;
- jeśli liczy się okres uczestnictwa, wskaż daty udziału w przypisaniu do projektu (zobacz sekcję „Przypisania”).

#### Jak przypisać zespół do projektu

Przypisanie zespołu wykonuje się przez listę **przypisań** w karcie projektu.

1. Otwórz wymagany projekt.
2. Przejdź do sekcji przypisań (lista uczestników projektu).
3. Dodaj nowe przypisanie.
4. W polu **„Pracownik”** wybierz **zespół** (pole przyjmuje zarówno pracownika, jak i zespół; typ uczestnika widoczny jest w kolumnie „Typ”).
5. W razie potrzeby wskaż rolę oraz okres uczestnictwa (daty od/do).
6. Zapisz zmiany.

Po zapisie wszyscy pracownicy należący do wybranego zespołu będą uznani za uczestników projektu (z uwzględnieniem okresu uczestnictwa oraz Twoich uprawnień dostępu).

#### Co się dzieje, gdy zmienia się skład zespołu

Jeśli zespół jest już przypisany do projektu, a Ty zmienisz jego skład (na liście przypisań zespół pozostaje jednym wierszem):

- nowi pracownicy pojawią się na liście uczestników projektu (zakładka **„Pracownicy”** karty projektu);
- usunięci pracownicy nie będą już uznani za uczestników (jeśli nie mają innych przypisań do tego projektu).

Zaleca się uzgadniać zmiany składu zespołu z menedżerem projektu i zapisywać powody w komentarzach projektu lub zagadnień.

## Role w projekcie

Rola w projekcie odzwierciedla funkcję uczestnika (np. menedżer, wykonawca, obserwator — dokładna lista zależy od konfiguracji). Role prowadzone są w **„Projekty” → „Konfiguracja”** i są używane do:

- rozdzielenia odpowiedzialności;
- reguł **[przepływu pracy](settings.md#przepływ-pracy)** (kto może przenieść zagadnienie z jednego statusu do innego);
- analityki udziału pracowników.

Widoczność projektu nie zależy od roli: dostęp daje samo aktywne przypisanie (zobacz **[dostęp do projektów](#dostęp-do-projektów)**).

Zalecenia:

- wcześniej ustal znaczenie ról (co oznacza „wykonawca”, „obserwator” itp.);
- jeśli role wpływają na uprawnienia dostępu, zmieniaj role świadomie i za zgodą.

## Przypisania

Przypisanie łączy **uczestnika** (pracownika lub zespół) z **projektem** i zapisuje warunki udziału. Przypisania prowadzone są na karcie projektu.

Przypisanie zawiera:

- uczestnika (pracownik lub zespół);
- rolę w projekcie;
- okres uczestnictwa (data od / data do — „data do” jest opcjonalna i oznacza bezterminowy udział).

Lista przypisań na karcie projektu ma filtr **„Aktywnie”**, który pokazuje tylko przypisania, których okres uczestnictwa obejmuje bieżącą datę.

Zaleca się utrzymywać przypisania na bieżąco:

- dodawaj uczestników, gdy rozpoczynają pracę;
- zamykaj przypisania (ustaw „datę do”), gdy pracownik przestaje uczestniczyć;
- dopasowuj role w projekcie do faktycznych obowiązków.

> Zagadnienia nie mają własnych rekordów przypisania. Zagadnienie jest powiązane z jednym **wykonawcą** (pracownikiem lub zespołem) przez pole „Przypisane do” w zagadnieniu. Widoczność zagadnienia dla tego użytkownika kontrolowana jest przez przypisanie na poziomie projektu.

## Dostęp do projektów

Domyślnie użytkownik widzi tylko te projekty, do których jest przypisany (bezpośrednio lub jako członek przypisanego zespołu). Dla użytkowników, którzy muszą widzieć wszystko (np. kierownik działu lub administrator), na karcie pracownika dostępna jest flaga **„Dostęp do wszystkich projektów”**. Włączenie tej flagi znosi filtr dostępu opartego o przypisania dla tego użytkownika.

> Użytkownik, który nie ma **żadnego bezpośredniego** przypisania (do żadnego projektu), również widzi wszystkie projekty: filtr oparty o przypisania zaczyna działać po pierwszym przypisaniu, w którym uczestnikiem jest sam pracownik. Udział wyłącznie w składzie przypisanego zespołu nie włącza tego filtru.

## Typowe scenariusze

#### Start projektu

1. Przypisz menedżera projektu.
2. Zbuduj początkowy skład zespołu.
3. Przypisz role (jeśli używane).
4. Utwórz zagadnienia i przypisz wykonawców z zespołu.

#### Dodanie nowego uczestnika

1. Dodaj pracownika do zespołu projektu.
2. Przypisz rolę.
3. Przekaż kontekst: opis projektu, bieżące zagadnienia i zasady statusów.
4. Przypisz zagadnienia i terminy.

#### Zmiana wykonawcy w zagadnieniu

1. Wyjaśnij powód zmiany i dodaj komentarz w zagadnieniu.
2. Przypisz nowego wykonawcę.
3. Sprawdź terminy i zależności.
4. W razie potrzeby dostosuj plan i poinformuj zespół.

## Najczęściej zadawane pytania

#### Dlaczego pracownik nie widzi przypisanego zagadnienia

System nie zabrania przypisania zagadnienia do pracownika bez dostępu do projektu — ale takie zagadnienie nie będzie dla niego widoczne. Powód zwykle jest jednym z poniższych:

- pracownik nie ma dostępu do projektu (brak aktywnego przypisania — bezpośrednio lub jako członek przypisanego zespołu — i nie ma flagi „Dostęp do wszystkich projektów”);
- zagadnienie ukrywają filtry na liście zagadnień.