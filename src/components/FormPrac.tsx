import { useState } from "react";

const FormPrac = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    isHuman: true,
    employment: "",
    favColor: "",
  });

  console.log(formData.favColor);
  function handleChange(event: any) {
    const { name, value, type, checked } = event.target;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault(); // Prevents the reload after submit
    console.log(formData);
  }

  return (
    <div>
      <form action="#" className="m-3 p-3" onSubmit={handleSubmit}>
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
        <br />
        <textarea
          className="border-2 mt-2"
          placeholder="Add your comments"
          onChange={handleChange}
          name="comments"
          value={formData.comments}
          cols={23}
        />
        <br />
        <label htmlFor="isHuman">Are you human?</label>
        <input
          type="checkbox"
          name="isHuman"
          id="isHuman"
          onChange={handleChange}
          className="ml-2"
          checked={formData.isHuman}
        />
        <fieldset className="border-2 mt-2 p-2">
          <legend>Current Employment Status</legend>
          <input
            type="radio"
            id="unemployed"
            name="employment"
            value="unemployed"
            onChange={handleChange}
            checked={formData.employment === "unemployed"}
          />
          <label htmlFor="unemployed">Unemployed</label>
          <br />

          <input
            type="radio"
            id="part-time"
            name="employment"
            value="part-time"
            onChange={handleChange}
            checked={formData.employment === "part-time"}
          />
          <label htmlFor="part-time">Part-time</label>
          <br />

          <input
            type="radio"
            id="full-time"
            name="employment"
            value="full-time"
            onChange={handleChange}
            checked={formData.employment === "full-time"}
          />
          <label htmlFor="full-time">Full-time</label>
        </fieldset>

        <br />
        <label htmlFor="favColor">Favourite Color?</label>
        <br />
        <select
          name="favColor"
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
        </select>
        <br />
        <br />
        <button className="border-2 p-2 bg-blue-300 text-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPrac;
