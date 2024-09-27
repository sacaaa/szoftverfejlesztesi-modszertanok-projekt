from django.db.models.signals import post_migrate
from django.dispatch import receiver
from django.core.management import call_command


@receiver(post_migrate)
def load_initial_data(sender, **kwargs):
    if sender == 'core':
        call_command('loaddata', 'data.json')
