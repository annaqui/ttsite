from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^products/', views.products, name='index'),
    url(r'^$', views.index, name='index'),
]
