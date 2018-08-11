module "test" {
  source      = "../../.."
  environment = "test"
}

output "id" {
  value = "${module.test.random_id}"
}

output "environment" {
  value = "${module.test.environment}"
}
