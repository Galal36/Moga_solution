from django.contrib import admin
from django.utils.html import format_html

from .models import Article, Category


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'display_author', 'is_published', 'published_at', 'views')
    list_filter = ('is_published', 'category', 'published_at')
    list_editable = ('is_published',)
    search_fields = ('title', 'excerpt', 'content')
    prepopulated_fields = {'slug': ('title',)}
    date_hierarchy = 'published_at'
    readonly_fields = ('views', 'created_at', 'updated_at', 'cover_preview')
    autocomplete_fields = ('category',)
    fieldsets = (
        ('المحتوى', {
            'fields': ('title', 'slug', 'excerpt', 'cover_image', 'cover_preview', 'content'),
        }),
        ('النشر', {
            'fields': ('category', 'author_name', 'is_published', 'published_at'),
        }),
        ('معلومات', {
            'classes': ('collapse',),
            'fields': ('views', 'created_at', 'updated_at'),
        }),
    )

    @admin.display(description='معاينة الغلاف')
    def cover_preview(self, obj):
        if obj.cover_image:
            return format_html(
                '<img src="{}" style="max-height:160px;border-radius:8px;" />',
                obj.cover_image.url,
            )
        return '—'

    def save_model(self, request, obj, form, change):
        # Default the author to the logged-in writer on first save.
        if not obj.author_id:
            obj.author = request.user
        super().save_model(request, obj, form, change)
