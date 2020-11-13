import { useState } from "react";

const useFormattedData = (params: Array<{}>): any => {
  const [formatted, setFormatted] = useState(params);

  const sortBy = (propertyName: string) => {
   formatted.sort((a:any, b:any) => a.propertyName == b.propertyName ?  a[propertyName] > b[propertyName] ? 1 : a[propertyName] < b[propertyName] ? -1 : 0 : a[propertyName] > b[propertyName] ? -1 : a[propertyName] < b[propertyName] ? 1 : 0);
  };

  const filter = (f: any) => {
    return setFormatted(formatted.filter(f))
  };

  const search = (input: string) => {
    let res: Array<{}> = [{}];
    formatted.forEach((element) => {
      for (let el of Object.values(element)) {
        if (el === input) {res.push(element)};
      }
    });
    setFormatted(res);
  };

  return [formatted, sortBy, filter, search];
};

export default useFormattedData;
