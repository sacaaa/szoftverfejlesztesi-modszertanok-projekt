from rest_framework import serializers
from .models import Student, Teacher, School, Review
from django.db.models import Avg


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    student = StudentSerializer(read_only=True)

    class Meta:
        model = Review
        fields = ['id', 'rating', 'comment', 'created_at', 'student']


class TeacherSerializer(serializers.ModelSerializer):
    avg_rate = serializers.SerializerMethodField()
    reviews = ReviewSerializer(many=True, read_only=True)  # Használj ReviewSerializer-t

    class Meta:
        model = Teacher
        fields = [
            'id',
            'title',
            'first_name',
            'last_name',
            'birth_date',
            'email',
            'school',
            'reviews',  # Itt már részletes review-kat kapsz
            'avg_rate',
        ]

    @staticmethod
    def get_avg_rate(obj):
        avg = obj.reviews.aggregate(avg=Avg('rating'))['avg']
        return round(avg, 2) if avg else None


class SchoolSerializer(serializers.ModelSerializer):
    class Meta:
        model = School
        fields = '__all__'
