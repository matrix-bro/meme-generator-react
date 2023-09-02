import { useState } from "react";

const FormPrac = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData);
  function handleChange(event: any) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div>
      <form action="#" className="m-3">
        <input
          type="text"
          placeholder="First Name"
          className="border-2"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border-2 ml-2"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          className="border-2 ml-2"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
      </form>
    </div>
  );
};

export default FormPrac;
