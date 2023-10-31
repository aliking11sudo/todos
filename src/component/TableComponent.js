import { useState } from "react";

const TableComponent = () => {
  const [fName, setFname] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState("");
  let id = 1;
  const [usersList, setUserList] = useState([]);
 
  const HandleSave = (e) => {
    let idl = id + usersList.length;
e.preventDefault();
    e.preventDefault();
    setUserList((prevState) => [...prevState, { idl, fName, lName, age }]);
  };
  const deleteByIndex = index => {
    setUserList(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }
  return (
    <div className="container-fluid  vh-100">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body bg-dark-subtle shadow border-4">
              <form className=" d-flex  flex-column text-warning-emphasis ">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label fs-2 ">
                    Job Title
                  </label>
                  <input
                    type="email"
                    className="form-control bg-black text-warning"
                    id="exampleInputEmail1"
                    value={fName}
                    onChange={(e) => {
                      setFname(e.target.value);
                    }}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label fs-2 "
                  >
                    job location
                  </label>
                  <input
                    type="text"
                    className="form-control bg-black text-warning"
                    id="exampleInputPassword1"
                    value={lName}
                    onChange={(e) => {
                      setLName(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3 d-flex">
                  <label for="exampleInputEmail1" className="form-label fs-2 ">
                    day
                  </label>
                  <input
                    type="text"
                    className="form-control bg-black text-warning"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={age}
                    placeholder="2023/10/30"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                  />
                </div>
                <div className=" d-flex   flex-column  align-items-center">
                  <button
                    onClick={HandleSave}
                    className="btn btn-outline-warning px-5 py-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-arrow-right-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-5 shadow">
          <div className="card">
            <div className="card-body">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">remove</th>
                    <th scope="col">#</th>
                    <th scope="col">job</th>
                    <th scope="col">location</th>
                    <th scope="col">time(date)</th>
                  </tr>
                </thead>
                <tbody className="">
                  {usersList.map((item,index) => (
                    <tr key={item.id} id="table" className="tabl d-">
                      <a href="#" onClick={() => deleteByIndex(index)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          class="bi bi-x-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </a>
                      <th>{item.idl}</th>
                      <td>{item.fName}</td>
                      <td>{item.lName}</td>
                      <td>{item.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TableComponent;
