# random-user-generator

> Projekt został stworzony w celu rekrutacyjnym jako zadanie testowe. Pozwala on na pobranie danych z [Random User Generator API](https://randomuser.me/).

## Spis treści

- [Użyte technologie](#użyte-technologie)
- [Funkcje](#funkcje)
- [Konfiguracja](#konfiguracja)

## Użyte technologie

- TypeScript - wersja 4.5.5
- webpack - wersja 5.67.0
- chart.js - wersja 3.7.0

## Funkcje:

- Po wciśnięciu przycisku Fetch Data pobieramy dane z API (1000 rekordów)
- Pobrane dane są wyświetlane w formie wykresu (wykres słupkowy przedstawiający liczbę osób w danym przedziale wiekowym) oraz tabeli (tabla przedstawia 10 najstarszych osób w pobranej porcji danych)
- Podczas pobierania danych na wykres oraz tabelę nakładany jest efekt rozmycia, pojawia się w ich miejscu ikona ładowania.

## Konfiguracja

### Wymagania do uruchomienia projektu:

- Node.js - wersja 16.13.1
- npm - wersja 8.3.1

1. Pobierz repozytorium z githuba.
2. Zainstaluj wszystkie zależności.

```bash
  npm install
```

3. Uruchom webpack-dev-server.

```bash
  npm run serve
```

4. Opcjonalnie - zaktualizuj plik bundle.js w folderze dist.

```bash
  npm run build
```
