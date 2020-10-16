from django.db import models
from safedelete.models import SafeDeleteModel
from safedelete.models import SOFT_DELETE_CASCADE
from safedelete.managers import SafeDeleteAllManager

class Product(SafeDeleteModel):
    _safedelete_policy = SOFT_DELETE_CASCADE

    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='product/images/uploads_date/%Y/%m/%d/')
    price = models.DecimalField(max_digits=12,decimal_places=2)
    stock_count = models.CharField(max_length=4)
    in_stock = models.CharField(max_length=10)
    category = models.CharField(max_length=30)
    purchase_date = models.DateField(blank=True, null=True)
    expire_date = models.DateField(blank=True, null=True)
    uploaded_date = models.DateField(auto_now_add=True, blank=True, null=True)
    current_update = models.DateField(auto_now=True, blank=True, null=True)
    
    def __str__(self):
        return self.name
    

    original_objects = SafeDeleteAllManager()
