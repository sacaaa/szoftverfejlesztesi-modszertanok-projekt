# Tanár

- Nem felhasználói szintű, nem lehet regisztrálni és bejelentkezni tanárként.
- Az iskolák hozzák létre a saját adatlapjukon.
- Több iskolában is oktathat, kereső szükséges a létrehozáskor, mert ha már létezik mégegyszer nem kell létrehozni. Elég csak az iskolát hozzárendelni.

## Tulajdonságok: típus

- Név: *string*,
- Születési dátum (azonosításhoz szükséges): *date*,
- Iskolák ahol tanít (segédosztály kell: TeacherSubjectAtSchool): *dict*,
  - Iskola a kulcs, érték egy lista a tárgyakkal.
- Értékelések (kapott): *dict*
  - Iskola a kulcs, érték egy lista az értékelésekkel.


## Kérdőjelek

- A tanár adatlapját ki módosíthatja ha egyszerre több iskolában is tanít?

## Ötletek