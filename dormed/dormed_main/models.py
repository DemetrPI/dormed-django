from django.db import models

class Program(models.Model):
    title = models.CharField("Title", max_length=250, unique=True)
    description = models.TextField("Description", null=True, blank=True)
    results = models.TextField("Result",null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Price(models.Model):
    item = models.CharField("Rodzaj zabiegu",max_length=150, unique=True)
    price_dormed = models.CharField("Cena dla mieszkańców Willi Dorotka i Dormed Medical SPA",max_length=20,null=True, blank=True)
    price_others = models.CharField("Cena dla klientów z zewnątrz",max_length=20,null=True, blank=True)
    
    
    def __str__(self):
        return self.item
    