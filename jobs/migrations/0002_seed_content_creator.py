from django.db import migrations

SLUG = 'content_creator'

SUMMARY = (
    'انضم إلى فريق موجا ككاتب ومنشئ محتوى. تشمل المهام كتابة المقالات، '
    'وتحسين محركات البحث (SEO) لصفحات محددة في بعض مشروعاتنا، '
    'وإنشاء محتوى لمنصات التواصل الاجتماعي. العمل عن بُعد بالكامل.'
)


def seed_content_creator(apps, schema_editor):
    Job = apps.get_model('jobs', 'Job')
    Job.objects.update_or_create(
        slug=SLUG,
        defaults={
            'title': 'منشئ محتوى',
            'summary': SUMMARY,
            'salary_from': 2500,
            'currency': 'ج.م',
            'is_remote': True,
            'is_open': True,
        },
    )


def remove_content_creator(apps, schema_editor):
    Job = apps.get_model('jobs', 'Job')
    Job.objects.filter(slug=SLUG).delete()


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_content_creator, remove_content_creator),
    ]
