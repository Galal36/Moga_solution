from django.contrib import admin

from .models import Job, JobApplication


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'salary_from', 'currency', 'is_remote', 'is_open', 'created_at')
    list_filter = ('is_open', 'is_remote')
    search_fields = ('title', 'slug')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('created_at',)


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'job', 'phone', 'email', 'created_at')
    list_filter = ('job', 'created_at')
    search_fields = ('name', 'phone', 'email', 'address')
    readonly_fields = ('created_at',)
