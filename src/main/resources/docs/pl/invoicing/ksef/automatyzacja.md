---
title: KSeF — automatyzacja (harmonogram)
---

MyCompany może uruchomić zadanie cykliczne, które:

- odnawia logowanie i ważność dostępu (np. dla tokenów),
- okresowo pobiera faktury z KSeF w perspektywie nabywcy z ostatnich dni.

Automatyzacja jest szczególnie przydatna, gdy:

- faktury zakupu mają być regularnie dociągane z KSeF bez ręcznej pracy,
- chcesz utrzymywać dostęp do KSeF „w gotowości” (żeby pobieranie/wysyłka nie wymagały każdorazowego logowania),
- w firmie pracuje wiele osób i zależy Ci na przewidywalnym, powtarzalnym procesie.

## Co ustala administrator (parametry)

Przy wdrożeniu automatyzacji zwykle ustala się:

1. **Częstotliwość uruchamiania** (np. co 10–30 minut, co 1–2 godziny).
2. **Zakres pobierania** — ile dni wstecz pobierać faktury jako nabywca.
3. **Sposób logowania** — czy automatyzacja ma bazować na certyfikacie, czy na tokenie.

Wskazówka: w większości organizacji sensownym startem jest pobieranie z ostatnich kilku dni, a następnie dopasowanie zakresu do realnego opóźnienia w dostarczaniu dokumentów przez kontrahentów.

## Dobre praktyki

- jeśli token jest używany w automatyzacji, ogranicz jego uprawnienia do niezbędnych i kontroluj, kto ma do niego dostęp,
- regularnie monitoruj, czy zadanie działa (np. czy lista „Faktury KSeF” rośnie zgodnie z oczekiwaniami),
- jeśli pobieranie jest wykonywane rzadko, a dokumentów jest dużo, rozważ częstsze uruchomienia z krótszym zakresem.

Jeśli w Twojej organizacji wymagana jest automatyzacja, poproś administratora o jej włączenie i dopasowanie parametrów.