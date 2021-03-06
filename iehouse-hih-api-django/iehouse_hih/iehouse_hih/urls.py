from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('history-api/', include('history.urls')),
    path('horary-api/', include('horary.urls')),
    path('inform-api/', include('inform.urls'))
]
