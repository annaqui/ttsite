from django.conf.urls import include, url

from . import views

urlpatterns = [
    url(r'^products/', views.products, name='index'),
    url(r'^$', views.index, name='index'),
	url(r'^front-edit/', include('front.urls')),
	url(r'^login/$', 'django.contrib.auth.views.login'),
    url(r'^logout/$', 'django.contrib.auth.views.logout'),
]
