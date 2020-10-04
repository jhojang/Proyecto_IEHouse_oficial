from django.urls import path
from .views import HistoryGetPost

urlpatterns = [
    path('', HistoryGetPost.as_view(), name='History_get_post')
]