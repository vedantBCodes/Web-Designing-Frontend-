function UserInputForm({ newUserData, setNewUserData, handleSubmit, isEditing }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

 return (
    <div style={formContainer}>
      <h2 style={headingStyle}>{isEditing ? 'Edit Student' : 'Student Registration'}</h2>

      <form onSubmit={handleSubmit}>
        <div style={fieldGroup}>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={newUserData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            style={inputStyle}
            required
          />
        </div>

        <div style={fieldGroup}>
          <label style={labelStyle}>Phone No.:</label>
          <input
            type="number"
            name="phone"
            value={newUserData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            style={inputStyle}
            required
          />
        </div>

        <div style={fieldGroup}>
          <label style={labelStyle}>Age:</label>
          <input
            type="number"
            name="age"
            value={newUserData.age}
            onChange={handleChange}
            placeholder="Enter Age"
            style={inputStyle}
            required
          />
        </div>

        <div style={fieldGroup}>
          <label style={labelStyle}>Gender:</label>
         <select
            name="gender"
            value={newUserData.gender}
            onChange={handleChange}
            style={inputStyle}
            required
          >
  <option value="">Select Gender</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>

        </div>

        <button type="submit" style={buttonStyle}>
          {isEditing ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

// Inline styles
const formContainer = {
  maxWidth: '400px',
  margin: '30px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px'
};

const fieldGroup = {
  marginBottom: '15px'
};

const labelStyle = {
  display: 'block',
  marginBottom: '5px',
  fontWeight: 'bold'
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '14px'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer'
};

export default UserInputForm;
