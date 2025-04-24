from django.contrib import admin
from .models import Transaction

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ("user", "date", "description", "amount", "account", "category", "uploaded_at")
    search_fields = ("description", "account", "category", "user__username")
    list_filter = ("user", "date", "account", "category")

# Register your models here.
