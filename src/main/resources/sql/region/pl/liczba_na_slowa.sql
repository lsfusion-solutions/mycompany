CREATE OR REPLACE FUNCTION liczba_na_slowa(num INTEGER)
RETURNS TEXT AS $$
DECLARE
jednostki TEXT[] := '{"zero", "jeden", "dwa", "trzy", "cztery", "pięć", "sześć", "siedem", "osiem", "dziewięć"}';
    nastki TEXT[] := '{"dziesięć", "jedenaście", "dwanaście", "trzynaście", "czternaście", "piętnaście", "szesnaście", "siedemnaście", "osiemnaście", "dziewiętnaście"}';
    dziesiatki TEXT[] := '{"", "dziesięć", "dwadzieścia", "trzydzieści", "czterdzieści", "pięćdziesiąt", "sześćdziesiąt", "siedemdziesiąt", "osiemdziesiąt", "dziewięćdziesiąt"}';
    setki TEXT[] := '{"", "sto", "dwieście", "trzysta", "czterysta", "pięćset", "sześćset", "siedemset", "osiemset", "dziewięćset"}';
    tysiac_1 TEXT := 'tysiąc';
    tysiace_234 TEXT := 'tysiące';
    tysiace_5 TEXT := 'tysięcy';
    miliony TEXT[] := '{"", "milion", "dwa miliony", "trzy miliony", "cztery miliony", "pięć milionów", "sześć milionów", "siedem milionów", "osiem milionów", "dziewięć milionów"}';
    result TEXT := '';
    temp_num INTEGER := num;
    tysiac_part INTEGER;
    tysiac_last INTEGER;
BEGIN
    IF temp_num = 0 THEN
        result := jednostki[1];
ELSE
        -- Obsługa milionów
        IF temp_num / 1000000 > 0 THEN
            result := result || miliony[temp_num / 1000000 + 1] || ' ';
            temp_num := temp_num % 1000000;
END IF;

        -- Obsługa tysięcy
        IF temp_num / 1000 > 0 THEN
            tysiac_part := temp_num / 1000;
			tysiac_last := tysiac_part % 10;
            temp_num := temp_num % 1000;

            IF tysiac_part = 1 THEN
                result := result || tysiac_1 || ' ';
            ELSIF tysiac_last >= 2 AND tysiac_last <= 4 THEN
                result := result || liczba_na_slowa(tysiac_part) || ' ' || tysiace_234 || ' ';
ELSE
                result := result || liczba_na_slowa(tysiac_part) || ' ' || tysiace_5 || ' ';
END IF;
END IF;

        -- Obsługa setek
        IF temp_num / 100 > 0 THEN
            result := result || setki[temp_num / 100 + 1] || ' ';
            temp_num := temp_num % 100;
END IF;

        -- Obsługa nastki
        IF temp_num >= 10 AND temp_num < 20 THEN
            result := result || nastki[temp_num - 10 + 1];
ELSE
            -- Obsługa dziesiątek
            IF temp_num / 10 > 0 THEN
                result := result || dziesiatki[temp_num / 10 + 1] || ' ';
                temp_num := temp_num % 10;
END IF;

            -- Obsługa jednostek
            IF temp_num > 0 THEN
                result := result || jednostki[temp_num + 1];
END IF;
END IF;
END IF;

RETURN TRIM(result);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION liczba_na_slowa_zlote(num NUMERIC)
RETURNS TEXT AS $$
DECLARE
liczba_calkowita INTEGER := FLOOR(num);
    grosze INTEGER := ROUND((num - liczba_calkowita) * 100);
    result TEXT := '';
    ostatnia_cyfra INTEGER;
    grosze_result TEXT := '';
BEGIN
    -- Część złotych
    result := liczba_na_slowa(liczba_calkowita);

    -- Określenie poprawnego zakończenia dla "złoty"
    ostatnia_cyfra := liczba_calkowita % 10;
    IF (liczba_calkowita % 100 >= 10 AND liczba_calkowita % 100 <= 20) OR ostatnia_cyfra = 0 OR ostatnia_cyfra >= 5 THEN
        result := result || ' złotych';
    ELSIF ostatnia_cyfra = 1 THEN
        result := result || ' złoty';
ELSE
        result := result || ' złote';
END IF;

    -- Obsługa groszy
    IF grosze > 0 THEN
        grosze_result := liczba_na_slowa(grosze);

        -- Określenie poprawnego zakończenia dla "groszy"
        ostatnia_cyfra := grosze % 10;
        IF (grosze % 100 >= 10 AND grosze % 100 <= 20) OR ostatnia_cyfra = 0 OR ostatnia_cyfra >= 5 THEN
            grosze_result := TRIM(grosze_result) || ' groszy';
        ELSIF ostatnia_cyfra = 1 THEN
            grosze_result := TRIM(grosze_result) || ' grosz';
ELSE
            grosze_result := TRIM(grosze_result) || ' grosze';
END IF;

        result := result || ' i ' || grosze_result;
END IF;

RETURN result;
END;
$$ LANGUAGE plpgsql;
