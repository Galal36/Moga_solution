from django.urls import path
from .views import ContactSubmissionCreateView

app_name = 'contacts'

urlpatterns = [
    path('submit/', ContactSubmissionCreateView.as_view(), name='contact-submit'),
]
