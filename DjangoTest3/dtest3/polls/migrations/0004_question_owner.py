# -*- coding: utf-8 -*-
# Generated by Django 1.11.12 on 2018-04-19 05:36
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0003_auto_20180419_0444'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='owner',
            field=models.CharField(default='Anon', max_length=50),
        ),
    ]
