# Generated by Django 4.2.2 on 2023-06-30 13:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0002_remove_job_created_at_remove_job_expiration_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='job',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='job',
            name='expiration_date',
            field=models.DateField(default=datetime.datetime.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='job',
            name='published_date',
            field=models.DateField(default=datetime.datetime.now),
            preserve_default=False,
        ),
    ]