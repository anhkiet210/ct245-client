const FormInput = (props) => {
  return (
    <div className="form-input">
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  );
};
export default FormInput;
