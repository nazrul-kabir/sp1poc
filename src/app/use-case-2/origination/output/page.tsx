import { Link, Button, Card, CardHeader, CardBody, Divider, Tooltip } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function UseCase2OriginationOutput() {
  return (
    <div className="px-6 py-4">
      <div className="mb-2">
        <Link href="/use-case-2/origination" color="foreground">Back</Link>
      </div>

      <h2>Use Case 2 - Origination</h2>
      
      <div className="py-2 gap-4 grid grid-cols-2 md:grid-cols-3">
        <Card shadow="none" className="border my-2">
          <CardHeader className="flex flex-row justify-between">
            <p className="font-semibold">Background Analysis</p>
            <Tooltip content="Refine" closeDelay={100}>
              <Button variant="light" isIconOnly>
                <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
              </Button>
            </Tooltip>
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

        <Card shadow="none" className="border my-2">
          <CardHeader className="flex flex-row justify-between">
            <p className="font-semibold">Financial Analysis</p>
            <Tooltip content="Refine" closeDelay={100}>
              <Button variant="light" isIconOnly>
                <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
              </Button>
            </Tooltip>
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

        <Card shadow="none" className="border my-2">
          <CardHeader className="flex flex-row justify-between">
            <p className="font-semibold">ESG Analysis</p>
            <Tooltip content="Refine" closeDelay={100}>
              <Button variant="light" isIconOnly>
                <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
              </Button>
            </Tooltip>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Product 1</p>
            <p>Product 2</p>
            <p>Product 3</p>
          </CardBody>
        </Card>
      </div>

      <Button className="mr-2">Refine</Button>
      <Button color="primary">Generate</Button>
    </div>
  )
}