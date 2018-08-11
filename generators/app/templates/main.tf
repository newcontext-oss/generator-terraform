resource "random_id" "uuid" {
  byte_length = 4
}

locals {
  environment_upper = "${upper(var.environment)}"
}
