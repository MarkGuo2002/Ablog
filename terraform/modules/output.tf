output "public_subnet_id" {
  value = aws_subnet.public_subnet.id
}

output "security_group_id" {
  value = aws_security_group.ecs_security_group.id
}

output "app_repository_url" {
  value = aws_ecr_repository.app.repository_url
}

output "db_repository_url" {
  value = aws_ecr_repository.db.repository_url
}

output "task_execution_role_arn" {
  value = aws_iam_role.ecs_task_execution_role.arn
}

output "task_role_arn" {
  value = aws_iam_role.ecs_task_role.arn
}

output "ecs_service_url" {
  value = aws_ecs_service.ablog_service.network_configuration[0].assign_public_ip
}
