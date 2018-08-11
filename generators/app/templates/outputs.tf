output "random_id" {
  value = "${random_id.uuid.hex}"
}

output "environment" {
  value = "${local.environment_upper}"
}
