import React, { useEffect, useState } from 'react';
import '../App.css';
import UserInputForm from './UserInputForm';

const Student = () => {
  const [students, setStudents] = useState([]);
  const [newUserData, setNewUserData] = useState({
    name: '',
    phone: '',
    age: '',
    gender: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // NEW

  useEffect(() => {
    fetch('/studentData.json')
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error('Error fetching students:', err));
  }, []);

  const handleDelete = (currentStudent) => {
    setStudents(prevStudents =>
      prevStudents.filter(student => student !== currentStudent)
    );
  };

  const handleShowForm = () => {
    setShowForm(true);
    setNewUserData({ name: '', phone: '', age: '', gender: '' });
    setEditingIndex(null); // reset edit mode
  };

  const handleEdit = (student, index) => {
    setShowForm(true);
    setNewUserData(student);
    setEditingIndex(index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      // Update student
      const updatedStudents = [...students];
      updatedStudents[editingIndex] = { ...newUserData };
      setStudents(updatedStudents);
    } else {
      // Add new student
      const newStudent = {
        ...newUserData,
        id: students.length + 1
      };
      setStudents([...students, newStudent]);
    }

    // Reset form and state
    setNewUserData({ name: '', phone: '', age: '', gender: '' });
    setEditingIndex(null);
    setShowForm(false);
  };

  return (
    <>
      <h1>Student Data</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th><h3>Name</h3></th>
            <th><h3>Phone Number</h3></th>
            <th><h3>Age</h3></th>
            <th><h3>Gender</h3></th>
            <th><h3>Actions</h3></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                <button onClick={() => handleEdit(student, index)}>Edit</button>&nbsp;
                <button onClick={() => handleDelete(student)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <button onClick={handleShowForm}>
        {showForm ? 'Close Form' : 'Add New Student'}
      </button>
      {showForm && (
        <UserInputForm
          newUserData={newUserData}
          setNewUserData={setNewUserData}
          handleSubmit={handleSubmit}
          isEditing={editingIndex !== null}
        />
      )}
    </>
  );
};

export default Student;
