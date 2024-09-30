
EduStats Elindítási útmutató

Backend
1. Követelmények

Mielőtt elkezdenéd, győződj meg arról, hogy a következő szoftverek telepítve vannak a gépeden:
- Python 3.8 vagy újabb
- pip (Python csomagkezelő)
- Git (opcionális, a forráskód kezeléséhez)
- Virtualenv (ajánlott a virtuális környezet létrehozásához)

2. Projekt klónozása

Ha a projekt Git repository-jából szeretnéd klónozni, használd a következő parancsot:
```
git clone https://github.com/felhasznalo/edustats-backend.git
cd edustats-backend
```

3. Virtuális környezet létrehozása

Ajánlott virtuális környezetet használni a projekt függőségeinek kezelése érdekében.

### 3.1. Virtualenv telepítése (ha még nincs telepítve)
```
pip install virtualenv
```

### 3.2. Virtuális környezet létrehozása
```
virtualenv venv
```

### 3.3. Virtuális környezet aktiválása
**Windows:**
```
venv\Scripts ctivate
```

**macOS/Linux:**
```
source venv/bin/activate
```

4. Függőségek telepítése

A projekt függőségeit a `requirements.txt` fájl alapján telepíthetjük:
```
pip install -r requirements.txt
```

Megjegyzés: Ha nincs `requirements.txt` fájl, hozd létre és add hozzá a következő csomagokat:
```
Django>=3.2,<4.0
djangorestframework
Pillow
django-cors-headers
mysqlclient
```

Ezután futtasd újra a fenti parancsot.

Backend indítása: python manage.py runserver
Frontend: npm run dev
