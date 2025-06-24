import axios from "axios";
import toast from "react-hot-toast";

const AddCourse = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { ...formEntries } = Object.fromEntries(formData.entries());
    console.log(formEntries);

    axios
      .post("http://localhost:3000/courses", formEntries)
      .then((success) => {
        console.log("data after pass the database", success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-4">
      <input
        name="title"
        placeholder="Course Title"
        className="input input-bordered w-full"
      />
      <input
        name="description"
        placeholder="Short Description"
        className="input input-bordered w-full"
      />
      <input
        name="image"
        placeholder="Image URL"
        className="input input-bordered w-full"
      />
      <input
        name="duration"
        placeholder="Duration"
        className="input input-bordered w-full"
      />
      <button type="submit" className="btn btn-primary w-full">
        Add Course
      </button>
    </form>
  );
};

export default AddCourse;
