# Generated by Django 4.2.2 on 2023-06-19 14:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_usertoken_alter_user_email_alter_user_password'),
    ]

    operations = [
        migrations.CreateModel(
            name='ResetPassword',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255, validators=[django.core.validators.EmailValidator()])),
                ('token', models.CharField(max_length=255)),
            ],
        ),
    ]
