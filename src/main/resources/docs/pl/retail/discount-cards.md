---
title: Karty rabatowe
---

Karta rabatowa identyfikuje klienta na [kasie](pos.md): gdy karta zostanie wprowadzona na paragon, klient paragonu jest ustawiany na podstawie właściciela karty. Karta nie ma własnego procentu rabatu — rabat wynika z [reguł rabatowych](../sales/discounts.md) obowiązujących dla powiązanego klienta.

## Gdzie to znaleźć

**„Sprzedaż detaliczna” → „Konfiguracja” → „Karty rabatowe”**.

## Podstawowe dane karty

Karta rabatowa ma:

- **numer** — identyfikator karty; jest on również kodem skanowanym na kasie;
- **właściciela** — klienta, do którego należy karta;
- **datę wydania**;
- **datę blokady** — ustawianą przy blokowaniu karty.

## Wydanie karty

Kartę można utworzyć:

- na liście **„Karty rabatowe”** — utwórz kartę i wskaż jej właściciela;
- z karty klienta — na zakładce **„Karty rabatowe”** kontrahenta, gdzie nowa karta jest tworzona już powiązana z tym klientem.

Numer karty jest nadawany automatycznie przez numerator.

## Blokowanie karty

Kartę blokuje się przez ustawienie **daty blokady**. Data blokady nie może być wcześniejsza niż data wydania.

Zablokowanej karty nie można użyć: na kasie system pokazuje komunikat **„Karta rabatowa zablokowana”** i nie dołącza jej do paragonu; na fakturze karta nie przechodzi walidacji.

## Użycie karty

- **Na kasie** — wprowadź lub zeskanuj numer karty w polu kodu kreskowego. Właściciel karty staje się klientem paragonu (zobacz [Kasa i POS](pos.md)).
- **Na fakturze** — kartę rabatową można wybrać na [fakturze sprzedaży](../invoicing/invoices.md); jej wybór uzupełnia klienta, a system sprawdza, że karta odpowiada klientowi i nie jest zablokowana.
