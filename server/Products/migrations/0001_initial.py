# Generated by Django 2.2.3 on 2020-10-08 12:45

from django.db import migrations, models
import django.db.models.manager


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('deleted', models.DateTimeField(editable=False, null=True)),
                ('name', models.CharField(max_length=255)),
                ('image', models.ImageField(upload_to=None)),
                ('price', models.DecimalField(decimal_places=2, max_digits=12)),
                ('stock_count', models.CharField(max_length=4)),
                ('in_stock', models.CharField(max_length=10)),
                ('category', models.CharField(max_length=30)),
            ],
            options={
                'abstract': False,
            },
            managers=[
                ('original_objects', django.db.models.manager.Manager()),
            ],
        ),
    ]