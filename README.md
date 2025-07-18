## Usage

```
kubectl apply -f deployments.yaml
```

### Vérifier la `readiness` du frontend:
```
watch -n 0.1 -p kubectl get pod
```

