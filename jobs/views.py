from django.shortcuts import get_object_or_404
from rest_framework import generics
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.permissions import AllowAny

from .models import Job
from .serializers import JobApplicationSerializer, JobSerializer


class JobListView(generics.ListAPIView):
    """GET /api/jobs/ — list of open job openings."""
    serializer_class = JobSerializer
    permission_classes = [AllowAny]
    authentication_classes = []
    queryset = Job.objects.filter(is_open=True)


class JobDetailView(generics.RetrieveAPIView):
    """GET /api/jobs/<slug>/ — a single job opening."""
    serializer_class = JobSerializer
    permission_classes = [AllowAny]
    authentication_classes = []
    lookup_field = 'slug'
    queryset = Job.objects.all()


class JobApplicationCreateView(generics.CreateAPIView):
    """POST /api/jobs/<slug>/apply/ — submit an application (multipart, with CV)."""
    serializer_class = JobApplicationSerializer
    permission_classes = [AllowAny]
    authentication_classes = []
    parser_classes = [MultiPartParser, FormParser]

    def perform_create(self, serializer):
        job = get_object_or_404(Job, slug=self.kwargs['slug'], is_open=True)
        serializer.save(job=job)
