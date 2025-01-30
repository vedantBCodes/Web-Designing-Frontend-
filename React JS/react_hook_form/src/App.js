import './App.css';
import { useForm } from 'react-hook-form';


function App() {
  const {
     register,
      handleSubmit, 
      // watch, 
      formState: { errors }
     } = useForm();
      function onSubmit(data)
      {
        console.log('Form submitted successfuly',data);
      }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>FirstName :</label>
          <input {...register('FirstName :' ,
             {required:true,
             minLength:{value:3, message:'MinLenght must be greater than 3'},
             maxLength:10
             })}/>
             {errors.FirstName && <p>{errors.FirstName.message}</p>}
        </div> <br/> 
        <div>
          <label>MiddleName :</label>
          <input {...register('MiddleName :')}/>
        </div> <br/> 
        <div>
          <label>LastName :</label>
          <input {...register('LastNname :')}/>
        </div> <br/> 
        <div>
          <input type="submit"/>
        </div>
      </form>
      </div>
    
  );
}

export default App;

