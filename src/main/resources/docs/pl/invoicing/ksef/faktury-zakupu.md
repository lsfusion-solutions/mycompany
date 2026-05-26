---
title: KSeF — faktury zakupu na podstawie faktur z KSeF
---

Jeśli pobrana faktura dotyczy zakupu (Twoja firma jest nabywcą), MyCompany może pomóc utworzyć na jej podstawie **fakturę zakupu** w systemie.

To rozwiązanie jest wygodne, gdy chcesz:

- szybko przenieść dane z faktury ustrukturyzowanej do rozliczeń,
- mieć w systemie dokument zakupowy do płatności, długu i raportowania,
- zachować powiązanie audytowe z numerem KSeF.

## Co warto wiedzieć

- System tworzy fakturę zakupu na podstawie danych z faktury KSeF.
- Pozycje mogą być mapowane na towary w systemie (np. po kodzie kreskowym), ale jeśli towar nie zostanie rozpoznany, może być wymagane uzupełnienie ręczne.
- Na karcie faktury zakupu mogą być widoczne informacje związane z KSeF (numer referencyjny, status, numer KSeF) — ułatwia to kontrolę i audyt.
- Faktura KSeF może być **powiązana z istniejącą fakturą zakupu** — automatycznie podczas pobierania lub ręcznie przez użytkownika.

Ważne: utworzenie faktury zakupu nie zmienia danych w KSeF. Jest to „przeniesienie” treści faktury ustrukturyzowanej do dokumentu zakupowego w Twoim systemie.

## Automatyczne powiązanie po numerze

Automatyczne powiązanie faktur KSeF z fakturami zakupu jest **opcjonalne** i włącza je administrator globalnie dla całego systemu.

### Włączenie opcji

Otwórz **Administracja → Integracja → KSeF** i zaznacz opcję **„Powiąż automatycznie faktury KSeF z fakturami zakupu po numerze”** (w sekcji nagłówkowej KSeF). Opcja działa globalnie — wpływa na wszystkie firmy i wszystkich użytkowników. Gdy jest wyłączona, faktura KSeF i faktura zakupu pozostają niepowiązane, a użytkownik musi powiązać je ręcznie (zobacz: [Ręczne powiązanie](#ręczne-powiązanie-i-zmiana-powiązania)).

### Kiedy następuje powiązanie

Kiedy opcja jest włączona, system sam dopasowuje dokumenty w dwóch sytuacjach:

1. **Po pobraniu faktury z KSeF** — gdy dla pobranej faktury KSeF znajdzie istniejącą fakturę zakupu o zgodnych polach (zob. niżej), od razu je powiąże.
2. **Po zapisaniu/edycji faktury zakupu** — gdy zmienisz na fakturze zakupu numer dokumentu dostawcy, własny numer, dostawcę lub firmę i powstanie zgodność z wcześniej pobraną fakturą KSeF, system również wykona powiązanie automatycznie.

### Warunek dopasowania

Powiązanie następuje, gdy zgadzają się wszystkie poniższe pola:

- **numer faktury** — numer faktury KSeF (`P_2`) jest równy polu „Numer dokumentu dostawcy” (`vendorReference`) na fakturze zakupu, a jeżeli to pole jest puste — własnemu numerowi faktury zakupu (`number`),
- **dostawca** — partner na fakturze zakupu jest tym samym podmiotem, co `Podmiot 1` (sprzedawca) na fakturze KSeF,
- **firma** — firma na fakturze zakupu jest tym samym podmiotem, co `Podmiot 2` (nabywca) na fakturze KSeF.

Po powiązaniu na karcie faktury zakupu w sekcji **„KSeF”** zobaczysz referencję, status, numer KSeF i przycisk do podglądu faktury ustrukturyzowanej.

## Typowy przebieg

1. Pobierz faktury z KSeF (zobacz: [Pobieranie faktur z KSeF](pobieranie-faktur.md)).
2. Na liście **„Faktury KSeF”** wybierz fakturę dotyczącą zakupu.
3. W zależności od sytuacji:
   - jeśli faktury zakupu jeszcze nie ma w systemie — uruchom akcję **„Utwórz fakturę zakupu”**;
   - jeśli faktura zakupu już istnieje (i nie została powiązana automatycznie) — uruchom akcję **„Powiąż z fakturą zakupu”** i wskaż istniejący dokument.
4. Sprawdź fakturę zakupu: partnera, daty, kwoty, linie, podatki.

## Co sprawdzić po utworzeniu faktury zakupu (checklista)

Najczęściej warto zweryfikować:

1. **Dostawcę i firmę** — czy dokument trafił do właściwej firmy i właściwego partnera.
2. **Daty** — data faktury i (jeśli używane) data dostawy/usługi.
3. **Walutę i kwoty** — czy sumy zgadzają się z fakturą w KSeF.
4. **Pozycje** — czy wszystkie linie zostały przeniesione i czy rozpoznano towar/usługę.
5. **Podatki** — czy stawki i wartości podatku są poprawne (szczególnie, jeśli w Twojej konfiguracji podatek jest wyliczany na podstawie ustawień lokalnych).

Jeżeli towar nie został rozpoznany:

- uzupełnij go ręcznie na linii (zgodnie z procedurą w Twojej organizacji),
- albo poproś osobę wdrażającą o dopasowanie zasad rozpoznawania pozycji (np. sposób mapowania kodów).

## Ręczne powiązanie i zmiana powiązania

Czasem powiązanie automatyczne nie zadziała — np. numer dokumentu dostawcy został wpisany w nieco innej formie albo dostawca w systemie i `Podmiot 1` z KSeF to dwie różne kartoteki tego samego kontrahenta. W takim przypadku możesz powiązać dokumenty ręcznie.

### Z poziomu listy „Faktury KSeF” (zakładka **KSeF** w „Fakturach zakupu”)

Zakładka pokazuje faktury KSeF, które jeszcze nie mają przypisanej faktury zakupu. Dla wybranej faktury są dostępne dwie akcje:

- **„Utwórz fakturę zakupu”** — utworzy nowy dokument zakupowy na podstawie faktury KSeF;
- **„Powiąż z fakturą zakupu”** — otworzy okno wyboru istniejącej faktury zakupu (filtrowane według dostawcy i firmy z faktury KSeF). Po zatwierdzeniu faktura KSeF zostanie podpięta do wskazanego dokumentu i zniknie z zakładki.

### Z poziomu karty faktury zakupu (sekcja **KSeF**)

Na karcie faktury zakupu w sekcji **„KSeF”** dostępne są akcje:

- **„Powiąż fakturę”** — pozwala wskazać fakturę KSeF (filtrowane według dostawcy i firmy faktury zakupu). Jeżeli do tej faktury zakupu była już podpięta inna faktura KSeF, zostanie ona odpięta przed podpięciem nowej.
- **„Odepnij fakturę”** — usuwa powiązanie pomiędzy fakturą zakupu a fakturą KSeF (sama faktura KSeF nie jest usuwana — wraca do listy do powiązania).
- **„Edytuj”** — otwiera podgląd powiązanej faktury KSeF.

Wskazówka: jeśli dostawca lub firma w systemie nie zgadza się z `Podmiotem 1` / `Podmiotem 2` z KSeF, najpierw popraw te dane na fakturze zakupu — powiązanie może wtedy wykonać się automatycznie.