"use client";
import React, { useState, useCallback } from "react";

// 定义验证函数的类型
type Validator = () => boolean;

// 自定义 hook 类型
interface UseValidationHook {
  register: (id: string, validator: Validator) => void;
  validateAll: () => boolean[];
}

function useValidation(): UseValidationHook {
  const validators = React.useRef<{ [key: string]: Validator }>({});

  const register = useCallback((id: string, validator: Validator) => {
    console.log(id, "id");

    validators.current[id] = validator;
  }, []);

  const validateAll = useCallback(() => {
    const results: boolean[] = [];

    Object.keys(validators.current).forEach((id) => {
      results.push(validators.current[id]());
    });

    return results;
  }, []);

  return { register, validateAll };
}

const Parent: React.FC = () => {
  const { register, validateAll } = useValidation();

  const handleValidate = () => {
    const results = validateAll();

    console.log("Validation Results:", results);
  };

  return (
    <div>
      <Child id="child1" register={register} />
      <Child id="child2" register={register} />
      <button onClick={handleValidate}>Validate All</button>
    </div>
  );
};

interface ChildProps {
  id: string;
  register: (id: string, validator: Validator) => void;
}

const Child: React.FC<ChildProps> = ({ id, register }) => {
  const [value, setValue] = useState<string>("");
  const validator = () => {
    console.log(value, "value");

    return value.length > 0;
  };

  register(id, validator);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Parent;
