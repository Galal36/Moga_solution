from django.db import models
from apps.common.models import TimeStampedModel

class ContactSubmission(TimeStampedModel):
    class Status(models.TextChoices):
        NEW = 'NEW', 'New'
        REVIEWED = 'REVIEWED', 'Reviewed'
        CONTACTED = 'CONTACTED', 'Contacted'
        ARCHIVED = 'ARCHIVED', 'Archived'

    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    company_or_business = models.CharField(max_length=255, blank=True, null=True)
    project_type = models.CharField(max_length=100, blank=True, null=True)
    message = models.TextField()
    phone_number = models.CharField(max_length=50, blank=True, null=True)
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.NEW)
    source = models.CharField(max_length=100, blank=True, null=True, help_text="e.g. website, referral")

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Submission'
        verbose_name_plural = 'Contact Submissions'

    def __str__(self):
        return f"{self.full_name} - {self.email} ({self.get_status_display()})"
