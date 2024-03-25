ACR="craaiseacmateprdaue182669440652.azurecr.io"
TAG="/latest"
ACR_USER="craaiseacmateprdaue182669440652"
ACR_PASS="T9LN+evM5wAWD3QqWc8vQRli6A2v9483tc9+uQQS4p+ACRBPJK86"

docker build . -f dockerfile -t $ACR$TAG --no-cache

docker login --username=$ACR_USER --password=$ACR_PASS $ACR

docker push $ACR$TAG