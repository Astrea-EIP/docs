---
title: Disaster Recovery
sidebar_position: 5
description: How to rebuild a lost preprod or prod server from scratch.
---

# Disaster Recovery

## Purpose

This page explains how to rebuild a server that is lost (deleted, suspended
for good, corrupted) so that the environment runs again with the versions
declared in `deploy-orchestration`.

## What survives and what does not

- **Survives**: everything in Git (`environments/*.yml`, compose files,
  playbook), the published GHCR images, GitHub Environment secrets.
- **Lost with the server**: the hand-written `.env.secrets`, and the data in
  the MongoDB volume unless a backup exists elsewhere.
- A new `Jwt__SigningKey` signs every user out once (see the
  `deploy-orchestration` README, "Token signing key").

## Rules

- A rebuild uses only what is in Git plus `.env.secrets`: no manual step on
  the server other than writing that file.
- Never copy a key or secret into an issue, a chat or a workflow log while
  recovering.
- Preprod is rebuilt and checked before prod when both are lost.

## Procedure

1. Create a new VM: Ubuntu 24.04, x86_64 (see `deploy-orchestration#16` for
   the school VM settings). Note its address.
2. In `deploy-orchestration`, fill in `ansible/inventory.yml` with the new
   address (from `ansible/inventory.example.yml`), then run the server setup:
   `ansible-playbook -i ansible/inventory.yml ansible/server-setup.yml`
   (see `docs/server-setup.md` in that repository). Docker, the `deploy` user,
   the members' SSH keys, the firewall and the deployment directory are now in
   place.
3. As `deploy`, write `.env.secrets` in the deployment directory by hand
   (README, "Token signing key"), `chmod 600`.
4. Update the server address in the GitHub Environment secrets used by the
   deploy workflow, if it changed.
5. Deploy: `deploy.sh <env>` on the server, or the deploy workflow from GitHub
   Actions (`deploy-orchestration#18`).
6. Check: health endpoints answer, an end-to-end itinerary works, and the
   environment runs the versions in `environments/<env>.yml`.

## Expected duration

Estimated at **30 to 60 minutes** from VM creation to a working environment.
**To be measured** on the first real rebuild; replace this estimate with the
measured time.

## Open points

- `deploy.sh` and the deploy workflow do not exist yet (`deploy-orchestration#18`).
- MongoDB backups are not set up: data is lost with the server until they are.

## Validation checklist

- The playbook succeeds on the new VM, and a second run changes nothing.
- `deploy.sh <env>` works with no manual step other than `.env.secrets`.
- The measured duration is recorded on this page.
