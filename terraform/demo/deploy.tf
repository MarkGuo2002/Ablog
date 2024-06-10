provider "aws" {
  region = "us-west-2"  # Change to your preferred region
}

module "vpc" {
  source = "../modules"
}

module "security_group" {
  source = "../modules"
  vpc_id = module.vpc.vpc_id
}

module "ecr" {
  source = "../modules"
}

module "iam" {
  source = "../modules"
}

module "ecs" {
  source                = "../modules"
  vpc_id                = module.vpc.vpc_id
  subnet_id             = module.vpc.public_subnet_id
  security_group_id     = module.security_group.security_group_id
  task_execution_role_arn = module.iam.task_execution_role_arn
  task_role_arn           = module.iam.task_role_arn
  ecr_app_url           = module.ecr.app_repository_url
  ecr_db_url            = module.ecr.db_repository_url
}
