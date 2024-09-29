from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.core.management import call_command


@receiver(post_migrate)
def load_initial_data(sender, **kwargs):
    if sender == 'core':
        fixtures = ['schools.json', 'teachers.json', 'students.json', 'reviews.json']
        for fixture in fixtures:
            try:
                call_command('loaddata', fixture)
                print(f"Betöltve: {fixture}")
            except Exception as e:
                print(f"Hiba a {fixture} betöltésekor: {e}")