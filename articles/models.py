from django.conf import settings
from django.db import models
from django.utils import timezone
from django.utils.text import slugify

from django_ckeditor_5.fields import CKEditor5Field


class Category(models.Model):
    """A simple grouping for articles (e.g. Web, AI, Security)."""

    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=120, unique=True, blank=True)

    class Meta:
        verbose_name = 'تصنيف'
        verbose_name_plural = 'التصنيفات'
        ordering = ['name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name, allow_unicode=True)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Article(models.Model):
    """A blog/technology article written by a staff author and shown on /articles."""

    title = models.CharField('العنوان', max_length=255)
    slug = models.SlugField(
        'الرابط (slug)',
        max_length=280,
        unique=True,
        allow_unicode=True,
        help_text='يُملأ تلقائيًا من العنوان. يظهر في رابط المقال.',
    )
    excerpt = models.TextField(
        'مقتطف / وصف مختصر',
        max_length=500,
        blank=True,
        help_text='يظهر في البطاقة وفي نتائج البحث (مهم للـ SEO).',
    )
    cover_image = models.ImageField(
        'صورة الغلاف',
        upload_to='articles/covers/',
        blank=True,
        null=True,
        help_text='تظهر في بطاقة المقال وأعلى الصفحة.',
    )
    content = CKEditor5Field('المحتوى', config_name='extends')

    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        related_name='articles',
        blank=True,
        null=True,
        verbose_name='التصنيف',
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET_NULL,
        related_name='articles',
        blank=True,
        null=True,
        verbose_name='الكاتب',
    )
    author_name = models.CharField(
        'اسم الكاتب (اختياري)',
        max_length=120,
        blank=True,
        help_text='اتركه فارغًا لاستخدام اسم حسابك تلقائيًا.',
    )

    is_published = models.BooleanField('منشور', default=True)
    views = models.PositiveIntegerField('عدد المشاهدات', default=0, editable=False)

    published_at = models.DateTimeField('تاريخ النشر', default=timezone.now)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'مقال'
        verbose_name_plural = 'المقالات'
        ordering = ['-published_at', '-created_at']
        indexes = [
            models.Index(fields=['is_published', '-published_at']),
        ]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title, allow_unicode=True)[:280]
        super().save(*args, **kwargs)

    @property
    def display_author(self):
        if self.author_name:
            return self.author_name
        if self.author:
            full = self.author.get_full_name()
            return full or self.author.get_username()
        return 'فريق موجا'

    def __str__(self):
        return self.title
