"use client";

import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useState } from "react";

import { cardGap } from "@/components/primitives";

const Parent: React.FC = () => {
  return (
    <div className={cardGap()}>
      <OrdinaryAPI />
      <IpfsAPI />
    </div>
  );
};

const OrdinaryAPI = () => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  const hanldPost = async () => {
    const res = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({
        data: value,
      }),
    }).then((res) => res.json());

    setOutput(JSON.stringify(res));
  };

  const handleGet = async () => {
    const res = await fetch(`/api/test?id=${value}`, {
      method: "get",
    }).then((res) => res.json());

    setOutput(JSON.stringify(res));
  };

  return (
    <Card>
      <CardHeader>普通接口</CardHeader>
      <CardBody>
        <Input value={value} onValueChange={setValue} />
        <div className="h-32 w32 border-spacing-1">{output}</div>
      </CardBody>
      <CardFooter>
        <Button color="primary" onClick={hanldPost}>
          POST
        </Button>
        <Button color="primary" onClick={handleGet}>
          GET
        </Button>
      </CardFooter>
    </Card>
  );
};

const IpfsAPI = () => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");

  const hanldPost = async () => {
    const res = await fetch("/api/submission", {
      method: "POST",
      body: JSON.stringify({
        data: value,
      }),
    }).then((res) => res.json());

    setOutput(JSON.stringify(res));
  };

  const handleGet = async () => {
    const res = await fetch(`/api/submission?cid=${value}`, {
      method: "get",
    }).then((res) => res.json());

    setOutput(JSON.stringify(res));
  };

  return (
    <Card>
      <CardHeader>IPFS接口</CardHeader>
      <CardBody>
        <Input value={value} onValueChange={setValue} />
        <div className="h-32 w32 border-spacing-1">{output}</div>
      </CardBody>
      <CardFooter>
        <Button color="primary" onClick={hanldPost}>
          POST
        </Button>
        <Button color="primary" onClick={handleGet}>
          GET
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Parent;
