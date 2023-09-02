import { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    newsletter: true,
  });

  console.log(formData);

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
    event.preventDefault();
    const verifyPassword =
      formData.password === formData.confirm_password
        ? "Successfully signed up"
        : "Passwords do not match";

    console.log(verifyPassword);

    console.log(
      formData.newsletter && "Thanks for signing up for our newsletter!"
    );
  }

  return (
    <div className="ml-5 mt-5">
      <h1 className="text-2xl font-bold font-sans">Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          className="border-2 mt-2"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="border-2 mt-2"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          className="border-2 mt-2"
          name="confirm_password"
          onChange={handleChange}
          value={formData.confirm_password}
        />
        <span className="pl-2">
          {formData.password !== formData.confirm_password &&
            "Passwords do not match"}
        </span>
        <br />
        <input
          type="checkbox"
          name="newsletter"
          id="newsletter"
          className="mt-3"
          onChange={handleChange}
          checked={formData.newsletter}
        />
        <label htmlFor="newsletter" className="ml-2">
          I want to join the newsletter
        </label>
        <br />
        <button className="border p-2 bg-blue-300 mt-2 w-28">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
