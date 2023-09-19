import { useForm } from "React-Hook-Form";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className=" text-center mt-5" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">UserName : </label>
      <input className=" ms-1" defaultValue="" {...register("example")} />
      <br />
      <br />
      <label htmlFor="">Gender : </label>
      <input className=" ms-2" type="radio" name="gen" id="" />
      Male
      <input type="radio" name="gen" id="" />
      Female
      <input type="radio" name="gen" id="" />
      Others
      <br />
      <br />
      <label htmlFor="">Hobbies : </label>
      <input className="ms-2" type="checkbox" name="" id="" />
      Cricket
      <input type="checkbox" name="" id="" />
      Music
      <input type="checkbox" name="" id="" />
      Movies
      <input type="checkbox" name="" id="" />
      Hockey
      <br />
      <br />
      <label htmlFor="">Password :</label>
      <input
        className=" ms-1"
        {...register("exampleRequired", { required: true })}
      />
      <br />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <input type="submit" />
    </form>
  );
}
