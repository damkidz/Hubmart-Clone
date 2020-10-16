from django.contrib import admin
from . models import Product
from safedelete.admin import SafeDeleteAdmin, highlight_deleted


class ProductAdmin(SafeDeleteAdmin):
    list_display = (highlight_deleted,  "image", "name", "price", "stock_count", "in_stock",
                    "category", "purchase_date", "expire_date") + SafeDeleteAdmin.list_display
    list_filter = ("name", "category") + SafeDeleteAdmin.list_filter


admin.site.register(Product, ProductAdmin)
