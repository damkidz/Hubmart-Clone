# Generated by Django 2.2.3 on 2020-10-08 14:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Products', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='current_update',
            field=models.DateField(auto_now=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='expire_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='purchase_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='uploaded_date',
            field=models.DateField(auto_now_add=True, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(upload_to='product/images/uploads_date/%Y/%m/%d/'),
        ),
    ]