import { Link } from "react-router-dom";


export default function Menu() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Link to="/education/general">Item 1</Link>
        <a href="">Item 2</a>
        <a href="">Item 3</a>
      </div>
    </>
  )
}