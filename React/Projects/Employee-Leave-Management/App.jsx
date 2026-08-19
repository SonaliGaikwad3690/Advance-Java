import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [leaves, setLeaves] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [leaveType, setLeaveType] = useState("All");
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);


  // GET API
  useEffect(() => {
    axios.get("http://localhost:3000/leaves")
      .then(({ data }) => {
        setLeaves(data);
        setLoading(false);
      });
  }, []);


  // Search + Filter
  const filteredLeaves = leaves.filter((leave) =>
    leave.employeeName.toLowerCase().includes(search.toLowerCase()) &&
    (department === "All" || leave.department === department) &&
    (leaveType === "All" || leave.leaveType === leaveType) &&
    (status === "All" || leave.status === status)
  );


  // Summary
  const total = leaves.length;

  const pending = leaves.filter(
    x => x.status === "Pending"
  ).length;

  const approved = leaves.filter(
    x => x.status === "Approved"
  ).length;

  const rejected = leaves.filter(
    x => x.status === "Rejected"
  ).length;

  const approvedDays = leaves
    .filter(x => x.status === "Approved")
    .reduce((sum, x) => sum + x.days, 0);

  const pendingDays = leaves
    .filter(x => x.status === "Pending")
    .reduce((sum, x) => sum + x.days, 0);


  // Balance
  const balance = (leave) => {

    if (leave.days > leave.availableBalance)
      return "Insufficient Leave Balance";

    if (leave.availableBalance <= 2)
      return "Low Leave Balance";

    return "Sufficient Leave Balance";
  };


  // Long Leave
  const longLeave = (leave) => {

    if (leave.days > 5)
      return "Manager Approval Required";

    return "Normal Leave";
  };


  // Policy
  const policy = (leave) => {

    let max = 999;

    if (leave.leaveType === "Sick Leave")
      max = 5;

    if (leave.leaveType === "Casual Leave")
      max = 3;

    if (leave.leaveType === "Work From Home")
      max = 2;

    return leave.days > max
      ? "Policy Limit Exceeded"
      : "Within Policy";
  };


  if (loading)
    return <h2>Loading...</h2>;


  return (
    <div>

      <center>
        <h1>Employee Leave Analytics Dashboard</h1>
      </center>


      <h3>Total Requests: {total}</h3>
      <h3>Pending Requests: {pending}</h3>
      <h3>Approved Requests: {approved}</h3>
      <h3>Rejected Requests: {rejected}</h3>
      <h3>Approved Leave Days: {approvedDays}</h3>
      <h3>Pending Leave Days: {pendingDays}</h3>


      <hr />


      {/* Search */} 

      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      {/* Department */}

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option>All</option>
        <option>Development</option>
        <option>Testing</option>
        <option>HR</option>
        <option>Sales</option>
        <option>Support</option>
      </select>


      {/* Leave Type */}

      <select
        value={leaveType}
        onChange={(e) => setLeaveType(e.target.value)}
      >
        <option>All</option>
        <option>Sick Leave</option>
        <option>Casual Leave</option>
        <option>Earned Leave</option>
        <option>Work From Home</option>
      </select>


      {/* Status */}

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>All</option>
        <option>Pending</option>
        <option>Approved</option>
        <option>Rejected</option>
      </select>


      <br /><br />


      {/* Table */}

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Employee</th>
            <th>Department</th>
            <th>Leave Type</th>
            <th>Days</th>
            <th>Balance</th>
            <th>Status</th>
            <th>Balance Check</th>
            <th>Long Leave</th>
            <th>Policy</th>
          </tr>
        </thead>


        <tbody>

          {filteredLeaves.map((leave) => (

            <tr key={leave.id}>

              <td>{leave.employeeName}</td>
              <td>{leave.department}</td>
              <td>{leave.leaveType}</td>
              <td>{leave.days}</td>
              <td>{leave.availableBalance}</td>
              <td>{leave.status}</td>

              <td>{balance(leave)}</td>

              <td>{longLeave(leave)}</td>

              <td>{policy(leave)}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default App;
