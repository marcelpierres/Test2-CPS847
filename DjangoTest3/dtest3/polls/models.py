

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import datetime
from django.db import models
from django.utils import timezone

# Create your models here.
class Question(models.Model):
    questiontext = models.CharField(max_length=200)
    pubdate = models.DateTimeField('date published')
    owner = models.CharField(max_length=50, default="Anon")
    def __str__(self):
        return self.questiontext
    def was_published_recently(self):
        return self.pubdate >= timezone.now() - datetime.timedelta(days=1)

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choicetext = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
    def __str__(self):
        return self.choicetext