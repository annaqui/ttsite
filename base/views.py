from django.http import HttpResponse
from django.template import loader


def index(request):
    template = loader.get_template('base/index.html')
    return HttpResponse(template.render(request))

def products(request):
    template = loader.get_template('base/products.html')
    return HttpResponse(template.render(request))
