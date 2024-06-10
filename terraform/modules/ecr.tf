resource "aws_ecr_repository" "app" {
  name = "ablog-app-app"
}

resource "aws_ecr_repository" "db" {
  name = "ablog-app-db"
}

output "app_repository_url" {
  value = aws_ecr_repository.app.repository_url
}

output "db_repository_url" {
  value = aws_ecr_repository.db.repository_url
}
