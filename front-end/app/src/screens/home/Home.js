
import Course from '../course/Course';
import { Usefetch } from '../../hooks/Usefetch';
import './Home.css'


export default function Home() {

  const {data:course,error,isloading}=Usefetch("http://localhost:8000/course")


  return (
    <>
    <div className='details'>
      {
        course && course.map((course)=>{
          return <Course course={course} key={course.id}/>
        })
      }
      </div>
      {
       error && <h3>{error}</h3>

      }
      {
        isloading && <h3>Loading....</h3>
      }
    </>
  )
}

