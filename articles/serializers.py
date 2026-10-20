from rest_framework import serializers

from .models import Article, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']


class ArticleListSerializer(serializers.ModelSerializer):
    """Lightweight payload for the /articles cards grid (no full content)."""

    category = CategorySerializer(read_only=True)
    author = serializers.CharField(source='display_author', read_only=True)
    cover_image = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            'id', 'title', 'slug', 'excerpt', 'cover_image',
            'category', 'author', 'published_at', 'views',
        ]

    def get_cover_image(self, obj):
        if not obj.cover_image:
            return None
        request = self.context.get('request')
        url = obj.cover_image.url
        return request.build_absolute_uri(url) if request else url


class ArticleDetailSerializer(ArticleListSerializer):
    """Full payload including the rich-text content for a single article."""

    class Meta(ArticleListSerializer.Meta):
        fields = ArticleListSerializer.Meta.fields + ['content', 'updated_at']
