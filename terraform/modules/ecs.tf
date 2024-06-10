resource "aws_ecs_cluster" "ablog_cluster" {
  name = "ablog-cluster"
}

resource "aws_ecs_task_definition" "ablog_task" {
  family                   = "ablog-task"
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "512"
  memory                   = "1024"
  execution_role_arn       = var.task_execution_role_arn
  task_role_arn            = var.task_role_arn

  container_definitions = jsonencode([
    {
      name      = "app"
      image     = "${var.ecr_app_url}:latest"
      essential = true
      portMappings = [
        {
          containerPort = 5000
          hostPort      = 5000
        }
      ]
      environment = [
        {
          name  = "PGUSER"
          value = "admin"
        },
        {
          name  = "PGPASSWORD"
          value = "1234"
        },
        {
          name  = "PGDATABASE"
          value = "ablog"
        },
        {
          name  = "PGHOST"
          value = "db"
        },
        {
          name  = "PGPORT"
          value = "5432"
        }
      ]
    },
    {
      name      = "db"
      image     = "${var.ecr_db_url}:latest"
      essential = true
      portMappings = [
        {
          containerPort = 5432
          hostPort      = 5432
        }
      ]
      environment = [
        {
          name  = "POSTGRES_USER"
          value = "admin"
        },
        {
          name  = "POSTGRES_PASSWORD"
          value = "1234"
        },
        {
          name  = "POSTGRES_DB"
          value = "ablog"
        }
      ]
    }
  ])
}

resource "aws_ecs_service" "ablog_service" {
  name            = "ablog-service"
  cluster         = aws_ecs_cluster.ablog_cluster.id
  task_definition = aws_ecs_task_definition.ablog_task.arn
  desired_count   = 1
  launch_type     = "FARGATE"
  network_configuration {
    subnets          = [var.subnet_id]
    security_groups  = [var.security_group_id]
    assign_public_ip = true
  }
}

output "ecs_service_url" {
  value = aws_ecs_service.ablog_service.network_configuration[0].assign_public_ip
}
