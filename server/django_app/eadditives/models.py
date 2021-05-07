from django.db import models
from django.utils.translation import gettext_lazy as _

class AdditiveType(models.TextChoices):
    COLOURS = 'COLOURS', _('Food colours')
    PRESERVATIVES = 'PRESERVATIVES', _('Preservatives')
    ANTIOXIDANTS = 'ANTIOXIDANTS', _('Antioxidants')
    THICKENERS = 'THICKENERS', _('Thickeners, emulsifiers and stabilisers')
    ACIDITY_REGULATORS = 'ACIDITY_REGULATORS', _('Acidity regulators, anti-caking agents')
    FLAVOUR_ENHANCERS = 'FLAVOUR_ENHANCERS', _('Flavour enhancers')
    SWEETENERS = 'SWEETENERS', _('Sweeteners, foaming agents and gases')
    ADDITIONAL_CHEMICALS = 'ADDITIONAL_CHEMICALS', ('Additional Chemicals')
    NO_TYPE = 'NO_TYPE', _('No type provided for this additive yet')

class Harmfulness(models.TextChoices):
    SAFE = 'SAFE', _('Safe')
    POTENTIALLY_DANGEROUS = 'POTENTIALLY_DANGEROUS', _('Potentially dangerous')
    DANGEROUS = 'DANGEROUS', _('Dangerous')
    NO_INFO = 'NO_INFO', _('No information about the harmfulness of this additive yet')

class Eadditives(models.Model):
    code = models.CharField(max_length=10, unique=True)
    name = models.CharField(max_length=300)
    additive_type = models.CharField(max_length=30, choices=AdditiveType.choices, default=AdditiveType.NO_TYPE)
    harmfulness = models.CharField(max_length=30, choices=Harmfulness.choices, default=Harmfulness.NO_INFO)
    description = models.TextField()

    def __str__(self):
        return '{} {}'.format('E' + self.code, self.name)