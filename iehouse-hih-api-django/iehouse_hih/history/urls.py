from django.urls import path
from .views import HistoryGetPost, HistoryGetByIdUpdateDelete

urlpatterns = [
    path('history', HistoryGetPost.as_view(), name='History_get_post'),
    path('history/<int:id>', HistoryGetByIdUpdateDelete.as_view(), name="History_getbyid_update_delete"),
]