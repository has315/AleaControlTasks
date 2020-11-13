import React from "react";


//type to allow component nesting
type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

//form props type
type FormProps = WithChildren<{
    initialValues: any,
    onSubmit: any,
    className: string
}>


const Form = ({children, initialValues, onSubmit, className}: FormProps) => {

  //function to prevent reload and log state
  const onSubmite = (e:any) => {
    e.preventDefault();
    console.log(initialValues)
  }

  //Function that accepts destructured object value and name from input, and performs change logic on state
  const onChange = ({currentTarget: { value, name }}:any) => {
    let nameSplit = name?.split('.');
    if(nameSplit.length > 1) {
      onSubmit({...initialValues, ...{[nameSplit[0]]: {...initialValues[nameSplit[0]], [nameSplit[1]]: value }}})
    } else {
      onSubmit({...initialValues, [name]: value });
    }
  }
  
  //note for children.map might break app
  return (
      <>
      <form className={className} onSubmit={onSubmite}> 
        {children ? React.Children.map(children, (el:any, index:any)=> React.cloneElement(el,{key:index, onChange: onChange})) : ""} 
      </form>
      <div id="holderDiv"></div>
      </>
  )


};

export default Form;
