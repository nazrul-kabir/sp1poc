# ACR="crpocmaybank.azurecr.io"
TAG="/latest"
# ACR_USER="crpocmaybank"
ACR_PASS=""

docker build . -f dockerfile -t $ACR$TAG --no-cache

docker login --username=$ACR_USER --password=$ACR_PASS $ACR

docker push $ACR$TAG