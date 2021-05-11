from django.core.management.base import BaseCommand
from django.utils import timezone
from ...models import Eadditives, AdditiveType, Harmfulness
import json


class Command(BaseCommand):

    help = 'Populate database with initial E-additives data'

    def handle(self, *args, **kwargs):

        with open('data.json') as json_file:
            data = json.load(json_file)

            print(data)

            for additive in data:
                e = Eadditives(code=additive['code'], name=additive['name'], additive_type=AdditiveType[additive['type']], 
                harmfulness=Harmfulness[additive['harmfulness']], description=additive['description'])
                e.save()

                print(e)
