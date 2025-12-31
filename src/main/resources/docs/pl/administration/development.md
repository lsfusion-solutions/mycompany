---
title: Rozwój
---

Ponieważ projekt używa Mavena, możesz skorzystać z poniższego algorytmu konfiguracji środowiska deweloperskiego:

#### Konfiguracja środowiska i części klienckiej

Zainstaluj platformę deweloperską lsFusion z wyłączeniem części serwerowej (Server), zgodnie z instrukcją: https://docs.lsfusion.org/Development_auto/.

Jako hasło dla PostgreSQL najlepiej użyć `11111`.

#### Konfiguracja części serwerowej

1. Wybierz **Get from VCS** w menu startowym lub **Git / Clone**, używając jako źródła: https://github.com/lsfusion-solutions/mycompany.git.
2. Poczekaj, aż IntelliJ IDEA utworzy projekt i pobierze wszystkie zależności przez Maven (może to potrwać kilka minut).
3. Sprawdź, czy Java Development Kit został poprawnie wykryty. W tym celu przejdź do formularza **File / Project Structure** i upewnij się, że pole **Project / SDK** jest ustawione.
4. Utwórz konfigurację uruchomieniową serwera lsFusion. W formularzu **Run / Edit Configurations** kliknij **+**, a następnie wybierz **lsFusion Server**. Zweryfikuj, że **Working Directory** wskazuje na folder, w którym znajduje się `pom.xml`.
5. Uruchom serwer przez pozycję menu **Run / Run `<configuration name>`**.

#### Budowanie pliku jar do uruchomienia na serwerze

Po wprowadzeniu zmian w kodzie źródłowym aplikacji, aby zbudować finalny plik jar, należy:

1. W formularzu **File / Project Structure** przejdź do pozycji **Artifacts** i kliknij przycisk **+**, a następnie wybierz **Jar / Empty project**.
2. W polu **Output Directory** wybierz katalog, w którym chcesz umieścić zbudowany plik jar.
3. Z listy **Available Elements** przenieś element kompilacji `mycompany` do pliku jar. Następnie kliknij **OK**.
4. Następnie wybierz w menu **Build / Build artifacts**, a potem **Build**.

Za pomocą artefaktu możesz podmienić stary plik, który znajduje się na serwerze w folderze `/var/lib/lsfusion` lub `C:\Program Files\lsFusion 6\Server\lib`, i zrestartować usługę na serwerze.

### Dodawanie nowych modułów na serwerze

Jeśli musisz podłączyć nowe moduły, możesz to zrobić nie przez pliki jar, ale przez dodanie nowych plików do classpath. W takim przypadku kroki są następujące:

1. Utwórz na przykład nowy moduł `MyCompanyCustom.lsf`, zależny od modułu `MyCompanyRu`, i umieść go w `/var/lib/lsfusion`.
2. Zmień top moduł aplikacji. W tym celu w pliku `/etc/lsfusion6-server/settings.properties` zmień (lub dodaj) parametr `logics.topModule = MyCompanyCustom`.
3. Zrestartuj usługę serwera (jak opisano wyżej).
4. Jeśli musisz podłączyć dodatkowe moduły, umieść je również w `/var/lib/lsfusion` i dodaj je do sekcji REQUIRE modułu `MyCompanyCustom`.

Przykład modułu `MyCompanyCustom`:

```
MODULE MyCompanyCustom;

REQUIRE MyCompanyPl;

<new code>
```