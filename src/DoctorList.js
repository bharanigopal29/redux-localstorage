import React, { useState } from "react";

const DoctorList = () => {
  const data = [
    {
      node: {
        name: "Medical Oncology",
        slug: "medical-oncology",
        ourDoctors: {
          nodes: [
            {
              title: "Dr M A Raja",
              slug: "dr-m-a-raja",
            },
            {
              title: "Dr. N Syed Ismail",
              slug: "dr-n-syed-ismail",
            },
          ],
        },
      },
    },
    {
      node: {
        name: "Surgical Oncology",
        slug: "surgical-oncology",
        ourDoctors: {
          nodes: [
            {
              title: "Dr Sivakumar Mahalingam",
              slug: "dr-sivakumar-mahalingam",
            },
            {
              title: "Dr Sivaram Ganesamoni",
              slug: "dr-sivaram-ganesamoni",
            },
            {
              title: "Dr Sivaram Ganesamoni 5",
              slug: "dr-sivaram-ganesamoni",
            },
          ],
        },
      },
    },
  ];

  const [filterData, setFilterData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const filterDoctors = (title) => {
    const filteredData = data.map((department) => {
      const filteredDoctors = department?.node?.ourDoctors?.nodes?.filter(
        (doctor) => doctor?.title?.toLowerCase()?.includes(title?.toLowerCase())
      );

      if (filteredDoctors?.length > 0)
        return {
          node: {
            ...department?.node,
            ourDoctors: {
              nodes: filteredDoctors,
            },
          },
        };
    });

    setFilterData(filteredData);
  };

  return (
    <div>
      <label htmlFor="dropdown">Select a department:</label>
      <select
        id="dropdown"
        onChange={handleDropdownChange}
        value={selectedOption}
      >
        <option value="">Select a department</option>
        {data?.length > 0 &&
          data?.map((item, i) => (
            <option key={i} value={item?.node?.slug}>
              {item?.node?.name}
            </option>
          ))}
      </select>

      {selectedOption?.length > 0 && (
        <div>
          <h2>Doctors in {selectedOption} department:</h2>
          <ul>
            {data?.length > 0 &&
              data
                ?.find((item) => item?.node?.slug === selectedOption)
                ?.node?.ourDoctors?.nodes?.map((doctor, i) => (
                  <li key={i}>{doctor?.title}</li>
                ))}
          </ul>
        </div>
      )}

      <label htmlFor="filterInput">Filter Doctors: </label>
      <input
        type="text"
        id="filterInput"
        onChange={(e) => filterDoctors(e?.target?.value)}
      />

      <ul>
        {filterData?.length > 0 &&
          filterData?.map((department, i) => (
            <li key={i}>
              <strong>{department?.node?.name}</strong>
              <ul>
                {department?.node?.ourDoctors?.nodes?.map((doctor, j) => (
                  <li key={j}>{doctor?.title}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DoctorList;

//   const handleSubmit = async (values) => {
//     await axios.post("http://192.168.1.24:5000/api/login", values)
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
//         const { token } = response.data;
//       if (token) {
//         localStorage.setItem("token", token);

//     console.log(values);
//   };

// // MyComponent.js
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateEmail, updatePassword, updateRole, selectUser } from './userSlice';
// import { useFormik } from 'formik';

// const MyComponent = () => {
//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   const formik = useFormik({
//     initialValues: {
//       email: user.userinfo.email,
//       password: user.userinfo.password,
//       role: user.userinfo.role,
//     },
//     onSubmit: (values) => {
//       dispatch(updateEmail(values.email));
//       dispatch(updatePassword(values.password));
//       dispatch(updateRole(values.role));
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div>
//         <label>Email:</label>
//         <input type="text" name="email" value={formik.values.email} onChange={formik.handleChange} />
//       </div>

//       <div>
//         <label>Password:</label>
//         <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
//       </div>

//       <div>
//         <label>Role:</label>
//         <select name="role" value={formik.values.role} onChange={formik.handleChange}>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyComponent;

