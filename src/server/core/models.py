from django.contrib.auth.models import AbstractUser, Permission, Group
from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator


class Student(AbstractUser):
    """Tanulót reprezentáló modell.

    Attribútumok:
        user_permissions: A tanulóhoz tartozó jogosultságok.
        groups: A tanulóhoz tartozó csoportok.
        birth_date: A tanuló születési dátuma.
        school: A tanuló iskolája.
        reviews: A tanulóhoz tartozó értékelések.
    """
    user_permissions = models.ManyToManyField(
        Permission, related_name='student_permissions', blank=True
    )
    groups = models.ManyToManyField(
        Group, related_name='student_groups', blank=True, verbose_name="Csoportok"
    )
    birth_date = models.DateField("Születési dátum", null=False, blank=False)
    school = models.ForeignKey(
        'School', on_delete=models.CASCADE, blank=False, null=False, related_name='school_students'
    )
    reviews = models.ManyToManyField(
        'Review', blank=True, related_name='reviewed_students', verbose_name="Értékelések"
    )


"""A tanár megnevezésének választható értékei."""
TITLE_CHOICES = [
    ('Mr', 'Úr'), ('Mrs', 'Asszony'), ('Miss', 'Hölgy'), ('Dr', 'Dr,'), ('Prof', 'Prof.'),
]


class Teacher(models.Model):
    """Tanárt reprezentáló modell.

    Attribútumok:
        title: A tanár megnevezése.
        first_name: A tanár keresztneve.
        last_name: A tanár vezetékneve.
        birth_date: A tanár születési dátuma.
        email: A tanár e-mail címe.
        school: A tanár iskolája.
        reviews: A tanárhoz tartozó értékelések.
    """
    title = models.CharField("Megnevezés", max_length=10, choices=TITLE_CHOICES, blank=False, null=False, default='Mr')
    first_name = models.CharField("Keresztnév", max_length=50, blank=False, null=False)
    last_name = models.CharField("Vezetéknév", max_length=50, blank=False, null=False)
    birth_date = models.DateField("Születési dátum", null=False, blank=False)
    email = models.EmailField("E-mail cím", blank=False, null=False, unique=True, help_text="Az e-mail címnek egyedinek "
                                                                                                  "kell lennie.")
    school = models.ForeignKey(
        'School', on_delete=models.CASCADE, blank=False, null=False, related_name='school_teachers', verbose_name="Iskola"
    )
    reviews = models.ManyToManyField(
        'Review', blank=True, related_name='reviewed_teachers', verbose_name="Értékelések"
    )


class School(models.Model):
    """Iskolát reprezentáló modell.

    Attribútumok:
        institution_id: Az iskola intézményazonosítója.
        name: Az iskola neve.
        address: Az iskola címe.
        teachers: Az iskolához tartozó tanárok.
        students: Az iskolához tartozó tanulók.
    """
    institution_id = models.CharField(max_length=10, blank=False, null=False)
    logo = models.ImageField(upload_to='static/images/', blank=True, null=True)
    name = models.CharField(max_length=100, blank=False, null=False)
    address = models.CharField(max_length=100, blank=False, null=False)
    teachers = models.ManyToManyField(
        Teacher, blank=True, related_name='teacher_schools'
    )
    students = models.ManyToManyField(
        Student, blank=True, related_name='student_schools'
    )


class Review(models.Model):
    """Értékelést reprezentáló modell.

    Attribútumok:
        rating: Az értékelés értéke.
        comment: Az értékelés megjegyzése.
        student: Az értékelő tanuló.
        teacher: Az értékelt
    """
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        blank=False,
        null=False
    )
    comment = models.TextField(blank=True, null=True)
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, blank=False, null=False, related_name='student_reviews'
    )
    teacher = models.ForeignKey(
        Teacher, on_delete=models.CASCADE, blank=False, null=False, related_name='teacher_reviews'
    )
    created_at = models.DateTimeField(auto_now_add=True)
