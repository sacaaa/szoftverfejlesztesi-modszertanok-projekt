from rest_framework import viewsets
from .models import Student, Teacher, School, Review
from .serializers import StudentSerializer, TeacherSerializer, SchoolSerializer, ReviewSerializer
from django.db.models import Avg


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all().annotate(avg_rate=Avg('reviews__rating'))
    serializer_class = TeacherSerializer


class SchoolViewSet(viewsets.ModelViewSet):
    queryset = School.objects.all()
    serializer_class = SchoolSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
