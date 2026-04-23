from rest_framework import serializers
from .models import ContactSubmission

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = [
            'id', 'full_name', 'email', 'company_or_business', 
            'project_type', 'message', 'phone_number', 'source', 'created_at'
        ]
        read_only_fields = ['id', 'created_at']

    def validate_message(self, value):
        if len(value.strip()) < 10:
            raise serializers.ValidationError("Message must be at least 10 characters long.")
        return value
