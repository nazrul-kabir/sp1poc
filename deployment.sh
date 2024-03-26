ACR="crpocmaybank.azurecr.io"
TAG="/latest"
ACR_USER="crpocmaybank"
ACR_PASS="ho97W11ysKB2FKAnB2KxaJbDHfm7Ec8J2g4zFFg1Nd+ACRAQkUyU"

docker build . -f dockerfile -t $ACR$TAG --no-cache

docker login --username=$ACR_USER --password=$ACR_PASS $ACR

docker push $ACR$TAG