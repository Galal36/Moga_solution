from django.contrib import admin
from .models import ContactSubmission

@admin.register(ContactSubmission)
class ContactSubmissionAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'project_type', 'status', 'created_at')
    list_filter = ('status', 'project_type', 'created_at', 'source')
    search_fields = ('full_name', 'email', 'message', 'company_or_business')
    readonly_fields = ('created_at', 'updated_at')
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Submitter Info', {
            'fields': ('full_name', 'email', 'phone_number', 'company_or_business')
        }),
        ('Message Details', {
            'fields': ('project_type', 'message', 'source')
        }),
        ('Status', {
            'fields': ('status',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )
