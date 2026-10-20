# MoGa IT Solutions — Backend API

Django REST API powering [moga-solutions.tech](https://moga-solutions.tech): contact form submissions, job postings with CV applications, and a blog/articles section managed through the Django admin.

The React frontend lives in a separate repository: [Moga_solution](https://github.com/Galal36/Moga_solution).

## Tech stack

- Python 3.12, Django 6, Django REST Framework
- PostgreSQL
- CKEditor 5 for rich-text article editing in the admin
- Gunicorn behind Nginx on a Linux VPS

## API

| Method | Endpoint                     | Description                         |
| ------ | ---------------------------- | ----------------------------------- |
| POST   | `/api/contact/`              | Submit a contact form message       |
| GET    | `/api/jobs/`                 | List open jobs                      |
| GET    | `/api/jobs/<slug>/`          | Job details                         |
| POST   | `/api/jobs/<slug>/apply/`    | Apply to a job (multipart, with CV) |
| GET    | `/api/articles/`             | List published articles             |
| GET    | `/api/articles/<slug>/`      | Article details                     |

Content (jobs, articles, categories) and incoming messages/applications are managed at `/admin/`.

## Project structure

```
moga/       # Project settings and URL routing
contact/    # Contact form messages
jobs/       # Job postings and applications
articles/   # Articles and categories
```

## Getting started

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

cp .env.example .env          # then fill in your values
createdb moga_db              # or create the database in psql

python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

All configuration (secret key, database credentials, allowed hosts, CORS origins) is read from environment variables via `python-decouple`; see `.env.example`.
