## EduStats

### Tanárok és tantárgyak értékelési oldala

### 1. **Áttekintés**

Ez a dokumentum az egyetemi tanárok és tantárgyak értékelési rendszerének funkcionális specifikációit tartalmazza, amelyek alapján a rendszer Django backenddel, MySQL adatbázissal, valamint React és Typescript frontenddel fog megvalósulni.

### 2. **Rendszer architektúra**

#### 2.1 **Frontend**

-   **Technológia**: React.js + Typescript
-   **Feladatok**:
    -   Dinamikus felhasználói felület biztosítása a felhasználók számára.
    -   API hívások kezelése a Django REST backend felé.
    -   Felhasználói űrlapok kezelése: értékelési űrlapok, regisztrációs és bejelentkezési felületek.

#### 2.2 **Backend**

-   **Technológia**: Django + Django REST Framework (Python)
-   **Feladatok**:
    -   A felhasználói kérések feldolgozása, adatbázissal való kommunikáció.
    -   Felhasználói hitelesítés és jogosultságkezelés.
    -   REST API létrehozása a frontend számára.
    -   Adatok validálása és kezelés.
    -   ORM (Object-Relational Mapping) használata az adatbázis rekordok kezelése érdekében.

#### 2.3 **Adatbázis**

-   **Technológia**: MySQL
-   **Feladatok**:
    -   Tanárok, tantárgyak, felhasználók, értékelések és egyéb kapcsolódó adatok tárolása és kezelése.
    -   Kapcsolatok létrehozása a tanárok, tantárgyak és értékelések között.
    -   Lekérdezések optimalizálása nagy mennyiségű adat esetén.