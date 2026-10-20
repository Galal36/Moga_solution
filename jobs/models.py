from django.core.validators import FileExtensionValidator
from django.db import models

# Maximum allowed size for an uploaded CV (3 MB).
CV_MAX_SIZE = 3 * 1024 * 1024
CV_ALLOWED_EXTENSIONS = ['pdf', 'doc', 'docx']


class Job(models.Model):
    """A job opening that people can apply to (e.g. content_creator, backend)."""

    slug = models.SlugField(max_length=120, unique=True)
    title = models.CharField(max_length=255)
    summary = models.TextField(blank=True)
    salary_from = models.PositiveIntegerField(default=0)
    currency = models.CharField(max_length=20, default='ج.م')
    is_remote = models.BooleanField(default=True)
    is_open = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.title} ({self.slug})"


class JobApplication(models.Model):
    """A single application submitted by a candidate for a given job."""

    job = models.ForeignKey(
        Job,
        on_delete=models.CASCADE,
        related_name='applications',
    )
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=40)
    email = models.EmailField(blank=True)
    address = models.CharField(max_length=500)
    cv = models.FileField(
        upload_to='cvs/',
        validators=[FileExtensionValidator(
            allowed_extensions=CV_ALLOWED_EXTENSIONS,
            message='صيغة الملف غير مدعومة. الرجاء رفع ملف بصيغة PDF أو Word.',
        )],
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} → {self.job.title}"
