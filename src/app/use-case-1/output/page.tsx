"use client";
import {
  Link,
  Button,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Tooltip,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function UseCase1Output() {
  // const input = JSON.parse(window.localStorage.getItem('data_input_uc1') || 'null');

  const [isLoading, setLoading] = useState(false);
  const [selectedAnalysis, setSelectedAnalysis] = useState<string[]>([]);
  const [dataOutput, setDataOutput] = useState<any>({});

  useEffect(() => {
    const analysis = JSON.parse(
      window.localStorage.getItem("uc1_analysis_input") || "{}"
    );
    setSelectedAnalysis(analysis?.analysis);

    const output = JSON.parse(
      window.localStorage.getItem("uc1_data_output") || "{}"
    );
    setDataOutput(output);

    console.log("++ uc1 out", output);
  }, []);

  return (
    <div className="px-6 py-4">
      <div className="mb-2">
        <Link href="/use-case-1" color="foreground">
          Back
        </Link>
      </div>

      <h2>Use Case 1 - Client Prospecting</h2>

      <div>
        <span className="font-medium">Analysis selected: </span>
        <span>{selectedAnalysis?.join(", ")}</span>
      </div>

      {isLoading ? (
        <p className="py-4">Loading...</p>
      ) : (
        <div className="py-2 gap-4 grid grid-flow-row">
          <Card shadow="none" className="border my-2">
            <CardHeader className="flex flex-row justify-between">
              <p className="font-semibold">Company Analysis</p>
              {/* <Tooltip content="Refine" closeDelay={100}>
                <Button variant="light" isIconOnly>
                  <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
                </Button>
              </Tooltip> */}
            </CardHeader>
            <Divider />
            <CardBody>
              <div className="whitespace-pre-line">
                {dataOutput?.company_analysis}
              </div>
              {/* <div dangerouslySetInnerHTML={{__html: text}}></div> */}
            </CardBody>
          </Card>

          {selectedAnalysis?.includes("industry_analysis") && (
            <Card shadow="none" className="border my-2">
              <CardHeader className="flex flex-row justify-between">
                <p className="font-semibold">Industry Analysis</p>
                {/* <Tooltip content="Refine" closeDelay={100}>
                  <Button variant="light" isIconOnly>
                    <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
                  </Button>
                </Tooltip> */}
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="whitespace-pre-line">
                  {dataOutput?.industry_analysis}
                </div>
              </CardBody>
            </Card>
          )}

          {selectedAnalysis?.includes("financial_analysis") && (
            <Card shadow="none" className="border my-2">
              <CardHeader className="flex flex-row justify-between">
                <p className="font-semibold">Financial Analysis</p>
                {/* <Tooltip content="Refine" closeDelay={100}>
                  <Button variant="light" isIconOnly>
                    <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
                  </Button>
                </Tooltip> */}
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="whitespace-pre-line">
                  {dataOutput?.financial_analysis}
                </div>
              </CardBody>
            </Card>
          )}

          {selectedAnalysis?.includes("product_suggestion") && (
            <Card shadow="none" className="border my-2">
              <CardHeader className="flex flex-row justify-between">
                <p className="font-semibold">Product Suggestion</p>
                {/* <Tooltip content="Refine" closeDelay={100}>
                  <Button variant="light" isIconOnly>
                    <FontAwesomeIcon icon={faArrowsRotate} size="lg" />
                  </Button>
                </Tooltip> */}
              </CardHeader>
              <Divider />
              <CardBody>
                <div className="whitespace-pre-line">
                  {dataOutput?.product_suggestion}
                </div>
              </CardBody>
            </Card>
          )}
        </div>
      )}

      <Button className="mr-2" isDisabled>Refine</Button>
      <Button color="primary" onClick={() => window.print()}>Download</Button>
    </div>
  );
}
