import { useState } from "react";

export function useForm(inicialValues){
  const [values, setValues] = useState(inicialValues);

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setValues((prevalues)=>({
      ...prevalues,
      [name] : value,
    }));
  }
  return {values, handleChange,setValues}
}

function asyncSubmit(request) {
  setIsLoading(true);
  request()
    .then(closeActiveModal)

    .catch(console.error)

    .finally(() => setIsLoading(false));
}

