from django.db import models

class Transaction(models.Model):
    date = models.DateField()
    description = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    account = models.CharField(max_length=100, blank=True, null=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    # Optionally, add a ForeignKey to user later
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.date} | {self.description} | {self.amount}"
