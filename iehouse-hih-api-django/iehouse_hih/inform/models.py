# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Bombillo(models.Model):
    name = models.CharField(unique=True, max_length=255, blank=True, null=True)
    state = models.BooleanField()
    id_room = models.ForeignKey(
        'Room', 
        models.DO_NOTHING, 
        db_column='id_room', 
        blank=True, 
        null=True
    )

    class Meta:
        managed = False
        db_table = 'bombillo'

    def __str__(self):
        return self.name


# class BombilloUser(models.Model):
#     id_user = models.ForeignKey('Users', models.DO_NOTHING, db_column='id_user')
#     id_bombillo = models.ForeignKey(Bombillo, models.DO_NOTHING, db_column='id_bombillo')

#     class Meta:
#         managed = False
#         db_table = 'bombillo_user'


# class History(models.Model):
#     hora_inicio = models.TimeField(blank=True, null=True)
#     hora_fin = models.TimeField(blank=True, null=True)
#     id_bombillo = models.ForeignKey(Bombillo, models.DO_NOTHING, db_column='id_bombillo', blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'history'


# class Horary(models.Model):
#     starts_at = models.DateTimeField(blank=True, null=True)
#     ends_at = models.DateTimeField(blank=True, null=True)
#     id_bombillo = models.ForeignKey(Bombillo, models.DO_NOTHING, db_column='id_bombillo', blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'horary'


class Inform(models.Model):
    potencia_bombillo = models.DecimalField(
        max_digits=5, 
        decimal_places=2, 
        blank=True, 
        null=True
    )
    hours_on = models.DecimalField(
        max_digits=5, 
        decimal_places=2, 
        blank=True, 
        null=True
    )
    date = models.DateTimeField(auto_now_add=True)
    id_bombillo = models.ForeignKey(
        Bombillo,
        models.DO_NOTHING, 
        db_column='id_bombillo', 
        blank=True, 
        null=True
    )

    class Meta:
        managed = False
        db_table = 'inform'

    def __str__(self):
        return self.date


# class Rol(models.Model):
#     name = models.CharField(max_length=20, blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'rol'


class Room(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'room'


# class Users(models.Model):
#     created_at = models.DateTimeField(blank=True, null=True)
#     email = models.CharField(max_length=255, blank=True, null=True)
#     id_rol = models.IntegerField(blank=True, null=True)
#     last_name = models.CharField(max_length=255, blank=True, null=True)
#     name = models.CharField(max_length=255, blank=True, null=True)
#     password = models.CharField(max_length=255, blank=True, null=True)
#     remember_token = models.CharField(max_length=255, blank=True, null=True)
#     updated_at = models.DateTimeField(blank=True, null=True)
#     username = models.CharField(max_length=255, blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'users'
