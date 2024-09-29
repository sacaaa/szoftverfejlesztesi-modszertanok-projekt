# Edustats Rendszerterv


## 1. Rendszer célja

Az EduStats rendszer lehetőséget biztosít a tanárok és iskolák értékelésére, ahol a felhasználók megoszthatják tapasztalataikat és véleményüket. A platform célja, hogy elősegítse a diákok visszajelzésein keresztül az oktatás minőségének javítását, valamint támogassa a tanárok szakmai fejlődését a folyamatos visszajelzések alapján.

## 2. Projekt terv

A projekt létrehozásában hárman vesznek részt: Székely Dávid, Tóth Dániel, és Székelyhidi Sándor. A rendszer fejlesztéséhez rendelkezésre álló fő erőforrások az emberek szakértelme és az időbeosztás. A siker érdekében fontos a felelősségi körök tisztázása és az ütemterv követése, amely meghatározza a projekt kulcsfontosságú mérföldköveit.

### 2.1. Projekt szerepkörök és felelősségek
Az alábbiakban részletezzük a projekt kulcsszereplőit és az egyes szerepkörökhöz tartozó felelősségi köröket:

- Projektmenedzser: Székelyhidi Sándor
Feladatai közé tartozik a projekt általános felügyelete, a fejlesztési folyamat koordinálása, az ütemterv betartásának biztosítása, valamint a kapcsolattartás a csapat tagjai között. Ő felel az erőforrások elosztásáért és a kommunikációért.

- Projekt munkások és felelősségeik

    - Székely Dávid (Frontend fejlesztő):
        - Felhasználói felület tervezése és implementálása
        - A frontend komponensek tervezése és kódolása React és TypeScript segítségével
        - Reszponzív dizájn megvalósítása
        
    - Tóth Dániel (Frontend fejlesztő):
        - A frontend komponensek tervezése és kódolása React és TypeScript segítségével
        - Reszponzív dizájn megvalósítása
        - UX optimalizálás és tesztelés
        - Funkciók összekötése a backend API-val

    - Székelyhidi Sándor (Backend fejlesztő):
        - Backend fejlesztése Python és Django keretrendszer használatával
        - API-k létrehozása és karbantartása
        - Adatbázis-kezelés, felhasználói hitelesítés, adatvédelem biztosítása


### 2.2 Ütemterv
Az ütemterv a projekt főbb szakaszait és az elvégzendő feladatokat határozza meg az alábbiak szerint:

- Tervezési fázis (1-2. hét):

    - Rendszer specifikációk kidolgozása
    - Funkciók és adatbázis-struktúra tervezése


- fejlesztés / tesztelés indítása (3. hét):

    - Frontend: Alapvető komponensek megírása, reszponzív dizájn kialakítása

    - Backend: API-k fejlesztése és adatbázis struktúra kialakítása

    - Frontend és backend összekapcsolása

    - Unit és integrációs tesztek végrehajtása

    - Hibajavítások, felhasználói tesztek alapján végzett módosítások

    - Élesítés

- Mérföldkövek:

    Az alábbi mérföldkövek segítik a projekt előrehaladásának nyomon követését:

    1. mérföldkő (2. hét vége): Részletes rendszerterv és séma

    2. mérföldkő (3. hét vége): Rendszer élesítése és átadás



## 3. Üzleti folyamatok modellje

### 3.1. Üzleti szereplők
Az üzleti folyamatokban résztvevő kulcsszereplők:

- Diákok: A rendszer fő felhasználói, akik értékeléseket adnak a tanárokról és az iskolákról.

- Tanárok: Az értékelés tárgyai, akik visszajelzéseket kapnak teljesítményükről, hogy javíthassanak oktatási módszereiken.


### 3.2. Üzleti folyamatok
Az EduStats által támogatott üzleti folyamatok a következők:

- Értékelések rögzítése: A diákok megadhatják visszajelzéseiket az általuk ismert tanárokról és iskolákról. Ez a folyamat a felhasználók belépésével és értékelési űrlapok kitöltésével történik.

- Értékelések kezelése: A tanárok és adminisztrátorok hozzáférhetnek az értékelésekhez, elemezhetik azokat, és szükség esetén válaszokat adhatnak vagy változtatásokat kezdeményezhetnek.


### 3.3. Üzleti entitások
Az üzleti entitások, amelyek az EduStats rendszer működését meghatározzák:

- Felhasználók: Azok a személyek, akik értékeléseket készítenek (pl. diákok), vagy azokhoz hozzáférnek (pl. tanárok, adminisztrátorok).

- Értékelések: Minden értékelés egy adott tanárhoz vagy iskolához kapcsolódik, meghatározott kritériumok (pl. tanítási minőség, hozzáállás) alapján.

- Tanárok: Az értékelésekben szereplő alanyok, akikről a felhasználók visszajelzést adnak.

- Iskolák: A rendszerben szereplő oktatási intézmények, amelyekhez a tanárok kapcsolódnak.



## 4. Követelmények

Az EduStats rendszer fejlesztése során a következő követelmények megvalósítását célozzuk meg. Fontos, hogy ezek a követelmények egyértelműen megfogalmazottak, és a projekt során változhatnak, amelyeket a különböző módszertanok figyelembevételével kezelünk. A következő részletek tartalmazzák a funkcionális és nem funkcionális követelményeket, valamint a vonatkozó törvényi előírásokat és szabványokat, amelyeket be kell tartanunk.

### 4.1. Funkcionális követelmények

- Felhasználói regisztráció és bejelentkezés: A diákoknak lehetőségük van regisztrálni és bejelentkezni a rendszerbe, hogy értékeléseket adhassanak.

- Értékelési űrlap: A felhasználók számára egy egyszerű, felhasználóbarát űrlapot biztosítunk, ahol az értékeléseket megadhatják.

- Adatvédelem: A rendszer biztosítja a felhasználók adatainak védelmét, és megfelel a vonatkozó adatvédelmi jogszabályoknak.

### 4.2. Nemfunkcionális követelmények

- Teljesítmény: A rendszernek képesnek kell lennie több ezer felhasználó egyidejű kezelésére, anélkül hogy a válaszidő 2 másodpercnél hosszabb lenne.

- Biztonság: Az adatátvitel során titkosítást kell alkalmazni, és a felhasználói fiókokhoz való hozzáférést megfelelő jelszóvédelemmel kell biztosítani.

- Skálázhatóság: A rendszernek képesnek kell lennie a jövőbeli bővítések és funkciók hozzáadásának kezelésére.

- Felhasználói élmény: A felületnek intuitívnak és felhasználóbarátnak kell lennie, hogy a felhasználók könnyen navigálhassanak és használhassák a platformot.

### 4.3. Törvényi előírások, szabványok

- GDPR (General Data Protection Regulation): A rendszernek meg kell felelnie az Európai Unió általános adatvédelmi rendeletének, amely előírja a személyes adatok védelmét és a felhasználói jogok tiszteletben tartását.

- A helyi adatvédelmi törvények: A projektnek figyelembe kell vennie a helyi adatvédelmi jogszabályokat, amelyek vonatkoznak az oktatási intézményekre és a diákokra.

- Webes akadálymentességi szabványok: A rendszernek meg kell felelnie a WCAG (Web Content Accessibility Guidelines) szabványoknak, biztosítva, hogy a felhasználók, köztük a fogyatékkal élők is hozzáférjenek a platformhoz.




## 5. Funkcionális terv
A funkcionális terv a fejlesztők számára részletezi az EduStats rendszerben megvalósítandó funkciókat a funkcionális specifikáció alapján. Ez a dokumentum a felhasználók által megfogalmazott igényekre épít, és tartalmazza a használati esetek lefutásait, aktivitási és szekvencia diagramokat, valamint a határ osztályok, menü hierarchiák és képernyő tervek leírását.

### 5.1. Rendszer szereplők

Az EduStats rendszerben a következő szereplők vannak:

- Diákok: A rendszer elsődleges felhasználói, akik értékeléseket adnak a tanárokról és iskolákról.

- Tanárok: Az értékelések alanyai, akik visszajelzéseket kapnak a diákoktól.


### 5.2. Rendszer használati esetek és lefutásaik
#### 5.2.1 Használati esetek

- Felhasználói regisztráció

    - Cél: A diákok regisztráljanak a rendszerbe.
    - Eljárás:
        1. Diák megnyitja a regisztrációs oldalt.
        2. Kitölti az űrlapot.
        3. A rendszer ellenőrzi az adatokat, és létrehozza a fiókot.
        4. Bejelentkezés

- Bejelentkezés

    - Cél: A diákok bejelentkezzenek a rendszerbe.
    - Eljárás:
        1. Diák megnyitja a bejelentkezési oldalt.
        2. Beírja az e-mail címét és jelszavát.
        3. A rendszer hitelesíti az adatokat, és beengedi a felhasználót.
        4. Értékelés megadása

- Értékelés megadása

    - Cél: A diákok értékeljék a tanárokat.
    - Eljárás:
        1. Diák bejelentkezik, majd megkeresi a tanárt az értékelési listában.
        Kitölti az értékelési űrlapot.
        2. Az értékelés rögzítése a rendszerben.
        3. Értékelések megtekintése

- Értékelések megtekintése

    - Cél: Tanárok és diákok megtekinthessék az értékeléseket.
    - Eljárás:
        1. Tanár és diák bejelentkezik.
        2. Kiválasztja a "Saját értékelések" opciót.
        3. A rendszer megjeleníti a beérkezett értékeléseket.


#### 5.2.2 Használati esetek diagramja

- Diák

    Felhasználói szintű, regisztrálni kell, felhasználó, email cím, jelszó.

    - Tulajdonságok: típus

        - Név: *string*,
        - Születési dátum (azonosításhoz szükséges): *date*,
        - Iskola ahol tanul: *School*,
        - Értékelések amiket tanárra tett: *list*

    ![Diák UML](rendszerterv\models\diak\uml.png)


- Értékelés

    Diákok adják tanárokra, tárgyspecifikusan. Pl: Kis Pista értékeli Nagy Pista tanár Nyelvtan óráját. A lényeg, hogy a tanár kap egy átlagot az összes értékelése alapján. Az iskolák pedig az átlagukat a tanáraik átlagjából kapják.

    - Tulajdonságok: típus

        - Diák (értékelő): *Student*
        - Tanár és a tanított tárgy az iskolában (értékelt): *TeacherSubjectAtSchool*,
        - Megjegyzés: *string*,
        - Értékelési skála (1-5): *int*

    ![Diák UML](rendszerterv\models\ertekeles\uml.png)



- Iskola

    - Tulajdonságok: típus

        - Intézmény azonosító: *string*,
        - Név: *string*,
        - Tanulók listája: *list*,
        - Tanárok listája: *dict*,
            - Kulcs a tanár, érték a tárgyak listája.


    - ![Diák UML](rendszerterv\models\iskola\uml.png)



- Tanár

    - Nem felhasználói szintű, nem lehet regisztrálni és bejelentkezni tanárként.
    - Az iskolák hozzák létre a saját adatlapjukon.
    - Több iskolában is oktathat, kereső szükséges a létrehozáskor, mert ha már létezik mégegyszer nem kell létrehozni. Elég csak az iskolát hozzárendelni.

    - Tulajdonságok: típus

        - Név: *string*,
        - Születési dátum (azonosításhoz szükséges): *date*,
        - Iskolák ahol tanít (segédosztály kell: TeacherSubjectAtSchool): *dict*,
        - Iskola a kulcs, érték egy lista a tárgyakkal.
        - Értékelések (kapott): *dict*
            - Iskola a kulcs, érték egy lista az értékelésekkel.


    - ![Diák UML](rendszerterv\models\tanar\uml.png)



### 5.3. Határ osztályok
A határ osztályok definiálják a képernyők tartalmát és funkcionalitását:

- Regisztrációs képernyő: Az űrlap, ahol a diákok megadhatják a szükséges információkat.

- Bejelentkezési képernyő: Itt a felhasználók beírhatják az e-mail címüket és jelszavukat.

- Értékelési űrlap: A diákok számára elérhető felület az értékelések megadására.

- Értékelések megjelenítő képernyő: A tanárok és adminisztrátorok számára készült oldal, ahol az értékeléseket láthatják.



### 5.4. Menü hierarchiák
Az EduStats rendszer menüje az alábbi hierarchiát követi:

- Főmenü
    - Regisztráció
    - Bejelentkezés
    - Értékelések
        - Értékelés megadása
        - Saját értékelések megtekintése


### 5.5. Képernyő tervek

- Az alábbiakban bemutatjuk a főbb képernyők terveit:

![Diák UML](rendszerterv\design\DiákProfil.png)

![Diák UML](rendszerterv\design\HomePage.png)

![Diák UML](rendszerterv\design\Iskolák.png)

![Diák UML](rendszerterv\design\Tanárok.png)



## 6. Fizikai környezet

Az EduStats rendszer fejlesztéséhez szükséges fizikai környezet és technikai részletek a következőkben kerülnek bemutatásra. Ezek az információk alapvető fontosságúak a fejlesztési és üzemeltetési folyamatok számára, mivel befolyásolják a szoftver teljesítményét, biztonságát és a felhasználói élményt.

### 6.1. Vásárolt szoftver komponensek és külső rendszerek

- Django: A backend fejlesztéséhez használt nyílt forráskódú webkeretrendszer, amely lehetővé teszi a Python nyelv használatát a fejlesztés során.

- React: A frontend fejlesztéséhez használt JavaScript könyvtár, amely lehetővé teszi dinamikus, interaktív felhasználói felületek létrehozását.

### 6.2. Fizikai alrendszerek
- Fejlesztési gépek: A fejlesztői csapat tagjai saját laptopjaikon vagy asztali számítógépeiken dolgoznak, amelyek rendelkeznek a szükséges szoftverekkel és konfigurációkkal.

- Tesztelési környezet: Az integrációs és végső teszteléshez külön tesztkörnyezetet alakítunk ki, amely megegyezik a termelési környezet beállításaival.

### 6.3. Fejlesztő eszközök

- Visual Studio Code: A fejlesztők által használt kódeditor, amely támogatja a JavaScript, TypeScript és Python nyelveket.

- Git: Verziókezelő rendszer a forráskódok kezelésére és a csapatmunka támogatására.

- Docker: A környezetek konténerizálásához használt eszköz, amely biztosítja, hogy a fejlesztői, tesztelési és termelési környezetek konzisztens legyenek.

### 6.4. Keretrendszer
- Django: A Python-alapú webkeretrendszer, amely gyors és biztonságos webalkalmazások fejlesztésére lett optimalizálva.

- React: A frontendhez használt keretrendszer, amely lehetővé teszi a dinamikus és reszponzív felhasználói felületek létrehozását.

- Django REST Framework: Az API végpontok létrehozásához és kezeléséhez használt keretrendszer, amely segít az adatcsere megkönnyítésében a backend és a frontend között.



## 7. Domain specifikáció és fogalmak

- Felhasználó: A rendszer végfelhasználói, akik lehetnek diákok, tanárok vagy adminisztrátorok.

- Értékelés: A diákok által megadott vélemények és értékelések, amelyek egy tanár teljesítményére vonatkoznak. Az értékelések tartalmazzák a tudást, segítőkészséget, és egyéb kritériumokat.

- Tanár: Az oktatási intézmény munkatársa, akinek az értékeléseket adják.

- Iskola: Az intézmény, amely keretet biztosít az oktatás számára, és ahol a tanárok dolgoznak.


### 7.1. Absztrakt komponensek és ezek kapcsolatai

A rendszer főbb absztrakt komponensei és azok kapcsolatai a következők:

- Felhasználói felület (UI): A felhasználók interakcióját lehetővé tevő réteg, amely tartalmazza a regisztrációs, bejelentkezési, és értékelési űrlapokat.

- Backend (Django): A rendszer logikáját és adatkezelését végző réteg. Ez a komponens felelős az API végpontok kezeléséért, az adatbázis műveletek végrehajtásáért, és a felhasználói kérések feldolgozásáért.

- Adatbázis: Az értékelések, felhasználói adatok és tanárok információinak tárolására szolgáló réteg. Az adatbázis kapcsolódik a backendhez, amelyen keresztül az adatok elérhetők és kezelhetők.

- Értékelés kezelő: A rendszer logikájának része, amely felelős az értékelések gyűjtéséért, tárolásáért és az értékelések statisztikáinak generálásáért.


### 7.2. Kapcsolatok

- Felhasználó <-> Felhasználói felület: 
    A felhasználók közvetlenül interakcióba lépnek a felhasználói felületen keresztül, amely lehetővé teszi számukra a rendszer használatát.

- Felhasználói felület <-> Backend: A felhasználói felület HTTP kéréseken keresztül kommunikál a backenddel, amely feldolgozza a kéréseket és válaszokat küld vissza.

- Backend <-> Adatbázis: A backend közvetlenül kapcsolódik az adatbázishoz, lehetővé téve az adatok lekérdezését és módosítását.

- Backend <-> Értékelés kezelő: Az értékelés kezelő a backend részeként működik, és a beérkezett értékelések kezelését végzi.



### 7.3. Példa

- Értékelés megadása: A diák belép a rendszerbe, megkeresi a tanárt, kitölti az értékelést, amely az értékelés kezelőhöz kerül, majd az adatbázisban tárolásra kerül.



## 8. Architekturális Terv
Az EduStats rendszer architekturális terve a nemfunkcionális követelmények figyelembevételével készült, és célja, hogy egy rugalmas, bővíthető és biztonságos architektúrát nyújtson.

### 8.1. Architekturális Tervezési Minta


- 3 rétegű alkalmazás: A rendszer három rétegre van bontva:

    - Prezentációs réteg: A felhasználói felület, amely a diákok és tanárok számára elérhető.

    - Üzleti logika réteg: Itt található a rendszer logikája és az értékelések kezelése.

    - Adat-hozzáférési réteg: Az adatbázissal való kommunikációért felelős réteg.

### 8.2. Az Alkalmazás Rétegei és Fő Komponensei

- Felhasználói felület (UI): React alapú frontend, amely biztosítja a felhasználói interakciót.

- Backend: Django keretrendszer, amely kezeli az API végpontokat és az adatkezelést.


### 8.3. Változások Kezelése

Az alkalmazás konfigurációs állományokkal van ellátva, amelyek lehetővé teszik a rugalmas módosításokat a különböző környezetekben (pl. fejlesztési, tesztelési, éles környezet).

### 8.4. Rendszer Bővíthetősége

Az alkalmazás moduláris felépítése lehetővé teszi új funkciók és komponensek egyszerű integrálását.

### 8.5. Biztonsági Funkciók

Jogosultságkezelés: A rendszer biztosítja a felhasználók jogosultságainak kezelését, amely megakadályozza, hogy illetéktelen felhasználók hozzáférjenek érzékeny információkhoz.



## 9. Tesztterv
A tesztterv meghatározza a tesztelés elveit, folyamatát és kontrolját, valamint a fő teszteseteket.

### 9.1. Tesztelési Elvek
- Funkcionális Tesztelés: Ellenőrizzük a rendszer funkcióinak működését a felhasználói igények szerint.

- Teljesítmény Tesztelés: A rendszer teljesítményének tesztelése különböző terhelési körülmények között.

### 9.2. Folyamat

- Tesztelési környezet kialakítása
- Tesztesetek végrehajtása
- Eredmények dokumentálása

### 9.3. Sikeres Teszt Kritériumai

A funkcionális tesztek legalább 95%-os sikerességi arányának elérése.
A rendszer válaszideje 2 másodpercen belül kell legyen.



## 10. Telepítési Terv

A telepítési terv részletezi a rendszer telepítésének módját és a telepítő csomag előkészítésének elveit.

### 10.1. Telepítési Folyamat

- Szerver Telepítés: Az alkalmazás telepítése a megadott környezetbe 

- Környezeti Beállítások: A szükséges konfigurációs fájlok beállítása, mint például az adatbázis kapcsolatok.

### 10.2. Fizikai Környezet

- Szerver: Legalább 16 GB RAM és 4 magos processzor, SSD háttértárral.

- Hálózati Beállítások: Portok nyitása és tűzfal konfigurálása a hozzáférés biztosításához.



## 11. Karbantartási Terv

A karbantartási terv részletezi a szoftver frissítésének módját és folyamatát.

### 11.1. Frissítési Folyamat

- Automatizált Frissítések: A rendszer frissítései automatizálva lesznek, lehetővé téve a sima és gyors telepítést.

- Karbantartási Ablak: Meghatározott időszakokban (pl. éjszaka) történnek a karbantartási munkálatok.

### 11.2. Karbantartási Teszttervek

- A frissítések után végzett funkcionális tesztek.
- Visszacsatolás gyűjtése a felhasználóktól a frissítések hatásairól.
- Ez a terv keretet ad az EduStats projekt megvalósításához, figyelembe véve a szükséges technikai részleteket és folyamatokat a sikeres fejlesztéshez és üzemeltetéshez.











