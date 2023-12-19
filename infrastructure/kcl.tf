resource "google_container_cluster" "cluster" {
  name     = var.cluster_name
  location = var.region
  project = var.project_id

  # We can't create a cluster with no node pool defined, but we want to only use
  # separately managed node pools. So we create the smallest possible default
  # node pool and immediately delete it.
  remove_default_node_pool = true
  initial_node_count       = 1
  default_max_pods_per_node = 8
  min_master_version = var.kubernetes_version

  network    = google_compute_network.vpc.name
  subnetwork = google_compute_subnetwork.subnet.name

  private_cluster_config {
    enable_private_endpoint = true
    enable_private_nodes = true
    master_ipv4_cidr_block = var.master_ipv4_cidr_block
  }

  master_authorized_networks_config {
    cidr_blocks {
      cidr_block = var.master_authorized_cidr_block
    }
  }
}

# Separately Managed Node Pool
resource "google_container_node_pool" "node_pool" {
  name       = google_container_cluster.cluster.name
  location   = var.region
  cluster    = google_container_cluster.cluster.name
  
  version = var.kubernetes_node_pool_version
  initial_node_count = var.initial_node_count
  node_locations = var.node_locations

  autoscaling {
    min_node_count = var.min_node_count
    max_node_count = var.max_node_count
  }

  node_config {
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]

    labels = {
      env = var.project_id
    }

    # preemptible  = true
    machine_type = var.machine_type
    service_account = var.service_account
    tags         = var.tags
    metadata = {
      disable-legacy-endpoints = "true"
    }
  }

  depends_on = [ google_container_cluster.cluster ]
}
