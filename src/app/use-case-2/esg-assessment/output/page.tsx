import { Link, Button, Card, CardHeader, CardBody, Divider } from "@nextui-org/react";

export default function UseCase2OriginationOutput() {
  return (
    <div className="px-6 py-4">
      <div className="mb-2">
        <Link href="/use-case-2/origination" color="foreground">Back</Link>
      </div>

      <h2>Use Case 2 - ESG Assessment</h2>
      
      <div className="py-2">
        <Card shadow="none" className="border my-2">
          <CardHeader>
            <p className="font-semibold">ESG Checklist</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Key point 1</p>
            <p>Key point 2</p>
            <p>Key point 3</p>
            <p>Key point 4</p>
            <p>Key point 5</p>
          </CardBody>
        </Card>
      </div>

      <Button className="mr-2">Refine</Button>
      <Button color="primary">Generate</Button>
    </div>
  )
}