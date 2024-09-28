from rest_framework import serializers
from .models import Student, Teacher, School, Review
from django.db.models import Avg  # Hozzáadva az Avg import


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):
    avg_rate = serializers.SerializerMethodField()
    reviews = ReviewSerializer(many=True, read_only=True)

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
            'reviews',
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
