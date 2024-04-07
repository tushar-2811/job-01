import TypewriterComponent from 'typewriter-effect';

const LandingHero = () => {
  return (
    <div className='text-white font-mono font-bold py-36 text-center space-y-8'>
       
    <div className='text-4xl sm:text-5xl  md:text-6xl lg:text-7xl font text-black font-extrabold space-y-5'>
     <h1> Job At One Go </h1>
     <div className='text-transparent bg-clip-text bg-gradient-to-r 
      from-purple-400 to-sky-600  '>
         
         <TypewriterComponent 
            options={{
             strings : [
                 " Platform for Students",
                
             ],
             autoStart : true,
             loop : true
            }}
         />

     </div>

    </div>

    <div className='text-sm md:text-2xl font-medium text-zinc-500'>
       Empowering Students by providing them one stop solution
    </div>

    <div className='text-sm md:text-xl text-transparent bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600 '>
           Because every Skill matters.
    </div>

 </div>
  )
}

export default LandingHero
