---
title: Karty rabatowe
---

Karta rabatowa identyfikuje klienta na [kasie](pos.md): gdy karta zostanie wprowadzona na paragon, klient paragonu jest ustawiany na podstawie właściciela karty. Karta nie ma własnego procentu rabatu — rabat wynika z [reguł rabatowych](../sales/discounts.md) obowiązujących dla powiązanego klienta.

## Gdzie to znaleźć

**„Sprzedaż detaliczna” → „Konfiguracja” → „Karty rabatowe”**.

## Podstawowe dane karty

Karta rabatowa ma:

- **ID** — identyfikator karty; to on jest skanowany na kasie;
- **właściciela** — klienta, do którego należy karta;
- **datę wydania**;
- **datę blokady** — ustawianą przy blokowaniu karty.

## Wydanie karty

Kartę można utworzyć:

- na liście **„Karty rabatowe”** — utwórz kartę i wskaż jej właściciela;
- z karty klienta — na zakładce **„Karty rabatowe”** kontrahenta, gdzie nowa karta jest tworzona już powiązana z tym klientem.

ID karty jest nadawany automatycznie przez numerator.

## Blokowanie karty

Kartę blokuje się przez ustawienie **daty blokady**. Data blokady nie może być wcześniejsza niż data wydania.

Blokada obowiązuje od daty blokady: karta jest odrzucana tylko na paragonie lub fakturze z datą **od** tej daty. Przyszła data blokady pozostawia kartę używalną aż do jej nadejścia.

Zablokowanej karty nie można użyć: na kasie system pokazuje komunikat **„Karta rabatowa zablokowana”** i nie dołącza jej do paragonu; na fakturze sprzedaży karta nie przechodzi walidacji.

## Użycie karty

- **Na kasie** — wprowadź lub zeskanuj ID karty w polu kodu kreskowego. Właściciel karty staje się klientem paragonu (zobacz [Kasa i POS](pos.md)).
- **Na fakturze sprzedaży** — karty nie wybiera się bezpośrednio na standardowym formularzu [faktury sprzedaży](../invoicing/invoices.md); pole karty jest dostępne na ekranie POS. Gdy paragon (faktura) mimo to zawiera kartę, system uzupełnia klienta na podstawie karty i sprawdza, że karta odpowiada klientowi i nie jest zablokowana.
