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

#### Faktura KSeF nie powiązała się automatycznie z istniejącą fakturą zakupu

Najpierw sprawdź, czy w **Administracja → Integracja → KSeF** jest włączona opcja **„Powiąż automatycznie faktury KSeF z fakturami zakupu po numerze”**. Bez włączonej opcji system nie próbuje samodzielnie powiązać dokumentów — należy wtedy użyć powiązania ręcznego.

Gdy opcja jest włączona, automatyczne powiązanie wymaga zgodności trzech pól: **numer dokumentu dostawcy** (`vendorReference`) — lub, gdy jest pusty, własny **numer** faktury zakupu (`number`) — z numerem faktury KSeF (`P_2`), **dostawca** z `Podmiotem 1` i **firma** z `Podmiotem 2`.

Sprawdź:

1. czy numer dokumentu dostawcy na fakturze zakupu został wpisany dokładnie tak samo, jak numer w KSeF (np. bez dodatkowych spacji, prefiksów). Jeżeli to pole jest puste, system spróbuje dopasować po własnym numerze faktury zakupu — warto sprawdzić, czy to nie ten numer przypadkowo pasuje do innego dokumentu,
2. czy dostawca z KSeF (`Podmiot 1`) jest tym samym partnerem co dostawca na fakturze zakupu (a nie inną kartoteką tego samego kontrahenta),
3. czy firma na fakturze zakupu odpowiada `Podmiotowi 2` z KSeF.

Powiązanie jest sprawdzane przy każdej zmianie tych pól — możesz po prostu poprawić dane na fakturze zakupu i zapisać, system sam dociągnie powiązanie. Jeżeli nie chcesz czekać, użyj akcji **„Powiąż z fakturą zakupu”** lub **„Powiąż fakturę”**.

Jeżeli któreś z pól się różni, popraw je na fakturze zakupu — powiązanie zostanie wykonane automatycznie. Alternatywnie powiąż dokumenty ręcznie z poziomu listy „Faktury KSeF” (akcja **„Powiąż z fakturą zakupu”**) lub z karty faktury zakupu (akcja **„Powiąż fakturę”** w sekcji „KSeF”).

Zobacz: [Faktury zakupu z KSeF — ręczne powiązanie](faktury-zakupu.md#ręczne-powiązanie-i-zmiana-powiązania).

#### Faktura KSeF powiązała się z niewłaściwą fakturą zakupu

Otwórz fakturę zakupu, do której podpięła się faktura KSeF, i w sekcji **„KSeF”** użyj akcji **„Odepnij fakturę”**. Następnie, jeżeli trzeba, powiąż fakturę KSeF z właściwym dokumentem (akcja **„Powiąż z fakturą zakupu”** z zakładki „KSeF” na liście faktur zakupu albo **„Powiąż fakturę”** z karty właściwej faktury zakupu).