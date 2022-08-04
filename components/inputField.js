export default function InputField(props) {
  return (
    <input
      type="text"
      className="
        form-control
        block
        w-full
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-gray-300
        rounded-xl
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      required="true"
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.setValue(e.target.value)}
    />
  );
}
