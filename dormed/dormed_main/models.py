from django.db import models

CATEGORY = (
    ('KS', 'Kosmetologia'),
    ('LS', 'Laseroterapia'),
    ('KT', 'Kosmetyka'),
    ('ZE', 'Zabiegi Estetyczne'),
    ('TR', 'Trychologia'),
    ('PD', 'Podologia'),
    ('MS', 'Masaże')
    
)




class Program(models.Model):
    title = models.CharField("Title", max_length=250, unique=True)
    description = models.TextField("Description", null=True, blank=True)
    category = models.CharField(choices=CATEGORY, max_length=2, default='KS')
    results = models.TextField("Result",null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Price(models.Model):
    position = models.CharField("Item name",max_length=150, unique=True)
    price = models.CharField("Item price",max_length=20,null=True, blank=True)
    category = models.CharField(choices=CATEGORY, max_length=2, default="KS")
    
            
    def __str__(self):
        return self.position

class HotelNews(models.Model):
    title = models.CharField("Title", max_length=100)
    header = models.CharField("Header", max_length=200)
    description = models.TextField("Description")
    features = models.TextField("Features and what incuded")
    image_left = models.ImageField(upload_to='', null=True, blank=True)
    image_right = models.ImageField(upload_to='', null=True, blank=True)
    posted_on = models.DateField("Posted on", default='2000-01-01')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Hotel News'
        verbose_name_plural = 'Hotel News'