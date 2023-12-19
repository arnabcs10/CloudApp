
#################### Common Variables ###################
variable "project_id" {
  default     = ""
  description = "GCP Project ID"
}

variable "region" {
  default = ""
  description = "region"
}

variable "credentials" {
  default = ""
}

################## Network #############################
variable "network" {
  type = string
  default = ""
  description = "network"
}

variable "subnetwork" {
  type = string
  default = ""
  description = "network"
}

variable "network" {
  type = string
  default = ""
  description = "network"
}

################ GKE Variables #############################
variable "cluster_name" {
  type = string
  default = ""
  description = "KCL Name"
}

variable "node_pool_name" {
  type = string
  default = ""
  description = "KCL Name"
}

variable "machine_type" {
  type = string
  default = ""
  description = "KCL Name"
}

variable "initial_node_count" {
  type = number
  default = ""
  description = "KCL Name"
}

variable "min_node_count" {
  type = number
  default = ""
  description = "KCL Name"
}

variable "max_node_count" {
  type = number
  default = ""
  description = "KCL Name"
}

variable "node_locations" {
  type = list(string)
  default = ""
  description = "KCL Name"
}

variable "kubernetes_version" {
  type = number
  default = ""
  description = "KCL Name"
}

variable "kubernetes_node_pool_version" {
  type = number
  default = ""
  description = "KCL Name"
}

variable "master_ipv4_cidr_block" {
  type = string
  default = ""
  description = "KCL Name"
}

variable "master_authorized_cidr_block" {
  type = string
  default = ""
  description = "KCL Name"
}

variable "service_account" {
  type = string
  default = ""
}

variable "tags" {
  type = list(string)
}

