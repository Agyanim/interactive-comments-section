import {useState} from 'react'
type GradeProps={
  score:number
}

const GradeCounter = ({score}:GradeProps) => {
    const [grade,setGrade]=useState(0)
  return (
    <div className='flex flex-row lg:flex-col font-bold px-2 gap-4 bg-LightGray rounded w-[5rem] lg:w-[2rem]'>
        <button className='text-LightGrayishBlue' onClick={()=>setGrade(prev=> prev+1)}>+</button>
        <p className=' text-ModerateBlue '>{score}</p>
        <button className='text-LightGrayishBlue' onClick={()=>{if( grade>0){setGrade(prev=> prev-1)}}}>-</button>
    </div>
  )
}

export default GradeCounter