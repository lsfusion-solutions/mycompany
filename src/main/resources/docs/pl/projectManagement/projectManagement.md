---
title: Zarządzanie projektami — dokumentacja użytkownika
---

Ta dokumentacja opisuje sposób pracy w sekcji **Projekty** (Zarządzanie projektami): tworzenie i prowadzenie projektów, tworzenie i kontrolę **[zagadnień](tasks.md)**, pracę z **[zespołem i rolami](team-and-roles.md)**, rejestrowanie nakładu pracy przez **[przepracowany czas](time-entries.md)** oraz podstawowe widoki do monitorowania postępów.

## Spis treści

- [Szybki start](#quick-start)
- [Nawigacja](#navigation)
- [Terminy](#terms)

Sekcje:

- [Projekty](projects.md)
- [Zagadnienia](tasks.md)
- [Przepracowany czas](time-entries.md)
- [Karty pracy (Timesheet)](timesheets.md)
- [Zespół i role w projekcie](team-and-roles.md)
- [Raportowanie](reports.md)
- [Ustawienia](settings.md)

Powiązane integracje:

- [Autodesk](../masterdata/autodesk/autodesk.md) — łączenie modeli 3D z Autodesk Platform Services (APS) z projektami.

## Szybki start

Typowy scenariusz „utwórz projekt → utwórz zagadnienia → przypisz wykonawców → rejestruj czas”:

1. Otwórz **„Projekty” → „Operacje” → „Projekty”**.
2. Utwórz projekt i uzupełnij główne pola:
   - typ;
   - nazwę;
   - daty rozpoczęcia i zakończenia (jeśli są znane);
   - status;
   - firmę i menedżera.
3. Przejdź do zagadnień projektu i utwórz zagadnienia dla zespołu.
4. Przypisz wykonawców i terminy.
5. W trakcie pracy rejestruj nakład pracy w **[przepracowanym czasie](time-entries.md)** (bezpośrednio lub przez **[karty pracy](timesheets.md)**).
6. Monitoruj postęp po statusach zagadnień i w razie potrzeby używaj widoków **[Kanban](tasks.md#kanban)** oraz **[wykresu Gantta](tasks.md#gantt-chart)** dostępnych w obrębie listy zagadnień.

## Typowe scenariusze

#### „Rozpocznij projekt od zera”

1. Utwórz projekt i uzupełnij kluczowe pola (typ, nazwa, daty, firma, menedżer).
2. Przygotuj zespół: dodaj uczestników i role lub przypisz zespół do projektu (jeśli w Twojej organizacji używa się zespołów).
3. Utwórz zagadnienia i przypisz wykonawców oraz terminy.
4. Ustal zasady statusów (kto zmienia statusy, kiedy i według jakich kryteriów).
5. Ustal dyscyplinę rejestrowania czasu: zapisuj **[przepracowany czas](time-entries.md)** codziennie lub po zakończeniu pracy.

Szczegóły: zobacz [Projekty](projects.md), [Zagadnienia](tasks.md), [Zespół i role w projekcie](team-and-roles.md), [Przepracowany czas](time-entries.md).

#### „Zarządzaj komunikacją w projekcie”

1. Zapisuj ustalenia i decyzje w komentarzach projektu oraz zagadnień.
2. Przy zmianie terminów i priorytetów zostawiaj wyjaśnienie, aby uczestnicy rozumieli powód.
3. W spornych przypadkach korzystaj z historii zmian zagadnienia.

## Nawigacja

Sekcja **Projekty** zwykle zawiera grupy:

- **„Operacje”** — praca bieżąca (**[projekty](projects.md)**, **[zagadnienia](tasks.md)**, **[przepracowany czas](time-entries.md)**, zmiany). **[Kanban](tasks.md#kanban)** i **[wykres Gantta](tasks.md#gantt-chart)** to widoki dostępne w obrębie listy zagadnień, a nie odrębne pozycje menu. **[Przypisania](team-and-roles.md#assignments)** prowadzi się na karcie projektu.
- **„Procesy”** — **[karty pracy pracownika i przełożonego](timesheets.md)** do wprowadzania i kontroli nakładu pracy według dni.
- **„Raportowanie”** — punkt rozszerzenia dla raportów dotyczących projektów. W konfiguracji podstawowej folder ten zwykle wypełniany jest przez integracje z sąsiednimi modułami (Sprzedaż, Produkcja), a nie samodzielnymi raportami modułu „Projekty”.
- **„Konfiguracja”** — słowniki i reguły: **[typy](settings.md#project-types)** projektów i zagadnień, **[statusy](settings.md#project-statuses)**, **[priorytety](settings.md#priorities-and-tags)**, **[tagi](settings.md#priorities-and-tags)**, **[przepływ pracy](settings.md#workflow)**, role w projekcie i zespoły.

Dokładny zestaw menu i dostępność akcji zależą od konfiguracji oraz uprawnień użytkownika.

## Role użytkowników i uprawnienia

Dokładny zestaw uprawnień zależy od konfiguracji w Twojej organizacji. Typowy podział odpowiedzialności:

- **Menedżer projektu** — odpowiada za daty i status projektu, skład zespołu oraz kontrolę postępu zagadnień.
- **Wykonawca** — pracuje z zagadnieniami: zmienia statusy w ramach dostępnych przejść, dodaje komentarze i rejestruje **[przepracowany czas](time-entries.md)**.
- **Obserwator/zatwierdzający** (jeśli używany) — przegląda projekt i zagadnienia, uczestniczy w dyskusjach i może potwierdzać zakończenie zgodnie z zasadami wewnętrznymi.

Jeśli niektóre akcje nie są dostępne (np. zmiana statusu albo utworzenie wpisu **[przepracowanego czasu](time-entries.md)**), zwykle wynika to z ograniczeń uprawnień lub reguł przepływu pracy.

## Terminy

#### Projekt

**[Projekt](projects.md)** to jednostka planowania: zawiera daty, status, osobę odpowiedzialną (menedżera) oraz łączy powiązane zagadnienia, zespół i nakład pracy.

#### Zagadnienie

**[Zagadnienie](tasks.md)** to jednostka pracy w ramach projektu: co trzeba zrobić, do kiedy oraz jaki jest bieżący status wykonania.

#### Przypisanie

**[Przypisanie](team-and-roles.md#assignments)** łączy uczestnika (pracownika lub zespół) z projektem, wskazując rolę w projekcie oraz okres udziału. Zagadnienie nie ma odrębnego rekordu przypisania — odwołuje się do pojedynczego wykonawcy przez pole „Wykonawca”.

#### Przepracowany czas

**[Przepracowany czas](time-entries.md)** to zapis rzeczywiście poświęconego czasu na pracę (zwykle wg zagadnienia/projektu) do kontroli nakładu i raportowania.

#### Status

Status to stan projektu lub zagadnienia. Zobacz **[statusy projektu](settings.md#project-statuses)** oraz **[statusy zagadnień](settings.md#task-statuses)**.

#### Przepływ pracy

**[Przepływ pracy](settings.md#workflow)** definiuje reguły przejść statusów zagadnień: jakie zmiany są dozwolone, w jakiej kolejności oraz przez kogo.