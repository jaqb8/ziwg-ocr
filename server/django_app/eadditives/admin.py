from django.contrib import admin
from .models import Eadditives

@admin.register(Eadditives)
class EadditivesAdmin(admin.ModelAdmin):
    list_display = ('code', 'name', 'get_additive_type', 'get_harmfulness')

    search_fields = ('code__startswith', 'name__startswith')

    def get_additive_type(self, obj):
        return obj.get_additive_type_display()
    get_additive_type.short_description = 'Additive type'

    def get_harmfulness(self, obj):
        return obj.get_harmfulness_display()
    get_harmfulness.short_description = 'Harmfulness'