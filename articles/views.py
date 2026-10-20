from django.db.models import F
from rest_framework import generics
from rest_framework.permissions import AllowAny

from .models import Article
from .serializers import ArticleDetailSerializer, ArticleListSerializer


class ArticleListView(generics.ListAPIView):
    """GET /api/articles/ — published articles for the public cards grid.

    Optional query params:
      ?category=<slug>  filter by category
      ?search=<term>    match title/excerpt
    """
    serializer_class = ArticleListSerializer
    permission_classes = [AllowAny]
    authentication_classes = []

    def get_queryset(self):
        qs = Article.objects.filter(is_published=True).select_related('category', 'author')
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category__slug=category)
        search = self.request.query_params.get('search')
        if search:
            qs = qs.filter(title__icontains=search) | qs.filter(excerpt__icontains=search)
        return qs


class ArticleDetailView(generics.RetrieveAPIView):
    """GET /api/articles/<slug>/ — a single published article with full content."""
    serializer_class = ArticleDetailSerializer
    permission_classes = [AllowAny]
    authentication_classes = []
    lookup_field = 'slug'
    queryset = Article.objects.filter(is_published=True).select_related('category', 'author')

    def retrieve(self, request, *args, **kwargs):
        response = super().retrieve(request, *args, **kwargs)
        # Count a view without racing on the DB value.
        Article.objects.filter(pk=self.get_object().pk).update(views=F('views') + 1)
        return response
