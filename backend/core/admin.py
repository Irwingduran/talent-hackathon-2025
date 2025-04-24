from django.contrib import admin
from .models import Transaction

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ("date", "description", "amount", "account", "category", "uploaded_at")
    search_fields = ("description", "account", "category")
    list_filter = ("date", "account", "category")

# Register your models here.
