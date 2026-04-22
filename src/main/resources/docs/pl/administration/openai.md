---
title: OpenAI i konfiguracje GPT
---

## Gdzie znaleźć

Otwórz **„Administracja” → „Aplikacja” → „Dane integracji”** i użyj bloku **OpenAI**.

## Klucz API

Uzupełnij **klucz API** OpenAI używany dla wszystkich żądań GPT.

## Konfiguracje GPT

Użyj **konfiguracji GPT**, aby zdefiniować wielokrotnie używane ustawienia żądań:

- **Nazwa** - nazwa widoczna przy wyborze konfiguracji.
- **Model** - model OpenAI używany dla żądania. Jeśli model nie jest podany ani w żądaniu, ani w konfiguracji, system używa `gpt-5`.
- **Rozumowanie** - opcjonalna wartość poziomu rozumowania obsługiwana przez wybrany model. Zostaw puste, jeśli nie ma być wysyłana.
- **Dodatkowy prompt** - tekst dodawany do promptu importu lub żądania, na przykład wspólne reguły formatu albo instrukcje firmowe.

Jeśli istnieje dokładnie jedna konfiguracja, jest wybierana automatycznie dla działań importu tworzących żądania GPT. Jeśli istnieje kilka konfiguracji, system prosi użytkownika o wybór jednej z nich przed wysłaniem pliku.

## Żądania GPT

Ten sam blok OpenAI pokazuje historię żądań GPT. Karta żądania zawiera:

- konfigurację, model, rozumowanie i znacznik generowania obrazów;
- prompt, odpowiedź, status, ID odpowiedzi, czas wysłania i liczniki tokenów;
- pliki wejściowe i pliki wyjściowe utworzone przez OpenAI;
- pliki debugowania żądania i odpowiedzi.

Użyj **Wyślij** na karcie żądania, aby wysłać żądanie ręcznie. Żądanie zapisuje efektywny model, rozumowanie i dodatkowy prompt użyte podczas wysyłania.
