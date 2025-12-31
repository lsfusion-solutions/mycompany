---
title: KSeF — najczęstsze pytania i rozwiązywanie problemów
---

#### Nie mogę się zalogować do KSeF — od czego zacząć?

1. Sprawdź, czy firma ma uzupełniony NIP.
2. Sprawdź, czy masz ustawiony domyślny certyfikat lub domyślny token (w zależności od sposobu logowania).
3. Jeśli pojawiają się błędy szyfrowania lub sesji — pobierz certyfikaty publiczne KSeF.

Jeśli logujesz się tokenem:

4. Sprawdź, czy token jest aktywny i ma wymagane uprawnienia.
5. Jeśli token mógł wygasnąć lub został cofnięty — wygeneruj nowy lub ustaw inny jako domyślny.

Zobacz też: [Dostęp i logowanie](dostep-i-logowanie.md).

#### Nie widzę akcji KSeF (np. „Wyślij do KSeF”, „Pobierz status”)

Sprawdź:

1. czy masz uprawnienia do operacji KSeF,
2. czy funkcje KSeF są włączone w Twojej konfiguracji,
3. czy pracujesz na właściwej firmie (podmiocie).

Ważne: lista „Faktury KSeF” nie służy do ręcznego wysyłania faktur — wysyłka pochodzi z formularza faktury w „Fakturowaniu”.

#### Wysłałem fakturę, ale nie mam numeru KSeF

Po wysyłce najpierw pojawia się numer referencyjny. Numer KSeF jest nadawany po pozytywnym przetworzeniu dokumentu — używaj akcji **„Pobierz status”** aż do momentu nadania numeru.

Jeśli numer KSeF nie pojawia się długo:

1. sprawdź, czy status nie wskazuje na odrzucenie (zobacz „szczegóły”),
2. spróbuj pobrać status ponownie po kilku minutach,
3. jeśli problem się powtarza — skontaktuj się z administratorem (może to wymagać analizy logów lub konfiguracji dostępu).

#### Wysyłka kończy się błędem szyfrowania lub sesji

Najczęstsze przyczyny i działania:

1. **Brak certyfikatów publicznych KSeF** → pobierz certyfikaty publiczne.
2. **Brak aktywnej sesji lub sesja wygasła** → otwórz nową sesję (automatycznie przy wysyłce lub ręcznie, jeśli jest dostępna taka akcja).
3. **Brak aktywnego dostępu do KSeF** → zaloguj się ponownie.

Zobacz: [Sesja i szyfrowanie](sesja-i-szyfrowanie.md).

#### Pobieranie faktur nic nie zwraca

Sprawdź:

- czy jesteś zalogowany do KSeF,
- czy wybrałeś poprawny przedział dat,
- czy pobierasz faktury jako sprzedawca czy jako nabywca,
- czy (jeśli filtrujesz po firmie) wybrana jest właściwa firma.

Wskazówka: jeśli pobierasz faktury zakupu, uruchamiaj pobieranie w perspektywie **nabywcy**.

#### Nie mogę utworzyć faktury zakupu z faktury KSeF

1. Upewnij się, że pobrana faktura dotyczy zakupu (Twoja firma jest nabywcą).
2. Sprawdź, czy w Twojej konfiguracji jest dostępna akcja tworzenia faktury zakupu z faktury KSeF.
3. Jeśli akcja jest dostępna, ale dokument nie tworzy się poprawnie — zweryfikuj mapowanie pozycji (np. czy towary mogą być rozpoznane).

Zobacz: [Faktury zakupu z KSeF](faktury-zakupu.md).