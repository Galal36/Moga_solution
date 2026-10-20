from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from contact.views import ContactMessageCreateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/contact/', ContactMessageCreateView.as_view(), name='contact-create'),
    path('api/jobs/', include('jobs.urls')),
    path('api/articles/', include('articles.urls')),
    # CKEditor 5 image-upload endpoint (used inside the admin). Mounted under
    # /api/ so the existing nginx proxy to Django covers it without new rules.
    path('api/ckeditor5/', include('django_ckeditor_5.urls')),
]

# Serve uploaded media (CVs) via Django when running with DEBUG (dev server).
# In production nginx serves /media/ directly.
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
