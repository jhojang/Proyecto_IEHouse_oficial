# Generated by Django 3.1.2 on 2020-10-04 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bombillo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True, unique=True)),
                ('state', models.BooleanField()),
            ],
            options={
                'db_table': 'bombillo',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Horary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('starts_at', models.DateTimeField()),
                ('ends_at', models.DateTimeField()),
            ],
            options={
                'db_table': 'horary',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True)),
            ],
            options={
                'db_table': 'room',
                'managed': False,
            },
        ),
    ]
