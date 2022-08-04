export default function Layout(props) {
  return (
    <div className="bg-white text-black md:p-0 md:px-20 flex md:flex-row md:h-screen flex-col-reverse p-5 md:justify-between items-center">
      <div
        id="left"
        className={"md:w-96 flex flex-col w-full " + props.className}
      >
        {props.children}
      </div>
      <img src="/iphone.png" alt="" className="md:h-5/6 h-96 mb-12 md:mb-0" />
    </div>
  );
}
