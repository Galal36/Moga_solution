import os

from rest_framework import serializers

from .models import CV_ALLOWED_EXTENSIONS, CV_MAX_SIZE, Job, JobApplication


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = [
            'id', 'slug', 'title', 'summary',
            'salary_from', 'currency', 'is_remote', 'is_open', 'created_at',
        ]


class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = ['id', 'name', 'phone', 'email', 'address', 'cv', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_cv(self, value):
        if value.size > CV_MAX_SIZE:
            raise serializers.ValidationError(
                'حجم الملف يجب ألا يتجاوز 3 ميجابايت.'
            )
        ext = os.path.splitext(value.name)[1].lower().lstrip('.')
        if ext not in CV_ALLOWED_EXTENSIONS:
            raise serializers.ValidationError(
                'صيغة الملف غير مدعومة. الرجاء رفع ملف بصيغة PDF أو Word.'
            )
        return value
