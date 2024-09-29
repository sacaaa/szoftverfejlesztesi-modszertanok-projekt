# Edustats Rendszerterv


### 1. Rendszer célja
Az EduStats célja, hogy diákok és szülők számára egy online platformot biztosítson, ahol értékelhetik az iskolákat és a tanárokat. A rendszer felhasználói visszajelzéseket adhatnak, értékeléseket oszthatnak meg, és összehasonlíthatják az intézményeket és tanárokat különböző szempontok alapján.

### 2. Felhasználói szerepkörök
Látogatók: Publikusan megtekinthetik az értékeléseket, iskolákat és tanárokat kereshetnek.
Regisztrált felhasználók (diákok, szülők): Értékeléseket írhatnak, kommentálhatnak, pontozhatnak.
Adminisztrátorok: Moderálják a beérkező értékeléseket, felügyelik a tartalmat, és kezelik a felhasználói adatokat.

### 3. Fő funkciók
Keresés és szűrés: Tanárok és iskolák keresése különböző szempontok (név, település, tantárgy) alapján.
Értékelés és visszajelzés: A felhasználók szöveges értékeléseket írhatnak, illetve pontozhatják a tanárokat és iskolákat meghatározott kritériumok alapján (pl. oktatás színvonala, kommunikáció).
Összehasonlítás: Iskolák és tanárok összehasonlítása az értékelési átlagok alapján.
Felhasználói fiókok kezelése: Regisztráció, bejelentkezés, profilkezelés, valamint értékelések nyomon követése.
Adminisztrációs panel: Az adminok moderálják a beérkezett értékeléseket, kezelik a felhasználókat, és a statisztikákat.

### 4. Technikai felépítés
- Frontend:
HTML, CSS, JavaScript (React.js vagy Vue.js)
Reszponzív dizájn a mobil és asztali eszközökre.

- Backend:
Programozási nyelv: Node.js (Express.js) vagy Python (Django/Flask)
REST API: Az értékelések, felhasználók és adatok kezeléséhez.

- Adatbázis:
Relációs adatbázis (MySQL, PostgreSQL) az iskolák, tanárok és felhasználói adatok tárolására.

- Táblák: Felhasználók, Tanárok, Iskolák, Értékelések, Kommentezés.

- Autentikáció:
JWT token-alapú hitelesítés.
Jelszóval védett felhasználói fiókok, biztonságos bejelentkezés.

- Biztonság:
SSL, adatvédelem és felhasználói adatok titkosítása (pl. bcrypt).
CSRF védelem, bejelentkezési kísérletek korlátozása.

### 5. Tesztelés és implementáció
- Egységtesztek: Az egyes komponensek és funkciók működésének ellenőrzése.

- Integrációs tesztek: A backend és frontend közötti kommunikáció tesztelése.

- Felhasználói tesztelés: Béta verzió, amelyet korlátozott felhasználói csoport tesztel.

### 6. Skálázhatóság és jövőbeli fejlesztések

- Felhőalapú tárhely (pl. AWS, Google Cloud) a jövőbeli növekedés érdekében.

- Új funkciók: Közösségi média integráció, tanárok válaszai az értékelésekre, valamint részletes statisztikák és kimutatások hozzáadása.