
import './App.css'
import ReuseableForm from './component/ReuseableForm/ReuseableForm'
// import HookForm from './component/HookForm/HookForm'
// import RefForm from './component/RefForm/RefForm'
// import SimpleForm from './component/SimpleForm/SimpleForm'
// import StateFulForm from './component/StateFulForm/StateFulForm'

function App() {
  const handleSignUpSubmit= data =>{
    console.log(data)
}

const handleProUpdateSubmit = data =>{
  console.log(data,'update profile')
}
 

  return (
    <>
    
      <h1>Vite + React</h1>

      {/* <SimpleForm></SimpleForm> */}

      {/* <StateFulForm></StateFulForm> */}

      {/* <RefForm></RefForm> */}

      {/* <HookForm></HookForm> */}

      <ReuseableForm formTitle={'Sign Up'} handleSubmit={handleSignUpSubmit}
      >

        <div>
          <h2>Sign Up</h2>
          <p>Sign up here</p>
        </div>
      </ReuseableForm>
      <ReuseableForm formTitle={'Update Profile'} handleSubmit={handleProUpdateSubmit} submitBtnText='Update Profile'>
        <div>
          <h2>Update Profile</h2>
          <p>Update this here</p>
        </div>
      </ReuseableForm>
     
    </>
  )
}

export default App
