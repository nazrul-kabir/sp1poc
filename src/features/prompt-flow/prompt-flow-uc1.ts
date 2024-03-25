export const PromptFlowUc1 = async (clientName: string, industry: string) => {
  console.log("+++ process.env.AZURE_PROMPTFLOW_ENDPOINT_UC1", process.env.NEXT_PUBLIC_AZURE_PROMPTFLOW_DEPLOYMENT_NAME_UC1)
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_AZURE_PROMPTFLOW_ENDPOINT_UC1 || '', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS, PATCH, PROPFIND, PROPPATCH, MKCOL, COPY, MOVE, LOCK',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Expose-Headers': '*',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_AZURE_PROMPTFLOW_KEY_UC1 || ''}`,
        'azureml-model-deployment': process.env.NEXT_PUBLIC_AZURE_PROMPTFLOW_DEPLOYMENT_NAME_UC1 || '',
      },
      body: JSON.stringify({ 
        "company_name": "Maybank",
        "client_name": clientName,
        "industry": industry,
      }),
      cache: "no-cache",
    });

    return await res.json();
  } catch (e) {
    console.log(e);
  }
}
