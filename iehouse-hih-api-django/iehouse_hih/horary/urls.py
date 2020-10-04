from django.urls import path
from .views import HoraryGetPost, HoraryGetByIdUpdateDelete

urlpatterns = [
    path('horary', HoraryGetPost.as_view(), name='horary_get_post'),
    path('horary/<int:id>', HoraryGetByIdUpdateDelete.as_view(), name="horary_getbyid_update_delete"),
]