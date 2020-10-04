from django.urls import path
from .views import InformGetPost, InfromGetByIdUpdateDelete

urlpatterns = [
    path('inform', InformGetPost.as_view(), name='inform_get_post'),
    path('inform/<int:id>', InfromGetByIdUpdateDelete.as_view(), name="inform_getbyid_update_delete"),
]